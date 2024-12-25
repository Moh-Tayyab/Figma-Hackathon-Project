import React from 'react';
import Image from 'next/image';
import { IoMdShare } from "react-icons/io";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import { products } from '@/lib/products';

type tParams = Promise<{ id: string[] }>;

export default async function SingleProduct({ params }: { params: tParams }) {
  const productId = parseInt((await params).id as unknown as string);
  const Product = products.find((product) => product.id === productId);
  if (!Product) {
    return (
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-2xl font-bold text-center">Product Not Found</h1>
      </div>
    );
  }
  //console.log(Product.id);

  return (
    <>
    <div>
    {/* Sub Navbar */}
    <div className="flex items-center justify-between gap-4 bg-[#F9F1E7] mx-auto  px-4 py-8">
        <ul className="flex flex-wrap items-center justify-center space-x-2 mt-4 text-[16px] sm:text-[20px]">
          <Link
            href={'/'}
            className="text-[#9F9F9F] hover:cursor-pointer hover:scale-110 transition-transform"
          >
            Home
          </Link>
          <IoIosArrowForward className="w-4 h-4" />
          <Link
            href={'/shop'}
            className="text-[#9F9F9F] hover:cursor-pointer hover:scale-110 transition-transform"
          >
            Shop
          </Link>
          <IoIosArrowForward className="w-4 h-4" />
          <span> |</span>
          <p className='pl-2 text-black'>{Product.name}</p>
        </ul>
    </div>

    {/* Parent Div */}
    <div className="font-poppins overflow-hidden container mx-auto px-4 md:px-20 pt-20">
      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-6">
        {/* Left Section */}
        <div className="flex lg:flex-col lg:h-[391px] lg:justify-start gap-4 mb-6 lg:mb-0">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="p-2">
              <Image
                src={Product.image}
                alt={Product.name}
                width={90}
                height={90}
                className="rounded bg-[#F9F1E7] object-cover object-center hover:cursor-pointer hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Main Product Image */}
        <div className="flex-1 flex justify-center items-start  mb-6 lg:mb-0 h-[440px] ">
          <Image
            className="rounded object-cover hover:scale-110"
            src={Product.image}
            alt={Product.name}
            width={481}
            height={400}
          />
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 text-start lg:pl-6 lg:mt-0">
          <h1 className="text-black text-2xl lg:text-4xl font-semibold mb-2">{Product.name}</h1>
          <p className="text-[#9F9F9F] text-lg lg:text-2xl font-medium mb-4">{Product.price}</p>
          <div className="flex items-center mb-4">
            {[...Array(4)].map((_, i) => (
              <svg
                key={i}
                fill="currentColor"
                className="w-4 h-4 text-[#FFAD33]"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
            <svg
              fill="none"
              className="w-4 h-4"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="ml-3 text-sm text-[#9F9F9F]">(5 Customer Reviews)</span>
          </div>
          <p className="text-sm lg:text-base text-black mb-4">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
            stout-hearted hero with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound.
          </p>
          <div className="flex flex-col gap-4 mb-6">
            <div>
              <span className="block text-sm lg:text-base text-[#9F9F9F] mb-2">Size</span>
              <div className="flex gap-2">
                {['L', 'XL', 'XS'].map((size) => (
                  <button
                    key={size}
                    className="px-3 py-1 bg-[#F9F1E7] rounded hover:bg-[#B88E2F] hover:text-white transition"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <span className="block text-sm lg:text-base text-[#9F9F9F] mb-2">Colors</span>
              <div className="flex gap-2">
                <button className="w-6 h-6 bg-[#816DFA] rounded-full border-2" />
                <button className="w-6 h-6 bg-black rounded-full border-2" />
                <button className="w-6 h-6 bg-primary rounded-full border-2" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mb-6">
            <button className="border border-black px-4 sm:px-6 py-2 sm:py-3 rounded hover:scale-110 transition  sm:w-auto">
              <span className="p-2">-</span> 1 <span className="p-2">+</span>
            </button>
            <Link href={'/cart'}>
            <button className="border border-black px-4 sm:px-6 py-2 sm:py-3 rounded hover:scale-110 transition  sm:w-auto">
              Add to Cart
            </button></Link>
            <Link href={'/comparsion'}>
            <button className="border border-black px-4 sm:px-6 py-2 sm:py-3 rounded hover:scale-110 transition  sm:w-auto">
              Compare
            </button>
            </Link>
          </div>
          <ul className="text-sm lg:text-base text-[#9F9F9F] gap-5">
            <li className='pt-5'>SKU: {Product.Sku}</li>
            <li className='py-5'>Category: {Product.Category}</li>
            <li className='pb-5'>Tags: Sofa, Chair, Home, Shop</li>
            <li className="flex items-center gap-2">
              Share: <FaFacebook className="text-black" /> <FaLinkedin className="text-black" />{' '}
              <FaTwitter className="text-black" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>


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
      {/* map method */}
        {/* Card */}
        <div className="container px-5 py-10">
      {/* Wrapper div for flex grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Map Method to render product cards */}
        {products.slice(0, 8).map((Product) => {
          return (
            <div key={Product.id} className="bg-bg2 m-4 group">
              {" "}
              {/* Add `group` here */}
              <div className="relative">
                <Image
                  src={Product.image}
                  alt={Product.name}
                  width={170}
                  height={150}
                  className="object-cover w-full h-100"
                />
                {Product.discount && (
                  <div className="absolute top-2 right-2 bg-accent2 text-white text-sm px-1 py-3 rounded-full">
                    -{Product.discount}
                  </div>
                )}
                {Product.new && (
                  <div className="absolute top-2 right-2 bg-accent1 text-white text-sm px-2 py-3 rounded-full">
                    NEW
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Link href={`/shop/${Product.id}`}>
                    <button className="bg-white text-primary hover:cursor-pointer px-4 py-2 mb-4 rounded">
                      Add to Cart
                    </button>
                  </Link>
                  <div className="flex space-x-4 text-white">
                    <button className="hover:text-primary flex items-center">
                     <IoMdShare />
                      Share
                    </button>
                   <Link href={'/comparsion'}> <button className="hover:text-primary  flex items-center">
                     <FaArrowRightArrowLeft />
                      Compare
                    </button> </Link>
                    <button className="hover:text-primary  flex items-center">
                      <FaRegHeart />
                      Like
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold font-poppins text-text2">
                  {Product.name}
                </h3>
                <p className="text-sm text-gray4 mt-2">{Product.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg font-semibold text-text2">
                  {Product.price}
                  </span>
                  {Product.originalPrice && (
                    <span className="text-sm text-gray4 line-through">
                      ${Product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        {/* end of map method */}
      </div>
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
  );
};


