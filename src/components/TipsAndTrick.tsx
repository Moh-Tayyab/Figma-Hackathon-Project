import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
const TipsAndTrick = () => {
  return (
    <div className="tipsAndTrick px-4 py-16">
      <h2 className="text-text2 text-[32px] leading-[48px] font-poppins font-[700] text-4xl text-center py-8">Tips & Tricks</h2>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            {/* Main Image */}
            <Image
              className="object-cover object-center w-full h-full hover:scale-110 "
              alt="hero"
              width={404}
              height={350}
              src="/craft.png"
            />
            {/* <div>
                <p className="text-black">
                    How to create a beautiful crafting space
                </p>
            </div>  */}
          </CarouselItem>
          <CarouselItem>
            {/* Main Image */}
            <Image
              className="object-cover object-center w-auto h-auto hover:scale-110"
              alt="hero"
              width={404}
              height={582}
              src="/living-room.png"
            />
            {/* <div>
                <p className="text-black">
                    How to Create living room to love
                </p>
            </div> */}
          </CarouselItem>
          <CarouselItem>
            {/* Main Image */}
            <Image
              className="object-cover object-center w-auto h-auto hover:scale-110"
              alt="hero"
              width={404}
              height={582}
              src="/work-space.png"
            />
            {/* <div>
                <p className="text-black">
                   Solution for clean look working space
                </p>
            </div> */}
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default TipsAndTrick;
