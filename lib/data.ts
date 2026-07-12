import {
  GraduationCap,
  TrendingUp,
  Users,
  Target,
  ClipboardCheck,
  MessageSquareText,
  BookOpen,
  Brain,
  Trophy,
  CalendarCheck,
  LineChart,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Ana Sayfa', href: '#anasayfa' },
  { label: 'Kurumsal', href: '#kurumsal' },
  { label: 'Programlarımız', href: '#programlar' },
  { label: 'Koçluk', href: '#akademik-kocluk' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Blog', href: '#blog' },
  { label: 'SSS', href: '#sss' },
  { label: 'İletişim', href: '#iletisim' },
];

export const CONTACT = {
  phone: '+90 531 724 46 41',
  phoneHref: 'tel:+905317244641',
  phone2: '+90 553 430 11 98',
  phone2Href: 'tel:+905534301198',
  email: 'info@yeninesilakademi.com.tr',
  facebook: 'https://www.facebook.com/profile.php?id=61588884123585',
  address: 'Fevziye Tramvay Durağına 10 metre\nÖmerağa Mahallesi Latif Bey Sokak No:9 Kat:3\nİzmit / KOCAELİ',
  addressMapsUrl: 'https://maps.app.goo.gl/EpyHZGmWbRrBXxdK6',
  hours: 'Pazartesi - Cumartesi: 09:00 - 21:00',
  instagram: 'https://instagram.com/yeninesilakademi.izmit',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24115.9!2d29.93!3d40.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c4d8b8b8b8b8b8%3A0x0!2zSXptaXQsIEtvY2FlbGk!5e0!3m2!1str!2str!4v1700000000000',
};

export const STATS = [
  { value: null, label: 'Mutlu Öğrenci', display: 'Yüzlerce' },
  { value: null, label: 'Başarı Oranı', display: 'Yüksek' },
  { value: null, label: 'Uzman Eğitmen', display: 'Deneyimli' },
  { value: null, label: 'Üniversite Yerleştirmesi', display: 'Çok Sayıda' },
];

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    icon: Brain,
    title: 'Akademik Koçluk',
    description:
      'Her öğrenciye özel akademik koç atanır. Hedef belirleme, motivasyon ve süreç yönetimi tek elden takip edilir.',
  },
  {
    icon: LineChart,
    title: 'Haftalık İlerleme Takibi',
    description:
      'Öğrencinin performansı haftalık raporlarla ölçülür, zayıf yönler erkenden tespit edilir.',
  },
  {
    icon: Users,
    title: 'Uzman Eğitmen Kadrosu',
    description:
      'Alanında uzman, tecrübeli ve öğrenciyle güçlü iletişim kuran eğitmenlerle ders yapın.',
  },
  {
    icon: Target,
    title: 'Bireysel Çalışma Planları',
    description:
      'Her öğrencinin seviyesine ve hedefine göre özelleştirilmiş çalışma programı hazırlanır.',
  },
  {
    icon: ClipboardCheck,
    title: 'Türkiye Geneli Deneme Sınavları',
    description:
      'Gerçek sınav koşullarında, Türkiye geneli deneme sınavları ile sınav atmosmine alışın.',
  },
  {
    icon: MessageSquareText,
    title: 'Veli Bilgilendirme Sistemi',
    description:
      'Veli, öğrencinin gelişimini dijital panel üzerinden anlık olarak takip edebilir.',
  },
];

export interface Program {
  title: string;
  grade: string;
  description: string;
  image: string;
  features: string[];
  badge?: string;
}

