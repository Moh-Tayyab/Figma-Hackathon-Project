//"use client"
// import Link from 'next/link';
//import { IoIosArrowForward } from 'react-icons/io';
import { client } from '@/sanity/lib/client';

import RelatedProducts from '@/components/RelatedProduct';
//import { useParams } from 'next/navigation';
import { groq } from 'next-sanity';
import ProductDetail from '@/components/ProductDetail';
//import { useParams } from 'next/navigation';

type tParams = Promise<{
  slug: { current: string };
 }>

const page = async ({params}: {params: tParams}) => {
  const { slug }: any = await params // Correctly destructure the slug parameter
  const products = await client.fetch(groq `*[_type=="Product"]`);
  const product = products.find((product:any)=>product.slug.current == slug);

  // console.log(product);


  return (
    <div>

    <ProductDetail product = {product} />

      <RelatedProducts />
    </div>
  );
};

export default page;
