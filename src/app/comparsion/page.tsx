"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Services from "@/components/Services";
import SubHero from "@/components/SubHero";
import { useState, useContext } from "react";
import { CartContext } from "@/app/context/CartContext";
import { urlFor } from "@/sanity/lib/image";
const page = () => {
  const { cartItems }: any = useContext(CartContext);
  return (
    <>
      {/* First Section */}
      <SubHero title="Comparison" home="Home" linkUrl="/comparsion" />
      <div className="mx-auto px-4 sm:px-2 py-16">
        <div className="font-poppins flex flex-col gap-6 items-center sm:items-start lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h2 className="font-medium text-[28px]  text-black leading-[35.4px] pb-5">
              Go to Product <br />
              page for more <br />
              Products
            </h2>
            <div>
              <Link href={"/shop"}>
                <button className="text-[#727272] border-b-2 font-medium text-[20px] leading-[30px] hover:scale-105">
                  View More
                </button>
              </Link>
            </div>
          </div>

          {/* Product 1 */}
          {cartItems.length > 0 &&
            cartItems.map((product: any) => (
              <div className="gap-3 flex flex-col items-center sm:items-start text-center sm:text-left">
                <Image
                  src={urlFor(product.images[0]).url()}
                  alt={product.images[0]}
                  width={270}
                  height={177}
                  className="rounded-lg bg-[#FAF3EA] object-cover hover:scale-110"
                />
                <h2 className="text-2xl font-medium leading-[30.36px] pt-3 pb-2">
                  {product.name}
                </h2>
                <p className="font-medium text-[18px] leading-[30.36px] pb-2">
                  {product.orignalPrice}
                </p>
                <div className="flex items-center mb-4 justify-center sm:justify-start">
                  <p className="pr-2">4.7</p>
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      fill="currentColor"
                      className="w-4 h-4 text-[#FFC700]"
                      viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <svg fill="none" className="w-4 h-4" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="border-l-2 border-[#9F9F9F] h-4 w-1"></span>
                  <span className="ml-2 text-[13px] text-[#9F9F9F]">
                    204 Reviews
                  </span>
                </div>
              </div>
            ))}

          {/* Product 2 */}
          <div className="gap-3 flex flex-col items-center sm:items-start text-center sm:text-left">
            <Image
              src={"/sofaa4.png"}
              alt="Product Image"
              width={280}
              height={177}
              className="rounded-lg bg-[#FAF3EA] object-cover hover:scale-110"
            />
            <h2 className="text-2xl font-medium leading-[30.36px] pt-3 pb-2">
              Outdoor Sofa Set
            </h2>
            <p className="font-medium text-[18px] leading-[30.36px] pb-2">
              Rs. 250,000.00
            </p>
            <div className="flex items-center mb-4 justify-center sm:justify-start">
              <p className="pr-2">4.2</p>
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  fill="currentColor"
                  className="w-4 h-4 text-[#FFC700]"
                  viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
              <svg fill="none" className="w-4 h-4" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="border-l-2 border-[#9F9F9F] h-4 w-1"></span>
              <span className="ml-2 text-[13px] text-[#9F9F9F]">
                145 Reviews
              </span>
            </div>
          </div>

          {/* Add Product Section */}
          <div className="w-full lg:w-auto flex flex-col items-center sm:items-start text-center sm:text-left">
            <h2 className="font-semibold text-[24px] leading-[30.36px] pb-6">
              Add A Product
            </h2>
            <select
              id="country"
              className="w-auto px-4 py-2 border hover:cursor-pointer border-gray-300 rounded-md shadow-sm focus:outline-none bg-primary focus:border-primary text-white">
              <option value="">Choose a Product</option>
              <option value="lo">Lolito</option>
              <option value="pi">Pingky</option>
              <option value="mu">Muggo</option>
            </select>
          </div>
        </div>
      </div>

      {/*second section */}
      <div className="border-t-2 border-[#727272] px-4 sm:px-2 pl-10  font-poppins w-full h-auto">
        {/* General Block */}
        <div className="flex flex-wrap lg:flex-nowrap w-full items-start">
          {/* First Column */}
          <div className="flex flex-col border-r-2 border-[#727272] px-4 lg:px-12 mb-6 lg:mb-0 w-full lg:w-1/3 ">
            <h2 className="font-medium text-[28px] leading-[35.8px] w-[175px] h-[35px]">
              General
            </h2>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6 mt-5">
              Sales Package
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              Model Number
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              Secondary Material
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              Configuration
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              Upholstery Material
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              Upholstery Color
            </p>
          </div>

          {/* Second Column */}
          <div className="flex flex-col border-r-2 border-[#727272] px-4 lg:px-20 mb-6 lg:mb-0 w-full lg:w-1/3">
            <p className="font-[400] text-[20px] leading-[25.5px] py-6 mt-12">
              1 sectional sofa
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              TFCBLIGRBL6SRHS
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              Solid Wood
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              L-shaped
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              Fabric + Cotton
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              Bright Grey & Lion
            </p>
          </div>

          {/* Third Column */}
          <div className="flex flex-col border-r-2 border-[#727272] px-4 lg:px-20 w-full lg:w-1/3">
            <p className="font-[400] text-[20px] leading-[25.5px] py-6 mt-12">
              1 Three Seater, 2 Single Seater
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px]  pb-6 pt-3">
              DTUBLIGRBL568
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              Solid Wood
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              L-shaped
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              Fabric + Cotton
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              Bright Grey & Lion
            </p>
          </div>
        </div>

        {/* Product Block */}
        <div className="flex flex-wrap lg:flex-nowrap w-full items-start mt-10">
          {/* First Column */}
          <div className="flex flex-col border-r-2 border-[#727272] px-4 lg:px-16 mb-6 lg:mb-0 w-full lg:w-1/3">
            <h2 className="font-medium text-[28px] leading-[35.8px] w-[175px] h-[35px]">
              Product
            </h2>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              Filling Material
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              Finish Type
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              Adjustable Headrest
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              Maximum Load Capacity
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              Origin of Manufacture
            </p>
          </div>

          {/* Second Column */}
          <div className="flex flex-col border-r-2 border-[#727272] px-4 lg:px-20 mb-6 lg:mb-0 w-full lg:w-1/3">
            <p className="font-[400] text-[20px] leading-[25.5px] py-6 mt-10">
              Foam
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              Bright Grey & Lion
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">No</p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              280 KG
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              India
            </p>
          </div>

          {/* Third Column */}
          <div className="flex flex-col border-r-2 border-[#727272] px-4 lg:px-20 w-full lg:w-1/3">
            <p className="font-[400] text-[20px] leading-[25.5px] py-6 mt-10">
              Matte
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              Bright Grey & Lion
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">Yes</p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              300 KG
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              India
            </p>
          </div>
        </div>

        {/* Warranty Block */}
        <div className="flex flex-wrap lg:flex-nowrap w-full items-start mt-10">
          {/* First Column */}
          <div className="flex flex-col border-r-2 border-[#727272] px-4 lg:px-16 mb-6 lg:mb-0 w-full lg:w-1/3">
            <h2 className="font-medium text-[28px] leading-[35.8px] w-[175px] h-[35px]">
              Warranty
            </h2>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6 ">
              Warranty Summary
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6 mt-5">
              Warranty Service Type
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6 mt-24">
              Covered in Warranty
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6 mt-5">
              Not Covered in Warranty
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6 mt-20 mb-8">
              Domestic Warranty
            </p>
          </div>

          {/* Second Column */}
          <div className="flex flex-col border-r-2 border-[#727272] px-4 lg:px-20 mb-6 lg:mb-0 w-full lg:w-1/3">
            <p className="font-[400] text-[20px] leading-[25.5px] py-6 mt-10">
              1 Year Manufacturing Warranty
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              For Warranty Claims or Any Product Related Issues Please Email at
              operations@trevifurniture.com
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              Warranty Against Manufacturing Defect
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              The Warranty Does Not Cover Damages Due To Usage Beyond Its
              Intended Use.
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              1 Year
            </p>
            <button className="bg-[#B88E2F] text-white font-[400] text-[20px] leading-[30px] px-4 py-2 rounded-sm">
              Add To Cart
            </button>
          </div>

          {/* Third Column */}
          <div className="flex flex-col border-r-2 border-[#727272] px-4 lg:px-20 w-full lg:w-1/3">
            <p className="font-[400] text-[20px] leading-[25.5px] py-6 mt-10">
              1.2 Year Manufacturing Warranty
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              For Warranty Claims or Any Product Related Issues Please Email at
              support@xyz.com
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              Warranty Limited to Manufacturing Defects
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6">
              The Warranty Does Not Cover Wear & Tear During Normal Usage.
            </p>
            <p className="font-[400] text-[20px] leading-[25.5px] py-6 mt-4">
              3 Months
            </p>
            <button className="bg-[#B88E2F] text-white font-[400] text-[20px] leading-[30px] px-4 py-2 rounded-sm">
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 py-10 mt-10">
        <Services />
      </div>
    </>
  );
};

export default page;
