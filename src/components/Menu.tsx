import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import {berrycheesecake, bluemohito, cheesecake, cheesecakestraw, chocolatecake, spanishlatte, hotcaramyl,
  chocolatecake2, chocolatecookies, pomemohito, kenzaorange, kenzalemon, flatwhite, cortado, frenchcoffee,
  cookies2, cupcake, mohito, mohito2, redmohito, strawberry, whitemohito, cappuchino, hotchocolate, englishtea,
  espresso, americanoice, creamercoffee,peachmohito, kenzacola, mango, lemon, mintlemon, hotv60, greentea,
  coffee, caramylcoffee, coldhebisicus, icesignature, pistachio, whitemocha, watermelon, pistachiolatte, ginger,
  saltedcaramyl, macha, v60, creamer2, caramylfrappe, water, orange, avocado, pinacolada, turkishcoffee, sahlab,
  americano, tea, milktea, anise, gingermilk, gingerlemon, cinnamon
} from "@/assets/index";
import { useState } from 'react';

interface MenuItem {
  id: string;
  nameKey: string;
  descKey?: string;
  calories: string;
  price: number;
  image: string;
}

const menuItems: MenuItem[] = [
  // ساخن
  {
    id: '1',
    nameKey: 'Single Espresso',
    // descKey: 'menu.single',
    calories: "10-20",
    price: 8 ,
    image: creamer2
  },
  {
    id: '2',
    nameKey: 'Double Espresso',
    // descKey: 'menu.Double Espresso',
    calories: "5-10",
    price: 10,
    image: creamercoffee
  },
  {
    id: '3',
    nameKey: 'Today\'s coffee',
    // descKey: 'menu.Today\'s coffee',
    calories: "5-15",
    price: 7,
    image: coffee
  },
  {
    id: '4',
    nameKey: 'Latte',
    // descKey: 'menu.mocha.desc',
    calories: "120-170",
    price: 13,
    image: creamer2
  },
  {
    id: '5',
    nameKey: 'Cappuccino',
    // descKey: 'menu.macchiato.desc',
    calories: "100-150",
    price: 13,
    image: cappuchino
  },
  {
    id: '6',
    nameKey: 'Flat White',
    // descKey: 'menu.frappuccino.desc',
    calories: "120-160",
    price: 13,
    image: flatwhite
  },  {
    id: '7',
    nameKey: 'Cortado',
    // descKey: 'menu.frappuccino.desc',
    calories: "60-80",
    price: 12,
    image: cortado
  },  {
    id: '8',
    nameKey: 'Americano',
    // descKey: 'menu.frappuccino.desc',
    calories: "10-20",
    price: 9,
    image: americano
  },  {
    id: '9',
    nameKey: 'Caramel Macchiato',
    // descKey: 'menu.frappuccino.desc',
    calories: "220-280",
    price: 14,
    image: hotcaramyl
  },  {
    id: '10',
    nameKey: 'Spanish Latte',
    // descKey: 'menu.frappuccino.desc',
    calories: "220-300",
    price: 14,
    image: spanishlatte
  },  {
    id: '11',
    nameKey: 'Pistachio Latte',
    // descKey: 'menu.frappuccino.desc',
    calories: "250-320",
    price: 15,
    image: pistachiolatte
  },  {
    id: '12',
    nameKey: 'White Mocha',
    // descKey: 'menu.frappuccino.desc',
    calories: "250-320",
    price: 14,
    image: whitemocha
  },  {
    id: '13',
    nameKey: 'V60',
    // descKey: 'menu.frappuccino.desc',
    calories: "5-15",
    price: 11,
    image: hotv60
  },  {
    id: '14',
    nameKey: 'Flat White',
    // descKey: 'menu.frappuccino.desc',
    calories: "120-160",
    price: 13,
    image: flatwhite
  },  {
    id: '15',
    nameKey: 'Matcha',
    // descKey: 'menu.frappuccino.desc',
    calories: "200-260",
    price: 14,
    image: macha
  },  {
    id: '16',
    nameKey: 'Salted Caramel',
    // descKey: 'menu.frappuccino.desc',
    calories: "250-330",
    price: 15,
    image: saltedcaramyl
  },  {
    id: '17',
    nameKey: 'Hot Chocolate',
    // descKey: 'menu.frappuccino.desc',
    calories: "280-350",
    price: 12,
    image: hotchocolate
  },  {
    id: '18',
    nameKey: 'Turkish Coffee',
    // descKey: 'menu.frappuccino.desc',
    calories: "30-50",
    price: 8,
    image: turkishcoffee
  },  {
    id: '19',
    nameKey: 'French Coffee',
    // descKey: 'menu.frappuccino.desc',
    calories: "180-220",
    price: 10,
    image: frenchcoffee
  },  {
    id: '20',
    nameKey: 'English Red Tea',
    // descKey: 'menu.frappuccino.desc',
    calories: "0-5",
    price: 4,
    image: englishtea
  },  {
    id: '21',
    nameKey: 'English Green Tea',
    // descKey: 'menu.frappuccino.desc',
    calories: "0-5",
    price: 4,
    image: greentea
  },  {
    id: '22',
    nameKey: 'Tea',
    // descKey: 'menu.frappuccino.desc',
    calories: "0-5",
    price: 3,
    image: tea
  },  {
    id: '23',
    nameKey: 'Tea With Milk',
    // descKey: 'menu.frappuccino.desc',
    calories: "120-180",
    price: 4,
    image: milktea
  },  {
    id: '24',
    nameKey: 'Anise',
    // descKey: 'menu.frappuccino.desc',
    calories: "0-5",
    price: 4,
    image: anise
  },  {
    id: '25',
    nameKey: 'Sahlab',
    // descKey: 'menu.frappuccino.desc',
    calories: "180-240",
    price: 10,
    image: sahlab
  },  {
    id: '26',
    nameKey: 'Ginger',
    // descKey: 'menu.frappuccino.desc',
    calories: "130-190",
    price: 5,
    image: ginger
  },  {
    id: '27',
    nameKey: 'Ginger With Milk',
    // descKey: 'menu.frappuccino.desc',
    calories: "0-5",
    price: 6,
    image: gingermilk
  },  {
    id: '28',
    nameKey: 'Ginger With Lemon',
    // descKey: 'menu.frappuccino.desc',
    calories: "5-10",
    price: 5,
    image: gingerlemon
  },{
    id: '29',
    nameKey: 'Cinnamon',
    // descKey: 'menu.frappuccino.desc',
    calories: "0-5",
    price: 5,
    image: cinnamon
  }
];

