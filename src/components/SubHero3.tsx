'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

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
          {/* Logo */}
          <Image
            src="/logo1.png"
            alt="Logo"
            width={50}
            height={32}
            className="mb-2 "
          />
          {/* Title */}
          <h1 className="text-black1 text-[20px] sm:text-[28px] md:text-[48px] font-medium leading-[28px] sm:leading-[40px] md:leading-[72px] font-poppins hover:scale-110 transition-transform">
            Checkout
          </h1>
          {/* Breadcrumb */}
          <ul className="flex items-center justify-center space-x-2 mt-4 text-[14px] sm:text-[16px] md:text-[20px]">
            <Link
              href={'/'}
              className="text-black1 hover:cursor-pointer hover:scale-110 transition-transform"
            >
              Home
            </Link>
            <IoIosArrowForward className="w-3 h-3 sm:w-4 sm:h-4" />
            <Link
              href={'/Checkout'}
              className="text-black1 hover:cursor-pointer hover:scale-110 transition-transform"
            >
              Checkout
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SubHero;
