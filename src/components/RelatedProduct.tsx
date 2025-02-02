import { client } from '@/sanity/lib/client';
import { IoMdShare } from "react-icons/io";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { groq } from 'next-sanity';
import WishListFunctionality from './WishListFunctionality';
import { Product } from '../../interface';

const RelatedProducts = async () => {
//const { addItem } = useShoppingCart()
const relatedProducts = await client.fetch(groq `*[_type == "myproduct"] {
  name,
  tags,
  price,
  stock,
  dimensions,
  id,
  description,
  discount,
  originalPrice,
  "categoryName": category->name,
  "slug":slug.current,
  "imageUrl": image.asset->url,
  rating
} [48...56]`);

const getTagColor = (tag: string) => {
  switch (tag.toLowerCase()) {
    case "sale":
      return "bg-green-500";
    case "popular":
      return "bg-yellow-500";
    case "limited":
      return "bg-blue-500";
    case "discount":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

  return (
    <div className="container px-5 py-10">
        <h2 className="text-3xl font-bold text-center py-10 leading-10">Related Products</h2>
      {/* Wrapper div for flex grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
     
       
        {/* Map Method to render RelatedProduct cards */}
        {relatedProducts.map((relatedProduct:Product, i:number) => {
          return (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md border border-gray-300 w-[90%] sm:w-[280px] h-[400px]" // Width adjusts on small screens
            >
              <div className="relative w-full h-[270px]">
                <Image
                  src={(relatedProduct.imageUrl)}
                  alt={relatedProduct.slug}
                  fill
                  className="object-cover rounded-t-lg"
                  quality={100}
                />
                {relatedProduct.discount && (
            <div className="absolute top-2 right-2 bg-accent2 text-white text-sm px-2 py-1 rounded-lg">
              -{relatedProduct.discount}% off
            </div>
          )}
          {/* Tags */}
          {relatedProduct.tags && (
            <div className="absolute top-2 left-2 space-y-1">
              {relatedProduct.tags.slice(0, 1).map((tag, index) => (
                <span
                  key={index}
                  className={`text-white text-xs font-semibold px-2 py-1 rounded-lg shadow-md ${getTagColor(
                    tag
                  )}`}>
                  {tag}
                </span>
              ))}
            </div>
          )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Link href={`/shop/${relatedProduct.slug}`}>
                    <button className="bg-white text-primary px-4 py-2 mb-4 rounded">
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
               <WishListFunctionality product ={relatedProduct} quantity={relatedProduct.Quantity}/>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold font-poppins text-text2 truncate">
                  {relatedProduct.name}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg font-semibold text-text2">
                    ${relatedProduct.originalPrice}
                  </span>
                  {/* {relatedProduct.fakePrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${relatedProduct.fakePrice}
                    </span>
                  )} */}
                </div>
                {/* Rating Section */}
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                fill={index < Math.round(relatedProduct.rating.rate) ? "gold" : "none"}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-yellow-500">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 17.25l6.172 3.83-1.638-7.07 5.466-4.86-7.22-.62L12 2.25l-2.78 6.28-7.22.62 5.466 4.86-1.638 7.07L12 17.25z"
                />
              </svg>
            ))}
            <span className="ml-2 text-gray-600 text-sm">
              ({relatedProduct.rating.count} reviews)
            </span>
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
