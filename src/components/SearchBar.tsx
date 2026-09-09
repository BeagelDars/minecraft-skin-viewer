import React, { useState } from 'react';
import { Search, X, ArrowRight, Clock } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
  recentSearches: string[];
  onClearRecent: () => void;
}

const FEATURED_PLAYERS = ['Technoblade', 'Notch', 'MumboJumbo', 'Grian', 'jeb_', 'Dream'];

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  isLoading,
  recentSearches,
  onClearRecent
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue.trim());
    }
  };

  const handleSelectTag = (name: string) => {
    setInputValue(name);
    onSearch(name);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-3">
      <form onSubmit={handleSubmit} className="relative flex items-center">
        <div className="absolute left-3.5 text-slate-400 pointer-events-none">
          <Search className="w-4 h-4" />
        </div>

        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Player username or UUID"
          autoFocus
          className="w-full pl-10 pr-24 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm shadow-xs focus:outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100 transition-all font-sans"
        />

        <div className="absolute right-2 flex items-center gap-1">
          {inputValue && (
            <button
              type="button"
              onClick={() => setInputValue('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          <button
            type="submit"
            disabled={isLoading || !inputValue.trim()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-medium hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Searching...' : 'Search'}
            {!isLoading && <ArrowRight className="w-3.5 h-3.5" />}
          </button>
        </div>
      </form>

      {/* Suggested accounts & recent queries */}
      <div className="flex flex-wrap items-center gap-1.5 text-xs">
        <span className="text-slate-400 font-medium mr-1">Popular:</span>
        {FEATURED_PLAYERS.map((name) => (
          <button
            key={name}
            onClick={() => handleSelectTag(name)}
            className="px-2.5 py-1 bg-white hover:bg-slate-100 border border-slate-200 rounded-md text-slate-600 font-medium transition-colors cursor-pointer"
          >
            {name}
          </button>
        ))}

        {recentSearches.length > 0 && (
          <>
            <span className="text-slate-300 mx-1">|</span>
            <div className="inline-flex items-center gap-1 text-slate-400">
              <Clock className="w-3 h-3" />
            </div>
            {recentSearches.slice(0, 4).map((name) => (
              <button
                key={name}
                onClick={() => handleSelectTag(name)}
                className="px-2 py-0.5 bg-slate-100 hover:bg-slate-200 rounded text-slate-500 font-medium transition-colors"
              >
                {name}
              </button>
            ))}
            <button
              onClick={onClearRecent}
              title="Clear recent"
              className="text-slate-400 hover:text-slate-600 text-[11px] underline ml-1"
            >
              Clear
            </button>
          </>
        )}
      </div>
    </div>
  );
};
