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
  const ourProducts = await client.fetch(groq `*[_type=="product"]{
    title,
    "slug": slug.current,
    "imageUrl" : productImage.asset -> url, 
    price,
    tags,
    dicountPercentage,
    description,}[0...8]
    `); // fetch 8 items

  //console.log(ourProducts);

  return (
    <div className="container px-10 py-10">
      <h2 className="text-3xl font-bold text-center py-10 leading-10">Our Products</h2>
      {/* Wrapper div for flex grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 justify-items-center">
     
       
        {/* Map Method to render ourProduct cards */}
        {ourProducts.map((ourProduct: any, i: any) => {
          return (
            <div key = {i}
            className="bg-white rounded-lg shadow-md border border-gray-300 justify-center items-center w-[280px] h-[400px]" // Fixed card size
          >
            <div className="relative w-full h-[270px]">
              {" "}
              {/* Fixed image container */}
              <Image
                src={urlFor(ourProduct.imageUrl).url()}
                alt={ourProduct.slug}
                fill // Use fill to ensure the image fits the container
                className="object-cover rounded-t-lg" // Ensure the image covers the container
                quality={100}
              />
              {ourProduct.discount && (
                <div className="absolute top-2 right-2 bg-accent2 text-white text-sm px-1 py-3 rounded-full">
                  -{ourProduct.discount}
                </div>
              )}
              {ourProduct.new && (
                <div className="absolute top-2 left-2 bg-accent1 text-white text-sm px-2 py-3 rounded-full">
                  NEW
                </div>
              )}
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Link href={`/shop/${ourProduct.slug}`}>
                  <button className="bg-white text-primary px-4 py-2 mb-4 rounded hover:cursor-pointer">
                    Add to Cart
                  </button>
                </Link>
                <div className="flex space-x-4 text-white">
                  <button className="hover:text-primary flex items-center">
                    <IoMdShare />
                    Share
                  </button>
                  <Link href={"/comparison"}>
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
              <h3 className="text-lg font-semibold font-poppins text-text2 truncate">
                {ourProduct.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                {ourProduct.description}
              </p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-lg font-semibold text-text2">
                  ${ourProduct.price}
                </span>
                {ourProduct.fakePrice && (
                  <span className="text-sm text-gray-500 line-through">
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
