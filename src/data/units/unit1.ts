import { Unit } from '../../types';

export const unit1: Unit = {
  id: 1,
  title: '1. ÜNİTE: DİNİMİZ İSLAM',
  badge: 'Temel İnanç & Rehberlik',
  color: 'emerald',
  description: 'Kur’an ve sünnetin hayatımızdaki yeri, fıtrat ve inanma ihtiyacı, mümin kimliği ve Allah’ın güzel isimleri (Hâdi, Selam, Vekîl).',
  subTopics: [
    {
      id: '1.1',
      unitId: 1,
      number: '1.1',
      title: 'Kur’an ve Sünnetin Hayatımdaki Yeri',
      summary: 'Kâinat kitabının tercümesi olan Kur’an-ı Kerim ve onu hayatıyla en mükemmel şekilde uygulayan Peygamberimizin sünneti.',
      keyConcepts: ['Kur’an-ı Kerim', 'Sünnet', 'Vahiy', 'Ahlak', 'Rehber'],
      section1: {
        leadIn: 'Gökyüzündeki milyarlarca yıldızın birbirine çarpmadan akıp gitmesini, bir bahçedeki rengârenk çiçeklerin aynı topraktan beslenip bambaşka kokular yaymasını hiç düşündün mü?',
        natureAnalogy: {
          title: 'Büyük Ormandaki Harita ve Usta Rehber',
          story: 'Düşün ki uçsuz bucaksız, harika meyvelerle dolu ama yolları kıvrımlı devasa bir ormana girdin. Elinde ormanın her sırrını, tehlikeli uçurumlarını ve gizli şifalı su kaynaklarını gösteren kusursuz bir "Harita" var. Ama bir de o ormanı adım adım bilen, haritayı nasıl okuyacağını sana sevecenlikle gösteren, tehlikelerden elinden tutup seni koruyan "Usta bir Rehber" sana eşlik ediyor. İşte hayat yolculuğumuzda o eşsiz ilahi harita Kur’an-ı Kerim’dir; bize yolu bizzat yürüyerek gösteren şefkatli rehber ise Sevgili Peygamberimiz Hz. Muhammed’dir (s.a.v).',
          lesson: 'Harita olmadan yönümüzü şaşırırız; rehber olmadan da haritadaki incelikleri eksiksiz hayata geçiremeyiz. Kur’an ve sünnet birbirinden ayrılamaz iki ışıktır.'
        },
        mainExplanation: [
          'Yüce Allah, insanı düşünebilen, aklını kullanarak çevresini inceleyen ve doğruyu seçebilen özel bir varlık olarak yarattı. Nasıl ki karanlık bir denizde yol alan gemiler deniz fenerine muhtaçsa, insan da hayat denizinde doğru yolu bulmak için ilahi bir rehbere ihtiyaç duyar.',
          'Kur’an-ı Kerim; sözlükte "okumak, toplamak ve bir araya getirmek" anlamına gelir. Terim olarak ise Peygamber Efendimize vahiy yoluyla indirilen, mushaflarda yazılı, nesilden nesile ezberlenerek ve okunarak hiç bozulmadan günümüze ulaşan Allah’ın kutsal kelamıdır.',
          'Rabbimiz Hicr suresi 9. ayette: "Şüphesiz o zikri (Kur’an’ı) biz indirdik biz! Onun koruyucusu da elbette biziz." buyurarak bu ilahi kitabın kıyamete kadar korunacağını müjdelemiştir.',
          'Sünnet ise sözlükte "yol, âdet, gidişat" demektir. Dinî bir kavram olarak Peygamberimizin sözleri, örnek davranışları ve arkadaşlarının (sahabenin) yaptığı güzel davranışları onaylamasıdır.',
          'Kur’an bize namaz kılmayı emreder; fakat sabah, öğle, ikindi, akşam ve yatsı namazlarının kaç rekat olduğunu, rüku ve secdelerin nasıl yapılacağını Peygamberimizin bizzat kılmasıyla öğreniriz. O, "Beni nasıl namaz kılıyor gördüyseniz siz de öyle kılınız" buyurmuştur.',
          'Zekâtın hangi mallardan ne kadar verileceği, hac ibadetinin aşamaları da sünnet ile açıklığa kavuşmuştur. Peygamberimizin hayatı, Kur’an ahlakının canlı bir şekilde yaşanmış hâlidir.'
        ],
        miracleStory: {
          title: 'Kupkuru Parmaklardan Fışkıran Su Mucizesi',
          narrative: 'Peygamber Efendimiz (s.a.v) ashâbıyla birlikte susuz bir çölde yolculuk ederken suları tükendi. Küçük bir kapta bir avuç kadar su kalmıştı. Peygamberimiz mübarek elini kabın içine koydu. O anda, parmaklarının arasından pırıl pırıl, buz gibi tatlı bir su çeşme gibi fışkırmaya başladı! Yüzlerce yolcu ve bütün hayvanları o sudan kana kana içti, kırbalarını doldurdu. Kâinatın Sahibi, en sevgili elçisinin elini susuz çölde bir rahmet musluğuna çevirmişti.',
          meaning: 'Doğadaki her varlık Allah’ın emrine boyun eğer; cansız sular ve kayalar bile O’nun elçisini tanır ve itaat eder.'
        },
        verses: [
          {
            surah: 'Hicr',
            verseNumber: 9,
            text: 'إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ',
            meaning: 'Şüphesiz o zikri (Kur’an’ı) biz indirdik biz! Onun koruyucusu da elbette biziz.'
          },
          {
            surah: 'Ahzab',
            verseNumber: 21,
            text: 'لَقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ',
            meaning: 'Andolsun, Allah’ın Resulü’nde sizin için; Allah’a ve ahiret gününe kavuşmayı umanlar için güzel bir örnek vardır.'
          }
        ],
        hadiths: [
          {
            source: 'Tirmizî, Fedâilü’l-Kur’ân, 15',
            text: 'Sizin en hayırlınız, Kur’an’ı öğrenen ve öğretendir.'
          },
          {
            source: 'Buhârî, Ezan, 18',
            text: 'Beni nasıl namaz kılıyor gördüyseniz, siz de namazı öyle kılınız.'
          }
        ],
        reflectiveQuestions: [
          'Eğer bir makine aldığında kullanma kılavuzunu okumazsan ne olur? Peki kâinattaki en mükemmel varlık olan insanın hayat kılavuzu nedir?',
          'Peygamberimizin tebessüm etmeyi bile bir hediye (sadaka) sayması, senin okul arkadaşlarınla ilişkini nasıl güzelleştirir?'
        ]
      },
      section2: {
        dialogues: [
          {
            id: 'd1-1',
            studentQuestion: 'Öğretmenim, Kur’an-ı Kerim elimizdeyken Peygamberimizin sünnetine neden ayrıca ihtiyaç duyarız?',
            guideAnswer: 'Çok güzel bir soru sevgili öğrencim! Düşün ki elinde dünyanın en lezzetli kek tarif kitabı var. Malzemelerin adı yazıyor ama un ile sütün hangi sırayla karıştırılacağını, fırının kaç derecede çalışacağını usta bir şeften görerek öğrenmek istemez misin? Kur’an genel ilkeleri koyar: "Namaz kılın", "Zekât verin" der. Ama namazın vakitlerini, dualarını ve secdelerini bize en tatlı şekilde gösteren Peygamberimizin sünnetidir. İkisi bir araya gelince hayatımız nurlanır.',
            reflectionPrompt: 'Sen Peygamberimizin hangi sünnetini günlük hayatında severek uyguluyorsun?'
          },
          {
            id: 'd1-2',
            studentQuestion: 'Kur’an-ı Kerim’in bugüne kadar tek bir harfi bile değişmeden gelmesini aklım nasıl kavrayabilir?',
            guideAnswer: 'Harika bir merak! Tarih boyunca hiçbir kitap, yüzbinlerce hafızın zihninde kelimesi kelimesine ezberlenmemiştir. İndirildiği ilk günden beri hem vahiy kâtipleri tarafından taşlara, ceylan derilerine yazıldı; hem de binlerce sahabi kalbine nakşetti. Dünyanın neresine gidersen git, İstanbul’daki bir Kur’an ile Tokyo veya Kahire’deki mushafın her harfi aynıdır. Çünkü onu bizzat kâinatın Yaratıcısı koruma sözü vermiştir.',
            reflectionPrompt: 'Evrendeki düzenin bozulmadan korunması ile Kur’an’ın korunması arasında nasıl bir bağ kurabilirsin?'
          },
          {
            id: 'd1-3',
            studentQuestion: 'Sünnete uymak sadece ibadetlerle mi ilgilidir, okulda veya sokakta da sünnet var mıdır?',
            guideAnswer: 'Sünnet hayatın ta kendisidir! Eve girerken selam vermek, bir yudum suyu besmeleyle ve oturarak içmek, yoldaki bir taşı başkası takılıp düşmesin diye kenara çekmek, arkadaşına tebessüm etmek, israf etmemek... Bunların her biri Peygamberimizin ışıldayan sünnetleridir.',
            reflectionPrompt: 'Bugün okulda sünnete uygun yapabileceğin en kolay 3 davranışı sayabilir misin?'
          }
        ]
      },
      section3: {
        questions: [
          {
            id: 'tf1-1',
            statement: 'Kur’an-ı Kerim, indirildiği andan itibaren hem yazılarak hem de ezberlenerek korunmuş ve günümüze tek bir harfi değişmeden ulaşmıştır.',
            isTrue: true,
            explanation: 'Tebrikler! Rabbimiz Hicr suresi 9. ayette Kur’an’ın koruyucusunun bizzat Kendisi olduğunu bildirmiştir.'
          },
          {
            id: 'tf1-2',
            statement: 'Sünnet sadece Peygamberimizin söylediği sözlerden ibarettir; davranışlarını kapsamaz.',
            isTrue: false,
            explanation: 'Harika dikkat! Sünnet; Peygamberimizin sözleri, fiilleri (davranışları) ve sahabenin güzel işlerini onaylamasının tümüdür.'
          },
          {
            id: 'tf1-3',
            statement: 'Kur’an-ı Kerim’de namazın farz olduğu bildirilmiş; nasıl kılınacağı ve rekat sayıları ise sünnetle açıklanmıştır.',
            isTrue: true,
            explanation: 'Doğru bildin! Peygamberimiz "Beni nasıl namaz kılıyor gördüyseniz öyle kılınız" diyerek bizlere rehberlik etmiştir.'
          },
          {
            id: 'tf1-4',
            statement: 'Kur’an-ı Kerim sadece mezarlıklarda okunmak ve duvara asılmak için indirilmiş bir kitaptır.',
            isTrue: false,
            explanation: 'Kesinlikle yanlış! Kur’an, ayetleri üzerinde düşünmemiz, anlamamız ve ahlakımızı güzelleştirerek yaşamamız için indirilmiştir.'
          },
          {
            id: 'tf1-5',
            statement: 'Peygamber Efendimize uymak ve onun sünnetini benimsemek, aslında Allah’a itaat etmenin bir göstergesidir.',
            isTrue: true,
            explanation: 'Tebrikler! Nisa suresi 80. ayette "Kim Peygamber’e itaat ederse Allah’a itaat etmiş olur" buyrulmaktadır.'
          }
        ]
      },
      section4: {
        questions: [
          {
            id: 'mc1-1',
            scenario: 'Ali, fen bilgisi dersinde mikroskopla bir soğan zarına baktığında hücrelerin kusursuz dizilişini görünce hayret içinde kaldı. Eve geldiğinde dedesi ona Kur’an-ı Kerim’den göklerin ve yerin dengesiyle ilgili bir ayet okudu.',
            question: 'Buna göre Kur’an-ı Kerim ile ilgili aşağıdakilerden hangisi söylenebilir?',
            options: {
              A: 'Sadece geçmişte yaşamış kavimlerin masallarını anlatır.',
              B: 'Kâinattaki eşsiz düzeni fark ettirerek insanı düşünmeye ve tefekküre sevk eder.',
              C: 'Yalnızca belirli yaş gruplarının anlayabileceği gizemli bir kitaptır.',
              D: 'İnsanların günlük hayatlarıyla hiçbir ilgisi bulunmayan teorik kurallar içerir.'
            },
            correctAnswer: 'B',
            solutionLogic: 'Kur’an, insanı çevresindeki harikalara bakmaya, aklını kullanmaya ve her şeyin arkasındaki sonsuz ilim ve kudreti tefekkür etmeye davet eder.'
          },
          {
            id: 'mc1-2',
            scenario: 'Öğretmen sınıfta: "Çocuklar, Kur’an-ı Kerim bizlere zenginlerin ihtiyaç sahiplerine zekât vermesini emreder. Ancak hangi maldan kırkta bir, hangisinden onda bir verileceğini bize bizzat öğreten kimdir?" diye sordu.',
            question: 'Öğretmenin bu sorusuna verilecek en doğru yanıt ve gerekçesi hangisidir?',
            options: {
              A: 'Eski krallardır; çünkü zekâtı onlar toplamıştır.',
              B: 'Peygamber Efendimizdir; çünkü sünnet, Kur’an’ın genel hükümlerini açıklayıp uygulamaya koyar.',
              C: 'Kervan sahipleridir; çünkü malları en iyi onlar ölçmüştür.',
              D: 'Tarihçilerdir; çünkü eski uygulamaları onlar kaydetmiştir.'
            },
            correctAnswer: 'B',
            solutionLogic: 'Sünnet, Kur’an ayetlerini açıklayan, sınırlarını ve uygulama şekillerini gösteren en temel ikinci kaynaktır.'
          },
          {
            id: 'mc1-3',
            scenario: 'Zeynep, arkadaşı Ayşe ile konuşurken: "Ben sadece Kur’an okurum, Peygamberimizin sözlerine bakmama gerek yok" diyen birine rastlar.',
            question: 'Zeynep’in bu kişiye Kur’an ve sünnet bütünlüğünü anlatmak için verebileceği en ikna edici delil hangisidir?',
            options: {
              A: 'Kur’an’da namazın rekatlarının ve kılınış şeklinin detayları yer almaz; bunları sünnet olmadan uygulayamayız.',
              B: 'Sünnete uymak sadece Ramazan ayında gereklidir.',
              C: 'Sünnet sadece Arapça bilenler için geçerlidir.',
              D: 'Peygamberimiz sadece kendi dönemindeki insanlara örnek olmuştur.'
            },
            correctAnswer: 'A',
            solutionLogic: 'Kur’an namazı, orucu, zekâtı emreder; fakat bunların nasıl yerine getirileceği ayrıntılarıyla sünnet sayesinde anlaşılır ve uygulanır.'
          }
        ]
      }
    },
    {
      id: '1.2',
      unitId: 1,
      number: '1.2',
      title: 'Niçin İnanıyorum?',
      summary: 'İnsanın yaradılışındaki fıtrat çekirdeği, kâinat kitabındaki mükemmel intizam ve kalbe huzur veren iman esasları.',
      keyConcepts: ['İman', 'Fıtrat', 'Tasdik', 'İkrar', 'Âmentü'],
      section1: {
        leadIn: 'Kupkuru bir elma çekirdeğini avucuna aldığında, onun içinde gizlenmiş göğe uzanan yeşil yaprakları, pembe çiçekleri ve sulu elmaları olan koca bir ağacın şifresini kimin yerleştirdiğini hiç düşündün mü?',
        natureAnalogy: {
          title: 'Saraydaki Gizemli Usta ve İntizam Saati',
          story: 'Bir gün ormanda yürürken ıssız bir yerde altın kordonlu, pırıl pırıl işleyen, saniyeleri hiç şaşmayan harika bir kol saati bulduğunu hayal et. "Bu saat rüzgârın esmesiyle tozların ve demir parçalarının rastgele birbirine çarpmasıyla kendi kendine oluvermiş" diyebilir misin? Elbette hayır! Akıl hemen der ki: Bu saatin çarklarını incecik hesaplayan usta bir saatçi vardır. İşte gökyüzündeki Güneş, Dünya’mızın etrafındaki yörüngesi ve vücudumuzdaki kalbin atışı o saatten trilyonlarca kat daha dakik ve intizamlı bir saattir.',
          lesson: 'Kusursuz bir eser, ancak sonsuz ilim ve kudret sahibi bir Ustanın varlığıyla açıklanabilir. Kâinattaki her zerre Yaratıcısını haykırır.'
        },
        mainExplanation: [
          'İnsan, doğası gereği yüce bir Yaratıcıya inanma ve O’na sığınma ihtiyacıyla doğar. Bu tertemiz doğuştan gelen yönelişe "fıtrat" denir. Peygamberimiz "Her doğan çocuk fıtrat üzere doğar..." buyurmuştur.',
          'Karanlık bir gecede gökyüzüne baktığımızda parıldayan milyarlarca yıldız, yerin altında uyuyan tohumların baharda yemyeşil filizlerle canlanması tesadüf olamaz. Rum suresi 50. ayette: "Allah’ın rahmetinin izlerine bir bak: Ölü toprağa nasıl can veriyor..." buyrulur.',
          'İman; kelime anlamıyla güvenmek, şüphe duymadan tasdik etmek ve teslim olmaktır. Terim olarak ise Allah’ın varlığına, birliğine ve gönderdiği esaslara kalben inanıp (tasdik) dil ile ifade etmektir (ikrar).',
          'İslam’ın inanç esasları "Âmentü" duasıyla özetlenir: Allah’a, meleklerine, kitaplarına, peygamberlerine, ahiret gününe, kadere (hayır ve şerrin Allah’tan olduğuna) iman. Bu şartlar bir zincirin halkaları gibidir; biri koparsa bütünlüğü bozulur.',
          'İman, insanın iç dünyasına sonsuz bir huzur ve manevi bir dayanak kazandırır. Kur’an-ı Kerim’de buyrulduğu gibi: "... Biliniz ki kalpler ancak Allah’ı anmakla huzur bulur." (Rad suresi 28. ayet).'
        ],
        miracleStory: {
          title: 'Peygamberimize Selam Veren Kuru Taşlar ve Ağaçlar',
          narrative: 'Peygamber Efendimiz (s.a.v) peygamberlikle görevlendirildiği ilk günlerde Mekke sokaklarında yürürken yol kenarındaki taşlar ve dağlardaki ağaçlar dile gelir, açıkça "Es-selâmü aleyke yâ Resûlallâh! (Sana selam olsun ey Allah’ın Elçisi!)" diyerek seslenirdi. Hatta bir gün yanına çağırdığı bir ağaç, köklerini topraktan çıkarıp yerleri yararak Peygamberimizin huzuruna kadar gelmiş, emrini dinlemiş ve sonra yine yerine dönmüştü.',
          meaning: 'İman gözüyle bakan insan anlar ki; dağlar, taşlar ve ağaçlar da Yaratıcılarının emrindedir ve O’nun elçisine hürmet gösterir.'
        },
        verses: [
          {
            surah: 'Râd',
            verseNumber: 28,
            text: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
            meaning: '... Biliniz ki kalpler ancak Allah’ı anmakla huzur bulur.'
          },
          {
            surah: 'Rûm',
            verseNumber: 50,
            text: 'فَانْظُرْ إِلَىٰ آثَارِ رَحْمَتِ اللَّهِ كَيْفَ يُحْيِي الْأَرْضَ بَعْدَ مَوْتِهَا',
            meaning: 'Allah’ın rahmetinin izlerine bir bak: Ölü toprağa nasıl can veriyor...'
          }
        ],
        hadiths: [
          {
            source: 'Buhârî, Cenâiz, 92',
            text: 'Her doğan çocuk fıtrat üzere doğar...'
          },
          {
            source: 'Müslim, Îmân, 1',
            text: 'İman; Allah’a, meleklerine, kitaplarına, peygamberlerine, ahiret gününe, kadere, hayrın ve şerrin Allah’tan olduğuna inanmandır.'
          }
        ],
        reflectiveQuestions: [
          'Arılar mühendislik harikası altıgen petekleri yapmayı ve bal üretmeyi kendi kendilerine mi öğrendiler, yoksa kalplerine bu ilhamı fısıldayan bir Sahip mi var?',
          'Zor ve korkulu anlarında içinde uyanan "Beni duyan biri var" hissi sana fıtratın hakkında ne söylüyor?'
        ]
      },
      section2: {
        dialogues: [
          {
            id: 'd1-4',
            studentQuestion: 'Öğretmenim, Allah’ı gözlerimizle göremiyoruz, O’nun varlığına nasıl bu kadar kesin inanabiliyoruz?',
            guideAnswer: 'Çok haklı ve zekice bir soru! Gel etrafımıza bakalım: Aklını, sevgini, merhametini ya da nefes aldığımız rüzgârı gözünle görebiliyor musun? Hayır! Ama rüzgâr yaprakları salladığında varlığını anlarsın; aklını çözdüğün problemde, sevgini annene sarılırken hissedersin. İşte kâinattaki Güneş’in doğuşu, gözümüzün kusursuz görmesi, baharda dirilen milyonlarca çiçek de Allah’ın sonsuz ilim ve kudret rüzgârının en açık eserleridir.',
            reflectionPrompt: 'Göremediğin ama varlığından zerre kadar şüphe etmediğin başka hangi duygular ve gerçekler var?'
          },
          {
            id: 'd1-5',
            studentQuestion: 'Fıtrat nedir ve neden her insan bebekken tertemiz doğar?',
            guideAnswer: 'Fıtrat, Rabbimizin her insanın kalbine koyduğu manevi pusuladır. Nasıl ki pusulanın ibresi nereye dönersen dön daima kuzeyi gösterir; insanın fıtratı da yaratılışında iyiliğe, adalete ve bir olan Allah’a yönelir. Sonradan çevresel etkiler bu pusulanın üstünü tozlandırsa da insan derin bir sessizlikte kalbini dinlediğinde daima Hakk’ı arar.',
            reflectionPrompt: 'Küçük bir çocuğun haksızlık karşısında hemen üzülmesi sence fıtratın bir sesi olabilir mi?'
          },
          {
            id: 'd1-6',
            studentQuestion: 'İmanın şartlarından birine inanıp diğerine inanmasak ne olur?',
            guideAnswer: 'İman esasları bir uçağın kanatları, motoru ve kontrol paneli gibidir. "Uçağın her şeyi tam olsun ama motoruna inanmıyorum" dersen o uçak uçabilir mi? Ya da bir binanın kolonlarından birini kesersen bina ayakta kalır mı? Âmentü’deki 6 esas birbirine kopmaz bağlarla bağlıdır; hepsi birlikte kalbe nur ve can verir.',
            reflectionPrompt: 'Ahiret inancı olmasaydı dünyadaki haksızlıklar karşısında insan ne hissederdi?'
          }
        ]
      },
      section3: {
        questions: [
          {
            id: 'tf1-6',
            statement: 'Fıtrat, her insanın doğuştan getirdiği Allah’a inanma ve iyiliğe yönelme kabiliyetidir.',
            isTrue: true,
            explanation: 'Doğru! Peygamberimiz her çocuğun tertemiz bir fıtrat üzere doğduğunu haber vermiştir.'
          },
          {
            id: 'tf1-7',
            statement: 'İman sadece dille "inandım" demekle tamam olur, kalbin tasdik etmesine lüzum yoktur.',
            isTrue: false,
            explanation: 'Yanlış! İmanın temeli kalbin onaylaması (tasdik) ve dilin ikrar etmesidir. Kalpte olmayan iddia imanı oluşturmaz.'
          },
          {
            id: 'tf1-8',
            statement: 'Kâinattaki düzen, mevsimlerin şaşmaması ve canlıların muhteşem donanımı bir Yaratıcının varlığının delilleridir.',
            isTrue: true,
            explanation: 'Tebrikler! Tefekkür eden bir akıl, evrendeki hiçbir intizamın tesadüf eseri olamayacağını anlar.'
          },
          {
            id: 'tf1-9',
            statement: 'Ahirete iman, hayatın ölümle bitmediğini ve yapılan hiçbir iyiliğin karşılıksız kalmayacağını bilerek insana huzur verir.',
            isTrue: true,
            explanation: 'Doğru! Ahiret inancı adalet ve sorumluluk bilincini pekiştirir, kalbe derin bir teselli bağışlar.'
          },
          {
            id: 'tf1-10',
            statement: 'İslam’ın inanç esasları birbirinden bağımsızdır; beşine inanıp birini inkâr etmek mümindir sayılmaya yeter.',
            isTrue: false,
            explanation: 'Yanlış! İman bir bütündür; inanç esaslarının tamamını tereddütsüz kabul etmek gerekir.'
          }
        ]
      },
      section4: {
        questions: [
          {
            id: 'mc1-4',
            scenario: 'Emre, bahçedeki karıncaların yuvalarına kış için buğday tanelerini taşırken onları izledi. Karıncaların hiç çarpışmadan, yardımlaşarak yük taşıdığını ve buğday tanelerinin çimlenmesini engellemek için ikiye böldüklerini öğrendiğinde çok şaşırdı.',
            question: 'Emre’nin bu gözlemi ve yaşadığı hayranlık aşağıdaki kavramlardan en çok hangisiyle ilişkilidir?',
            options: {
              A: 'Doğayı kendi kendine işleyen sahipsiz bir makine sanmak',
              B: 'Kâinattaki hikmet ve ölçüyü okuyarak tefekkür etmek ve Yaratıcıya imanını pekiştirmek',
              C: 'Sadece fen bilgisi notunu yükseltmeye çalışmak',
              D: 'Hayvanların insanlardan daha güçlü olduğunu kanıtlamak'
            },
            correctAnswer: 'B',
            solutionLogic: 'Karıncanın buğdayı bölme ilhamı ve kusursuz nizamı, kâinat kitabını tefekkürle okuyan insanın Rabbine olan imanını güçlendirir.'
          },
          {
            id: 'mc1-5',
            scenario: 'Kur’an-ı Kerim’de şöyle buyrulur: "Peygamber, Rabbinden kendisine indirilene iman etti, müminler de. Her biri Allah’a, meleklerine, kitaplarına ve peygamberlerine iman ettiler..." (Bakara suresi 285. ayet)',
            question: 'Bu ayet-i kerime doğrudan hangi temel konuyu bildirmektedir?',
            options: {
              A: 'İslam’ın inanç esaslarını',
              B: 'Ticaret ahlakının kurallarını',
              C: 'Miras taksiminin nasıl yapılacağını',
              D: 'Savaş hukuku ve barış şartlarını'
            },
            correctAnswer: 'A',
            solutionLogic: 'Ayet, müminlerin inanmakla yükümlü olduğu temel inanç esaslarını (Âmentü esaslarını) açıkça beyan etmektedir.'
          },
          {
            id: 'mc1-6',
            scenario: 'Selin, sınav öncesinde çok heyecanlandığında kalbinin hızla çarptığını fark etti. Pencereyi açtı, derin bir nefes aldı ve "Allah’ım, bana huzur ver, beni yalnız bırakma" diyerek dua etti. İçinde bir ferahlık hissetti.',
            question: 'Selin’in yaşadığı bu huzur hali Kur’an’daki hangi hakikatle örtüşür?',
            options: {
              A: 'İnsan sadece maddi zenginlikle huzur bulur.',
              B: 'Kalpler ancak Allah’ı anmakla huzur bulur.',
              C: 'Zorluklar karşısında hiçbir şey yapmadan oturulmalıdır.',
              D: 'İbadetler sadece yaşlanınca insana fayda sağlar.'
            },
            correctAnswer: 'B',
            solutionLogic: 'Rad suresi 28. ayette belirtildiği gibi, insanın kalbi ancak yaratıcısını andığında ve O’na sığındığında hakiki sükunete kavuşur.'
          }
        ]
      }
    },
    {
      id: '1.3',
      unitId: 1,
      number: '1.3',
      title: 'Mümin Kimliğim',
      summary: 'Kelime-i şehadetle inşa olan mümin duruşu; iman, ibadet ve güzel ahlakın kopmaz kardeşliği; mümin, kâfir ve münafık kavramları.',
      keyConcepts: ['Kelime-i Şehadet', 'Mümin', 'Kâfir', 'Münafık', 'Salih Amel', 'Emanet'],
      section1: {
        leadIn: 'Sence bir meyve ağacının kalitesi nereden anlaşılır: Sadece toprağın altındaki görünmeyen kökünden mi, yoksa dallarındaki tatlı ve sulu meyvelerinden mi?',
        natureAnalogy: {
          title: 'Kökü Sağlam, Dalları Göğe Uzanan Bereketli Ağaç',
          story: 'Yemyeşil bir bahçede koca bir çınar ağacı hayal et. Bu ağacın toprağın derinliklerine sımsıkı tutunan güçlü "Kökü" kalpteki imandır. Ağacın gövdesi ve ana dalları her gün yerine getirdiğimiz "İbadetler"dir. O dallardan sarkan, gölgesine gelen herkesi sevindiren mis kokulu tatlı "Meyveler" ise bizim güzel ahlakımızdır. Eğer kök olmasa gövde ayakta duramaz; gövde kurursa meyve vermez. Meyvesi olmayan bir ağaç ise etrafına gölge ve lezzet sunamaz.',
          lesson: 'İman, ibadet ve güzel ahlak bir bütündür. Mümin kimliği, kalbindeki inancı davranışlarıyla güzelleştiren kimsedir.'
        },
        mainExplanation: [
          'Mümin; Allah’ın varlığına, birliğine ve Hz. Muhammed’in O’nun kulu ve elçisi olduğuna kalpten inanıp diliyle onaylayan kimsedir. Bu kutlu kapının anahtarı Kelime-i Şehadet’tir: "Eşhedü ellâ ilâhe illallâh ve eşhedü enne Muhammeden abdühû ve rasûlüh."',
          'İnsanlar inanç durumları bakımından üç grupta incelenir: 1) Mümin: Kalbiyle inanıp diliyle ikrar eden. 2) Kâfir: İslam’ın temel esaslarını ve Allah’ın varlığını açıkça reddeden. 3) Münafık: Kalben inanmadığı halde Müslümanların arasında "inandım" diyerek ikiyüzlü davranan.',
          'Peygamber Efendimiz münafığın tehlikesini şöyle özetlemiştir: "Münafığın alameti üçtür: Konuştuğunda yalan söyler, söz verdiğinde sözünde durmaz, kendisine bir şey emanet edildiğinde hıyanet eder."',
          'İslam binası beş temel sütun üzerine yükselir: Kelime-i şehadet getirmek, namaz kılmak, oruç tutmak, zekât vermek ve hacca gitmek.',
          'Peygamberimiz müminin ahlakını tarif ederken: "Müslüman, dilinden ve elinden insanların selamette olduğu kişidir. Mümin ise insanların canları ve malları konusunda güvende olduğu kimsedir" buyurmuştur.'
        ],
        miracleStory: {
          title: 'Ayrılık Hüznüyle İnleyen Hurma Direği (Hannâne)',
          narrative: 'Mescid-i Nebevî’de Peygamberimiz hutbe okurken dayandığı kuru bir hurma kütüğü vardı. Daha sonra mescide bir minber yapıldı ve Peygamberimiz hutbeyi minberden okumaya başladı. Tam o anda, o kuru hurma kütüğünden küçük bir devenin iniltisi gibi yürekleri dağlayan bir ağlama sesi yükseldi! Bütün mescid bu sesle sarsıldı. Peygamber Efendimiz minberden indi, şefkatle direğe sarıldı, onu teselli etti ve kütük sakinleşti.',
          meaning: 'Kuru bir odun parçası bile Allah’ın elçisinin sevgisini ve nurunu hissederken; akıl ve kalp sahibi bir müminin Peygamberine muhabbeti ve sadakati nasıl olmalıdır?'
        },
        verses: [
          {
            surah: 'Enfâl',
            verseNumber: 2,
            text: 'إِنَّمَا الْمُؤْمِنُونَ الَّذِينَ إِذَا ذُكِرَ اللَّهُ وَجِلَتْ قُلُوبُهُمْ وَإِذَا تُلِيَتْ عَلَيْهِمْ آيَاتُهُ زَادَتْهُمْ إِيمَانًا',
            meaning: 'Müminler ancak o kimselerdir ki Allah anıldığı zaman kalpleri ürperir. O’nun ayetleri kendilerine okunduğu zaman bu onların imanlarını artırır...'
          },
          {
            surah: 'Hucurât',
            verseNumber: 10,
            text: 'إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ',
            meaning: 'Müminler ancak kardeştirler...'
          }
        ],
        hadiths: [
          {
            source: 'Buhârî, Îmân, 4',
            text: 'Müslüman, dilinden ve elinden Müslümanların güvende olduğu (zarar görmediği) kimsedir.'
          },
          {
            source: 'Buhârî, Edeb, 69',
            text: 'Münafığın alameti üçtür: Konuştuğunda yalan söyler, söz verdiğinde sözünde durmaz, emanete hıyanet eder.'
          }
        ],
        reflectiveQuestions: [
          'Okul kantininde para üstü fazla verildiğinde geri götüren bir öğrenci, hangi mümin vasfını göstermiş olur?',
          'Bir insanın "Elhamdülillah Müslümanım" demesiyle, komşusunun veya arkadaşının ona tam güven duyması arasında nasıl bir bağ vardır?'
        ]
      },
      section2: {
        dialogues: [
          {
            id: 'd1-7',
            studentQuestion: 'Mümin kimliği bana günlük hayatımda okulda nasıl yol gösterir?',
            guideAnswer: 'Mümin kimliği senin görünmez pusulandır canım arkadaşım! Sınıfta kimsenin görmediği bir yerde arkadaşının silgisi yere düşse, onu cebine atmak yerine sahibine verirsin. Teneffüste bir arkadaşın yalnız kalmışsa yanına gidip güler yüzle "Birlikte oynayalım mı?" dersin. Ödevlerini vaktinde yaparsın. Çünkü bilirsin ki mümin, güvenin ve nezaketin simgesidir.',
            reflectionPrompt: 'Dün sınıfta mümin kimliğine çok yakışan hangi davranışı gördün?'
          },
          {
            id: 'd1-8',
            studentQuestion: 'Münafıklık neden İslam’da bu kadar tehlikeli ve kötü kabul edilmiştir?',
            guideAnswer: 'Düşün ki bir kale var. Düşman dışarıdan gelse askerler hazırlık yapar, kaleyi savunur. Ama kalenin içinden biri dost kılığına girip kapıları arkadan açarsa ne büyük bir tehlike doğar değil mi? Münafık da inanmadığı halde inanmış gibi yaparak insanları aldatır, güveni zehirler. Dinimiz ise daima içi dışı bir, dürüst ve samimi olmayı emreder.',
            reflectionPrompt: 'Özün ve sözün bir olması (dürüstlük) sence bir insanın dostluğunu nasıl değerli kılar?'
          },
          {
            id: 'd1-9',
            studentQuestion: 'Salih amel ne demektir, sadece büyük paralarla yapılan yardımlar mıdır?',
            guideAnswer: 'Asla! "Salih", iyi, doğru ve faydalı demektir; "amel" ise iş. Allah rızası için yapılan her güzel hareket salih ameldir. Yere atılmış bir muz kabuğunu birisi kayıp düşmesin diye çöp kutusuna atmak, sokak kedisine bir kap su koymak, kardeşine kitap okumak, annene sofrayı toplarken yardım etmek... Bunların her biri Allah katında inci tanesi gibi parlayan birer salih ameldir.',
            reflectionPrompt: 'Bugün hiç para harcamadan yapabileceğin 3 salih amel örneği verebilir misin?'
          }
        ]
      },
      section3: {
        questions: [
          {
            id: 'tf1-11',
            statement: 'Mümin, insanların canı, malı ve onuru konusunda kendisinden emin olduğu, güvenilir kimsedir.',
            isTrue: true,
            explanation: 'Tebrikler! Peygamberimiz mümini "insanların elinden ve dilinden selamette olduğu kişi" olarak tanımlamıştır.'
          },
          {
            id: 'tf1-12',
            statement: 'Münafık; kalbiyle inanmadığı halde insanlara Müslümanmış gibi görünen, ikiyüzlü kimsedir.',
            isTrue: true,
            explanation: 'Doğru! Münafıklık kalpteki inançsızlığı gizleyip dışarıya dindar görünme sahteliğidir.'
          },
          {
            id: 'tf1-13',
            statement: 'Bir amelin salih amel sayılması için mutlaka insanların alkışlaması ve bizi övmesi gerekir.',
            isTrue: false,
            explanation: 'Harika dikkat! Salih amel insanların övgüsü için değil, sadece ve sadece Allah’ın rızasını kazanmak için yapılır.'
          },
          {
            id: 'tf1-14',
            statement: 'Kelime-i şehadet getiren bir kimse Allah’tan başka ilah olmadığını ve Hz. Muhammed’in O’nun kulu ve resulü olduğunu ikrar etmiş olur.',
            isTrue: true,
            explanation: 'Doğru! Kelime-i şehadet İslam dairesine girmenin ve mümin kimliğinin temel parolasıdır.'
          },
          {
            id: 'tf1-15',
            statement: 'İman ve salih amel birbirinden tamamen bağımsızdır; amelsiz iman daima en güçlü seviyede kalır.',
            isTrue: false,
            explanation: 'Yanlış! İman kök ise salih amel dallar ve meyvelerdir. Amellerle beslenmeyen iman zayıflama tehlikesiyle karşılaşır.'
          }
        ]
      },
      section4: {
        questions: [
          {
            id: 'mc1-7',
            scenario: 'Kerem basketbol antrenmanından sonra çok yorgundu ve eve hemen gitmek istiyordu. Ancak takım arkadaşları topları sahada bırakıp gitmişti. Kerem: "Bu okul malzemeleri bize emanettir, bunları toplamak boynumun borcudur" diyerek tek başına hepsini toplayıp dolaba kilitledi.',
            question: 'Kerem’in sergilediği bu davranış aşağıdaki İslami ilkelerden hangisinin birbiriyle olan güçlü bağını gösterir?',
            options: {
              A: 'İman - Salih Amel ve Emanet Bilinci',
              B: 'Korku - Tembellik',
              C: 'Gösteriş - İsraf',
              D: 'Kibir - İkram'
            },
            correctAnswer: 'A',
            solutionLogic: 'Kerem, kalbindeki inancın gereği olarak emanete sahip çıkmış ve yorgunluğuna rağmen salih amel işleyerek mümince bir duruş sergilemiştir.'
          },
          {
            id: 'mc1-8',
            scenario: 'Bir kimse borç aldığında geri ödemeyeceğini bildiği halde "Yarın ödeyeceğim" diyor, konuşurken yalan söylüyor ve arkadaşının emanet ettiği sırrı başkalarına anlatıyor.',
            question: 'Peygamberimizin hadis-i şerifine göre bu kişinin sergilediği tutum hangi kavrama aittir?',
            options: {
              A: 'Mümin kimliği',
              B: 'Münafıklık alametleri',
              C: 'Fıtrat güzelliği',
              D: 'Tevekkül örneği'
            },
            correctAnswer: 'B',
            solutionLogic: 'Hadiste münafığın alametleri; yalan söylemek, sözünde durmamak ve emanete hıyanet etmek olarak açıkça bildirilmiştir.'
          },
          {
            id: 'mc1-9',
            scenario: 'Mert, markette yanlışlıkla raftaki porselen bardağı düşürüp kırdı. Reyonda hiç kimse yoktu ve güvenlik kamerası da o köşeyi görmüyordu.',
            question: 'Mert’in mümin kimliğine en yakışır hareketi aşağıdakilerden hangisi olmalıdır?',
            options: {
              A: 'Hemen koşarak marketten uzaklaşmak',
              B: 'Kırılan parçaları rafın altına doğru itip saklamak',
              C: 'Durumu dürüstçe market görevlisine anlatıp bedelini ödemeyi teklif etmek',
              D: 'Yan reyondaki müşteriyi suçlamak'
            },
            correctAnswer: 'C',
            solutionLogic: 'Mümin insan, kimse görmese bile Allah’ın kendisini gördüğünü bilir (ihsan şuuru) ve kul hakkına girmemek için dürüstçe sorumluluk alır.'
          }
        ]
      }
    },
    {
      id: '1.4',
      unitId: 1,
      number: '1.4',
      title: 'Allah’ın Güzel İsimleri: Hâdi, Selam, Vekîl',
      summary: 'Esmâ-i Hüsnâ hakikati; kullarına doğru yolu gösteren el-Hâdi, huzur ve esenlik veren es-Selâm, işleri O’na güvenip bırakılan el-Vekîl.',
      keyConcepts: ['Esmâ-i Hüsnâ', 'el-Hâdi', 'es-Selâm', 'el-Vekîl', 'Tevekkül', 'Hidayet'],
      section1: {
        leadIn: 'Karanlık ve sisli bir gecede fırtınalı denizde yolunu kaybeden bir kaptana doğru rotayı gösteren deniz fenerini ve limandaki güvenli dalgakıranı gördüğünde ne hissedersin?',
        natureAnalogy: {
          title: 'Göçmen Kuşların Pusulası ve Güven Limanı',
          story: 'Kış yaklaşırken gökyüzüne bak: Minik leylekler ve kırlangıçlar binlerce kilometrelik yolu hiç kaybolmadan, dağları ve çölleri aşarak nasıl bulurlar? Onların minicik beyinlerine bu haritayı kim çizdi? Onlara yol gösteren el-Hâdi olan Rabbimizdir. Fırtına dindiğinde yavrularını sıcacık kanatları altında güvene alan anne kuş, es-Selâm isminin huzurunu yansıtır. Sabahleyin kursakları bomboş uçup akşam yuvalarına rızıkla doymuş dönen kuşlar ise el-Vekîl olan Allah’a tevekkülün en canlı tablosudur.',
          lesson: 'Allah isimleriyle kâinatta tecelli eder. O yol gösterir (Hâdi), kalplere esenlik verir (Selam) ve O’na güveneni asla yarı yolda bırakmaz (Vekîl).'
        },
        mainExplanation: [
          'Esmâ-i Hüsnâ; "en güzel isimler" demektir. Yüce Allah’ın varlığını, birliğini, kâinattaki sonsuz kudret ve merhametini bize tanıtan 99 güzel ismidir. A’râf suresi 180. ayette: "En güzel isimler Allah’ındır. O’na o güzel isimleriyle dua edin..." buyrulur.',
          'el-HÂDİ: İnsanlara doğru yolu gösteren, rehberlik eden, zihinleri ve gönülleri aydınlatan demektir. Günde beş vakit namazda Fatiha suresinde "İhdinassırâtalmüstakîm (Bizi dosdoğru yola ilet)" diyerek Rabbimizin Hâdi ismine sığınırız.',
          'es-SELÂM: Her türlü eksiklik ve kusurdan uzak olan; kullarına güvenlik, barış, esenlik, sağlık ve huzur bağışlayan demektir. Müslümanlar karşılaştıklarında "Selamün aleyküm" (Allah sana sağlık, barış ve huzur versin) diyerek bu ilahi ismin tecellisini birbirlerine dua ederler.',
          'el-VEKÎL: Bütün varlıkların işlerini en güzel şekilde düzenleyen, idare eden, yardımını esirgemeyen ve kendisine güvenen kullarına yeten demektir. "Hasbünallâhu ve ni’mel vekîl (Allah bize yeter, O ne güzel vekildir)" sözü müminin en büyük manevi kalesidir.',
          'Tevekkül; bir işte insanın elinden gelen tüm gayreti gösterip tedbirini aldıktan sonra sonucu Allah’a bırakması ve O’na güvenmesidir. Tıpkı Mehmet Âkif’in dediği gibi: "Allah’a dayan, sa’ye sarıl, hikmete râm ol... Yol varsa budur, bilmiyorum başka çıkar yol."'
        ],
        miracleStory: {
          title: 'Sevr Mağarasındaki Güvercin ve Örümcek Ağı',
          narrative: 'Hicret esnasında Peygamberimiz ve Hz. Ebû Bekir, peşlerindeki müşriklerden korunmak için Sevr Mağarası’na sığınmışlardı. Müşrikler kılıçlarıyla mağaranın kapısına kadar geldiler. Hz. Ebû Bekir endişelendiğinde Peygamberimiz tebessüm ederek: "Üzülme, şüphesiz Allah bizimle beraberdir!" dedi. O anda el-Vekîl ve el-Hâfız olan Rabbimiz, bir örümceğe mağaranın ağzına ağ ördürdü ve bir çift güvercine yuva yaptırdı. Müşrikler kapıdaki ağı görünce içeriye bakmadan geri döndüler.',
          meaning: 'Allah dilerse en zayıf gördüğün örümcek ağıyla orduları geri püskürtür. O’na vekil olarak güvenen asla mahcup olmaz.'
        },
        verses: [
          {
            surah: 'A’râf',
            verseNumber: 180,
            text: 'وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا',
            meaning: 'En güzel isimler Allah’ındır. O’na o güzel isimleriyle dua edin...'
          },
          {
            surah: 'Âl-i İmrân',
            verseNumber: 173,
            text: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',
            meaning: '... Allah bize yeter, O ne güzel vekildir!'
          },
          {
            surah: 'Haşr',
            verseNumber: 23,
            text: 'هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ',
            meaning: 'O, kendisinden başka ilah olmayan Allah’tır; mülkün gerçek sahibidir, her türlü eksiklikten uzaktır, selamet ve esenlik verendir (es-Selâm)...'
          }
        ],
        hadiths: [
          {
            source: 'Buhârî, Şürût, 18',
            text: 'Allah’ın doksan dokuz ismi vardır. Kim bunları (öğrenip gereğince amel ederek) sayarsa cennete girer.'
          },
          {
            source: 'Tirmizî, Zühd, 33',
            text: 'Eğer siz gereği gibi Allah’a tevekkül etseydiniz, sabah aç çıkıp akşam tok dönen kuşlar gibi rızıklanırdınız.'
          }
        ],
        reflectiveQuestions: [
          'Dersine çok iyi çalışan bir öğrencinin sınav sabahı "Allah’ım, ben çalıştım, yardımına sığınıyorum" demesi hangi ismin tecellisidir?',
          'Sınıfa girdiğinde arkadaşlarına güler yüzle "Selamün aleyküm" demek o sınıfta nasıl bir esenlik havası oluşturur?'
        ]
      },
      section2: {
        dialogues: [
          {
            id: 'd1-10',
            studentQuestion: 'Öğretmenim, tevekkül etmek "hiç çalışmadan her şeyi Allah’a bırakmak" mıdır?',
            guideAnswer: 'Asla canım öğrencim! Peygamberimizin yanına gelen bir bedevi: "Devemi salıverip mi tevekkül edeyim, yoksa bağlayıp mı?" diye sorduğunda Peygamberimiz: "Önce deveni sağlamca bağla, sonra Allah’a tevekkül et" buyurmuştur. Çiftçi tarlayı sürmeden, tohumu atmadan "Rabbim bana buğday ver" diyemez. Biz tohumu ekeriz, sularız, sonra yağmuru ve bereketi el-Vekîl olan Rabbimizden bekleriz.',
            reflectionPrompt: 'Sen yarınki sınavın için önce ne yapmalı, sonra nasıl tevekkül etmelisin?'
          },
          {
            id: 'd1-11',
            studentQuestion: 'Fatiha suresinde her gün "Bizi doğru yola ilet" derken Allah’ın hangi ismine sesleniyoruz?',
            guideAnswer: 'İşte bu tam olarak "el-HÂDİ" isminin niyazıdır! Hâdi; karanlıkları yarıp dosdoğru yolu gösteren, aklımızı ve kalbimizi hayra ulaştıran demektir. Her namazda bu ayeti okuyarak deriz ki: "Rabbim, beni yanlış arkadaşlıklardan, tembellikten, yalandan koru; beni iyilerin, dürüstlerin yolunda sabit kıl."',
            reflectionPrompt: 'Hayatında doğru kararlar alırken en çok kimlerin rehberliğine başvuruyorsun?'
          },
          {
            id: 'd1-12',
            studentQuestion: 'Selamün aleyküm dediğimizde karşıdaki insana tam olarak ne söylemiş oluyoruz?',
            guideAnswer: 'O kadar derin bir manası var ki! "es-Selâm olan Yüce Rabbim sana sağlık, güven, iç huzuru ve selamet versin; benden de sana asla bir zarar gelmez, seninle barış içindeyim" demiş olursun. Bir tek kelimeyle hem dua eder hem de güven köprüsü kurarsın.',
            reflectionPrompt: 'Yarın sabah kapıdaki görevliye ve ilk gördüğün arkadaşına içtenlikle selam vermeye ne dersin?'
          }
        ]
      },
      section3: {
        questions: [
          {
            id: 'tf1-16',
            statement: 'el-Hâdi ismi, insanlara doğru ve hayırlı yolu gösteren, hidayet veren anlamına gelir.',
            isTrue: true,
            explanation: 'Tebrikler! Rabbimiz akıl vererek, peygamberler ve kitaplar göndererek insanlara doğru yolu göstermiştir.'
          },
          {
            id: 'tf1-17',
            statement: 'Tevekkül, hiçbir çalışma ve hazırlık yapmadan sonucu doğrudan Allah’tan beklemektir.',
            isTrue: false,
            explanation: 'Harika dikkat! Tevekkül, önce üzerine düşen tüm gayret ve tedbiri almak, ardından sonucu el-Vekîl olan Allah’a bırakmaktır.'
          },
          {
            id: 'tf1-18',
            statement: 'es-Selâm ismi; her türlü eksiklikten uzak olan ve kullarına esenlik, barış, güvenlik bahşeden demektir.',
            isTrue: true,
            explanation: 'Doğru! Selamlaşmak da Allah’ın Selâm ismini anarak birbirimize huzur ve güven dilemektir.'
          },
          {
            id: 'tf1-19',
            statement: 'el-Vekîl ismi, evrendeki varlıkları başıboş bırakan ve işlerine karışmayan varlık demektir.',
            isTrue: false,
            explanation: 'Kesinlikle yanlış! el-Vekîl, bütün varlıkların işlerini en güzel şekilde yöneten, koruyan ve kullarına kefil olan demektir.'
          },
          {
            id: 'tf1-20',
            statement: 'Peygamberimiz namazlardan sonra "Allah’ım sen Selam’sın, selamet sendendir" diyerek dua etmiştir.',
            isTrue: true,
            explanation: 'Tebrikler! Peygamberimiz selameti ve iç huzurunu daima es-Selâm olan Rabbinden niyaz etmiştir.'
          }
        ]
      },
      section4: {
        questions: [
          {
            id: 'mc1-10',
            scenario: 'Mustafa dükkânını açıp gün boyu dürüstçe ticaret yaptı. Akşam dükkânın kapısını kilitlerken içinden "Hasbünallahu ve ni’mel vekîl (Allah bize yeter, O ne güzel vekildir)" duasını okudu ve içi huzurla doldu.',
            question: 'Mustafa’nın bu tutumu aşağıdaki kavram ve isimlerden hangisini hayatına yansıttığını gösterir?',
            options: {
              A: 'Tembellik - Hırs',
              B: 'Tevekkül - el-Vekîl',
              C: 'Gıybet - Cehalet',
              D: 'İsraf - Cimrilik'
            },
            correctAnswer: 'B',
            solutionLogic: 'Mustafa elinden gelen emeği sarf etmiş, dükkanını kilitleyip tedbirini almış ve neticeyi el-Vekîl olan Allah’a emanet ederek hakiki tevekkül göstermiştir.'
          },
          {
            id: 'mc1-11',
            scenario: 'Şiir: "Ebedi mutluluğa / Bir yol var görüyorum / Yolu gösteren bana / El-Hâdî biliyorum"',
            question: 'Bu dörtlükte Allah’ın el-Hâdi isminin hangi yönü vurgulanmaktadır?',
            options: {
              A: 'Kullarına sonsuz zenginlik vermesi',
              B: 'İnsanı doğruya, hayra ve cennet yoluna ulaştıran ilahi rehberliği',
              C: 'Bütün canlıların rızkını kesmesi',
              D: 'Kusurları gizlemeden ortaya dökmesi'
            },
            correctAnswer: 'B',
            solutionLogic: 'el-Hâdi, şaşırmış insanlığa doğruyu gösteren, peygamberler ve vahiy ile hidayet yolunu açan Yüce Yaratıcıdır.'
          },
          {
            id: 'mc1-12',
            scenario: 'Selvi, apartmana girerken merdivenlerde karşılaştığı komşusu Ayşe teyzeye gülümseyerek "Selamün aleyküm" dedi. Ayşe teyze de "Ve aleyküm selam güzel kızım" diyerek mutlu oldu.',
            question: 'Bu selamlaşma aşağıdaki güzel isimlerden hangisinin insanlar arasındaki yansımasıdır?',
            options: {
              A: 'el-Vekîl',
              B: 'es-Selâm',
              C: 'el-Kadir',
              D: 'el-Kahhar'
            },
            correctAnswer: 'B',
            solutionLogic: 'es-Selâm ismi barış, güven ve esenlik kaynağıdır; Müslümanların selamlaşması bu ismin toplumsal sevgi ve emniyet olarak tecellisidir.'
          }
        ]
      }
    }
  ]
};
