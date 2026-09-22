import { BadgeItem } from '../types';

export const BADGES_DATA: BadgeItem[] = [
  {
    id: 'first_step',
    title: 'İlk Adım Kâşifi',
    description: 'İlk konuyu başarıyla tamamladın ve atölyeye adım attın!',
    icon: '🌟',
    category: 'score'
  },
  {
    id: 'speed_thinker',
    title: 'Hızlı Düşünür',
    description: 'Hızlı Düşün Doğru/Yanlış yarışmasında tüm soruları bildin!',
    icon: '⚡',
    category: 'score'
  },
  {
    id: 'champions_cup',
    title: 'Şampiyonlar Kupası',
    description: 'Şampiyonlar Testinde yeni nesil beceri temelli soruları fulledin!',
    icon: '🏆',
    category: 'unit'
  },
  {
    id: 'remedy_master',
    title: 'Telafi Ustası',
    description: 'Eksiklerini Tamamla atölyesinde yanlış yaptığın soruları tekrar çözüp telafi ettin!',
    icon: '🔄',
    category: 'remedy'
  },
  {
    id: 'reflection_explorer',
    title: 'Tefekkür Kâşifi',
    description: 'Doğadaki analojileri ve Esmâ-i Hüsnâ Aynasını derinlemesine inceledin!',
    icon: '🌿',
    category: 'score'
  },
  {
    id: 'leader_podium',
    title: 'Sınıf Öncüsü',
    description: 'Sınıfın puan sıralamasında ilk 3 derece arasına girdin!',
    icon: '👑',
    category: 'leader'
  },
  {
    id: 'complete_unit',
    title: 'Ünite Fatihi',
    description: 'Tam bir üniteyi tüm alt başlıklarıyla eksiksiz tamamladın!',
    icon: '🎖️',
    category: 'unit'
  }
];
