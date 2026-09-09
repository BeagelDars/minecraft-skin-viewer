import React from 'react';
import { History, Tag } from 'lucide-react';
import { NameHistoryEntry } from '../types/minecraft';

interface NameHistoryProps {
  history: NameHistoryEntry[];
}

export const NameHistory: React.FC<NameHistoryProps> = ({ history }) => {
  if (!history || history.length <= 1) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <History className="w-4 h-4 text-slate-500" />
          <h3 className="text-sm font-semibold text-slate-800">Name History</h3>
        </div>
        <p className="text-xs text-slate-500">
          No previous username changes found for this account.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <History className="w-4 h-4 text-slate-500" />
          <h3 className="text-sm font-semibold text-slate-800">Name History</h3>
        </div>
        <span className="text-xs text-slate-400 font-mono">
          {history.length} records
        </span>
      </div>

      <div className="divide-y divide-slate-100 max-h-60 overflow-y-auto pr-1">
        {history.map((item, index) => (
          <div
            key={`${item.username}-${index}`}
            className="py-2.5 flex items-center justify-between text-xs"
          >
            <div className="flex items-center gap-2">
              <span className="font-medium text-slate-800 font-sans">
                {item.username}
              </span>
              {item.isOriginal && (
                <span className="px-1.5 py-0.5 text-[10px] uppercase font-semibold tracking-wider bg-slate-100 text-slate-600 rounded">
                  Original
                </span>
              )}
            </div>

            <span className="text-slate-400 font-mono text-[11px]">
              {item.changedAtDate || (item.isOriginal ? 'Account Created' : 'Initial')}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
