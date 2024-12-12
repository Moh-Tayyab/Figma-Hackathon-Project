import HeroSection from '@/components/HeroSection';
import BrowseRange from '@/components/BrowseRange';
import OurProduct from '@/components/OurPoduct'; 
import Category from '@/components/Category';
import FuniroFurniture from '@/components/FuniroFurniture';
import ShoppingCart from '@/components/ShoppingCart';


export default function Home() {
  return (
    <main>
      <HeroSection />
      <BrowseRange />
      <OurProduct />
      <Category />
     <FuniroFurniture />
     <ShoppingCart />
    </main>
  );
}
