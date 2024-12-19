import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdShare } from "react-icons/io";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import Services from '@/components/Services'
 import SubHero from '@/components/SubHero2'
import { products } from '@/lib/products'
 
// import Card from '@/components/Card'
//import { IoIosArrowForward } from 'react-icons/io'

const Home = () => {
  return (
    <>
    {/*subhero Section */}
    <SubHero />

    <div className="container px-5 py-10">
      {/* Wrapper div for flex grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-6">
        {/* Map Method to render product cards */}
        {products.slice(0, 16).map((Product) => {
          return (
            <div key={Product.id} className="bg-bg2 group w-[285px] h-[446px]">
              {" "}
              {/* Add `group` here */}
              <div className="relative">
                <Image
                  src={Product.image}
                  alt={Product.name}
                  width={170}
                  height={150}
                  className="object-cover w-full h-100"
                />
                {Product.discount && (
                  <div className="absolute top-2 right-2 bg-accent2 text-white text-sm px-1 py-3 rounded-full">
                    -{Product.discount}
                  </div>
                )}
                {Product.new && (
                  <div className="absolute top-2 right-2 bg-accent1 text-white text-sm px-2 py-3 rounded-full">
                    NEW
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link href={`/shop/${Product.id}`}>
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
                  {Product.name}
                </h3>
                <p className="text-sm text-gray4 mt-2">{Product.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg font-semibold text-text2">
                  {Product.price}
                  </span>
                  {Product.originalPrice && (
                    <span className="text-sm text-gray4 line-through">
                      ${Product.originalPrice}
                    </span>
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

export default Home