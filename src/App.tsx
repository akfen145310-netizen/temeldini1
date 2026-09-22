import React, { useState, useEffect } from 'react';
import { allUnits, getAllSubTopics, getSubTopicById, getUnitBySubTopicId } from './data/curriculumData';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { TopicViewer } from './components/TopicViewer';
import { GlossaryModal } from './components/GlossaryModal';
import { EsmaMirrorModal } from './components/EsmaMirrorModal';
import { StudentNotebookModal } from './components/StudentNotebookModal';
import { AuthModal } from './components/AuthModal';
import { RemedyModal } from './components/RemedyModal';
import { ClassroomLeaderboardModal } from './components/ClassroomLeaderboardModal';
import { TeacherDashboardModal } from './components/TeacherDashboardModal';
import { sound } from './utils/audio';
import { UserProfile, UserActivityRecord } from './types';
import { auth, db, handleFirestoreError, OperationType } from './services/firebase';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { doc, getDoc, setDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { Menu, Sparkles, Trophy, RotateCcw, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  const allSubTopics = getAllSubTopics();
  const [activeSubTopicId, setActiveSubTopicId] = useState<string>('1.1');
  const [sidebarOpenMobile, setSidebarOpenMobile] = useState<boolean>(false);

  // Authentication State
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  // Activities & Mistakes Tracking State (Keyed by subTopicId e.g. "1.1")
  const [activities, setActivities] = useState<Record<string, UserActivityRecord>>(() => {
    const saved = localStorage.getItem('din_atolyesi_activities');
    return saved ? JSON.parse(saved) : {};
  });

  // Gamification & Progress State
  const [score, setScore] = useState<number>(() => {
    const saved = localStorage.getItem('din_atolyesi_score');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [totalStars, setTotalStars] = useState<number>(() => {
    const saved = localStorage.getItem('din_atolyesi_stars');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [completedSubTopicIds, setCompletedSubTopicIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('din_atolyesi_completed_topics');
    return saved ? JSON.parse(saved) : [];
  });

  const [subTopicScores, setSubTopicScores] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('din_atolyesi_topic_scores');
    return saved ? JSON.parse(saved) : {};
  });

  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Modals state
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);
  const [isRemedyOpen, setIsRemedyOpen] = useState<boolean>(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState<boolean>(false);
  const [isTeacherDashboardOpen, setIsTeacherDashboardOpen] = useState<boolean>(false);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState<boolean>(false);
  const [isEsmaOpen, setIsEsmaOpen] = useState<boolean>(false);
  const [isNotebookOpen, setIsNotebookOpen] = useState<boolean>(false);
  const [notebookPrompt, setNotebookPrompt] = useState<string>('');

  // Unlocked badge toast notification
  const [newBadgeToast, setNewBadgeToast] = useState<{ title: string; icon: string } | null>(null);

  // Synchronize localStorage
  useEffect(() => {
    localStorage.setItem('din_atolyesi_score', score.toString());
  }, [score]);

  useEffect(() => {
    localStorage.setItem('din_atolyesi_stars', totalStars.toString());
  }, [totalStars]);

  useEffect(() => {
    localStorage.setItem('din_atolyesi_completed_topics', JSON.stringify(completedSubTopicIds));
  }, [completedSubTopicIds]);

  useEffect(() => {
    localStorage.setItem('din_atolyesi_topic_scores', JSON.stringify(subTopicScores));
  }, [subTopicScores]);

  useEffect(() => {
    localStorage.setItem('din_atolyesi_activities', JSON.stringify(activities));
  }, [activities]);

  // Listen to Firebase Auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        try {
          const userRef = doc(db, 'users', user.uid);
          const docSnap = await getDoc(userRef);

          if (docSnap.exists()) {
            const profile = docSnap.data() as UserProfile;
            setUserProfile(profile);

            // Sync scores from remote if higher
            if (profile.totalScore > score) {
              setScore(profile.totalScore);
            }
            if (profile.totalStars > totalStars) {
              setTotalStars(profile.totalStars);
            }

            // Fetch user activities from Firestore
            try {
              const actQuery = query(collection(db, 'userActivities'), where('userId', '==', user.uid));
              const actSnap = await getDocs(actQuery);
              const remoteActs: Record<string, UserActivityRecord> = {};
              actSnap.forEach((doc) => {
                const act = doc.data() as UserActivityRecord;
                remoteActs[act.subTopicId] = act;
              });
              if (Object.keys(remoteActs).length > 0) {
                setActivities((prev) => ({ ...prev, ...remoteActs }));
              }
            } catch (err) {
              console.warn('Activities fetch note:', err);
            }
          } else {
            // New user without completed profile
            setUserProfile(null);
            setIsAuthOpen(true);
          }
        } catch (err) {
          console.error('User profile load error:', err);
        }
      } else {
        setUserProfile(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Calculate pending mistakes count across all registered activities
  const pendingMistakesCount = Object.values(activities).reduce((acc, act) => {
    const unremedied =
      act.mistakeQuestionIds?.filter((qId) => !act.remediedQuestionIds?.includes(qId)) || [];
    return acc + unremedied.length;
  }, 0);

  const awardBadge = async (badgeId: string, badgeTitle: string, badgeIcon: string) => {
    if (userProfile && !userProfile.badges.includes(badgeId)) {
      const updatedBadges = [...userProfile.badges, badgeId];
      const updatedProfile = { ...userProfile, badges: updatedBadges, updatedAt: new Date().toISOString() };
      setUserProfile(updatedProfile);

      if (currentUser) {
        try {
          const userRef = doc(db, 'users', currentUser.uid);
          await setDoc(userRef, { badges: updatedBadges }, { merge: true });
        } catch (e) {
          console.error('Badge update error:', e);
        }
      }

      setNewBadgeToast({ title: badgeTitle, icon: badgeIcon });
      sound.playFanfare();
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
      setTimeout(() => setNewBadgeToast(null), 4000);
    }
  };

  const handleAddScore = async (points: number, stars: number) => {
    const nextScore = score + points;
    const nextStars = totalStars + stars;

    setScore(nextScore);
    setTotalStars(nextStars);

    setSubTopicScores((prev) => ({
      ...prev,
      [activeSubTopicId]: (prev[activeSubTopicId] || 0) + points,
    }));

    // Check badges
    if (nextScore >= 100) {
      awardBadge('speed_thinker', 'Hızlı Düşünür Rozeti', '⚡');
    }

    // Sync to Firestore if user profile exists
    if (currentUser && userProfile) {
      try {
        const userRef = doc(db, 'users', currentUser.uid);
        await setDoc(
          userRef,
          {
            totalScore: nextScore,
            totalStars: nextStars,
            updatedAt: new Date().toISOString(),
          },
          { merge: true }
        );
        setUserProfile((prev) => (prev ? { ...prev, totalScore: nextScore, totalStars: nextStars } : null));
      } catch (err) {
        console.error('Sync score error:', err);
      }
    }
  };

  const handleMarkTopicCompleted = async (topicId: string) => {
    let nextCompleted = completedSubTopicIds;
    if (!completedSubTopicIds.includes(topicId)) {
      nextCompleted = [...completedSubTopicIds, topicId];
      setCompletedSubTopicIds(nextCompleted);
    }

    awardBadge('first_step', 'İlk Adım Kâşifi', '🌟');
    if (nextCompleted.length >= 4) {
      awardBadge('champions_cup', 'Şampiyonlar Kupası', '🏆');
    }
    if (nextCompleted.length >= 16) {
      awardBadge('complete_unit', 'Ünite Fatihi', '🎖️');
    }

    if (currentUser && userProfile) {
      try {
        const userRef = doc(db, 'users', currentUser.uid);
        await setDoc(
          userRef,
          {
            completedTopicsCount: nextCompleted.length,
            updatedAt: new Date().toISOString(),
          },
          { merge: true }
        );
        setUserProfile((prev) => (prev ? { ...prev, completedTopicsCount: nextCompleted.length } : null));
      } catch (err) {
        console.error('Sync topic completion error:', err);
      }
    }
  };

  const handleSaveActivity = async (activityData: {
    subTopicId: string;
    unitId: number;
    completed: boolean;
    scoreEarned: number;
    starsEarned: number;
    mistakeQuestionIds: string[];
  }) => {
    const existing = activities[activityData.subTopicId];
    const updatedMistakes = Array.from(
      new Set([...(existing?.mistakeQuestionIds || []), ...activityData.mistakeQuestionIds])
    );

    const record: UserActivityRecord = {
      id: currentUser ? `${currentUser.uid}_${activityData.subTopicId}` : `local_${activityData.subTopicId}`,
      userId: currentUser?.uid || 'guest-student',
      classCode: userProfile?.classCode || 'DKA-5A',
      subTopicId: activityData.subTopicId,
      unitId: activityData.unitId,
      completed: activityData.completed,
      score: (existing?.score || 0) + activityData.scoreEarned,
      stars: (existing?.stars || 0) + activityData.starsEarned,
      mistakeQuestionIds: updatedMistakes,
      remediedQuestionIds: existing?.remediedQuestionIds || [],
      completedAt: existing?.completedAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setActivities((prev) => ({ ...prev, [activityData.subTopicId]: record }));

    // Save to Firestore if authenticated
    if (currentUser) {
      try {
        const docRef = doc(db, 'userActivities', record.id);
        await setDoc(docRef, record, { merge: true });
      } catch (err) {
        handleFirestoreError(err, OperationType.WRITE, `userActivities/${record.id}`);
      }
    }
  };

  const handleRemedyQuestion = async (subTopicId: string, questionId: string, bonusPoints: number) => {
    // Add bonus score
    handleAddScore(bonusPoints, 1);

    // Update activity record's remediedQuestionIds
    const act = activities[subTopicId];
    const prevRemedied = act?.remediedQuestionIds || [];
    const updatedRemedied = Array.from(new Set([...prevRemedied, questionId]));

    const updatedRecord: UserActivityRecord = act
      ? {
          ...act,
          remediedQuestionIds: updatedRemedied,
          score: act.score + bonusPoints,
          updatedAt: new Date().toISOString(),
        }
      : {
          id: currentUser ? `${currentUser.uid}_${subTopicId}` : `local_${subTopicId}`,
          userId: currentUser?.uid || 'guest-student',
          classCode: userProfile?.classCode || 'DKA-5A',
          subTopicId,
          unitId: 1,
          completed: true,
          score: bonusPoints,
          stars: 1,
          mistakeQuestionIds: [questionId],
          remediedQuestionIds: [questionId],
          completedAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

    setActivities((prev) => ({ ...prev, [subTopicId]: updatedRecord }));

    // Award Remedy Master Badge
    awardBadge('remedy_master', 'Telafi Ustası Rozeti', '🔄');

    if (currentUser) {
      try {
        const docRef = doc(db, 'userActivities', updatedRecord.id);
        await setDoc(docRef, updatedRecord, { merge: true });
      } catch (err) {
        console.error('Save remedy error:', err);
      }
    }
  };

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sound.setEnabled(next);
  };

  const currentTopic = getSubTopicById(activeSubTopicId) || allSubTopics[0];
  const currentUnit = getUnitBySubTopicId(currentTopic.id) || allUnits[0];

  const currentTopicIndex = allSubTopics.findIndex((t) => t.id === currentTopic.id);
  const prevTopic = currentTopicIndex > 0 ? allSubTopics[currentTopicIndex - 1] : undefined;
  const nextTopic = currentTopicIndex < allSubTopics.length - 1 ? allSubTopics[currentTopicIndex + 1] : undefined;

  const openNotebookWithPrompt = (promptText: string) => {
    setNotebookPrompt(promptText);
    setIsNotebookOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col antialiased relative">
      {/* Badge Toast */}
      {newBadgeToast && (
        <div className="fixed top-20 right-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl border-2 border-amber-400 flex items-center gap-3 animate-in slide-in-from-top duration-300">
          <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center text-xl font-bold shrink-0">
            {newBadgeToast.icon}
          </div>
          <div>
            <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
              Yeni Rozet Kazanıldı!
            </span>
            <span className="text-sm font-bold text-white">{newBadgeToast.title}</span>
          </div>
        </div>
      )}

      {/* Top Navigation */}
      <Navbar
        score={score}
        totalStars={totalStars}
        completedQuizzesCount={completedSubTopicIds.length}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onOpenGlossary={() => setIsGlossaryOpen(true)}
        onOpenEsma={() => setIsEsmaOpen(true)}
        onOpenNotebook={() => {
          setNotebookPrompt('');
          setIsNotebookOpen(true);
        }}
        userProfile={userProfile}
        remedyPendingCount={pendingMistakesCount}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenRemedy={() => setIsRemedyOpen(true)}
        onOpenLeaderboard={() => setIsLeaderboardOpen(true)}
        onOpenTeacherDashboard={() => setIsTeacherDashboardOpen(true)}
      />

      {/* Mobile Subheader to toggle units drawer */}
      <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-2 flex items-center justify-between">
        <button
          onClick={() => setSidebarOpenMobile(true)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 cursor-pointer"
        >
          <Menu className="w-4 h-4" />
          <span>Üniteler & Konu Listesi</span>
        </button>

        <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
          {currentTopic.number} - {currentTopic.title}
        </span>
      </div>

      {/* Main Container Layout */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Left Sidebar Menu */}
        <Sidebar
          units={allUnits}
          activeSubTopicId={currentTopic.id}
          onSelectSubTopic={(id) => {
            setActiveSubTopicId(id);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          completedSubTopicIds={completedSubTopicIds}
          subTopicScores={subTopicScores}
          isOpenMobile={sidebarOpenMobile}
          onCloseMobile={() => setSidebarOpenMobile(false)}
        />

        {/* Center / Main Content Stage */}
        <main className="flex-1 overflow-x-hidden">
          <TopicViewer
            topic={currentTopic}
            unit={currentUnit}
            onNavigateNext={
              nextTopic
                ? () => {
                    setActiveSubTopicId(nextTopic.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                : undefined
            }
            onNavigatePrev={
              prevTopic
                ? () => {
                    setActiveSubTopicId(prevTopic.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                : undefined
            }
            onAddScore={handleAddScore}
            onMarkTopicCompleted={handleMarkTopicCompleted}
            onOpenNotebookWithPrompt={openNotebookWithPrompt}
            onOpenRemedyModal={() => setIsRemedyOpen(true)}
            onSaveActivity={handleSaveActivity}
          />
        </main>
      </div>

      {/* Modals */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        currentUser={currentUser}
        userProfile={userProfile}
        onProfileUpdated={(p) => setUserProfile(p)}
      />

      <RemedyModal
        isOpen={isRemedyOpen}
        onClose={() => setIsRemedyOpen(false)}
        activities={activities}
        onRemedyQuestion={handleRemedyQuestion}
      />

      <ClassroomLeaderboardModal
        isOpen={isLeaderboardOpen}
        onClose={() => setIsLeaderboardOpen(false)}
        currentUserProfile={userProfile}
      />

      <TeacherDashboardModal
        isOpen={isTeacherDashboardOpen}
        onClose={() => setIsTeacherDashboardOpen(false)}
        currentUserProfile={userProfile}
      />

      <GlossaryModal
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
      />

      <EsmaMirrorModal
        isOpen={isEsmaOpen}
        onClose={() => setIsEsmaOpen(false)}
      />

      <StudentNotebookModal
        isOpen={isNotebookOpen}
        onClose={() => setIsNotebookOpen(false)}
        initialPrompt={notebookPrompt}
      />
    </div>
  );
}
