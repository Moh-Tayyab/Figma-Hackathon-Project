import { CiCircleRemove } from "react-icons/ci";
import Image from 'next/image';
import Link from 'next/link'; 
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

const ShoppingCart = () => {
  return (
    <div className="">
      <Sheet>
        <SheetTrigger asChild>
        <MdOutlineShoppingCart className="h-[32px] w-[32px] hover:scale-110 hover:text-[#f7e9d9]" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle >
              <div className="flex flex-row gap-4 justify-between items-center pb-10  pt-5 border-b-2 border-[#9F9F9F]">
                <h2 className="font-poppins text-[24px] leading-9 font-semibold">Shopping Cart</h2>
                <div className="flex items-center gap-2">
                  <BsBagX size={24} className="text-[#9F9F9F]" />

                </div>
              </div>
            </SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 pt-10 ">
            <div className="flex flex-col items-center gap-4">
              {/* First product */}
              <div className="flex-row flex gap-4 items-center pr-3">
                <Image
                  src={'/sofa3.png'}
                  alt="Product"
                  width={108}
                  height={105}
                  className="bg-[#FAF3EA] rounded-xl w-[108px] h-[105px] hover:scale-110"
                />
                <div className="items-center pl-2">
                  <h2 className="pb-3 text-black">Asgaard Sofa</h2>
                  <span className="pr-3">1</span>
                  <span className="pr-3">x</span>
                  <span className="text-[#B88E2F] text-[12px] font-poppins font-[500px] leading-[18px]">
                    Rs. 250,000.00
                  </span>
                </div>
                <CiCircleRemove className="w-6 h-6 mt-7 ml-7 bg-[#9F9F9F] text-white rounded-full hover:scale-110 text-[14px] hover:cursor-pointer" />
              </div>
              {/* Second product */}
              <div className="flex-row flex gap-4 items-center">
                <Image
                  src={'/sofaa5.png'}
                  alt="Product"
                  width={108}
                  height={105}
                  className="rounded-xl hover:scale-110"
                />
                <div className="items-center pl-2">
                  <h2 className="pb-3 text-black">Casaliving Wood</h2>
                  <span className="pr-3">1</span>
                  <span className="pr-3">x</span>
                  <span className="text-[#B88E2F] text-[12px] font-poppins font-[500px] leading-[18px]">
                    Rs. 250,000.00
                  </span>
                </div>
                <CiCircleRemove className="w-6 h-6 mt-7 ml-4 bg-[#9F9F9F] text-white rounded-full hover:scale-110 text-[14px] hover:cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="flex flex-row text-start items-center gap-4 mt-20 justify-between  border-b-2 border-[#9F9F9F] pb-10 w-auto">
            <h2 className="text-black font-poppins font-[400px] text-[16px] leading[24px]">
              Subtotal
            </h2>
            <h3 className="text-primary font-poppins font-[600px] text-[16px] leading[24px]">
              Rs. 520,000.00
            </h3>
          </div>
          <SheetFooter>
            <div className="flex flex-row gap-4 justify-between items-center py-10">
              <Link href="/cart" passHref>
                <Button className="bg-white text-black hover:scale-110 rounded-full border-black px-8 border hover:text-white hover:bg-primary">
                  Cart
                </Button>
              </Link>

              <Link href="/checkout" passHref>
              <Button className="bg-white text-black hover:scale-110 rounded-full border-black py-1 px-4 border hover:text-white hover:bg-primary">Checkout</Button> </Link>
              <Link href="/comparsion" passHref>
              <Button className="bg-white text-black hover:scale-110 rounded-full border-black py-1 px-4 border hover:text-white hover:bg-primary">Comparison</Button> </Link>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ShoppingCart;
