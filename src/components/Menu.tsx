import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

interface MenuItem {
  id: string;
  nameKey: string;
  descKey: string;
  calories: number;
  price: number;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    id: '1',
    nameKey: 'menu.americano',
    descKey: 'menu.americano.desc',
    calories: 10,
    price: 15,
    image: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=300&fit=crop'
  },
  {
    id: '2',
    nameKey: 'menu.cappuccino',
    descKey: 'menu.cappuccino.desc',
    calories: 120,
    price: 18,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&h=300&fit=crop'
  },
  {
    id: '3',
    nameKey: 'menu.latte',
    descKey: 'menu.latte.desc',
    calories: 150,
    price: 20,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop'
  },
  {
    id: '4',
    nameKey: 'menu.mocha',
    descKey: 'menu.mocha.desc',
    calories: 200,
    price: 22,
    image: 'https://images.unsplash.com/photo-1578843147842-355eb25b43d1?w=400&h=300&fit=crop'
  },
  {
    id: '5',
    nameKey: 'menu.macchiato',
    descKey: 'menu.macchiato.desc',
    calories: 80,
    price: 19,
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&h=300&fit=crop'
  },
  {
    id: '6',
    nameKey: 'menu.frappuccino',
    descKey: 'menu.frappuccino.desc',
    calories: 250,
    price: 25,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop'
  },
];

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
         
        </motion.div>

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
        </motion.div>

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