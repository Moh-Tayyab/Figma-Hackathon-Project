import HeroSection from '@/components/HeroSection';
import BrowseRange from '@/components/BrowseRange';
import OurProduct from '@/components/OurPoduct'; 
import Category from '@/components/Category';
import FuniroFurniture from '@/components/FuniroFurniture';
import TipsAndTrick from '@/components/TipsAndTrick';


export default function Home() {
  return (
    <main>
      <HeroSection />
      <BrowseRange />
      <OurProduct />
      <Category />
      <TipsAndTrick />
     <FuniroFurniture />
    </main>
  );
}
