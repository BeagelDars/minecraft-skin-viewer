import React, { useState, useEffect } from 'react';
import { Box, AlertCircle } from 'lucide-react';
import { MinecraftProfile } from './types/minecraft';
import { fetchPlayerProfile } from './services/minecraftApi';
import { SearchBar } from './components/SearchBar';
import { SkinViewer3D } from './components/SkinViewer3D';
import { PlayerInfoCard } from './components/PlayerInfoCard';
import { NameHistory } from './components/NameHistory';
import { CapesGallery } from './components/CapesGallery';
import { RendersGrid } from './components/RendersGrid';

const RECENT_KEY = 'mc_recent_searches';

export const App: React.FC = () => {
  const [profile, setProfile] = useState<MinecraftProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedCapeUrl, setSelectedCapeUrl] = useState<string | null>(null);
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(RECENT_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const saveRecentSearch = (name: string) => {
    setRecentSearches((prev) => {
      const filtered = prev.filter((item) => item.toLowerCase() !== name.toLowerCase());
      const updated = [name, ...filtered].slice(0, 8);
      try {
        localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const handleClearRecent = () => {
    setRecentSearches([]);
    localStorage.removeItem(RECENT_KEY);
  };

  const loadPlayer = async (query: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await fetchPlayerProfile(query);
      setProfile(data);
      saveRecentSearch(data.username);

      if (data.capes.length > 0) {
        setSelectedCapeUrl(data.capes[0].textureUrl);
      } else {
        setSelectedCapeUrl(null);
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to retrieve player information');
      setProfile(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadPlayer('Technoblade');
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col">
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center shadow-xs">
              <Box className="w-4 h-4" />
            </div>
            <h1 className="text-sm font-semibold tracking-tight text-slate-900">
              Minecraft Skin & Player Viewer
            </h1>
          </div>
          <span className="text-xs text-slate-400 font-mono hidden sm:inline">
            Fast, free & verified
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Search */}
        <SearchBar
          onSearch={loadPlayer}
          isLoading={isLoading}
          recentSearches={recentSearches}
          onClearRecent={handleClearRecent}
        />

        {/* Error */}
        {error && (
          <div className="max-w-2xl mx-auto bg-rose-50 border border-rose-200 text-rose-800 rounded-xl p-3.5 flex items-start gap-2.5 text-xs">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">{error}</p>
              <p className="text-rose-600 mt-0.5">
                Check that the player's username or UUID is spelled correctly.
              </p>
            </div>
          </div>
        )}

        {/* Skeleton */}
        {isLoading && !profile && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2 animate-pulse">
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl h-[480px]" />
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-white border border-slate-200 rounded-xl h-36" />
              <div className="bg-white border border-slate-200 rounded-xl h-44" />
              <div className="bg-white border border-slate-200 rounded-xl h-36" />
            </div>
          </div>
        )}

        {/* Main Content */}
        {profile && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-1 items-start">
            {/* 3D Model Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-20">
              <SkinViewer3D
                skinUrl={profile.textures.skinDataUri || profile.textures.skinUrl}
                capeUrl={selectedCapeUrl}
                model={profile.model}
                playerName={profile.username}
              />
            </div>

            {/* Information Column */}
            <div className="lg:col-span-7 space-y-4">
              <PlayerInfoCard profile={profile} />

              <CapesGallery
                capes={profile.capes}
                selectedCapeUrl={selectedCapeUrl}
                onSelectCape={(url) => setSelectedCapeUrl(url)}
              />

              <NameHistory history={profile.nameHistory} />

              <RendersGrid uuid={profile.rawId} username={profile.username} />
            </div>
          </div>
        )}
      </main>

      <footer className="mt-auto border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-400">
        Data retrieved via Mojang, Ashcon, PlayerDB, and OptiFine APIs.
      </footer>
    </div>
  );
};

export default App;
