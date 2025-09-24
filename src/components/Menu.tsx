import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

interface MenuItem {
  id: string;
  nameKey: string;
  // descKey: string;
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
    image: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=300&fit=crop'
  },
  {
    id: '2',
    nameKey: 'Double Espresso',
    // descKey: 'menu.Double Espresso',
    calories: "5-10",
    price: 10,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&h=300&fit=crop'
  },
  {
    id: '3',
    nameKey: 'Today\'s coffee',
    // descKey: 'menu.Today\'s coffee',
    calories: "5-15",
    price: 7,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop'
  },
  {
    id: '4',
    nameKey: 'Latte',
    // descKey: 'menu.mocha.desc',
    calories: "120-170",
    price: 13,
    image: 'https://images.unsplash.com/photo-1578843147842-355eb25b43d1?w=400&h=300&fit=crop'
  },
  {
    id: '5',
    nameKey: 'Cappuccino',
    // descKey: 'menu.macchiato.desc',
    calories: "100-150",
    price: 13,
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&h=300&fit=crop'
  },
  {
    id: '6',
    nameKey: 'Flat White',
    // descKey: 'menu.frappuccino.desc',
    calories: "120-160",
    price: 13,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },  {
    id: '7',
    nameKey: 'Cortado',
    // descKey: 'menu.frappuccino.desc',
    calories: "60-80",
    price: 12,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },  {
    id: '8',
    nameKey: 'Americano',
    // descKey: 'menu.frappuccino.desc',
    calories: "10-20",
    price: 9,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },  {
    id: '9',
    nameKey: 'Caramel Macchiato',
    // descKey: 'menu.frappuccino.desc',
    calories: "220-280",
    price: 14,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },  {
    id: '10',
    nameKey: 'Spanish Latte',
    // descKey: 'menu.frappuccino.desc',
    calories: "220-300",
    price: 14,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },  {
    id: '11',
    nameKey: 'Pistachio Latte',
    // descKey: 'menu.frappuccino.desc',
    calories: "250-320",
    price: 15,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },  {
    id: '12',
    nameKey: 'White Mocha',
    // descKey: 'menu.frappuccino.desc',
    calories: "250-320",
    price: 14,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },  {
    id: '13',
    nameKey: 'V60',
    // descKey: 'menu.frappuccino.desc',
    calories: "5-15",
    price: 11,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },  {
    id: '14',
    nameKey: 'Flat White',
    // descKey: 'menu.frappuccino.desc',
    calories: "120-160",
    price: 13,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },  {
    id: '15',
    nameKey: 'Matcha',
    // descKey: 'menu.frappuccino.desc',
    calories: "200-260",
    price: 14,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },  {
    id: '16',
    nameKey: 'Salted Caramel',
    // descKey: 'menu.frappuccino.desc',
    calories: "250-330",
    price: 15,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },  {
    id: '17',
    nameKey: 'Hot Chocolate',
    // descKey: 'menu.frappuccino.desc',
    calories: "280-350",
    price: 12,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },  {
    id: '18',
    nameKey: 'Turkish Coffee',
    // descKey: 'menu.frappuccino.desc',
    calories: "30-50",
    price: 8,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },  {
    id: '19',
    nameKey: 'French Coffee',
    // descKey: 'menu.frappuccino.desc',
    calories: "180-220",
    price: 10,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },  {
    id: '20',
    nameKey: 'English Red Tea',
    // descKey: 'menu.frappuccino.desc',
    calories: "0-5",
    price: 4,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },  {
    id: '21',
    nameKey: 'English Green Tea',
    // descKey: 'menu.frappuccino.desc',
    calories: "0-5",
    price: 4,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },  {
    id: '22',
    nameKey: 'Tea',
    // descKey: 'menu.frappuccino.desc',
    calories: "0-5",
    price: 3,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },  {
    id: '23',
    nameKey: 'Tea With Milk',
    // descKey: 'menu.frappuccino.desc',
    calories: "120-180",
    price: 4,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },  {
    id: '24',
    nameKey: 'Anise',
    // descKey: 'menu.frappuccino.desc',
    calories: "0-5",
    price: 4,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },  {
    id: '25',
    nameKey: 'Sahlab',
    // descKey: 'menu.frappuccino.desc',
    calories: "180-240",
    price: 10,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },  {
    id: '26',
    nameKey: 'Ginger',
    // descKey: 'menu.frappuccino.desc',
    calories: "130-190",
    price: 5,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },  {
    id: '27',
    nameKey: 'Ginger With Milk',
    // descKey: 'menu.frappuccino.desc',
    calories: "0-5",
    price: 6,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },  {
    id: '28',
    nameKey: 'Ginger With Lemon',
    // descKey: 'menu.frappuccino.desc',
    calories: "5-10",
    price: 5,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '29',
    nameKey: 'Cinnamon',
    // descKey: 'menu.frappuccino.desc',
    calories: "0-5",
    price: 5,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '30',
    nameKey: 'Hibiscus',
    // descKey: 'menu.frappuccino.desc',
    calories: "40-60",
    price: 5,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
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
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '2',
    nameKey: 'Today\'s coffee',
    // descKey: 'menu.frappuccino.desc',
    calories: "5-15",
    price: 7,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '3',
    nameKey: 'Ice Americano',
    // descKey: 'menu.frappuccino.desc',
    calories: "10-20",
    price: 9,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '4',
    nameKey: 'Ice Signature Latte',
    // descKey: 'menu.frappuccino.desc',
    calories: "180-320",
    price: 15,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '5',
    nameKey: 'Ice pistachio latte',
    // descKey: 'menu.frappuccino.desc',
    calories: "250-320",
    price: 15,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '6',
    nameKey: 'Ice Shaken Nijma Hour',
    // descKey: 'menu.frappuccino.desc',
    calories: "280-350",
    price: 16,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '7',
    nameKey: 'Iced White Mocha',
    // descKey: 'menu.frappuccino.desc',
    calories: "250-330",
    price: 14,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '8',
    nameKey: 'Salted Caramel',
    // descKey: 'menu.frappuccino.desc',
    calories: "5-15",
    price: 14,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '9',
    nameKey: 'Cold Matcha',
    // descKey: 'menu.frappuccino.desc',
    calories: "220-300",
    price: 15,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '10',
    nameKey: 'Iced V60',
    // descKey: 'menu.frappuccino.desc',
    calories: "300-380",
    price: 11,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '11',
    nameKey: 'Spanish Latte',
    // descKey: 'menu.frappuccino.desc',
    calories: "230-300",
    price: 14,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '12',
    nameKey: 'Iced Caramel Macchiato',
    // descKey: 'menu.frappuccino.desc',
    calories: "100-140",
    price: 14,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '13',
    nameKey: 'Mocha Frappuccino',
    // descKey: 'menu.frappuccino.desc',
    calories: "100-140",
    price: 14,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '14',
    nameKey: 'Caramyl Frappuccino',
    // descKey: 'menu.frappuccino.desc',
    calories: "110-150",
    price: 14,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '15',
    nameKey: 'Strawberry Mojito',
    // descKey: 'menu.frappuccino.desc',
    calories: "110-150",
    price: 13,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '16',
    nameKey: 'Lemon Mint Mojito',
    // descKey: 'menu.frappuccino.desc',
    calories: "158",
    price: 13,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '17',
    nameKey: 'Peach Mojito',
    // descKey: 'menu.frappuccino.desc',
    calories: "146",
    price: 13,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '18',
    nameKey: 'Berry Mojito',
    // descKey: 'menu.frappuccino.desc',
    calories: "186",
    price: 13,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '19',
    nameKey: 'Pomegranate Mojito',
    // descKey: 'menu.frappuccino.desc',
    calories: "80-120",
    price: 13,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '20',
    nameKey: 'Passion Fruit mojito',
    // descKey: 'menu.frappuccino.desc',
    calories: "156",
    price: 13,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '21',
    nameKey: 'Hibiscus',
    // descKey: 'menu.frappuccino.desc',
    calories: "40-60",
    price: 5,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '22',
    nameKey: 'Red Code Mojito',
    // descKey: 'menu.frappuccino.desc',
    calories: "0",
    price: 17,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '23',
    nameKey: 'Kenza Cola',
    // descKey: 'menu.frappuccino.desc',
    calories: "157",
    price:4,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '24',
    nameKey: 'Kinza Orange',
    // descKey: 'menu.frappuccino.desc',
    calories: "6",
    price: 4,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '25',
    nameKey: 'Kinza Citrus',
    // descKey: 'menu.frappuccino.desc',
    calories: "61",
    price: 4,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '26',
    nameKey: 'Pepsi',
    // descKey: 'menu.frappuccino.desc',
    calories: "156",
    price: 5,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },,{
    id: '27',
    nameKey: 'Diet Pepsi',
    // descKey: 'menu.frappuccino.desc',
    calories: "0",
    price: 5,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '28',
    nameKey: 'Duet',
    // descKey: 'menu.frappuccino.desc',
    calories: "158",
    price: 5,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '29',
    nameKey: 'Miranda',
    // descKey: 'menu.frappuccino.desc',
    calories: "179",
    price: 5,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '30',
    nameKey: 'Citrus',
    // descKey: 'menu.frappuccino.desc',
    calories: "179",
    price: 5,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '31',
    nameKey: '7Up',
    // descKey: 'menu.frappuccino.desc',
    calories: "157",
    price: 5,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '32',
    nameKey: 'Diet 7Up',
    // descKey: 'menu.frappuccino.desc',
    calories: "6",
    price: 5,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '33',
    nameKey: 'Red Code',
    // descKey: 'menu.frappuccino.desc',
    calories: "61",
    price: 7,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '34',
    nameKey: 'Barely Mousse',
    // descKey: 'menu.frappuccino.desc',
    calories: "17",
    price: 8,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '35',
    nameKey: 'Pomegranate Mousse',
    // descKey: 'menu.frappuccino.desc',
    calories: "40",
    price: 8,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '36',
    nameKey: 'Apple Mousse',
    // descKey: 'menu.frappuccino.desc',
    calories: "19",
    price: 8,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '37',
    nameKey: 'Lemon Mint Mousse',
    // descKey: 'menu.frappuccino.desc',
    calories: "39",
    price: 8,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '38',
    nameKey: 'Water',
    // descKey: 'menu.frappuccino.desc',
    calories: "0",
    price: 1,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '39',
    nameKey: 'Mango',
    // descKey: 'menu.frappuccino.desc',
    calories: "150-180",
    price: 14,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '40',
    nameKey: 'Strawberry',
    // descKey: 'menu.frappuccino.desc',
    calories: "120-150",
    price: 14,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '41',
    nameKey: 'Orange',
    // descKey: 'menu.frappuccino.desc',
    calories: "110-140",
    price: 11,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '42',
    nameKey: 'Avocado',
    // descKey: 'menu.frappuccino.desc',
    calories: "220-280",
    price: 15,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '43',
    nameKey: 'Mina Colada',
    // descKey: 'menu.frappuccino.desc',
    calories: "180-220",
    price: 16,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '44',
    nameKey: 'Watermelon',
    // descKey: 'menu.frappuccino.desc',
    calories: "150-170",
    price: 10,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '45',
    nameKey: 'Banana With Milk',
    // descKey: 'menu.frappuccino.desc',
    calories: "80-110",
    price: 11,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '46',
    nameKey: 'Mint Lemon',
    // descKey: 'menu.frappuccino.desc',
    calories: "220-280",
    price: 11,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },{
    id: '47',
    nameKey: 'Hibiscus',
    // descKey: 'menu.frappuccino.desc',
    calories: "100-140",
    price: 10,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  }
]


