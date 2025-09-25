import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    'nav.switchToArabic': 'العربية',
    'nav.aboutUs': 'About Us',
    
    // Hero
    'hero.welcome': 'Welcome to NEJMT HOUR Café',
    'hero.description': 'Experience the finest coffee blends in a warm, welcoming atmosphere. Every cup tells a story.',
    'hero.orderNow': 'Order Now',
    'hero.ourMenu': 'Our Menu',
    
    // Menu
    'menu.title': 'Our Menu',
    'menu.subtitle': 'Discover our carefully crafted beverages and treats',
    'menu.sub-heading-1': 'Cold Drinks',
    'menu.sub-heading-2': 'Hot Drinks',
    'menu.sub-heading-3': 'Desserts',
    'menu.sub-heading-4': 'Juices',
    'menu.sub-heading-5': 'Soda Drinks',
    'menu.calories': 'cal',
    'menu.sar': 'SAR',
    
    // Products
    // وصف المنتجات
    // 'menu.single': 'Americano',
    // 'menu.americano.desc': 'Rich espresso with hot water',
    // 'menu.cappuccino': 'Cappuccino',
    // 'menu.cappuccino.desc': 'Espresso with steamed milk foam',
    // 'menu.latte': 'Café Latte',
    // 'menu.latte.desc': 'Smooth espresso with steamed milk',
    // 'menu.mocha': 'Mocha',
    // 'menu.mocha.desc': 'Chocolate espresso delight',
    // 'menu.macchiato': 'Macchiato',
    // 'menu.macchiato.desc': 'Espresso marked with milk foam',
    // 'menu.frappuccino': 'Frappuccino',
    // 'menu.frappuccino.desc': 'Iced coffee blended perfection',
    
    // About Us
    'about.title': 'About Us',
    'about.subtitle': 'A story of coffee passion and authentic Arabian hospitality',
    'about.storyTitle': 'Our Story',
    'about.storyP1': 'NEJMT HOUR Café was born from a deep passion for authentic Arabic coffee and a desire to create an exceptional coffee experience. We believe that every cup of coffee tells a story, and our story begins with the finest, carefully selected coffee beans.',
    'about.storyP2': 'In our café, we blend authentic Arabian heritage with modernity, creating a warm and welcoming space where guests can enjoy the finest coffee and hot beverages.',
    'about.storyExtra': "In a quiet corner of the Al-Zohour neighborhood you'll find a cozy café calling you with warmth ☕🤎. Here, we craft your most beautiful moments with company, comfort, and calm — where the aroma of coffee meets the spirit of the place.",
    'about.connectTitle': 'Connect With Us',
    'about.connectSubtitle': 'Stay connected and discover our latest news and special offers',
    'about.contactInfo': 'Contact Information',
    'about.followUs': 'Follow Us',
    'about.hoursTitle': 'Work Hours',
    'about.hoursValue': 'Open from 6:30 AM to 3:00 AM',
    'about.socialDescription': 'Follow us on social media for the latest news and special offers.',
    'about.address': 'Address',
    'about.phone': 'Phone',
    'about.Facebook': 'Facebook',
    'about.Instagram': 'Instagram',
    'about.TikTok': 'TikTok',
    'about.visitUs': 'Visit Our Café',
    'about.visitDescription': 'We invite you to visit our café and enjoy an unforgettable coffee experience in a comfortable and warm atmosphere.',
    'about.findUs': 'Find Us',
    'about.addressValue': 'Dammam - Al-Zohour District - Abu Hurairah Street',
    
    // Footer
    'footer.copyright': '© 2025 NEJMT HOUR Café. All rights reserved.',
  },
  ar: {
    // Navbar
    'nav.switchToArabic': 'English',
    'nav.aboutUs': 'من نحن',
    
    // Hero
    'hero.welcome': 'مرحباً بكم في مقهى نجمة حور',
    'hero.description': 'استمتع بأجود خلطات القهوة في أجواء دافئة ومرحبة. كل كوب يحكي قصة.',
    'hero.orderNow': 'اطلب الآن',
    'hero.ourMenu': 'قائمتنا',
    
    // Menu
    'menu.title': 'قائمتنا',
    'menu.subtitle': 'اكتشف مشروباتنا وحلوياتنا المحضرة بعناية',
    'menu.sub-heading-1': 'مشروبات باردة',
    'menu.sub-heading-2': 'مشروبات ساخنة',
    'menu.sub-heading-3': 'حلويات',
    'menu.sub-heading-4': 'عصائر',
    'menu.sub-heading-5': 'مشروبات صودا',
    'menu.calories': 'سعر حراري',
    'menu.sar': 'ريال',
    
    // Products
    // مشروبات ساخنه
    'menu.single Espresso': 'اسبريسو سينجل',
    'menu.Double Espresso': 'اسبريسو دبل',
    'menu.Today\'s coffee': 'قهوة اليوم',
    'menu.Latte': 'لاتيه',
    'menu.Cappuccino': 'كابيتشينو',
    'menu.Flat White': 'فلات وايت',
    'menu.Cortado': 'كورتادو',
    'menu.Americano': 'امريكانو',
    'menu.Caramel Macchiato': 'كراميل ماكياتو',
    'menu.Spanish Latte': 'سبانيش لاتيه',
    'menu.Pistachio Latte':'بيستاشيو لاتيه',
    'menu.White Mocha': 'وايت موكا',
    'menu.V60': 'V60',
    'menu.Matcha': 'ماتشا',
    'menu.Salted Caramel': 'سولتد كراميل',
    'menu.Hot Chocolate': 'هوت شوكليت',
    'menu.Turkish Coffee': 'قهوه تركي',
    'menu.French Coffee': 'قهوه فرنساوي',
    'menu.English Red Tea': 'شاي انجليزي أحمر',
    'menu.English Green Tea': 'شاي انجليزي أخضر',
    'menu.Tea': 'شاي',
    'menu.Tea With Milk': 'شاي حليب',
    'menu.Anise': 'ينسون',
    'menu.Sahlab': 'سحلب',
    'menu.Ginger': 'زنجبيل',
    'menu.Ginger With Milk': 'زنجبيل حليب',
    'menu.Ginger With Lemon': 'زنجبيل ليمون',
    'menu.Cinnamon': 'قرفة',
    'menu.Hibiscus': 'كركديه',


    // مشروبات بارده
    'menu.Ice Latte': 'ايس لاتيه',
    'menu.Today\'s coffee': 'قهوة اليوم',
    'menu.Ice Americano': 'ايس أمريكانو',
    'menu.Ice Signature Latte': 'ايس سيجنتشر لاتيه',
    'menu.Ice pistachio latte': 'ايس بستاشيو لاتيه',
    'menu.Ice Shaken Nijma Hour': 'ايس شيكن نجمه حور',
    'menu.Iced White Mocha': 'ايس وايت موكا',
    'menu.Salted Caramel': 'سولتد كراميل',
    'menu.Cold Matcha': 'ماتشا بارد',
    'menu.Iced V60': '  ايس V60',
  // 'menu.Spanish Latte' already defined above
    'menu.Iced Caramel Macchiato': 'ايس كراميل ماكياتو',
    'menu.Mocha Frappuccino': 'موكا فرابتشينو',
    'menu.Caramyl Frappuccino': 'كراميل فرابتشينو',
    'menu.Strawberry Mojito': 'موهيتو فراولة',
    'menu.Lemon Mint Mojito': 'موهيتو ليمون نعناع',
    'menu.Peach Mojito': 'موهيتو خوخ',
    'menu.Berry Mojito': 'موهيتو توت',
    'menu.Pomegranate Mojito': 'موهيتو رمان',
    'menu.Passion Fruit mojito': 'موهيتو باشن فروت',
    'menu.Red Code Mojito': 'موهيتو كود رد',
    'menu.Kenza Cola': 'كينزا كولا',
    'menu.Kinza Orange': 'كينزا برتقال',
    'menu.Kinza Citrus': 'كينزا حمضيات',
    'menu.Pepsi': 'بيبسي',
    'menu.Diet Pepsi': 'بيبسي دايت',
    'menu.Duet': 'ديو',
    'menu.Mirinda': 'ميراندا',
    'menu.Citrus': 'حمضيات',
    'menu.7Up': 'سفن أب',
    'menu.Diet 7Up': 'سفن أب دايت',
    'menu.Code Red': 'كود رد',
    'menu.Barely Moussy': 'موسي شعير',
    'menu.Pomegranate Moussy': 'موسي رمان',
    'menu.Apple Moussy': 'موسي تفاح',
    'menu.Lemon Mint Moussy': 'موسي ليمون نعناع',
    'menu.Water': 'مياه',
    'menu.Mango': 'مانجو',
    'menu.Strawberry': 'فراولة',
    'menu.Orange': 'برتقال',
    'menu.Avocado': 'أفوكادو',
    'menu.Mina Colada': 'مينا كولادا _ أناناس جوز الهند',
    'menu.Watermelon': 'بطيخ',
    'menu.Banana With Milk': 'موز حليب',
    'menu.Mint Lemon': 'ليمون نعناع',
  // 'menu.Hibiscus' already defined above
   

    // ماكولات 
    'menu.Shedder Croissant': 'كرواسون جبنة شيدر',
    'menu.croissant': ' كرواسون ساده',
    'menu.Thyme croissant': 'كرواسون زعتر',
    'menu.Chocolate croissant': 'كرواسون شيكولاته',
    'menu.Cheese Cake': 'تشيز كيك',
    'menu.Vanilla Cookies': 'كوكيز فانيليا',
    'menu.Chocolate Cookies': 'كوكيز شيكولاته',
    'menu.Chocolate Muffin': 'مافن شيكولاته',
    'menu.Blueberry Muffin': 'مافن توت ازرق',
    'menu.Fruit Salade': 'سلطة فواكه',
    'menu.Ice Cream': 'آيس كريم',
    'menu.Om Ali': 'أم علي',
    'menu.Milk Rice': 'أرز بحليب',
    'menu.Waffle': 'وافل',
    'menu.Pancake': 'بان كيك',
    'menu.Sweat Crepe': 'كريب حلو',
    'menu.Oreo Cups': ' حلي كاسات اوريو',
    'menu.Nutella Cups': ' حلي كاسات نوتيلا',
    'menu.Honey Cups': ' حلي كاسات العسل',
    'menu.Mango Cups': ' حلي كاسات مانجو',
    'menu.Red Velvet Cups': 'حلي كاسات رد فيلفيت',





    // About Us
    'about.title': 'من نحن',
    'about.subtitle': 'قصة شغف القهوة والضيافة العربية الأصيلة',
    'about.storyTitle': 'قصتنا',
    'about.storyP1': 'تأسس مقهى نجمة حور من شغف عميق بالقهوة العربية الأصيلة والرغبة في تقديم تجربة قهوة استثنائية. نحن نؤمن بأن كل كوب قهوة يحكي قصة، وقصتنا تبدأ مع أجود حبوب القهوة المختارة بعناية.',
    'about.storyP2': 'في مقهانا، نمزج بين التراث العربي الأصيل والحداثة، لنخلق مساحة دافئة ومرحبة حيث يمكن للضيوف الاستمتاع بأفضل أنواع القهوة والمشروبات الساخنة.',
    'about.storyExtra': 'في إحدى زوايا حي الزهور ستجدون مقهًى لطيفًا يناديكم بكل دفء ☕🤎. هنا، نصنع لحظاتكم الأجمل مع الصحبة، الونس، والرواق، حيث يلتقي عبق القهوة مع روح المكان',
    'about.connectTitle': 'تواصل معنا',
    'about.connectSubtitle': 'ابقَ على تواصل معنا واكتشف آخر أخبارنا وعروضنا الخاصة',
    'about.contactInfo': 'معلومات الاتصال',
    'about.followUs': 'تابعنا',
    'about.hoursTitle': 'مواعيد العمل',
    'about.hoursValue': 'المواعيد من 6.30 صباحا الى 3 صباحا',
    'about.socialDescription': 'تابعنا على وسائل التواصل الاجتماعي للحصول على آخر الأخبار والعروض الخاصة.',
    'about.address': 'العنوان',
    'about.phone': 'الهاتف',
    'about.email': 'البريد الإلكتروني',
    'about.Facebook': 'فيسبوك',
    'about.Instagram': 'إنستغرام',
    'about.TikTok': 'تيك توك',
    'about.visitUs': 'زوروا مقهانا',
    'about.visitDescription': 'ندعوكم لزيارة مقهانا والاستمتاع بتجربة قهوة لا تُنسى في أجواء مريحة ودافئة.',
    'about.findUs': 'اعثر علينا',
    'about.addressValue': 'الدمام-حي الزهور-شارع ابو هريرة',
    
    // Footer
    'footer.copyright': '© ٢٠٢٥ مقهى نجمة حور. جميع الحقوق محفوظة.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Set HTML dir and lang attributes
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    const locale = translations[language] as Record<string, string>;
    // Try the key as-is, then try with a 'menu.' prefix to support both styles
    if (typeof locale[key] === 'string') return locale[key];
    const prefixed = `menu.${key}`;
    if (typeof locale[prefixed] === 'string') return locale[prefixed];
    // Try a variant where the first character is lowercased (handles keys like 'menu.single Espresso')
    if (key.length > 0) {
      const firstLower = `menu.${key.charAt(0).toLowerCase()}${key.slice(1)}`;
      if (typeof locale[firstLower] === 'string') return locale[firstLower];
    }
    // Try fully lowercased menu key
    const lowerAll = `menu.${key.toLowerCase()}`;
    if (typeof locale[lowerAll] === 'string') return locale[lowerAll];

    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}