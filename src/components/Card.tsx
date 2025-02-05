"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdShare } from "react-icons/io";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { urlFor } from "@/sanity/lib/image";
import WishListFunctionality from "./WishListFunctionality";
import { Product } from "../../interface";

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  if (!product) {
    return (
      <p className="text-red-600 text-2xl justify-center">
        Product is not available!
      </p>
    );
  }
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
    <>
    <section>   
    <div
        className="bg-white rounded-lg shadow-md border border-gray-300 justify-center w-[90%] sm:w-[280px] items-center  h-[400px]" // Fixed card size
      >
        <div className="relative w-full h-[270px]">
          {" "}
          {/* Fixed image container */}
          <Image
            src={urlFor(product.imageUrl).url()}
            alt={product.slug}
            fill // Use fill to ensure the image fits the container
            className="object-cover rounded-t-lg" // Ensure the image covers the container
            quality={100}
          />
          {product.discount && (
            <div className="absolute top-2 right-2 bg-accent2 text-white text-sm px-2 py-1 rounded-lg">
              -{product.discount}% off
            </div>
          )}
          {/* Tags */}
          {product.tags && (
            <div className="absolute top-2 left-2 space-y-1">
              {product.tags.slice(0, 1).map((tag, index) => (
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
          {/* {product.stock&& (
            <div className="absolute top-2 left-2 bg-accent1 text-white text-sm px-2 py-3 rounded-full">
              Stock
            </div>
          )} */}
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <Link href={`/shop/${product.slug}`}>
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
              <Link href={""}>
                <WishListFunctionality product={product} />
              </Link>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="flex items-center justify-between mt-2">
            {product.slug}
          </h3>
          <p className="text-lg font-semibold text-text2">
            ${product.originalPrice}
          </p>
          {/* Rating Section */}
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                fill={index < Math.round(product.rating.rate) ? "gold" : "none"}
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
              ({product.rating.count} reviews)
            </span>
          </div>
        </div>
      </div>
      </section>
      
    </>
  );
};

export default Card;
