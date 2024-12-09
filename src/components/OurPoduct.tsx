import React from 'react'
import Image from 'next/image'
import Card from './Card'



const OurPoduct = () => {
  return (
    <section className="">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
      <h1 className ='text-[32px] leading-[48px] font-poppins font-[700] text-4xl mb-4 w-full text-text1'>Our Products</h1> 
      </div> 
      <div>
        <Card />
      </div>
      {/* card flex wrap */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-6 -m-4">
        {/* Product Card 1 */}
        <div
            className=" bg-bg2 m-4"
            style={{ width: "285px", height: "446px" }} // Explicitly setting card dimensions
          >
            <div className="relative" style={{ width: "285px", height: "301px" }}>
              <Image
                src="/shop/image 9.png" 
                alt="Grifo" 
                width={285}
                height={301}
                className="object-cover"
              />

            </div>
            <div className="p-4" style={{ height: "145px" }}>
              <h3 className="text-2xl leading-[28.8px] font-[600px] font-poppins w-[123px] h-[29px] text-text2">
              Grifo
              </h3> 
              <p className="text-[16px] leading-[24px] font-[500px] font-poppins text-gray4  pt-2">
              Night lamp
              </p> 
              <div className="flex items-center justify-between mt-2">
                <span className="text-[20px] leading-[30px] font-[600px] font-poppins text-text2 w-[131px] h-[30px]">
                Rp 1.500.000
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
                src="/shop/image 6.png" 
                alt="Muggo" 
                width={285}
                height={301}
                className=" object-cover"
              />
              <div className="absolute top-2 right-2 bg-accent1 text-white text-sm px-2 py-3 rounded-full">
                New
              </div>
            </div>
            <div className="p-4" style={{ height: "145px" }}>
              <h3 className="text-2xl leading-[28.8px] font-[600px] font-poppins w-[123px] h-[29px] text-text2">
              Muggo
              </h3> 
              <p className="text-[16px] leading-[24px] font-[500px] font-poppins text-gray4  pt-2">
              Small mug
              </p> 
              <div className="flex items-center justify-between mt-2">
                <span className="text-[20px] leading-[30px] font-[600px] font-poppins text-text2 w-[131px] h-[30px]">
                Rp 150.000
                </span> 
              </div>
            </div>
          </div>
          {/* Product Card 3 */}
          <div
            className=" bg-bg2 m-4"
            style={{ width: "285px", height: "446px" }} // Explicitly setting card dimensions
          >
            <div className="relative" style={{ width: "285px", height: "301px" }}>
              <Image
                src="/shop/image 7.png" 
                alt="Pingky" 
                width={285}
                height={301}
                className=" object-cover"
              />
              <div className="absolute top-2 right-2 bg-accent2 text-white text-sm px-1 py-3 rounded-full">
               -50%
              </div>
            </div>
            <div className="p-4" style={{ height: "145px" }}>
              <h3 className="text-2xl leading-[28.8px] font-[600px] font-poppins w-[123px] h-[29px] text-text2">
              Pingky
              </h3> 
              <p className="text-[16px] leading-[24px] font-[500px] font-poppins text-gray4  pt-2">
              Cute bed set
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
                src="/shop/images.png" 
                alt="Potty" 
                width={285}
                height={301}
                className=" object-cover"
              />
              <div className="absolute top-2 right-2 bg-accent1 text-white text-sm px-2 py-3 rounded-full">
                New
              </div>
            </div>
            <div className="p-4" style={{ height: "145px" }}>
              <h3 className="text-2xl leading-[28.8px] font-[600px] font-poppins w-[123px] h-[29px] text-text2">
              Potty
              </h3> 
              <p className="text-[16px] leading-[24px] font-[500px] font-poppins text-gray4  pt-2">
              Minimalist flower pot
              </p> 
              <div className="flex items-center justify-between mt-2">
                <span className="text-[20px] leading-[30px] font-[600px] font-poppins text-text2 w-[131px] h-[30px]">
                Rp 500.000
                </span> 
              </div>
            </div>
          </div>
        </div>
        {/*button */}
        <div className="flex justify-center mt-8">
          <button className="px-10 py-3 rounded-sm text-primary border-primary border text-[16px] leading-[24px] bg-primary1 font-poppins hover:scale-100">
            Show More
          </button>
        </div>
    </div>
    </section>
  )
}

export default OurPoduct
