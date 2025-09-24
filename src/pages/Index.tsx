import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Menu } from '@/components/Menu';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Menu />
      </main>
      <Footer />
    </div>
  );
};

export default Index;