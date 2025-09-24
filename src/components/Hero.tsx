import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export function Hero() {
  const { language, t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-coffee-light/10 to-coffee-medium/10"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`text-5xl md:text-7xl font-bold text-coffee-dark mb-6 leading-tight ${language === 'ar' ? 'font-arabic' : ''}`}
          >
            {t('hero.welcome')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={`text-xl md:text-2xl text-coffee-medium mb-8 max-w-2xl mx-auto leading-relaxed ${language === 'ar' ? 'font-arabic' : ''}`}
          >
            {t('hero.description')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-coffee-dark text-coffee-cream hover:bg-coffee-medium hover:text-coffee-cream smooth-transition px-8 py-4 text-lg font-semibold coffee-shadow-lg"
            >
              {t('hero.orderNow')}
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-coffee-dark text-coffee-dark hover:bg-coffee-dark hover:text-coffee-cream smooth-transition px-8 py-4 text-lg font-medium"
            >
              {t('hero.ourMenu')}
            </Button>
          </motion.div>
        </motion.div>
      </div>
     
    </section>
  );
}