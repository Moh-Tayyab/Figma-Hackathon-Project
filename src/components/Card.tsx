import React from 'react'
import Image from 'next/image'

const Card = () => {
  return (
    <section className="">
      <div className="container px-5 py-24 mx-auto">
        {/* Wrapper div for flex grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6 -m-4">
          {/* Product Card 1 */}
          <div
            className=" bg-bg2 m-4"
            style={{ width: "285px", height: "446px" }} // Explicitly setting card dimensions
          >
            <div className="relative" style={{ width: "285px", height: "301px" }}>
              <Image
                src="/shop/image 1.png" 
                alt="Syltherine" 
                width={285}
                height={301}
                className=" object-cover hover:scale-110"
              />
              <div className="absolute top-2 right-2 bg-accent2 text-white text-sm px-1 py-3 rounded-full">
                -30% 
              </div>
            </div>
            <div className="p-4" style={{ height: "145px" }}>
              <h3 className="text-2xl leading-[28.8px] font-[600px] font-poppins w-[123px] h-[29px] text-text2">
                Syltherine
              </h3> 
              <p className="text-[16px] leading-[24px] font-[500px] font-poppins text-gray4 h-[24px] w-[138px] pt-2">
                Stylish cafe chair
              </p> 
              <div className="flex items-center justify-between mt-2">
                <span className="text-[20px] leading-[30px] font-[600px] font-poppins text-text2 w-[131px] h-[30px]">
                  Rp 2.500.000
                </span> 
                <span className="text-[16px] leading-[24px] font-[400px] font-poppins text-gray4 w-[102px] h-[24px] line-through">
                  Rp 3.500.000
                </span>
              </div>
            </div>
          </div>

          {/* Product Card 2 */}
          <div
            className=" bg-bg2 m-4"
            style={{ width: "285px", height: "446px" }} // Explicitly setting card dimensions
          >
            <div className="relative" style={{ width: "285px", height: "301px" }}>
              <Image
                src="/shop/image 2.png" 
                alt="Leviosa" 
                width={285}
                height={301}
                className=" object-cover hover:scale-110"
              />
             
            </div>
            <div className="p-4" style={{ height: "145px" }}>
              <h3 className="text-2xl leading-[28.8px] font-[600px] font-poppins w-[123px] h-[29px] text-text2">
              Leviosa
              </h3> 
              <p className="text-[16px] leading-[24px] font-[500px] font-poppins text-gray4 h-[24px] w-[138px] pt-2">
                Stylish cafe chair
              </p> 
              <div className="flex items-center justify-between mt-2">
                <span className="text-[20px] leading-[30px] font-[600px] font-poppins text-text2 w-[131px] h-[30px]">
                  Rp 2.500.000
                </span> 
              </div>
            </div>
          </div>
          {/* Product Card 3 */}
          <div
            className=" bg-bg2 m-4"
            style={{ width: "285px", height: "446px" }} //  setting card dimensions
          >
            <div className="relative" style={{ width: "285px", height: "301px" }}>
              <Image
                src="/shop/image 3.png" 
                alt="Lolito" 
                width={285}
                height={301}
                className=" object-cover hover:scale-110"
              />
              <div className="absolute top-2 right-2 bg-accent2 text-white text-sm px-1 py-3 rounded-full">
                -50% 
              </div>
            </div>
            <div className="p-4" style={{ height: "145px" }}>
              <h3 className="text-2xl leading-[28.8px] font-[600px] font-poppins w-[123px] h-[29px] text-text2">
              Lolito
              </h3> 
              <p className="text-[16px] leading-[24px] font-[500px] font-poppins text-gray4 h-[24px] w-[138px] pt-2">
              Luxury big sofa
              </p> 
              <div className="flex items-center justify-between mt-2">
                <span className="text-[20px] leading-[30px] font-[600px] font-poppins text-text2 w-[131px] h-[30px]">
                Rp 7.000.000
                </span> 
                <span className="text-[16px] leading-[24px] font-[400px] font-poppins text-gray4 w-[102px] h-[24px] line-through">
                  Rp 3.500.000
                </span> 
              </div>
            </div>
          </div>
          {/* Product Card 4 */}
          <div
            className=" bg-bg2 m-4"
            style={{ width: "285px", height: "446px" }} // Explicitly setting card dimensions
          >
            <div className="relative" style={{ width: "285px", height: "301px" }}>
              <Image
                src="/shop/image 4.png" 
                alt="Respira" 
                width={285}
                height={301}
                className=" object-cover hover:scale-110"
              />
              <div className="absolute top-2 right-2 bg-accent1 text-white text-sm px-2 py-3 rounded-full">
                New
              </div>
            </div>
            <div className="p-4" style={{ height: "145px" }}>
              <h3 className="text-2xl leading-[28.8px] font-[600px] font-poppins w-[123px] h-[29px] text-text2">
              Respira
              </h3> 
              <p className="text-[16px] leading-[24px] font-[500px] font-poppins text-gray4  pt-2">
                Outdoor bar table and stool
              </p> 
              <div className="flex items-center justify-between mt-2">
                <span className="text-[20px] leading-[30px] font-[600px] font-poppins text-text2 w-[131px] h-[30px]">
                  Rp 2.500.000
                </span> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Card