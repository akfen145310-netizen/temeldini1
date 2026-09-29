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

export interface EnrichmentStory {
  parableTitle: string; // Temsili Hikaye / Analoji Başlığı
  parableStory: string; // Risale-i Nur mantığıyla kurgulanmış temsili hikaye
  transitionToTruth: string; // Temsilden Hakikate Geçiş
  tefekkurSteps: string[]; // Tefekkür basamakları
  quranSunnahConnection: string; // Ayet & Sünnet nuru
}

export interface EducatorParentGuide {
  pedagogicalNote: string; // Veli & Öğretmene Pedagojik Yaklaşım Tavsiyesi
  homeAndClassroomActivities: string[]; // Evde ve sınıfta canlandırma / uygulama etkinlikleri
  dialogueStarters: string[]; // Çocuğa/öğrenciye yöneltilebilecek derin sohbet başlatıcı sorular
  dailyLifeAnalogy: string; // Günlük hayattan modern analoji (teknoloji/doğa/bilim)
}

export interface DefinitionItem {
  term: string;
  definition: string;
  example: string;
}

export interface TopicGlossarySummary {
  summaryText: string; // Yapılandırılmış ve akıcı konu özeti
  definitions: DefinitionItem[]; // Tanımlar ve somut örnekler
}

export interface ClassicExamQuestion {
  id: string;
  questionNumber: number;
  questionText: string; // Klasik sınavda çıkabilecek soru
  sampleAnswer: string; // Tam puanlık örnek cevap
  scoringCriteria: string; // Puanlama kriteri & anahtar kavramlar
  pointValue: number; // Soru puanı (örn: 10 veya 20 puan)
}

export interface EnrichmentSection {
  title: string;
  subtitle: string;
  risaleStyleNarrative: EnrichmentStory;
  educatorGuide: EducatorParentGuide;
  conceptSummary: TopicGlossarySummary;
  classicExamQuestions: ClassicExamQuestion[];
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

  // Yeni: Zenginleştirin - Veli & Öğretmen Rehberi, Temsilden Hakikate, Tanımlar & Klasik Sınav Soruları
  enrichment?: EnrichmentSection;

  // Bölüm 2: Meraklı Zihinler - Etkileşimli Soru Cevap (10 soru)
  section2: {
    dialogues: DialogueItem[];
  };

  // Bölüm 3: Hızlı Düşün - Doğru mu Yanlış mı? (10 soru)
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

