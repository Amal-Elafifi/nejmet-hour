import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const About = () => {
  const { language, t } = useLanguage();

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/nejmt.hour.cafe',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/nejmt.hour.cafe',
      color: 'hover:text-pink-600'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/nejmt_hour_cafe',
      color: 'hover:text-blue-400'
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      labelKey: 'about.address',
      value: language === 'ar' ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'
    },
    {
      icon: Phone,
      labelKey: 'about.phone',
      value: '+966 50 123 4567'
    },
    {
      icon: Mail,
      labelKey: 'about.email',
      value: 'info@nejmt-hour-cafe.com'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-hero-gradient overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className={`text-4xl md:text-6xl font-bold text-coffee-dark mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('about.title')}
              </h1>
              <p className={`text-xl text-coffee-medium max-w-2xl mx-auto ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('about.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className={`text-3xl md:text-4xl font-bold text-coffee-dark mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {t('about.storyTitle')}
                </h2>
                <p className={`text-coffee-medium mb-6 leading-relaxed ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {t('about.storyP1')}
                </p>
                <p className={`text-coffee-medium leading-relaxed ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {t('about.storyP2')}
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop"
                  alt="Coffee Shop Interior"
                  className="w-full rounded-2xl coffee-shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/20 to-transparent rounded-2xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact & Social Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className={`text-3xl md:text-4xl font-bold text-coffee-dark mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('about.connectTitle')}
              </h2>
              <p className={`text-xl text-coffee-medium ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('about.connectSubtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="card-gradient border-coffee-light/30 coffee-shadow">
                  <CardContent className="p-8">
                    <h3 className={`text-2xl font-bold text-coffee-dark mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
                      {t('about.contactInfo')}
                    </h3>
                    <div className="space-y-4">
                      {contactInfo.map((item, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-coffee-light rounded-full flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-coffee-dark" />
                          </div>
                          <div>
                            <p className={`font-medium text-coffee-dark ${language === 'ar' ? 'font-arabic' : ''}`}>
                              {t(item.labelKey)}
                            </p>
                            <p className="text-coffee-medium">
                              {item.value}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Social Media Links */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="card-gradient border-coffee-light/30 coffee-shadow">
                  <CardContent className="p-8">
                    <h3 className={`text-2xl font-bold text-coffee-dark mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
                      {t('about.followUs')}
                    </h3>
                    <p className={`text-coffee-medium mb-8 ${language === 'ar' ? 'font-arabic' : ''}`}>
                      {t('about.socialDescription')}
                    </p>
                    <div className="space-y-4">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`flex items-center gap-4 p-4 rounded-lg border border-coffee-light/30 hover:bg-coffee-light/20 smooth-transition group ${social.color}`}
                        >
                          <div className="w-12 h-12 bg-coffee-cream rounded-full flex items-center justify-center group-hover:scale-110 smooth-transition">
                            <social.icon className="w-6 h-6 text-coffee-dark" />
                          </div>
                          <div>
                            <p className="font-semibold text-coffee-dark">
                              {social.name}
                            </p>
                            <p className="text-sm text-coffee-medium">
                              @nejmt.hour.cafe
                            </p>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-coffee-dark text-coffee-cream">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('about.visitUs')}
              </h2>
              <p className={`text-xl mb-8 max-w-2xl mx-auto ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('about.visitDescription')}
              </p>
              <Button
                size="lg"
                variant="outline"
                className="border-coffee-cream text-coffee-cream hover:bg-coffee-cream hover:text-coffee-dark smooth-transition px-8 py-4 text-lg font-semibold"
              >
                {t('about.findUs')}
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;