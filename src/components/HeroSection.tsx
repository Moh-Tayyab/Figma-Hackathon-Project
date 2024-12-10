import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          alt="Hero"
          objectFit="cover"
          layout="fill"
          src="/hero.png"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container px-5 py-24 mx-auto flex justify-center lg:justify-end">
        <div className="lg:w-1/3 md:w-1/2 bg-[#FFF3E3] rounded-lg p-8 flex flex-col w-full relative z-10 shadow-md">
          <h3 className="font-poppins text-sm md:text-[16px] font-semibold leading-6 md:leading-[24px]">
            New Arrival
          </h3>
          <h2 className="text-primary font-poppins mb-1 font-bold text-[28px] md:text-[38px] leading-8 md:leading-[65px]">
            Discover Our 
            <br />
            New Collection
          </h2>
          <p className="text-text1 font-poppins font-medium text-sm md:text-[16px] leading-6 md:leading-[24px] mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <div className="relative mb-4">
            <button className="text-primary1 bg-primary py-2 px-6 font-poppins font-bold hover:scale-105 text-sm md:text-[16px] leading-6 md:leading-[24px] transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
