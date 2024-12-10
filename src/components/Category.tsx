import Image from 'next/image';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  //CarouselPrevious,
} from "@/components/ui/carousel"

//import { ImageSlides } from './ui/image-slide';

const Category = () => {
  return (
    <section className="text-gray-600 body-font bg-[#FCF8F3]">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center gap-8">
        {/* Text Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-8 md:pr-8 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-[40px] leading-[48px] font-[700px] mb-4 font-poppins text-[#3A3A3A] w-full">
            50+ Beautiful rooms 
            <br className="hidden lg:inline-block" />
            inspiration
          </h1>
          <p className="text-base leading-relaxed text-[16px] font-poppins text-[#3A3A3A] mb-8">
          Our designer already made a lot of beautiful prototipe of rooms that inspire you
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:scale-110 ">
            Explore More
            </button>
          </div>
        </div>
  
        {/* Image Section */}
        <div className="flex flex-row gap-4">
          {/* First Image */}
          <Image
            className="object-cover object-center"
            alt="hero"
            width={404}
            height={582}
            src="/img_1.png"
          />
          {/* Second Image */}
          <div className='w-[372px] h-[486px]'>
          <Carousel>
  <CarouselContent>
    
    <CarouselItem> <Image
            className="object-cover object-center"
            alt="hero"
            width={272}
            height={446}
            src="/img_2.png"
          /></CarouselItem>
    <CarouselItem> <Image
            className="object-cover object-center"
            alt="hero"
            width={272}
            height={446}
            src="/img_3.png"
          /></CarouselItem>
          <CarouselItem> <Image
            className="object-cover object-center"
            alt="hero"
            width={272}
            height={446}
            src="/image 100.png"
          /></CarouselItem>
  </CarouselContent>
  {/* <CarouselPrevious />  */}
 <CarouselNext /> 
</Carousel>

            {/* <ImageSlides
              images={["/imge_1.png", "/img_2.png", "/img_3.png", "/image 100.png"]}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