// مأكولات
const food = 
[
  
]


export function Menu() {
  const { language, t } = useLanguage();

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
{/*  menu sub heading */}
        <div className='flex  items-center justify-around mt-[-20px]'>
            <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 px-5 pt-2 cursor-pointer bg-gradient-to-r from-[#d9c7ac] to-[#f1ebe2] shadow-xl 
                       rounded-full mx-[2px] my-10 border-2 border-transparent hover:border-[#633e1a] transition-all duration-300"

          >
            <h2 className={`text-2xl md:text-3xl font-bold text-coffee-dark mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('menu.sub-heading-1')}
            </h2>
          
          </motion.div>

           <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 px-14 pt-2 cursor-pointer bg-gradient-to-r from-[#d9c7ac] to-[#f1ebe2] shadow-xl 
                       rounded-full mx-[2px] my-10 border-2 border-transparent hover:border-[#633e1a] transition-all duration-300"
          >
            <h2 className={`text-2xl md:text-3xl font-bold text-coffee-dark mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('menu.sub-heading-3')}
            </h2>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 px-5 pt-2 cursor-pointer bg-gradient-to-r from-[#d9c7ac] to-[#f1ebe2] shadow-xl 
                       rounded-full mx-[2px] my-10 border-2 border-transparent hover:border-[#633e1a] transition-all duration-300"
          >
            <h2 className={`text-2xl md:text-3xl font-bold text-coffee-dark mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('menu.sub-heading-2')}
            </h2>
          </motion.div>
        </div>

        {/* drinks list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.03,
                y: -5
              }}
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
                  
                  <p className={`text-coffee-medium/80 mb-3 ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {t(item.descKey)}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className={`text-sm text-coffee-medium/60 ${language === 'ar' ? 'font-arabic' : ''}`}>
                      {item.calories} {t('menu.calories')}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-coffee-dark text-coffee-cream px-4 py-2 rounded-lg hover:bg-coffee-medium smooth-transition font-medium"
                    >
                      +
                    </motion.button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}