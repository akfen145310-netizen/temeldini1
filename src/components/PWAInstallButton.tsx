import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Download, MonitorCheck, Sparkles, X } from 'lucide-react';
import { sound } from '../utils/audio';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // If already running as an installed PWA, hide the button
  if (isInstalled) {
    return null;
  }

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <button
        onClick={() => {
          sound.playClick();
          install();
        }}
        id="pwa-install-header-btn"
        className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 px-3 py-1.5 sm:py-2 text-xs font-bold text-white shadow-xs hover:from-emerald-500 hover:to-teal-600 transition cursor-pointer border border-emerald-500/30"
        title="Uygulama Olarak Bilgisayara / Akıllı Tahtaya Yükle"
      >
        <MonitorCheck className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Uygulama Olarak Yükle</span>
      </button>
    );
  }

  // iOS Safari flow
  if (isIOS) {
    return (
      <>
        <button
          onClick={() => {
            sound.playClick();
            setShowIOSGuide(true);
          }}
          className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition cursor-pointer"
        >
          <Download className="w-3.5 h-3.5 text-slate-600" />
          <span className="hidden sm:inline">iOS'a Ekle</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
            <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  iPad / iPhone'a Yükle
                </h3>
                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed space-y-2">
                <span className="block">1. Safari alt menüsündeki <strong>Paylaş</strong> (kare içinden ok çıkan) simgesine dokunun.</span>
                <span className="block">2. Aşağı kaydırıp <strong>Ana Ekrana Ekle</strong> butonunu seçin.</span>
                <span className="block">3. İnternetsiz olarak ana ekranınızdan doğrudan açıp kullanabilirsiniz.</span>
              </p>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-4 w-full rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 transition"
              >
                Anladım
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
