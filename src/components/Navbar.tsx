import React from 'react';
import {
  BookOpen,
  Sparkles,
  Volume2,
  VolumeX,
  Award,
  BookmarkCheck,
  Star,
  Trophy,
  RotateCcw,
  School,
  UserCheck,
  LogIn
} from 'lucide-react';
import { sound } from '../utils/audio';
import { UserProfile } from '../types';

interface NavbarProps {
  score: number;
  totalStars: number;
  completedQuizzesCount: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenGlossary: () => void;
  onOpenEsma: () => void;
  onOpenNotebook: () => void;
  userProfile: UserProfile | null;
  remedyPendingCount: number;
  onOpenAuth: () => void;
  onOpenRemedy: () => void;
  onOpenLeaderboard: () => void;
  onOpenTeacherDashboard: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  score,
  totalStars,
  completedQuizzesCount,
  soundEnabled,
  onToggleSound,
  onOpenGlossary,
  onOpenEsma,
  onOpenNotebook,
  userProfile,
  remedyPendingCount,
  onOpenAuth,
  onOpenRemedy,
  onOpenLeaderboard,
  onOpenTeacherDashboard,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-3">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 shrink-0">
            <BookOpen className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                MEB 5. Sınıf Müfredatı
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                <Sparkles className="w-3 h-3" /> Tefekkür & Hikmet
              </span>
            </div>
            <h1 className="text-base sm:text-lg font-black text-slate-900 tracking-tight flex items-center gap-1.5">
              <span>Din Keşif Atölyesi</span>
              <span className="text-xs text-slate-500 font-normal hidden lg:inline">| Temel Dinî Bilgiler</span>
            </h1>
          </div>
        </div>

        {/* Stats & Quick Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* Points & Stars */}
          <div className="flex items-center gap-2 bg-slate-100/90 hover:bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700">
            <div className="flex items-center gap-1 text-amber-500" title="Kazanılan Yıldızlar">
              <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
              <span>{totalStars}</span>
            </div>
            <span className="text-slate-300">|</span>
            <div className="flex items-center gap-1 text-emerald-600" title="Toplam Puan">
              <Award className="w-4 h-4" />
              <span>{score} P</span>
            </div>
          </div>

          {/* Eksiklerini Tamamla (Smart Remedy) */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenRemedy();
            }}
            id="nav-remedy-btn"
            className={`flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
              remedyPendingCount > 0
                ? 'bg-amber-100 text-amber-900 border-amber-300 hover:bg-amber-200 shadow-xs animate-pulse'
                : 'bg-amber-50 text-amber-800 border-amber-200 hover:bg-amber-100'
            }`}
            title="Yanlış yaptığın soruları tekrar çöz ve ek puan kazan"
          >
            <RotateCcw className="w-4 h-4 text-amber-600" />
            <span className="hidden md:inline">Eksiklerini Tamamla</span>
            {remedyPendingCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-rose-600 text-white text-[10px] flex items-center justify-center font-black">
                {remedyPendingCount}
              </span>
            )}
          </button>

          {/* Sınıf Dereceleri & Rozetler */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenLeaderboard();
            }}
            id="nav-leaderboard-btn"
            className="flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 transition-all cursor-pointer"
            title="Sınıf İçi Sıralama ve Başarı Rozetleri"
          >
            <Trophy className="w-4 h-4 text-amber-500" />
            <span className="hidden sm:inline">Sınıf Derecesi</span>
          </button>

          {/* Öğretmen Paneli (if user is teacher or accessible) */}
          {userProfile?.role === 'teacher' && (
            <button
              onClick={() => {
                sound.playClick();
                onOpenTeacherDashboard();
              }}
              id="nav-teacher-dashboard-btn"
              className="flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-xl text-xs font-bold bg-teal-50 text-teal-800 hover:bg-teal-100 border border-teal-200 transition-all cursor-pointer"
              title="Öğretmen Sınıf Takip Paneli"
            >
              <School className="w-4 h-4 text-teal-600" />
              <span className="hidden lg:inline">Sınıf Paneli</span>
            </button>
          )}

          {/* Esmâ Aynası */}
          <button
            onClick={onOpenEsma}
            id="nav-esma-btn"
            className="hidden xl:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100 border border-violet-200 transition-all cursor-pointer"
            title="Allah'ın Güzel İsimleri (Esmâ-i Hüsnâ)"
          >
            <Sparkles className="w-3.5 h-3.5 text-violet-600" />
            <span>Esmâ Aynası</span>
          </button>

          {/* Sözlük */}
          <button
            onClick={onOpenGlossary}
            id="nav-glossary-btn"
            className="hidden xl:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-teal-50 text-teal-700 hover:bg-teal-100 border border-teal-200 transition-all cursor-pointer"
            title="Dini Kavramlar Sözlüğü"
          >
            <BookOpen className="w-3.5 h-3.5 text-teal-600" />
            <span>Sözlük</span>
          </button>

          {/* Etkinlik Defteri */}
          <button
            onClick={onOpenNotebook}
            id="nav-notebook-btn"
            className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200 transition-all cursor-pointer"
            title="Etkinlik ve Çıkış Kartı Not Defterim"
          >
            <BookmarkCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>Defterim</span>
          </button>

          {/* User Profile / Google Sign-in Chip */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenAuth();
            }}
            id="nav-auth-btn"
            className={`flex items-center gap-2 px-3 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
              userProfile
                ? 'bg-slate-900 text-white border-slate-800 hover:bg-slate-800 shadow-xs'
                : 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white border-emerald-600 hover:from-emerald-500 hover:to-teal-600 shadow-xs'
            }`}
          >
            {userProfile ? (
              <>
                <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-black">
                  {userProfile.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex flex-col text-left leading-tight hidden sm:flex">
                  <span className="truncate max-w-[90px]">{userProfile.name}</span>
                  <span className="text-[10px] text-emerald-300 font-normal">{userProfile.classCode}</span>
                </div>
              </>
            ) : (
              <>
                <LogIn className="w-3.5 h-3.5" />
                <span>Giriş / Kayıt</span>
              </>
            )}
          </button>

          {/* Sound Toggle */}
          <button
            onClick={() => {
              onToggleSound();
              sound.playClick();
            }}
            id="nav-sound-toggle-btn"
            className={`p-2 rounded-xl border transition-all cursor-pointer ${
              soundEnabled
                ? 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                : 'bg-rose-50 text-rose-500 border-rose-200 hover:bg-rose-100'
            }`}
            title={soundEnabled ? 'Sesleri Kapat' : 'Sesleri Aç'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};

