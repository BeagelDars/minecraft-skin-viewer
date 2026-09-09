import {
  MinecraftProfile,
  NameHistoryEntry,
  CapeInfo,
  SkinModel
} from '../types/minecraft';

function formatUuid(rawId: string): string {
  if (rawId.length !== 32) return rawId;
  return `${rawId.slice(0, 8)}-${rawId.slice(8, 12)}-${rawId.slice(12, 16)}-${rawId.slice(16, 20)}-${rawId.slice(20)}`;
}

function unformatUuid(uuid: string): string {
  return uuid.replace(/-/g, '').toLowerCase();
}

function formatDate(dateInput: string | number): string {
  try {
    const d = new Date(dateInput);
    if (isNaN(d.getTime())) return String(dateInput);
    return d.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  } catch {
    return String(dateInput);
  }
}

// Check if player has an OptiFine cape
export function checkOptiFineCape(username: string): Promise<string | null> {
  return new Promise((resolve) => {
    const img = new Image();
    const capeUrl = `https://optifine.net/capes/${encodeURIComponent(username)}.png`;

    img.onload = () => {
      if (img.naturalWidth > 0 && img.naturalHeight > 0) {
        resolve(capeUrl);
      } else {
        resolve(null);
      }
    };
    img.onerror = () => resolve(null);
    img.src = capeUrl;

    setTimeout(() => resolve(null), 2500);
  });
}

export async function fetchPlayerProfile(query: string): Promise<MinecraftProfile> {
  const trimmed = query.trim();
  if (!trimmed) {
    throw new Error('Please enter a player username or UUID');
  }

  let profile: MinecraftProfile | null = null;
  let lastError = '';

  // 1. Primary: Ashcon Mojang API
  try {
    const res = await fetch(`https://api.ashcon.app/mojang/v2/user/${encodeURIComponent(trimmed)}`, {
      headers: { Accept: 'application/json' },
      signal: AbortSignal.timeout(5000)
    });

    if (res.status === 404) {
      throw new Error(`Player "${trimmed}" not found`);
    }

    if (res.ok) {
      const data = await res.json();
      const rawId = unformatUuid(data.uuid);
      const uuid = formatUuid(rawId);
      const model: SkinModel = data.textures?.slim ? 'slim' : 'classic';

      const nameHistory: NameHistoryEntry[] = Array.isArray(data.username_history)
        ? data.username_history.map((entry: { username: string; changed_at?: string }, index: number) => ({
            username: entry.username,
            changedAtDate: entry.changed_at ? formatDate(entry.changed_at) : undefined,
            isOriginal: index === 0
          }))
        : [{ username: data.username, isOriginal: true }];

      const capes: CapeInfo[] = [];

      // Official Mojang Cape
      if (data.textures?.cape?.url) {
        capes.push({
          id: 'mojang',
          name: 'Official Mojang Cape',
          provider: 'Mojang',
          textureUrl: data.textures.cape.data
            ? `data:image/png;base64,${data.textures.cape.data}`
            : data.textures.cape.url,
          previewUrl: data.textures.cape.url
        });
      }

      profile = {
        username: data.username,
        uuid,
        rawId,
        model,
        createdAt: data.created_at ? formatDate(data.created_at) : null,
        textures: {
          skinUrl: data.textures?.skin?.url || `https://crafthead.net/skin/${uuid}`,
          skinDataUri: data.textures?.skin?.data ? `data:image/png;base64,${data.textures.skin.data}` : undefined,
          capeUrl: data.textures?.cape?.url || null,
          capeDataUri: data.textures?.cape?.data ? `data:image/png;base64,${data.textures.cape.data}` : null,
          isCustomSkin: !!data.textures?.custom
        },
        nameHistory,
        capes,
        cachedAt: Date.now()
      };
    }
  } catch (err: unknown) {
    lastError = err instanceof Error ? err.message : 'Failed to reach Mojang service';
  }

  // 2. Fallback: PlayerDB API
  if (!profile) {
    try {
      const res = await fetch(`https://playerdb.co/api/player/minecraft/${encodeURIComponent(trimmed)}`, {
        signal: AbortSignal.timeout(5000)
      });

      if (res.status === 404) {
        throw new Error(`Player "${trimmed}" not found`);
      }

      const pJson = await res.json();
      if (pJson.success && pJson.data?.player) {
        const p = pJson.data.player;
        const rawId = p.raw_id || unformatUuid(p.id);
        const uuid = p.id || formatUuid(rawId);

        let model: SkinModel = 'classic';
        let capeUrl: string | null = p.cape_texture || null;

        if (Array.isArray(p.properties)) {
          const texProp = p.properties.find((prop: { name: string; value: string }) => prop.name === 'textures');
          if (texProp && texProp.value) {
            try {
              const decoded = JSON.parse(atob(texProp.value));
              if (decoded.textures?.SKIN?.metadata?.model === 'slim') {
                model = 'slim';
              }
              if (decoded.textures?.CAPE?.url) {
                capeUrl = decoded.textures.CAPE.url;
              }
            } catch {
              // ignore decode error
            }
          }
        }

        const capes: CapeInfo[] = [];
        if (capeUrl) {
          capes.push({
            id: 'mojang',
            name: 'Official Mojang Cape',
            provider: 'Mojang',
            textureUrl: capeUrl,
            previewUrl: capeUrl
          });
        }

        profile = {
          username: p.username,
          uuid,
          rawId,
          model,
          createdAt: null,
          textures: {
            skinUrl: p.skin_texture || `https://crafthead.net/skin/${uuid}`,
            capeUrl,
            isCustomSkin: true
          },
          nameHistory: [{ username: p.username, isOriginal: true }],
          capes,
          cachedAt: Date.now()
        };
      } else {
        throw new Error(pJson.message || `Player "${trimmed}" not found`);
      }
    } catch (err: unknown) {
      if (!lastError) {
        lastError = err instanceof Error ? err.message : 'Error fetching player';
      }
    }
  }

  if (!profile) {
    throw new Error(lastError || `Player "${trimmed}" not found. Please check spelling.`);
  }

  // Check OptiFine cape in parallel
  try {
    const ofCape = await checkOptiFineCape(profile.username);
    if (ofCape) {
      profile.capes.push({
        id: 'optifine',
        name: 'OptiFine Cape',
        provider: 'OptiFine',
        textureUrl: ofCape,
        previewUrl: ofCape
      });
    }
  } catch {
    // Non-fatal
  }

  return profile;
}
