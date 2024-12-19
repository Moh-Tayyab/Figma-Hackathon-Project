import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { MdHorizontalRule } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
//import { ImageSlides } from './ui/image-slide';

const Category = () => {
  return (
    <section className="text-gray-600 body-font bg-[#FCF8F3]">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center gap-20 lg:ml-14">
        {/* Text Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-8 md:pr-8 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
          <h1 className="title-font lg:text-4xl sm:text-xl text-[40px] leading-[48px] font-[700px] mb-4 font-poppins text-[#3A3A3A] w-full">
            50+ Beautiful rooms
            <br className="hidden lg:inline-block" />
            inspiration
          </h1>
          <p className="text-base leading-relaxed text-[16px] font-poppins text-[#3A3A3A] mb-8">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <div className="flex justify-center">
            <Link href={"/blog"}>
              <button className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:scale-110 ">
                Explore More
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-row gap-4 ml-12 sm:mr-6">
          {/* First Image
          <Image
            className="object-cover object-center  hover:scale-110"
            alt="hero"
            width={404}
            height={582}
            src="/img_1.png"
          /> */}
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className="relative">
                  {/* Main Image */}
                  <Image
                    className="object-cover object-center w-full h-full"
                    alt="hero"
                    width={404}
                    height={582}
                    src="/img_1.png"
                  />

                  {/* Text Section */}
                  <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start gap-2 p-4 bg-[#FFFFFFB8]">
                    <div className="flex items-center gap-2">
                      <h2 className="text-[20px] font-poppins text-[#3A3A3A]">
                        01
                      </h2>
                      <MdHorizontalRule className="w-6 h-6" />
                      <h2 className="text-[20px] font-poppins text-[#3A3A3A]">
                        Bed Room
                      </h2>
                    </div>
                    <h2 className="text-[28px] font-poppins font-bold leading-[33px]">
                      Inner Peace
                    </h2>
                  </div>

                  {/* Arrow Section */}
                  <div className="absolute bottom-4 right-4">
                    <button className="p-2 bg-primary ">
                      <FaArrowRightLong className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative">
                  {/* Main Image */}
                  <Image
                    className="object-cover object-center w-full h-full"
                    alt="hero"
                    width={404}
                    height={582}
                    src="/img_2.png"
                  />

                  {/* Text Section */}
                  <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start gap-2 p-4 bg-[#FFFFFFB8]">
                    <div className="flex items-center gap-2">
                      <h2 className="text-[20px] font-poppins text-[#3A3A3A]">
                        02
                      </h2>
                      <MdHorizontalRule className="w-6 h-6" />
                      <h2 className="text-[20px] font-poppins text-[#3A3A3A]">
                        Bed Room
                      </h2>
                    </div>
                    <h2 className="text-[28px] font-poppins font-bold leading-[33px]">
                      Inner Peace
                    </h2>
                  </div>

                  {/* Arrow Section */}
                  <div className="absolute bottom-4 right-4">
                    <button className="p-2 bg-primary ">
                      <FaArrowRightLong className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative">
                  {/* Main Image */}
                  <Image
                    className="object-cover object-center w-full h-full"
                    alt="hero"
                    width={404}
                    height={582}
                    src="/img_1.png"
                  />

                  {/* Text Section */}
                  <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start gap-2 p-4 bg-[#FFFFFFB8]">
                    <div className="flex items-center gap-2">
                      <h2 className="text-[20px] font-poppins text-[#3A3A3A]">
                        03
                      </h2>
                      <MdHorizontalRule className="w-6 h-6" />
                      <h2 className="text-[20px] font-poppins text-[#3A3A3A]">
                        Bed Room
                      </h2>
                    </div>
                    <h2 className="text-[28px] font-poppins font-bold leading-[33px]">
                      Inner Peace
                    </h2>
                  </div>

                  {/* Arrow Section */}
                  <div className="absolute bottom-4 right-4">
                    <button className="p-2 bg-primary ">
                      <FaArrowRightLong className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative">
                  {/* Main Image */}
                  <Image
                    className="object-cover object-center w-full h-full"
                    alt="hero"
                    width={404}
                    height={582}
                    src="/image 100.png"
                  />

                  {/* Text Section */}
                  <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start gap-2 p-4 bg-[#FFFFFFB8]">
                    <div className="flex items-center gap-2">
                      <h2 className="text-[20px] font-poppins text-[#3A3A3A]">
                        04
                      </h2>
                      <MdHorizontalRule className="w-6 h-6" />
                      <h2 className="text-[20px] font-poppins text-[#3A3A3A]">
                        Bed Room
                      </h2>
                    </div>
                    <h2 className="text-[28px] font-poppins font-bold leading-[33px]">
                      Inner Peace
                    </h2>
                  </div>

                  {/* Arrow Section */}
                  <div className="absolute bottom-4 right-4">
                    <button className="p-2 bg-primary ">
                      <FaArrowRightLong className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          {/* Second Image */}
          <div className="w-[372px] h-[486px]">
            {/* <Carousel>
  <CarouselContent>  
    <CarouselItem> <Image
            className="object-cover object-center  hover:scale-110"
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
            className="object-cover object-center  hover:scale-110"
            alt="hero"
            width={272}
            height={446}
            src="/image 100.png"
          /></CarouselItem>
  </CarouselContent>
 <CarouselPrevious />  
 <CarouselNext /> 
</Carousel>  */}

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
