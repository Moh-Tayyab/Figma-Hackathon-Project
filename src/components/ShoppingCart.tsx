"use client";
import { CiCircleRemove } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import { BsBagX } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet2";
import { useContext, useState } from "react";
import { CartContext } from "@/app/context/CartContext";
import { urlFor } from "@/sanity/lib/image";

const ShoppingCart = () => {
  const { cartItems = [], quantity, totalQuantity, onRemove, totalPrice }: any = useContext(CartContext);
  
  //console.log("cartItemsfinder", cartItems);
  
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <div>
          <MdOutlineShoppingCart className="h-[32px] w-[32px] hover:scale-110 hover:text-primary hover:cursor-pointer" />
          <span className='absolute text-[12px] top-6  bg-primary w-[18px] h-[18px] rounded-3xl text-center text-white font-urbanist  font-black'>{totalQuantity}</span></div>
        </SheetTrigger>
        <SheetContent
          aria-describedby="shopping-cart-description"
          id="shopping-cart-content">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center pb-8 pt-2 border-b-2 border-[#9F9F9F]">
            <h2 className="font-poppins text-[20px] md:text-[24px] leading-9 font-semibold">
              Shopping Cart
            </h2>
            <div className="flex items-center gap-2">
              <BsBagX
                size={24}
                className="text-[#9F9F9F] hover: cursor-pointer"
              />
            </div>
          </div>

          <div className="grid gap-4 pt-10">
            <div className="flex flex-col items-center gap-4">
                {cartItems && cartItems?.length > 0 ? (   
              cartItems.map((product: any ) => (
                <div
                  key={product._id}
                  className="flex flex-col md:flex-row gap-4 items-center pr-3">
                  <Image
                    //loader={()=>urlForImage(product.images[i]).url()}
                    src={urlFor(product.images[0]).url()}
                    alt={product.images[0]}
                    width={108}
                    height={105}
                    className="bg-[#FAF3EA] rounded-xl w-[108px] h-[105px] hover:scale-110"
                  />

                  <div className="text-center md:text-left items-center pl-2">
                    <h2 className="pb-3 text-black text-[14px] md:text-[16px]">
                      {product.name}
                    </h2>
                    <div className="flex justify-center md:justify-start gap-2">
                      <span className="pr-3">{totalQuantity} 
                      </span>
                      <span className="pr-3">x</span>
                      <span className="text-[#B88E2F] text-[12px] md:text-[14px] font-poppins font-medium leading-[18px]">
                        {product.orignalPrice}
                      </span>
                    </div>
                  </div>
                  <CiCircleRemove className="w-6 h-6 mt-4 md:mt-7 md:ml-7 bg-[#9F9F9F] text-white rounded-full hover:scale-110 text-[14px] hover:cursor-pointer"
                    onClick={() => onRemove(product)}
                   />
                </div>
              ))): (
                <div className="flex items-center justify-center ">
                  <p className="text-[16px] text-[#9F9F9F] font-poppins font-medium">
                    Your cart is empty
                  </p>
                </div>
              )
            }
            </div>
          </div>
          <div className="flex flex-col md:flex-row text-start items-center gap-4 mt-20 justify-between border-b-2 border-[#9F9F9F] pb-10 w-auto">
            <h2 className="text-black font-poppins font-medium text-[14px] md:text-[16px] leading-[24px]">
              Subtotal
            </h2>
            <h3 className="text-primary font-poppins font-semibold text-[14px] md:text-[16px] leading-[24px]">
              {totalPrice} 
            </h3>
          </div>
          <SheetHeader>
            <SheetTitle>

            </SheetTitle>
          </SheetHeader>
          <SheetFooter>
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center py-8">
              <Link href="/cart" passHref>
                <Button className="bg-white text-black hover:scale-110 rounded-full border-black px-8 border hover:text-white hover:bg-primary">
                  Cart
                </Button>
              </Link>

              <Link href="/checkout" passHref>
                <Button className="bg-white text-black hover:scale-110 rounded-full border-black px-4 border hover:text-white hover:bg-primary">
                  Checkout
                </Button>
              </Link>
              <Link href="/comparsion" passHref>
                <Button className="bg-white text-black hover:scale-110 rounded-full border-black px-4 border hover:text-white hover:bg-primary">
                  Comparison
                </Button>
              </Link>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ShoppingCart;
