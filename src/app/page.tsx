import HeroSection from '@/components/HeroSection';
import BrowseRange from '@/components/BrowseRange';
import OurProduct from '@/components/OurPoduct'; 
import Category from '@/components/Category';
import FuniroFurniture from '@/components/FuniroFurniture';
import TipsAndTrick from '@/components/TipsAndTrick';
import { client } from '@/sanity/lib/client';
<<<<<<< HEAD
//import Orders from '@/components/Orders';
=======
//import RelatedProducts from '@/components/RelatedProduct';
>>>>>>> 745cd7210b4f13dcde6f3eb6c0b3a3e0dd6c9451




<<<<<<< HEAD

=======
>>>>>>> 745cd7210b4f13dcde6f3eb6c0b3a3e0dd6c9451
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

