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
          <Image
            src="/logo1.png"
            alt="Logo"
            width={50}
            height={32}
            className="lg:mb-2 sm:mb-0"
          />
          <h1 className="text-black1 text-[28px] sm:text-[30px] font-medium leading-[40px] sm:leading-[72px] font-poppins hover:scale-110 transition-transform">
            Cart
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
              href={'/Cart'}
              className="text-black1 hover:cursor-pointer hover:scale-110 transition-transform"
            >
              Cart
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SubHero;
