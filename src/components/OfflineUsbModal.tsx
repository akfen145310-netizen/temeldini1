import React, { useState, useRef } from 'react';
import {
  X,
  HardDrive,
  Download,
  Upload,
  CheckCircle2,
  Laptop,
  MonitorCheck,
  ShieldCheck,
  FileCode,
  Sparkles,
  WifiOff,
  FolderArchive,
  Copy,
  Check,
  Info
} from 'lucide-react';
import { sound } from '../utils/audio';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface OfflineUsbModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRestoreData?: (data: {
    score?: number;
    totalStars?: number;
    completedTopics?: string[];
    activities?: any;
    notebookNotes?: any;
  }) => void;
}

export const OfflineUsbModal: React.FC<OfflineUsbModalProps> = ({
  isOpen,
  onClose,
  onRestoreData,
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [activeTab, setActiveTab] = useState<'guide' | 'launchers' | 'backup'>('guide');
  const [copiedBatch, setCopiedBatch] = useState<boolean>(false);
  const [backupSuccess, setBackupSuccess] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  // Handle downloading progress data as JSON
  const handleExportBackup = () => {
    sound.playClick();
    try {
      const backupData = {
        app: '5-sinif-din-kesif-atolyesi',
        exportDate: new Date().toISOString(),
        score: parseInt(localStorage.getItem('din_atolyesi_score') || '0', 10),
        stars: parseInt(localStorage.getItem('din_atolyesi_stars') || '0', 10),
        completedTopics: JSON.parse(localStorage.getItem('din_atolyesi_completed_topics') || '[]'),
        topicScores: JSON.parse(localStorage.getItem('din_atolyesi_topic_scores') || '{}'),
        activities: JSON.parse(localStorage.getItem('din_atolyesi_activities') || '{}'),
        notes: JSON.parse(localStorage.getItem('din_atolyesi_notes') || '[]'),
      };

      const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `DinAtolyesi_FlashYedek_${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setBackupSuccess('İlerleme ve notlarınız flash belleğe kaydedilmek üzere indirildi!');
      sound.playSuccess();
      setTimeout(() => setBackupSuccess(null), 4000);
    } catch (err) {
      console.error('Yedekleme hatası:', err);
    }
  };

  // Handle uploading progress data from JSON
  const handleImportBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.app === '5-sinif-din-kesif-atolyesi' || parsed.score !== undefined) {
          if (parsed.score !== undefined) {
            localStorage.setItem('din_atolyesi_score', parsed.score.toString());
          }
          if (parsed.stars !== undefined) {
            localStorage.setItem('din_atolyesi_stars', parsed.stars.toString());
          }
          if (parsed.completedTopics) {
            localStorage.setItem('din_atolyesi_completed_topics', JSON.stringify(parsed.completedTopics));
          }
          if (parsed.topicScores) {
            localStorage.setItem('din_atolyesi_topic_scores', JSON.stringify(parsed.topicScores));
          }
          if (parsed.activities) {
            localStorage.setItem('din_atolyesi_activities', JSON.stringify(parsed.activities));
          }
          if (parsed.notes) {
            localStorage.setItem('din_atolyesi_notes', JSON.stringify(parsed.notes));
          }

          if (onRestoreData) {
            onRestoreData({
              score: parsed.score,
              totalStars: parsed.stars,
              completedTopics: parsed.completedTopics,
              activities: parsed.activities,
              notebookNotes: parsed.notes,
            });
          }

          setBackupSuccess('Yedek başarıyla yüklendi! Sayfa yenileniyor...');
          sound.playFanfare();
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        } else {
          alert('Geçersiz dosya formatı. Lütfen geçerli bir Din Atölyesi yedek dosyası seçin.');
        }
      } catch (err) {
        alert('Yedek dosyası okunurken hata oluştu.');
      }
    };
    reader.readAsText(file);
  };

  // Download a Windows launcher BAT file
  const handleDownloadBatchLauncher = () => {
    sound.playClick();
    const batchContent = `@echo off
chcp 65001 > nul
title 5. Sınıf Din Keşif Atölyesi - Çevrimdışı Başlatıcı
echo ========================================================
echo   5. Sınıf Din Keşif Atölyesi Açılıyor...
echo   İnternet bağlantısına ihtiyaç duymadan çalışır.
echo ========================================================
start "" "%~dp0index.html"
exit
`;
    const blob = new Blob([batchContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Baslat-Windows.bat';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Download a Linux/Pardus bash script
  const handleDownloadBashLauncher = () => {
    sound.playClick();
    const shContent = `#!/bin/bash
# 5. Sınıf Din Keşif Atölyesi - Akıllı Tahta (Pardus/Linux) Başlatıcı
DIR="$( cd "$( dirname "\${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
xdg-open "$DIR/index.html" || sensible-browser "$DIR/index.html" || firefox "$DIR/index.html"
`;
    const blob = new Blob([shContent], { type: 'text/x-sh' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Baslat-Pardus.sh';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-3xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-emerald-800 via-teal-800 to-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-emerald-300 border border-white/20 shadow-inner">
              <HardDrive className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-500/30">
                  Taşınabilir Sürüm
                </span>
                <span className="text-xs text-slate-300 flex items-center gap-1 font-medium">
                  <WifiOff className="w-3 h-3 text-amber-400" /> %100 İnternetsiz
                </span>
              </div>
              <h2 className="text-xl font-extrabold tracking-tight">Flash Bellek & Çevrimdışı Çalıştırma Kiti</h2>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-3 gap-2">
          <button
            onClick={() => setActiveTab('guide')}
            className={`px-4 py-2.5 rounded-t-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'guide'
                ? 'bg-white text-emerald-800 border-t-2 border-emerald-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Laptop className="w-4 h-4 text-emerald-600" />
            <span>Flash Bellekten Çalıştırma Rehberi</span>
          </button>
          <button
            onClick={() => setActiveTab('launchers')}
            className={`px-4 py-2.5 rounded-t-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'launchers'
                ? 'bg-white text-emerald-800 border-t-2 border-emerald-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileCode className="w-4 h-4 text-teal-600" />
            <span>Tek Tık Başlatıcı Dosyaları</span>
          </button>
          <button
            onClick={() => setActiveTab('backup')}
            className={`px-4 py-2.5 rounded-t-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'backup'
                ? 'bg-white text-emerald-800 border-t-2 border-emerald-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FolderArchive className="w-4 h-4 text-amber-600" />
            <span>İlerlemeyi Flash Belleğe Aktar / Yedekle</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-700 text-sm leading-relaxed">
          {backupSuccess && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center gap-3 animate-in fade-in">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="font-semibold text-xs sm:text-sm">{backupSuccess}</span>
            </div>
          )}

          {/* TAB 1: Rehber */}
          {activeTab === 'guide' && (
            <div className="space-y-5">
              <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-emerald-950">
                    Sıfır Kurulum, Sıfır İnternet Gereksinimi
                  </h4>
                  <p className="text-xs text-emerald-800 mt-0.5">
                    Bu site tüm 4 üniteyi (16 konu), analojileri, 64+ interaktif soruyu, Esmâ-i Hüsnâ Aynasını,
                    sözlüğü ve sentezleyici ses motorunu kendi içinde taşır. Flash belleğe atıldığında hiçbir internet
                    erişimi olmadan her bilgisayarda ve MEB Fatih Akıllı Tahtasında çalışır.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-7 h-7 rounded-lg bg-slate-900 text-white font-black text-xs flex items-center justify-center mb-2.5">
                    1
                  </div>
                  <h5 className="font-bold text-slate-900 text-xs mb-1">ZIP Olarak İndirin</h5>
                  <p className="text-[11px] text-slate-600 leading-normal">
                    AI Studio üst menüsündeki <span className="font-bold text-slate-800">Settings / Export ZIP</span> seçeneğiyle
                    veya derlenmiş <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-800 font-mono">dist</code> klasörünü
                    bilgisayarınıza indirin.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-black text-xs flex items-center justify-center mb-2.5">
                    2
                  </div>
                  <h5 className="font-bold text-slate-900 text-xs mb-1">Flash Belleğe Kopyalayın</h5>
                  <p className="text-[11px] text-slate-600 leading-normal">
                    İndirdiğiniz klasörü (içinde <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-800 font-mono">index.html</code> ve
                    <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-800 font-mono">assets</code> olan) doğrudan USB Flash belleğinize yapıştırın.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-7 h-7 rounded-lg bg-teal-600 text-white font-black text-xs flex items-center justify-center mb-2.5">
                    3
                  </div>
                  <h5 className="font-bold text-slate-900 text-xs mb-1">Çift Tıklayıp Başlatın!</h5>
                  <p className="text-[11px] text-slate-600 leading-normal">
                    USB'yi okula veya akıllı tahtaya takıp <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-800 font-mono">index.html</code>'e
                    çift tıklayın. Tarayıcıda anında tam ekran açılacaktır.
                  </p>
                </div>
              </div>

              {/* PWA Install Promo */}
              <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <MonitorCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white">Akıllı Tahta / Masaüstü Uygulaması Olarak Ekle</h5>
                    <p className="text-xs text-slate-300">
                      Bu cihazda Chrome/Edge kullanıyorsanız siteyi masaüstüne tek tıkla internetsiz bir program gibi yükleyebilirsiniz.
                    </p>
                  </div>
                </div>

                {isInstallable && (
                  <button
                    onClick={install}
                    className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs transition-all shadow-md cursor-pointer shrink-0"
                  >
                    Masaüstüne / Tahtaya Yükle
                  </button>
                )}

                {isInstalled && (
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-3 py-1.5 rounded-lg border border-emerald-600/50">
                    ✓ Uygulama Olarak Yüklü
                  </span>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: Launchers */}
          {activeTab === 'launchers' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 text-xs text-teal-900 flex items-start gap-3">
                <Info className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <p>
                  Öğretmenlerimizin ve öğrencilerimizin işini kolaylaştırmak için flash belleğin içine atabileceğiniz hazır tek tık başlatıcıları aşağıdan indirebilirsiniz. Bu dosyaları flash belleğinize <code className="font-bold font-mono">index.html</code> ile aynı klasöre koymanız yeterlidir.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Windows BAT */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-1.5">
                      <FileCode className="w-4 h-4 text-emerald-600" />
                      <span>Windows & Akıllı Tahta (BAT)</span>
                    </div>
                    <p className="text-xs text-slate-600 mb-4">
                      Windows 10, 11 ve Faz 1 / Faz 2 / Faz 3 Vestel-Arçelik Windows Akıllı Tahtalarında tek tıkla tarayıcıda başlatır.
                    </p>
                  </div>
                  <button
                    onClick={handleDownloadBatchLauncher}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Baslat-Windows.bat İndir</span>
                  </button>
                </div>

                {/* Pardus/Linux SH */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-1.5">
                      <FileCode className="w-4 h-4 text-teal-600" />
                      <span>MEB Pardus Linux (SH)</span>
                    </div>
                    <p className="text-xs text-slate-600 mb-4">
                      MEB Pardus ETAP işletim sistemli akıllı tahtalar ve Linux bilgisayarlar için çalıştırma betiği.
                    </p>
                  </div>
                  <button
                    onClick={handleDownloadBashLauncher}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Baslat-Pardus.sh İndir</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Backup & Transfer */}
          {activeTab === 'backup' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold mb-0.5">Çevrimdışı İlerleme Senkronizasyonu</h5>
                  <p>
                    İnternetsiz bir ortamda flash bellekten çalışırken çözdüğünüz testler, kazandığınız puanlar ve rozetler bu tarayıcıya kaydedilir. Eğer başka bir bilgisayara veya akıllı tahtaya geçecekseniz, ilerlemenizi flash belleğe yedekleyip diğer bilgisayarda açabilirsiniz!
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Export Card */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm mb-1">1. İlerlemeyi Flash'a İndir</h5>
                    <p className="text-xs text-slate-600 mb-4">
                      Mevcut puanlarınızı, çözülmüş konularınızı, telafi soru havuzunuzu ve not defterinizi küçük bir <code className="bg-slate-200 px-1 py-0.5 rounded font-mono">.json</code> dosyası olarak flash belleğinize kaydeder.
                    </p>
                  </div>
                  <button
                    onClick={handleExportBackup}
                    className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-amber-400" />
                    <span>İlerleme Yedeğini İndir (.json)</span>
                  </button>
                </div>

                {/* Import Card */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm mb-1">2. Yedeği Başka Bilgisayarda Aç</h5>
                    <p className="text-xs text-slate-600 mb-4">
                      Daha önce flash belleğe kaydettiğiniz yedek dosyasını seçerek tüm puanlarınızı ve notlarınızı bu bilgisayara aktarın.
                    </p>
                  </div>
                  <div>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImportBackup}
                      accept=".json"
                      className="hidden"
                    />
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                    >
                      <Upload className="w-4 h-4 text-emerald-200" />
                      <span>Flash'taki Yedeği Yükle (.json)</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Tüm üniteler ve ses efektleri yerel belleğe gömülüdür.
          </span>
          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-all cursor-pointer"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};
