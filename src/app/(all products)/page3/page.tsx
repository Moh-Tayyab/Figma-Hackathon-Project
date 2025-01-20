import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Services from '@/components/Services'
 import SubHero from '@/components/SubHero'
import { client } from '@/sanity/lib/client'
import { PiCirclesFourFill } from "react-icons/pi";
import { IoReorderThree } from "react-icons/io5";
import { groq } from 'next-sanity';
import { urlFor } from '@/sanity/lib/image'
import { IoMdShare } from 'react-icons/io'
import { FaArrowRightArrowLeft, FaRegHeart } from 'react-icons/fa6'


const Product = async () => {
  const res = await client.fetch(groq `*[_type == "myproduct"] {
    name,
      description,
      price,
    slug,
      id,
      originalPrice,
      stock,
      dimensions,
      "image": image.asset->url
  } [24...48]
`);
//console.log(res) 
  return (
    <>
    {/*subhero Section */}
    <SubHero  title = "Shop" home = "Home" linkUrl='/shop'/>
     {/* filter */}

     <div className="p-4 border-b border-gray-200 bg-[#F9F1E7]">
  <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
    {/* Left Section */}
    <div className="flex items-center space-x-4">
      {/* Filter Button */}
      <button className="flex items-center px-4 lg:px-6 py-2 rounded-lg text-sm lg:text-base font-medium">
        <Image src="/filter-icon.png" alt="filter" width={20} height={17} />
        <span className="ml-4 font-poppins text-base lg:text-xl font-normal leading-6 lg:leading-10">
          Filter
        </span>
      </button>

      {/* View Options */}
      <div className="flex items-center space-x-2">
        <button className="rounded-lg p-2 sm:p-3">
          <PiCirclesFourFill className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
        </button>
        <button className="rounded-lg p-2 sm:p-3">
          <IoReorderThree className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
        </button>
      </div>

      {/* Results Text */}
      <span className="border-l-2 border-[#9F9F9F] pl-3 text-sm sm:text-base lg:text-lg">
        Showing 1-16 of 32 results
      </span>
    </div>

    {/* Right Section */}
    <div className="flex items-center space-x-4">
      {/* Show Input */}
      <div className="flex items-center">
        <label className="mr-2 text-sm lg:text-base font-medium">Show</label>
        <input
          type="number"
          className="w-12 sm:w-16 px-2 py-1 border border-gray-300 rounded-lg text-sm"
          value={16}
          readOnly
        />
      </div>

      {/* Sort Dropdown */}
      <div className="flex items-center">
        <label className="mr-2 text-sm lg:text-base font-medium">Sort by</label>
        <select className="px-2 py-1 border border-gray-300 rounded-lg text-sm">
          <option>Default</option>
          <option>Price</option>
          <option>Popularity</option>
        </select>
      </div>
    </div>
  </div>
</div>

<div className="container px-5 py-10">
  {/* Wrapper div for flex grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 justify-items-center">
    {/* Map Method to render product cards */}
    {res.map((product: any, i: any) => {
      return (
        <div
          key={i}
          className="bg-white rounded-lg shadow-md border border-gray-300 justify-center items-center w-[280px] h-[400px]" // Fixed card size
        >
          <div className="relative w-full h-[270px]"> {/* Fixed image container */}
            <Image
              src={urlFor(product.image).url()}
              alt={product.slug}
              fill // Use fill to ensure the image fits the container
              className="object-cover rounded-t-lg" // Ensure the image covers the container
              quality={100}
            />
            {product.discount && (
              <div className="absolute top-2 right-2 bg-accent2 text-white text-sm px-2 py-1 rounded-full">
                -{product.discount}
              </div>
            )}
            {product.new && (
              <div className="absolute top-2 left-2 bg-accent1 text-white text-sm px-2 py-1 rounded-full">
                NEW
              </div>
            )}

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <Link href={`/shop/${product.slug.current}`}>
                <button className="bg-white text-primary px-4 py-2 mb-4 rounded hover:cursor-pointer">
                  Add to Cart
                </button>
              </Link>
              <div className="flex space-x-4 text-white">
                <button className="hover:text-primary flex items-center">
                  <IoMdShare />
                  Share
                </button>
                <Link href={'/comparison'}>
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
              {product.name}
            </h3>
            <p className="text-sm text-gray-500 mt-2 line-clamp-2">{product.description}</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-lg font-semibold text-text2">${product.price}</span>
              {product.fakePrice && (
                <span className="text-sm text-gray-500 line-through">${product.fakePrice}</span>
              )}
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>

   

{/*Buttons */}
<div className=" text-center flex-row space-x-4 py-10 w-auto">
  <Link href={"/shop"}>
  <button className="bg-[#FAF3EA] text-black hover:text-white hover:bg-primary py-2 px-4 rounded-lg text-xl">
    1
  </button>
  </Link>
<Link href={'/page2'}>
  <button className="bg-[#FAF3EA] text-black hover:text-white hover:bg-primary py-2 px-4 rounded-lg text-xl">
    2
  </button>
</Link>
<Link href={'/page3'}>
  <button className="bg-[#FAF3EA] text-black hover:text-white hover:bg-primary py-2 px-4 rounded-lg text-xl">
    3
  </button>
</Link>
<Link href = {"/shop"}>
  <button className="bg-[#FAF3EA] text-black hover:text-white hover:bg-primary py-2 px-4 rounded-lg text-xl">
    Next
  </button>
  </Link>
</div>

    <div className='px-4 py-10'>
    <Services />
    </div>
   </>
  )
}

export default Product;