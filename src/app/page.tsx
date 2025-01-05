import HeroSection from '@/components/HeroSection';
import BrowseRange from '@/components/BrowseRange';
import OurProduct from '@/components/OurPoduct'; 
import Category from '@/components/Category';
import FuniroFurniture from '@/components/FuniroFurniture';
import TipsAndTrick from '@/components/TipsAndTrick';
import { client } from '@/sanity/lib/client';
//import Orders from '@/components/Orders';





export default async function Home() {
  const res = await client.fetch(`*[_type=="Product"]`)
  //console.log(res)  // log the fetched data to console
  return (
    <main>
      <HeroSection />
      <BrowseRange />
      <OurProduct />
      <Category />
      <TipsAndTrick />
     <FuniroFurniture />
     {/* <Orders /> */}
    </main>
  );
}

