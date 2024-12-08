//import BrowseRange from '@/components/BrowseRange'

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BrowseRange from '@/components/BrowseRange';
import OurProduct from '@/components/OurPoduct'; 
import Category from '@/components/Category';
import { ImageSlides } from '@/components/ui/image-slide';
import FuniroFurniture from '@/components/FuniroFurniture';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <BrowseRange />
      <OurProduct />
      <Category />
     <FuniroFurniture />
      <Footer />
    
    </main>
  );
}
