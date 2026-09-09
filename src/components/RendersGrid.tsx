import React, { useState } from 'react';
import { Image as ImageIcon, Download, ExternalLink } from 'lucide-react';

interface RendersGridProps {
  uuid: string;
  username: string;
}

interface RenderOption {
  key: string;
  label: string;
  url: string;
}

export const RendersGrid: React.FC<RendersGridProps> = ({ uuid, username }) => {
  const renders: RenderOption[] = [
    { key: 'full', label: '3D Full Body', url: `https://visage.surgeplay.com/full/512/${uuid}` },
    { key: 'bust', label: '3D Bust', url: `https://visage.surgeplay.com/bust/512/${uuid}` },
    { key: 'front', label: 'Front View', url: `https://visage.surgeplay.com/front/512/${uuid}` },
    { key: 'back', label: 'Back View', url: `https://visage.surgeplay.com/back/512/${uuid}` },
    { key: 'face', label: 'Head Avatar', url: `https://visage.surgeplay.com/face/256/${uuid}` },
  ];

  const [activeKey, setActiveKey] = useState<string>('full');
  const activeRender = renders.find((r) => r.key === activeKey) || renders[0];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-4 h-4 text-slate-500" />
          <h3 className="text-sm font-semibold text-slate-800">2D Renders</h3>
        </div>

        {/* View Switcher Tabs */}
        <div className="inline-flex bg-slate-100 p-0.5 rounded-lg text-xs">
          {renders.map((render) => (
            <button
              key={render.key}
              onClick={() => setActiveKey(render.key)}
              className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                activeKey === render.key
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {render.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Preview */}
      <div className="relative w-full h-64 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center p-4">
        <img
          src={activeRender.url}
          alt={activeRender.label}
          className="max-h-full max-w-full object-contain filter drop-shadow-md"
        />

        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          <a
            href={activeRender.url}
            download={`${username}-${activeRender.key}.png`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 shadow-xs transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            Download PNG
          </a>
        </div>
      </div>
    </div>
  );
};
