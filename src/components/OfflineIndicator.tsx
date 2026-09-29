import React from 'react';
import { useOnlineStatus } from '../hooks/usePWAInstall';
import { WifiOff, HardDrive } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2.5 rounded-2xl bg-slate-900/95 text-white px-4 py-2 text-xs font-semibold shadow-xl border border-amber-500/40 backdrop-blur-md animate-in slide-in-from-bottom-2 duration-300">
      <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shrink-0" />
      <div className="flex items-center gap-1.5">
        <WifiOff className="w-3.5 h-3.5 text-amber-400" />
        <span className="text-amber-200 font-bold">Çevrimdışı / Taşınabilir Mod:</span>
        <span className="text-slate-300 hidden sm:inline">Tüm üniteler ve sorular internetsiz bellekte çalışıyor.</span>
      </div>
    </div>
  );
};
