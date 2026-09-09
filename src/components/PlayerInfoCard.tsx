import React, { useState } from 'react';
import { Copy, Check, Download, ExternalLink, Calendar, User } from 'lucide-react';
import { MinecraftProfile } from '../types/minecraft';

interface PlayerInfoCardProps {
  profile: MinecraftProfile;
}

export const PlayerInfoCard: React.FC<PlayerInfoCardProps> = ({ profile }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1800);
  };

  const handleDownloadSkin = () => {
    const a = document.createElement('a');
    a.href = profile.textures.skinDataUri || profile.textures.skinUrl;
    a.download = `${profile.username}-skin.png`;
    a.target = '_blank';
    a.click();
  };

  const handleDownloadCape = () => {
    if (!profile.textures.capeUrl && !profile.textures.capeDataUri) return;
    const a = document.createElement('a');
    a.href = profile.textures.capeDataUri || profile.textures.capeUrl || '';
    a.download = `${profile.username}-cape.png`;
    a.target = '_blank';
    a.click();
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <img
            src={`https://visage.surgeplay.com/face/64/${profile.uuid}`}
            alt=""
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://crafthead.net/avatar/${profile.uuid}`;
            }}
            className="w-11 h-11 rounded-lg border border-slate-200 bg-slate-100 image-rendering-pixelated"
          />
          <div>
            <h2 className="text-lg font-bold tracking-tight text-slate-900 font-sans">
              {profile.username}
            </h2>
            <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-500">
              <span className="font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-600 font-medium">
                {profile.model === 'slim' ? 'Slim (Alex)' : 'Classic (Steve)'}
              </span>
              {profile.createdAt && (
                <>
                  <span>•</span>
                  <span>Registered {profile.createdAt}</span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={handleDownloadSkin}
            title="Download skin texture"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-lg text-xs font-medium shadow-xs transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            Skin
          </button>

          {profile.textures.capeUrl && (
            <button
              onClick={handleDownloadCape}
              title="Download cape texture"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-lg text-xs font-medium shadow-xs transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-slate-500" />
              Cape
            </button>
          )}
        </div>
      </div>

      {/* UUIDs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-2.5 flex items-center justify-between">
          <div className="min-w-0 pr-2">
            <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
              UUID
            </div>
            <div className="text-xs font-mono text-slate-800 truncate select-all">
              {profile.uuid}
            </div>
          </div>
          <button
            onClick={() => copyToClipboard(profile.uuid, 'uuid')}
            className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-white rounded transition-colors"
            title="Copy UUID"
          >
            {copiedKey === 'uuid' ? (
              <Check className="w-3.5 h-3.5 text-emerald-600" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-2.5 flex items-center justify-between">
          <div className="min-w-0 pr-2">
            <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
              Raw UUID
            </div>
            <div className="text-xs font-mono text-slate-800 truncate select-all">
              {profile.rawId}
            </div>
          </div>
          <button
            onClick={() => copyToClipboard(profile.rawId, 'rawId')}
            className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-white rounded transition-colors"
            title="Copy raw UUID"
          >
            {copiedKey === 'rawId' ? (
              <Check className="w-3.5 h-3.5 text-emerald-600" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>

      {/* Skin Texture Strip */}
      <div className="pt-1 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
        <div className="flex items-center gap-2.5">
          <span className="font-medium text-slate-600">Texture:</span>
          <img
            src={profile.textures.skinDataUri || profile.textures.skinUrl}
            alt=""
            className="w-14 h-7 object-contain bg-slate-100 border border-slate-200 rounded image-rendering-pixelated"
          />
        </div>
        {profile.textures.skinUrl && (
          <a
            href={profile.textures.skinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-800 hover:underline"
          >
            Mojang Texture Source
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
};
