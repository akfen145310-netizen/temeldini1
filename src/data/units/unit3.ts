import { Unit } from '../../types';

export const unit3: Unit = {
  id: 3,
  title: '3. ÜNİTE: İSLAM ÖLÇÜLÜ OLMAMIZI İSTER',
  badge: 'Denge, İtidal & Ahlak',
  color: 'amber',
  description: 'İslam’da itidal ölçüsü; mahremiyet (beden, mekân, bilgi), kardeşlik hukuku ve ümmet bilinci, tasarruf ve israftan kaçınma, güzel isimler (Hafiz, Vedud, Kerim).',
  subTopics: [
    {
      id: '3.1',
      unitId: 3,
      number: '3.1',
      title: 'Mahremiyette Ölçümüz',
      summary: 'İtidal ve denge dini olan İslam’da; beden mahremiyeti (tesettür), mekân mahremiyeti (izin isteme) ve bilgi mahremiyeti (özel hayatın gizliliği).',
      keyConcepts: ['İtidal', 'Mahremiyet', 'Tesettür', 'Mekân Mahremiyeti', 'Bilgi Mahremiyeti', 'Tecessüs'],
      section1: {
        leadIn: 'Bir müzik parçasında notalar belirli bir ölçü ve ahenkle çalındığında kulağa ne kadar hoş gelir değil mi? Peki insan hayatındaki huzurun ve saygının o sihirli ölçüsü nedir?',
        natureAnalogy: {
          title: 'Kabuğundaki İnci ve Çitlerle Çevrili Gül Bahçesi',
          story: 'Denizin derinliklerindeki en değerli inciyi düşün: Kendisini dış etkenlerden ve kirlilikten koruyan sağlam bir sedef kabuğunun içinde saklanır. Ya da mis kokulu goncalarla dolu bir gül bahçesini hayal et; etrafı zarif çitlerle çevrilidir ki kimse ezmesin, çiğnemesin, güzelliği korunsun. İşte insanın bedeni, evi ve kalbindeki özel sırları da o nadide inci ve gül bahçesi gibidir. Mahremiyet, insanın saygınlığını ve haysiyetini koruyan o şefkatli kabuktur.',
          lesson: 'Ölçülü olmak (itidal) ve mahremiyete riayet etmek, hem kendi onurumuzu korur hem de başkalarının haklarına derin bir saygının göstergesidir.'
        },
        mainExplanation: [
          'İslam, hayatın her alanında dengeyi esas alır. Bu dengeye dinimizde "İTİDAL" denir. Aşırılıklardan, taşkınlıklardan uzak durup orta yolu benimsemektir.',
          'Dinimizin koyduğu sınırlar genel olarak HELAL (izin verilen, temiz ve faydalı) ve HARAM (yasaklanan, zararlı) kavramlarıyla belirlenir.',
          'Mahremiyet; kişinin kendisinin, ailesinin ve başkalarının özel hayatına ait bilgileri koruması ve kişisel alanlarına saygı göstermesidir. Üç ana başlıkta incelenir:',
          '1. Beden Mahremiyeti: Kadın ve erkeğin vücudunda örtülmesi gereken yerleri kapatmasıdır (Tesettür). A’râf suresi 26. ayette elbiselerin hem örtünme hem de bir takva güzelliği olduğu bildirilir.',
          '2. Mekân Mahremiyeti: Kişiye özel alanlara (evlere, odalara) izinsiz girilmemesidir. Peygamberimiz bir eve girmeden önce üç kez izin istenmesini (isti’zan), kapının tam karşısında değil kenarında durulmasını öğütlemiştir.',
          '3. Bilgi Mahremiyeti: Başkalarının özel hayatını, mektubunu, günlüğünü veya mesajlarını izinsiz araştırmamak (tecessüs yasağı) ve arkasından konuşmamaktır (gıybet yasağı). Hucurât suresi 12. ayette: "... Birbirinizin kusurunu araştırmayın..." buyrulur.'
        ],
        miracleStory: {
          title: 'Peygamberimizin Kapı Edebi ve Perdenin Korunması',
          narrative: 'Bir gün bir adam Peygamber Efendimizin (s.a.v) evinin kapısındaki yarıktan içeriye izinsizce bakmaya çalıştı. Peygamberimiz elindeki tarakla o tarafa doğru yönelip şöyle buyurdu: "Eğer senin oradan baktığını önceden bilseydim, gözüne şu tarağı saplardım! İzin istemek, evin içi görülmesin ve mahremiyet çiğnenmesin diye emredilmiştir!" Peygamberimiz evine izin alarak gelenlere de kapının tam önünde değil, sağında veya solunda durmalarını öğütlemiştir.',
          meaning: 'İslam, en yakın komşunun dahi evindeki hâlini görmeyi yasaklamış; mekân mahremiyetini insanın dokunulmaz bir kalesi saymıştır.'
        },
        verses: [
          {
            surah: 'A’râf',
            verseNumber: 26,
            text: 'يَا بَنِي آدَمَ قَدْ أَنْزَلْنَا عَلَيْكُمْ لِبَاسًا يُوَارِي سَوْآتِكُمْ وَرِيشًا ۖ وَلِبَاسُ التَّقْوَىٰ ذَٰلِكَ خَيْرٌ',
            meaning: 'Ey Âdemoğulları! Size mahrem yerlerinizi örtecek giysi, süsleneceğiniz elbise yarattık. Takva elbisesi ise işte o daha hayırlıdır...'
          },
          {
            surah: 'Hucurât',
            verseNumber: 12,
            text: 'يَا أَيُّهَا الَّذِينَ آمَنُوا اجْتَنِبُوا كَثِيرًا مِنَ الظَّنِّ إِنَّ بَعْضَ الظَّنِّ إِثْمٌ ۖ وَلَا تَجَسَّسُوا',
            meaning: 'Ey iman edenler! Zannın çoğundan kaçının. Çünkü zannın bir kısmı günahtır. Birbirinizin kusurunu araştırmayın (tecessüs etmeyin)...'
          }
        ],
        hadiths: [
          {
            source: 'Buhârî, İsti’zân, 13',
            text: 'İzin istemek üç defadır. İzin verilirse girersin, verilmezse geri dönersin.'
          },
          {
            source: 'Ebû Dâvûd, Edeb, 80',
            text: 'Kişiye günah olarak her duyduğunu söylemesi yeter.'
          }
        ],
        reflectiveQuestions: [
          'Kardeşinin odasına girmeden önce kapıyı çalmak neden bir sevgi ve saygı göstergesidir?',
          'Sosyal medyada bir arkadaşının izni olmadan fotoğrafını paylaşmamak hangi mahremiyet türüne girer?'
        ]
      },
      section2: {
        dialogues: [
          {
            id: 'd3-1',
            studentQuestion: 'Öğretmenim, kardeşimin masasında duran günlüğünü çok merak etsem de okumamalı mıyım? Kimse görmese ne olur?',
            guideAnswer: 'Çok dürüst bir soru! Evet, merak edebilirsin ama o günlük kardeşinin "bilgi mahremiyeti"dir. Tıpkı Emre’nin günlüğünde anlattığı gibi: "Benim günlüğüm olsa başkasının okumasını istemezdim." Peygamberimiz başkasının mektubuna veya özel yazısına izinsiz bakmayı yasaklamıştır. İnsanların gizli hallerini araştırmamak (tecessüs etmemek) müminin kalbini pırıl pırıl tutar.',
            reflectionPrompt: 'Kendine yapılmasını istemediğin bir davranışı başkasına yapmamak sence nasıl bir erdemdir?'
          },
          {
            id: 'd3-2',
            studentQuestion: 'Kapıyı çalarken neden kapının tam karşısında değil de biraz yanında durmamız öğütlenmiştir?',
            guideAnswer: 'Peygamberimizin bu sünneti ne kadar ince bir nezakettir! Düşün ki kapı açıldığında ev sahibi içeride hazırlıksız olabilir, kıyafeti müsait olmayabilir veya evin içi doğrudan görünebilir. Kapının yanında durduğunda ev sahibinin mahremiyetine gözlerini dikmemiş olursun; o kapıyı rahatça aralar ve seni buyur eder.',
            reflectionPrompt: 'Eve veya sınıf kapısına yaklaşırken bu edebi denedin mi?'
          },
          {
            id: 'd3-3',
            studentQuestion: 'Beden mahremiyeti ve tesettür bize ne kazandırır?',
            guideAnswer: 'Beden mahremiyeti, insanın sadece etten kemikten ibaret olmadığını, saygıdeğer ve dokunulmaz bir ruha sahip olduğunu gösterir. Tesettür; vücudun korunması gereken yerlerini örterek hem edebi hem takvayı kuşanmaktır. İnsanın dış görünüşüyle değil, kalbi ve güzel ahlakıyla değerlendirilmesini sağlar.',
            reflectionPrompt: 'Sade ve edebe uygun giyinmek bir insanın kendine duyduğu saygıyı nasıl gösterir?'
          }
        ]
      },
      section3: {
        questions: [
          {
            id: 'tf3-1',
            statement: 'İtidal; insanın inanç, ibadet, duygu ve davranışlarında aşırılıktan uzak durup dengeli olmasıdır.',
            isTrue: true,
            explanation: 'Tebrikler! İslam orta yol ve denge (itidal) dinidir.'
          },
          {
            id: 'tf3-2',
            statement: 'Bir eve veya odaya girmeden önce izin istemek (isti’zan) dinimizin emrettiği bir mekân mahremiyeti kuralıdır.',
            isTrue: true,
            explanation: 'Doğru! Peygamberimiz üç kez izin istenmesini ve izin verilmezse geri dönülmesini bildirmiştir.'
          },
          {
            id: 'tf3-3',
            statement: 'Arkadaşımızın sırlarını başkalarına anlatmak veya izinsiz günlüğünü okumak bilgi mahremiyetinin ihlalidir.',
            isTrue: true,
            explanation: 'Tebrikler! Kur’an-ı Kerim başkalarının gizli hallerini araştırmayı (tecessüs) kesinlikle yasaklamıştır.'
          },
          {
            id: 'tf3-4',
            statement: 'Kişi kendi evinde ailesiyle yaşarken odalara kapıyı çalmadan girmelidir; aile içinde mahremiyet olmaz.',
            isTrue: false,
            explanation: 'Harika dikkat! Aile bireylerinin de odalarına girerken kapı çalınmalı ve özel alanlarına saygı duyulmalıdır.'
          },
          {
            id: 'tf3-5',
            statement: 'Tesettür sadece giyinmekle ilgilidir; konuşma ve bakışlarda edep gözetmeye gerek yoktur.',
            isTrue: false,
            explanation: 'Kesinlikle yanlış! Takva elbisesi; bedeni örtmekle birlikte gözü haramdan korumak ve edepli konuşmaktır.'
          }
        ]
      },
      section4: {
        questions: [
          {
            id: 'mc3-1',
            scenario: 'Emre, kardeşi Zeynep’in odasının önünden geçerken masadaki mor kapaklı günlüğü gördü. İçinde ne yazdığını çok merak etti. Ancak: "Bu benim günlüğüm olsa başkasının okumasını istemezdim" diyerek dokunmadan yoluna devam etti.',
            question: 'Emre’nin bu davranışı aşağıdaki mahremiyet türlerinden hangisine örnek oluşturur?',
            options: {
              A: 'Beden mahremiyeti',
              B: 'Bilgi mahremiyeti',
              C: 'Mekân israfı',
              D: 'Tasarruf bilinci'
            },
            correctAnswer: 'B',
            solutionLogic: 'Başkasına ait özel günlük, mektup ve sırları izinsiz okumamak bilgi mahremiyetine saygının en güzel örneğidir.'
          },
          {
            id: 'mc3-2',
            scenario: 'Ali, komşusunun evine bir emanet götürdü. Zile bastıktan sonra kapının tam karşısında durmak yerine biraz sol tarafında bekledi.',
            question: 'Ali’nin kapının yanında beklemesinin asıl sebebi İslam edebi açısından nedir?',
            options: {
              A: 'Güneşten korunmak istemesi',
              B: 'Kapı açıldığında evin iç mahremiyetini görmemek ve ev sahibini rahatsız etmemek',
              C: 'Zilin sesini daha iyi duymaya çalışması',
              D: 'Apartman merdivenlerini seyretmek istemesi'
            },
            correctAnswer: 'B',
            solutionLogic: 'Peygamberimizin sünnetine göre kapı açıldığında içerinin mahremiyeti korunabilsin diye kapının tam karşısında durulmaz.'
          },
          {
            id: 'mc3-3',
            scenario: 'Kur’an-ı Kerim’de Hucurât suresi 12. ayette müminlere zannın çoğundan kaçınmaları, birbirlerinin kusurlarını araştırmamaları ve gıybet etmemeleri emredilir.',
            question: 'Bu ilahi emir toplumda en çok hangi değerin kökleşmesini sağlar?',
            options: {
              A: 'İnsanlar arasında karşılıklı güven, huzur ve özel hayata saygının',
              B: 'Maddi rekabetin ve hırsın',
              C: 'Sosyal medyada takipçi sayısının artmasının',
              D: 'İbadetlerin şeklinin değişmesinin'
            },
            correctAnswer: 'A',
            solutionLogic: 'Kusurları araştırmamak ve gıybet etmemek, bireylerin onurunu ve mahremiyetini koruyarak toplumda kardeşlik ve güveni sağlar.'
          }
        ]
      }
    },
    {
      id: '3.2',
      unitId: 3,
      number: '3.2',
      title: 'Kardeşlikte Ölçümüz',
      summary: 'İman bağıyla kenetlenen din kardeşliği; Ensar-Muhacir dayanışması, Evs ve Hazrec barışı, kardeşliği koruma yolları ve ümmet bilinci.',
      keyConcepts: ['Din Kardeşliği', 'Ensar', 'Muhacir', 'Muâhât', 'Ümmet', 'Adalet'],
      section1: {
        leadIn: 'Aynı anne babadan doğmadığın halde dünyanın öbür ucundaki bir insanın sevincine sevinip acısıyla yüreğinin sızladığını hiç hissettin mi? Bizi birbirimize bu kadar görünmez tellerle bağlayan nedir?',
        natureAnalogy: {
          title: 'Bir Bedenin Uzuvları ve Kenetlenmiş Tuğlalar',
          story: 'Kendi bedenini düşün: Gece yürürken ayağının başparmağı sehpaya çarpsa ne olur? "Bana ne ayaktan, ben gözüm ya da kulağım" diyebilir misin? Hemen bütün vücudun acıyla sarsılır, gözünden yaş gelir, kalbin hızla çarpar, ellerin hemen o parmağı tutmaya koşar! Ya da bir kalenin duvarındaki tuğlaları hayal et; harçla öyle sımsıkı kenetlenmiştir ki tek bir tuğla bile eksilse kalenin suru tehlikeye girer.',
          lesson: 'Peygamberimiz buyurur ki: Müminler birbirini sevmede bir beden gibidir; bir organ rahatsızlansa bütün beden acıyı paylaşır. Ve müminler birbirine kenetlenmiş bir binanın tuğlaları gibidir.'
        },
        mainExplanation: [
          'Kardeşlik sadece kan bağıyla sınırlı değildir. Dinimizde kardeşliğin en yüce ölçüsü iman bağıdır. Hucurât suresi 10. ayette: "Müminler ancak kardeştirler..." buyrulur.',
          'Peygamber Efendimiz Mekke’den Medine’ye göç eden muhacirler ile onlara evlerini, sofralarını açan Medineli ensar arasında "Muâhât (Kardeşlik)" bağı kurmuştur. Ensar mallarının yarısını kardeşleriyle paylaşmak istemiş; muhacirler ise cömertçe teşekkür edip çalışarak geçinmeyi tercih etmiştir.',
          'Peygamberimiz ayrıca Medine’de yıllardır birbiriyle kan davası güden Evs ve Hazrec kabilelerini barıştırarak İslam kardeşliği çatısı altında birleştirmiştir.',
          'Din Kardeşliğini Koruma Yolları: \n  1. Barışma: Sorun yaşandığında ilk adımı atmaktan çekinmemek. \n  2. Konuşarak Çözüm Arama: Yüz yüze, sakin ve suçlamadan dinlemek. \n  3. Özür Dileme: Hata yapınca af dilemek olgunluktur. \n  4. Hakkı Gözetme: Haksız olduğunu fark edince geri adım atabilmek. \n  5. Adil Davranma: Kendi yakını bile olsa doğrudan yana olmak.',
          'Din kardeşinin hakkı: Peygamberimiz buyurur: "Bir Müslüman’ın din kardeşine üç günden fazla küs durması helal olmaz. Bunların en hayırlısı, önce selam verendir."',
          'Ümmet: Dünyanın neresinde olursa olsun aynı dine inanan, aynı peygambere bağlanan tüm Müslümanların oluşturduğu evrensel topluluktur.'
        ],
        miracleStory: {
          title: 'Yermük Savaşındaki Su Tasının Fedakârlığı',
          narrative: 'Yermük Savaşı’nda yaralı olarak kızgın kumlara düşmüş üç sahabi vardı: Hâris, İkrime ve Süheyl (r.a). Bir sahabe elinde bir tas suyla ağır yaralı Hâris’in yanına koştu. Hâris tam suyu içecekken az öteden İkrime’nin iniltisini duydu ve suyu içmeyip "Önce kardeşime götür" dedi. Su İkrime’ye ulaştığında bu kez Süheyl’in "Su!" dediği duyuldu. İkrime de içmedi, "Süheyl’e götür" dedi. Koşarak Süheyl’e vardıklarında o şehit olmuştu. Hemen İkrime’ye döndüler, o da son nefesini vermişti. Hâris’e geldiklerinde o da ruhunu teslim etmişti. Üçü de bir yudum suyu kardeşine ikram ederek şehadete yürüdüler.',
          meaning: 'İslam kardeşliği; kendisi muhtaçken bile kardeşini kendi nefsine tercih edebilme zirvesidir.'
        },
        verses: [
          {
            surah: 'Hucurât',
            verseNumber: 10,
            text: 'إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ',
            meaning: 'Müminler ancak kardeştirler. Öyleyse kardeşlerinizin arasını düzeltin...'
          },
          {
            surah: 'Enbiyâ',
            verseNumber: 92,
            text: 'إِنَّ هَٰذِهِ أُمَّتُكُمْ أُمَّةً وَاحِدَةً وَأَنَا رَبُّكُمْ فَاعْبُدُونِ',
            meaning: 'Şüphesiz bu ümmetiniz tek bir ümmettir. Ben de sizin Rabbinizim. Öyleyse bana kulluk edin.'
          }
        ],
        hadiths: [
          {
            source: 'Müslim, Birr, 66',
            text: 'Müminler, birbirini sevmede, birbirine merhamet ve şefkat göstermede bir beden gibidir...'
          },
          {
            source: 'Buhârî, Edeb, 62',
            text: 'Bir Müslüman’ın din kardeşine üç günden fazla küs durması helal olmaz; en hayırlısı önce selam verendir.'
          },
          {
            source: 'Tirmizî, Sıfâtü’l-Kıyâme, 59',
            text: 'Sizden biriniz kendisi için istediğini din kardeşi için de istemedikçe (gerçek manada) iman etmiş olmaz.'
          }
        ],
        reflectiveQuestions: [
          'Sınıfta bir arkadaşınla tartıştığında 3 gün dolmadan gidip ilk selamı veren sen olursan ne kazanırsın?',
          'Köy meydanındaki toplu iftarda birbirini hiç tanımayan insanların aynı sofrada kardeşçe oturması ümmet bilincini nasıl gösterir?'
        ]
      },
      section2: {
        dialogues: [
          {
            id: 'd3-4',
            studentQuestion: 'Öğretmenim, arkadaşımla tartıştığımızda haklı olan taraf bensem neden ilk adımı ben atayım?',
            guideAnswer: 'Çok insani bir ikilem! Nefsimiz bazen "Gurur yap, bekle" der. Oysa Sevgili Peygamberimiz: "Aralarında sorun olanların en hayırlısı, önce selam verip barış kapısını aralayandır" buyurur. İlk adımı atmak yenilmek değil; aksine kardeşliği gururdan daha değerli tutan yüce gönüllü bir şampiyonluktur.',
            reflectionPrompt: 'Küskün olduğun birine "Selam" dediğinde kalbinde hissettiğin o kuş gibi hafifliği hatırlıyor musun?'
          },
          {
            id: 'd3-5',
            studentQuestion: 'Ensar ve Muhacir kardeşliği günümüzde bizim için ne ifade ediyor?',
            guideAnswer: 'Ensar olmak bir ruhtur! Bugün şehrimize veya okulumuza başka bir ilden, hatta savaşın ve yokluğun yaşandığı başka bir ülkeden gelen yeni bir öğrenci düşün. Ona sınıfta sıranı açman, eşyalarını paylaşman, yalnız hissettirmemen seni 21. yüzyılın ensarı yapar. Muhacir ruhu da kimseye yük olmadan onuruyla çalışıp üretmektir.',
            reflectionPrompt: 'Sınıfa yeni gelen çekingen bir arkadaşına ilk gün nasıl ensar gibi yaklaşırsın?'
          },
          {
            id: 'd3-6',
            studentQuestion: 'Ümmet bilinci bana ne kazandırır?',
            guideAnswer: 'Ümmet bilinci sana devasa bir gönül coğrafyası kazandırır! Sen sadece kendi mahallenden ibaret değilsin. Filistin’de, Afrika’da, Asya’da açlık veya zulüm çeken bir çocuğun hüznü senin hüznündür; onların başarısı senin sevincindir. Kâbe’de tavaf eden milyonlarca farklı renkteki insanın aynı duada birleşmesi gibi sen de koca bir ailenin ferdisin.',
            reflectionPrompt: 'Dünyanın uzak bir köşesindeki mazlum çocuklar için dua ettiğinde içinde ne uyanıyor?'
          }
        ]
      },
      section3: {
        questions: [
          {
            id: 'tf3-6',
            statement: 'İslam’da müminlerin kardeşliği sadece kan bağıyla değil, ortak iman bağıyla kurulur.',
            isTrue: true,
            explanation: 'Tebrikler! Kur’an-ı Kerim "Müminler ancak kardeştirler" fermanıyla iman kardeşliğini ilan etmiştir.'
          },
          {
            id: 'tf3-7',
            statement: 'Bir Müslüman’ın din kardeşine üç günden fazla küs durması helal değildir.',
            isTrue: true,
            explanation: 'Doğru! Peygamberimiz küskünlüğün uzatılmasını yasaklamış, ilk selam verenin en hayırlı olduğunu bildirmiştir.'
          },
          {
            id: 'tf3-8',
            statement: 'Ensar; Mekke’den inançları uğruna Medine’ye göç eden Müslümanlara verilen isimdir.',
            isTrue: false,
            explanation: 'Harika dikkat! Göç edenlere "Muhacir", onlara kucak açıp yardım eden Medinelilere "Ensar" denir.'
          },
          {
            id: 'tf3-9',
            statement: 'Peygamberimiz müminlerin birbirine olan sevgi ve dayanışmasını tek bir bedenin organlarına benzetmiştir.',
            isTrue: true,
            explanation: 'Doğru! Bir organ ağrıdığında bütün beden uykusuzluk ve ateşle onun acısına ortak olur.'
          },
          {
            id: 'tf3-10',
            statement: 'Ümmet; sadece aynı dili konuşan ve aynı ülkede yaşayan Müslümanların oluşturduğu gruptur.',
            isTrue: false,
            explanation: 'Yanlış! Ümmet; ırk, dil, renk ve coğrafya farkı olmaksızın yeryüzündeki bütün Müslümanları kapsayan evrensel birliktir.'
          }
        ]
      },
      section4: {
        questions: [
          {
            id: 'mc3-4',
            scenario: 'Emir, kantinden aceleyle çıkarken elindeki meyve suyu Ahmet’in çantasının üzerine döküldü. Emir kaçıp gitmek yerine durdu: "Çok özür dilerim Ahmet, dikkatsizlik ettim" dedi ve çanta temizlenene kadar yardım etti. Ahmet de öğle arasında Emir’e bir meyve suyu ısmarladı.',
            question: 'Bu olayda kardeşliği koruma yollarından hangileri sırasıyla sergilenmiştir?',
            options: {
              A: 'Hatasını kabul edip özür dileme - Affetme ve gönül alma',
              B: 'Tartışmayı büyütme - İntikam alma',
              C: 'Görmezden gelme - Şikâyet etme',
              D: 'Tembellik - İsraf'
            },
            correctAnswer: 'A',
            solutionLogic: 'Emir sorumluluk alarak samimi bir şekilde özür dilemiş; Ahmet de olgunluk göstererek affetmiş ve kardeşlik bağını pekiştirmiştir.'
          },
          {
            id: 'mc3-5',
            scenario: 'Peygamber Efendimiz (s.a.v) şöyle buyurmuştur: "Müminler birbirine kenetlenmiş bir bina gibidir; parçaları birbirini destekler."',
            question: 'Bu hadis-i şerifin vermek istediği ana mesaj aşağıdakilerden hangisidir?',
            options: {
              A: 'İnşaat mühendisliği kuralları',
              B: 'Müslümanlar arasındaki birlik, dayanışma ve birbirini yalnız bırakmama şuuru',
              C: 'Yalnızca akrabalarla ticaret yapılması gerektiği',
              D: 'Büyük binalar yapmanın önemi'
            },
            correctAnswer: 'B',
            solutionLogic: 'Hadis-i şerif, tuğlaları birbirine kenetlenmiş sağlam bir bina gibi Müslümanların toplumda dayanışma içinde olmalarını öğütler.'
          },
          {
            id: 'mc3-6',
            scenario: 'Sınıfta yeni bir öğrenci olan Kerem, teneffüste tek başına oturuyordu. Yusuf bunu fark edip yanına gitti, selam verip onu oyunlarına davet etti.',
            question: 'Yusuf’un bu davranışı aşağıdaki hadislerden en çok hangisinin gereğidir?',
            options: {
              A: '"Sizden biriniz kendisi için istediğini kardeşi için de istemedikçe iman etmiş olmaz."',
              B: '"İki nimet vardır ki insanların çoğu aldanmıştır."',
              C: '"İlim öğrenmek her Müslümana farzdır."',
              D: '"Ameller niyetlere göredir."'
            },
            correctAnswer: 'A',
            solutionLogic: 'Yusuf, kendisi yalnız kalsaydı nasıl bir dost eli bekleyecek idiyse, o şefkatle yeni arkadaşına kucak açmıştır.'
          }
        ]
      }
    },
    {
      id: '3.3',
      unitId: 3,
      number: '3.3',
      title: 'Tasarrufta Ölçümüz',
      summary: 'Emanet edilen nimetler, istek ve ihtiyaç dengesi; kanaat zenginliği, savurganlık ve israftan kaçınmanın dinî ve çevre boyutu.',
      keyConcepts: ['Tasarruf', 'Nimet', 'İsraf', 'Kanaat', 'Şükür', 'Kul Hakkı'],
      section1: {
        leadIn: 'Akan bir musluktan damla damla sızan suyun, çöpe atılan yarım dilim ekmeğin arkasındaki yüzlerce insanın emeğini ve bulutların kilometrelerce öteden taşıdığı rahmeti hiç düşündün mü?',
        natureAnalogy: {
          title: 'Kâinattaki Sıfır Atık Fabrikası ve Bereket Çeşmesi',
          story: 'Koca ormanı incele: Sonbaharda dökülen trilyonlarca yapraktan tek bir tanesi bile çöpe gider mi? Asla! Toprak altına çekilir, çürür, gübre olur, ilkbaharda yeni çiçeklere can verir. Bir damla su buharlaşır, bulut olur, yağmur olur döner; kâinatta hiçbir şey israf edilmez. Kâinatı kuran Yüce Sanatkâr her şeyi kusursuz bir tasarrufla işletirken; insanın elindeki ekmeği, elektriği, suyu ve zamanı hoyratça saçıp savurması o muazzam nizamla çelişmez mi?',
          lesson: 'Nimetler bize mülk değil emanettir. Gerçek zenginlik mal çokluğu değil; elindekine kanaat edip israftan kaçınan gönül tokluğudur.'
        },
        mainExplanation: [
          'Tasarruf; sözlükte bir şeye sahip olma ve onu ölçülü kullanma yetkisidir. Dinî olarak ise sahip olduğumuz imkânları bilinçli, yerli yerinde ve sorumlulukla harcamaktır.',
          'Nimet; Allah’ın insana başta akıl, iman ve sağlık olmak üzere verdiği maddi ve manevi her türlü iyilik ve güzelliktir. İbrâhim suresi 34. ayette: "... Allah’ın nimetlerini saymaya kalksanız başa çıkamazsınız..." buyrulur.',
          'KANAAT: İnsanın elindekiyle yetinmesi, helal rızkından hoşnut olması ve açgözlülükten uzak durmasıdır. Peygamberimiz "Gerçek zenginlik mal çokluğu değil, gönül tokluğudur" buyurmuştur.',
          'İSRAF: Gereksiz yere saçıp savurmak, harcamada haddi aşmak, nimetleri boş yere tüketmektir. Furkân suresi 67. ayette ideal müminler şöyle tarif edilir: "Onlar, harcadıklarında ne israf ne de cimrilik edenlerdir; harcamaları bu ikisi arasında dengeli bir yoldur."',
          'İsrafı önlemenin yolu İSTEK ile İHTİYAÇ arasındaki farkı bilmektir. Evde kullanmadığı 4 defteri varken rengi güzel diye 5. defteri almak bir istek israfıdır.',
          'Kamu malları (okul sıraları, camiler, parklar, ortak çeşmeler) ve su/elektrik gibi doğal kaynaklar 85 milyonun ortak hakkıdır. Bunları israf etmek doğrudan kul hakkına girmektir.'
        ],
        miracleStory: {
          title: 'Akan Nehirde Bile İsraftan Sakınmak',
          narrative: 'Bir gün Sevgili Peygamberimiz (s.a.v), sahabenin önde gelenlerinden Sa’d bin Ebî Vakkas’ın yanından geçiyordu. Sa’d o esnada abdest alıyor ve suyu bolca akıtıyordu. Peygamberimiz şefkatle uyardı: "Bu ne israf ey Sa’d?" Sa’d şaşkınlıkla sordu: "Abdest alırken de mi israf olur ya Resûlallah?" Peygamberimiz tarihe altın harflerle geçecek şu cevabı verdi: "Evet! Hatta akıp giden gürül gürül bir nehrin kenarında olsan bile!"',
          meaning: 'İbadet gibi kutsal bir fiilde dahi suyun gereksiz yere akıtılması israftır; kaynakları korumak imanın ve ahlakın özüdür.'
        },
        verses: [
          {
            surah: 'Furkân',
            verseNumber: 67,
            text: 'وَالَّذِينَ إِذَا أَنْفَقُوا لَمْ يُسْرِفُوا وَلَمْ يَقْتُرُوا وَكَانَ بَيْنَ ذَٰلِكَ قَوَامًا',
            meaning: 'Onlar, harcadıklarında ne israf ne de cimrilik edenlerdir. Onların harcamaları, bu ikisi arası dengeli bir harcamadır.'
          },
          {
            surah: 'A’râf',
            verseNumber: 31,
            text: 'وَكُلُوا وَاشْرَبُوا وَلَا تُسْرِفُوا ۚ إِنَّهُ لَا يُحِبُّ الْمُسْرِفِينَ',
            meaning: '... Yiyiniz, içiniz fakat israf etmeyiniz. Çünkü O, israf edenleri sevmez.'
          }
        ],
        hadiths: [
          {
            source: 'Buhârî, Rikâk, 15',
            text: 'Gerçek zenginlik, mal çokluğu değil gönül tokluğudur (kanaattir).'
          },
          {
            source: 'İbn Mâce, Tahâret, 48',
            text: 'Akan bir nehirde bile olsan suyu israf etme.'
          }
        ],
        reflectiveQuestions: [
          'Emre’nin dedesinin "Yavrum, su gökten istediğimiz kadar yağmıyor" sözü kuraklık ve su tasarrufu konusunda sana ne düşündürüyor?',
          'Tabağına yiyebileceğin kadar yemek almak neden hem bir tasarruf hem de nimetin sahibine bir şükürdür?'
        ]
      },
      section2: {
        dialogues: [
          {
            id: 'd3-7',
            studentQuestion: 'Öğretmenim, kendi paramla aldığım bir şeyi israf edersem kime ne zararı var?',
            guideAnswer: 'Çok yaygın bir yanılgı ama gel birlikte düşünelim! Cebindeki para senin olabilir ama harcadığın su, elektrik, buğday veya pamuk kâinatın ve bütün insanlığın ortak nimetidir. Sen bir ekmeği çöpe attığında fırıncının emeğini, tarladaki çiftçinin alın terini ve o buğdayın yetişmesi için yağan yağmuru israf etmiş olursun. Ayrıca paramız bize dilediğimiz gibi saçıp savurmak için değil, emanet olarak verilmiştir.',
            reflectionPrompt: 'Çöpe atılan bir dilim ekmeğin sofraya gelene kadar hangi ellerden geçtiğini hiç düşündün mü?'
          },
          {
            id: 'd3-8',
            studentQuestion: 'İstek ile ihtiyaç arasındaki farkı alışveriş yaparken nasıl anlayabilirim?',
            guideAnswer: 'Kendine şu sihirli soruyu sor: "Ben bunu almazsam hayatım zorlaşır mı, yoksa sadece anlık bir heves mi?" Mesela ayağındaki ayakkabı yırtılmışsa yenisini almak bir "ihtiyaç"tır. Ama evinde 5 çift ayakkabın varken sadece rengi hoşuna gitti diye 6.’sını istemek bir "istek"tir. İhtiyaçlarımızı karşılarız, isteklerimizi ise ölçü ve kanaat süzgecinden geçiririz.',
            reflectionPrompt: 'Son günlerde istediğin ama aslında gerçekten ihtiyacın olmayan bir şey var mı?'
          },
          {
            id: 'd3-9',
            studentQuestion: 'Cimrilik ile tutumlu olmak (tasarruf) aynı şey midir?',
            guideAnswer: 'Kesinlikle çok farklıdır! Cimri insan; ihtiyacı olduğu halde veya ailesine, yoksula harcamaktan korkan, parasını biriktirip kimseyle paylaşmayan kimsedir. Tutumlu insan ise gereksiz ve lüzumsuz yere harcamaz; fakat ihtiyaç olduğunda cömertçe, sevgiyle ve yerli yerince harcamasını bilir. İslam cimriliği de israfı da kınar; ikisinin ortası olan dengeli tutumluluğu över.',
            reflectionPrompt: 'Hem tutumlu hem de cömert bir insan nasıl davranır?'
          }
        ]
      },
      section3: {
        questions: [
          {
            id: 'tf3-11',
            statement: 'İsraf; sahip olunan zamanı, parayı, emeği ve doğal kaynakları gereksiz yere harcamak ve savurmaktır.',
            isTrue: true,
            explanation: 'Tebrikler! Kur’an-ı Kerim "Yiyin, için fakat israf etmeyin" buyurmaktadır.'
          },
          {
            id: 'tf3-12',
            statement: 'Peygamberimiz akan bir nehir kenarında abdest alınırken bile suyun israf edilmesini yasaklamıştır.',
            isTrue: true,
            explanation: 'Doğru! Bu muazzam sünnet çevre ve su tasarrufunun evrensel dersidir.'
          },
          {
            id: 'tf3-13',
            statement: 'Gerçek zenginlik, evdeki eşyaların ve paranın çokluğuyla ölçülür; kanaatin zenginlikle ilgisi yoktur.',
            isTrue: false,
            explanation: 'Harika dikkat! Peygamberimiz "Gerçek zenginlik mal çokluğu değil, gönül tokluğudur" buyurmuştur.'
          },
          {
            id: 'tf3-14',
            statement: 'Okul sıralarını çizmek, lambaları ve muslukları açık bırakmak kamu malı israfıdır ve kul hakkına girer.',
            isTrue: true,
            explanation: 'Tebrikler! Kamu malları bütün toplumun ortak emanetidir; korumak dinî bir görevdir.'
          },
          {
            id: 'tf3-15',
            statement: 'Müslüman harcamalarında ya tamamen cimri olmalı ya da elindekini hiç düşünmeden saçıp savurmalıdır.',
            isTrue: false,
            explanation: 'Yanlış! Furkân suresi 67. ayette müminlerin harcamada cimrilik ile israf arasında dengeli bir orta yol tuttuğu bildirilir.'
          }
        ]
      },
      section4: {
        questions: [
          {
            id: 'mc3-7',
            scenario: 'Semra kırtasiyeye ihtiyacı olan kalemi almak için gitti. Kalemi aldıktan sonra gözü rengârenk defterlere takıldı. Evinde henüz kullanmadığı 3-4 defteri olduğunu hatırladı. Ama rengi çok güzel olduğu için dayanamayıp defteri de satın aldı.',
            question: 'Semra’nın bu davranışı tasarruf ilkeleri açısından nasıl değerlendirilmelidir?',
            options: {
              A: 'Zorunlu bir ihtiyacını karşılamıştır.',
              B: 'İstek ile ihtiyaç arasındaki farkı gözetmeyerek israfa yönelmiştir.',
              C: 'Büyük bir tasarruf başarısı göstermiştir.',
              D: 'Kamu malını korumuştur.'
            },
            correctAnswer: 'B',
            solutionLogic: 'Semra evinde kullanılmamış defterleri varken sırf rengini beğendiği için anlık bir hevesle (istek) gereksiz harcama yapmış ve israfa girmiştir.'
          },
          {
            id: 'mc3-8',
            scenario: 'Kur’an-ı Kerim’de şöyle buyrulur: "Onlar, harcadıklarında ne israf ne de cimrilik edenlerdir. Onların harcamaları, bu ikisi arası dengeli bir harcamadır." (Furkân suresi 67. ayet)',
            question: 'Bu ayet-i kerimede tavsiye edilen harcama ahlakı aşağıdaki kavramlardan hangisiyle adlandırılır?',
            options: {
              A: 'İtidal (Denge ve ölçülülük)',
              B: 'Tecessüs',
              C: 'Gıybet',
              D: 'Hırs'
            },
            correctAnswer: 'A',
            solutionLogic: 'Cimrilik ile israfın tam ortasındaki adaletli ve dengeli tutum "itidal" kavramıyla ifade edilir.'
          },
          {
            id: 'mc3-9',
            scenario: 'Emre bahçede top oynarken sulama hortumunu saatlerce açık bırakmıştı. Dedesi gelip musluğu kapattı ve: "Yavrum, su gökten istediğimiz kadar yağmıyor" dedi.',
            question: 'Dedesinin bu sözü Emre’ye ve bizlere hangi bilinci kazandırmayı amaçlamaktadır?',
            options: {
              A: 'Bahçeye hiç çiçek dikilmemesi gerektiğini',
              B: 'Doğal kaynakların sınırsız olmadığını, suyun emanet bilinciyle ve tasarrufla kullanılması gerektiğini',
              C: 'Top oynamanın yasak olduğunu',
              D: 'Yağmurun tesadüfen yağdığını'
            },
            correctAnswer: 'B',
            solutionLogic: 'Su ve diğer doğal kaynaklar tükenmez değildir; Allah’ın emanetidir ve tasarruflu kullanılması geleceğimiz ve kulluk sorumluluğumuz için şarttır.'
          }
        ]
      }
    },
    {
      id: '3.4',
      unitId: 3,
      number: '3.4',
      title: 'Allah’ın Güzel İsimleri: Hafiz, Vedud, Kerim',
      summary: 'Kâinatı ve kullarını koruyup gözeten el-Hâfız, kullarını çok seven ve kalplere sevgi koyan el-Vedûd, ikramı ve lütfu sonsuz olan el-Kerîm.',
      keyConcepts: ['el-Hâfız', 'el-Vedûd', 'el-Kerîm', 'Merhamet', 'Sevgi', 'Cömertlik'],
      section1: {
        leadIn: 'Kışın dondurucu karı altında donmadan baharı bekleyen minicik tohumu, yumurtasından yeni çıkan yavrusunu doyurmak için çırpınan anne kuşu ve başımızın üstünden toprağa süzülen bereketli yağmuru hiç tefekkür ettin mi?',
        natureAnalogy: {
          title: 'Üç İlahi Pencere: Tohumun Sandığı, Anne Kuşun Kalbi ve Yağmur Bulutu',
          story: 'Üç muhteşem manzaraya bak: \n1. Toprağın karanlığına gömülen küçücük bir elma çekirdeğini düşün; içinde koca bir ağacın planını saklayan ve onu dondurucu soğuktan koruyup baharda sapasağlam filizlendiren el-HÂFIZ’dır. \n2. Yavrularını doyurmak için yorulmadan uçan anne kuşun kalbine o şefkat ve sevgi çağlayanını dolduran el-VEDÛD’dur. \n3. Kimin bahçesi olduğuna bakmaksızın gökten milyonlarca canlıya karşılıksız sular akıtan, sofralarımızı binbir meyveyle donatan ise el-KERÎM olan Rabbimizdir.',
          lesson: 'Hâfız bizi korur ve güvende kılar; Vedûd kalbimizi sevgiyle ısıtır; Kerîm ise sınırsız cömertliğiyle bize ikram eder.'
        },
        mainExplanation: [
          'el-HÂFIZ: Korumak, görüp gözetmek anlamlarına gelen "hıfz" kökünden gelir. Yaratmış olduğu bütün varlıkları koruyan, kâinattaki muazzam nizamı ve dengeyi muhafaza eden, hiçbir şeyi unutmayan demektir. Yûsuf suresi 64. ayette: "... Allah en iyi koruyandır ve O, merhametlilerin en merhametlisidir" buyrulur. Hafiz ismini bilen mümin, bedenini, ailesini ve sırlarını korunması gereken ilahi bir emanet bilir.',
          'el-VEDÛD: Salih kullarını çok seven, onlar tarafından çok sevilen ve sevilmeye en layık olan demektir. Yeryüzündeki tüm sevgilerin ve şefkatin kaynağı O’dur. Meryem suresi 96. ayette: "İman edip de iyi davranışlarda bulunanlara gelince çok merhametli olan Allah, onlar için (gönüllerde) bir sevgi yaratacaktır" buyrulur. Vedûd ismini bilen mümin, kardeşlerine sevgi ve şefkatle yaklaşır, affedici olur.',
          'el-KERÎM: Sonsuz cömertlik sahibi olan, karşılıksız ve hesapsız ikram eden, lütfu hiç tükenmeyen demektir. İnfitâr suresi 6. ayette: "Ey insan! Seni yaratan, şekillendirip ölçülü yapan, dilediği biçimde seni oluşturan cömert Rabbine (Kerîm) karşı seni ne aldattı?" diye seslenilir. Kerîm ismini öğrenen mümin, nimete şükreder, israftan kaçınır ve elindekini cömertçe paylaşır.'
        ],
        miracleStory: {
          title: 'Zehirli Kuyu ve Hz. Ebû Bekir’i Sokmayan Yılanın Aşkı',
          narrative: 'Hicret gecesi Sevr Mağarası’nda Hz. Ebû Bekir, Peygamberimiz girmeden önce mağaradaki delikleri kontrol etti ve bir yılan deliğini ayağının topuğuyla kapattı. Delikteki yılan Hz. Ebû Bekir’i ısırdı. Hz. Ebû Bekir canı çok yandığı halde Peygamberimizi uyandırmamak için kıpırdamadı, ancak gözünden bir damla yaş Peygamberimizin yanağına düştü. Peygamberimiz uyandı, durumu görünce mübarek tükürüğünü yaraya sürdü; el-Hâfız olan Allah’ın izniyle acı ve zehir anında geçti. Yılan ise dile gelip: "Ya Resûlallah, asırlardır senin kokunu özlüyordum, sana bakmak için delikten başımı uzatmıştım" diyerek muhabbetini arz etti.',
          meaning: 'el-Hâfız zehirleri panzehire çevirir; el-Vedûd ise hayvanların kalbine dahi Peygamber sevgisini yerleştirir.'
        },
        verses: [
          {
            surah: 'Yûsuf',
            verseNumber: 64,
            text: 'فَاللَّهُ خَيْرٌ حَافِظًا ۖ وَهُوَ أَرْحَمُ الرَّاحِمِينَ',
            meaning: '... Allah en iyi koruyandır ve O, merhametlilerin en merhametlisidir.'
          },
          {
            surah: 'Bürûc',
            verseNumber: 14,
            text: 'وَهُوَ الْغَفُورُ الْوَدُودُ',
            meaning: 'O, çok bağışlayandır, çok sevendir (el-Vedûd).'
          },
          {
            surah: 'İnfitâr',
            verseNumber: 6,
            text: 'يَا أَيُّهَا الْإِنْسَانُ مَا غَرَّكَ بِرَبِّكَ الْكَرِيمِ',
            meaning: 'Ey insan! Cömert Rabbine (el-Kerîm) karşı seni ne aldattı?'
          }
        ],
        hadiths: [
          {
            source: 'Tirmizî, De’avât, 86',
            text: 'Allah’ım! Senden sevgini, seni sevenlerin sevgisini ve beni senin sevgine ulaştıracak ameli isterim.'
          },
          {
            source: 'Müslim, Îmân, 93',
            text: 'Birbirinizi sevmedikçe iman etmiş olmazsınız; aranızda selamı yayınız.'
          }
        ],
        reflectiveQuestions: [
          'Şiddetli fırtınada evinde güvende otururken içini rahatlatan duygu Allah’ın hangi ismiyle ilgilidir?',
          'Kırmızı çilekleri tatlandıran, kokulandıran ve bize ikram eden Rabbimizin Kerîm ismine karşı nasıl teşekkür edebilirsin?'
        ]
      },
      section2: {
        dialogues: [
          {
            id: 'd3-10',
            studentQuestion: 'Öğretmenim, el-Hâfız ismi ile bizim mahremiyetimizi korumamız arasında nasıl bir ilişki vardır?',
            guideAnswer: 'O kadar güzel bir bağ var ki! Yüce Rabbimiz gökyüzünü, gezegenleri ve hücrelerimizi koruyup gözettiği gibi (Hâfız); bize de bedenimizi, odamızı, ailemizi ve sırlarımızı korumamızı emanet etmiştir. Biz tesettüre dikkat ettiğimizde, odalara izinle girdiğimizde ve arkadaşlarımızın sırrını sakladığımızda Rabbimizin Hâfız isminin bir tecellisini ahlakımıza yansıtmış oluruz.',
            reflectionPrompt: 'Arkadaşının sana emanet ettiği bir sırrı saklarken Hâfız ismini hatırlıyor musun?'
          },
          {
            id: 'd3-11',
            studentQuestion: 'Allah’ın Vedûd ismini bilen bir çocuk arkadaşlarına nasıl davranır?',
            guideAnswer: 'Vedûd ismini bilen çocuk bir sevgi çiçeği gibi olur! Arkadaşlarına asla küs kalmaz, onları kıracak söz söylemez. Arkadaşı hata yaptığında onu şefkatle affeder. Çünkü bilir ki sevgiyi kalplere koyan Allah’tır; insanları Allah rızası için sevmek imanın en tatlı meyvesidir.',
            reflectionPrompt: 'Bugün sınıfta kalbini kıran bir arkadaşını Allah rızası için affetmeyi dener misin?'
          },
          {
            id: 'd3-12',
            studentQuestion: 'Kerîm olan Allah bize bu kadar çok ikram ederken bizim ne yapmamız gerekir?',
            guideAnswer: 'Düşün ki sana her gün en güzel hediyeleri getiren birine sırtını dönsen ne kadar ayıp olur değil mi? Kerîm olan Rabbimiz bize göz, kulak, akıl, su, hava, meyveler ikram etmiştir. Bize düşen iki şeydir: Birincisi "Elhamdülillah" diyerek şükretmek ve nimetleri israf etmemek; ikincisi de O’nun bize ikram ettiği gibi bizim de yoksullarla ve kardeşlerimizle cömertçe paylaşmamızdır.',
            reflectionPrompt: 'Elindeki imkânları başkalarıyla cömertçe paylaştığında içinde ne hissediyorsun?'
          }
        ]
      },
      section3: {
        questions: [
          {
            id: 'tf3-16',
            statement: 'el-Hâfız ismi, Yüce Allah’ın evrendeki her şeyi koruyup gözettiği ve düzeni muhafaza ettiği anlamına gelir.',
            isTrue: true,
            explanation: 'Tebrikler! Yûsuf suresi 64. ayette "Allah en iyi koruyandır" buyrulmaktadır.'
          },
          {
            id: 'tf3-17',
            statement: 'el-Vedûd ismi, Allah’ın kullarını çok sevdiğini ve kalplere sevgi tohumları ektiğini ifade eder.',
            isTrue: true,
            explanation: 'Doğru! Bütün saf ve temiz sevgilerin hakiki kaynağı el-Vedûd olan Rabbimizdir.'
          },
          {
            id: 'tf3-18',
            statement: 'el-Kerîm ismi, Allah’ın nimet verirken cimri davrandığı ve çok az şey bahşettiği anlamına gelir.',
            isTrue: false,
            explanation: 'Harika dikkat! el-Kerîm, sonsuz cömertlik sahibi olan ve lütfu hiç tükenmeyen Yaratıcımızdır.'
          },
          {
            id: 'tf3-19',
            statement: 'Hafiz ismini kavrayan bir insan, başkalarının eşyalarını izinsiz karıştırmaz ve mahremiyete özen gösterir.',
            isTrue: true,
            explanation: 'Tebrikler! Emaneti koruma şuuru Hâfız isminin ahlaki bir tecellisidir.'
          },
          {
            id: 'tf3-20',
            statement: 'Vedûd ismini bilen bir Müslüman, din kardeşlerine karşı kin ve nefret beslemeye devam eder.',
            isTrue: false,
            explanation: 'Kesinlikle yanlış! Vedûd ismini bilen mümin affedici, şefkatli ve merhametli olur.'
          }
        ]
      },
      section4: {
        questions: [
          {
            id: 'mc3-10',
            scenario: 'Öğretmen derste üç öğrencisine en son ne için şükrettiklerini sordu. \nYusuf: "Babamla sabah namazında camideydik; cemaatle aynı anda saf tutmanın huzurunu kalbimize koyan Allah’a şükrettim." \nSelin: "Gece fırtınada çok korkmuştum ama evimizi ve ailemizi koruyan Rabbime şükrettim." \nEmir: "Dedemin bahçesindeki kıpkırmızı çilekleri kim yarattı ve bize ikram etti diye düşünüp şükrettim."',
            question: 'Yusuf, Selin ve Emir’in şükür sebepleri sırasıyla Allah’ın hangi güzel isimleriyle ilişkilidir?',
            options: {
              A: 'Yusuf: Vedûd - Selin: Hâfız - Emir: Kerîm',
              B: 'Yusuf: Hâfız - Selin: Vedûd - Emir: Kerîm',
              C: 'Yusuf: Kerîm - Selin: Hâfız - Emir: Vedûd',
              D: 'Yusuf: Vedûd - Selin: Kerîm - Emir: Hâfız'
            },
            correctAnswer: 'A',
            solutionLogic: 'Yusuf kalpteki sevgi bağıyla (Vedûd), Selin fırtınadaki korunmayla (Hâfız), Emir ise lezzetli çilek ikramıyla (Kerîm) isimlerini tefekkür etmiştir.'
          },
          {
            id: 'mc3-11',
            scenario: 'Bilmeceler: \nI. "Hazinesi tükenmez, ikramı hiç eksilmez / Öyle cömerttir ki O, kimse eli boş dönmez." \nII. "Hem seven hem sevilen, kalplere huzur veren / Şüphe duyulur mu hiç o sonsuz rahmetinden!" \nIII. "Koruyup gözetene, yücelerin yücesine / Sahipsiz değilim ben, sığınırım Rabbime."',
            question: 'Bu bilmecelerin cevapları sırasıyla hangi seçenekte doğru verilmiştir?',
            options: {
              A: 'I: Kerîm - II: Vedûd - III: Hâfız',
              B: 'I: Hâfız - II: Kerîm - III: Vedûd',
              C: 'I: Vedûd - II: Hâfız - III: Kerîm',
              D: 'I: Kerîm - II: Hâfız - III: Vedûd'
            },
            correctAnswer: 'A',
            solutionLogic: 'I tükenmez ikramıyla el-Kerîm; II kalplere sevgi veren el-Vedûd; III her şeyi koruyup gözeten el-Hâfız’dır.'
          },
          {
            id: 'mc3-12',
            scenario: 'Toprağın altına atılan küçücük bir elma çekirdeği kışın dondurucu ayazında bozulmadan bekler, bahar gelince yeşil bir filiz çıkarır.',
            question: 'Bu çekirdeğin çürümeden korunması ve kâinattaki düzenin bozulmaması Allah’ın hangi isminin apaçık delilidir?',
            options: {
              A: 'el-Hâfız',
              B: 'el-Mütekebbir',
              C: 'el-Mümît',
              D: 'el-Muzill'
            },
            correctAnswer: 'A',
            solutionLogic: 'el-Hâfız ismi, kâinattaki en küçük hücreden çekirdeğe kadar her varlığı kaybolmaktan, bozulmaktan koruyan ilahi muhafızlığı ifade eder.'
          }
        ]
      }
    }
  ]
};