export const PROGRAMS: Program[] = [
  {
    title: '6. ve 7. Sınıf Programı',
    grade: '6. ve 7. Sınıflar',
    description:
      'Ortaokul döneminde güçlü bir temel oluşturun. Ders alışkanlığı ve akademik gelişim için doğru başlangıç.',
    image: '/programlarımız_6ve7_sınıflar.webp',
    features: ['Temel Kavram Eğitimi', 'Çalışma Alışkanlığı', 'Haftalık Değerlendirme'],
    badge: 'Ortaokul',
  },
  {
    title: 'LGS Hazırlık Programı',
    grade: '8. Sınıf',
    description:
      'LGS\'ye kapsamlı hazırlık. Tüm dersler için yoğun konu tekrarı, deneme sınavları ve bireysel takip.',
    image: '/blog_lgs_hazırlık.webp',
    features: ['LGS Tam Kapsam', 'Soru Çözüm Teknikleri', 'Deneme Sınavları'],
    badge: 'LGS',
  },
  {
    title: '9. Sınıf Hazırlık Programı',
    grade: '9. Sınıf',
    description:
      'Liseye güçlü bir başlangıç. Temel kavramların atıldığı kritik yılda akademik altyapıyı sağlamlaştırın.',
    image:
      '/programlarımız_9._sınıflar.webp',
    features: ['Temel Kavram Eğitimi', 'Çalışma Alışkanlığı', 'Haftalık Test'],
    badge: 'Lise',
  },
  {
    title: '10. Sınıf Yoğunlaştırma',
    grade: '10. Sınıf',
    description:
      'TYT konularına erken başlayan öğrenciler için yoğun temel eğitim ve konu pekiştirme programı.',
    image: '/programlarımız_10._sınıflar.webp',
    features: ['TYT Temel Konular', 'Soru Çözüm Teknikleri', 'Konu Tarama'],
    badge: 'Popüler',
  },
  {
    title: '11. Sınıf Hedef Programı',
    grade: '11. Sınıf',
    description:
      'AYT odaklı branş derslerinin başladığı yılda hedef bölüme yönelik stratejik hazırlık süreci.',
    image:
      '/programlarımız11._sınıflar.webp',
    features: ['AYT Branş Dersleri', 'Hedef Bölüm Analizi', 'Deneme Sınavları'],
    badge: 'Hedef Odaklı',
  },
  {
    title: 'YKS Final Programı',
    grade: '12. Sınıf ve Mezun',
    description:
      'Sınava son bir yıl kala tam kapsamlı hazırlık. Yoğun deneme, taktik ve motivasyon programı. Mezun öğrenciler için esnek saatli seçenekler mevcuttur.',
    image:
      '/programlarımız_yks.webp',
    features: ['Tam Kapsamlı Tekrar', 'Sınav Taktikleri', 'Esnek Saatler (Mezun)'],
    badge: 'YKS Final',
  },
];

export interface TimelineStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const COACHING_STEPS: TimelineStep[] = [
  {
    step: '01',
    title: 'Hedef Belirleme',
    description:
      'Öğrencinin yetenek, ilgi ve akademik durumu analiz edilerek gerçekçi hedefler belirlenir.',
    icon: Target,
  },
  {
    step: '02',
    title: 'Planlama',
    description:
      'Hedefe ulaşmak için haftalık ve aylık çalışma planı oluşturulur, ders dağılımı yapılır.',
    icon: BookOpen,
  },
  {
    step: '03',
    title: 'Haftalık Takip',
    description:
      'Planın uygulanması haftalık olarak takip edilir, sapmalar anında müdahale ile düzeltilir.',
    icon: CalendarCheck,
  },
  {
    step: '04',
    title: 'Sınav Analizi',
    description:
      'Deneme sınavları detaylı analiz edilir, net artışı ve eksik konular raporlanır.',
    icon: LineChart,
  },
  {
    step: '05',
    title: 'Motivasyon',
    description:
      'Düzenli motivasyon görüşmeleri ile öğrencinin psikolojik dayanıklılığı desteklenir.',
    icon: Sparkles,
  },
  {
    step: '06',
    title: 'Yerleştirme',
    description:
      'Tercih danışmanlığı ile öğrencinin puanına en uygun lise, bölüm veya üniversite seçilir.',
    icon: GraduationCap,
  },
];

export interface GalleryImage {
  type: "image" | "video";
  src: string;
  alt: string;
  span?: string;
}

