import React, { useState } from 'react';
import { EnrichmentSection, SubTopic, Unit } from '../types';
import {
  Sparkles,
  BookOpen,
  GraduationCap,
  FileText,
  HelpCircle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Printer,
  Compass,
  Lightbulb,
  HeartHandshake,
  Award
} from 'lucide-react';
import { sound } from '../utils/audio';

interface EnrichmentViewProps {
  topic: SubTopic;
  unit: Unit;
  enrichment: EnrichmentSection;
  onOpenNotebookWithPrompt?: (promptText: string) => void;
  onBackToTopicExplanation?: () => void;
}

export const EnrichmentView: React.FC<EnrichmentViewProps> = ({
  topic,
  unit,
  enrichment,
  onOpenNotebookWithPrompt,
  onBackToTopicExplanation,
}) => {
  const [activeSubSection, setActiveSubSection] = useState<'all' | 'parable' | 'educator' | 'summary' | 'exam'>('all');
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});

  const toggleSolution = (id: string) => {
    sound.playClick();
    setRevealedSolutions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePrint = () => {
    sound.playClick();
    window.print();
  };

  return (
    <div className="space-y-6 print:space-y-4">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-teal-900 via-slate-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden border border-teal-700/50 print:bg-none print:text-black print:p-0 print:border-none">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-60 h-60 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-400/30">
                Veli & Öğretmen Zenginleştirme Modülü
              </span>
              <span className="text-xs font-semibold text-teal-200/80 bg-teal-950/60 px-2.5 py-1 rounded-xl">
                Bölüm {topic.number}
              </span>
            </div>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all border border-white/15 cursor-pointer print:hidden"
              title="Klasik sınav soruları ve konu özetini yazdır"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Yazdır / PDF Al</span>
            </button>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
            {enrichment.title}
          </h2>
          <p className="text-xs sm:text-sm text-teal-100/90 max-w-3xl leading-relaxed">
            {enrichment.subtitle} - Risale-i Nur mantığıyla temsilden hakikate anlatımlar, pedagojik rehberlik, kavram tanımları ve MEB uyumlu klasik yazılı soruları.
          </p>

          {/* Quick Sub-Section Filter Pills (Hidden on print) */}
          <div className="pt-4 flex flex-wrap gap-2 print:hidden border-t border-teal-800/60">
            <button
              onClick={() => {
                sound.playClick();
                setActiveSubSection('all');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeSubSection === 'all'
                  ? 'bg-teal-400 text-slate-950 shadow-md'
                  : 'bg-teal-950/80 text-teal-200 hover:bg-teal-900 border border-teal-700/50'
              }`}
            >
              Tümünü İncele
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setActiveSubSection('parable');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeSubSection === 'parable'
                  ? 'bg-teal-400 text-slate-950 shadow-md'
                  : 'bg-teal-950/80 text-teal-200 hover:bg-teal-900 border border-teal-700/50'
              }`}
            >
              1. Temsilden Hakikate
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setActiveSubSection('educator');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeSubSection === 'educator'
                  ? 'bg-teal-400 text-slate-950 shadow-md'
                  : 'bg-teal-950/80 text-teal-200 hover:bg-teal-900 border border-teal-700/50'
              }`}
            >
              2. Veli & Öğretmen Rehberi
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setActiveSubSection('summary');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeSubSection === 'summary'
                  ? 'bg-teal-400 text-slate-950 shadow-md'
                  : 'bg-teal-950/80 text-teal-200 hover:bg-teal-900 border border-teal-700/50'
              }`}
            >
              3. Tanımlar & Özet
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setActiveSubSection('exam');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeSubSection === 'exam'
                  ? 'bg-teal-400 text-slate-950 shadow-md'
                  : 'bg-teal-950/80 text-teal-200 hover:bg-teal-900 border border-teal-700/50'
              }`}
            >
              4. Klasik Sınav Soruları
            </button>
          </div>
        </div>
      </div>

      {/* 1. RISALE-I NUR MANTIĞIYLA TEMSİLDEN HAKİKATE */}
      {(activeSubSection === 'all' || activeSubSection === 'parable') && (
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-6">
          <div className="flex items-center gap-3 text-teal-800">
            <div className="w-10 h-10 rounded-2xl bg-teal-100 flex items-center justify-center text-teal-700">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 block">
                Risale-i Nur Metoduyla Anlatım
              </span>
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                Temsilî Hikâyeden Hakikate: {enrichment.risaleStyleNarrative.parableTitle}
              </h3>
            </div>
          </div>

          {/* Temsili Hikaye */}
          <div className="bg-gradient-to-r from-amber-50/80 via-orange-50/40 to-transparent p-5 sm:p-6 rounded-2xl border border-amber-200/80 space-y-2">
            <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Temsilî Olay / Hikâye</span>
            </div>
            <p className="text-slate-800 text-sm sm:text-base leading-relaxed">
              {enrichment.risaleStyleNarrative.parableStory}
            </p>
          </div>

          {/* Temsilden Hakikate Geçiş */}
          <div className="bg-gradient-to-r from-teal-50/90 via-emerald-50/50 to-transparent p-5 sm:p-6 rounded-2xl border border-teal-200 space-y-2">
            <div className="flex items-center gap-2 text-teal-800 font-bold text-xs uppercase tracking-wider">
              <Lightbulb className="w-4 h-4" />
              <span>Temsilden Hakikate Geçiş (Hakikat Açıklaması)</span>
            </div>
            <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
              {enrichment.risaleStyleNarrative.transitionToTruth}
            </p>
          </div>

          {/* 4 Adımlı Tefekkür Basamakları */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-700 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Adım Adım Tefekkür Zinciri:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {enrichment.risaleStyleNarrative.tefekkurSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-xs sm:text-sm text-slate-800 flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-xl bg-teal-600 text-white font-extrabold flex items-center justify-center shrink-0 text-xs shadow-2xs">
                    {idx + 1}
                  </span>
                  <p className="leading-relaxed font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ayet ve Hadis Bağı */}
          <div className="bg-emerald-900 text-emerald-50 p-4 sm:p-5 rounded-2xl flex items-start gap-3 shadow-xs">
            <BookOpen className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider block">
                Ayet ve Hadis Nuru:
              </span>
              <p className="text-xs sm:text-sm text-emerald-100 italic leading-relaxed">
                {enrichment.risaleStyleNarrative.quranSunnahConnection}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 2. VELİ VE ÖĞRETMEN REHBERİ (YENİ ANLATIM TARZLARI & PEDAGOJİ) */}
      {(activeSubSection === 'all' || activeSubSection === 'educator') && (
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-6">
          <div className="flex items-center gap-3 text-sky-800">
            <div className="w-10 h-10 rounded-2xl bg-sky-100 flex items-center justify-center text-sky-700">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 block">
                Pedagojik Rehberlik
              </span>
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                Veli & Öğretmenler İçin Yeni Anlatım Tarzları ve Etkinlikler
              </h3>
            </div>
          </div>

          {/* Pedagojik Not */}
          <div className="bg-sky-50/70 p-5 rounded-2xl border border-sky-200 space-y-1.5">
            <span className="text-xs font-bold text-sky-900 uppercase tracking-wider block">
              💡 Pedagojik Yaklaşım Tavsiyesi
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              {enrichment.educatorGuide.pedagogicalNote}
            </p>
          </div>

          {/* Günlük Hayattan Modern Analoji */}
          <div className="bg-violet-50/70 p-5 rounded-2xl border border-violet-200 space-y-1.5">
            <span className="text-xs font-bold text-violet-900 uppercase tracking-wider block">
              🚀 Günlük Hayattan Modern Analoji (Teknoloji & Bilim Benzetmesi)
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              {enrichment.educatorGuide.dailyLifeAnalogy}
            </p>
          </div>

          {/* Evde & Sınıfta Uygulanabilecek Etkinlikler */}
          <div className="space-y-3">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-700 block">
              🎯 Evde ve Sınıfta Uygulama / Canlandırma Etkinlikleri:
            </span>
            <div className="space-y-2.5">
              {enrichment.educatorGuide.homeAndClassroomActivities.map((act, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 flex items-start gap-3"
                >
                  <span className="w-5 h-5 rounded-lg bg-sky-600 text-white font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                    ✓
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">{act}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Çocuğa/Öğrenciye Yöneltilecek Sohbet Başlatıcı Sorular */}
          <div className="bg-amber-50/60 p-5 rounded-2xl border border-amber-200/80 space-y-3">
            <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block flex items-center gap-2">
              <HeartHandshake className="w-4 h-4" />
              <span>Öğrenciyle Derin Sohbet Başlatıcı Sorular (Sokratik Diyalog)</span>
            </span>
            <div className="space-y-2">
              {enrichment.educatorGuide.dialogueStarters.map((starter, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3 rounded-xl border border-amber-200/60 flex items-center justify-between gap-3 text-xs sm:text-sm text-slate-800 font-medium"
                >
                  <span>💬 {starter}</span>
                  {onOpenNotebookWithPrompt && (
                    <button
                      onClick={() => onOpenNotebookWithPrompt(starter)}
                      className="px-2.5 py-1 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-bold shrink-0 cursor-pointer"
                    >
                      Deftere Aktar
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 3. TANIMLARI İÇEREN KONU ÖZETİ & KAVRAM SÖZLÜĞÜ */}
      {(activeSubSection === 'all' || activeSubSection === 'summary') && (
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-6">
          <div className="flex items-center gap-3 text-emerald-800">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                Ders Notları & Sözlük
              </span>
              <h3 className="text-base sm:text-lg font-black text-slate-900">
                Tanımları İçeren Konu Özeti & Kavram Haritası
              </h3>
            </div>
          </div>

          {/* Konu Özeti Kartı */}
          <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
              📖 Bölümün Yapılandırılmış Ana Özeti
            </span>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
              {enrichment.conceptSummary.summaryText}
            </p>
          </div>

          {/* Tanımlar ve Somut Örnekler Listesi */}
          <div className="space-y-3">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-700 block">
              📚 Kritik Kavram Tanımları ve Günlük Hayat Örnekleri:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {enrichment.conceptSummary.definitions.map((def, idx) => (
                <div
                  key={idx}
                  className="bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-extrabold text-emerald-950">
                      {def.term}
                    </span>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-emerald-200/70 text-emerald-900">
                      Tanım #{idx + 1}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {def.definition}
                  </p>
                  <div className="bg-white/80 p-2.5 rounded-xl border border-emerald-100 text-[11px] text-emerald-900">
                    <strong className="text-emerald-950">Somut Örnek:</strong> {def.example}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 4. KLASİK SINAVDA ÇIKABİLECEK SORULAR VE MODEL ÇÖZÜMLER */}
      {(activeSubSection === 'all' || activeSubSection === 'exam') && (
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3 text-violet-800">
              <div className="w-10 h-10 rounded-2xl bg-violet-100 flex items-center justify-center text-violet-700">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-violet-700 block">
                  MEB DKAB 6. Sınıf Yazılı Hazırlığı
                </span>
                <h3 className="text-base sm:text-lg font-black text-slate-900">
                  Klasik Yazılı Sınavda Çıkabilecek Sorular & Model Cevaplar
                </h3>
              </div>
            </div>

            <span className="text-xs font-semibold px-3 py-1 rounded-xl bg-violet-50 text-violet-700 border border-violet-200">
              {enrichment.classicExamQuestions.length} Klasik Soru
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Öğretmenlerin yazılı sınavlarda sormayı en çok tercih ettiği açık uçlu/klasik sorular, tam puanlık öğrenci cevapları ve öğretmen değerlendirme kriterleri.
          </p>

          <div className="space-y-4">
            {enrichment.classicExamQuestions.map((q) => {
              const isSolutionOpen = revealedSolutions[q.id] ?? false;

              return (
                <div
                  key={q.id}
                  className="rounded-2xl border border-slate-200 overflow-hidden shadow-2xs bg-slate-50/50"
                >
                  {/* Soru Başlığı ve Metni */}
                  <div className="p-5 bg-white space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-violet-100 text-violet-900 text-xs font-black">
                        SORU {q.questionNumber}
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 text-xs font-extrabold">
                        {q.pointValue} Puan
                      </span>
                    </div>

                    <p className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
                      {q.questionText}
                    </p>

                    <div className="pt-2 flex items-center justify-between">
                      <button
                        onClick={() => toggleSolution(q.id)}
                        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold transition-all shadow-xs cursor-pointer print:hidden"
                      >
                        {isSolutionOpen ? (
                          <>
                            <ChevronUp className="w-3.5 h-3.5" />
                            <span>Örnek Çözümü Gizle</span>
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-3.5 h-3.5" />
                            <span>Örnek Çözümü & Puanlama Kriterini Göster</span>
                          </>
                        )}
                      </button>

                      {onOpenNotebookWithPrompt && (
                        <button
                          onClick={() => onOpenNotebookWithPrompt(`Klasik Sınav Sorusu: ${q.questionText}`)}
                          className="text-xs text-slate-500 hover:text-slate-800 font-semibold cursor-pointer print:hidden"
                        >
                          Cevabımı Deftere Yaz ✍️
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Tam Puanlık Çözüm & Puanlama Kriteri (Expandable or print) */}
                  {(isSolutionOpen || typeof window !== 'undefined') && (
                    <div className={`${isSolutionOpen ? 'block' : 'hidden print:block'} p-5 bg-gradient-to-r from-violet-50/70 via-purple-50/40 to-transparent border-t border-violet-100 space-y-3`}>
                      <div className="space-y-1">
                        <span className="text-[11px] font-bold text-violet-900 uppercase tracking-wider block">
                          ⭐ Tam Puanlık Model Öğrenci Cevabı:
                        </span>
                        <p className="text-xs sm:text-sm text-slate-900 leading-relaxed font-medium bg-white p-3.5 rounded-xl border border-violet-100 shadow-2xs">
                          {q.sampleAnswer}
                        </p>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider block">
                          📋 Öğretmen Puanlama Kriteri & Anahtar Kelimeler:
                        </span>
                        <p className="text-xs text-amber-900 leading-relaxed bg-amber-50/80 p-2.5 rounded-xl border border-amber-200/70">
                          {q.scoringCriteria}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Footer Navigation */}
      {onBackToTopicExplanation && (
        <div className="flex justify-start pt-2 print:hidden">
          <button
            onClick={() => {
              sound.playClick();
              onBackToTopicExplanation();
            }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
          >
            <Compass className="w-4 h-4 text-emerald-600" />
            <span>1. Keşif Yolculuğuna Geri Dön</span>
          </button>
        </div>
      )}
    </div>
  );
};
