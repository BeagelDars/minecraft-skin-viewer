export type SkinModel = 'classic' | 'slim';

export interface NameHistoryEntry {
  username: string;
  changedAtDate?: string;
  isOriginal?: boolean;
}

export interface CapeInfo {
  id: string;
  name: string;
  provider: 'Mojang' | 'OptiFine';
  textureUrl: string;
  previewUrl?: string;
}

export interface MinecraftTextures {
  skinUrl: string;
  skinDataUri?: string;
  capeUrl?: string | null;
  capeDataUri?: string | null;
  isCustomSkin: boolean;
}

export interface MinecraftProfile {
  username: string;
  uuid: string;
  rawId: string;
  model: SkinModel;
  createdAt?: string | null;
  textures: MinecraftTextures;
  nameHistory: NameHistoryEntry[];
  capes: CapeInfo[];
  cachedAt?: number;
}
