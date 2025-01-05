import { client } from '@/sanity/lib/client';
import { IoMdShare } from "react-icons/io";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import React from 'react';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import { groq } from 'next-sanity';
//import { useShoppingCart } from 'use-shopping-cart';

const RelatedProducts = async () => {
//const { addItem } = useShoppingCart()
const relatedProducts = await client.fetch(groq `*[_type=="Product"][0...8]`);

//console.log(relatedProducts);

  return (
    <div className="container px-5 py-10">
        <h2 className="text-3xl font-bold text-center py-10 leading-10">Related Products</h2>
      {/* Wrapper div for flex grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-6">
        {/* Map Method to render product cards */}
        {relatedProducts.map((relatedProduct: any, i: any) => {
          return (
            <div key={i} className="bg-white group w-[285px] h-[430px] rounded-lg shadow-md border-gray-300 border">
              {/* Add `group` here */}
              <div className="relative">
                <Image
                  //onClick={() => addItem(relatedProduct)}
                  src={urlFor(relatedProduct?.images && relatedProduct.images[0]).url()}
                  alt={relatedProduct.slug}
                  width={170}
                  height={150}
                  className="object-cover w-full h-100 "
                />
                {relatedProduct.discount && (
                  <div className="absolute top-2 right-2 bg-accent2 text-white text-sm px-1 py-3 rounded-full">
                    -{relatedProduct.discount}
                  </div>
                )}
                {relatedProduct.new && (
                  <div className="absolute top-2 right-2 bg-accent1 text-white text-sm px-2 py-3 rounded-full">
                    NEW
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link href={`/shop/${relatedProduct.slug.current}`}>
                    <button className="bg-white text-primary hover:cursor-pointer px-4 py-2 mb-4 rounded">
                      Add to Cart
                    </button>
                  </Link>
                  <div className="flex space-x-4 text-white">
                    <button className="hover:text-primary flex items-center">
                      <IoMdShare />
                      Share
                    </button>
                    <Link href={'/comparsion'}>
                      <button className="hover:text-primary  flex items-center">
                        <FaArrowRightArrowLeft />
                        Compare
                      </button>
                    </Link>
                    <button className="hover:text-primary  flex items-center">
                      <FaRegHeart />
                      Like
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold font-poppins text-text2">
                  {relatedProduct.name}
                </h3>
                <p className="text-sm text-gray4 mt-2">{relatedProduct.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg font-semibold text-text2" 
                  //onClick={() => addItem(relatedProduct)}
                  >
                    ${relatedProduct.orignalPrice}
                  </span>
                  {relatedProduct.fakePrice && (
                    <span className="text-sm text-gray4 line-through">
                      ${relatedProduct.fakePrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
