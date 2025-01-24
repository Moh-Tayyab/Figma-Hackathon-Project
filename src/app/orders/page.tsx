"use client";
import Image from "next/image";
import Link from "next/link";
import { useAtom } from "jotai";
import { urlFor } from "@/sanity/lib/image";
import { cartAtom} from "@/lib/atom";
//import { AiFillDelete } from "react-icons/ai";
const page = () => {
  const [cartItems, setCartItems] = useAtom(cartAtom);
  
    const removeItem = (slug: string) => {
      setCartItems(prevCart => prevCart.filter(item => item.product.slug!== slug));
    };
  
    const calculateSubtotal = () => {
      return cartItems.reduce((total, item) => {
        const price = item?.product?.price || 0;
        const quantity = item?.quantity || 0;
    
        // Ensure price and quantity are numbers
        if (typeof price !== "number" || typeof quantity !== "number") {
          return total; // Skip this item
        }
    
        return total + price * quantity;
      }, 0);
    };
  
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
          {cartItems.map(cartItem => (
            <div
              key={cartItem.product.slug}
              className="flex justify-between items-center gap-2 mt-4 px-4">
              <Link href={"/singleproduct"}>
                <Image
                  src={urlFor(cartItem.product.imageUrl).url()}
                  width={50}
                  height={50}
                  alt={cartItem.product.slug}
                  className="hover:scale-110 hover:cursor-pointer"
                />
              </Link>
              
              <p>{calculateSubtotal()}</p>
              <input
                  type="number"
                  className="w-16 border rounded-md p-1"
                  defaultValue={cartItem.quantity}
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
