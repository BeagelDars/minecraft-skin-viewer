import React from 'react';
import { Shield, Download, Check } from 'lucide-react';
import { CapeInfo } from '../types/minecraft';

interface CapesGalleryProps {
  capes: CapeInfo[];
  selectedCapeUrl?: string | null;
  onSelectCape: (capeUrl: string) => void;
}

export const CapesGallery: React.FC<CapesGalleryProps> = ({
  capes,
  selectedCapeUrl,
  onSelectCape
}) => {
  if (!capes || capes.length === 0) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <Shield className="w-4 h-4 text-slate-500" />
          <h3 className="text-sm font-semibold text-slate-800">Capes</h3>
        </div>
        <p className="text-xs text-slate-500">
          No official or cosmetic capes detected for this player.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-slate-500" />
          <h3 className="text-sm font-semibold text-slate-800">Capes</h3>
        </div>
        <span className="text-xs text-slate-400 font-mono">
          {capes.length} detected
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {capes.map((cape) => {
          const isSelected = selectedCapeUrl === cape.textureUrl;
          return (
            <div
              key={cape.id}
              className={`p-3 rounded-lg border transition-all flex items-center justify-between ${
                isSelected
                  ? 'border-slate-800 bg-slate-50/70 shadow-xs'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-14 bg-slate-100 border border-slate-200 rounded flex items-center justify-center overflow-hidden">
                  <img
                    src={cape.previewUrl || cape.textureUrl}
                    alt=""
                    className="max-w-full max-h-full object-contain image-rendering-pixelated"
                  />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900">{cape.name}</div>
                  <div className="text-[11px] text-slate-500">{cape.provider}</div>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => onSelectCape(cape.textureUrl)}
                  title="View on 3D model"
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                    isSelected
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {isSelected ? 'Equipped' : 'Equip'}
                </button>

                <a
                  href={cape.textureUrl}
                  download={`${cape.id}-cape.png`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Download cape image"
                  className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
