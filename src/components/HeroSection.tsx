import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative">
    <div className="absolute ">
      <Image
        alt="Hero"
        
        objectFit="cover"
            
        width={1440}
        height={1007.93}
        
        src="/hero.png"
        
      />
    </div>
    <div className="container px-5 py-24 mx-auto flex">
      <div className="lg:w-1/3 md:w-1/2 bg-[#FFF3E3] rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
        <h3 className='font-poppins text-[16px] font-semibold leading[24px] 3% '>New Arrival</h3>
        <h2 className="text-primary font-poppins text-lg mb-1 font-bold text-[42px] leading-[65px]">
        Discover Our 
        <br/>
        New Collection
        </h2>
        <p className="leading-[24px] text-[16px] mb-5 text-text1 font-poppins font-[500px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <div className="relative mb-4">
        
        <button className="text-primary1 bg-primary  py-2  px-6 font-poppins font-[700px] hover:scale-105 text-[16px] leading[24px]">
          Buy Now
        </button>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default HeroSection
