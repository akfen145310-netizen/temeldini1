import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, RotateCcw, AlertTriangle, HelpCircle, Trophy, BookOpen, ArrowRight } from 'lucide-react';
import { allUnits } from '../data/curriculumData';
import { UserActivityRecord, MultipleChoiceQuestion, TrueFalseQuestion, Unit, SubTopic } from '../types';
import { sound } from '../utils/audio';

interface RemedyModalProps {
  isOpen: boolean;
  onClose: () => void;
  activities: Record<string, UserActivityRecord>;
  onRemedyQuestion: (subTopicId: string, questionId: string, bonusPoints: number) => void;
}

interface QuestionToRemedy {
  subTopicId: string;
  unitTitle: string;
  topicTitle: string;
  type: 'tf' | 'mc';
  questionId: string;
  tfData?: TrueFalseQuestion;
  mcData?: MultipleChoiceQuestion;
}

export const RemedyModal: React.FC<RemedyModalProps> = ({
  isOpen,
  onClose,
  activities,
  onRemedyQuestion,
}) => {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [selectedMcOption, setSelectedMcOption] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);
  const [remediedInSession, setRemediedInSession] = useState<string[]>([]);

  if (!isOpen) return null;

  // Extract all questions that were answered incorrectly and haven't been remedied yet
  const questionsToRemedy: QuestionToRemedy[] = [];

  allUnits.forEach((unit: Unit) => {
    unit.subTopics.forEach((subTopic: SubTopic) => {
      const act = activities[subTopic.id];
      if (!act || !act.mistakeQuestionIds || act.mistakeQuestionIds.length === 0) return;

      act.mistakeQuestionIds.forEach((qId: string) => {
        // If already remedied either in Firestore or during current session, skip
        if (act.remediedQuestionIds?.includes(qId) || remediedInSession.includes(qId)) return;

        // Check in section 3 (True/False)
        const tf = subTopic.section3.questions.find((q: TrueFalseQuestion) => q.id === qId);
        if (tf) {
          questionsToRemedy.push({
            subTopicId: subTopic.id,
            unitTitle: unit.title,
            topicTitle: subTopic.title,
            type: 'tf',
            questionId: qId,
            tfData: tf,
          });
          return;
        }

        // Check in section 4 (Multiple Choice)
        const mc = subTopic.section4.questions.find((q: MultipleChoiceQuestion) => q.id === qId);
        if (mc) {
          questionsToRemedy.push({
            subTopicId: subTopic.id,
            unitTitle: unit.title,
            topicTitle: subTopic.title,
            type: 'mc',
            questionId: qId,
            mcData: mc,
          });
        }
      });
    });
  });

  const currentQ = questionsToRemedy[selectedQuestionIndex];

  const handleAnswerTf = (userSaidTrue: boolean) => {
    if (!currentQ || !currentQ.tfData) return;
    const isCorrect = userSaidTrue === currentQ.tfData.isTrue;

    if (isCorrect) {
      sound.playFanfare();
      setFeedback({
        isCorrect: true,
        message: `Tebrikler! Doğru cevap: ${currentQ.tfData.explanation}`,
      });
      setRemediedInSession((prev) => [...prev, currentQ.questionId]);
      onRemedyQuestion(currentQ.subTopicId, currentQ.questionId, 15);
    } else {
      sound.playWrong();
      setFeedback({
        isCorrect: false,
        message: `Tekrar dene! İpucu: ${currentQ.tfData.explanation}`,
      });
    }
  };

  const handleAnswerMc = (optionKey: 'A' | 'B' | 'C' | 'D') => {
    if (!currentQ || !currentQ.mcData) return;
    setSelectedMcOption(optionKey);
    const isCorrect = optionKey === currentQ.mcData.correctAnswer;

    if (isCorrect) {
      sound.playFanfare();
      setFeedback({
        isCorrect: true,
        message: `Harika! ${currentQ.mcData.solutionLogic}`,
      });
      setRemediedInSession((prev) => [...prev, currentQ.questionId]);
      onRemedyQuestion(currentQ.subTopicId, currentQ.questionId, 20);
    } else {
      sound.playWrong();
      setFeedback({
        isCorrect: false,
        message: `Seçtiğin şık doğru değil. Soru metnini ve seçenekleri tekrar dikkatlice incele!`,
      });
    }
  };

  const handleNext = () => {
    setFeedback(null);
    setSelectedMcOption(null);
    if (selectedQuestionIndex < questionsToRemedy.length - 1) {
      setSelectedQuestionIndex((prev) => prev + 1);
    } else {
      setSelectedQuestionIndex(0);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 p-6 text-white relative shrink-0">
          <button
            onClick={onClose}
            id="remedy-modal-close-btn"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center">
              <RotateCcw className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-bold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5" /> Akıllı Telafi Atölyesi
              </div>
              <h2 className="text-xl font-black mt-1">Eksiklerini Tamamla</h2>
              <p className="text-amber-100 text-xs">
                Yanlış yaptığın veya eksik kaldığın soruları tekrar çöz, ekstra puan kazan ve Telafi Ustası rozetine ulaş!
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {questionsToRemedy.length === 0 ? (
            <div className="text-center py-12 px-4 space-y-4">
              <div className="w-20 h-20 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <Trophy className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {remediedInSession.length > 0 ? 'Tüm Eksiklerini Tamamladın!' : 'Tebrikler, Eksik Sorun Yok!'}
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mt-1">
                  {remediedInSession.length > 0
                    ? `Bu oturumda ${remediedInSession.length} soruyu başarıyla telafi ettin ve hanene ek puanlar kazandırdın! Harikasın.`
                    : 'Çözdüğün testlerde henüz bekleyen bir yanlışın bulunmuyor. Yeni üniteleri keşfederek öğrenmeye devam edebilirsin!'}
                </p>
              </div>
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer"
              >
                Konulara Geri Dön
              </button>
            </div>
          ) : (
            currentQ && (
              <div className="space-y-4">
                {/* Meta Bar */}
                <div className="flex items-center justify-between bg-amber-50 border border-amber-200/80 px-4 py-2.5 rounded-2xl text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-amber-900">{currentQ.subTopicId} {currentQ.topicTitle}</span>
                    <span className="text-amber-300">•</span>
                    <span className="text-amber-700">{currentQ.unitTitle}</span>
                  </div>
                  <span className="font-bold text-amber-800 bg-amber-200/70 px-2 py-0.5 rounded-full text-[11px]">
                    Soru {selectedQuestionIndex + 1} / {questionsToRemedy.length}
                  </span>
                </div>

                {/* Question Box */}
                {currentQ.type === 'tf' && currentQ.tfData && (
                  <div className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-200 space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 font-black text-xs">
                        D/Y
                      </div>
                      <p className="text-base font-semibold text-slate-800 leading-relaxed">
                        {currentQ.tfData.statement}
                      </p>
                    </div>

                    {/* True / False Buttons */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <button
                        onClick={() => handleAnswerTf(true)}
                        className="py-3 px-4 rounded-xl border-2 border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>DOĞRU (+15 P)</span>
                      </button>
                      <button
                        onClick={() => handleAnswerTf(false)}
                        className="py-3 px-4 rounded-xl border-2 border-rose-300 bg-rose-50 hover:bg-rose-100 text-rose-800 font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                      >
                        <X className="w-4 h-4 text-rose-600" />
                        <span>YANLIŞ (+15 P)</span>
                      </button>
                    </div>
                  </div>
                )}

                {currentQ.type === 'mc' && currentQ.mcData && (
                  <div className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-200 space-y-4">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Şampiyonlar Testi Beceri Sorusu
                    </div>
                    <div className="p-4 rounded-xl bg-white border border-slate-200 text-slate-800 text-sm leading-relaxed font-medium">
                      {currentQ.mcData.scenario}
                    </div>
                    <p className="text-sm font-bold text-slate-900 pt-1">
                      {currentQ.mcData.question}
                    </p>

                    <div className="space-y-2 pt-1">
                      {(['A', 'B', 'C', 'D'] as const).map((key) => (
                        <button
                          key={key}
                          onClick={() => handleAnswerMc(key)}
                          className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex items-center gap-3 text-sm ${
                            selectedMcOption === key
                              ? key === currentQ.mcData!.correctAnswer
                                ? 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold ring-2 ring-emerald-300'
                                : 'bg-rose-50 border-rose-400 text-rose-900 font-semibold'
                              : 'bg-white border-slate-200 hover:bg-slate-100 text-slate-800'
                          }`}
                        >
                          <span
                            className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                              selectedMcOption === key
                                ? key === currentQ.mcData!.correctAnswer
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-rose-600 text-white'
                                : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            {key}
                          </span>
                          <span className="flex-1">{currentQ.mcData!.options[key]}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Feedback Box */}
                {feedback && (
                  <div
                    className={`p-4 rounded-2xl border text-sm flex items-start justify-between gap-3 ${
                      feedback.isCorrect
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                        : 'bg-rose-50 border-rose-200 text-rose-900'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {feedback.isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <span className="font-bold block mb-0.5">
                          {feedback.isCorrect ? 'Tebrikler, Eksiklik Telafi Edildi!' : 'Dikkat'}
                        </span>
                        <p className="text-xs leading-relaxed">{feedback.message}</p>
                      </div>
                    </div>
                    {feedback.isCorrect && (
                      <button
                        onClick={handleNext}
                        id="remedy-next-btn"
                        className="shrink-0 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer flex items-center gap-1.5"
                      >
                        <span>Sonraki Soru</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                )}
              </div>
            )
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 px-6 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
            <span>Doğru çözülen her telafi sorusu hanene doğrudan puan ekler.</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-slate-700 hover:bg-slate-200 font-semibold transition-all cursor-pointer"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};
