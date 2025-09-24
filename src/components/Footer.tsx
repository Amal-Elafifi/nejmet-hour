import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { language, t } = useLanguage();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-coffee-dark text-coffee-cream py-8"
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className={`text-sm md:text-base ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </motion.footer>
  );
}