import React, { useState, useEffect } from 'react';
import { SubTopic, Unit } from '../types';
import {
  Sparkles,
  Compass,
  MessageSquare,
  Zap,
  Trophy,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Quote,
  Lightbulb,
  Feather,
  RotateCcw,
  Check,
  Award
} from 'lucide-react';
import { sound } from '../utils/audio';
import confetti from 'canvas-confetti';

interface TopicViewerProps {
  topic: SubTopic;
  unit: Unit;
  onNavigateNext?: () => void;
  onNavigatePrev?: () => void;
  onAddScore: (points: number, stars: number) => void;
  onMarkTopicCompleted: (topicId: string) => void;
  onOpenNotebookWithPrompt?: (promptText: string) => void;
  onOpenRemedyModal?: () => void;
  onSaveActivity?: (activityData: {
    subTopicId: string;
    unitId: number;
    completed: boolean;
    scoreEarned: number;
    starsEarned: number;
    mistakeQuestionIds: string[];
  }) => void;
}

export const TopicViewer: React.FC<TopicViewerProps> = ({
  topic,
  unit,
  onNavigateNext,
  onNavigatePrev,
  onAddScore,
  onMarkTopicCompleted,
  onOpenNotebookWithPrompt,
  onOpenRemedyModal,
  onSaveActivity,
}) => {
  const [activeTab, setActiveTab] = useState<'section1' | 'section2' | 'section3' | 'section4'>('section1');
  const [mistakeList, setMistakeList] = useState<string[]>([]);

  // Section 2: Revealed dialogues state
  const [revealedDialogues, setRevealedDialogues] = useState<Record<string, boolean>>({});

  // Section 3: True / False responses state
  const [tfAnswers, setTfAnswers] = useState<Record<string, boolean | null>>({});

  // Section 4: Multiple choice test responses state
  const [mcAnswers, setMcAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D' | null>>({});
  const [testSubmitted, setTestSubmitted] = useState<boolean>(false);

  // Reset tab answers when topic changes
  useEffect(() => {
    setActiveTab('section1');
    setRevealedDialogues({});
    setTfAnswers({});
    setMcAnswers({});
    setTestSubmitted(false);
  }, [topic.id]);

  const toggleDialogue = (id: string) => {
    sound.playClick();
    setRevealedDialogues((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleTfSelect = (questionId: string, answer: boolean, isCorrect: boolean) => {
    if (tfAnswers[questionId] !== undefined && tfAnswers[questionId] !== null) return; // already answered
    setTfAnswers((prev) => ({ ...prev, [questionId]: answer }));

    if (answer === isCorrect) {
      sound.playCorrect();
      onAddScore(10, 1);
    } else {
      sound.playWrong();
    }
  };

  const handleMcSelect = (questionId: string, option: 'A' | 'B' | 'C' | 'D') => {
    if (testSubmitted) return;
    sound.playClick();
    setMcAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const submitTest = () => {
    const answeredCount = Object.keys(mcAnswers).length;
    if (answeredCount < topic.section4.questions.length) {
      alert('Lütfen tüm soruları işaretleyiniz.');
      return;
    }

    setTestSubmitted(true);
    let correctCount = 0;
    const currentMistakes: string[] = [];

    // Check multiple choice answers
    topic.section4.questions.forEach((q) => {
      if (mcAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      } else {
        currentMistakes.push(q.id);
      }
    });

    // Check true/false answers in section 3 if answered
    topic.section3.questions.forEach((q) => {
      if (tfAnswers[q.id] !== undefined && tfAnswers[q.id] !== null) {
        if (tfAnswers[q.id] !== q.isTrue) {
          currentMistakes.push(q.id);
        }
      }
    });

    setMistakeList(currentMistakes);

    const earnedScore = correctCount === topic.section4.questions.length ? 50 : correctCount * 15;
    const earnedStars = correctCount === topic.section4.questions.length ? 3 : correctCount > 0 ? 1 : 0;

    if (correctCount === topic.section4.questions.length) {
      sound.playFanfare();
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
      onAddScore(50, 3);
      onMarkTopicCompleted(topic.id);
    } else if (correctCount > 0) {
      sound.playCorrect();
      onAddScore(earnedScore, earnedStars);
    } else {
      sound.playWrong();
    }

    if (onSaveActivity) {
      onSaveActivity({
        subTopicId: topic.id,
        unitId: unit.id,
        completed: correctCount >= 2,
        scoreEarned: earnedScore,
        starsEarned: earnedStars,
        mistakeQuestionIds: currentMistakes,
      });
    }
  };

  const resetTest = () => {
    sound.playClick();
    setMcAnswers({});
    setTestSubmitted(false);
    setMistakeList([]);
  };

  return (
    <div className="flex-1 max-w-5xl mx-auto px-4 py-6 sm:px-6 lg:px-8 space-y-6">
      {/* Top Banner / Breadcrumb */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2">
            <span
              className={`px-3 py-1 rounded-xl text-xs font-bold uppercase tracking-wider text-white shadow-2xs ${
                unit.id === 1
                  ? 'bg-emerald-600'
                  : unit.id === 2
                  ? 'bg-sky-600'
                  : unit.id === 3
                  ? 'bg-amber-600'
                  : 'bg-violet-600'
              }`}
            >
              {unit.title.split(':')[0]}
            </span>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-xl">
              {topic.number}
            </span>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            {topic.keyConcepts.map((concept, idx) => (
              <span
                key={idx}
                className="text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-2.5 py-0.5 rounded-full"
              >
                #{concept}
              </span>
            ))}
          </div>
        </div>

        <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
          {topic.title}
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
          {topic.summary}
        </p>

        {/* 4 Interactive Section Tabs */}
        <div className="mt-6 border-t border-slate-100 pt-4 flex flex-wrap items-center gap-2 sm:gap-3">
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('section1');
            }}
            id="tab-section-1"
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'section1'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25 scale-[1.02]'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>1. Keşif Yolculuğu</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('section2');
            }}
            id="tab-section-2"
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'section2'
                ? 'bg-sky-600 text-white shadow-md shadow-sky-600/25 scale-[1.02]'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>2. Meraklı Zihinler (3 Soru)</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('section3');
            }}
            id="tab-section-3"
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'section3'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-600/25 scale-[1.02]'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>3. Hızlı Düşün (D/Y)</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('section4');
            }}
            id="tab-section-4"
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'section4'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-600/25 scale-[1.02]'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>4. Şampiyonlar Testi</span>
          </button>
        </div>
      </div>

      {/* TAB CONTENT AREAS */}

      {/* 🔍 [BÖLÜM 1: KEŞİF YOLCULUĞU - Konu Anlatımı] */}
      {activeTab === 'section1' && (
        <div className="space-y-6">
          {/* Merak Uyandırıcı Giriş (Tefekkür Sorusu) */}
          <div className="bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-transparent p-5 rounded-3xl border border-emerald-200 flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Hiç Düşündün Mü?
              </span>
              <p className="text-slate-800 font-medium text-sm sm:text-base mt-1 italic">
                "{topic.section1.leadIn}"
              </p>
            </div>
          </div>

          {/* Temsili Hikaye / Analoji Kartı */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-emerald-700">
              <Sparkles className="w-5 h-5" />
              <h2 className="text-base sm:text-lg font-bold">
                Temsilî Hikâye: {topic.section1.natureAnalogy.title}
              </h2>
            </div>
            <div className="bg-amber-50/60 p-4 sm:p-5 rounded-2xl border border-amber-200/70 text-slate-800 text-sm sm:text-base leading-relaxed">
              {topic.section1.natureAnalogy.story}
            </div>
            <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-emerald-900 font-medium">
                <span className="font-bold block text-emerald-950">Hikmetten Çıkan Ders:</span>
                {topic.section1.natureAnalogy.lesson}
              </div>
            </div>
          </div>

          {/* Peygamberimizin Mucizesi / İlgili İbretli Tablo (Varsa) */}
          {topic.section1.miracleStory && (
            <div className="bg-gradient-to-br from-sky-50 to-indigo-50/60 rounded-3xl p-6 sm:p-7 border border-sky-200 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-sky-800">
                <Feather className="w-5 h-5" />
                <h3 className="text-base sm:text-lg font-bold">
                  İbretli Hadise: {topic.section1.miracleStory.title}
                </h3>
              </div>
              <p className="text-slate-800 text-sm sm:text-base leading-relaxed bg-white/80 p-4 sm:p-5 rounded-2xl border border-sky-100">
                {topic.section1.miracleStory.narrative}
              </p>
              <div className="text-xs sm:text-sm text-sky-900 font-semibold bg-sky-100/70 p-3.5 rounded-xl border border-sky-200">
                💡 <span className="font-bold">Tefekkür:</span> {topic.section1.miracleStory.meaning}
              </div>
            </div>
          )}

          {/* Ana Konu Anlatımı (Ders Kitabı Kazanımları) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-600" />
              Konunun İncelikleri ve Temel Bilgiler
            </h2>
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              {topic.section1.mainExplanation.map((paragraph, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 shrink-0" />
                  <p className="flex-1">{paragraph}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ayet ve Hadis-i Şerif Panosu */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Ayetler */}
            <div className="bg-teal-50/70 p-5 rounded-3xl border border-teal-200 space-y-3">
              <div className="flex items-center gap-2 text-teal-800 font-bold text-sm">
                <Quote className="w-4 h-4" />
                <span>Kur’an-ı Kerim’den Işıklar</span>
              </div>
              <div className="space-y-3">
                {topic.section1.verses.map((v, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-2xl border border-teal-100 shadow-2xs space-y-1.5">
                    {v.text && (
                      <p className="text-right font-serif text-slate-800 text-sm sm:text-base leading-loose tracking-wide">
                        {v.text}
                      </p>
                    )}
                    <p className="text-xs sm:text-sm text-slate-800 italic">
                      "{v.meaning}"
                    </p>
                    <span className="text-[11px] font-bold text-teal-700 block text-right">
                      ({v.surah} Suresi, {v.verseNumber}. Ayet)
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hadis-i Şerifler */}
            <div className="bg-amber-50/70 p-5 rounded-3xl border border-amber-200 space-y-3">
              <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Peygamberimizden (s.a.v) Öğütler</span>
              </div>
              <div className="space-y-3">
                {topic.section1.hadiths.map((h, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-2xl border border-amber-100 shadow-2xs space-y-1.5">
                    <p className="text-xs sm:text-sm text-slate-800 italic leading-relaxed">
                      "{h.text}"
                    </p>
                    <span className="text-[11px] font-bold text-amber-800 block text-right">
                      [{h.source}]
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tefekkür ve Hayata Aktarma Soruları */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-md space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm sm:text-base">
              <HelpCircle className="w-5 h-5" />
              <span>Sıra Sende: Düşün ve Hayatına Yansıt</span>
            </div>
            <div className="space-y-3">
              {topic.section1.reflectiveQuestions.map((q, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 hover:bg-white/15 p-4 rounded-2xl border border-white/10 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                    👉 {q}
                  </p>
                  {onOpenNotebookWithPrompt && (
                    <button
                      onClick={() => onOpenNotebookWithPrompt(q)}
                      className="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shrink-0 cursor-pointer transition-colors"
                    >
                      Defterime Not Al
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Next Tab Prompt */}
          <div className="flex justify-end pt-2">
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('section2');
              }}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              <span>Meraklı Zihinler Soru-Cevap Bölümüne Geç</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 💬 [BÖLÜM 2: MERAKLI ZİHİNLER - Etkileşimli Soru Cevap] */}
      {activeTab === 'section2' && (
        <div className="space-y-6">
          <div className="bg-sky-50 border border-sky-200 rounded-3xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-sky-950">
                Meraklı Zihinler: Öğrenci Soruyor, Bilge Rehber Açıklıyor
              </h2>
              <p className="text-xs sm:text-sm text-sky-800 mt-0.5">
                Bir 5. sınıf öğrencisinin aklına gelebilecek en samimi sorular ve tefekkür dolu tatmin edici yanıtlar. Sorulara tıklayarak cevabı açabilirsin!
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {topic.section2.dialogues.map((dialogue, idx) => {
              const isRevealed = revealedDialogues[dialogue.id] ?? false;

              return (
                <div
                  key={dialogue.id}
                  className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs transition-all"
                >
                  {/* Öğrenci Sorusu */}
                  <div
                    onClick={() => toggleDialogue(dialogue.id)}
                    className="p-5 sm:p-6 bg-slate-50/70 hover:bg-slate-100/80 cursor-pointer flex items-start justify-between gap-4 transition-colors"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-2xs">
                        Ö{idx + 1}
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block">
                          Meraklı Öğrenci Sorusu
                        </span>
                        <p className="text-sm sm:text-base font-bold text-slate-900 mt-0.5">
                          "{dialogue.studentQuestion}"
                        </p>
                      </div>
                    </div>

                    <button
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                        isRevealed
                          ? 'bg-slate-200 text-slate-700'
                          : 'bg-sky-600 text-white hover:bg-sky-500 shadow-2xs'
                      }`}
                    >
                      {isRevealed ? 'Kapat' : 'Cevabı Keşfet'}
                    </button>
                  </div>

                  {/* Bilge Rehber Cevabı (Expandable) */}
                  {isRevealed && (
                    <div className="p-6 bg-white border-t border-slate-100 space-y-4 animate-in fade-in duration-300">
                      <div className="flex items-start gap-3.5">
                        <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-2xs">
                          BR
                        </div>
                        <div className="space-y-2 flex-1">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
                            Bilge Rehber'in Yanıtı
                          </span>
                          <p className="text-sm sm:text-base text-slate-800 leading-relaxed bg-emerald-50/60 p-4 rounded-2xl border border-emerald-100">
                            {dialogue.guideAnswer}
                          </p>
                        </div>
                      </div>

                      {dialogue.reflectionPrompt && (
                        <div className="bg-amber-50/80 p-3.5 rounded-xl border border-amber-200 text-xs sm:text-sm text-amber-900 font-medium flex items-center justify-between gap-3">
                          <span>🤔 <strong>Sence de öyle değil mi?:</strong> {dialogue.reflectionPrompt}</span>
                          {onOpenNotebookWithPrompt && (
                            <button
                              onClick={() => onOpenNotebookWithPrompt(dialogue.reflectionPrompt!)}
                              className="px-2.5 py-1 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-bold shrink-0 cursor-pointer"
                            >
                              Yaz
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action buttons */}
          <div className="flex justify-between items-center pt-2">
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('section1');
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Konu Anlatımına Dön</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('section3');
              }}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              <span>Hızlı Düşün (Doğru/Yanlış) Yarışmasına Geç</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ⚡ [BÖLÜM 3: HIZLI DÜŞÜN - Doğru mu Yanlış mı? Yarışması] */}
      {activeTab === 'section3' && (
        <div className="space-y-6">
          <div className="bg-amber-50 border border-amber-200 rounded-3xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-amber-950">
                Hızlı Düşün: Doğru mu, Yanlış mı?
              </h2>
              <p className="text-xs sm:text-sm text-amber-800 mt-0.5">
                Aşağıdaki 5 can alıcı önermeyi oku ve kararını ver! Doğru bildiğin her soru için +10 Puan ve yıldız kazanırsın.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {topic.section3.questions.map((q, idx) => {
              const selectedAnswer = tfAnswers[q.id];
              const isAnswered = selectedAnswer !== undefined && selectedAnswer !== null;
              const isUserCorrect = isAnswered && selectedAnswer === q.isTrue;

              return (
                <div
                  key={q.id}
                  className={`bg-white rounded-3xl p-5 sm:p-6 border transition-all shadow-xs ${
                    isAnswered
                      ? isUserCorrect
                        ? 'border-emerald-300 bg-emerald-50/20'
                        : 'border-rose-300 bg-rose-50/20'
                      : 'border-slate-200'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-slate-800 leading-snug flex-1">
                      {q.statement}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="mt-4 flex items-center gap-3 pl-10">
                    <button
                      disabled={isAnswered}
                      onClick={() => handleTfSelect(q.id, true, q.isTrue)}
                      className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        isAnswered
                          ? q.isTrue
                            ? 'bg-emerald-600 text-white ring-2 ring-emerald-500'
                            : selectedAnswer === true
                            ? 'bg-rose-500 text-white'
                            : 'bg-slate-100 text-slate-400'
                          : 'bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300 border border-slate-200 text-slate-700'
                      }`}
                    >
                      <Check className="w-4 h-4" />
                      <span>DOĞRU</span>
                    </button>

                    <button
                      disabled={isAnswered}
                      onClick={() => handleTfSelect(q.id, false, q.isTrue)}
                      className={`flex-1 sm:flex-initial px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        isAnswered
                          ? !q.isTrue
                            ? 'bg-emerald-600 text-white ring-2 ring-emerald-500'
                            : selectedAnswer === false
                            ? 'bg-rose-500 text-white'
                            : 'bg-slate-100 text-slate-400'
                          : 'bg-slate-100 hover:bg-rose-50 hover:text-rose-700 hover:border-rose-300 border border-slate-200 text-slate-700'
                      }`}
                    >
                      <XCircle className="w-4 h-4" />
                      <span>YANLIŞ</span>
                    </button>
                  </div>

                  {/* Feedback Explanation */}
                  {isAnswered && (
                    <div
                      className={`mt-4 ml-10 p-3.5 rounded-2xl text-xs sm:text-sm font-medium flex items-start gap-2.5 animate-in fade-in duration-300 ${
                        isUserCorrect
                          ? 'bg-emerald-100 text-emerald-950 border border-emerald-200'
                          : 'bg-rose-100 text-rose-950 border border-rose-200'
                      }`}
                    >
                      {isUserCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <span className="font-bold block">
                          {isUserCorrect ? 'Harika Çıkarım!' : 'Tekrar Düşünelim:'}
                        </span>
                        {q.explanation}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Action buttons */}
          <div className="flex justify-between items-center pt-2">
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('section2');
              }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Soru-Cevap Bölümüne Dön</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('section4');
              }}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              <span>Şampiyonlar Testine Geç (3 Soru)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 🏆 [BÖLÜM 4: ŞAMPİYONLAR TESTİ - Çoktan Seçmeli Görev] */}
      {activeTab === 'section4' && (
        <div className="space-y-6">
          <div className="bg-violet-50 border border-violet-200 rounded-3xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-violet-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-violet-950">
                Şampiyonlar Testi: Yeni Nesil Beceri Temelli Sorular
              </h2>
              <p className="text-xs sm:text-sm text-violet-800 mt-0.5">
                5. sınıf seviyesine uygun, hikaye ve senaryolarla zenginleştirilmiş 3 soruluk görev. Tüm soruları doğru cevapla, 50 puan ve şampiyonluk rozeti kazan!
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {topic.section4.questions.map((q, idx) => {
              const selectedOption = mcAnswers[q.id];
              const isCorrect = testSubmitted && selectedOption === q.correctAnswer;

              return (
                <div
                  key={q.id}
                  className={`bg-white rounded-3xl p-6 sm:p-7 border shadow-xs transition-all ${
                    testSubmitted
                      ? isCorrect
                        ? 'border-emerald-300 bg-emerald-50/20'
                        : 'border-rose-300 bg-rose-50/20'
                      : 'border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 bg-violet-100 text-violet-800 font-extrabold text-xs rounded-xl">
                      Soru {idx + 1} / 3
                    </span>
                    {testSubmitted && (
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-xl flex items-center gap-1 ${
                          isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        {isCorrect ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5" /> Doğru (+15 Puan)
                          </>
                        ) : (
                          <>
                            <XCircle className="w-3.5 h-3.5" /> Yanlış
                          </>
                        )}
                      </span>
                    )}
                  </div>

                  {/* Scenario box */}
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-xs sm:text-sm text-slate-800 leading-relaxed mb-3">
                    <strong>Senaryo:</strong> {q.scenario}
                  </div>

                  {/* Question prompt */}
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-4">
                    {q.question}
                  </h3>

                  {/* Options */}
                  <div className="space-y-2.5">
                    {(['A', 'B', 'C', 'D'] as const).map((letter) => {
                      const isOptionSelected = selectedOption === letter;
                      const isOptionCorrect = q.correctAnswer === letter;

                      let btnStyle = 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700';

                      if (testSubmitted) {
                        if (isOptionCorrect) {
                          btnStyle = 'bg-emerald-100 border-emerald-400 text-emerald-950 font-bold ring-2 ring-emerald-400';
                        } else if (isOptionSelected && !isOptionCorrect) {
                          btnStyle = 'bg-rose-100 border-rose-400 text-rose-950 line-through';
                        } else {
                          btnStyle = 'bg-slate-50 border-slate-200 text-slate-400';
                        }
                      } else if (isOptionSelected) {
                        btnStyle = 'bg-violet-100 border-violet-500 text-violet-950 font-bold ring-2 ring-violet-400';
                      }

                      return (
                        <button
                          key={letter}
                          disabled={testSubmitted}
                          onClick={() => handleMcSelect(q.id, letter)}
                          className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all flex items-start gap-3 cursor-pointer ${btnStyle}`}
                        >
                          <span
                            className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                              isOptionSelected
                                ? 'bg-violet-600 text-white'
                                : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {letter}
                          </span>
                          <span className="text-xs sm:text-sm pt-0.5 leading-relaxed flex-1">
                            {q.options[letter]}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Solution Logic */}
                  {testSubmitted && (
                    <div className="mt-4 p-4 rounded-2xl bg-slate-900 text-white text-xs sm:text-sm space-y-1 animate-in fade-in duration-300">
                      <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                        <Award className="w-4 h-4" />
                        <span>Çözüm ve Mantık: Doğru Cevap ({q.correctAnswer})</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        {q.solutionLogic}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Test Submit / Reset Controls */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-slate-500 block">
                Cevaplanan Soru Sayısı
              </span>
              <span className="text-sm font-bold text-slate-900">
                {Object.keys(mcAnswers).length} / {topic.section4.questions.length} Soru Tamamlandı
              </span>
            </div>

            <div className="flex items-center gap-3">
              {testSubmitted ? (
                <div className="flex items-center gap-2">
                  {mistakeList.length > 0 && onOpenRemedyModal && (
                    <button
                      onClick={onOpenRemedyModal}
                      id="topic-remedy-btn"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer animate-pulse"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Eksiklerini Tamamla ({mistakeList.length} Yanlış)</span>
                    </button>
                  )}
                  <button
                    onClick={resetTest}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Testi Tekrar Çöz</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={submitTest}
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <Trophy className="w-4 h-4" />
                  <span>Cevapları Kontrol Et ve Tamamla</span>
                </button>
              )}
            </div>
          </div>

          {/* Next / Previous Subtopic Navigation */}
          <div className="flex justify-between items-center pt-4">
            {onNavigatePrev ? (
              <button
                onClick={onNavigatePrev}
                className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm transition-colors cursor-pointer shadow-2xs"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Önceki Konu</span>
              </button>
            ) : <div />}

            {onNavigateNext && (
              <button
                onClick={onNavigateNext}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                <span>Sonraki Konuya Geç</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
