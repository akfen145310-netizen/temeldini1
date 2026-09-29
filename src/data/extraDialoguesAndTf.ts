import { DialogueItem, TrueFalseQuestion } from '../types';

export interface ExtraContent {
  dialogues: DialogueItem[];
  tfQuestions: TrueFalseQuestion[];
}

export const extraContentByTopicId: Record<string, ExtraContent> = {
  // ==========================================
  // ÜNİTE 1
  // ==========================================
  '1.1': {
    dialogues: [
      {
        id: 'd1-1-4',
        studentQuestion: 'Peygamberimizin sünneti olmasaydı Kur’an’ı kendi aklımıza göre yorumlasak ne tür sorunlar yaşardık?',
        guideAnswer: 'Çok derin bir düşünce! Herkes kendi aklına ve zevkine göre Kur’an’ı yorumlamaya kalksaydı, aynı ayetten yüzlerce farklı uygulama çıkar ve birlik bozulurdu. Kimi namazı iki rekat, kimi oturarak, kimi sadece dua ederek kılmak isterdi. Peygamberimizin sünneti, ilahi mesajın kâinattaki en doğru ve şaşmaz pusulasıdır; ümmeti tek bir kalpte birleştirir.',
        reflectionPrompt: 'Ortak bir kural ve rehber olmasaydı bir futbol maçı veya okul düzeni nasıl kaosa dönerdi?'
      },
      {
        id: 'd1-1-5',
        studentQuestion: 'Kur’an’ın "Kâinat Kitabı" ile ilişkisi nedir; neden kâinata da bir kitap deniyor?',
        guideAnswer: 'Harika bir soru! Kâinat, Allah’ın kudret sıfatıyla yazdığı devasa ve sessiz bir kitaptır; yıldızlar harfleri, ağaçlar kelimeleridir. Kur’an-ı Kerim ise o sessiz kâinat kitabını bizlere okuyan, açıklayan ve her bir varlığın Yaratıcısına nasıl işaret ettiğini öğreten ilahi sestir. Kur’an gözlüğünü takan insan, her çiçekte ve gökteki her bulutta Allah’ın sanatını okur.',
        reflectionPrompt: 'Bugün gökyüzüne ya da bir yaprağa baktığında onda hangi ilahi cümleyi okudun?'
      },
      {
        id: 'd1-1-6',
        studentQuestion: 'Kur’an’ın mushaf hâline getirilmesi ve çoğaltılması nasıl gerçekleşti?',
        guideAnswer: 'Peygamberimiz zamanında ayetler iner inmez vahiy kâtipleri tarafından yazılıyor ve binlerce sahabe tarafından ezberleniyordu. Hz. Ebû Bekir döneminde Yemâme savaşında hafız sahabelerin şehit düşmesi üzerine Hz. Ömer’in teklifiyle vahiy kâtiplerinin başkanı Zeyd b. Sâbit başkanlığında Kur’an ilk kez tek bir kitap (Mushaf) hâline getirildi. Hz. Osman döneminde ise İslam coğrafyası genişleyince aynı nüshadan kopyalar çoğaltılarak ana merkezlere gönderildi.',
        reflectionPrompt: 'Kur’an’ın hem yazıyla hem ezberle korunmuş olması sende nasıl bir güven hissi uyandırıyor?'
      },
      {
        id: 'd1-1-7',
        studentQuestion: 'Peygamberimizin sünnetindeki "takrîrî sünnet" ne demektir?',
        guideAnswer: 'Çok güzel bir fıkıh merakı! Sünnet üçe ayrılır: Sözlü sünnet (kavli), fiilî sünnet ve takrîrî sünnet. Takrîrî sünnet; sahabelerin yaptığı güzel veya doğru bir davranışı Peygamberimizin gördüğü ya da duyduğu hâlde yasaklamayıp susarak veya tebessüm ederek onaylamasıdır. Peygamberimizin sükûtu ve tebessümü de bir tasdiktir.',
        reflectionPrompt: 'Büyüklerinin senin güzel bir davranışını tebessümle onaylaması sana neler hissettirir?'
      },
      {
        id: 'd1-1-8',
        studentQuestion: 'Kur’an-ı Kerim’in indiriliş süreci neden 23 yıl gibi uzun bir zamana yayıldı?',
        guideAnswer: 'Hikmet dolu bir soru! Kur’an bir anda topluca inseydi insanlar kuralları birden kavramakta ve uygulamakta zorlanabilirlerdi. Rabbimiz Kur’an’ı olaylara göre, kalpleri adım adım eğiterek, toplumu şefkatle dönüştürerek 23 yılda indirdi. Tıpkı bir fidanın bir anda kocaman ağaç olmayıp mevsim mevsim büyüyüp meyve vermesi gibi insan kalbi de yavaş yavaş olgunlaşır.',
        reflectionPrompt: 'Sen hayatında iyi bir alışkanlık kazanırken neden zamana ve sabra ihtiyaç duyarsın?'
      },
      {
        id: 'd1-1-9',
        studentQuestion: 'Kur’an okurken sadece lafzını (Arapçasını) okumak yeterli mi, meal ve tefsirini de okumalı mıyız?',
        guideAnswer: 'Kur’an’ın her bir harfini okumak büyük bir sevaptır; çünkü o Allah’ın kelamıdır. Fakat Kur’an asıl olarak anlaşılmak, düşünülmek ve hayatımıza rehber olmak için inmiştir. İlaç reçetesini sadece güzel bir sesle okuyup ilacı içmeyen hasta iyileşemez; Kur’an’ı da hem lafzıyla okumalı hem de Türkçesini ve tefsirini öğrenip emirlerini kalbimize ve davranışlarımıza nakşetmeliyiz.',
        reflectionPrompt: 'Bu hafta öğrendiğin bir ayetin anlamını ailene veya arkadaşına anlattın mı?'
      },
      {
        id: 'd1-1-10',
        studentQuestion: 'Peygamberimizin güzel ahlakını kendi hayatıma nasıl taşıyabilirim?',
        guideAnswer: 'Peygamberimizin ahlakı Kur’an’dı. Hz. Âişe annemiz "Onun ahlakı Kur’an’dı" buyurmuştur. Sen de arkadaşlarınla konuşurken doğru sözlü olarak, kimseyi küçümsemeyip tebessüm ederek, hayvanlara ve doğaya şefkatle yaklaşarak, derslerine adalet ve dürüstlükle sarılarak her gün Peygamberimizin bir sünnetini hayata taşıyabilirsin.',
        reflectionPrompt: 'Bugün Peygamberimizin hangi ahlaki özelliğini yaşatarak etrafına ışık saçtın?'
      }
    ],
    tfQuestions: [
      {
        id: 'tf1-1-6',
        statement: 'Kur’an-ı Kerim Hz. Ebû Bekir döneminde mushaf haline getirilmiş, Hz. Osman döneminde ise çoğaltılmıştır.',
        isTrue: true,
        explanation: 'Doğru! Zeyd bin Sâbit başkanlığındaki heyet Kur’an’ı iki kapak arasına toplamış, Hz. Osman döneminde de çoğaltılmıştır.'
      },
      {
        id: 'tf1-1-7',
        statement: 'Takrîrî sünnet, Peygamberimizin bizzat kendi ağzından çıkan emir ve tavsiyelere verilen isimdir.',
        isTrue: false,
        explanation: 'Yanlış! Peygamberimizin sözlerine "kavlî sünnet" denir. Takrîrî sünnet, sahabelerin davranışlarını onaylamasıdır.'
      },
      {
        id: 'tf1-1-8',
        statement: 'Kur’an-ı Kerim yaklaşık 23 yıllık bir süreçte peyderpey (parça parça) indirilmiştir.',
        isTrue: true,
        explanation: 'Doğru! Kur’an-ı Kerim insanların anlamasını ve hayatlarına uygulamasını kolaylaştırmak için 23 yılda indirilmiştir.'
      },
      {
        id: 'tf1-1-9',
        statement: 'Kur’an ve sünnet birbirinden bağımsız iki kaynaktır; sünnet olmadan da Kur’an hükümleri eksiksiz uygulanabilir.',
        isTrue: false,
        explanation: 'Yanlış! Sünnet, Kur’an’ın canlı tefsiri ve uygulayıcısıdır. Namazın rekatları ve zekâtın oranları sünnetle bilinir.'
      },
      {
        id: 'tf1-1-10',
        statement: 'Peygamber Efendimiz "Sizin en hayırlınız, Kur’an’ı öğrenen ve öğretendir" buyurmuştur.',
        isTrue: true,
        explanation: 'Tebrikler! Bu hadis-i şerif Kur’an öğrenme ve öğretmenin müminin hayatındaki yüce değerini bildirir.'
      }
    ]
  },

  '1.2': {
    dialogues: [
      {
        id: 'd1-2-4',
        studentQuestion: 'Öğretmenim, bilim geliştikçe Allah’a olan inancımız nasıl etkilenir?',
        guideAnswer: 'Gerçek bilim Allah’ın kâinata koyduğu kanunları keşfeder! Bir doktor insan vücudunun damarlarını inceledikçe, bir gökbilimci milyarlarca galaksinin düzenini seyrettikçe Allah’ın sonsuz ilmine ve kudretine daha çok hayran kalır. Bilim "nasıl?" sorusunu cevaplarken, iman "kim yarattı ve niçin yarattı?" sorusunu cevaplar. İkisi birbirini tamamlar.',
        reflectionPrompt: 'Fen dersinde öğrendiğin hangi bilgi seni Yaratıcının büyüklüğüne hayran bıraktı?'
      },
      {
        id: 'd1-2-5',
        studentQuestion: 'İmanın şartları arasında yer alan kadere iman ne anlama gelir?',
        guideAnswer: 'Kader; Allah’ın kâinattaki her şeyi sonsuz ilmiyle bilmesi, ölçü ve hikmetle takdir etmesidir. Kaza ise vakti gelince o şeyin yaratılmasıdır. Kadere iman eden bir mümin bilir ki; hiçbir şey başıboş ve tesadüf değildir. İnsan elinden gelen tüm gayreti gösterir, tedbirini alır, sonra da Yüce Rabbine güvenir ve huzur bulur.',
        reflectionPrompt: 'Sınava çok iyi çalıştıktan sonra içindeki tevekkül hissi seni nasıl rahatlatır?'
      },
      {
        id: 'd1-2-6',
        studentQuestion: 'Meleklere inanmak bir insanın davranışlarını nasıl güzelleştirir?',
        guideAnswer: 'Harika bir soru! Sağımızda ve solumuzda Kirâmen Kâtibîn meleklerinin olduğunu, yaptığımız her güzel davranışı sevinçle kaydettiklerini bilen bir çocuk; kimse görmese bile haksızlık yapmaz, yere çöp atmaz, yalan söylemez. Meleklere iman insana yalnız olmadığını ve her daim nezih varlıklarla çevrili olduğunu hatırlatır.',
        reflectionPrompt: 'Kirâmen Kâtibîn meleklerinin senin bugün defterine yazdığı en güzel iyilik ne oldu?'
      },
      {
        id: 'd1-2-7',
        studentQuestion: 'Peygamberlere inanmak insanın hayatına ne kazandırır?',
        guideAnswer: 'Peygamberler olmasaydı Yaratıcımızın bizden ne istediğini, dünyada nasıl mutlu ve ahlaklı yaşayacağımızı tam olarak bilemezdik. Peygamberler gökteki kutup yıldızları gibidir; fırtınalı gecelerde yolunu kaybeden yolculara güvenle kılavuzluk ederler. Onlar sabrın, cesaretin, adaletin ve merhametin ete kemiğe bürünmüş halidir.',
        reflectionPrompt: 'Hangi peygamberin hayatındaki bir olay sana zorluklar karşısında cesaret veriyor?'
      },
      {
        id: 'd1-2-8',
        studentQuestion: 'Ahirete inanmak adalet duygumuzu nasıl güçlendirir?',
        guideAnswer: 'Eğer ahiret olmasaydı dünyada haksızlığa uğrayan mazlumların ve kötülük yapıp kaçan zalimlerin hesabı yarım kalırdı. Ahiret inancı, mutlak adaletin kurulacağı ve hiçbir iyiliğin veya kötülüğün zerre kadar karşılıksız kalmayacağı güvenini verir. Bu inanç insanı vicdanlı ve adil yapar.',
        reflectionPrompt: 'Zilzal suresindeki "Kim zerre miktarı iyilik yaparsa onu görür" ayeti sana nasıl bir ümit veriyor?'
      },
      {
        id: 'd1-2-9',
        studentQuestion: 'İmanın kalpteki tasdiki (onaylaması) ile dilin ikrarı neden birlikte gereklidir?',
        guideAnswer: 'İman kalbin meyvesidir. Bir çiçeğin kökü kalptir (tasdik), gövdesi ve yaprakları ise dille söylenmesi ve davranışlarla görünmesidir (ikrar ve amel). Sadece dille söyleyip kalben inanmayan kişiye münafık denir. Hakiki iman hem kalbin tam güveni hem de dilin samimi ikrarıyla parıldar.',
        reflectionPrompt: 'Birine sevgi duyduğunda bunu hem kalbinde hissetmen hem de dilinle ifade etmen arasındaki bağ nasıldır?'
      },
      {
        id: 'd1-2-10',
        studentQuestion: 'Âmentü duasındaki esaslar neden eksiksiz olarak kabul edilmelidir?',
        guideAnswer: 'Âmentü esasları birbirine kenetlenmiş altın zincir halkaları gibidir. Allah’a inanan, O’nun sözü olan kitaplara da inanır. Kitaplara inanan, o kitapları getiren peygamberlere ve vahyi taşıyan meleklere de inanır. Biri olmazsa zincir kopar. İman bir bütündür ve parçalanamaz.',
        reflectionPrompt: 'Tüm şartlarıyla sapasağlam bir imanın insana verdiği güven duygusunu hiç hissettin mi?'
      }
    ],
    tfQuestions: [
      {
        id: 'tf1-2-6',
        statement: 'İman kelimesi sözlükte güvenmek, tasdik etmek ve teslim olmak anlamlarına gelir.',
        isTrue: true,
        explanation: 'Doğru! İman, şüphe duymaksızın Allah’ın bildirdiklerini kalple tasdik etmektir.'
      },
      {
        id: 'tf1-2-7',
        statement: 'İmanın şartlarından birine inanıp diğerini inkar eden kişi tam ve sahih bir imana sahip olur.',
        isTrue: false,
        explanation: 'Yanlış! İmanın şartları bir bütündür; birini inkar etmek imanın bütünlüğünü bozar.'
      },
      {
        id: 'tf1-2-8',
        statement: 'Kader, Allah’ın kâinattaki her varlığı ve olayı sonsuz ilmiyle bilip ölçüyle planlamasıdır.',
        isTrue: true,
        explanation: 'Doğru! Kader ilahi ölçü ve plandır; kaza ise o planın gerçekleşmesidir.'
      },
      {
        id: 'tf1-2-9',
        statement: 'Kalben inanmadığı halde sadece menfaat için diliyle inandığını söyleyen kimseye mümin denir.',
        isTrue: false,
        explanation: 'Yanlış! Kalben inanmayıp diliyle inandım diyene "münafık" denir; mümin kalben tasdik edendir.'
      },
      {
        id: 'tf1-2-10',
        statement: 'Kur’an-ı Kerim’de "Kalpler ancak Allah’ı anmakla huzur bulur" buyrulmaktadır.',
        isTrue: true,
        explanation: 'Tebrikler! Râd suresi 28. ayette kalplerin hakiki huzurunun zikir ve imanla olduğu bildirilir.'
      }
    ]
  },

  '1.3': {
    dialogues: [
      {
        id: 'd1-3-4',
        studentQuestion: 'Müminin en belirgin ahlaki özelliği güvenilirlik (eminlik) midir?',
        guideAnswer: 'Kesinlikle! Peygamberimiz peygamber olmadan önce bile Mekke’de "Muhammedü’l-Emîn" (Güvenilir Muhammed) olarak tanınıyordu. Bir mümin elinden ve dilinden insanların emin olduğu, emanete hıyanet etmeyen ve söz verdiğinde sözünde duran kimsedir. Güvenilirlik imanın dışa vuran en parlak elbisesidir.',
        reflectionPrompt: 'Arkadaşların sana bir sır veya eşya emanet ettiğinde bunu nasıl titizlikle korursun?'
      },
      {
        id: 'd1-3-5',
        studentQuestion: 'Mümin kimliği sosyal hayatta ve okulda nasıl fark edilir?',
        guideAnswer: 'Mümin bir öğrenci teneffüste yere çöp atmaz, sırasını temiz tutar, arkadaşlarıyla dalga geçmez, kantinde sıraya girer ve haksızlığa karşı mazlumun yanında durur. O bulunduğu yere huzur ve güven getirir; tıpkı bir gül ağacının etrafına mis koku yayması gibi.',
        reflectionPrompt: 'Sınıfta bir arkadaşın yalnız kaldığında onunla konuşmak mümin kimliğini nasıl yansıtır?'
      },
      {
        id: 'd1-3-6',
        studentQuestion: 'Peygamberimiz mümini neden "faydalı bal arısına" benzetmiştir?',
        guideAnswer: 'Ne harika bir benzetme değil mi! Peygamberimiz buyurur ki: "Mümin bal arısına benzer; temiz olanı yer, temiz olanı üretir, konduğu dalı kırmaz ve incitmez." Mümin de arı gibi faydalı ilim ve helal rızık peşindedir; insanlara tatlılık ve şifa sunar, kimsenin kalbini kırmaz.',
        reflectionPrompt: 'Sen bugün bal arısı gibi etrafına hangi faydalı ve tatlı güzelliği sundun?'
      },
      {
        id: 'd1-3-7',
        studentQuestion: 'Müminin affedici ve bağışlayıcı olması neden bu kadar övülmüştür?',
        guideAnswer: 'İntikam almak nefsin kolay bir oyunudur; fakat gücü yettiği halde affetmek yüce bir ruhun ve güçlü bir imanın göstergesidir. Kur’an müminleri "Öfkelerini yutanlar ve insanları affedenler" olarak över. Affeden insan kendi kalbini kin ve nefret yükünden kurtarır, barışı yeşertir.',
        reflectionPrompt: 'Sana haksızlık yapan bir arkadaşını affettiğinde kalbinde hissettiğin ferahlığı hatırla.'
      },
      {
        id: 'd1-3-8',
        studentQuestion: 'Mümin bir gencin cesareti ve hakkı savunması nasıl olmalıdır?',
        guideAnswer: 'Müminin cesareti kaba kuvvet veya zorbalık değildir; adaletin, doğruluğun ve zayıfların yanında dimdik durabilmektir. Bir haksızlık gördüğünde sessiz kalmamak, dedikodu yapılan ortamı terk etmek veya uyarmak gerçek bir müminlik cesaretidir.',
        reflectionPrompt: 'Arkadaş ortamında doğruyu söylemek bazen zor gelse de neden en şerefli duruştur?'
      },
      {
        id: 'd1-3-9',
        studentQuestion: 'Mümin kimliğinde tevazu (alçakgönüllülük) ile kibir arasındaki fark nedir?',
        guideAnswer: 'Tevazu; sahip olduğu bütün yeteneklerin, aklın ve güzelliklerin Allah’ın bir lütfu olduğunu bilip insanlara tepeden bakmamaktır. Kibir ise "Ben yaptım, ben üstünüm" diyerek başkalarını küçümsemektir. Peygamberimiz "Kalbinde zerre kadar kibir olan cennete giremez" buyurarak tevazunun değerini bildirmiştir.',
        reflectionPrompt: 'Başarılı olduğun bir derste veya sporda tevazu göstermek arkadaşlarınla ilişkini nasıl güzelleştirir?'
      },
      {
        id: 'd1-3-10',
        studentQuestion: 'Müminin kâinata ve çevreye karşı sorumluluğu mümin kimliğinin bir parçası mıdır?',
        guideAnswer: 'Elbette! Mümin yeryüzünü Allah’ın bir emaneti olarak görür. Ağaç dikmek, suyu israf etmemek, sokaktaki kediye köpeğe merhamet etmek müminin ibadet neşvesiyle yaptığı kimlik özellikleridir. Peygamberimiz "Kıyametin kopacağını bilseniz bile elinizdeki fidanı dikiniz" buyurmuştur.',
        reflectionPrompt: 'Doğayı ve hayvanları korumak neden doğrudan inancımızın bir gereğidir?'
      }
    ],
    tfQuestions: [
      {
        id: 'tf1-3-6',
        statement: 'Mümin, hem diliyle hem eliyle diğer insanların kendisinden güvende olduğu kişidir.',
        isTrue: true,
        explanation: 'Doğru! Peygamberimiz gerçek müslümanı insanların elinden ve dilinden selamette olduğu kişi olarak tanımlamıştır.'
      },
      {
        id: 'tf1-3-7',
        statement: 'Mümin insan sadece kendi ırkından ve milletinden olan insanlara karşı dürüst davranmakla yükümlüdür.',
        isTrue: false,
        explanation: 'Yanlış! İslam adaleti ve dürüstlüğü bütün insanlığa ve tüm canlılara karşı evrensel bir ilke olarak emreder.'
      },
      {
        id: 'tf1-3-8',
        statement: 'Peygamber Efendimiz mümini güzel ve temiz şeyler üreten bal arısına benzetmiştir.',
        isTrue: true,
        explanation: 'Doğru! Bal arısı temiz beslenir, faydalı bal üretir ve konduğu dalı kırmaz; mümin de böyledir.'
      },
      {
        id: 'tf1-3-9',
        statement: 'İslam ahlakında gücü yettiği halde öfkesini yutup affetmek zayıflık işareti olarak kabul edilir.',
        isTrue: false,
        explanation: 'Yanlış! Affetmek ve öfkeye hakim olmak güçlü bir iradenin ve yüksek bir mümin ahlakının işaretidir.'
      },
      {
        id: 'tf1-3-10',
        statement: 'Mümin kimliği, çevreye zarar vermemeyi ve doğal kaynakları emanet bilmeyi gerektirir.',
        isTrue: true,
        explanation: 'Tebrikler! Yeryüzü Allah’ın emanetidir ve mümin emanete titizlikle riayet eder.'
      }
    ]
  },

  '1.4': {
    dialogues: [
      {
        id: 'd1-4-4',
        studentQuestion: 'Allah’ın "el-Hâdî" ismi hayatımızda bize nasıl yol gösterir?',
        guideAnswer: 'el-Hâdî; doğru yolu gösteren, hidayet veren, karanlıklardan aydınlığa çıkaran demektir. Biz her gün Fâtiha suresinde "Bizi doğru yola ilet" (İhdina’s-sırâta’l-müstekîm) derken Hâdî ismine sığınırız. Bir karar verirken, doğru ile yanlışı ayırt etmeye çalışırken O’ndan rehberlik dileriz ve O aklımıza, vicdanımıza hidayet nuru bahşeder.',
        reflectionPrompt: 'Zor bir durumda kaldığında Allah’tan doğru yolu göstermesini dilediğinde ne hissedersin?'
      },
      {
        id: 'd1-4-5',
        studentQuestion: 'Allah’ın "es-Selâm" ismini öğrenen biri çevresine nasıl davranmalıdır?',
        guideAnswer: 'es-Selâm; her türlü eksiklikten uzak, esenlik, barış ve güven kaynağı olan demektir. Selâm ismini kalbine nakşeden bir mümin, evine ve okuluna selamla girer; insanlarla barış içinde yaşar, kavga ve nefreti değil huzuru yayar. Selam vermek "Benden sana zarar gelmez, Allah’ın esenliği üzerine olsun" demektir.',
        reflectionPrompt: 'Sabah okula geldiğinde bir arkadaşına içtenlikle selam vermek onun gününü nasıl güzelleştirir?'
      },
      {
        id: 'd1-4-6',
        studentQuestion: 'Allah’ın "el-Vekîl" ismine güvenmek insanı tembelliğe iter mi?',
        guideAnswer: 'Asla! Hakiki tevekkül; önce elinden gelen bütün çalışmayı, hazırlığı ve tedbiri eksiksiz yapmak, sonra neticeyi Allah’a havale etmektir. Tarlasını sürmeyen, tohum ekmeyen biri "Ben Allah’a vekil ettim, buğday bekliyorum" diyemez. Deveye sahip olan bir sahabeye Peygamberimiz "Önce deveni bağla, sonra Allah’a tevekkül et" buyurmuştur.',
        reflectionPrompt: 'Sınava hazırlanırken önce ders çalışıp sonra dua etmek ile hiç çalışmadan dua etmek arasındaki fark nedir?'
      },
      {
        id: 'd1-4-7',
        studentQuestion: 'Esma-i Hüsna’yı öğrenmenin ve ezberlemenin mükâfatı nedir?',
        guideAnswer: 'Peygamber Efendimiz "Allah’ın 99 ismi vardır. Kim bunları sayar, öğrenir ve hayatına yansıtırsa cennete girer" buyurmuştur. Esma-i Hüsna’yı bilmek; Allah’ı yakından tanımak, O’nun sevgisiyle kalbi doldurmak ve O’nun ahlakıyla (merhametiyle, cömertliğiyle, affediciliğiyle) ahlaklanmaktır.',
        reflectionPrompt: 'Öğrendiğin ilahi isimlerden hangisi kalbine en çok ferahlık veriyor?'
      },
      {
        id: 'd1-4-8',
        studentQuestion: 'Göçmen kuşların binlerce kilometre kaybolmadan uçması el-Hâdî ismiyle nasıl açıklanır?',
        guideAnswer: 'Küçücük bir göçmen kuş kutuplardan Afrika’ya doğru uçarken okyanusları ve çölleri haritasız ve GPS’siz aşar. Ona Dünya’nın manyetik alanını hissettiren, yönünü ilham eden ve hedefine ulaştıran el-Hâdî olan Yüce Yaratıcıdır. Kâinattaki bütün sevk-i ilahi Hâdî isminin bir tecellisidir.',
        reflectionPrompt: 'Kuşların ve balıkların kusursuz göç rotaları sana Yaratıcının rehberliği hakkında ne anlatır?'
      },
      {
        id: 'd1-4-9',
        studentQuestion: 'Zor zamanlarda "Hasbünallâhu ve ni’me’l-vekîl" demek neden çok ferahlatıcıdır?',
        guideAnswer: '"Allah bize yeter, O ne güzel vekildir!" Bu cümle Hz. İbrahim ateşe atılırken ve Sevgili Peygamberimiz Uhud’dan sonra düşman tehdidi altındayken dudaklarından dökülmüştür. Bu sözü söyleyen kişi, kâinatın en güçlü sahibine sırtını dayar; hiçbir korku ve endişe onun kalbini sarsamaz.',
        reflectionPrompt: 'Korktuğun veya endişelendiğin bir anda bu zikri söylediğinde kalbindeki rahatlamayı gözlemle.'
      },
      {
        id: 'd1-4-10',
        studentQuestion: 'Cennetin bir adının da "Dârü’s-Selâm" olması Selâm ismiyle nasıl bağlantılıdır?',
        guideAnswer: 'Dârü’s-Selâm "Esenlik ve Barış Yurdu" demektir. Cennette hiçbir hastalık, üzüntü, kavga ve ölüm yoktur; mutlak bir selamet vardır. Allah es-Selâm olduğu gibi, O’nun rızasını kazanan kullarına vaat ettiği ebedi yurt da Selâm isminin kusursuz bir tecellisidir.',
        reflectionPrompt: 'Barış ve güven dolu bir dünyanın temeli sence neden kalplerdeki Selâm tecellisidir?'
      }
    ],
    tfQuestions: [
      {
        id: 'tf1-4-6',
        statement: 'el-Hâdî ismi; kullarına doğru yolu gösteren, hidayet ve kılavuzluk bahşeden anlamına gelir.',
        isTrue: true,
        explanation: 'Doğru! Her namazda Fâtiha’da doğru yolu isterken Allah’ın Hâdî ismine sığınırız.'
      },
      {
        id: 'tf1-4-7',
        statement: 'es-Selâm ismi; kulu her türlü eksiklikten uzak olan, barış ve güven kaynağı olan Allah’ı ifade eder.',
        isTrue: true,
        explanation: 'Doğru! Müslümanların birbirine selam vermesi de bu esenlik ve barış duasının yayılmasıdır.'
      },
      {
        id: 'tf1-4-8',
        statement: 'Tevekkül; hiçbir çalışma ve tedbir yapmadan sonucu tamamen Allah’a bırakıp beklemektir.',
        isTrue: false,
        explanation: 'Yanlış! Gerçek tevekkül, önce elden gelen gayreti ve tedbiri almak, sonra Allah’a güvenmektir.'
      },
      {
        id: 'tf1-4-9',
        statement: 'Peygamberimiz Sevr Mağarasında endişelenen Hz. Ebû Bekir’e "Korkma, Allah bizimle beraberdir" demiştir.',
        isTrue: true,
        explanation: 'Doğru! Bu olay Peygamberimizin el-Vekîl olan Allah’a duyduğu sonsuz güvenin zirvesidir.'
      },
      {
        id: 'tf1-4-10',
        statement: 'Esma-i Hüsna tabiri, Kur’an’da ve sünnette geçen Allah’ın en güzel isimleri demektir.',
        isTrue: true,
        explanation: 'Tebrikler! A’râf suresi 180. ayette "En güzel isimler Allah’ındır, O’na o güzel isimlerle dua edin" buyrulur.'
      }
    ]
  },

  // ==========================================
  // ÜNİTE 2
  // ==========================================
  '2.1': {
    dialogues: [
      {
        id: 'd2-1-4',
        studentQuestion: 'İbadetler sadece Allah’a olan borcumuz mudur, yoksa bizim ruhumuza ve bedenimize de faydaları var mıdır?',
        guideAnswer: 'Çok harika bir tespit! Allah bizim ibadetimize muhtaç değildir; asıl biz ibadete muhtacız. Nasıl ki hasta bir insan doktora gidip ilaç aldığında doktora bir iyilik yapmış olmaz, kendi şifasını bulur; ibadet de kalbimizin, aklımızın ve bedenimizin şifasıdır. Namaz insanı kötülükten korur, oruç sağlığı yeniler, zekât ruhu cömertleştirir.',
        reflectionPrompt: 'Namaz kıldıktan sonra iç dünyanda hissettiğin dinginliği hiç fark ettin mi?'
      },
      {
        id: 'd2-1-5',
        studentQuestion: 'Vakti belirlenmemiş ibadetlere günlük hayatımızdan hangi örnekleri verebiliriz?',
        guideAnswer: 'Vakti belirlenmemiş ibadetler saymakla bitmez! Bir arkadaşına gülümsemek, annene "Eline sağlık" demek, sokaktaki susuz kediye bir kap su koymak, sınıfta yere düşen kalemi sahibine vermek, otobüste yaşlı bir teyzeye yer vermek... Allah rızası niyetiyle yapılan her hayırlı adım bir ibadettir.',
        reflectionPrompt: 'Bugün vaktini belirlemediğin ama sevabını umarak yaptığın en küçük iyilik neydi?'
      },
      {
        id: 'd2-1-6',
        studentQuestion: 'Fıtır sadakası (fitre) nedir ve kimlere verilir?',
        guideAnswer: 'Fıtır sadakası, Ramazan ayında oruç tutabilmenin ve bayrama ulaşabilmenin bir şükrü olarak dinen zengin sayılan Müslümanların yoksullara verdiği vacip bir sadakadır. Bayram namazından önce verilmesi müstehaptır ki ihtiyaç sahipleri de bayram sabahına sevinçle ve yüzleri gülerek uyansın.',
        reflectionPrompt: 'Bayram sevincini ihtiyaç sahibi bir çocukla paylaşmak sence toplumu nasıl kaynaştırır?'
      },
      {
        id: 'd2-1-7',
        studentQuestion: 'Kâinattaki cansız ve şuursuz varlıkların ibadeti nasıl gerçekleşir?',
        guideAnswer: 'Kur’an-ı Kerim İsrâ suresi 44. ayette: "Yedi gök, yer ve bunlarda bulunanlar O’nu tesbih eder; O’nu hamd ile tesbih etmeyen hiçbir şey yoktur" buyurur. Gezegenlerin yörüngesinde dönmesi onların tavafıdır; ağaçların dimdik durması kıyamı, rüzgârda eğilmesi rükusu, toprağa yaprak dökmesi secdesi gibidir. Her varlık yaratılış vazifesini yaparak ibadet eder.',
        reflectionPrompt: 'Bahçedeki bir ağaca baktığında onun meyve vererek Rabbini nasıl tesbih ettiğini düşünebilir misin?'
      },
      {
        id: 'd2-1-8',
        studentQuestion: 'Salih amel ne demektir ve imanın yanında neden hep zikredilir?',
        guideAnswer: 'Salih amel; Allah’ın rızasına uygun, dine, akla ve insanlığa faydalı olan her türlü güzel söz, tutum ve davranıştır. Kur’an’da hemen her yerde "İman edip salih amel işleyenler" ifadesi yan yana geçer. Çünkü amel imanın meyvesidir; amelsiz iman meyvesiz bir ağaca benzer.',
        reflectionPrompt: 'Bugün imanını süsleyen hangi salih ameli gerçekleştirdin?'
      },
      {
        id: 'd2-1-9',
        studentQuestion: 'Şükür ile hamt arasındaki fark nedir?',
        guideAnswer: 'Hamt; Allah’ı sahip olduğu sonsuz kemal, güzellik ve nimetler sebebiyle yüceltmek ve övmektir. Şükür ise bize ulaşan özel bir nimete karşı dilimizle teşekkür etmek ve o nimeti Allah’ın razı olduğu yolda kullanmaktır. Göz nimetinin şükrü harama bakmamak, akıl nimetinin şükrü faydalı ilim öğrenmektir.',
        reflectionPrompt: 'Sahip olduğun sağlık ve zekâ nimetinin şükrünü fiilen nasıl eda edebilirsin?'
      },
      {
        id: 'd2-1-10',
        studentQuestion: 'İbadetlerin insanı kötü davranışlardan alıkoyması nasıl gerçekleşir?',
        guideAnswer: 'Ankebût suresi 45. ayette: "Şüphesiz namaz, insanı hayasızlıktan ve kötülükten alıkoyar" buyrulur. Günde beş kez Yüce Allah’ın huzuruna çıkıp "Yalnız sana ibadet eder ve yalnız senden yardım dileriz" diyen bir insan, namazdan çıkınca hırsızlık yapamaz, yalan söyleyemez. İbadet insanın vicdanına adeta manevi bir bekçi yerleştirir.',
        reflectionPrompt: 'Düzenli ibadet eden birinin dürüstlük konusunda daha dikkatli olmasını nasıl açıklarsın?'
      }
    ],
    tfQuestions: [
      {
        id: 'tf2-1-6',
        statement: 'İslam’da sadece namaz, oruç, hac ve zekât ibadettir; bunların dışındaki güzel işler ibadet sayılmaz.',
        isTrue: false,
        explanation: 'Yanlış! Allah rızası gözetilerek yapılan ders çalışmak, tebessüm etmek, sokak hayvanını beslemek de ibadettir.'
      },
      {
        id: 'tf2-1-7',
        statement: 'Fıtır sadakası (fitre), Ramazan ayında verilen ve bayram sevincini paylaşmayı hedefleyen vacip bir ibadettir.',
        isTrue: true,
        explanation: 'Doğru! Fitre, bayram namazından önce ihtiyaç sahiplerine ulaştırılan mali bir ibadettir.'
      },
      {
        id: 'tf2-1-8',
        statement: 'Kâinattaki bütün varlıklar kendilerine has dillerle ve hallerle Yaratıcılarını zikrederler.',
        isTrue: true,
        explanation: 'Doğru! Kur’an-ı Kerim göklerde ve yerde ne varsa hepsinin Allah’ı tesbih ettiğini haber verir.'
      },
      {
        id: 'tf2-1-9',
        statement: 'İbadetler insanın ahlakını güzelleştirir, kalbine huzur ve iç disiplin kazandırır.',
        isTrue: true,
        explanation: 'Tebrikler! Namaz kötülüklerden alıkoyar, oruç sabrı öğretir, zekât merhameti artırır.'
      },
      {
        id: 'tf2-1-10',
        statement: 'Salih amel, sadece cami içerisinde yapılan duaları kapsayan dar bir kavramdır.',
        isTrue: false,
        explanation: 'Yanlış! Salih amel, hayatın her alanında Allah rızası için yapılan faydalı ve dürüst her davranıştır.'
      }
    ]
  },

  '2.2': {
    dialogues: [
      {
        id: 'd2-2-4',
        studentQuestion: 'İbadette "ihlas" ne demektir ve gösteriş (riya) ibadeti nasıl bozar?',
        guideAnswer: 'İhlas; ibadeti sırf ve sadece Allah rızası için yapmak, araya hiçbir dünyevi menfaat ve "başkaları görsün, beni övsün" düşüncesi sokmamaktır. Riya ise gösteriştir. Peygamberimiz riyayı "küçük şirk" olarak nitelemiştir. Gösteriş için kılınan namaz veya verilen sadaka içi boş bir ceviz kabuğuna benzer; dışarıdan var görünür ama içinde öz yoktur.',
        reflectionPrompt: 'Bir iyilik yaparken "kimse görmese de Allah biliyor" düşüncesi kalbine nasıl bir lezzet veriyor?'
      },
      {
        id: 'd2-2-5',
        studentQuestion: 'Niyet ibadetin neresindedir; içimizden geçirmek yeterli midir?',
        guideAnswer: 'Niyet kalbin bir amele yönelmesidir, yani kalbin eylemidir. Peygamber Efendimiz "Ameller ancak niyetlere göredir" buyurmuştur. Dil ile "Niyet ettim Allah rızası için namaz kılmaya" demek müstehaptır; fakat asıl önemli olan kalbin o ibadete samimiyetle odaklanmasıdır. Kalpsiz dil, köksüz çiçeğe benzer.',
        reflectionPrompt: 'Ders çalışırken "insanlığa faydalı olayım" niyeti taşımak senin motivasyonunu nasıl artırır?'
      },
      {
        id: 'd2-2-6',
        studentQuestion: 'Sünnete uygunluk ilkesi olmadan yapılan ibadet neden kabul görmez?',
        guideAnswer: 'Düşün ki bir banka kasasının şifresi 5 hanelidir. Sen "Ben bu şifreyi 6 haneli yapacağım, daha çok rakam daha iyidir" dersen kasa açılır mı? Açılmaz! İbadetler tevkîfîdir; yani ölçülerini bizzat Allah ve Resulü belirlemiştir. "Öğle namazı 4 rekat ama ben Allah’ı çok seviyorum, 6 rekat kılayım" diyemeyiz. Sünnete uymak ibadetin anahtarıdır.',
        reflectionPrompt: 'Kuralları ve ölçüleri olan bir oyunda kafamıza göre kural uydurursak oyun neden bozulur?'
      },
      {
        id: 'd2-2-7',
        studentQuestion: 'İbadetin temel şartlarından biri olarak "İman" neden ilk sıradadır?',
        guideAnswer: 'Çünkü iman temeldir, ibadet ise o temelin üzerine inşa edilen binadır. Temeli olmayan bir araziye ne kadar lüks katlar çıkarsan çık, ilk sarsıntıda çöker. Allah’a inanmayan birinin yaptığı işler dünyada faydalı olsa bile ahirette ibadet sevabı kazandırmaz. İman o işlere ilahi bir değer ve nur katar.',
        reflectionPrompt: 'Bir fidanın toprağa kök salması (iman) ile dallarında meyve vermesi (ibadet) arasındaki bağı düşün.'
      },
      {
        id: 'd2-2-8',
        studentQuestion: 'Mağarada mahsur kalan üç arkadaş hikayesinde ihlasın rolü neydi?',
        guideAnswer: 'Büyük bir kaya mağaranın ağzını kapatınca üç arkadaş sadece ve sadece Allah rızası için yaptıkları amelleri vesile ederek dua ettiler: Biri anne babasına gösterdiği eşsiz hürmeti, diğeri haramdan Allah korkusuyla kaçışını, üçüncüsü işçisinin hakkını kat kat koruyup teslim edişini andı. Her ihlaslı duada kaya biraz aralandı ve sonunda kurtuldular. İhlas en aşılmaz kayaları bile yerinden oynatır!',
        reflectionPrompt: 'Senin hayatında sadece Allah rızasını gözeterek yaptığın en unutulmaz fedakârlık neydi?'
      },
      {
        id: 'd2-2-9',
        studentQuestion: 'İbadet ederken aklımıza gelen vesveseler veya dünyalık düşünceler ibadetimizi bozar mı?',
        guideAnswer: 'İnsanın aklına namazdayken dünyalık düşüncelerin gelmesi doğaldır; vesvese kalbin istemeden maruz kaldığı bir rüzgârdır. Önemli olan o düşünceye bilerek takılıp kalmamak, fark ettiğin anda hemen "Ben şu an âlemlerin Rabbi olan Allah’ın huzurundayım" diyerek kalbini tekrar namaza döndürmektir. Bu çaban bile Allah katında çok değerlidir.',
        reflectionPrompt: 'Namazda Fâtiha suresinin anlamına odaklanmak zihnini toplamaya nasıl yardımcı olur?'
      },
      {
        id: 'd2-2-10',
        studentQuestion: 'İbadetlerde devamlılık ve az da olsa sürekli olmak neden önemlidir?',
        guideAnswer: 'Peygamber Efendimiz "Allah katında amellerin en sevimlisi, az da olsa devamlı olanıdır" buyurmuştur. Kayaları delen suyun gücü değil, damlaların sürekliliğidir. Bir gün sabaha kadar ibadet edip bir ay hiçbir şey yapmamaktansa; her gün aksatmadan kılınan beş vakit namaz ve okunan birkaç ayet insan ruhunu pırıl pırıl tutar.',
        reflectionPrompt: 'Her gün aksatmadan yaptığın küçük ama sürekli bir güzel alışkanlığın var mı?'
      }
    ],
    tfQuestions: [
      {
        id: 'tf2-2-6',
        statement: 'İbadetlerin temel ilkeleri iman, samimi niyet, ihlas ve sünnete uygunluktur.',
        isTrue: true,
        explanation: 'Doğru! Bu dört ilke ibadetin kabul olmasının vazgeçilmez sütunlarıdır.'
      },
      {
        id: 'tf2-2-7',
        statement: 'Riya, ibadetleri sadece Allah rızası için yapıp insanlardan gizlemeye denir.',
        isTrue: false,
        explanation: 'Yanlış! Riyâ gösteriştir, insanların beğenisini kazanmak için ibadet etmektir. İhlas ise sırf Allah için yapmaktır.'
      },
      {
        id: 'tf2-2-8',
        statement: 'Peygamber Efendimiz "Ameller ancak niyetlere göredir" buyurmuştur.',
        isTrue: true,
        explanation: 'Doğru! Bu hadis İslam fıkhının ve ahlakının en temel kaidelerinden biridir.'
      },
      {
        id: 'tf2-2-9',
        statement: 'İbadetlerde sünnete uymak zorunlu değildir; herkes ibadetin şeklini kendi arzusuna göre değiştirebilir.',
        isTrue: false,
        explanation: 'Yanlış! İbadetlerin vakitleri, rekatları ve usulleri sünnet ile belirlenmiştir; keyfi değiştirilemez.'
      },
      {
        id: 'tf2-2-10',
        statement: 'Peygamberimiz amellerin en makbul olanının "az da olsa sürekli olanı" olduğunu bildirmiştir.',
        isTrue: true,
        explanation: 'Tebrikler! Devamlılık amelin bereketi ve ruhun terbiyesi için esastır.'
      }
    ]
  },

  '2.3': {
    dialogues: [
      {
        id: 'd2-3-4',
        studentQuestion: 'Farz ile vacip arasındaki farkı nasıl daha kolay aklımda tutabilirim?',
        guideAnswer: 'Çok pratik bir yol: Farz; Kur’an’da kesin, açık ve şüpheye yer bırakmayacak delillerle emredilen görevlerdir (5 vakit namaz, Ramazan orucu gibi). İnkar eden dinden çıkar. Vacip ise farz kadar kesin olmasa da kuvvetli delillerle emredilen görevlerdir (Bayram namazı, vitir namazı, kurban kesmek ve fıtır sadakası gibi). İkisi de mutlaka yerine getirilmelidir.',
        reflectionPrompt: 'Vitir namazı ve kurban ibadetinin hangi hüküm kategorisine girdiğini hatırlayabilir misin?'
      },
      {
        id: 'd2-3-5',
        studentQuestion: 'Farz-ı ayn ile Farz-ı kifâye arasındaki fark nedir?',
        guideAnswer: 'Muazzam bir fıkıh sorusu! Farz-ı ayn; her ergenlik çağına girmiş akıllı Müslümanın bizzat kendisinin yapması gereken farzlardır (5 vakit namaz, Ramazan orucu). Biri senin yerine kılamaz. Farz-ı kifâye ise toplumdan bir grup Müslüman yapınca diğerlerinin üzerinden sorumluluğun kalktığı farzlardır; örneğin cenaze namazı kılmak veya selamı almak gibi. Kimse kılmazsa bütün toplum sorumlu olur.',
        reflectionPrompt: 'Cenaze namazının farz-ı kifâye olması toplumdaki dayanışmayı nasıl gösterir?'
      },
      {
        id: 'd2-3-6',
        studentQuestion: 'Müstehap ne demektir ve yapıldığında ne kazandırır?',
        guideAnswer: 'Müstehap; dinen yapılması güzel görülen, teşvik edilen, sevap kazandıran fakat terk edildiğinde günah olmayan tatlı davranışlardır. Mesela güzel koku sürünmek, misvak/diş fırçası kullanmak, sadaka vermek, kuşluk namazı kılmak müstehaptır. Müstehaplar hayatımıza letafet ve fazladan sevap neşesi katar.',
        reflectionPrompt: 'Her gün uygulayabileceğin bir müstehap davranışı hayatına katmak ister misin?'
      },
      {
        id: 'd2-3-7',
        studentQuestion: 'Mekruh nedir; tahrîmen mekruh ile tenzîhen mekruh ne demektir?',
        guideAnswer: 'Mekruh; dinen hoş karşılanmayan, çirkin bulunan davranışlardır. Tahrîmen mekruh, harama çok yakın olan yasaklardır (mesela başkası pazarlık yaparken araya girip malı kapmaya çalışmak veya güneş batarken kerahat vaktinde namaz kılmak). Tenzîhen mekruh ise helale yakın olan, edebe aykırı hafif kusurlardır (soğan sarımsak yiyip kokusuyla cemaate gitmek gibi).',
        reflectionPrompt: 'Başkalarını rahatsız edecek kokularla topluma girmemenin dinimizdeki yeri sence nedir?'
      },
      {
        id: 'd2-3-8',
        studentQuestion: 'Mübah ne anlama gelir; günlük hayatımızdaki mübah işler sevaba dönüşebilir mi?',
        guideAnswer: 'Mübah; dinen yapılması veya yapılmaması serbest bırakılan helal eylemlerdir: Uyumak, yemek yemek, bisiklete binmek, yürümek gibi. Harika bir sır: Eğer sen "Kuvvetlenip ibadetlerimi güzel yapayım" niyetiyle yemek yer ve uyursan, o mübah fiillerin bile ibadet sevabına dönüşür!',
        reflectionPrompt: 'Bugün yaptığın mübah bir işi güzel bir niyetle nasıl ibadete çevirebilirsin?'
      },
      {
        id: 'd2-3-9',
        studentQuestion: 'Sünnet-i müekkede ile sünnet-i gayr-i müekkede arasındaki fark nedir?',
        guideAnswer: 'Sünnet-i müekkede; Peygamberimizin sürekli yaptığı, pek az terk ettiği kuvvetli sünnetlerdir (Sabah, öğle ve akşam namazlarının sünnetleri gibi). Sünnet-i gayr-i müekkede ise Peygamberimizin bazen yapıp bazen terk ettiği sünnetlerdir (İkindi ve yatsı namazının ilk sünnetleri gibi). İkisi de Peygamber sevgimizin birer çiçeğidir.',
        reflectionPrompt: 'Sabah namazının sünnetinin dünyadan ve içindekilerden daha hayırlı olduğunu biliyor muydun?'
      },
      {
        id: 'd2-3-10',
        studentQuestion: 'Haramlardan kaçınmak da bir ibadet sayılır mı?',
        guideAnswer: 'Kesinlikle evet! Bir haramı işleme fırsatı varken sırf Allah korkusu ve sevgisiyle o haramdan uzak durmak, en büyük ibadetlerden biridir. Yalan söylememek, gıybet etmemek, kul hakkı yememek insana sürekli sevap kazandıran pasif ama çok güçlü bir kulluk halidir.',
        reflectionPrompt: 'Bir haksızlık veya dedikodu fırsatı çıktığında susup uzaklaşmak sana ne kazandırır?'
      }
    ],
    tfQuestions: [
      {
        id: 'tf2-3-6',
        statement: 'Farz, dinen kesin delillerle yapılması emredilen ibadetlerdir ve inkarı kişiyi dinden çıkarır.',
        isTrue: true,
        explanation: 'Doğru! Beş vakit namaz, oruç ve zekât farz hükmündedir.'
      },
      {
        id: 'tf2-3-7',
        statement: 'Kurban kesmek ve vitir namazı kılmak İslam dininde sünnet hükmündedir.',
        isTrue: false,
        explanation: 'Yanlış! Kurban kesmek, bayram namazı ve vitir namazı Hanefî mezhebine göre "vacip" hükmündedir.'
      },
      {
        id: 'tf2-3-8',
        statement: 'Farz-ı kifâye, Müslümanlardan bir kısmının yapmasıyla diğerlerinin üzerinden sorumluluğun kalktığı farzdır.',
        isTrue: true,
        explanation: 'Doğru! Cenaze namazı farz-ı kifâyeye en bilinen örnektir.'
      },
      {
        id: 'tf2-3-9',
        statement: 'Mübah, yapılması günah olan ve kesinlikle yasaklanan eylemlerdir.',
        isTrue: false,
        explanation: 'Yanlış! Mübah; yapılması ya da yapılmaması serbest olan helal eylemlerdir (yemek, uyumak gibi).'
      },
      {
        id: 'tf2-3-10',
        statement: 'Mekruh; dinen yapılması hoş görülmeyen, terk edildiğinde sevap kazandıran eylemlerdir.',
        isTrue: true,
        explanation: 'Tebrikler! Mekruhtan sakınmak edep ve takvanın güzelliğidir.'
      }
    ]
  },

  '2.4': {
    dialogues: [
      {
        id: 'd2-4-4',
        studentQuestion: 'Allah’ın "er-Rakîb" ismini bilen bir insan yalnız kaldığında nasıl hisseder?',
        guideAnswer: 'er-Rakîb; her varlığı, her an görüp gözeten, kontrol eden ve hiçbir şey ilminden gizli kalmayan demektir. Bu ismi bilen bir mümin asla yalnızlık ve çaresizlik hissetmez. Karanlık bir odada tek başına kalsa bile Rabbisinin kendisini şefkatle gördüğünü bilir. Kimsenin olmadığı yerde bile günaha girmez; çünkü en büyük Şahit O’dur.',
        reflectionPrompt: 'Odanda tek başınayken er-Rakîb ismini hatırlamak içindeki güveni ve edebi nasıl artırır?'
      },
      {
        id: 'd2-4-5',
        studentQuestion: 'Allah’ın "eş-Şekûr" ismi bize Rabbimizin merhameti hakkında ne fısıldar?',
        guideAnswer: 'eş-Şekûr; azıcık bir iyiliğe bile kat kat ve sonsuz mükâfat veren, kullarının şükrünü ve güzel amellerini asla zayi etmeyen demektir. Düşün ki sen yoldan bir taşı kenara çekiyorsun, bir kediye süt veriyorsun; eş-Şekûr olan Allah bu küçücük ameline karşılık sana cennet sarayları ve sonsuz mutluluk lütfediyor. O ne cömert bir Rabdir!',
        reflectionPrompt: 'Küçücük bir iyiliğinin bile Allah katında kaybolmayacağını bilmek sana nasıl şevk verir?'
      },
      {
        id: 'd2-4-6',
        studentQuestion: 'Allah’ın "el-Hamîd" ismi ne demektir ve namazlarda neden sürekli tekrar ederiz?',
        guideAnswer: 'el-Hamîd; her türlü övgüye, teşekküre ve hamde tek başına layık olan, bütün varlıkların diliyle övülen demektir. Namazda rükudan kalkarken "Semiallâhu limen hamideh" (Allah kendisine hamd edeni işitir) deriz ve hemen arkasından "Rabbenâ leke’l-hamd" (Rabbimiz, hamd yalnız sanadır) diye karşılık veririz. Bütün kâinat O’nun nimetleriyle doludur.',
        reflectionPrompt: 'Günde 40 rekat namaz kılan birinin en çok söylediği kelimelerden birinin "el-Hamîd" olması sence nedendir?'
      },
      {
        id: 'd2-4-7',
        studentQuestion: 'Çölde susuz köpeğe ayakkabısıyla su veren günahkâr adamın affedilmesi hangi isimle ilgilidir?',
        guideAnswer: 'Bu meşhur hadis-i şerif eş-Şekûr isminin muazzam bir tecellisidir. O yolcu, kavurucu çölde derin kuyuya inip ayakkabısına su doldurmuş ve susuzluktan toprağı yalayan bir köpeğe içirmiştir. Allah onun bu samimi merhametine şükranla mukabele etmiş (eş-Şekûr), onu bağışlamış ve cennetine almıştır.',
        reflectionPrompt: 'Dilsiz bir hayvana gösterilen küçücük bir merhametin Allah katındaki değerini düşün.'
      },
      {
        id: 'd2-4-8',
        studentQuestion: 'Yerin yedi kat altındaki kapkara bir karıncanın ayak sesini ve ihtiyacını kim duyar?',
        guideAnswer: 'İşte er-Rakîb ve el-Hamîd olan Yüce Rabbimiz duyar ve rızkını önüne koyar! Hiçbir varlık O’nun gözetiminden ve ilminden hariç kalamaz. En minik böcekten göklerdeki dev yıldızlara kadar her şey O’nun gözetimi (Rakîb) altındadır.',
        reflectionPrompt: 'Senin kalbinden geçen en sessiz duayı bile duyan bir Rabbin olduğunu bilmek sana ne hissettirir?'
      },
      {
        id: 'd2-4-9',
        studentQuestion: 'İnsanlar birbirine teşekkür ederken eş-Şekûr isminin ahlakını nasıl yaşayabilir?',
        guideAnswer: 'Peygamberimiz "İnsanlara teşekkür etmeyen, Allah’a da şükretmiş olmaz" buyurmuştur. Bize bir bardak su getiren kardeşimize, yemeğimizi yapan annemize, ders anlatan öğretmenimize teşekkür etmek eş-Şekûr isminin ahlakıyla ahlaklanmaktır.',
        reflectionPrompt: 'Bugün sana iyiliği dokunan birine teşekkür ettin mi?'
      },
      {
        id: 'd2-4-10',
        studentQuestion: 'el-Hamîd ismini zikretmek insanın psikolojisine nasıl olumlu yansır?',
        guideAnswer: 'Sürekli şikayet eden insan mutsuz ve huzursuz olur. Fakat el-Hamîd ismini hatırlayıp sahip olduğu nefese, gözlerine, ailesine ve imanına hamdeden insan şükür dolu, pozitif ve ruhsal olarak çok dayanıklı olur. Hamd kalbin en büyük cilasıdır.',
        reflectionPrompt: '"Elhamdülillah" dediğinde kalbinde şikayetlerin yerine doğan huzuru fark et.'
      }
    ],
    tfQuestions: [
      {
        id: 'tf2-4-6',
        statement: 'er-Rakîb ismi; bütün varlıkları her an görüp gözeten ve hiçbir şey ilminden saklı kalmayan Allah’ı ifade eder.',
        isTrue: true,
        explanation: 'Doğru! Nisa suresi 1. ayette "Şüphesiz Allah üzerinizde bir Rakîb’dir (gözeticidir)" buyrulur.'
      },
      {
        id: 'tf2-4-7',
        statement: 'eş-Şekûr ismi; kulların yaptığı az amele bile kat kat fazlasıyla mükâfat veren Allah’ı anlatır.',
        isTrue: true,
        explanation: 'Doğru! Allah samimi bir niyetle yapılan en küçük hayrı bile zayi etmez ve kat kat ödüllendirir.'
      },
      {
        id: 'tf2-4-8',
        statement: 'el-Hamîd ismi; sadece zor zamanlarda hatırlanması gereken bir isimdir; bollukta zikredilmez.',
        isTrue: false,
        explanation: 'Yanlış! el-Hamîd her an ve her halde övgüye layık olandır; hem varlıkta hem darlıkta hamdedilir.'
      },
      {
        id: 'tf2-4-9',
        statement: 'Peygamberimiz insanlara teşekkür etmeyenin Allah’a da gerçek manada şükretmiş olmayacağını bildirmiştir.',
        isTrue: true,
        explanation: 'Tebrikler! İyiliğe karşı teşekkür etmek mümin nezaketinin ve şükür ahlakının gereğidir.'
      },
      {
        id: 'tf2-4-10',
        statement: 'Rükudan doğrulurken okunan "Semiallâhu limen hamideh" zikri, Allah’ın hamd edenleri işittiğini ifade eder.',
        isTrue: true,
        explanation: 'Doğru! Bu ifade her namazda el-Hamîd olan Rabbimize sunulan kutlu bir ikrardır.'
      }
    ]
  },

  // ==========================================
  // ÜNİTE 3
  // ==========================================
  '3.1': {
    dialogues: [
      {
        id: 'd3-1-4',
        studentQuestion: 'İslam’da "itidal" ne demektir ve neden her alanda ölçülü olmamız istenir?',
        guideAnswer: 'İtidal; aşırılıklardan, taşkınlıklardan ve gevşeklikten uzak durarak dengeli, adil ve orta yolu takip etmektir. Bir kuş tek kanadıyla uçamaz; iki kanadının da dengeli olması gerekir. Dinimiz ne dünyayı tamamen terk edip inzivaya çekilmeyi ne de ahireti unutup dünyaya dalmayı doğru bulur. İtidal, huzurun şaşmaz terazisidir.',
        reflectionPrompt: 'Ders çalışmak ile oyun oynamak arasında kurduğun itidal dengesi nasıldır?'
      },
      {
        id: 'd3-1-5',
        studentQuestion: 'Mekân mahremiyetinde kapı çalma âdâbı (isti’zân) neden üç defayla sınırlandırılmıştır?',
        guideAnswer: 'Peygamberimiz kapının en fazla üç kez çalınmasını, cevap verilmezse geri dönülmesini öğütlemiştir. İlk çalışta evdekiler duyar, ikincide hazırlanır, üçüncüde kapıya yönelir. Eğer hala açılmıyorsa belki ev halkı müsait değildir veya mahrem bir durum vardır. Üsteleyip kapıyı zorlamak karşı tarafı rahatsız eder ve mahremiyeti zedeler.',
        reflectionPrompt: 'Bir arkadaşının kapısını çaldığında müsait olmadığını söylediğinde saygı göstermek sana ne hissettirir?'
      },
      {
        id: 'd3-1-6',
        studentQuestion: 'Bilgi mahremiyeti ve tecessüs yasağı günümüzde sosyal medyada nasıl ihlal ediliyor?',
        guideAnswer: 'Tecessüs; insanların gizli hallerini, kusurlarını ve özel hayatını merakla araştırmak demektir ve Kur’an’da kesinlikle haram kılınmıştır. Sosyal medyada birinin profilini gözetlemek, izinsiz mesajlarını okumak, özel fotoğraflarını başkalarıyla paylaşmak çağımızın en yaygın tecessüs ve bilgi mahremiyeti ihlalleridir.',
        reflectionPrompt: 'Sosyal medyada bir arkadaşının fotoğrafını paylaşmadan önce mutlaka izin alıyor musun?'
      },
      {
        id: 'd3-1-7',
        studentQuestion: 'Beden mahremiyeti ve tesettür insanın özgürlüğünü kısıtlar mı?',
        guideAnswer: 'Tam tersine! Beden mahremiyeti insanı nesneleşmekten korur, onun haysiyetini ve saygınlığını yüceltir. Değerli mücevherler nasıl vitrinde korunursa, insanın bedeni de yabancı nazarlardan korunmaya layık kutsal bir emanettir. Tesettür bir kısıtlama değil, insanın saygınlığına örtülen ilahi bir takva zırhıdır.',
        reflectionPrompt: 'Değerli bir hediyeyi özenle sarıp korumak ile beden mahremiyeti arasında nasıl bir benzerlik kurarsın?'
      },
      {
        id: 'd3-1-8',
        studentQuestion: 'Gıybet ile mahremiyet arasındaki ilişki nedir; neden gıybet ölü kardeşin etini yemeye benzetilmiştir?',
        guideAnswer: 'Gıybet; bir insanın arkasından onun duyduğunda üzüleceği doğru bir kusurunu konuşmaktır. Hucurât suresi 12. ayette bu durum "Ölü kardeşinin etini yemeye" benzetilmiştir; çünkü arkasından konuşulan kişi orada olmadığı için kendini savunamaz, tıpkı cansız bir ölü gibi savunmasızdır. Gıybet insanın bilgi mahremiyetini ve şerefini çiğnemektir.',
        reflectionPrompt: 'Arkadaş ortamında birinin dedikodusu yapıldığında o kişiyi savunmak neden kahramanca bir davranıştır?'
      },
      {
        id: 'd3-1-9',
        studentQuestion: 'Kardeşlerimizin veya anne babamızın odasına girerken kapıyı vurmak neden gereklidir?',
        guideAnswer: 'Nur suresi 58. ve 59. ayetlerde aile bireylerinin bile günün belirli vakitlerinde (sabah namazından önce, öğle istirahatinde ve yatsıdan sonra) odalara girerken izin istemeleri emredilmiştir. Bu kural aile içi saygıyı pekiştirir, kişisel mahremiyet bilincini küçük yaştan itibaren sağlamlaştırır.',
        reflectionPrompt: 'Evinde odalara girerken kapı çalma kuralına ne kadar dikkat ediyorsun?'
      },
      {
        id: 'd3-1-10',
        studentQuestion: 'Peygamberimizin kapı önünde duruş şeklindeki incelik bize ne öğretir?',
        guideAnswer: 'Peygamberimiz bir evin kapısını çaldığında kapının tam karşısında durmazdı; kapının ya sağında ya da solunda dururdu ki kapı açıldığında evin içi doğrudan görünmesin ve ev halkı zor durumda kalmasın. Bu incelik, İslam’ın mahremiyete verdiği muazzam önemin en zarif örneğidir.',
        reflectionPrompt: 'Peygamberimizin bu kapı edebini kendi hayatında uygulamaya başladığında ne fark edeceksin?'
      }
    ],
    tfQuestions: [
      {
        id: 'tf3-1-6',
        statement: 'İtidal, hayatın her alanında aşırılıklardan kaçınıp orta yolu ve dengeyi benimsemektir.',
        isTrue: true,
        explanation: 'Doğru! İslam bir denge ve itidal dinidir; her alanda ölçülü olmayı emreder.'
      },
      {
        id: 'tf3-1-7',
        statement: 'Tecessüs; insanların kusurlarını, gizli hallerini ve özel hayatlarını izinsizce araştırmaktır ve İslam’da yasaktır.',
        isTrue: true,
        explanation: 'Doğru! Hucurât suresi 12. ayette açıkça "Birbirinizin kusurunu araştırmayın" buyrulmuştur.'
      },
      {
        id: 'tf3-1-8',
        statement: 'İslamiyet’e göre bir eve girmek için kapı en az on defa çalınmalı, açılana kadar zorlanmalıdır.',
        isTrue: false,
        explanation: 'Yanlış! Peygamberimiz izin istemenin (isti’zân) en fazla üç defa olduğunu bildirmiştir.'
      },
      {
        id: 'tf3-1-9',
        statement: 'Başkasına ait günlüğü, mektubu veya cep telefonu mesajlarını izinsiz okumak bilgi mahremiyetini ihlal eder.',
        isTrue: true,
        explanation: 'Tebrikler! Kişisel yazışmalar ve cihazlar bilgi mahremiyeti kapsamındadır ve dokunulmazdır.'
      },
      {
        id: 'tf3-1-10',
        statement: 'Tesettür sadece dış görünüşle ilgilidir; ahlak, edep ve takva ile hiçbir ilgisi yoktur.',
        isTrue: false,
        explanation: 'Yanlış! Kur’an-ı Kerim örtünmenin yanında en hayırlı elbisenin "takva elbisesi" olduğunu bildirir.'
      }
    ]
  },

  '3.2': {
    dialogues: [
      {
        id: 'd3-2-4',
        studentQuestion: 'İslam kardeşliği ile kan bağına dayalı kardeşlik arasında nasıl bir ilişki vardır?',
        guideAnswer: 'Kan bağı çok kıymetlidir; fakat İslam kardeşliği iman bağına dayanır ve dünyadaki bütün Müslümanları içine alan uçsuz bucaksız bir ailedir. Hucurât suresi 10. ayette: "Müminler ancak kardeştirler; öyleyse kardeşlerinizin arasını düzeltin" buyrulur. Dünyanın öbür ucundaki bir Müslümanın sevinci bizim sevincimiz, acısı bizim acımızdır.',
        reflectionPrompt: 'Filistin’deki veya Afrika’daki bir çocuğun acısını yüreğinde hissettiğinde iman kardeşliğini nasıl yaşarsın?'
      },
      {
        id: 'd3-2-5',
        studentQuestion: 'Peygamberimiz müminleri neden "birbirine kenetlenmiş tuğlalardan oluşan bir binaya" benzetmiştir?',
        guideAnswer: 'Tuğlalar tek başınayken bir tekme ile devrilebilir; fakat harçla birbirine sımsıkı kenetlendiğinde fırtınalara ve depremlere meydan okuyan sağlam bir kale olur. Müminler de sevgi, dayanışma ve adalet harcıyla kenetlendiklerinde hiçbir güç onları sarsamaz.',
        reflectionPrompt: 'Okulunda ya da sınıfında arkadaşlarınla kenetlendiğinde hangi zorlukların üstesinden geldiniz?'
      },
      {
        id: 'd3-2-6',
        studentQuestion: 'Müminin mümine karşı yerine getirmesi gereken temel haklar nelerdir?',
        guideAnswer: 'Peygamberimiz Müslümanın Müslüman üzerindeki 5 hakkını şöyle saymıştır: Karşılaştığında selam vermek, davet ettiğinde icabet etmek, aksırıp "Elhamdülillah" dediğinde "Yerhamükellâh" demek, hastalandığında ziyaretine gitmek ve vefat ettiğinde cenazesine katılmak.',
        reflectionPrompt: 'Hasta olan bir arkadaşını arayıp halini hatırını sormak onun kalbinde nasıl bir kardeşlik bağı kurar?'
      },
      {
        id: 'd3-2-7',
        studentQuestion: 'Kardeşlikte "îsâr" ne demektir ve sahabe bu ahlakı nasıl yaşamıştır?',
        guideAnswer: 'Îsâr; kendisi muhtaç olduğu halde kardeşini kendine tercih etmek, kendi hakkından onun için feragat etmektir. Medineli Ensar, Mekke’den hicret eden Muhacir kardeşlerine evlerini, bağlarını ve aşlarını açarak tarihin en muazzam îsâr örneğini sergilemiştir. Kur’an onları "Kendileri zaruret içinde bulunsalar bile onları kendilerine tercih ederler" diye över.',
        reflectionPrompt: 'Kendi çok sevdiğin bir yiyeceği veya oyuncağı arkadaşına seve seve ikram ettin mi?'
      },
      {
        id: 'd3-2-8',
        studentQuestion: 'İki mümin arkadaş küstüğünde dinimiz buna kaç gün izin vermiştir?',
        guideAnswer: 'Peygamber Efendimiz "Bir Müslümanın din kardeşine üç günden fazla küs durması helal değildir. Karşılaştıklarında ilk selamı veren en hayırlılarıdır" buyurmuştur. İnsan kırılabilir ama kin tutamaz; mümin kinini üç gün içinde barış tebessümüyle eritmelidir.',
        reflectionPrompt: 'Küs olduğun birine gidip ilk selamı vererek "en hayırlı" olmayı dener misin?'
      },
      {
        id: 'd3-2-9',
        studentQuestion: 'Kardeşlik hukukunu zedeleyen en büyük hastalıklar nelerdir?',
        guideAnswer: 'Haset (kıskançlık), suizan (kötü zanda bulunmak), alay etmek, lakap takmak ve dedikodu kardeşlik bağlarını testere gibi keser. Peygamberimiz "Ateşin odunu yiyip bitirdiği gibi haset de iyilikleri yer bitirir" buyurmuştur.',
        reflectionPrompt: 'Bir arkadaşının başarısına haset etmek yerine onun adına sevinmek sana nasıl bir asalet kazandırır?'
      },
      {
        id: 'd3-2-10',
        studentQuestion: 'Farklı ırk, dil ve renkteki insanların eşitliği İslam kardeşliğinde nasıl vurgulanmıştır?',
        guideAnswer: 'Veda Hutbesi’nde Peygamberimiz bütün dünyaya şöyle haykırmıştır: "Ey insanlar! Rabbiniz birdir, babanız birdir. Hepiniz Âdem’densiniz, Âdem de topraktandır. Arabın Arap olmayana, Arap olmayanın Araba; beyazın siyaha, siyahın beyaza takva dışında hiçbir üstünlüğü yoktur." İslam kardeşliği ırkçılığı ayaklar altına almıştır.',
        reflectionPrompt: 'Farklı ülkelerden gelen insanlara şefkatle yaklaşmak sence Veda Hutbesi’ni nasıl yaşatır?'
      }
    ],
    tfQuestions: [
      {
        id: 'tf3-2-6',
        statement: 'Kur’an-ı Kerim’de "Müminler ancak kardeştirler; öyleyse kardeşlerinizin arasını düzeltin" buyrulmaktadır.',
        isTrue: true,
        explanation: 'Doğru! Hucurât suresi 10. ayette müminlerin kardeşliği ilahi bir fermanla ilan edilmiştir.'
      },
      {
        id: 'tf3-2-7',
        statement: 'İslam dininde iki müminin birbirinden darılıp üç günden fazla küs durması helal değildir.',
        isTrue: true,
        explanation: 'Doğru! Peygamberimiz küslüğün üç günü aşmasını yasaklamış, ilk selam vereni övmüştür.'
      },
      {
        id: 'tf3-2-8',
        statement: 'Îsâr ahlakı; kişinin kendi menfaatini her zaman başkalarının ihtiyacından önde tutması demektir.',
        isTrue: false,
        explanation: 'Yanlış! Îsâr; kendisi muhtaçken bile kardeşini kendine tercih etme fedakârlığıdır.'
      },
      {
        id: 'tf3-2-9',
        statement: 'Peygamberimiz müminleri tek bir bedenin organlarına ve kenetlenmiş tuğlalara benzetmiştir.',
        isTrue: true,
        explanation: 'Doğru! Bir organ ağrıdığında bütün beden nasıl hissederse, müminler de birbirlerinin derdini öyle hisseder.'
      },
      {
        id: 'tf3-2-10',
        statement: 'İslam’a göre insanların birbirine üstünlüğü zenginlik, soy ve ten rengi iledir.',
        isTrue: false,
        explanation: 'Yanlış! Veda Hutbesi ve ayetlerde açıklandığı üzere tek üstünlük ölçüsü Allah’a itaatteki samimiyet (takva) iledir.'
      }
    ]
  },

  '3.3': {
    dialogues: [
      {
        id: 'd3-3-4',
        studentQuestion: 'İsraf ile cimrilik arasındaki denge nasıl kurulmalıdır?',
        guideAnswer: 'İslam her iki ucu da yasaklar. İsraf; malı, zamanı ve nimetleri gereksiz yere, sorumsuzca ve saçıp savurarak harcamaktır. Cimrilik ise verilmesi gereken hakkı vermemek, bencilce saklamaktır. Furkân suresi 67. ayette: "Onlar harcadıklarında ne israf ederler ne de cimrilik yaparlar; ikisi arasında dengeli bir yol tutarlar" buyrulur.',
        reflectionPrompt: 'Harçlığını harcarken ne israfa ne de cimriliğe kaçmadan nasıl bir bütçe dengesi kuruyorsun?'
      },
      {
        id: 'd3-3-5',
        studentQuestion: 'Peygamberimizin "Akan bir nehirde bile abdest alsan israf etme" uyarısı günümüze ne söyler?',
        guideAnswer: 'Muazzam bir çevre dersi! Düşün ki nehir akıp gidiyor, su tükenmeyecek gibi görünüyor. Ama Peygamberimiz musluğun sonuna kadar açılmasını yasaklıyor. Çünkü mesele sadece suyun bitmesi değil; insanın kalbinde "israf ve savurganlık alışkanlığının" oluşmamasıdır. Nimet sonsuz gibi görünse de tutumlu olmak bir karakterdir.',
        reflectionPrompt: 'Dişini fırçalarken musluğu kapatmak sana Peygamberimizin bu sünnetini nasıl hatırlatır?'
      },
      {
        id: 'd3-3-6',
        studentQuestion: 'Zaman israfı nedir ve diğer israflardan neden daha tehlikelidir?',
        guideAnswer: 'Harcanan para yeniden kazanılabilir, kırılan eşya tamir edilebilir; fakat geçen bir saniye bile asla geri gelmez! Saatlerce hiçbir faydası olmayan ekran başında boş videolar kaydırmak, faydasız oyunlara takılıp ödevleri ve ibadetleri geciktirmek en büyük zaman israfıdır. İnsan ömrünün her dakikası ebedi ahireti kazanmak için verilmiş bir sermayedir.',
        reflectionPrompt: 'Bugün zamanını en verimli şekilde değerlendirmek için hangi adımı attın?'
      },
      {
        id: 'd3-3-7',
        studentQuestion: 'Kâinattaki "sıfır atık ve ekolojik denge" bize israf konusunda nasıl ders verir?',
        guideAnswer: 'Koca kâinata bak: Sonbaharda dökülen yapraklar çürüyüp gübre olur, canlıların nefesiyle çıkan karbondioksiti ağaçlar alıp oksijene çevirir. Kâinatta hiçbir zerre çöpe gitmez, israf edilmez. Kâinatın Sahibi böylesine muhteşem bir tasarruf ve intizam koymuşken, insanın yeryüzünü çöplüğe çevirmesi ve israf etmesi yaratılış ahengine aykırıdır.',
        reflectionPrompt: 'Evinde ve okulunda sıfır atık ve geri dönüşüm bilinciyle neler yapıyorsun?'
      },
      {
        id: 'd3-3-8',
        studentQuestion: 'Yemek israfı ve tabağında yemek bırakmanın manevi vebali nedir?',
        guideAnswer: 'Dünyada milyonlarca çocuk bir dilim ekmeğe ve temiz suya muhtaçken; çöpe atılan her lokma büyük bir kul hakkı ve nankörlüktür. Peygamberimiz tabağımızdaki yemeği bitirmemizi, hatta ekmek kırıntılarını bile zayi etmememizi tembihlemiştir; çünkü "Bereketin yemeğin neresinde olduğunu bilemezsiniz."',
        reflectionPrompt: 'Tabağına yiyebileceğin kadar yemek almak ve bitirmek neden büyük bir şükür eylemidir?'
      },
      {
        id: 'd3-3-9',
        studentQuestion: 'Enerji ve elektrik israfı bir ibadet ve ahlak meselesi midir?',
        guideAnswer: 'Evet! Boş odada yanan bir lambayı kapatmak, kullanılmayan cihazların fişini çekmek sadece elektrik faturasını düşürmez; kul hakkını korur, doğanın kaynaklarını muhafaza eder. Peygamberimiz yatsı vaktinde lambaların söndürülmesini ve kapların örtülmesini tavsiye etmiştir.',
        reflectionPrompt: 'Evde boşuna yanan bir lambayı kapattığında Allah rızası için bir tasarruf yaptığını hisseder misin?'
      },
      {
        id: 'd3-3-10',
        studentQuestion: 'Kur’an-ı Kerim’de israf edenlerin "şeytanların kardeşleri" olarak nitelenmesi ne anlama gelir?',
        guideAnswer: 'İsrâ suresi 27. ayette: "Şüphesiz saçıp savuranlar, şeytanların kardeşleridir. Şeytan ise Rabbine karşı çok nankördür" buyrulur. Çünkü şeytan insanı şükürden uzaklaştırıp nankörlüğe ve doyumsuzluğa sürükler. İsraf insanı doyumsuz, bencil ve şükürsüz yapar.',
        reflectionPrompt: 'Tasarruf ve kanaat sahibi bir insanın kalbindeki doyum ve huzuru hiç hissettin mi?'
      }
    ],
    tfQuestions: [
      {
        id: 'tf3-3-6',
        statement: 'A’râf suresi 31. ayette "Yiyiniz, içiniz fakat israf etmeyiniz. Çünkü O, israf edenleri sevmez" buyrulur.',
        isTrue: true,
        explanation: 'Doğru! Yüce Allah nimetlerden helal dairesinde istifade etmeyi fakat saçıp savurmamayı emreder.'
      },
      {
        id: 'tf3-3-7',
        statement: 'Peygamberimiz akan bir nehir kenarında abdest alırken bile suyun israf edilmesini yasaklamıştır.',
        isTrue: true,
        explanation: 'Doğru! Kaynaklar bol olsa bile israf alışkanlığından ve israftan sakınmak esastır.'
      },
      {
        id: 'tf3-3-8',
        statement: 'Zaman israfı maddiyatla ilgili olmadığı için dinimizce sakıncalı görülmemiştir.',
        isTrue: false,
        explanation: 'Yanlış! Zaman en kıymetli sermayedir ve geri getirilemez; israfı çok büyük bir kayıptır.'
      },
      {
        id: 'tf3-3-9',
        statement: 'İslam dini harcamalarda cimrilik ile israf arasında dengeli bir tutum sergilemeyi (itidali) öğütler.',
        isTrue: true,
        explanation: 'Tebrikler! Mümin ne cimrilik eder ne de israf; ikisi arasında mutedil olur.'
      },
      {
        id: 'tf3-3-10',
        statement: 'Doğadaki ekolojik döngüde hiçbir şeyin israf edilmemesi, insana tasarruf konusunda bir tefekkür dersidir.',
        isTrue: true,
        explanation: 'Doğru! Kâinattaki sıfır atık intizamı Yaratıcının israftan uzak hikmetinin aynasıdır.'
      }
    ]
  },

  '3.4': {
    dialogues: [
      {
        id: 'd3-4-4',
        studentQuestion: 'Allah’ın "el-Hafîz" ismi kainattaki varlıkları nasıl korur?',
        guideAnswer: 'el-Hafîz; her şeyi koruyan, gözeten, hiçbir şeyi unutmayan ve zayi etmeyen demektir. Minik bir incir çekirdeğinin içine devasa bir ağacın bütün genetik programını Hafîz ismi yerleştirip korur. İnsanın hafızasına milyonlarca hatırayı sığdıran Hafîz’dir. Gökyüzünü Dünya’ya bir koruyucu tavan (ozon tabakası, atmosfer) yapan da yine el-Hafîz olan Allah’tır.',
        reflectionPrompt: 'Göz kapaklarının bir tehlike anında otomatik kapanması sana Hafîz ismini nasıl hatırlatır?'
      },
      {
        id: 'd3-4-5',
        studentQuestion: 'Allah’ın "el-Vedûd" ismi ile yarattıklarına olan sevgisi arasında nasıl bir bağ vardır?',
        guideAnswer: 'el-Vedûd; çok seven ve çok sevilen, sevilmeye en layık olan ve sevgiyi yaratan demektir. Anne bir tavuğun minik yavrularını korumak için köpeğe bile kafa tutmasındaki o şefkat, el-Vedûd isminin küçücük bir damlasıdır. Çiçeklerin rengârenk açması, meyvelerin tatlı kılınması Rabbimizin kullarına olan sevgisinin ilahi hediyeleridir.',
        reflectionPrompt: 'Annenin veya babanın sana gösterdiği karşılıksız sevgide Vedûd isminin tecellisini hissedebilir misin?'
      },
      {
        id: 'd3-4-6',
        studentQuestion: 'Allah’ın "el-Kerîm" ismi cömertliği bize nasıl öğretir?',
        guideAnswer: 'el-Kerîm; lütuf ve ihsanı sonsuz olan, hiçbir karşılık beklemeden cömertçe ikram eden demektir. Biz daha istemeden bize göz, kulak, akıl, hava ve su veren Kerîm olan Allah’tır. Kerîm ismini öğrenen bir insan da cömert olur; elindeki imkanları ihtiyaç sahipleriyle paylaşır ve kimseden minnet beklemez.',
        reflectionPrompt: 'Arkadaşına bir ikramda bulunurken hiçbir karşılık beklemeden vermek sana ne hissettirir?'
      },
      {
        id: 'd3-4-7',
        studentQuestion: 'İnsanın yaptığı amellerin Kirâmen Kâtibîn meleklerince kaydedilmesi Hafîz ismiyle nasıl ilgilidir?',
        guideAnswer: 'Hafîz ismi kâinatta hiçbir şeyin kaybolmasına izin vermez. İnsanın ağzından çıkan her söz, kalbinden geçen her niyet ve yaptığı her iyilik Hafîz isminin tecellisiyle kaydedilir ve ahirette önüne serilir. Bu inanç insana büyük bir sorumluluk ve emniyet duygusu verir.',
        reflectionPrompt: 'Yaptığın hiçbir gizli iyiliğin unutulmayacağını bilmek kalbini nasıl rahatlatır?'
      },
      {
        id: 'd3-4-8',
        studentQuestion: 'el-Vedûd ismine layık bir kul olmak için ne yapmalıyız?',
        guideAnswer: 'Öncelikle Rabbimizi her şeyden çok sevmeliyiz. O’nu sevmenin yolu ise Peygamberimizin sünnetine uymaktır. Âl-i İmrân suresi 31. ayette: "De ki: Eğer Allah’ı seviyorsanız bana uyun ki Allah da sizi sevsin" buyrulur. Ayrıca Allah’ın yarattığı canlılara sevgi ve merhametle yaklaşmak Vedûd isminin sevgisini celbeder.',
        reflectionPrompt: 'Bugün bir canlıya gösterdiğin sevgiyle Allah’ın sevgisini kazanmaya niyet ettin mi?'
      },
      {
        id: 'd3-4-9',
        studentQuestion: 'Kupkuru topraktan binbir çeşit lezzette meyvelerin çıkması el-Kerîm ismini nasıl gösterir?',
        guideAnswer: 'Düşün ki kapkara, çamurlu bir toprak ve tatsız bir su birleşiyor; oradan tatlı bir kavun, sulu bir şeftali, mis kokulu bir elma çıkıyor. Toprak akılsızdır, su şuursuzdur; o meyveleri bize paketleyip sunan sonsuz ikram ve cömertlik Sahibi olan el-Kerîm’dir.',
        reflectionPrompt: 'Bir meyveyi yerken onun arkasındaki ilahi ikramı tefekkür ettin mi?'
      },
      {
        id: 'd3-4-10',
        studentQuestion: 'Zorluk ve tehlikeler karşısında "Yâ Hafîz" diye dua etmek kalbe nasıl ferahlık verir?',
        guideAnswer: 'Çünkü insan acizdir, her tehlikeye karşı kendini koruyamaz. "Yâ Hafîz" diyen mümin, evrendeki her atomu ve her tehlikeyi kontrol eden sonsuz Koruyucuya sığınmış olur. Sevr Mağarasında Peygamberimizi bir örümcek ağı ve güvercin yuvasıyla koruyan aynı Hafîz’dir.',
        reflectionPrompt: 'Korktuğun bir anda Allah’ın Hafîz ismine sığındığında içindeki sükûneti hisset.'
      }
    ],
    tfQuestions: [
      {
        id: 'tf3-4-6',
        statement: 'el-Hafîz ismi; her şeyi hakkıyla koruyan, gözeten ve hiçbir ameli zayi etmeyen Allah’ı ifade eder.',
        isTrue: true,
        explanation: 'Doğru! Çekirdeklerin içindeki programdan insanın amellerine kadar her şey Hafîz ismiyle korunur.'
      },
      {
        id: 'tf3-4-7',
        statement: 'el-Vedûd ismi; sadece belirli kişileri seven, diğer varlıklara sevgi beslemeyen anlamına gelir.',
        isTrue: false,
        explanation: 'Yanlış! el-Vedûd çok seven, sevilmeye layık olan ve kâinattaki tüm sevgi ve şefkatin kaynağı olandır.'
      },
      {
        id: 'tf3-4-8',
        statement: 'el-Kerîm ismi; lütuf, ihsan ve ikramı bol olan, karşılıksız veren Allah’ı anlatır.',
        isTrue: true,
        explanation: 'Doğru! Bize bahşedilen sayısız nimet Kerîm olan Rabbimizin cömertliğidir.'
      },
      {
        id: 'tf3-4-9',
        statement: 'İnsanın hafızası ve hücrelerdeki DNA kodları el-Hafîz isminin muazzam tecellilerindendir.',
        isTrue: true,
        explanation: 'Tebrikler! Trilyonlarca bilginin küçücük bir hücre çekirdeğinde korunması Hafîz isminin mührüdür.'
      },
      {
        id: 'tf3-4-10',
        statement: 'Kerîm ismini öğrenen bir mümin, insanlara yardım ederken karşılık ve teşekkür bekleyerek hareket eder.',
        isTrue: false,
        explanation: 'Yanlış! Kerîm ahlakına sahip mümin karşılığı sadece Allah’tan bekler; başkasına minnet etmez.'
      }
    ]
  },

  // ==========================================
  // ÜNİTE 4
  // ==========================================
  '4.1': {
    dialogues: [
      {
        id: 'd4-1-4',
        studentQuestion: 'İrade terbiyesi nedir ve bir öğrenci ders çalışırken iradesini nasıl güçlendirebilir?',
        guideAnswer: 'İrade kas gibidir; kullandıkça ve zorlandıkça güçlenir! Canın oyun oynamak veya telefona bakmak istediğinde "Hayır, önce ödevimi bitireceğim" diyebilmek iradenin ağırlık kaldırmasıdır. Ertelememek, anlık zevkleri gelecekteki kalıcı başarı için erteleyebilmek güçlü bir iradenin meyvesidir.',
        reflectionPrompt: 'Bugün canının istediği bir eğlenceyi erteleyip dersine odaklandığında ne hissettin?'
      },
      {
        id: 'd4-1-5',
        studentQuestion: 'Peygamberimizin "Güçlü kimse güreşte rakibini yenen değil, öfke anında kendine hakim olandır" hadisi ne anlatır?',
        guideAnswer: 'Gerçek güç kaslarda veya pazularda değildir; kalptedir, akıldadır ve iradededir. Birine kızdığında bağırmak, vurmak veya küfretmek en kolayıdır ve nefsin zayıflığıdır. Asıl yiğitlik, öfke volkanı patlamak üzereyken derin bir nefes alıp susabilmek ve adaletle hareket edebilmektir.',
        reflectionPrompt: 'Çok öfkelendiğin bir anda susup ortamı terk etmeyi başardığın oldu mu?'
      },
      {
        id: 'd4-1-6',
        studentQuestion: 'İnsanın iradesi (cüz’i irade) ile Allah’ın iradesi (külli irade) arasındaki fark nedir?',
        guideAnswer: 'Harika bir tevhid ve kelam sorusu! Külli irade; Allah’ın sınırsız, mutlak ve her şeyi kuşatan iradesidir; nerede doğacağımız, anne babamız ve göklerin düzeni külli iradeye aittir. Cüz’i irade ise Allah’ın insana verdiği sınırlı seçme kabiliyetidir: İyiyi veya kötüyü, doğruyu veya yanlışı seçmek bize bırakılmıştır ve imtihanımız buradadır.',
        reflectionPrompt: 'Seçim yapabilme özgürlüğünün sana yüklediği ahlaki sorumluluğu düşün.'
      },
      {
        id: 'd4-1-7',
        studentQuestion: 'Uhud Savaşı’ndaki Okçular Tepesi hadisesi irade ve sabır konusunda bize ne öğretir?',
        guideAnswer: 'Peygamberimiz okçulara "Kuşların cesetlerimizi kaptığını görseniz bile yerinizden ayrılmayın" demişti. Fakat ganimet hevesiyle sabredemeyip tepeden indiler ve savaşın seyri değişti. Bu olay bize öğretir ki: Bir görev verildiğinde sonuna kadar sabırla yerinde durmak, anlık heveslerin peşine düşmemek hayati bir irade sınavıdır.',
        reflectionPrompt: 'Başladığın bir işi sonuna kadar sabırla bitirmek sana nasıl bir güven verir?'
      },
      {
        id: 'd4-1-8',
        studentQuestion: 'Erteleme hastalığından (tesvîf) kurtulmak için dinimiz bize ne tavsiye eder?',
        guideAnswer: 'İnşirâh suresi 7. ayette: "Bir işi bitirince hemen diğerine koyul" buyrulur. Peygamberimiz de "Yarıncılar helak oldu" buyurarak yapılması gereken hayırlı işleri yarına erteleyenlerin aldandığını bildirmiştir. Ertelemek nefsin tembellik tuzağıdır; iradeli mümin "şimdi" adım atar.',
        reflectionPrompt: 'Bugün yapman gereken bir ödevi ertelemeden hemen yaptığında hissettiğin hafifliği hatırla.'
      },
      {
        id: 'd4-1-9',
        studentQuestion: 'Oruç ibadeti insan iradesini nasıl eğitir ve çelikleştirir?',
        guideAnswer: 'Oruç adeta bir irade akademisidir! Önünde nefis yemekler ve buz gibi su varken, kimse görmediği halde sırf Allah rızası için elini uzatmamak iradenin zirvesidir. Açlığa ve susuzluğa sabreden insan, hayatın diğer zorluklarına ve günahlarına karşı da "Dur!" diyebilme gücü kazanır.',
        reflectionPrompt: 'Ramazan’da iftar vaktini beklerken içindeki irade zaferini nasıl kutlarsın?'
      },
      {
        id: 'd4-1-10',
        studentQuestion: 'Sağlık ve boş vakit nimetlerini emanet bilmek iradeyle nasıl ilişkilidir?',
        guideAnswer: 'Peygamberimiz insanların en çok aldandığı iki nimetin sağlık ve boş vakit olduğunu bildirmiştir. Güçlü bir iradeye sahip insan bu iki nimeti har vurup harman savurmaz; sağlığını zararlı şeylerden korur, boş vaktini ise faydalı ilim, ibadet ve insanlığa hizmetle değerlendirir.',
        reflectionPrompt: 'Hafta sonundaki boş vaktini faydalı bir plana bağlamak sana ne kazandırır?'
      }
    ],
    tfQuestions: [
      {
        id: 'tf4-1-6',
        statement: 'İslam dinine göre insan robot gibi programlanmış bir varlıktır; seçim yapma iradesi yoktur.',
        isTrue: false,
        explanation: 'Yanlış! İnsana cüz’i irade verilmiştir; iyi ile kötü arasında tercih yapabilir ve bundan sorumludur.'
      },
      {
        id: 'tf4-1-7',
        statement: 'Peygamberimiz asıl güçlü kimsenin güreşte galip gelen değil, öfkelendiğinde kendine hakim olan olduğunu bildirmiştir.',
        isTrue: true,
        explanation: 'Doğru! Öfke anında iradeye hakim olmak en yüksek ahlaki güçtür.'
      },
      {
        id: 'tf4-1-8',
        statement: 'Erteleme alışkanlığı iradeyi zayıflatan ve zaman nimetini heba eden zararlı bir tutumdur.',
        isTrue: true,
        explanation: 'Doğru! Dinimiz "Bir işi bitirince diğerine koyul" buyurarak tembelliği ve ertelemeyi reddeder.'
      },
      {
        id: 'tf4-1-9',
        statement: 'Uhud Savaşı’ndaki okçular, emre sabırla itaat etmenin ve iradenin ne kadar hayati olduğunu gösteren tarihi bir derstir.',
        isTrue: true,
        explanation: 'Tebrikler! Okçuların sabırsızlığı savaşın gidişatını değiştirmiş ve ümmete büyük bir ibret olmuştur.'
      },
      {
        id: 'tf4-1-10',
        statement: 'Oruç ibadeti sadece mideyi aç bırakmaktır; irade terbiyesi ve nefis kontrolü ile bir ilgisi yoktur.',
        isTrue: false,
        explanation: 'Yanlış! Oruç nefsi terbiye eden, sabrı ve iradeyi çelikleştiren muazzam bir ibadettir.'
      }
    ]
  },

  '4.2': {
    dialogues: [
      {
        id: 'd4-2-4',
        studentQuestion: 'İslam dininde ilk inen ayetin "Oku!" (İkra’) olması bize ne mesaj verir?',
        guideAnswer: 'Bu muhteşem bir ilahi başlangıçtır! Yüce Allah insanlığa hitabına "Namaz kıl" ya da "Oruç tut" ile değil; "Yaratan Rabbinin adıyla oku!" emriyle başlamıştır. Bu emir hem Kur’an’ı okumayı hem de kâinat kitabını, bilimi, doğayı ve insanı tefekkür ederek okumayı kapsar. İlimsiz bir din ve medeniyet düşünülemez.',
        reflectionPrompt: 'Kitap okurken "Yaratan Rabbimin adıyla öğreniyorum" niyeti taşımak sana ne kazandırır?'
      },
      {
        id: 'd4-2-5',
        studentQuestion: 'İmam Buhârî hadis toplamak için nasıl bir titizlik ve fedakârlık göstermiştir?',
        guideAnswer: 'İmam Buhârî tek bir sahih hadisi bizzat ravisinden öğrenmek için deve sırtında binlerce kilometre yol yürümüştür. Bir gün bir hadis dinlemek için gittiği adamın, kaçan atını eteğinde yem varmış gibi kandırarak çağırdığını görmüş ve "Atına yalan söyleyen birinden hadis rivayet edilmez" diyerek o hadisi almadan geri dönmüştür. İşte ilme gösterilen bu eşsiz saygı hadislerin günümüze sapasağlam ulaşmasını sağlamıştır.',
        reflectionPrompt: 'Öğrendiğin bilgilerin doğruluğunu araştırmakta sen ne kadar titiz davranıyorsun?'
      },
      {
        id: 'd4-2-6',
        studentQuestion: 'Faydalı ilim ile faydasız ilim arasındaki fark nedir?',
        guideAnswer: 'Peygamber Efendimiz "Allah’ım, fayda vermeyen ilimden sana sığınırım" diye dua etmiştir. Faydalı ilim; insanın ahlakını güzelleştiren, Allah’a yaklaştıran ve insanlığın derdine derman olan ilimdir. Faydasız ilim ise sahibini kibirlendiren, insanlığa zarar veren veya hiçbir amele dönüşmeyen boş malumat yığınıdır.',
        reflectionPrompt: 'Öğrendiğin fen veya matematik bilgisini insanlığa nasıl faydalı bir projeye çevirebilirsin?'
      },
      {
        id: 'd4-2-7',
        studentQuestion: 'Bedir Savaşı’nda esir düşen müşriklerin çocuklara okuma yazma öğretmesi karşılığında serbest bırakılması neyi gösterir?',
        guideAnswer: 'Tarihte eşi benzeri olmayan bir olay! Peygamberimiz savaştığı düşman esirlerinden maddi fidye istemek yerine; on Müslüman çocuğa okuma yazma öğreten her esiri serbest bırakmıştır. Bu uygulama, İslam’ın eğitime ve okuryazarlığa verdiği paha biçilmez kıymetin en açık delilidir.',
        reflectionPrompt: 'Peygamberimizin bu kararını okuduğunda ilme verilen değer hakkında ne düşünüyorsun?'
      },
      {
        id: 'd4-2-8',
        studentQuestion: 'İslam medeniyetinde yetişen bilim insanları (İbn Sînâ, el-Bîrûnî, Hârizmî) inançları ile bilimlerini nasıl birleştirdiler?',
        guideAnswer: 'Onlar bilimi ibadetin bir parçası olarak gördüler! Hârizmî cebiri miras taksimini çözmek için geliştirdi; el-Bîrûnî kıble yönünü ve namaz vakitlerini tam hesaplamak için trigonometri ve astronomide çığır açtı; İbn Sînâ insanı "en mükemmel ilahi sanat" bilerek tıbbın zirvesine çıktı. İnanç onların bilim aşkını tutuşturdu.',
        reflectionPrompt: 'Gelecekte İslam medeniyetinin öncü bir bilim insanı olmak için bugün nasıl çalışmalısın?'
      },
      {
        id: 'd4-2-9',
        studentQuestion: 'Kur’an’da "Hiç bilenlerle bilmeyenler bir olur mu?" ayeti bize hangi sorumluluğu yükler?',
        guideAnswer: 'Zümer suresi 9. ayetteki bu ilahi soru, bilen kimsenin sorumluluğunun çok daha büyük olduğunu hatırlatır. Bilen insan çevresini aydınlatmalı, cehaletle mücadele etmeli, bildiklerini kibirlenmeden başkalarıyla paylaşmalıdır.',
        reflectionPrompt: 'Sınıfta bir konuyu anlamayan arkadaşına yardım etmek sana ilmin zekâtını nasıl ödetir?'
      },
      {
        id: 'd4-2-10',
        studentQuestion: 'İlim öğrenirken öğrencinin takınması gereken en önemli ahlak ve edep nedir?',
        guideAnswer: 'Tevazu ve sabır! Hz. Ali "Bana bir harf öğretenin kırk yıl kölesi olurum" buyurmuştur. Öğretmene hürmet etmek, soru sormaktan çekinmemek, ilim meclislerinde edeple oturmak ve öğrenilen doğru bilgiyi hayatında yaşamak gerçek bir ilim talebesinin şiârıdır.',
        reflectionPrompt: 'Öğretmenine duyduğun saygı ve teşekkür senin öğrenme şevkini nasıl artırır?'
      }
    ],
    tfQuestions: [
      {
        id: 'tf4-2-6',
        statement: 'Kur’an-ı Kerim’in indirilen ilk ayeti "Yaratan Rabbinin adıyla oku!" emridir.',
        isTrue: true,
        explanation: 'Doğru! Alak suresinin ilk ayetleri ilmin ve okumanın ilahi önemini vurgular.'
      },
      {
        id: 'tf4-2-7',
        statement: 'Peygamberimiz Bedir esirlerinden okuma yazma öğretenleri serbest bırakarak eğitime verdiği önemi göstermiştir.',
        isTrue: true,
        explanation: 'Doğru! On Müslüman çocuğa okuma yazma öğreten esirler hürriyetlerine kavuşmuştur.'
      },
      {
        id: 'tf4-2-8',
        statement: 'İslamiyet sadece dini ilimleri teşvik etmiş; tıp, astronomi ve matematik gibi fen ilimlerini yasaklamıştır.',
        isTrue: false,
        explanation: 'Yanlış! İslam kâinatı inceleyen tüm faydalı ilimleri ibadet ve tefekkür vesilesi sayarak teşvik etmiştir.'
      },
      {
        id: 'tf4-2-9',
        statement: 'İmam Buhârî, hadisleri toplarken ravilerin ahlakını ve dürüstlüğünü son derece sıkı bir titizlikle incelemiştir.',
        isTrue: true,
        explanation: 'Tebrikler! Buhârî’nin bu titizliği hadis ilminin zirvesi olan Sahih-i Buhârî’yi meydana getirmiştir.'
      },
      {
        id: 'tf4-2-10',
        statement: 'Peygamber Efendimiz "İlim öğrenmek her Müslüman erkeğe ve kadına farzdır" buyurmuştur.',
        isTrue: true,
        explanation: 'Doğru! İlim öğrenmek kadın erkek ayırt edilmeksizin her müminin üzerine bir sorumluluktur.'
      }
    ]
  },

  '4.3': {
    dialogues: [
      {
        id: 'd4-3-4',
        studentQuestion: 'Hayâ ne demektir ve utanma duygusundan farkı nedir?',
        guideAnswer: 'Hayâ; insanın kötülükten, çirkinlikten ve günahtan kaçınmasını sağlayan derin bir edep ve saygı duygusudur. Sadece insanların ayıplamasından çekinmek pasif bir utanmadır; hayâ ise kimsenin olmadığı yerde bile "Allah beni görüyor" bilinciyle edebi korumaktır. Peygamberimiz "Hayâ imandandır" buyurmuştur.',
        reflectionPrompt: 'Yalnız kaldığında bile edep ve nezaketini korumak sana nasıl bir manevi duruş kazandırır?'
      },
      {
        id: 'd4-3-5',
        studentQuestion: 'Hz. Osman’ın hayâsı hakkında Peygamberimiz ne buyurmuştur?',
        guideAnswer: 'Hz. Osman hayâ ve edep timsali bir sahabiydi. Peygamber Efendimiz onun hakkında: "Kendisine meleklerin bile hayâ ettiği bir kimseden ben hayâ etmeyeyim mi?" buyurmuştur. Hz. Osman odasında tek başınayken bile Yüce Allah’a duyduğu hürmetten ötürü edep elbisesini sımsıkı korurdu.',
        reflectionPrompt: 'Hz. Osman’ın bu asil edebini hatırlamak senin konuşma ve tavırlarını nasıl güzelleştirir?'
      },
      {
        id: 'd4-3-6',
        studentQuestion: 'Dijital dünyada ve sosyal medyada hayâ ve nezaket nasıl korunur?',
        guideAnswer: 'Çok güncel ve hayati bir soru! Gerçek hayatta yüzüne söyleyemeyeceğin kaba, kırıcı bir sözü sosyal medyada takma isimle yazmamak dijital hayâdır. İnsanların gizli hallerini ifşa etmemek, ahlaksız içerikleri beğenip yaymamak, dijital ekranda da meleklerin ve Allah’ın şahit olduğunu unutmamak müminin dijital hayâsıdır.',
        reflectionPrompt: 'Sosyal medyada bir yorum yazarken "Bu sözüm ahirette önüme gelse utanır mıyım?" diye düşünüyor musun?'
      },
      {
        id: 'd4-3-7',
        studentQuestion: 'Peygamberimizin "Hayâ bütünüyle hayırdır, hayâdan sadece hayır gelir" sözü neyi ifade eder?',
        guideAnswer: 'Hayâ insanı her türlü fenalıktan, kavgadan, kabalıktan ve günahtan koruyan bir zırhtır. Hayâsı olan insan yalan söyleyemez, hırsızlık yapamaz, anne babasına saygısızlık edemez, arkadaşına iftira atamaz. O yüzden hayâ girdiği her yeri ve her kalbi güzelleştirir.',
        reflectionPrompt: 'Hayâlı bir insanın toplumda neden herkes tarafından güvenle ve saygıyla karşılandığını düşün.'
      },
      {
        id: 'd4-3-8',
        studentQuestion: 'Konuşmada ve dilde hayâ nasıl olur; argo ve küfürlü konuşmak hayâyı nasıl zedeler?',
        guideAnswer: 'Dil kalbin aynasıdır. Kalbinde hayâ olan insanın dilinden kaba, çirkin, küfürlü ve argo kelimeler dökülmez. Müminin dili tatlı, sözü doğru ve nezaket doludur. Peygamberimiz "Mümin dil uzatıcı, lanet edici, çirkin sözlü ve hayâsız olamaz" buyurmuştur.',
        reflectionPrompt: 'Arkadaşların argo konuştuğunda senin nezaketi ve tertemiz Türkçeyi seçmen nasıl bir asalet örneğidir?'
      },
      {
        id: 'd4-3-9',
        studentQuestion: 'Hayâ duygusu insanın hakkını aramasına veya soru sormasına engel midir?',
        guideAnswer: 'Asla! Hayâ ile çekingenliği birbirine karıştırmamak gerekir. Hz. Âişe annemiz Ensar kadınlarını överek "Onların hayâsı ilim öğrenmelerine ve dinlerini sormalarına engel olmadı" buyurmuştur. Hakkı savunmak, dersi anlamadığında parmak kaldırıp sormak bir fazilettir; hayâ ise sadece çirkin ve günah şeylerden sakınmaktır.',
        reflectionPrompt: 'Sınıfta parmak kaldırıp anlamadığın yeri sormanın cesaret ve ilim sevgisi olduğunu fark et.'
      },
      {
        id: 'd4-3-10',
        studentQuestion: 'Hayâ duygusu zayıfladığında bireyde ve toplumda ne gibi tehlikeler baş gösterir?',
        guideAnswer: 'Peygamber Efendimiz "İlk peygamberlerden itibaren insanlığa ulaşan sözlerden biri şudur: Utanmıyorsan dilediğini yap!" buyurmuştur. Hayâ ortadan kalktığında saygı, merhamet ve güven çöker; kötülükler pervasızca işlenir. Hayâ toplumun görünmez ahlak sigortasıdır.',
        reflectionPrompt: 'Edep ve hayânın hakim olduğu bir okul ortamında herkesin ne kadar huzurlu olacağını hayal et.'
      }
    ],
    tfQuestions: [
      {
        id: 'tf4-3-6',
        statement: 'Peygamber Efendimiz "Hayâ imandandır ve hayâ ancak hayır getirir" buyurmuştur.',
        isTrue: true,
        explanation: 'Doğru! Hayâ imanın kalpteki en asil dışavurumu ve güzelliğidir.'
      },
      {
        id: 'tf4-3-7',
        statement: 'Hz. Osman, meleklerin bile kendisinden hayâ ettiği yüksek bir edep timsali sahabidir.',
        isTrue: true,
        explanation: 'Doğru! Peygamberimiz Hz. Osman’ın eşsiz hayâsını övgüyle anlatmıştır.'
      },
      {
        id: 'tf4-3-8',
        statement: 'Gerçek hayatta günah olan bir davranış, internet ve sosyal medya ortamında serbest sayılır.',
        isTrue: false,
        explanation: 'Yanlış! İslam ahlakı ve hayâ kuralları hem gerçek hem sanal/dijital dünyada aynen geçerlidir.'
      },
      {
        id: 'tf4-3-9',
        statement: 'Hayâ sahibi olmak, derste soru sormaktan ve hakkını aramaktan çekinmek demektir.',
        isTrue: false,
        explanation: 'Yanlış! İlim öğrenmek ve hakkı savunmak fazilettir; hayâ ise günah ve çirkinlikten sakınmaktır.'
      },
      {
        id: 'tf4-3-10',
        statement: 'Peygamberimiz "Utanmıyorsan dilediğini yap" sözünün peygamberlerden kalan kadim bir ilke olduğunu bildirmiştir.',
        isTrue: true,
        explanation: 'Tebrikler! Hayânın kaybolması bütün kötülüklerin kapısını aralayan bir tehlikedir.'
      }
    ]
  },

  '4.4': {
    dialogues: [
      {
        id: 'd4-4-4',
        studentQuestion: 'Allah’ın "el-Muktedir" ismi kainatta nasıl tecelli eder?',
        guideAnswer: 'el-Muktedir; gücü her şeye yeten, kudreti sınırsız olan ve dilediği her şeyi dilediği an hiç zorlanmadan var eden demektir. Milyarlarca ton ağırlığındaki gezegenleri boşlukta bir topaç gibi döndüren, devasa dalgaları ve fırtınaları emrinde tutan el-Muktedir olan Allah’tır. O’nun için bir atomu yaratmak ile bir galaksiyi yaratmak aynı kolaylıktadır.',
        reflectionPrompt: 'Gece gökyüzündeki dev yıldızlara baktığında el-Muktedir isminin azametini hisseder misin?'
      },
      {
        id: 'd4-4-5',
        studentQuestion: 'Allah’ın "el-Hakîm" ismi ne demektir ve evrendeki her şeyin bir hikmeti var mıdır?',
        guideAnswer: 'el-Hakîm; her işi hikmetli, kusursuz ve belirli bir gayeye uygun olarak yapan, abes (boş ve anlamsız) hiçbir şey yaratmayan demektir. Sivrisineğin hortumundaki mikroskobik iğneden gezegenlerin yörüngesine kadar her detayda binlerce fayda ve hikmet gizlidir. Bazen bizim ilk bakışta anlayamadığımız olayların arkasında bile Hakîm isminin muhteşem planı vardır.',
        reflectionPrompt: 'İlk başta üzüldüğün bir olayın sonradan senin için ne kadar hayırlı olduğunu fark ettiğin oldu mu?'
      },
      {
        id: 'd4-4-6',
        studentQuestion: 'Allah’ın "el-Cemîl" ismi ne anlama gelir ve doğadaki güzelliklerle ilişkisi nedir?',
        guideAnswer: 'el-Cemîl; mutlak güzellik sahibi olan ve güzelliği yaratan demektir. Peygamber Efendimiz "Şüphesiz ki Allah Cemîl’dir (güzeldir), güzelliği sever" buyurmuştur. Bir kelebeğin kanadındaki simetrik nakışlar, bir tavus kuşunun renk cümbüşü, gün batımındaki gökyüzünün altın sarısı ve karlı dağlar el-Cemîl isminin yeryüzündeki yansımalarıdır.',
        reflectionPrompt: 'Mis kokulu bir çiçeğe veya yavru bir kediye bakarken Yaratıcının Cemîl ismini tefekkür et.'
      },
      {
        id: 'd4-4-7',
        studentQuestion: 'Ayın ikiye yarılması (Şakk-ı Kamer) mucizesi hangi ismin apaçık göstergesidir?',
        guideAnswer: 'Mekke müşrikleri Peygamberimizden gökyüzünde bir mucize istediklerinde, Peygamberimiz parmağıyla işaret etmiş ve dolunay açıkça iki parçaya ayrılmıştır. Bu mucize el-Muktedir olan Yüce Allah’ın gök cisimlerini bile elçisinin bir işaretiyle emre amade kıldığını gösteren muazzam bir kudret tecellisidir.',
        reflectionPrompt: 'Kâinattaki tüm kanunların sahibinin Allah olduğunu düşünmek kalbine nasıl bir haşyet verir?'
      },
      {
        id: 'd4-4-8',
        studentQuestion: 'Müslüman bir genç el-Cemîl isminin ahlakını kendi hayatına nasıl yansıtabilir?',
        guideAnswer: 'Üstünü başını temiz ve düzenli tutarak, odasını tertipli bırakarak, güzel ve nazik kelimeler seçerek, insanlara tebessümle bakarak Cemîl ismini yansıtır. Çünkü İslam çirkinliği, dağınıklığı ve kabalığı sevmez; her şeyde nezaket ve estetiği emreder.',
        reflectionPrompt: 'Çalışma masanı pırıl pırıl düzenlediğinde içindeki huzuru fark et.'
      },
      {
        id: 'd4-4-9',
        studentQuestion: 'el-Hakîm ismini bilen bir insan başına bir zorluk geldiğinde neden isyan etmez?',
        guideAnswer: 'Çünkü bilir ki el-Hakîm olan Rabbi hiçbir şeyi boşuna yapmaz. Bir doktorun acı bir iğne yapması veya ameliyat etmesi hastanın sağlığı için bir hikmet olduğu gibi; insanın karşılaştığı zorluklar da onun sabrını artırır, olgunlaştırır ve derecesini yükseltir.',
        reflectionPrompt: 'Zorluklarla karşılaştığında "Rabbimin bunda da bir hikmeti vardır" diyebilmek sana ne kazandırır?'
      },
      {
        id: 'd4-4-10',
        studentQuestion: 'Muktedir, Hakîm ve Cemîl isimlerinin bir aradaki ahengi bize ne anlatır?',
        guideAnswer: 'Kudret (Muktedir) tek başına korkutucu olabilirdi; ama o kudret sonsuz bir Hikmet (Hakîm) ve tarifsiz bir Güzellikle (Cemîl) birleştiğinde kâinat muazzam bir sanat galerisine dönüşür. Kudret yaratır, hikmet ölçer, cemal süsler. Bize düşen de bu eşsiz Sanatkâr’a hayranlıkla secde etmektir.',
        reflectionPrompt: 'Kâinattaki bu üçlü ahenge baktığında dilinden hangi zikir ve şükür dökülür?'
      }
    ],
    tfQuestions: [
      {
        id: 'tf4-4-6',
        statement: 'el-Muktedir ismi; gücü ve kudreti her şeye yeten, dilediğini dilediği gibi yaratan Allah’ı ifade eder.',
        isTrue: true,
        explanation: 'Doğru! Yüce Allah’ın kudretine hiçbir sınır yoktur; her şey O’nun kudretiyle var olur.'
      },
      {
        id: 'tf4-4-7',
        statement: 'el-Hakîm ismi; her işinde hikmet, fayda ve gaye gözeten, abes iş yapmayan anlamına gelir.',
        isTrue: true,
        explanation: 'Doğru! Kâinattaki en küçük hücreden galaksilere kadar her varlık bir hikmetle yaratılmıştır.'
      },
      {
        id: 'tf4-4-8',
        statement: 'Peygamber Efendimiz "Allah Cemîl’dir (güzeldir), güzelliği sever" buyurmuştur.',
        isTrue: true,
        explanation: 'Tebrikler! el-Cemîl ismi mutlak güzellik kaynağı olan Rabbimizi ifade eder.'
      },
      {
        id: 'tf4-4-9',
        statement: 'Ayın ikiye yarılması (Şakk-ı Kamer) mucizesi Allah’ın el-Muktedir isminin göklerdeki delillerindendir.',
        isTrue: true,
        explanation: 'Doğru! Bu olay Yüce Allah’ın kâinat kanunlarına mutlak hakimiyetinin bir nişanesidir.'
      },
      {
        id: 'tf4-4-10',
        statement: 'İslam dinine göre çevre temizliği ve estetik sadece bir tercih olup inançla bir ilgisi yoktur.',
        isTrue: false,
        explanation: 'Yanlış! el-Cemîl olan Allah güzelliği sever; temizlik ve estetik imanın bir parçasıdır.'
      }
    ]
  }
};
