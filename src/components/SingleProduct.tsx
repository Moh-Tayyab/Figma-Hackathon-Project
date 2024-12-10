import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

const SingleProduct = () => {
  return (
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
            <p className='pl-2 text-black'>Asgaard sofa</p>
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
                  src="/sofa.png"
                  alt={`Sofa ${i}`}
                  width={120}
                  height={90}
                  className="rounded bg-[#F9F1E7] object-cover object-center hover:cursor-pointer hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* Main Product Image */}
          <div className="flex-1 flex justify-center items-start bg-[#F9F1E7] mb-6 lg:mb-0 h-[440px] pt-20">
            <Image
              className="rounded object-cover hover:scale-110"
              src="/sofa3.png"
              alt="Main Product"
              width={481}
              height={391}
            />
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 text-start lg:pl-6 lg:mt-0">
            <h1 className="text-black text-2xl lg:text-4xl font-semibold mb-2">Asgaard Sofa</h1>
            <p className="text-[#9F9F9F] text-lg lg:text-2xl font-medium mb-4">Rs. 250,000.00</p>
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
              <button className="border border-black px-4 sm:px-6 py-2 sm:py-3 rounded hover:scale-110 transition  sm:w-auto">
                Add to Cart
              </button>
              <button className="border border-black px-4 sm:px-6 py-2 sm:py-3 rounded hover:scale-110 transition  sm:w-auto">
                Compare
              </button>
            </div>
            <ul className="text-sm lg:text-base text-[#9F9F9F] gap-5">
              <li>SKU: SS001</li>
              <li>Category: Sofas</li>
              <li>Tags: Sofa, Chair, Home, Shop</li>
              <li className="flex items-center gap-2">
                Share: <FaFacebook className="text-black" /> <FaLinkedin className="text-black" />{' '}
                <FaTwitter className="text-black" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
