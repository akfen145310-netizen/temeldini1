import { Unit } from '../../types';

export const unit2: Unit = {
  id: 2,
  title: '2. ÜNİTE: HAYATIMIZ İBADET',
  badge: 'Kulluk & Temel İlkeler',
  color: 'sky',
  description: 'İbadetin anlamı ve gayesi, temel ilkeler (iman, niyet, ihlas, sünnete uygunluk), hükümler (farz, vacip, sünnet, müstehap) ve güzel isimler (Rakib, Şekur, Hamid).',
  subTopics: [
    {
      id: '2.1',
      unitId: 2,
      number: '2.1',
      title: 'Allah’a Yaklaşmanın Yolu: İbadet',
      summary: 'Yaratılış gayemiz olan kulluk; kâinattaki tüm varlıkların zikri, vakti belirlenmiş ve belirlenmemiş ibadetlerin hayata kattığı nizam.',
      keyConcepts: ['İbadet', 'Kulluk', 'Hamt', 'Şükür', 'Salih Amel', 'Fıtır Sadakası'],
      section1: {
        leadIn: 'Sabah güneşi doğarken dallara konup cıvıl cıvıl öten kuşların, rüzgârda eğilip kalkan başakların ve gece gökte ışıldayan ayın da kendilerine has bir dille Rablerine secde ettiğini hiç hissettin mi?',
        natureAnalogy: {
          title: 'Muazzam Saraydaki Teşekkür ve Ziyaret Âdâbı',
          story: 'Düşün ki seni muhteşem bir saraya davet eden, önüne binbir çeşit lezzetli nimetler seren, odanı mis kokulu çiçeklerle donatan çok cömert bir padişah var. Bu padişah senden ne para ister ne de altın. Sadece der ki: "Günün belirli saatlerinde huzuruma gel, bir teşekkür et, benim büyüklüğümü anla ve saraydaki diğer misafirlere sevgiyle davran." İşte kâinat o muazzam saraydır; bize can, akıl, sağlık ve bahçeler dolusu rızık veren Yüce Rabbimize günde beş vakit namazla, oruçla ve dualarla yönelmek bizim en tatlı teşekkür borcumuzdur.',
          lesson: 'İbadet bir yük veya zorluk değil; sayısız lütufların Sahibi olan Rabbimize kalpten sunulan en samimi teşekkür ve sevgi bağıdır.'
        },
        mainExplanation: [
          'İbadet; Yüce Allah’a boyun eğmek, O’na itaat etmek, sevgi, saygı ve bağlılığımızı göstermektir. Zâriyât suresi 56. ayette: "Ben cinleri ve insanları, ancak bana ibadet etsinler diye yarattım" buyrulur.',
          'Kâinattaki her varlık kendi diliyle Allah’ı tesbih eder. Güneş, Ay, yıldızlar, nehirler ve sıra sıra uçan kuşlar Yaratıcılarının koyduğu kanunlara tam bir itaatle boyun eğerler.',
          'Vakti ve Şartları Belirlenmiş İbadetler: Dinimiz bazı ibadetler için özel vakitler ve kurallar koymuştur. Namaz (günde 5 vakit), Ramazan orucu (yılda bir ay), Zekât (yılda bir kez dinen zengin olanların malından vermesi), Hac (ömürde bir kez imkânı olanın Kâbe’yi ziyareti), Kurban ve Fıtır Sadakası (fitre) bu kapsama girer.',
          'Vakti ve Şartları Belirlenmemiş İbadetler: İslam’da bir müminin Allah rızası için yaptığı her güzel iş ibadettir! Dua etmek, Kur’an okumak, insanlara güler yüz göstermek, doğayı korumak, sokak hayvanlarına merhamet etmek, anne babaya hürmet etmek, komşuya yemek ikram etmek ve dürüstçe çalışmak da birer ibadettir.',
          'İbadetin insana kazandırdıkları: Namaz insanı disiplinli ve planlı yapar, temizlik (abdest) alışkanlığı kazandırır; oruç sabrı ve aç olanların halini anlamayı öğretir; zekât ve sadaka bencilliği yok edip kardeşlik köprüsü kurar.'
        ],
        miracleStory: {
          title: 'Açlıktan Karnı Sırtına Yapışan Devenin Şikayeti',
          narrative: 'Bir gün Peygamberimiz Medine’de ensardan birinin bahçesine girdi. Orada bir deve vardı. Deve Peygamberimizi görünce inledi ve gözlerinden yaşlar aktı. Peygamber Efendimiz yanına gitti, şefkatle devenin hörgücünü ve başını okşadı. Deve sakinleşti. Peygamberimiz sahibini çağırarak buyurdu ki: "Allah’ın sana boyun eğdirdiği bu dilsiz hayvan hakkında Allah’tan korkmuyor musun? Bak, bana şikâyet etti; sen onu aç bırakıyor ve çok yoruyormuşsun!"',
          meaning: 'İslam ibadeti sadece camiyle sınırlamaz; bir hayvana merhamet etmek, ona iyi bakmak bile Allah katında ibadet değerindedir.'
        },
        verses: [
          {
            surah: 'Zâriyât',
            verseNumber: 56,
            text: 'وَمَا خَلَقْتُ الْجِنَّ وَالْإِنْسَ إِلَّا لِيَعْبُدُونِ',
            meaning: 'Ben cinleri ve insanları, ancak bana ibadet etsinler diye yarattım.'
          },
          {
            surah: 'En’âm',
            verseNumber: 162,
            text: 'قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ',
            meaning: 'De ki: Şüphesiz benim namazım da diğer ibadetlerim de yaşamam da ölümüm de âlemlerin Rabbi Allah içindir.'
          }
        ],
        hadiths: [
          {
            source: 'Buhârî, Îdeyn, 3',
            text: 'Bugün ilk işimiz bayram namazı kılmak, sonra dönüp kurban kesmektir.'
          },
          {
            source: 'Müslim, Tahâret, 5',
            text: 'Bir kimse güzelce abdest alır, ardından namaz kılarsa, iki namaz arasındaki günahları bağışlanır.'
          }
        ],
        reflectiveQuestions: [
          'Esra gibi oruçluyken pencere önüne kumrular için ekmek kırıntısı bırakmak neden bir ibadet sayılır?',
          'Günde beş vakit namaz kılan bir insanın zamanını yönetme ve ders çalışma düzeni nasıl olumlu etkilenir?'
        ]
      },
      section2: {
        dialogues: [
          {
            id: 'd2-1',
            studentQuestion: 'Öğretmenim, sadece namaz kılıp oruç tutmak yetmez mi? Ders çalışmak veya odayı toplamak da ibadet olabilir mi?',
            guideAnswer: 'Çok harika bir bakış açısı! Eğer sen dersini "Rabbimin bana verdiği aklı en güzel şekilde geliştireyim ve insanlığa faydalı bir Müslüman olayım" niyetiyle çalışırsan, o masadaki her dakikan ibadete dönüşür. Annenin yorgunluğunu hafifletmek için odanı toplaman, sofrayı kurman birer salih ameldir. Müminin niyeti, sıradan işleri bile altın değerinde ibadete çevirir!',
            reflectionPrompt: 'Bugün hangi günlük işini ibadet niyetiyle güzelleştirebilirsin?'
          },
          {
            id: 'd2-2',
            studentQuestion: 'Neden bazı ibadetlerin belirli vakitleri varken, bazılarının vakti yoktur?',
            guideAnswer: 'Düşün ki okulumuzda ders zili ve teneffüs saatleri var; bu saatler bize düzen ve disiplin kazandırır. Namaz da günümüzü beş nurlu vakte bölerek ruhumuzu tazeleyen manevi ders zilimizdir. Ama teneffüste arkadaşına gülümsemek, birine yardım etmek için zil çalmasını beklemezsin değil mi? İşte dua, tebessüm, çevre temizliği ve iyilik de her an yapabileceğimiz serbest rahmet kapılarıdır.',
            reflectionPrompt: 'Günün hangi vaktinde dua etmeyi ve gökyüzünü izlemeyi daha çok seviyorsun?'
          },
          {
            id: 'd2-3',
            studentQuestion: 'Zekât ve kurban ibadetleri toplumdaki zenginlerle ihtiyaç sahipleri arasında nasıl bir bağ kurar?',
            guideAnswer: 'Zekât ve kurban kalplerdeki haset ve kıskançlık pasını siler, yerine sevgi ve kardeşlik tohumları eker. İhtiyaç sahibi bir aile, zengin komşusunun paylaştığı zekâtla veya kurban etiyle sevinir; "Beni düşünen kardeşlerim var" diyerek huzur bulur. Zengin olan da malın gerçek sahibinin Allah olduğunu hatırlayıp şükreder.',
            reflectionPrompt: 'Bayramda bir et payı veya hediye ulaştırdığın bir çocuğun yüzündeki sevinci hiç gördün mü?'
          }
        ]
      },
      section3: {
        questions: [
          {
            id: 'tf2-1',
            statement: 'İslam dininde insanın yaratılış gayesi Yüce Allah’ı tanımak ve O’na ibadet etmektir.',
            isTrue: true,
            explanation: 'Tebrikler! Zâriyât suresi 56. ayette cinlerin ve insanların ancak Allah’a ibadet etmeleri için yaratıldığı bildirilmiştir.'
          },
          {
            id: 'tf2-2',
            statement: 'İbadet sadece namaz ve oruçtan ibarettir; insanlara yardım etmek ve doğayı korumak ibadet sayılmaz.',
            isTrue: false,
            explanation: 'Harika dikkat! Allah rızası için yapılan her faydalı iş, tebessüm ve canlılara merhamet de vakti belirlenmemiş ibadetlerdendir.'
          },
          {
            id: 'tf2-3',
            statement: 'Namaz ibadeti insanı kötü davranışlardan alıkoyar ve hayatına zaman yönetimi disiplini kazandırır.',
            isTrue: true,
            explanation: 'Doğru! Kur’an-ı Kerim’de namazın insanı hayâsızlıktan ve kötülükten alıkoyduğu bildirilmektedir.'
          },
          {
            id: 'tf2-4',
            statement: 'Kurban ve zekât sadece bireysel bir ibadettir; toplumsal dayanışmaya hiçbir katkısı yoktur.',
            isTrue: false,
            explanation: 'Kesinlikle yanlış! Zekât ve kurban toplumdaki zengin ve yoksul arasındaki sevgi, kardeşlik ve adalet bağlarını güçlendirir.'
          },
          {
            id: 'tf2-5',
            statement: 'Günde beş vakit namaza hazırlanırken alınan abdest, hem bedeni temizler hem de manevi arınma sağlar.',
            isTrue: true,
            explanation: 'Tebrikler! Peygamberimiz güzelce abdest alıp namaz kılan kimsenin arınacağını müjdelemiştir.'
          }
        ]
      },
      section4: {
        questions: [
          {
            id: 'mc2-1',
            scenario: 'Esra Ramazan ayında ilk defa oruç tutarken gün boyu sabretmiş; bahçedeki çiçekleri sulayıp solmuş yaprakları temizlemiş, pencereye gelen kumrulara ekmek kırıntıları vermiş ve akşam iftarda yaşlı Emine teyzeye sıcak çorba götürmüştür.',
            question: 'Esra’nın bu gün içindeki davranışlarıyla ilgili aşağıdakilerden hangisi söylenemez?',
            options: {
              A: 'Vakti belirlenmiş bir ibadet olan orucu yerine getirmiştir.',
              B: 'Doğaya ve komşularına merhamet göstererek salih ameller işlemiştir.',
              C: 'Yaptığı iyilikleri sadece okulda övünmek ve alkış almak için yapmıştır.',
              D: 'İbadet şuuruyla gününü anlamlı ve bereketli kılmıştır.'
            },
            correctAnswer: 'C',
            solutionLogic: 'Esra tüm bu güzel amelleri Allah’ın rızasını kazanmak, şükretmek ve merhamet göstermek gayesiyle yapmıştır; gösteriş için değil.'
          },
          {
            id: 'mc2-2',
            scenario: 'Aşağıda bazı ibadetler gruplandırılmıştır: \nI. Günde beş vakit namaz kılmak \nII. Ramazan ayında oruç tutmak \nIII. Yoldaki engeli kaldırmak \nIV. Yıllık zekât vermek \nV. Komşuya güler yüzle selam vermek',
            question: 'Bu ibadetlerden hangileri "Vakti ve Şartları Belirlenmiş İbadetler" grubuna girer?',
            options: {
              A: 'Yalnız I ve II',
              B: 'I, II ve IV',
              C: 'III ve V',
              D: 'II, III ve IV'
            },
            correctAnswer: 'B',
            solutionLogic: 'Namaz, oruç ve zekât dinimizce belirli vakitleri, miktarları ve şartları belirlenmiş temel farz ibadetlerdir.'
          },
          {
            id: 'mc2-3',
            scenario: 'Kur’an-ı Kerim’de şöyle buyrulur: "Rabbin, kendisinden başkasına asla ibadet etmemenizi, anaya-babaya iyi davranmanızı kesin olarak emretti..." (İsrâ suresi 23. ayet)',
            question: 'Bu ayetten çıkarılacak en temel sonuç hangisidir?',
            options: {
              A: 'İbadet sadece ve sadece Yüce Allah’a yapılır ve anne babaya iyilik O’nun kesin emridir.',
              B: 'İbadetler insanların isteğine göre şekillendirilebilir.',
              C: 'Anne babaya sadece bayramlarda saygı gösterilmelidir.',
              D: 'İbadet etmek insanın kişisel tercihine bırakılmıştır, sorumluluk gerektirmez.'
            },
            correctAnswer: 'A',
            solutionLogic: 'Ayet-i kerime ibadetin yalnızca Allah’a has kılınacağını ve anne-babaya hürmetin dinin emrettiği en büyük kulluk vazifelerinden olduğunu açıkça gösterir.'
          }
        ]
      }
    },
    {
      id: '2.2',
      unitId: 2,
      number: '2.2',
      title: 'İbadetin Temel İlkeleri',
      summary: 'İbadetlerin kabul şartları olan 4 temel sütun: İman, Niyet, İhlas ve Sünnete Uygunluk.',
      keyConcepts: ['İman', 'Niyet', 'İhlas', 'Sünnete Uygunluk', 'Rıza-i İlahi'],
      section1: {
        leadIn: 'Tertemiz bir kumaştan harika bir elbise dikmek istesen; kumaşın kaliteli olması yetmez, doğru ölçüyle kesilmesi ve usta bir terzinin dikiş tekniğine uygun dikilmesi gerekmez mi?',
        natureAnalogy: {
          title: 'Dört Ayaklı Sağlam Sehpa ve Saf Bal Kavanozu',
          story: 'Düşün ki paha biçilmez bir kristal vazoyu taşımak için dört ayaklı bir sehpa yapıyorsun. Ayaklardan biri "İman", biri "Niyet", biri "İhlas", dördüncüsü ise "Sünnete Uygunluk"tur. Eğer ayaklardan biri bile eksik veya çürük olsa o sehpa devrilir ve vazo kırılır. Tıpkı saf dağ balına bir damla kirli su karıştığında balın saflığının bozulması gibi; ibadete de gösteriş (riya) veya dünyevi çıkar karıştığında ihlas kaybolur.',
          lesson: 'İbadetin Allah katında makbul olması; sağlam bir iman temeli, samimi bir niyet, gösterişten uzak bir ihlas ve Peygamberimizin öğrettiği ölçülere tam uyumla mümkündür.'
        },
        mainExplanation: [
          'İbadetlerin geçerli ve makbul olabilmesi için İslam dininin koyduğu dört temel ilke vardır: İman, Niyet, İhlas ve Sünnete Uygunluk.',
          '1. İman: Kulun yaptığı davranışların ibadet değeri kazanmasının ilk şartı Allah’ın varlığına ve birliğine inanmasıdır. İmansız yapılan ameller köksüz bir ağaç gibidir.',
          '2. Niyet: Bir işin hangi gaye için yapıldığını belirler. Peygamber Efendimiz "Ameller niyetlere göredir..." buyurmuştur. Niyet kalp ile yapılır, dil ile de ifade edilir. Gösteriş için kılınan namazın veya tutulan orucun Allah katında hiçbir kıymeti yoktur.',
          '3. İhlas: Sözlükte samimi bağlılık, saflık ve temizlik demektir. İbadeti yalnız ve yalnız Allah’ın rızasını kazanmak için yapmak, kalbi riyadan (gösterişten) temizlemektir. Zümer suresi 2. ayette: "... O hâlde sen de dini Allah’a has kılarak (ihlas ile) kulluk et" buyrulur.',
          '4. Sünnete Uygunluk: İbadetlerin nasıl, ne zaman ve hangi şartlarda yapılacağını Yüce Allah ve Peygamberimiz belirlemiştir. Hiç kimse kendi aklına göre ibadetlerin şeklini ve rekatlarını değiştiremez. Peygamberimiz ibadetleri bizzat yaşayarak göstermiştir.',
          'Peygamberimiz devamlılığın önemini şöyle belirtmiştir: "... Allah katında amellerin en sevimlisi, az da olsa devamlı olanıdır."'
        ],
        miracleStory: {
          title: 'Mağarada Mahsur Kalan Üç Arkadaş ve İhlas Duası',
          narrative: 'Geçmiş zamanda yağmurdan kaçıp bir mağaraya sığınan üç yolcunun üzerine dağdan dev bir kaya yuvarlandı ve mağaranın ağzını tamamen kapattı. Kayayı oynatmaya güçleri yetmedi. Birbirlerine dediler ki: "Bizi buradan ancak Allah rızası için, sırf O’nun hoşnutluğu niyetiyle yaptığımız ihlaslı amellerimiz kurtarabilir!" Biri anne babasına gösterdiği derin hürmeti, ikincisi haramdan Allah korkusuyla kaçmasını, üçüncüsü işçisinin hakkını kat kat koruyup teslim etmesini anlattı ve "Allah’ım, bunu sırf senin rızan için yaptıysam bu kayayı aç!" diye dua ettiler. Her duada kaya biraz açıldı ve nihayetinde sapasağlam dışarı çıktılar.',
          meaning: 'İhlasla, gösterişsiz yapılan bir tek amel bile en ağır kayaları yerinden oynatacak manevi bir berekete sahiptir.'
        },
        verses: [
          {
            surah: 'Beyyine',
            verseNumber: 5,
            text: 'وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ',
            meaning: 'Hâlbuki onlara, ancak dini Allah’a has kılarak, hakka yönelen kimseler olarak O’na kulluk etmeleri emredilmişti...'
          },
          {
            surah: 'Zümer',
            verseNumber: 2,
            text: 'فَاعْبُدِ اللَّهَ مُخْلِصًا لَهُ الدِّينَ',
            meaning: '... O hâlde sen de dini Allah’a has kılarak (ihlas ile) kulluk et.'
          }
        ],
        hadiths: [
          {
            source: 'Buhârî, Bed’ü’l-Vahy, 1',
            text: 'Ameller niyetlere göredir; herkes için ancak niyet ettiği şey vardır.'
          },
          {
            source: 'Müslim, Birr, 34',
            text: 'Allah sizin dış görünüşünüze ve mallarınıza bakmaz; ancak kalplerinize ve amellerinize bakar.'
          },
          {
            source: 'Ebû Dâvûd, Tatavvu’, 27',
            text: 'Allah katında amellerin en sevimlisi, az da olsa devamlı olanıdır.'
          }
        ],
        reflectiveQuestions: [
          'Birisi arkadaşları görsün ve "Ne kadar cömert" desin diye yardım kutusuna para atarsa, bu davranışta hangi ilke zedelenmiş olur?',
          'Neden sabah namazını dört rekat farz olarak kılamayız? İbadetlerde sünnete bağlılık neden vazgeçilmezdir?'
        ]
      },
      section2: {
        dialogues: [
          {
            id: 'd2-4',
            studentQuestion: 'Öğretmenim, ihlas tam olarak ne demektir? İçimden gösteriş duygusu geçtiğinde ne yapmalıyım?',
            guideAnswer: 'İhlas, kalbini sadece Allah’ın sevgisine tahsis etmektir. Tıpkı derin bir pınardan çıkan suyun tertemiz ve berrak olması gibi. Bazen şeytan insanın kulağına fısıldar: "Bak arkadaşların seni izliyor, ne güzel okuyorsun!" İşte o an hemen içinden "Eûzü billâhi mineşşeytânirracîm" de ve de ki: "Hayır, ben bu Kur’an’ı veya duayı sadece beni yaratan Rabbim için okuyorum." Kalbini hemen Allah’a çevirdiğinde ihlasın korunmuş olur.',
            reflectionPrompt: 'Kimsenin görmediği bir yerde tek başınayken ibadet etmek sence ihlası nasıl artırır?'
          },
          {
            id: 'd2-5',
            studentQuestion: 'Niyet etmeyi unutursak kıldığımız namaz veya tuttuğumuz oruç geçerli olur mu?',
            guideAnswer: 'Niyet aslında kalbin o ibadete yönelmesidir. Sabah erkenden kalkıp sahur yemeği yemen bile kalben "Ben bugün Allah için oruç tutuyorum" niyetini taşır. Namaza dururken zihninde hangi vaktin namazını kılacağını bilmen niyettir. Dille söylemek bu niyetimizi perçinler. Ancak hiçbir niyet taşımadan, sırf jimnastik olsun diye eğilip kalkmak namaz sayılmaz.',
            reflectionPrompt: 'Bir işe başlamadan önce kalbimizden geçirdiğimiz niyet davranışımızı nasıl etkiler?'
          },
          {
            id: 'd2-6',
            studentQuestion: 'Peygamberimizin öğrettiği sünnet ölçüsünü değiştirmeye kalkarsak ne olur?',
            guideAnswer: 'Düşün ki bir eczacı sana bir şurup hazırlıyor. İçine konulacak şifalı bitkilerin damla sayısı bellidir. "Ben daha çok iyileşeyim" deyip kafana göre 10 kat fazla karıştırırsan şifa yerine zehir olabilir. İbadetler de ruhumuzun manevi reçetesidir. Reçeteyi yazan Allah, uygulamasını gösteren Peygamberimizdir. Sünnete uymak bu yüzden ibadetin kabul şartıdır.',
            reflectionPrompt: 'Sünnete uygunluk ile bir mimarın çizdiği projeye sadık kalmak arasında nasıl bir benzerlik var?'
          }
        ]
      },
      section3: {
        questions: [
          {
            id: 'tf2-6',
            statement: 'İbadetlerin Allah katında geçerli olması için iman, niyet, ihlas ve sünnete uygunluk ilkeleri şarttır.',
            isTrue: true,
            explanation: 'Tebrikler! Bu dört ilke ibadetin kabul olmasının temel direkleridir.'
          },
          {
            id: 'tf2-7',
            statement: 'İnsanların övgüsünü kazanmak ve gösteriş yapmak amacıyla yapılan ameller Allah katında çok sevaptır.',
            isTrue: false,
            explanation: 'Harika dikkat! Gösteriş (riya) ihlası yok eder; ibadet sadece Allah’ın rızası için yapılır.'
          },
          {
            id: 'tf2-8',
            statement: 'Peygamber Efendimiz "Ameller niyetlere göredir" buyurarak davranışların değerinin niyete bağlı olduğunu bildirmiştir.',
            isTrue: true,
            explanation: 'Doğru! Niyet amelimizin ruhudur; iyi niyet sıradan işleri dahi ibadete dönüştürür.'
          },
          {
            id: 'tf2-9',
            statement: 'İbadetlerin şekil ve vakitleri, çağın şartlarına göre insanlar tarafından oylama yapılarak değiştirilebilir.',
            isTrue: false,
            explanation: 'Yanlış! İbadetlerin vakit, şekil ve şartları ilahidir; Peygamberimizin sünnetiyle belirlenmiştir ve değiştirilemez.'
          },
          {
            id: 'tf2-10',
            statement: 'Peygamber Efendimiz "Allah katında amellerin en sevimlisi, az da olsa devamlı olanıdır" buyurmuştur.',
            isTrue: true,
            explanation: 'Tebrikler! Düzenli ve istikrarlı yapılan küçük iyilikler büyük manevi dereceler kazandırır.'
          }
        ]
      },
      section4: {
        questions: [
          {
            id: 'mc2-4',
            scenario: 'Selim sabah okula giderken harçlığından bir miktar ayırıp sınıftaki yardım kumbarasına attı. Bunu yaparken öğretmeninin görmesini beklemedi ve arkadaşlarına "Ben ne kadar çok para verdim" demedi. Sadece içinden "Allah’ım senin rızan için veriyorum" dedi.',
            question: 'Selim’in bu davranışı ibadetin temel ilkelerinden en çok hangisini yansıtır?',
            options: {
              A: 'İhlas',
              B: 'Tembellik',
              C: 'Müstehap',
              D: 'Kibir'
            },
            correctAnswer: 'A',
            solutionLogic: 'İhlas; ibadeti ve iyiliği sadece Allah’ın rızasını gözeterek, gösterişten ve övgü beklentisinden uzak durarak yapmaktır.'
          },
          {
            id: 'mc2-5',
            scenario: 'Bir kimse: "Öğle namazı 4 rekat farzdır ama ben Allah’ı çok seviyorum, bugün içimden 10 rekat farz kılmak geliyor" dese ve öğle namazının farzını 10 rekat kılsa bu namaz kabul olur mu?',
            question: 'Bu durum ibadetin temel ilkelerinden hangisine aykırıdır?',
            options: {
              A: 'Sünnete uygunluk ilkesine',
              B: 'Fıtrat ilkesine',
              C: 'İsraf ilkesine',
              D: 'Emanet ilkesine'
            },
            correctAnswer: 'A',
            solutionLogic: 'İbadetlerin rekatları, vakitleri ve şekilleri Allah ve Resulü tarafından belirlenmiştir. İnsan kendi isteğine göre bunları değiştiremez; sünnete uygunluk şarttır.'
          },
          {
            id: 'mc2-6',
            scenario: 'Peygamberimiz (s.a.v) şöyle buyurmuştur: "Allah sizin dış görünüşünüze ve mallarınıza bakmaz; ancak kalplerinize ve amellerinize bakar."',
            question: 'Bu hadis-i şerifte ibadetteki hangi kavramın önemi özellikle vurgulanmaktadır?',
            options: {
              A: 'Zenginlik ve şatafatın',
              B: 'Niyet ve kalpteki samimiyetin (ihlasın)',
              C: 'Giyilen elbiselerin pahalılığının',
              D: 'İbadetleri hızlıca bitirmenin'
            },
            correctAnswer: 'B',
            solutionLogic: 'Hadis-i şerif, amelin şeklinden ve maddi büyüklüğünden önce kalpteki niyetin temizliğini ve Allah rızası arayışını nazara vermektedir.'
          }
        ]
      }
    },
    {
      id: '2.3',
      unitId: 2,
      number: '2.3',
      title: 'Hükümlerine Göre İbadetler',
      summary: 'Mükellef olma şartı; farz, vacip, sünnet (müekkede & gayrimüekkede) ve müstehap hükümleri arasındaki incelikler.',
      keyConcepts: ['Mükellef', 'Farz', 'Vacip', 'Sünnet-i Müekkede', 'Sünnet-i Gayrimüekkede', 'Müstehap'],
      section1: {
        leadIn: 'Okulda sınıf başkanı olduğunda ya da evde kardeşine göz kulak olman istendiğinde omuzlarına bir sorumluluk yüklendiğini hissedersin değil mi? Peki insanın Rabbine karşı sorumluluğu ne zaman başlar?',
        natureAnalogy: {
          title: 'Hayat Ağacındaki Olgunlaşma ve Görev Basamakları',
          story: 'Fidan ilk dikildiğinde küçücüktür, ondan meyve beklenmez. Güneşle, suyla beslenir, gövdesi kalınlaşır. Ne zaman ki dalları olgunlaşır, artık çiçek açar ve meyve vermeye başlar. İnsan da çocukluk döneminde sevgiyle büyür; akıl ve ergenlik çağına ulaştığında artık "Mükellef" olur, yani sorumluluk meyvelerini vermeye başlar. Bu meyvelerin bir kısmı gövde gibi zorunludur (Farz), bir kısmı kalın dallar gibidir (Vacip), bir kısmı yeşil yapraklar gibidir (Sünnet), bir kısmı da o ağacın mis kokusu ve güzelliğidir (Müstehap).',
          lesson: 'Mükellef olmak bir onurdur; insanın Allah katında muhatap kabul edilip sorumluluk alacak olgunluğa eriştiğini gösterir.'
        },
        mainExplanation: [
          'Mükellef: Sözlükte sorumluluk taşıyan kişi demektir. İslam dininde akıl sağlığı yerinde olan ve ergenlik çağına ulaşmış kimseler mükellef sayılır; Allah’ın emir ve yasaklarından sorumlu olurlar.',
          'İslam’da ibadetler hükümlerine göre dörde ayrılır: Farz, Vacip, Sünnet ve Müstehap.',
          '1. FARZ: Yüce Allah’ın Kur’an-ı Kerim’de yapılmasını kesin olarak emrettiği ibadetlerdir. Yapılması sevap, mazeretsiz terk edilmesi günah, inkâr edilmesi ise dinden çıkmaya sebep olur. Örnek: Beş vakit namaz, Ramazan orucu, zekât vermek, hacca gitmek.',
          '2. VACİP: Farz kadar açık ve kesin olmamakla birlikte yapılması dinimizce emredilen ibadetlerdir. Terk eden günahkâr olur. Örnek: Kurban kesmek, fıtır sadakası (fitre) vermek, bayram namazları ve vitir namazı.',
          '3. SÜNNET: Peygamberimizin farz ve vacipler dışında yaptığı ve bize tavsiye ettiği ibadet ve davranışlardır. İkiye ayrılır: \n  • Sünnet-i Müekkede: Peygamberimizin sürekli yaptığı, pek nadir terk ettiği sünnetlerdir (Sabah, öğle ve akşam namazlarının sünnetleri, abdestte ağza su vermek). Yapan övülür, terk eden kınanır. \n  • Sünnet-i Gayrimüekkede: Peygamberimizin bazen yapıp bazen terk ettiği sünnetlerdir (İkindi ve yatsı namazının ilk sünnetleri). Terk eden kınanmaz.',
          '4. MÜSTEHAP: Yapılması güzel karşılanan, Peygamberimizin ara sıra yaptığı davranışlardır. Yapan sevap kazanır, yapmayan günaha girmez veya kınanmaz. Örnek: Nafile namaz ve oruçlar, sabah namazını aydınlık baslarken kılmak, akşam namazını geciktirmeden kılmak.'
        ],
        miracleStory: {
          title: 'Güneşin Batışının Durdurulması (İkindi Namazı Hürmetine)',
          narrative: 'Hayber Seferi dönüşünde Peygamber Efendimiz, Hz. Ali’nin dizinde dinlenirken vahiy hali geldi. Hz. Ali, Peygamberimizi uyandırmamak için kıpırdamadı; fakat bu sırada güneş batmak üzereydi ve Hz. Ali ikindi namazını henüz kılamamıştı. Vahiy hali bitince Peygamberimiz Hz. Ali’nin ikindi namazını kılamadığını öğrendi ve ellerini kaldırıp dua etti. Allah’ın izniyle batmakta olan güneş geri yükseldi, ikindi namazının vakti geri geldi; Hz. Ali namazını vaktinde kıldı ve güneş tekrar battı.',
          meaning: 'İbadetin vakti ve emri o kadar kıymetlidir ki, kâinatın Sahibi en sevgili dostlarının namazı için koca Güneş’i emre amade kılmıştır.'
        },
        verses: [
          {
            surah: 'Bakara',
            verseNumber: 110,
            text: 'وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ',
            meaning: 'Namazı dosdoğru kılın, zekâtı verin. Kendiniz için her ne iyilik işlemiş olursanız Allah katında onu bulursunuz...'
          },
          {
            surah: 'Kevser',
            verseNumber: 2,
            text: 'فَصَلِّ لِرَبِّكَ وَانْحَرْ',
            meaning: 'O hâlde Rabbin için namaz kıl ve kurban kes.'
          }
        ],
        hadiths: [
          {
            source: 'Buhârî, Îdeyn, 3',
            text: 'Bugün ilk işimiz bayram namazı kılmak, sonra kurban kesmektir; kim böyle yaparsa sünnetimize uymuş olur.'
          },
          {
            source: 'Müslim, Îmân, 93',
            text: 'Aranızda selamı yayın.'
          }
        ],
        reflectiveQuestions: [
          'Farz olan Ramazan orucu ile nafile olan müstehap bir oruç arasında niyet ve sorumluluk açısından nasıl bir fark vardır?',
          'İbadetlerin hükümlerini (farz, vacip, sünnet) bilmek, bir Müslüman’ın önceliklerini belirlemesine nasıl yardımcı olur?'
        ]
      },
      section2: {
        dialogues: [
          {
            id: 'd2-7',
            studentQuestion: 'Öğretmenim, bir ibadetin "farz" olması ile "vacip" olması arasındaki fark nedir?',
            guideAnswer: 'Çok dikkatli bir soru! Farz, Kur’an-ı Kerim’deki delili kesin, yoruma yer bırakmayacak kadar net olan emirdir; örneğin 5 vakit namaz ve Ramazan orucu gibi. Vacip ise yine dinimizin yapmamızı emrettiği, ancak delili farz kadar açık olmayan hükümlerdir; Kurban kesmek, fitre vermek ve bayram namazı kılmak gibi. Her ikisini de yerine getirmek görevimizdir; ancak farz dinin temel direğidir.',
            reflectionPrompt: 'Vitir namazı ve bayram namazı kılarken bunun vacip bir ibadet olduğunu hatırlıyor musun?'
          },
          {
            id: 'd2-8',
            studentQuestion: 'Sünnet-i müekkede ile sünnet-i gayrimüekkede arasındaki farkı aklımda nasıl kolayca tutabilirim?',
            guideAnswer: 'Şöyle kodlayabilirsin: "Müekkede" kökünden anlaşıldığı gibi pekiştirilmiş, kuvvetli demektir. Peygamberimizin her gün düzenli kıldığı sabah, öğle ve akşam namazlarının sünnetleri böyledir. "Gayrimüekkede" ise Peygamberimizin bazen kılıp bazen serbest bıraktığı ikindi ve yatsı namazlarının ilk sünnetleridir. Gayrimüekkede sünneti kılan çok büyük ecir alır, kılamayan kınanmaz.',
            reflectionPrompt: 'Öğle namazının ilk ve son sünnetlerini kılarken Peygamberimize olan bağını hissediyor musun?'
          },
          {
            id: 'd2-9',
            studentQuestion: 'Müstehap ne demektir, yapmasak da olur mu?',
            guideAnswer: 'Müstehap, "sevilen, hoş karşılanan" demektir. Düşün ki annenin doğum gününde ona sarılıp "Seni çok seviyorum" demen zorunlu bir kural değildir; ama bunu yaparsan annen nasıl mutlu olur değil mi? Müstehap da böyledir: Sabah namazını ortalık biraz aydınlanırken kılmak, nafile namazlar kılmak, güzel koku sürünmek gibi ameller Rabbimizin rızasını kazandıran zarif inceliklerdir.',
            reflectionPrompt: 'Günlük hayatında hangi müstehap güzel davranışları severek yapıyorsun?'
          }
        ]
      },
      section3: {
        questions: [
          {
            id: 'tf2-11',
            statement: 'İslam dininde akıllı ve ergenlik çağına ulaşmış her kişi dinî emirlerden sorumlu bir mükelleftir.',
            isTrue: true,
            explanation: 'Tebrikler! Mükellef; aklı başında ve ergenliğe ermiş sorumlu Müslüman demektir.'
          },
          {
            id: 'tf2-12',
            statement: 'Günde beş vakit namaz kılmak ve Ramazan orucu tutmak vacip ibadetlerdendir.',
            isTrue: false,
            explanation: 'Harika dikkat! Beş vakit namaz ve Ramazan orucu Allah’ın kesin emri olan farz ibadetlerdendir.'
          },
          {
            id: 'tf2-13',
            statement: 'Kurban kesmek, vitir namazı kılmak ve Ramazan’da fıtır sadakası vermek vaciptir.',
            isTrue: true,
            explanation: 'Doğru! Bu ibadetler dinimizde vacip kategorisinde yer alır.'
          },
          {
            id: 'tf2-14',
            statement: 'Peygamberimizin devamlı yaptığı ve nadiren terk ettiği fiillere sünnet-i gayrimüekkede denir.',
            isTrue: false,
            explanation: 'Yanlış! Peygamberimizin devamlı yaptığı sünnetlere "sünnet-i müekkede" denir.'
          },
          {
            id: 'tf2-15',
            statement: 'Müstehap; yapılması hoş ve güzel karşılanan, yapanın sevap kazandığı nafile güzel amellerdir.',
            isTrue: true,
            explanation: 'Tebrikler! Nafile namazlar, oruçlar ve güzel davranışlar müstehap kapsamındadır.'
          }
        ]
      },
      section4: {
        questions: [
          {
            id: 'mc2-7',
            scenario: 'Ahmet’in babası Ramazan ayında gündüz oruç tutar, gece yatsı namazından sonra teravih namazı kılar. Kurban Bayramı geldiğinde ise imkânı olduğu için kurbanını keser. Ahmet bu ibadetlerin hükümlerini araştırmaktadır.',
            question: 'Buna göre bu üç ibadetin hükümleri sırasıyla hangi seçenekte doğru verilmiştir?',
            options: {
              A: 'Oruç: Farz - Teravih: Sünnet - Kurban: Vacip',
              B: 'Oruç: Vacip - Teravih: Farz - Kurban: Sünnet',
              C: 'Oruç: Sünnet - Teravih: Müstehap - Kurban: Farz',
              D: 'Oruç: Farz - Teravih: Vacip - Kurban: Müstehap'
            },
            correctAnswer: 'A',
            solutionLogic: 'Ramazan orucu kesin emirle farzdır; teravih namazı Peygamberimizin sünnetidir; kurban kesmek ise vacip bir ibadettir.'
          },
          {
            id: 'mc2-8',
            scenario: 'Bir öğrenci ibadetlerin hükümlerini öğrenirken şu notu alır: "İkindi ve yatsı namazlarının ilk sünnetleri, Peygamberimizin bazen kıldığı bazen de terk ettiği ibadetlerdendir."',
            question: 'Bu tanım aşağıdaki sünnet çeşitlerinden hangisine aittir?',
            options: {
              A: 'Sünnet-i Müekkede',
              B: 'Sünnet-i Gayrimüekkede',
              C: 'Farz-ı Ayn',
              D: 'Vacip'
            },
            correctAnswer: 'B',
            solutionLogic: 'Peygamberimizin bazen yapıp bazen terk ettiği, terk edenin kınanmadığı sünnetlere sünnet-i gayrimüekkede denir.'
          },
          {
            id: 'mc2-9',
            scenario: 'İslam’da bir kimsenin ibadetlerden sorumlu olabilmesi için belirli şartları taşıması gerekir.',
            question: 'Aşağıdakilerden hangisi bir kimsenin dinen mükellef sayılması için gerekli temel şartlardandır?',
            options: {
              A: 'Çok zengin olmak ve ticaretle uğraşmak',
              B: 'Akıl sağlığı yerinde olmak ve ergenlik çağına ulaşmış olmak',
              C: 'Arapça bilmek ve üniversite mezunu olmak',
              D: 'Sadece yaşlılık dönemine girmiş olmak'
            },
            correctAnswer: 'B',
            solutionLogic: 'İslam’da sorumluluk (mükellefiyet) akıl sağlığı ve ergenlik çağına (bülûğ) ulaşmış olmak şartlarına bağlıdır.'
          }
        ]
      }
    },
    {
      id: '2.4',
      unitId: 2,
      number: '2.4',
      title: 'Allah’ın Güzel İsimleri: Rakib, Şekur, Hamid',
      summary: 'Her an her şeyi görüp gözeten er-Rakîb, küçücük iyiliklere kat kat mükâfat veren eş-Şekûr ve bütün övgülere layık olan el-Hamîd.',
      keyConcepts: ['er-Rakîb', 'eş-Şekûr', 'el-Hamîd', 'Hamt', 'Şükür', 'Gözetim'],
      section1: {
        leadIn: 'Sabah uyanıp pencereyi açtığında ciğerlerine dolan tertemiz havayı, sıcacık ekmeğin kokusunu, dallardaki kirazları ve şırıl şırıl akan dereleri gördüğünde kalbinden taşan o "Elhamdülillah!" nidasını hiç düşündün mü?',
        natureAnalogy: {
          title: 'Yerin Altındaki Karınca ve Gökteki Yıldızların Sahibi',
          story: 'Karanlık bir gecede, kapkara bir kayanın altında, toprağın metrelerce derinliğinde yuvasına minicik bir buğday tanesi taşıyan siyah bir karıncayı düşün. O karıncanın ayak sesini duyan, rızkını bilen ve onu koruyan bir Sahibi vardır. İşte O, er-Rakîb olan Allah’tır. O karınca için toprağa dökülen bir damla suya karşılık devasa bir çınar ağacı bahşeden, azıcık amele hesapsız karşılık veren eş-Şekûr’dur. Ve gökyüzündeki milyarlarca galaksiden yerdeki karıncaya kadar her varlığın diliyle övdüğü tek Yüce Varlık ise el-Hamîd’dir.',
          lesson: 'Allah bizi bir saniye bile unutmaz (Rakib), yaptığımız küçücük bir iyiliği bile zayi etmez kat kat ödüllendirir (Şekur) ve bütün hamdler, övgüler yalnızca O’na aittir (Hamid).'
        },
        mainExplanation: [
          'er-RAKÎB: Sözlükte gözetleyip kontrol eden demektir. Esmâ-i Hüsnâ’dan olan Rakîb; Yüce Allah’ın bütün varlıkları daima görüp gözetmesi, her şeyden haberdar olmasıdır. O’ndan gizli hiçbir şey kalamaz. Rakîb ismini bilen mümin, kimsenin olmadığı yerde bile günahlardan sakınır; çünkü Rabbinin kendisini gördüğünü bilir.',
          'eş-ŞEKÛR: Sözlükte çokça teşekkür eden demektir. İsim olarak ise; kullarının azıcık salih ameline kat kat bol mükâfat veren, iyilikleri asla karşılıksız bırakmayan demektir. Peygamberimiz yoldaki bir dikeni kaldırmanın, susamış bir hayvana su vermenin dahi günahların affına vesile olacağını müjdelemiştir.',
          'el-HAMÎD: Sözlükte övülen, övgüye layık olan demektir. Bütün varlıkların diliyle övdüğü, sayısız nimetlerinden ötürü şükredilen tek varlık Yüce Allah’tır. Fatiha suresinin başındaki "Elhamdülillâhi Rabbi’l-âlemîn (Hamt, âlemlerin Rabbi olan Allah’a mahsustur)" ayeti bu ismin en güzel ifadesidir.',
          'Peygamber Efendimiz "Allah’a hamt ile başlanılmayan her önemli iş noksandır" buyurarak her hayırlı işe hamd ile başlamamızı öğütlemiştir.'
        ],
        miracleStory: {
          title: 'Çölde Susuz Kalan Köpeğe Su Veren Yolcu',
          narrative: 'Peygamber Efendimiz anlattı: "Bir adam çölde yürürken çok susadı. Bir kuyu bulup içine indi, su içip çıktı. Bir de baktı ki susuzluktan toprağı yalayan bir köpek duruyor. Adam: ’Bu hayvan da benim gibi çok susamış’ dedi. Tekrar kuyuya indi, pabucunu suyla doldurdu, ağzıyla tutarak yukarı çıktı ve köpeği suladı. Allah onun bu davranışından razı oldu, ona eş-Şekûr ismiyle teşekkür etti ve günahlarını bağışladı."',
          meaning: 'Bir köpeğe verilen bir yudum su bile eş-Şekûr olan Allah katında kaybolmaz; kat kat rahmet ve bağışlanmaya vesile olur.'
        },
        verses: [
          {
            surah: 'Şûrâ',
            verseNumber: 23,
            text: 'إِنَّ اللَّهَ غَفُورٌ شَكُورٌ',
            meaning: '... Şüphesiz Allah bağışlayandır, şükrün karşılığını fazlasıyla verendir (Şekûr).'
          },
          {
            surah: 'Fâtiha',
            verseNumber: 2,
            text: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
            meaning: 'Hamt (bütün övgüler), âlemlerin Rabbi olan Allah’a mahsustur.'
          },
          {
            surah: 'Nisâ',
            verseNumber: 1,
            text: 'إِنَّ اللَّهَ كَانَ عَلَيْكُمْ رَقِيبًا',
            meaning: '... Şüphesiz Allah sizin üzerinizde tam bir gözetleyicidir (Rakîb).'
          }
        ],
        hadiths: [
          {
            source: 'Buhârî, Mezâlim, 23',
            text: 'İnsanların yoldan rahat geçmesi için bir dikeni veya engeli kaldıran kimsenin ameli takdir edilir ve bağışlanır.'
          },
          {
            source: 'İbn Mâce, Nikâh, 19',
            text: 'Allah’a hamt ile başlanılmayan her önemli iş noksandır.'
          }
        ],
        reflectiveQuestions: [
          'Yalnızken odanda kimse görmezken yere düşen çöpü kaldırman veya kardeşinin çikolatasına el uzatmaman Allah’ın hangi ismini bildiğini gösterir?',
          'Her sabah uyandığında ve yemekten sonra "Elhamdülillah" derken Rabbimizin hangi güzel ismini anmış olursun?'
        ]
      },
      section2: {
        dialogues: [
          {
            id: 'd2-10',
            studentQuestion: 'Öğretmenim, Allah sonsuz zengin iken "Şekûr" yani teşekkür eden nasıl olur?',
            guideAnswer: 'Ne kadar zarif bir soru! Bizler birisine yardım ettiğimizde teşekkür bekleriz. Ancak Allah’ın bizim hiçbir şeyimize ihtiyacı yoktur. O’nun "Şekûr" olması; bizim yaptığımız küçücük bir iyiliği, bir tebessümü, annemize uzattığımız bir bardak suyu bile sonsuz cömertliğiyle ödüllendirmesi, asla zayi etmemesi demektir. O kulunun emeğini öyle çok takdir eder ki, bir iyiliğe on, yüz, hatta yedi yüz kat mükâfat verir.',
            reflectionPrompt: 'Küçücük bir tohum ekip koca bir ağaç dolusu elma aldığında Şekûr ismini nasıl hissedersin?'
          },
          {
            id: 'd2-11',
            studentQuestion: 'Rakîb ismini aklımızda tutmak bizi korkutur mu, yoksa güvende mi hissettirir?',
            guideAnswer: 'Her ikisi de tatlı bir dengededir! Düşün ki küçük bir çocuk annesinin gözetimi altındayken hem tehlikelerden korunduğu için kendini güvende hisseder, hem de annesinin üzülmemesi için yaramazlık yapmaktan kaçınır. er-Rakîb olan Rabbimiz bizi her an sevgiyle gözetler; yalnız olmadığımızı biliriz, huzur duyarız ve O’nun hoşlanmayacağı çirkinliklerden edeble kaçınırız.',
            reflectionPrompt: 'Karanlık bir odada tek başınayken "Rabbim beni görüyor ve koruyor" demek sana nasıl bir güç verir?'
          },
          {
            id: 'd2-12',
            studentQuestion: 'Hamt ile şükür arasında bir fark var mıdır?',
            guideAnswer: 'Evet, çok ince ve tatlı bir fark vardır! Şükür; sana verilen özel bir nimete karşı teşekkür etmektir (örneğin susadığında su içince şükretmek). Hamt ise sadece verilen nimete değil; Allah’ın eşsiz güzelliğine, sonsuz ilmine, merhametine, kâinattaki bütün harikalara karşı O’nu yüceltmek ve övmektir. Bu yüzden hamt şükrü de içine alan en kapsamlı övgüdür.',
            reflectionPrompt: 'Bugün gökyüzündeki bulutların güzelliğini izlerken hamdettin mi?'
          }
        ]
      },
      section3: {
        questions: [
          {
            id: 'tf2-16',
            statement: 'er-Rakîb ismi, Allah’ın her an her şeyi gözetlediği, hiçbir şeyin O’ndan gizli kalamayacağı anlamına gelir.',
            isTrue: true,
            explanation: 'Tebrikler! O, yerin altındaki karıncanın niyetinden gökteki yıldızların hareketine kadar her şeyi gözetendir.'
          },
          {
            id: 'tf2-17',
            statement: 'eş-Şekûr ismi, Allah’ın sadece çok büyük servet harcayanlara sevap verdiği, küçük iyilikleri önemsemediği anlamına gelir.',
            isTrue: false,
            explanation: 'Harika dikkat! eş-Şekûr, küçücük bir salih amele bile hesapsız kat kat mükâfat veren sonsuz cömert Rabbimizdir.'
          },
          {
            id: 'tf2-18',
            statement: 'el-Hamîd ismi, bütün övgülerin ve şükürlerin yalnız ve yalnız Allah’a ait olduğunu ifade eder.',
            isTrue: true,
            explanation: 'Doğru! Bütün varlıkların diliyle övdüğü tek Yaratıcı el-Hamîd olan Allah’tır.'
          },
          {
            id: 'tf2-19',
            statement: 'Peygamberimiz "Allah’a hamt ile başlanılmayan her önemli iş noksandır" buyurmuştur.',
            isTrue: true,
            explanation: 'Tebrikler! İşlerimize ve dualarımıza Allah’a hamd ederek başlamak berekettir.'
          },
          {
            id: 'tf2-20',
            statement: 'Rakîb ismini bilen bir insan, yalnız kaldığında kimse görmediği için dilediği gibi kötülük işleyebilir.',
            isTrue: false,
            explanation: 'Kesinlikle yanlış! Rakîb ismini bilen mümin, kimsenin olmadığı yerde dahi Allah’ın kendisini gördüğünü bilerek kötülükten kaçınır.'
          }
        ]
      },
      section4: {
        questions: [
          {
            id: 'mc2-10',
            scenario: 'Şiir: \n"Azıcık ameline / Hesapsız sevap verir / Bu işin hesabını / Ancak eş-Şekûr bilir"',
            question: 'Bu şiirde Allah’ın hangi özelliği vurgulanmaktadır?',
            options: {
              A: 'Kullarının küçük iyiliklerine dahi bolca mükâfat bahşetmesi',
              B: 'Sadece zenginlerin dualarını kabul etmesi',
              C: 'İnsanların hatalarını hemen cezalandırması',
              D: 'Kâinattaki varlıkları başıboş bırakması'
            },
            correctAnswer: 'A',
            solutionLogic: 'eş-Şekûr; kullarının salih amellerine karşı sonsuz lütuf gösterip az amele çok mükâfat veren demektir.'
          },
          {
            id: 'mc2-11',
            scenario: 'Arda, piknikte doğanın eşsiz manzarasını seyrederken: "Bu kadar muazzam bir dengeyi kuran, bize bu lezzetli rızıkları veren ve her türlü övgüyü hak eden yalnızca Yüce Allah’tır" diyerek Elhamdülillah demiştir. Ardından çevreyi korumak için çöpleri toplamıştır.',
            question: 'Arda’nın bu düşüncesi ve davranışı sırasıyla hangi isim ve kavramla doğrudan ilişkilidir?',
            options: {
              A: 'el-Hamîd - Salih Amel',
              B: 'el-Vekîl - İsraf',
              C: 'es-Selâm - Kibir',
              D: 'el-Hâdi - Hırs'
            },
            correctAnswer: 'A',
            solutionLogic: 'Arda Allah’ı överek el-Hamîd ismini anmış, çevreyi temizleyerek de salih amel işlemiştir.'
          },
          {
            id: 'mc2-12',
            scenario: 'Okul kantininde görevli dalgınlıkla Zeynep’e 20 TL yerine 50 TL para üstü verdi. Zeynep parayı cebine koyup gitmek yerine: "Öğretmenim, para üstünü fazla verdiniz" diyerek iade etti.',
            question: 'Zeynep’in bu dürüst tavrı aşağıdaki isimlerden hangisinin bilinciyle en çok ilişkilidir?',
            options: {
              A: 'er-Rakîb (Allah’ın her an görüp gözettiği bilinci)',
              B: 'el-Mütekebbir',
              C: 'el-Cebbar',
              D: 'el-Kabıd'
            },
            correctAnswer: 'A',
            solutionLogic: 'Zeynep, kantinci fark etmese bile er-Rakîb olan Allah’ın her şeyi gördüğünü bilerek dürüst davranmıştır.'
          }
        ]
      }
    }
  ]
};
