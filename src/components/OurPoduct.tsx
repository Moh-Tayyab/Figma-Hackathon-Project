import { client } from '@/sanity/lib/client';
import { IoMdShare } from "react-icons/io";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import React from 'react';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import { groq } from 'next-sanity';

const OurPoduct = async () => {
  const ourProducts = await client.fetch(groq`*[_type=="Product"] [0...8]`); // fetch 8 items

  //console.log(ourProducts);

  return (
    <div className="container px-10 py-10">
      <h2 className="text-3xl font-bold text-center py-10 leading-10">Our Products</h2>
      {/* Wrapper div for flex grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        
        {/* Map Method to render product cards */}
        {ourProducts.map((ourProduct: any, i: any) => {
          return (
            <div key={i} className="bg-white group w-full max-w-xs h-auto rounded-lg shadow-md border-gray-300 border justify-center items-center">
              <div className="relative">
                <Image
                  src={urlFor(ourProduct?.images && ourProduct.images[0]).url()}
                  alt={ourProduct.title}
                  layout="responsive"
                  width={285}
                  height={200}
                  className="object-cover rounded-t-lg"
                />
                {ourProduct.discount && (
                  <div className="absolute top-2 right-2 bg-accent2 text-white text-sm px-1 py-3 rounded-full">
                    -{ourProduct.discount}
                  </div>
                )}
                {ourProduct.new && (
                  <div className="absolute top-2 right-2 bg-accent1 text-white text-sm px-2 py-3 rounded-full">
                    NEW
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link href={`/shop/${ourProduct.slug.current}`}>
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
                      <button className="hover:text-primary flex items-center">
                        <FaArrowRightArrowLeft />
                        Compare
                      </button>
                    </Link>
                    <button className="hover:text-primary flex items-center">
                      <FaRegHeart />
                      Like
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold font-poppins text-text2">
                  {ourProduct.name}
                </h3>
                <p className="text-sm text-gray4 mt-2">{ourProduct.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg font-semibold text-text2">
                    ${ourProduct.orignalPrice}
                  </span>
                  {ourProduct.fakePrice && (
                    <span className="text-sm text-gray4 line-through">
                      ${ourProduct.fakePrice}
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

export default OurPoduct;
