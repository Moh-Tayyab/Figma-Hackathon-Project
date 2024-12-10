import React from 'react'
import Card from './Card'
import Image from 'next/image'
import Link from 'next/link'
import SingleProduct from './SingleProduct'

const RelatedProducts = () => {
  return (
    <>
    <SingleProduct />

    <section className="text-gray-600 body-font">
<div className="container px-5 py-24 mx-auto">
  <div className="flex flex-wrap w-full mb-20">
    <div className=" w-full mb-6 lg:mb-0 flex flex-row items-center text-center justify-center gap-9">
      <h1 className="sm:text-3xl leading-9 h-[36px] lg:text-[24px] font-medium font-poppins mb-2 text-[#000000]">
      Description
      </h1>
      <p className='text-[#9F9F9F] leading-9  h-[36px] lg:text-[24px] font-medium font-poppins sm:text-3xl'>Additional Information</p>
      <p className='text-[#9F9F9F] leading-9  h-[36px] lg:text-[24px] font-medium font-poppins sm:text-3xl'>Reviews [5]</p>
    </div>
    <p className=" ml-28 w-[1026px] text-[#9F9F9F] leading-6 lg:text-[16px] font-[400] font-poppins sm:text-3xl mt-10">
    Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
    <br className="hidden lg:inline-block" />
      Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
    </p>
  </div>
  <div className="flex flex-wrap -m-4">
    <div className=" md:w-1/2 lg:w-1/2 p-4">
      <div className="bg-[#F9F1E7] p-6 rounded-lg">
        <Image
          className="rounded w-full object-cover object-center mb-6"
          src="/sofaa2.png"
          alt="content"
          width={605}
          height={348}
        />
       
      </div>
    </div>
    <div className=" md:w-1/2 lg:w-1/2  p-4">
      <div className="bg-[#F9F1E7] p-6 rounded-lg">
        <Image
          className="rounded w-full object-cover object-center mb-6"
          src="/sofaa2.png"
          alt="content"
          width={605}
          height={348}
        /> 
      </div>
    </div>
  </div>
</div>
</section>

      {/* Related Product */}
    <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
      <h1 className ='text-[32px] leading-[48px] font-poppins font-[700] text-4xl mb-4 w-full text-text1'>Related Products</h1> 
      </div> 
      <div>
        <Card />
      </div>
      {/*button */}
      <Link href={'/shop'}>
      <div className="flex justify-center">
          <button className="px-10 py-3 rounded-sm text-primary border-primary border text-[16px] leading-[24px] bg-primary1 font-poppins hover:scale-110">
          Show More
          </button>
          </div>
          </Link>
      </div>
</>
  )
}

export default RelatedProducts
