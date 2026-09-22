import React, { useState } from 'react';
import { glossaryTerms } from '../data/glossaryData';
import { GlossaryTerm } from '../types';
import { Search, X, BookOpen, Tag } from 'lucide-react';
import { sound } from '../utils/audio';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'inanc' | 'ibadet' | 'ahlak' | 'esma'>('all');

  if (!isOpen) return null;

  const categories = [
    { id: 'all', label: 'Tüm Kavramlar' },
    { id: 'inanc', label: 'İnanç Esasları' },
    { id: 'ibadet', label: 'İbadetler' },
    { id: 'ahlak', label: 'Ahlak & Değerler' },
    { id: 'esma', label: 'Esmâ-i Hüsnâ' },
  ] as const;

  const filtered = glossaryTerms.filter((term) => {
    const matchesSearch =
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
      <div className="bg-white rounded-3xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between gap-4 bg-teal-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-600 text-white flex items-center justify-center shadow-xs">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                Dinî Kavramlar Sözlüğü
              </h2>
              <p className="text-xs text-slate-600">
                5. Sınıf Ders Kitabı (s. 162-165) Temel Sözlük Listesi
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

        {/* Search & Category Filter */}
        <div className="p-4 sm:p-5 border-b border-slate-100 space-y-3 bg-white">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Kavram veya açıklama ara (örn: Adalet, Fıtrat, İhlas, İsraf)..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all placeholder:text-slate-400"
            />
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  sound.playClick();
                  setSelectedCategory(cat.id);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-teal-600 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Terms List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-sm">
              Aradığınız kritere uygun kavram bulunamadı.
            </div>
          ) : (
            filtered.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 hover:bg-slate-50 p-4 rounded-2xl border border-slate-200/80 transition-colors space-y-1.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
                    {item.term}
                  </h4>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-teal-100/80 text-teal-800">
                    {item.category === 'inanc'
                      ? 'İnanç'
                      : item.category === 'ibadet'
                      ? 'İbadet'
                      : item.category === 'ahlak'
                      ? 'Ahlak'
                      : 'Esmâ'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {item.definition}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
