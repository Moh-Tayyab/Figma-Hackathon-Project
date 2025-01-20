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
const relatedProducts = await client.fetch(groq `*[_type == "myproduct"] {
  name,
    description,
    price,
  slug,
    id,
    originalPrice,
    stock,
    dimensions,
    "image": image.asset->url
} [48...56]`);

//console.log(relatedProducts);

  return (
    <div className="container px-5 py-10">
        <h2 className="text-3xl font-bold text-center py-10 leading-10">Related Products</h2>
      {/* Wrapper div for flex grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 justify-items-center">
     
       
        {/* Map Method to render RelatedProduct cards */}
        {relatedProducts.map((RelatedProduct: any, i: any) => {
          return (
            <div key = {i}
            className="bg-white rounded-lg shadow-md border border-gray-300 justify-center items-center w-[280px] h-[400px]" // Fixed card size
          >
            <div className="relative w-full h-[270px]">
              {" "}
              {/* Fixed image container */}
              <Image
                src={urlFor(RelatedProduct.image).url()}
                alt={RelatedProduct.slug}
                fill // Use fill to ensure the image fits the container
                className="object-cover rounded-t-lg" // Ensure the image covers the container
                quality={100}
              />
              {RelatedProduct.discount && (
                <div className="absolute top-2 right-2 bg-accent2 text-white text-sm px-1 py-3 rounded-full">
                  -{RelatedProduct.discount}
                </div>
              )}
              {RelatedProduct.new && (
                <div className="absolute top-2 left-2 bg-accent1 text-white text-sm px-2 py-3 rounded-full">
                  NEW
                </div>
              )}
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Link href={`/shop/${RelatedProduct.slug.current}`}>
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
                {RelatedProduct.name}
              </h3>
              <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                {RelatedProduct.description}
              </p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-lg font-semibold text-text2">
                  ${RelatedProduct.originalPrice}
                </span>
                {RelatedProduct.fakePrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${RelatedProduct.fakePrice}
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
