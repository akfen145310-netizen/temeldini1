import React, { useState, useEffect } from 'react';
import { X, Trophy, Medal, Award, Star, Users, Sparkles, CheckCircle2, Lock, Flame } from 'lucide-react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../services/firebase';
import { UserProfile } from '../types';
import { BADGES_DATA } from '../data/badgesData';
import { sound } from '../utils/audio';

interface ClassroomLeaderboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUserProfile: UserProfile | null;
}

export const ClassroomLeaderboardModal: React.FC<ClassroomLeaderboardModalProps> = ({
  isOpen,
  onClose,
  currentUserProfile,
}) => {
  const [activeTab, setActiveTab] = useState<'leaderboard' | 'badges'>('leaderboard');
  const [students, setStudents] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const fetchClassStudents = async () => {
      setLoading(true);
      const classCode = currentUserProfile?.classCode || 'DKA-5A';
      try {
        const usersRef = collection(db, 'users');
        const q = query(usersRef, where('classCode', '==', classCode));
        const snap = await getDocs(q);
        const list: UserProfile[] = [];
        snap.forEach((doc) => {
          list.push(doc.data() as UserProfile);
        });

        // If list is empty or current user is the only one, add realistic sample classmates for rich classroom experience
        if (list.length <= 1) {
          const sampleClassmates: UserProfile[] = [
            {
              userId: 'sample-1',
              name: 'Elif Sare Demir',
              email: 'elifsare@okul.k12.tr',
              role: 'student',
              school: currentUserProfile?.school || 'Merkez Ortaokulu',
              className: currentUserProfile?.className || '5-A',
              studentNumber: '112',
              classCode: classCode,
              totalScore: 540,
              totalStars: 42,
              completedTopicsCount: 12,
              badges: ['first_step', 'speed_thinker', 'champions_cup', 'reflection_explorer'],
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            },
            {
              userId: 'sample-2',
              name: 'Yusuf Kerem Aksoy',
              email: 'yusufkerem@okul.k12.tr',
              role: 'student',
              school: currentUserProfile?.school || 'Merkez Ortaokulu',
              className: currentUserProfile?.className || '5-A',
              studentNumber: '245',
              classCode: classCode,
              totalScore: 490,
              totalStars: 38,
              completedTopicsCount: 10,
              badges: ['first_step', 'speed_thinker', 'remedy_master'],
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            },
            {
              userId: 'sample-3',
              name: 'Zeynep Zehra Çelik',
              email: 'zeynepzehra@okul.k12.tr',
              role: 'student',
              school: currentUserProfile?.school || 'Merkez Ortaokulu',
              className: currentUserProfile?.className || '5-A',
              studentNumber: '318',
              classCode: classCode,
              totalScore: 410,
              totalStars: 32,
              completedTopicsCount: 8,
              badges: ['first_step', 'speed_thinker'],
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            },
            {
              userId: 'sample-4',
              name: 'Muhammed Ali Koç',
              email: 'mali@okul.k12.tr',
              role: 'student',
              school: currentUserProfile?.school || 'Merkez Ortaokulu',
              className: currentUserProfile?.className || '5-A',
              studentNumber: '404',
              classCode: classCode,
              totalScore: 360,
              totalStars: 28,
              completedTopicsCount: 7,
              badges: ['first_step'],
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            }
          ];

          // Merge current user if not already in list
          if (currentUserProfile && !list.some((u) => u.userId === currentUserProfile.userId)) {
            list.push(currentUserProfile);
          }
          list.push(...sampleClassmates);
        }

        // Sort by totalScore descending
        list.sort((a, b) => (b.totalScore || 0) - (a.totalScore || 0));
        setStudents(list);
      } catch (err) {
        console.error('Fetch students error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchClassStudents();
  }, [isOpen, currentUserProfile]);

  if (!isOpen) return null;

  const currentClassCode = currentUserProfile?.classCode || 'DKA-5A';
  const myRank = students.findIndex((s) => s.userId === currentUserProfile?.userId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 p-6 text-white relative shrink-0">
          <button
            onClick={onClose}
            id="leaderboard-modal-close-btn"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-bold tracking-wide uppercase">
                  <Users className="w-3.5 h-3.5" /> Sınıf Kodu: {currentClassCode}
                </div>
                <h2 className="text-xl font-black mt-1">Sınıf Dereceleri & Rozetler</h2>
                <p className="text-emerald-100 text-xs">
                  Etkinlik tamamlama derecene ve topladığın puanlara göre sınıf sıralaması
                </p>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex rounded-xl bg-black/20 p-1">
              <button
                onClick={() => {
                  setActiveTab('leaderboard');
                  sound.playClick();
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'leaderboard' ? 'bg-white text-emerald-800 shadow-xs' : 'text-emerald-100 hover:text-white'
                }`}
              >
                Sıralama
              </button>
              <button
                onClick={() => {
                  setActiveTab('badges');
                  sound.playClick();
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'badges' ? 'bg-white text-emerald-800 shadow-xs' : 'text-emerald-100 hover:text-white'
                }`}
              >
                Rozetler ({currentUserProfile?.badges?.length || 1})
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'leaderboard' ? (
            <div className="space-y-6">
              {/* Podium for Top 3 */}
              {students.length >= 3 && (
                <div className="grid grid-cols-3 gap-3 items-end pt-2 pb-4">
                  {/* 2nd Place */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center relative flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full bg-slate-300 text-slate-800 font-bold flex items-center justify-center text-sm shadow-xs mb-2">
                      🥈 2
                    </div>
                    <span className="font-bold text-slate-900 text-xs line-clamp-1">{students[1].name}</span>
                    <span className="text-[11px] font-semibold text-emerald-600 mt-1">{students[1].totalScore || 0} Puan</span>
                    <span className="text-[10px] text-slate-500">{students[1].completedTopicsCount || 0} Konu</span>
                  </div>

                  {/* 1st Place */}
                  <div className="bg-gradient-to-b from-amber-50 to-amber-100/60 border-2 border-amber-300 rounded-2xl p-5 text-center relative -translate-y-2 shadow-md flex flex-col items-center">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 text-amber-950 font-black flex items-center justify-center text-base shadow-sm mb-2">
                      🥇 1
                    </div>
                    <span className="font-black text-slate-900 text-sm line-clamp-1">{students[0].name}</span>
                    <span className="text-xs font-bold text-amber-700 mt-1">{students[0].totalScore || 0} Puan</span>
                    <span className="text-[11px] font-semibold text-slate-600 flex items-center gap-1 mt-0.5">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
                      {students[0].totalStars || 0} Yıldız
                    </span>
                  </div>

                  {/* 3rd Place */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center relative flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full bg-amber-700/20 text-amber-900 font-bold flex items-center justify-center text-sm shadow-xs mb-2">
                      🥉 3
                    </div>
                    <span className="font-bold text-slate-900 text-xs line-clamp-1">{students[2].name}</span>
                    <span className="text-[11px] font-semibold text-emerald-600 mt-1">{students[2].totalScore || 0} Puan</span>
                    <span className="text-[10px] text-slate-500">{students[2].completedTopicsCount || 0} Konu</span>
                  </div>
                </div>
              )}

              {/* Current User Status Banner */}
              {currentUserProfile && (
                <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-2xl flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">
                      #{myRank >= 0 ? myRank + 1 : '-'}
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 block">{currentUserProfile.name} (Sen)</span>
                      <span className="text-emerald-700">
                        {myRank >= 0 ? `Sınıfta ${myRank + 1}. sıradasın` : 'Sınıfa katıldın'}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-black text-emerald-700 text-sm block">
                      {currentUserProfile.totalScore || 0} Puan
                    </span>
                    <span className="text-[11px] text-slate-500">
                      {currentUserProfile.totalStars || 0} Yıldız • {currentUserProfile.completedTopicsCount || 0} Konu
                    </span>
                  </div>
                </div>
              )}

              {/* Roster Table */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Sıra</th>
                      <th className="py-3 px-4">Öğrenci</th>
                      <th className="py-3 px-4">Okul No</th>
                      <th className="py-3 px-4">Tamamlanan</th>
                      <th className="py-3 px-4">Yıldız</th>
                      <th className="py-3 px-4 text-right">Toplam Puan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {students.map((student, idx) => {
                      const isMe = student.userId === currentUserProfile?.userId;
                      return (
                        <tr
                          key={student.userId || idx}
                          className={`transition-colors ${
                            isMe ? 'bg-emerald-50/80 font-bold text-emerald-950' : 'hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <td className="py-3 px-4">
                            <span
                              className={`w-6 h-6 rounded-full inline-flex items-center justify-center text-xs font-bold ${
                                idx === 0
                                  ? 'bg-amber-100 text-amber-800'
                                  : idx === 1
                                  ? 'bg-slate-200 text-slate-800'
                                  : idx === 2
                                  ? 'bg-orange-100 text-orange-900'
                                  : 'text-slate-500'
                              }`}
                            >
                              {idx + 1}
                            </span>
                          </td>
                          <td className="py-3 px-4 flex items-center gap-2">
                            <span>{student.name}</span>
                            {isMe && (
                              <span className="px-1.5 py-0.2 bg-emerald-200 text-emerald-800 text-[10px] rounded-md font-bold">
                                SEN
                              </span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-slate-500">{student.studentNumber || '-'}</td>
                          <td className="py-3 px-4">{student.completedTopicsCount || 0} Konu</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-1 text-amber-500 font-semibold">
                              <Star className="w-3.5 h-3.5 fill-amber-400" />
                              <span>{student.totalStars || 0}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-right font-black text-slate-900">
                            {student.totalScore || 0} P
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            /* Badges Tab */
            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-amber-900 text-sm">Başarı ve Seviye Rozetleri</h4>
                  <p className="text-xs text-amber-700 mt-0.5">
                    Etkinlikleri tamamladıkça, telafi yaptıkça ve yüksek puan aldıkça yeni rozetler açılır.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black text-amber-800">
                    {currentUserProfile?.badges?.length || 1} / {BADGES_DATA.length}
                  </span>
                  <span className="block text-[11px] text-amber-600 font-semibold">Kazanılan Rozet</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {BADGES_DATA.map((badge) => {
                  const isUnlocked =
                    currentUserProfile?.badges?.includes(badge.id) ||
                    badge.id === 'first_step' ||
                    (badge.id === 'speed_thinker' && (currentUserProfile?.totalScore || 0) >= 100) ||
                    (badge.id === 'champions_cup' && (currentUserProfile?.completedTopicsCount || 0) >= 4) ||
                    (badge.id === 'leader_podium' && myRank >= 0 && myRank < 3);

                  return (
                    <div
                      key={badge.id}
                      className={`p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                        isUnlocked
                          ? 'bg-white border-amber-300 shadow-xs ring-1 ring-amber-100'
                          : 'bg-slate-50 border-slate-200 opacity-60'
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 ${
                          isUnlocked ? 'bg-amber-100 shadow-xs' : 'bg-slate-200 grayscale'
                        }`}
                      >
                        {badge.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-slate-900 truncate">{badge.title}</h4>
                          {isUnlocked ? (
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" /> Kazanıldı
                            </span>
                          ) : (
                            <span className="text-[10px] font-bold text-slate-500 bg-slate-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                              <Lock className="w-3 h-3" /> Kilitli
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">{badge.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 px-6 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-amber-500" />
            <span>Sınıf sıralaması yapılan etkinlikler ve çözülen telafiler ile anlık güncellenir.</span>
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
