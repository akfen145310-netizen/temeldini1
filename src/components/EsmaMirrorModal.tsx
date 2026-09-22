import React, { useState } from 'react';
import { esmaList } from '../data/esmaData';
import { Sparkles, X, Heart, Star, BookOpen, Quote } from 'lucide-react';
import { sound } from '../utils/audio';

interface EsmaMirrorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EsmaMirrorModal: React.FC<EsmaMirrorModalProps> = ({ isOpen, onClose }) => {
  const [selectedUnit, setSelectedUnit] = useState<number | 'all'>('all');

  if (!isOpen) return null;

  const filtered = selectedUnit === 'all'
    ? esmaList
    : esmaList.filter((e) => e.unit === selectedUnit);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
      <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between gap-4 bg-gradient-to-r from-violet-50 via-purple-50 to-indigo-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-violet-600 text-white flex items-center justify-center shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                Esmâ-i Hüsnâ Aynası
              </h2>
              <p className="text-xs text-slate-600">
                5. Sınıf Müfredatında Öğretilen 12 İlahi İsim, Şiirleri ve Tefekkürü
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Unit Filters */}
        <div className="px-5 py-3 border-b border-slate-100 bg-white flex items-center gap-2 flex-wrap">
          <span className="text-xs font-bold text-slate-500 mr-1">Ünite Filtresi:</span>
          {(['all', 1, 2, 3, 4] as const).map((u) => (
            <button
              key={u}
              onClick={() => {
                sound.playClick();
                setSelectedUnit(u);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedUnit === u
                  ? 'bg-violet-600 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
              }`}
            >
              {u === 'all' ? 'Tüm İsimler (12)' : `${u}. Ünite`}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-white to-slate-50/70 p-5 rounded-3xl border border-slate-200 hover:border-violet-300 transition-all shadow-xs flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-violet-100 text-violet-800 text-xs font-bold flex items-center justify-center">
                      {item.unit}
                    </span>
                    <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                      {item.name}
                    </h3>
                  </div>
                  <span className="text-xl font-serif text-violet-700 font-bold px-2 py-0.5 rounded-lg bg-violet-50">
                    {item.arabicName}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 mt-2.5 leading-relaxed">
                  <strong>Anlamı:</strong> {item.meaning}
                </p>

                {/* Poem from textbook */}
                {item.poem && (
                  <div className="mt-3 bg-violet-50/80 p-3.5 rounded-2xl border border-violet-100 text-xs text-violet-950 font-serif italic space-y-1">
                    <div className="flex items-center gap-1.5 font-sans not-italic text-[10px] font-bold text-violet-700 uppercase tracking-wider">
                      <Quote className="w-3 h-3" />
                      <span>Ders Kitabı Şiiri (Mustafa Yılmaz):</span>
                    </div>
                    <div className="whitespace-pre-line leading-relaxed pl-2 border-l-2 border-violet-300">
                      {item.poem}
                    </div>
                  </div>
                )}
              </div>

              {/* Reflection */}
              <div className="bg-emerald-50/80 p-3 rounded-xl border border-emerald-200 text-xs text-emerald-950 font-medium flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Hayatımızdaki Yansıması:</strong> {item.reflection}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
