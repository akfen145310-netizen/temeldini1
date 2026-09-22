import React, { useState, useEffect } from 'react';
import { X, BookmarkCheck, Save, Trash2, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/audio';

interface StudentNotebookModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPrompt?: string;
}

interface NoteEntry {
  id: string;
  date: string;
  topicPrompt: string;
  studentAnswer: string;
}

export const StudentNotebookModal: React.FC<StudentNotebookModalProps> = ({
  isOpen,
  onClose,
  initialPrompt = '',
}) => {
  const [notes, setNotes] = useState<NoteEntry[]>([]);
  const [currentPrompt, setCurrentPrompt] = useState(initialPrompt);
  const [currentText, setCurrentText] = useState('');
  const [showSavedMsg, setShowSavedMsg] = useState(false);

  useEffect(() => {
    if (initialPrompt) {
      setCurrentPrompt(initialPrompt);
    }
  }, [initialPrompt]);

  useEffect(() => {
    const saved = localStorage.getItem('din_atolyesi_student_notes');
    if (saved) {
      try {
        setNotes(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  if (!isOpen) return null;

  const saveCurrentNote = () => {
    if (!currentText.trim()) return;
    sound.playCorrect();

    const newEntry: NoteEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('tr-TR', {
        day: 'numeric',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
      }),
      topicPrompt: currentPrompt.trim() || 'Serbest Tefekkür Notu',
      studentAnswer: currentText.trim(),
    };

    const updated = [newEntry, ...notes];
    setNotes(updated);
    localStorage.setItem('din_atolyesi_student_notes', JSON.stringify(updated));
    setCurrentText('');
    setCurrentPrompt('');
    setShowSavedMsg(true);
    setTimeout(() => setShowSavedMsg(false), 2500);
  };

  const deleteNote = (id: string) => {
    sound.playClick();
    const updated = notes.filter((n) => n.id !== id);
    setNotes(updated);
    localStorage.setItem('din_atolyesi_student_notes', JSON.stringify(updated));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
      <div className="bg-white rounded-3xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between gap-4 bg-amber-50/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-xs">
              <BookmarkCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                Etkinlik Defterim & Çıkış Kartı
              </h2>
              <p className="text-xs text-slate-600">
                Öğrendiğin değerleri, tefekkür sorularını ve kalbine dokunanları buraya kaydet.
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

        {/* Note Editor */}
        <div className="p-5 border-b border-slate-100 bg-amber-50/20 space-y-3">
          {currentPrompt && (
            <div className="p-3 bg-amber-100/70 border border-amber-200 rounded-2xl text-xs sm:text-sm text-amber-950 font-medium">
              <strong>Soru / Yönlendirme:</strong> {currentPrompt}
            </div>
          )}

          <textarea
            value={currentText}
            onChange={(e) => setCurrentText(e.target.value)}
            rows={3}
            placeholder="Düşünceni, aldığın kararı veya kalbine doğan güzel niyeti buraya yaz..."
            className="w-full p-3.5 text-xs sm:text-sm rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all placeholder:text-slate-400"
          />

          <div className="flex items-center justify-between gap-3">
            <div>
              {showSavedMsg && (
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Defterine kaydedildi!
                </span>
              )}
            </div>

            <button
              onClick={saveCurrentNote}
              disabled={!currentText.trim()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-xs"
            >
              <Save className="w-4 h-4" />
              <span>Defterime Ekle</span>
            </button>
          </div>
        </div>

        {/* Saved Notes List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Kayıtlı Notlarım ({notes.length})
          </h3>

          {notes.length === 0 ? (
            <div className="text-center py-10 text-slate-400 text-xs sm:text-sm">
              Henüz bir not yazmadın. Keşif sayfalarındaki "Defterime Not Al" butonlarına tıklayarak veya yukarıdaki alana yazarak başlayabilirsin!
            </div>
          ) : (
            notes.map((entry) => (
              <div
                key={entry.id}
                className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2 relative group"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded-lg">
                    {entry.topicPrompt}
                  </span>
                  <span className="text-[10px] text-slate-400">{entry.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-800 whitespace-pre-wrap leading-relaxed">
                  {entry.studentAnswer}
                </p>

                <div className="flex justify-end">
                  <button
                    onClick={() => deleteNote(entry.id)}
                    className="text-xs text-rose-500 hover:text-rose-700 p-1 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Sil</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
