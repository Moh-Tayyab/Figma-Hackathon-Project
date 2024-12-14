import React from 'react'
import Image from 'next/image'
import Card from './Card'
import Link from 'next/link'



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
      <Link href= {'/singleproduct'}>
      <div className="container px-5 pb-24">
            {/* Wrapper div for flex grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Product Card 1 */}
              <div className="bg-bg2 m-4">
                <div className="relative w-full h-[300px]">
                  <Image
                    src="/shop/image 9.png"
                    alt="Syltherine"
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-accent2 text-white text-sm px-1 py-3 rounded-full">
                    -30%
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold font-poppins text-text2">Syltherine</h3>
                  <p className="text-sm text-gray4 mt-2">Stylish cafe chair</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-semibold text-text2">Rp 2.500.000</span>
                    <span className="text-sm text-gray4 line-through">Rp 3.500.000</span>
                  </div>
                </div>
              </div>
      
              {/* Product Card 2 */}
              <div className="bg-bg2 m-4">
                <div className="relative w-full h-[300px]">
                  <Image
                    src="/shop/image 6.png"
                    alt="Leviosa"
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold font-poppins text-text2">Leviosa</h3>
                  <p className="text-sm text-gray4 mt-2">Stylish cafe chair</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-semibold text-text2">Rp 2.500.000</span>
                  </div>
                </div>
              </div>
      
              {/* Product Card 3 */}
              <div className="bg-bg2 m-4">
                <div className="relative w-full h-[300px]">
                  <Image
                    src="/shop/image 7.png"
                    alt="Lolito"
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-accent2 text-white text-sm px-1 py-3 rounded-full">
                    -50%
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold font-poppins text-text2">Lolito</h3>
                  <p className="text-sm text-gray4 mt-2">Luxury big sofa</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-semibold text-text2">Rp 7.000.000</span>
                    <span className="text-sm text-gray4 line-through">Rp 3.500.000</span>
                  </div>
                </div>
              </div>
      
              {/* Product Card 4 */}
              <div className="bg-bg2 m-4">
                <div className="relative w-full h-[300px]">
                  <Image
                    src="/shop/images.png"
                    alt="Respira"
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-accent1 text-white text-sm px-2 py-3 rounded-full">
                    New
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold font-poppins text-text2">Respira</h3>
                  <p className="text-sm text-gray4 mt-2">Outdoor bar table and stool</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-semibold  text-text2">Rp 2.500.000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Link>
        {/*button */}
        <div className="flex justify-center mt-8">
          <Link href={'/shop'}>
          <button className="px-10 py-3 rounded-sm text-primary border-primary border text-[16px] leading-[24px] bg-primary1 font-poppins  hover:scale-110">
            Show More
          </button></Link>
        </div>
    </div>
    </section>
  )
}

export default OurPoduct