// بارد
const cold =
[
  {
    id: '1',
    nameKey: 'Ice Latte',
    // descKey: 'menu.frappuccino.desc',
    calories: "120-170",
    price: 13,
    image: creamercoffee,
    },{
    id: '2',
    nameKey: 'Today\'s coffee',
    // descKey: 'menu.frappuccino.desc',
    calories: "5-15",
    price: 7,
    image: coffee
  },{
    id: '3',
    nameKey: 'Ice Americano',
    // descKey: 'menu.frappuccino.desc',
    calories: "10-20",
    price: 9,
    image: americanoice
  },{
    id: '4',
    nameKey: 'Ice Signature Latte',
    // descKey: 'menu.frappuccino.desc',
    calories: "180-320",
    price: 15,
    image: icesignature
  },{
    id: '5',
    nameKey: 'Ice pistachio latte',
    // descKey: 'menu.frappuccino.desc',
    calories: "250-320",
    price: 15,
    image: pistachio
  },{
    id: '6',
    nameKey: 'caramylcoffee',
    // descKey: 'menu.frappuccino.desc',
    calories: "280-350",
    price: 16,
    image: caramylcoffee
  },{
    id: '7',
    nameKey: 'Iced White Mocha',
    // descKey: 'menu.frappuccino.desc',
    calories: "250-330",
    price: 14,
    image: whitemocha
  },{
    id: '8',
    nameKey: 'Salted Caramel',
    // descKey: 'menu.frappuccino.desc',
    calories: "5-15",
    price: 14,
    image: saltedcaramyl
  },{
    id: '9',
    nameKey: 'Cold Matcha',
    // descKey: 'menu.frappuccino.desc',
    calories: "220-300",
    price: 15,
    image: macha
  },{
    id: '10',
    nameKey: 'Iced V60',
    // descKey: 'menu.frappuccino.desc',
    calories: "300-380",
    price: 11,
    image: v60
  },{
    id: '11',
    nameKey: 'Spanish Latte',
    // descKey: 'menu.frappuccino.desc',
    calories: "230-300",
    price: 14,
    image: creamer2
  },{
    id: '12',
    nameKey: 'Iced Caramel Macchiato',
    // descKey: 'menu.frappuccino.desc',
    calories: "100-140",
    price: 14,
    image: caramylcoffee
  },{
  id: '13',
    nameKey: 'Mocha Frappuccino',
    // descKey: 'menu.frappuccino.desc',
    calories: "100-140",
    price: 14,
    image: icesignature
  },{
    id: '14',
    nameKey: 'Caramyl Frappuccino',
    // descKey: 'menu.frappuccino.desc',
    calories: "110-150",
    price: 14,
    image: caramylfrappe
  },{
    id: '15',
    nameKey: 'Strawberry Mojito',
    // descKey: 'menu.frappuccino.desc',
    calories: "110-150",
    price: 13,
    image: redmohito
  },{
    id: '16',
    nameKey: 'Lemon Mint Mojito',
    // descKey: 'menu.frappuccino.desc',
    calories: "158",
    price: 13,
    image: whitemohito
  },{
    id: '17',
    nameKey: 'Peach Mojito',
    // descKey: 'menu.frappuccino.desc',
    calories: "146",
    price: 13,
    image: peachmohito
  },{
    id: '18',
    nameKey: 'Berry Mojito',
    // descKey: 'menu.frappuccino.desc',
    calories: "186",
    price: 13,
    image: bluemohito
  },{
    id: '19',
    nameKey: 'Pomegranate Mojito',
    // descKey: 'menu.frappuccino.desc',
    calories: "80-120",
    price: 13,
    image: pomemohito
  },{
    id: '20',
    nameKey: 'Passion Fruit mojito',
    // descKey: 'menu.frappuccino.desc',
    calories: "156",
    price: 13,
    image: whitemohito
  },{
    id: '21',
    nameKey: 'Hibiscus',
    // descKey: 'menu.frappuccino.desc',
    calories: "40-60",
    price: 5,
    image: coldhebisicus
  },{
    id: '22',
    nameKey: 'Red Code Mojito',
    // descKey: 'menu.frappuccino.desc',
    calories: "0",
    price: 17,
    image: redmohito
  },
  {
    id: '23',
    nameKey: 'Water',
    // descKey: 'menu.water.desc',
    calories: "0",
    price: 1,
    image: water
  }
  // items above id 25 were trimmed here; soda and juice sections are defined separately below
];


