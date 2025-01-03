"use client";
import Image from "next/image";
import SubHero from "@/components/SubHero";
import { AiFillDelete } from "react-icons/ai";
import Link from "next/link";
import Services from "@/components/Services";
import { CartContext } from "@/app/context/CartContext";
import { useContext } from 'react';

import { urlFor } from "@/sanity/lib/image";

export default function Cart() {
  const { cartItems ,quantity, totalQuantity, onRemove, totalPrice }: any = useContext(CartContext);
  return (
    <>
      <SubHero  title = "Cart" home = "Home" linkUrl="/cart"/>

      {/* Cart Container */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto flex flex-wrap ">
          {/* Left Section */}
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            {/* Product Details Section */}
            <div className="producDetails flex justify-around  p-4 space-x-2  h-[4rem] bg-[#F9F1E7] rounded-sm">
              <h2>Product</h2>
              <h2>Price</h2>
              <h2>Quantity</h2>
              <h2>Subtotal</h2>
            </div>
            <div className="flex flex-col gap-4 p-4">
              {/* Product Row */}
              {cartItems.map((product: any) => (

              <div key={product._id} className="flex justify-between items-center gap-2 mt-4 px-4">
                <Link href={"/singleproduct"}>
                  <Image
                    src={urlFor(product.images[0]).url()} 
                    width={50}
                    height={50}
                    alt={product.images[0]}
                    className="hover:scale-110 hover:cursor-pointer"
                  />
                </Link>
                <p >{product.name}</p>
                <p>{totalPrice}</p>

                <input
                  type="number"
                  className="w-16 border rounded-md p-1"
                  defaultValue={totalQuantity}
                />
                <p>{totalPrice}</p>
                <AiFillDelete className="w-6 h-6 text-primary hover:scale-110 hover:cursor-pointer" 
                onClick={() => onRemove(product._id)}
                />
              </div>))}
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-2/6 md:w-1/2 bg-[#F9F1E7] flex flex-col md:ml-auto w-[293px] h-[290px] rounded-sm  md:mt-0 items-center text-center justify-center mt-32">
            <h2 className="font-poppins text-[32px] leading-[48px] font-semibold  text-black pb-9">
              Cart Totals
            </h2>
            <p className="text-[#9F9F9F]">
              <span className="pb-4 text-[16px] leading-[36px] font-[500px] font-poppins text-black pr-12">
                Subtotal:
              </span>{" "}
              {totalPrice}
            </p>
            <p className="text-[#B88E2F]">
              <span className="text-[16px] leading-[36px] font-[500px] font-poppins text-black pr-12">
                Total:
              </span>{" "}
              {totalPrice}
            </p>
            <Link href={"/checkout"}>
              <button className="mt-5 rounded-md border-gray-900 border-2 p-2 px-5 hover:scale-110">
                Check Out
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Services />
    </>
  );
}
