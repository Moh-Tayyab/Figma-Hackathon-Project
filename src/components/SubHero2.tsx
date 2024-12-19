import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { PiCirclesFourFill } from "react-icons/pi";
import { TbAlignLeft2 } from "react-icons/tb";
const SubHero = () => {
  return (
    <section>
      {/* Banner Section */}
      <div className="relative">
        <Image
          src="/shop/shop.png"
          alt="Shop Banner"
          width={1440}
          height={316}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <Image
            src="/logo1.png"
            alt="Logo"
            width={50}
            height={32}
            className="lg:mb-2 sm:mb-0 "
          />
          <h1 className="text-black1 text-[28px] sm:text-[48px] font-medium leading-[40px] sm:leading-[72px] font-poppins hover:scale-110 transition-transform">
            shop
          </h1>
          <ul className="flex flex-wrap items-center justify-center space-x-2 lg:mt-4 sm:mt-1 text-[16px] sm:text-[20px]">
            <Link
              href={'/'}
              className="text-black1 hover:cursor-pointer hover:scale-110 transition-transform"
            >
              Home
            </Link>
            <IoIosArrowForward className="w-4 h-4" />
            <Link
              href={'/shop'}
              className="text-black1 hover:cursor-pointer hover:scale-110 transition-transform"
            >
              Shop
            </Link>
          </ul>
        </div>
      </div>

      <div className="w-full h-auto bg-[#F9F1E7]">
  <div className="flex flex-col lg:flex-row items-center lg:justify-between px-4 space-y-2 lg:space-y-0 md:space-x-4 md:px-8 lg:px-12">

    {/* Left Section */}
    <div className="flex flex-wrap items-center space-x-4 pt-4 md:pt-6">
      <TbAlignLeft2 className="w-6 h-6" />
      <h2 className="text-sm md:text-base font-normal leading-5 text-black">Filter</h2>
      <PiCirclesFourFill className="w-6 h-6" />
      <span className="border-[#9F9F9F] border-l-2 h-6"></span>
      <p className="text-xs md:text-sm">Showing 1–16 of 32 results</p>
    </div>

    {/* Right Section */}
    <div className="flex flex-wrap items-center space-x-2 pt-4 md:pt-6">
      <h2 className="text-xs md:text-sm">Show</h2>
      <input
        type="number"
        min="1"
        max="32"
        defaultValue="16"
        className="bg-white text-[#9F9F9F] text-center text-xs md:text-sm py-1 md:py-2"
      />
      <h2 className="text-xs md:text-sm">Sort by</h2>
      <select className="bg-white text-[#9F9F9F] text-center text-xs md:text-sm py-1 px-4 md:py-2 md:px-6">
        <option value="1">Default</option>
        <option value="2">Rating</option>
        <option value="3">Newest</option>
      </select>
    </div>

  </div>
</div>



    </section>
  );
};

export default SubHero; 
