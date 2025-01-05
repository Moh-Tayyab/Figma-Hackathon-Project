"use client";
import Image from "next/image";
import Link from "next/link";
import { CartContext } from "@/app/context/CartContext";
import { useContext } from "react";

import { urlFor } from "@/sanity/lib/image";
import { AiFillDelete } from "react-icons/ai";
const page = () => {
  const { cartItems, quantity, totalQuantity, onRemove, totalPrice }: any =
    useContext(CartContext);
  return (
    <div>
      <h1 className="font-poppins font-semibold text-xl ">Orders</h1>
      <div className="">
        {/* Product Details Section */}
        <div className="producDetails flex justify-between  p-4 space-x-6  h-[4rem] bg-[#F9F1E7] rounded-sm">
          <h2>Product</h2>
          <h2>Price</h2>
          <h2>Quantity</h2>
          <h2>Track Order</h2>
        </div>
        <div className="flex flex-col gap-4 p-4">
          {/* Product Row */}
          {cartItems.map((product: any) => (
            <div
              key={product._id}
              className="flex justify-between items-center gap-2 mt-4 px-4">
              <Link href={"/singleproduct"}>
                <Image
                  src={urlFor(product.images[0]).url()}
                  width={50}
                  height={50}
                  alt={product.images[0]}
                  className="hover:scale-110 hover:cursor-pointer"
                />
              </Link>
              
              <p>{totalPrice}</p>
              <input
                  type="number"
                  className="w-16 border rounded-md p-1"
                  defaultValue={totalQuantity}
                />
              <Link href={"/orders/trackorder"}>
                <button className="bg-white text-black px-2 py-1 rounded-lg border hover:bg-black hover:text-white">
                  Track Order
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
