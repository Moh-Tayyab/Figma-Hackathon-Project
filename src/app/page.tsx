import HeroSection from '@/components/HeroSection';
import BrowseRange from '@/components/BrowseRange';
import OurProduct from '@/components/OurPoduct'; 
import Category from '@/components/Category';
import FuniroFurniture from '@/components/FuniroFurniture';
import SearchBar from '@/components/SearchBar';
export default async function Home() {
 
  return (
    <main>
      <HeroSection />
      <BrowseRange />
      <OurProduct />
      <Category />
     <FuniroFurniture />
     <SearchBar />
    </main>
  );
}

