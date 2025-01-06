import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Services from '@/components/Services'
 import SubHero from '@/components/SubHero'
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import Card from '@/components/Card';
import { PiCirclesFourFill } from "react-icons/pi";
import { IoReorderThree } from "react-icons/io5";


const Product = async () => {
  const res = await client.fetch(groq `*[_type=="Product"] {
    slug,
    images,
    name,
    orignalPrice,
    fakePrice,
    about,
    sku,
    new,
    tags,
    discount,
    description,
    category -> {
      name
    }
  }`);
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-6">
        {/* Map Method to render product cards */}
        {res.map((product: any, index: any) => { 
           return(
            <Card key={index} product= {product} />
          );
        })}
      </div>
    </div>
   

{/*Buttons */}
<div className=" text-center flex-row space-x-4 py-10 w-auto">
  <button className="bg-[#FAF3EA] text-black hover:text-white hover:bg-primary py-2 px-4 rounded-lg text-xl">
    1
  </button>
<Link href={'/shop'}>
  <button className="bg-[#FAF3EA] text-black hover:text-white hover:bg-primary py-2 px-4 rounded-lg text-xl">
    2
  </button>
</Link>
  <button className="bg-[#FAF3EA] text-black hover:text-white hover:bg-primary py-2 px-4 rounded-lg text-xl">
    3
  </button>

  <button className="bg-[#FAF3EA] text-black hover:text-white hover:bg-primary py-2 px-4 rounded-lg text-xl">
    Next
  </button>
</div>

    <div className='px-4 py-10'>
    <Services />
    </div>
   </>
  )
}

export default Product;