export const GALLERY: GalleryImage[] = [
  {
    type: "video",
    src: '/galeri_yeninesilakademi.mp4',
    alt: 'Yeni Nesil Akademi',
  },
  {
    type: "video",
    src: '/galeri_yeninesilakademi_1.mp4',
    alt: 'Yeni Nesil Akademi',
  },
  {
    type: "video",
    src: '/galeri_kütüphane.mp4',
    alt: 'Kütüphane',
  },
  {
    type: "video",
    src: '/galeri_eğitim_programı.mp4',
    alt: 'Eğitim Programı',
    
  },
  {
    type: "video",
    src: '/galeri_yeni_nesil_ders_çalışma.mp4',
    alt: 'Yeni nesil ders çalışma',
  },
  {
    type: "video",
    src: '/galeri_koçluk_sistemi.mp4',
    alt: 'Koçluk sistemi',
  },
  {
    type: "video",
    src: '/galeri_öğrenciler_çalışıyor.mp4',
    alt: 'Öğrenciler çalışıyor',
  },
  {
    type: "video",
    src: '/galeri_koçluk.mp4',
    alt: 'Akademik Koçluk',
  },
];

export interface BlogPost {
  title: string;
  category: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
}

export const ANNOUNCEMENT = {
  label: '',
  badge: 'Akademik Koçluk',
  text: 'Bireysel takip ile hedefe ulaş.',
};

