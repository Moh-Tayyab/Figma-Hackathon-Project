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
  SheetTrigger,
} from "@/components/ui/shoppingcartsheet";
import { useAtom, useAtomValue } from "jotai";
import { cartAtom, cartQuantity } from "@/lib/atom";

const ShoppingCart = () => {
  const cartItemsQuantity = useAtomValue(cartQuantity)
 
  const [cartItems, setCartItems] = useAtom(cartAtom);
  const removeItem = (slug: string) => {
    setCartItems(prevCart => prevCart.filter(item => item.product.slug !== slug));
  };

 
  const calculateSubtotal = () => {
    if (!cartItems || cartItems.length === 0) {
      return 0;
    }

    return cartItems.reduce((total, item) => {
      const price = Number(item?.product?.price) || 0;
      const quantity = Number(item?.quantity) || 0;

      if (price === 0 || quantity === 0) {
        console.error("Invalid price or quantity for item:", item);
        return total; // Skip invalid items
      }

      return total + price * quantity;
    }, 0);
  };

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <div>
          <MdOutlineShoppingCart className="h-auto w-[32px] hover:scale-110 hover:text-primary hover:cursor-pointer" />
          <span className='absolute text-[12px] top-6  bg-primary w-[18px] h-auto rounded-3xl text-center text-white font-urbanist  font-black'>{cartItemsQuantity}</span></div>
        </SheetTrigger>
        <SheetContent
          aria-describedby="shopping-cart-description"
          id="shopping-cart-content">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center pb-8 pt-2 border-b-2 border-[#9F9F9F] h-auto">
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
            <div className="flex flex-col items-center gap-4 h-auto">
                {cartItems && cartItems?.length > 0 ? (   
              cartItems.map((cartItem => (
                <div
                  key={cartItem.product.slug}
                  className="flex flex-col md:flex-row gap-4 items-center pr-3">
                  <Image
                    //loader={()=>urlForImage(product.images[i]).url()}
                    src={(cartItem.product.imageUrl)}
                    alt={ cartItem.product.productImage}
                    width={108}
                    height={105}
                    className="bg-[#FAF3EA] rounded-xl w-[108px] h-[105px] hover:scale-110"
                  />

                  <div className="text-center md:text-left items-center pl-2">
                    <h2 className="pb-3 text-black text-[14px] md:text-[16px]">
                      {cartItem.product.title} 
                    </h2>
                    <div className="flex justify-center md:justify-start gap-2">
                      <span className="pr-3">{ cartItem.quantity} 
                      </span>
                      <span className="pr-3">x</span>
                      <span className="text-[#B88E2F] text-[12px] md:text-[14px] font-poppins font-medium leading-[18px]">
                        { cartItem.product.price} 
                      </span>
                    </div>
                  </div>
                  <CiCircleRemove className="w-6 h-6 mt-4 md:mt-7 md:ml-7 bg-[#9F9F9F] text-white rounded-full hover:scale-110 text-[14px] hover:cursor-pointer"
                    onClick={() => removeItem(cartItem.product.slug)}
                   />
                </div>
              )))): (
                <div className="flex items-center justify-center ">
                  <p className="text-[16px] text-[#9F9F9F] font-poppins font-medium">
                    Your cart is empty
                  </p>
                </div>
              )
            }
            </div>
          </div>
          <div className="flex flex-col md:flex-row text-start items-center gap-4 mt-20 justify-between border-b-2 border-[#9F9F9F] pb-10 w-auto h-auto">
            <h2 className="text-black font-poppins font-medium text-[14px] md:text-[16px] leading-[24px]">
              Subtotal
            </h2>
            <h3 className="text-primary font-poppins font-semibold text-[14px] md:text-[16px] leading-[24px]">
              {calculateSubtotal().toFixed(2)} 
            </h3>
          </div>
          <SheetHeader>
          </SheetHeader>
          <SheetFooter>
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center py-8 h-auto">
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
              <Link href="/comparison" passHref>
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
