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
          <MdOutlineShoppingCart className="h-[32px] w-[32px] hover:scale-110 hover:text-[#f7e9d9] hover:cursor-pointer" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <div className="flex flex-col md:flex-row gap-4 justify-between items-center pb-10 pt-2 border-b-2 border-[#9F9F9F]">
                <h2 className="font-poppins text-[20px] md:text-[24px] leading-9 font-semibold">Shopping Cart</h2>
                <div className="flex items-center gap-2">
                  <BsBagX size={24} className="text-[#9F9F9F] hover: cursor-pointer" />
                </div>
              </div>
            </SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 pt-10">
            <div className="flex flex-col items-center gap-4">
              {/* First product */}
              <div className="flex flex-col md:flex-row gap-4 items-center pr-3">
                <Image
                  src={'/sofa3.png'}
                  alt="Product"
                  width={108}
                  height={105}
                  className="bg-[#FAF3EA] rounded-xl w-[108px] h-[105px] hover:scale-110"
                />
                <div className="text-center md:text-left items-center pl-2">
                  <h2 className="pb-3 text-black text-[14px] md:text-[16px]">Asgaard Sofa</h2>
                  <div className="flex justify-center md:justify-start gap-2">
                    <span className="pr-3">1</span>
                    <span className="pr-3">x</span>
                    <span className="text-[#B88E2F] text-[12px] md:text-[14px] font-poppins font-medium leading-[18px]">
                      Rs. 250,000.00
                    </span>
                  </div>
                </div>
                <CiCircleRemove className="w-6 h-6 mt-4 md:mt-7 md:ml-7 bg-[#9F9F9F] text-white rounded-full hover:scale-110 text-[14px] hover:cursor-pointer" />
              </div>
              {/* Second product */}
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <Image
                  src={'/sofaa5.png'}
                  alt="Product"
                  width={108}
                  height={105}
                  className="rounded-xl hover:scale-110"
                />
                <div className="text-center md:text-left items-center pl-2">
                  <h2 className="pb-3 text-black text-[14px] md:text-[16px]">Casaliving Wood</h2>
                  <div className="flex justify-center md:justify-start gap-2">
                    <span className="pr-3">1</span>
                    <span className="pr-3">x</span>
                    <span className="text-[#B88E2F] text-[12px] md:text-[14px] font-poppins font-medium leading-[18px]">
                      Rs. 250,000.00
                    </span>
                  </div>
                </div>
                <CiCircleRemove className="w-6 h-6 mt-4 md:mt-7 md:ml-4 bg-[#9F9F9F] text-white rounded-full hover:scale-110 text-[14px] hover:cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row text-start items-center gap-4 mt-20 justify-between border-b-2 border-[#9F9F9F] pb-10 w-auto">
            <h2 className="text-black font-poppins font-medium text-[14px] md:text-[16px] leading-[24px]">
              Subtotal
            </h2>
            <h3 className="text-primary font-poppins font-semibold text-[14px] md:text-[16px] leading-[24px]">
              Rs. 520,000.00
            </h3>
          </div>
          <SheetFooter>
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center py-10">
              <Link href="/cart" passHref>
                <Button className="bg-white text-black hover:scale-110 rounded-full border-black px-8 border hover:text-white hover:bg-primary">
                  Cart
                </Button>
              </Link>

              <Link href="/checkout" passHref>
                <Button className="bg-white text-black hover:scale-110 rounded-full border-black py-1 px-4 border hover:text-white hover:bg-primary">
                  Checkout
                </Button>
              </Link>
              <Link href="/comparsion" passHref>
                <Button className="bg-white text-black hover:scale-110 rounded-full border-black py-1 px-4 border hover:text-white hover:bg-primary">
                  Comparison
                </Button>
              </Link>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ShoppingCart;