export const BLOG_CATEGORIES = [
  'Tümü',
  'YKS',
  'TYT',
  'AYT',
  'LGS',
  'Yazılı Hazırlık',
  'Çalışma Teknikleri',
  'Motivasyon',
  'Sınav Psikolojisi',
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "LGS'ye Hazırlanmanın En Etkili Yolları",
    category: 'LGS',
    excerpt:
      "LGS'de başarıya ulaşmak için konu dağılımı, çalışma planı ve deneme stratejileri hakkında kapsamlı rehber.",
    content:
      "LGS'de başarıya ulaşmak için konu dağılımı, çalışma planı ve deneme stratejileri hakkında kapsamlı rehber.\n\nDüzenli tekrar, eksik konu analizi ve haftalık deneme sınavları ile öğrencilerimiz LGS sürecini planlı şekilde yönetir. Veli ve öğrenci birlikte hedef netleri belirleyerek ilerleme kaydeder.",
    date: '5 Temmuz 2025',
    readTime: '6 dk',
    image: '/blog_lgs_hazırlık.webp',
  },
  {
    title: 'LGS Matematik: Sıkça Yapılan Hatalar ve Çözümleri',
    category: 'LGS',
    excerpt:
      "LGS matematik sorularında öğrencilerin en çok düştüğü tuzaklar ve bunlardan kurtulmanın yolları.",
    content:
      "LGS matematik sorularında öğrencilerin en çok düştüğü tuzaklar ve bunlardan kurtulmanın yolları.\n\nİşlem hatası, süre yönetimi ve soru okuma dikkati en sık karşılaşılan problemlerdir. Konu tekrarı ile birlikte soru çözüm rutini oluşturmak net artışını hızlandırır.",
    date: '1 Temmuz 2025',
    readTime: '5 dk',
    image: '/blog_lgs_matematik.webp',
  },
  {
    title: 'TYT Matematikte Net Artırmanın 5 Altın Kuralı',
    category: 'TYT',
    excerpt:
      'Matematikte netlerinizi artırmak için uygulayabileceğiniz pratik ve etkili yöntemleri derledik.',
    content:
      'Matematikte netlerinizi artırmak için uygulayabileceğiniz pratik ve etkili yöntemleri derledik.\n\nTemel kavramları sağlamlaştırmak, günlük soru kotası belirlemek ve yanlış analizi yapmak TYT matematikte sürdürülebilir başarı sağlar.',
    date: '2 Temmuz 2025',
    readTime: '5 dk',
    image:
      '/blog_tyt_matematik.webp',
  },
  {
    title: 'AYT Edebiyat: Soru Çözüm Teknikleri',
    category: 'AYT',
    excerpt:
      'AYT edebiyat sorularını hızlı ve doğru çözmek için kullanabileceğiniz stratejileri açıklıyoruz.',
    content:
      'AYT edebiyat sorularını hızlı ve doğru çözmek için kullanabileceğiniz stratejileri açıklıyoruz.\n\nEser-şair eşleştirmeleri, dönem bilgisi ve paragraf sorularında ana fikir tespiti düzenli çalışmayla kalıcı hale gelir.',
    date: '28 Haziran 2025',
    readTime: '7 dk',
    image: '/blog_ayt_edebiyat.webp',
  },
  {
    title: 'Yazılı Sınavlara Nasıl Hazırlanmalısınız?',
    category: 'Yazılı Hazırlık',
    excerpt:
      'Dönem sonu yazılılarına sistematik hazırlanmak için uygulayabileceğiniz pratik bir plan.',
    content:
      'Dönem sonu yazılılarına sistematik hazırlanmak için uygulayabileceğiniz pratik bir plan.\n\nKonu özetleri, örnek soru çözümleri ve zamanlı tekrar programı ile yazılı haftasında stres azalır, performans artar.',
    date: '25 Haziran 2025',
    readTime: '6 dk',
    image: '/blog_sınavlara_hazırlık.webp',
  },
  {
    title: 'Sınav Kaygısıyla Başa Çıkmanın Yolları',
    category: 'Sınav Psikolojisi',
    excerpt:
      'Sınav kaygısı performansı düşüren en önemli etkenlerden biri. İşte onu yönetmenin yolları.',
    content:
      'Sınav kaygısı performansı düşüren en önemli etkenlerden biri. İşte onu yönetmenin yolları.\n\nNefes egzersizleri, gerçekçi hedef belirleme ve deneme sınavı alışkanlığı öğrencinin sınav anındaki özgüvenini güçlendirir.',
    date: '24 Haziran 2025',
    readTime: '6 dk',
    image: '/blog_sınav_kaygısı.webp',
  },
  {
    title: 'Verimli Çalışmanın Sırrı: Pomodoro Tekniği',
    category: 'Çalışma Teknikleri',
    excerpt:
      'Konsantrasyonu artıran ve verimi yükselten Pomodoro tekniğini nasıl uygulayabilirsiniz?',
    content:
      'Konsantrasyonu artıran ve verimi yükselten Pomodoro tekniğini nasıl uygulayabilirsiniz?\n\n25 dakika odaklanma ve 5 dakika mola döngüsü, uzun çalışma maratonlarında verimi korumanın en pratik yöntemlerinden biridir.',
    date: '20 Haziran 2025',
    readTime: '4 dk',
    image: '/blog_pomodore.webp',
  },
  {
    title: 'YKS Son Günlerde Yapılması Gerekenler',
    category: 'YKS',
    excerpt:
      'Sınava sayılı günler kala hem zihinsel hem de akademik olarak nasıl hazırlanmalısınız?',
    content:
      'Sınava sayılı günler kala hem zihinsel hem de akademik olarak nasıl hazırlanmalısınız?\n\nSon günlerde ağır konu çalışmak yerine tekrar, deneme analizi ve dinlenme dengesi kurmak sınav performansını optimize eder.',
    date: '15 Haziran 2025',
    readTime: '8 dk',
    image: '/blog_yapılacaklar.webp',
  },
  {
    title: 'Motivasyonu Yüksek Tutmanın 7 Yolu',
    category: 'Motivasyon',
    excerpt:
      'Uzun ve yorucu hazırlık sürecinde motivasyonunuzu nasıl koruyabilirsiniz? İşte ipuçları.',
    content:
      'Uzun ve yorucu hazırlık sürecinde motivasyonunuzu nasıl koruyabilirsiniz? İşte ipuçları.\n\nKüçük hedefler belirlemek, ilerlemeyi görünür kılmak ve düzenli geri bildirim almak motivasyonu yüksek tutmanın temel adımlarıdır.',
    date: '10 Haziran 2025',
    readTime: '5 dk',
    image: '/blog_motivasyon.webp',
  },
];

