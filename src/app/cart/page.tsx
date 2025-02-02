"use client";
import Image from "next/image";
import SubHero from "@/components/SubHero";
import { AiFillDelete } from "react-icons/ai";
import Link from "next/link";
import Services from "@/components/Services";
import { useAtom } from "jotai";
import { cartAtom} from "@/lib/atom";
export default function Cart() {
const [cartItems, setCartItems] = useAtom(cartAtom);

  const removeItem = (slug: string) => {
    setCartItems(prevCart => prevCart.filter(item => item.slug!== slug));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item?.price || 0;
      const quantity = item?.quantity || 0;
  
      // Ensure price and quantity are numbers
      if (typeof price !== "number" || typeof quantity !== "number") {
        return total; // Skip this item
      }
  
      return total + price * quantity;
    }, 0);
  };
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
              {cartItems.map(cartItem => (

              <div key={cartItem.slug} className="flex justify-between items-center gap-4 mt-4 px-2">
                <div className="flex items-center gap-2">
                  <Image
                    src={(cartItem.imageUrl)} 
                    width={50}
                    height={50}
                    alt={cartItem.name}
                    className="hover:scale-110 hover:ursor-pointer"
                  />
                <p >{cartItem.name}</p>
                </div>
                <p>
                  {cartItem.price}
                </p>

                <input
                  type="number"
                  className="w-16 border rounded-md p-1"
                  defaultValue={cartItem.quantity}
                />
                <p>
                    {Number(cartItem.price) * Number (cartItem.quantity)}
                  </p>
                <AiFillDelete className="w-6 h-6 text-primary hover:scale-110 hover:cursor-pointer" 
                onClick={() => removeItem(cartItem.slug)}
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
            <p>
                  </p>
              <span className="pb-4 text-[16px] leading-[36px] font-[500px] font-poppins text-black pr-12">
                Subtotal:
              </span>{" "}
              ${calculateSubtotal().toFixed(2)}
            </p>
            <p className="text-[#B88E2F]">
              <span className="text-[20px] leading-[36px] font-[520px] font-poppins text-black pr-12">
                Total:
              </span>{" "}  
              ${calculateSubtotal().toFixed(2)}
            </p>
            <Link href={cartItems.length > 0 ? "/checkout" : "#"}>
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

