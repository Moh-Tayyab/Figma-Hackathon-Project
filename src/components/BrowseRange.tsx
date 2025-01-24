import Image from "next/image";
import React from "react";

const Cards = () => {
  return (
    <div className="text-center items-center mt-28">
      {/* Header Section */}
      <div className="text-center items-center justify-center mb-8">
        <h1 className="text-[32px] leading-[48px] font-poppins font-[700] text-4xl mb-4 w-full text-text1">
          Browse The Range
        </h1>
        <p className="leading-[30px] text-[20px] sm:text-[16px] font-poppins font-[400px] text-text3 w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-8 p-8">
        {/* Card 1 */}
        <div className="flex flex-col justify-center items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
          <div className="flex justify-center items-center">
            <Image
              src={"/image 106.png"}
              alt="product1"
              width={381}
              height={480}
              className="rounded-sm hover:scale-110"
            />
          </div>
          <h2 className="font-semibold text-[24px] leading-[36px] w-[79px] h-[36] text-[#333333] pt-6 text-center font-poppins">
            Dining
          </h2>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
          <div className="flex justify-center items-center">
            <Image
              src={"/image 100.png"}
              alt="product2"
              width={381}
              height={480}
              className="rounded-sm hover:scale-110"
            />
          </div>
          <h2 className="font-semibold text-[24px] leading-[36px] w-[71px] h-[36] text-[#333333] pt-6 text-center font-poppins">
            Living
          </h2>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center justify-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
          <div className="flex justify-center items-center">
            <Image
              src={"/image 101.png"}
              alt="product3"
              width={381}
              height={480}
              className="rounded-sm hover:scale-110"
            />
          </div>
          <h2 className="font-semibold text-[24px] leading-[36px] w-[112px] h-[36] text-[#333333] pt-6 text-center font-poppins">
            Bedroom
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Cards;