export interface FAQ {
  question: string;
  answer: string;
}

export const FAQS: FAQ[] = [
  {
    question: 'Kayıt için hangi belgeler gereklidir?',
    answer:
      'Kayıt için öğrenci kimlik belgesi, veli kimlik belgesi yeterlidir.',
  },
  {
    question: 'Deneme sınavları ne sıklıkla yapılıyor?',
    answer:
      'Türkiye geneli deneme sınavları her hafta düzenli olarak yapılmaktadır. Ayrıca ayda bir tam zamanlı genel deneme sınavı uygulanır.',
  },
  {
    question: 'Birebir ders desteği var mı?',
    answer:
      'Evet. İhtiyaç duyulan branşlarda eğitmenlerle birebir destek seansları düzenlenebilir. Bu hizmet paketinize eklenebilir.',
  },
  {
    question: 'Veli bilgilendirme sistemi nasıl çalışır?',
    answer:
      'Veli, eğitim danışmanımız tarafından iletişim sağlayarak ve dijital panel üzerinden öğrencinin devam durumu, sınav sonuçları ve gelişim raporlarını anlık olarak takip edebilir.',
  },
  {
    question: 'Deneme sınavı analiz raporu alıyor muyum?',
    answer:
      'Her deneme sınavı sonrasında detaylı analiz raporu hazırlanır. Net artışı, eksik konular ve hedef puan karşılaştırması raporlanır.',
  },
  {
    question: 'Online ders seçeneği var mı?',
    answer:
      'Evet, istek durumuna ve ihtiyaca göre programlarımız online olarak da sunulabilmektedir. Online derslerimiz canlı ve etkileşimli olarak yapılmaktadır.',
  },
  {
    question: 'Mezun grubu için özel program var mı?',
    answer:
      'Evet, mezun öğrenciler için esnek saatli ve yoğun içerikli özel hazırlık programımız mevcuttur. Detaylar için bizimle iletişime geçin.',
  },
];

export const AI_SUGGESTIONS = [
  'Programlar hakkında bilgi al',
  'Kayıt süreci nasıl işliyor?',
  'Deneme sınavları ne zaman?',
  'Ücretler hakkında bilgi al',
];

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  active: boolean;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    title: "",
    subtitle: "",
    image: "/hero_2027_yks_2.webp",
    buttonText: "",
    buttonLink: "",
    active: true,
  },

  {
    id: 2,
    title: "BİREBİR EĞİTİM KOÇLUĞU",
    subtitle: "",
    image: "/hero_birebir_ozel_ders.webp",
    buttonText: "",
    buttonLink: "/programlar",
    active: true,
  },

  {
    id: 3,
    title: "DENEME SINAVLARI VE ANALİZLER",
    subtitle:
      "",
    image: "/hero_deneme_kulubu.webp",
    buttonText: "",
    buttonLink: "",
    active: true,
  },

  {
    id: 4,
    title: "",
    subtitle: "",
    image: "/hero_kisiye_ozel.webp",
    buttonText: "",
    buttonLink: "/iletisim",
    active: true,
  },

  {
    id: 5,
    title: "",
    subtitle: "",
    image: "/hero_10_ve_11_siniflar_avantaj.webp",
    buttonText: "",
    buttonLink: "",
    active: true,
  },

  {
    id: 6,
    title: "",
    subtitle: "",
    image: "/hero_11_ve_12_siniflar_icin.webp",
    buttonText: "",
    buttonLink: "",
    active: true,
  },

  {
    id: 7,
    title: "",
    subtitle: "",
    image: "/hero_2027_yks.webp",
    buttonText: "",
    buttonLink: "",
    active: true,
  },

  {
    id: 8,
    title: "",
    subtitle: "",
    image: "/hero_hosgeldiniz.webp",
    buttonText: "",
    buttonLink: "",
    active: true,
  },

  {
    id: 9,
    title: "",
    subtitle: "",
    image: "/hero_kutuphane.webp",
    buttonText: "",
    buttonLink: "",
    active: true,
  }

];