// مأكولات — use translation keys from LanguageContext
const food = [
  { id: '1', nameKey: 'Shedder Croissant', calories: '345', price: 5, image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=400&h=300&fit=crop' },
  { id: '2', nameKey: 'croissant', calories: '305', price: 5, image: 'https://images.unsplash.com/photo-1546549030-c3b5b6a4b5c1?w=400&h=300&fit=crop' },
  { id: '3', nameKey: 'Thyme croissant', calories: '345', price: 5, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop' },
  { id: '4', nameKey: 'Chocolate croissant', calories: '370', price: 5, image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&h=300&fit=crop' },
  { id: '5', nameKey: 'Cheese Cake', calories: '350-410', price: 15, image: 'https://images.unsplash.com/photo-1542444459-db63f6d3f2d1?w=400&h=300&fit=crop' },
  { id: '6', nameKey: 'Vanilla Cookies', calories: '650-725', price: 8, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55f78?w=400&h=300&fit=crop' },
  { id: '7', nameKey: 'Chocolate Cookies', calories: '389', price: 8, image: 'https://images.unsplash.com/photo-1606756799130-8ce4d05f6a52?w=400&h=300&fit=crop' },
  { id: '8', nameKey: 'Chocolate Muffin', calories: '350-450', price: 8, image: 'https://images.unsplash.com/photo-1542834369-f10ebf06d3cb?w=400&h=300&fit=crop' },
  { id: '9', nameKey: 'Blueberry Muffin', calories: '350-450', price: 8, image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop' },
  { id: '10', nameKey: 'Fruit Salade', calories: '120-200', price: 13, image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=300&fit=crop' },
  { id: '11', nameKey: 'Ice Cream', calories: '150-250', price: 10, image: 'https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?w=400&h=300&fit=crop' },
  { id: '12', nameKey: 'Om Ali', calories: '218', price: 12, image: 'https://images.unsplash.com/photo-1604909053221-4d7f6f2b9a1b?w=400&h=300&fit=crop' },
  { id: '13', nameKey: 'Milk Rice', calories: '320', price: 10, image: 'https://images.unsplash.com/photo-1604908813198-5b2b5a0b4c3a?w=400&h=300&fit=crop' },
  { id: '14', nameKey: 'Waffle', calories: '350-410', price: 16, image: 'https://images.unsplash.com/photo-1546549030-c3b5b6a4b5c1?w=400&h=300&fit=crop' },
  { id: '15', nameKey: 'Pancake', calories: '90-100', price: 15, image: 'https://images.unsplash.com/photo-1509475826633-fed577a2c71b?w=400&h=300&fit=crop' },
  { id: '16', nameKey: 'Sweat Crepe', calories: '300-500', price: 16, image: 'https://images.unsplash.com/photo-1511688878356-3b6f6a3a4dd7?w=400&h=300&fit=crop' },
  { id: '17', nameKey: 'Oreo Cups', calories: '420-480', price: 10, image: 'https://images.unsplash.com/photo-1589308078053-6c57b3b9b6c0?w=400&h=300&fit=crop' },
  { id: '18', nameKey: 'Nutella Cups', calories: '430-500', price: 10, image: 'https://images.unsplash.com/photo-1606312619346-0f2d6b4b8e7b?w=400&h=300&fit=crop' },
  { id: '19', nameKey: 'Honey Cups', calories: '350-420', price: 10, image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&h=300&fit=crop' },
  { id: '20', nameKey: 'Mango Cups', calories: '300-360', price: 10, image: 'https://images.unsplash.com/photo-1589307002192-9a3d9c8b7b3a?w=400&h=300&fit=crop' },
  { id: '21', nameKey: 'Red Velvet Cups', calories: '430-500', price: 10, image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=400&h=300&fit=crop' }
];

// عصائر / Juices — dedicated juices section
const juices: MenuItem[] = [
  { id: '39', nameKey: 'Mango', calories: "150-180", price: 14, image: mango },
  { id: '40', nameKey: 'Strawberry', calories: "120-150", price: 14, image: strawberry },
  { id: '41', nameKey: 'Orange', calories: "110-140", price: 11, image: orange},
  { id: '42', nameKey: 'Avocado', calories: "220-280", price: 15, image: avocado },
  { id: '43', nameKey: 'Pina Colada', calories: "180-220", price: 16, image: pinacolada },
  { id: '44', nameKey: 'Watermelon', calories: "150-170", price: 10, image: watermelon },
  { id: '45', nameKey: 'Banana With Milk', calories: "80-110", price: 11, image: lemon },
  { id: '46', nameKey: 'Mint Lemon', calories: "220-280", price: 11, image: mintlemon },
  { id: '47', nameKey: 'Hibiscus', calories: "100-140", price: 10, image: coldhebisicus}
];

// صودا / Sodas — separated from cold drinks (including some desserts moved here)
const sodas: MenuItem[] = [
  { id: '23',nameKey: 'Kenza Cola',calories: "157", price:4, image: kenzacola},
  {id: '24', nameKey: 'Kinza Orange', calories: "6", price: 4, image: kenzaorange },
  {id: '25', nameKey: 'Kinza Citrus', calories: "61", price: 4, image: kenzalemon},
  { id: '26', nameKey: 'Pepsi', calories: "156", price: 5, image: creamercoffee },
  { id: '27', nameKey: 'Diet Pepsi', calories: "0", price: 5, image: creamer2},
  { id: '28', nameKey: 'Duet', calories: "158", price: 5, image: coffee},
  { id: '29', nameKey: 'Miranda', calories: "179", price: 5, image: creamercoffee },
  { id: '30', nameKey: 'Citrus', calories: "179", price: 5, image: cappuchino },
  { id: '31', nameKey: '7Up', calories: "157", price: 5, image: flatwhite },
  { id: '32', nameKey: 'Diet 7Up', calories: "6", price: 5, image: cortado },
  { id: '33', nameKey: 'Red Code', calories: "61", price: 7, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop' },
  
  
  
  // desserts moved into sodas
  { id: '34', nameKey: 'Barely Mousse', calories: "17", price: 8, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop' },
  { id: '35', nameKey: 'Pomegranate Mousse', calories: "40", price: 8, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop' },
  { id: '36', nameKey: 'Apple Mousse', calories: "19", price: 8, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop' },
  { id: '37', nameKey: 'Lemon Mint Mousse', calories: "39", price: 8, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop' }
];

// Group sections: hot (original `menuItems`), cold and food
interface MenuSection {
  id: string;
  titleKey: string;
  items: MenuItem[];
}

const menuSections: MenuSection[] = [
  {
    id: 'hot',
    // Hot drinks should use sub-heading-2
    titleKey: 'menu.sub-heading-2',
    items: menuItems
  },
  {
    id: 'cold',
    // Cold drinks should use sub-heading-1
    titleKey: 'menu.sub-heading-1',
    items: cold
  },
  {
    id: 'juices',
    // Juices
    titleKey: 'menu.sub-heading-4',
    items: juices
  },
  {
    id: 'sodas',
    // Sodas
    titleKey: 'menu.sub-heading-5',
    items: sodas
  },
  {
    id: 'food',
    // Food should use sub-heading-3
    titleKey: 'menu.sub-heading-3',
    items: food
  }
]


export function Menu() {
  const { language, t } = useLanguage();
  // Default to the first section on initial load; when no section is selected show none
  const [selectedSection, setSelectedSection] = useState<string | null>(menuSections[0]?.id ?? null);
  const sectionsToShow = selectedSection ? menuSections.filter(s => s.id === selectedSection) : [];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold text-coffee-dark mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t('menu.title')}
          </h2>
          <p className={`text-xl text-coffee-medium max-w-2xl mx-auto ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t('menu.subtitle')}
          </p>
        </motion.div>
{/*  menu sub heading (clickable chips that scroll to each section) */}
  <div id="menu-chips" className='grid sm:grid-cols-1 md:grid-cols-2 md:gap-2  lg:gap-[40px] mt-[-20px] 
             md:flex md:flex-row md:flex-wrap items-center justify-center '>
          {menuSections.map((sec) => {
            const active = selectedSection === sec.id;
            return (
              <motion.div
                key={sec.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                role="button"
                tabIndex={0}
                aria-pressed={active}
                onClick={() => setSelectedSection(active ? null : sec.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedSection(active ? null : sec.id);
                  }
                }}
                className={`flex text-center items-center justify-center mb-16 px-5 py-2 cursor-pointer bg-gradient-to-r from-[#d9c7ac] to-[#f1ebe2] shadow-xl 
                       rounded-full mx-[2px] border-2 transition-all duration-300 ${active ? 'border-[#633e1a] scale-105' : 'border-transparent hover:border-[#633e1a]'}`}
              >
                <h2 className={`text-2xl md:text-3xl font-bold text-coffee-dark mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {t(sec.titleKey)}
                </h2>
              </motion.div>
            );
          })}
        </div>

        {/* sections: Hot, Cold, Food */}
        {sectionsToShow.map((section) => (
          <section id={section.id} key={section.id} className="mb-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h3 className={`text-3xl font-semibold text-coffee-dark ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t(section.titleKey)}
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items.map((item, idx) => (
                <motion.div
                  key={`${section.id}-${item.id}`}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.07 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <Card className="card-gradient border-coffee-light/30 coffee-shadow hover:coffee-shadow-lg smooth-transition overflow-hidden h-full">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={t(item.nameKey)}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/20 to-transparent" />
                    </div>

                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className={`text-xl font-bold text-coffee-dark ${language === 'ar' ? 'font-arabic' : ''}`}>
                          {t(item.nameKey)}
                        </h3>
                        <span className="text-lg font-bold text-coffee-medium">
                          {item.price} {t('menu.sar')}
                        </span>
                      </div>

                      {item.descKey ? (
                        <p className={`text-coffee-medium/80 mb-3 ${language === 'ar' ? 'font-arabic' : ''}`}>
                          {t(item.descKey)}
                        </p>
                      ) : null}

                      <div className="flex justify-between items-center">
                        <span className={`text-sm text-coffee-medium/60 ${language === 'ar' ? 'font-arabic' : ''}`}>
                          {item.calories} {t('menu.calories')}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}