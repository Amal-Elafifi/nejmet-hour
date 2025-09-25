import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from "@/assets/logo.png";
import { useNavigate } from 'react-router-dom';

export function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const navigate= useNavigate();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border coffee-shadow"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center"
             onClick={() =>navigate("/")}
          >
            <img 
              src={logo} 
              alt="NEJMT HOUR Café" 
              className="h-12 mt-[-10px] w-auto object-contain transform scale-[2.4] cursor-pointer text-center indent-0"
            />
          </motion.div>

          {/* Navigation Links */}
          <div className={` md:flex items-center ${language === 'ar' ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              className={`text-coffee-dark text-lg hover:text-coffee-medium smooth-transition font-medium ${language === 'ar' ? 'font-arabic' : ''}`}
            >
              {language === 'ar' ? 'الرئيسية' : 'Home'}
            </motion.a>
            <motion.a
              href="/about"
              whileHover={{ scale: 1.05 }}
              className={`text-coffee-dark text-lg hover:text-coffee-medium smooth-transition font-medium ${language === 'ar' ? 'font-arabic' : ''}`}
            >
              {t('nav.aboutUs')}
            </motion.a>
          </div>

          {/* Language Toggle Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              onClick={toggleLanguage}
              className="bg-coffee-cream border-coffee-medium text-coffee-dark text-lg hover:bg-coffee-light hover:border-coffee-dark smooth-transition font-medium"
            >
              {t('nav.switchToArabic')}
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}