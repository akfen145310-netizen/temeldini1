export interface DialogueItem {
  id: string;
  studentQuestion: string;
  studentAvatar?: string;
  guideAnswer: string;
  reflectionPrompt?: string;
}

export interface TrueFalseQuestion {
  id: string;
  statement: string;
  isTrue: boolean;
  explanation: string;
}

export interface MultipleChoiceQuestion {
  id: string;
  scenario: string;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  solutionLogic: string;
}

export interface NatureAnalogy {
  title: string;
  story: string;
  lesson: string;
  iconName?: string;
}

export interface MiracleStory {
  title: string;
  narrative: string;
  meaning: string;
}

export interface QuranVerse {
  surah: string;
  verseNumber: string | number;
  text: string;
  meaning: string;
}

export interface HadithItem {
  narrator?: string;
  source: string;
  text: string;
}

export interface SubTopic {
  id: string; // e.g. "1.1"
  unitId: number;
  number: string;
  title: string;
  summary: string;
  keyConcepts: string[];
  
  // Bölüm 1: Keşif Yolculuğu - Konu Anlatımı
  section1: {
    leadIn: string; // Merak uyandırıcı giriş ("Hiç düşündün mü?")
    natureAnalogy: NatureAnalogy;
    mainExplanation: string[];
    miracleStory?: MiracleStory;
    verses: QuranVerse[];
    hadiths: HadithItem[];
    reflectiveQuestions: string[];
  };

  // Bölüm 2: Meraklı Zihinler - Etkileşimli Soru Cevap (3 adet)
  section2: {
    dialogues: DialogueItem[];
  };

  // Bölüm 3: Hızlı Düşün - Doğru mu Yanlış mı? (5 adet)
  section3: {
    questions: TrueFalseQuestion[];
  };

  // Bölüm 4: Şampiyonlar Testi - Çoktan Seçmeli Görev (3 adet)
  section4: {
    questions: MultipleChoiceQuestion[];
  };
}

export interface Unit {
  id: number;
  title: string;
  badge: string;
  color: string; // Tailwind color token
  description: string;
  subTopics: SubTopic[];
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  unitRelated?: number;
  category: 'inanc' | 'ibadet' | 'ahlak' | 'esma';
}

export interface EsmaItem {
  arabicName: string;
  name: string;
  meaning: string;
  unit: number;
  poem: string; // From the textbook poem (DEM Yayınları, Mustafa Yılmaz)
  reflection: string;
}

export interface UserProfile {
  userId: string;
  name: string;
  email: string;
  role: 'student' | 'teacher';
  school: string;
  className: string;
  studentNumber: string;
  classCode: string;
  totalScore: number;
  totalStars: number;
  completedTopicsCount: number;
  badges: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Classroom {
  code: string;
  teacherId: string;
  teacherName: string;
  school: string;
  className: string;
  studentCount?: number;
  createdAt: string;
}

export interface UserActivityRecord {
  id: string; // composite: `${userId}_${subTopicId}`
  userId: string;
  classCode: string;
  subTopicId: string;
  unitId: number;
  completed: boolean;
  score: number;
  stars: number;
  mistakeQuestionIds: string[]; // e.g. ["q1", "tf-2"]
  remediedQuestionIds: string[]; // successfully remedied via "Eksiklerini Tamamla"
  completedAt: string;
  updatedAt: string;
}

export interface BadgeItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'score' | 'unit' | 'remedy' | 'leader';
}

