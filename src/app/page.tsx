
import HeroSection from '@/components/HeroSection';
import BrowseRange from '@/components/BrowseRange';
import OurProduct from '@/components/OurPoduct'; 
import Category from '@/components/Category';
import FuniroFurniture from '@/components/FuniroFurniture';
import TipsAndTrick from '@/components/TipsAndTrick';
import ForYouProduct from '@/components/ForYouProduct';

export default async function Home() {
 
  return (
    <main>
      <HeroSection />
      <BrowseRange />
      <OurProduct />
      <Category />
      <TipsAndTrick />
     <FuniroFurniture />
     <ForYouProduct />
    </main>
  );
}

