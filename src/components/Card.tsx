import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdShare } from "react-icons/io";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { urlFor } from '@/sanity/lib/image';
const Card = ( {product}: any) => {
  //console.log(product);
  return (
    <>
    <div className="bg-white group w-[285px] h-[440px] rounded-lg shadow-md overflow-hidden border-gray-200 border">
    {" "}
    {/* Add `group` here */}
    <div className="relative">
       <Image
        src={urlFor(product?.images && product.images[0]).url()}
        alt={product.slug}
        width={170}
        height={150}
        className="object-cover w-full h-100"
      />  
      {product.discount && (
        <div className="absolute top-2 right-2 bg-accent2 text-white text-sm px-1 py-3 rounded-full">
          -{product.discount}
        </div>
      )}
      {product.new && (
        <div className="absolute top-2 right-2 bg-accent1 text-white text-sm px-2 py-3 rounded-full">
          NEW
        </div>
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <Link href={`/shop/${product.slug.current}`}>
          <button className="bg-white text-primary hover:cursor-pointer px-4 py-2 mb-4 rounded">
            Add to Cart
          </button>
        </Link>
        <div className="flex space-x-4 text-white">
          <button className="hover:text-primary flex items-center">
           <IoMdShare />
            Share
          </button>
         <Link href={'/comparsion'}> <button className="hover:text-primary  flex items-center">
           <FaArrowRightArrowLeft />
            Compare
          </button> </Link>
          <button className="hover:text-primary  flex items-center">
            <FaRegHeart />
            Like
          </button>
        </div>
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold font-poppins text-text2">
        {product.name}
      </h3>
      <p className="text-sm text-gray4 mt-2">{product.description}</p>
      <div className="flex items-center justify-between mt-2">
      
        <span className="text-lg font-semibold text-text2">
        ${product.orignalPrice}
        </span>
       
        {product.fakePrice && (
          <span className="text-sm text-gray4 line-through">
            ${product.fakePrice}
          </span>
        )}
      </div>
    </div>
  </div>

  
</>
  
  )
}

export default Card
