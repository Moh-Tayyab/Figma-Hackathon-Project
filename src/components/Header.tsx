"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
//import { MdOutlineShoppingCart } from "react-icons/md";
import { TbUserExclamation } from "react-icons/tb";
//import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
//import { CartContext } from "./context/CartContext";
import ShoppingCart from "@/components/ShoppingCart";

const Header = () => {
  //const [totalQuantity, setTotalQuantity] = useState(0);

  const [menuOpen] = useState(false);

  //const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full bg-white shadow-md ">
      <div className="flex items-center justify-between px-5 py-4 lg:px-[20px]">
        {/* Logo */}
        <div className="flex flex-row gap-3 items-center pr-20">
          <Image src="/logo1.png" alt="Logo" width={50} height={32} />
          <Link href="/">
            <h1 className="text-3xl font-inter font-bold text-Text2 cursor-pointer lg:pr-20">
              Furniro
            </h1>
          </Link>
        </div>

        {/* Toggle Button for Small Screens */}

        <div className="md:hidden sm:ml-[400px] ml-16">
          <Sheet>
            <SheetTrigger>
              <Menu className="text-primary" size={24} />
            </SheetTrigger>
            <SheetContent>
              <ul className="flex flex-col text-[#333333] md:flex-row gap-4 p-4 items-center">
                {/* Search and Icons */}
                <div className="flex-row flex lg:flex gap-8 items-center  text-primary">
                  <Link href={"/"}>
                    <TbUserExclamation className="h-[32px] w-[32px] hover:scale-110 hover:text-[#f7e9d9]" />
                  </Link>
                  <Link href={"/"}>
                    <IoSearch className="h-[32px] w-[32px] text-center hover:scale-110 hover:text-[#f7e9d9]" />
                  </Link>
                  <Link href={"/checkout"}>
                    <FaRegHeart className="h-[32px] w-[32px] hover:scale-110  hover:text-[#f7e9d9]" />
                  </Link>
                   <ShoppingCart /> 

                  {/* <MdOutlineShoppingCart className="h-[32px] w-[32px] hover:scale-110 hover:text-primary hover:cursor-pointer" />
                  <span className="absolute text-[12px] top-6 right-12  bg-primary w-[18px] h-[18px] rounded-3xl text-center text-white font-urbanist  font-black">
                    1
                  </span> */}
                </div>
                <li className="font-bold font-helvetica text-[#FFF3E3] text-[14px] sm:text-[16px]">
                  <Link href="/">Home</Link>
                </li>
                <li className="font-bold font-helvetica text-[#FFF3E3] text-[14px] sm:text-[16px]">
                  <Link href="/shop">Shop</Link>
                </li>
                <li className="font-bold font-helvetica text-[#FFF3E3] text-[14px] sm:text-[16px]">
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="font-bold font-helvetica text-[#FFF3E3] text-[14px] sm:text-[16px]">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } lg:flex lg:ml-4 absolute top-16 left-1 w-full flex-col items-center gap-6 bg-white py-4 shadow-md lg:relative lg:flex-row lg:gap-16 lg:top-0 lg:shadow-none`}>
          <Link
            href="/"
            className="text-black hover:underline font-normal font-poppins text-[16px] hover:text-primary">
            Home
          </Link>
          <Link
            href="/shop"
            className="text-black hover:underline font-normal font-poppins text-[16px] hover:text-primary">
            Shop
          </Link>
          <Link
            href="/blog"
            className="text-black hover:underline font-normal font-poppins text-[16px] hover:text-primary">
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-black hover:underline font-normal font-poppins text-[16px] hover:text-primary">
            Contact
          </Link>
        </nav>

        {/* Search and Icons */}
        <div className="hidden lg:flex gap-8 items-center">
          <Link href={"/"}>
            <TbUserExclamation className="h-[32px] w-[32px] hover:scale-110 hover:text-primary" />
          </Link>
          <Link href={"/"}>
            <IoSearch className="h-[32px] w-[32px] text-center hover:scale-110 hover:text-primary" />
          </Link>
          <Link href={"/checkout"}>
            <FaRegHeart className="h-[32px] w-[32px] hover:scale-110  hover:text-primary" />
          </Link>
           <ShoppingCart /> 
          {/* <MdOutlineShoppingCart className="h-[34px] w-[34px] hover:scale-110  hover:cursor-pointer border bg-white border-gray-300 rounded-lg " />
          <span className='absolute text-[12px] top-7 right-14 bg-primary w-[18px] h-[18px] rounded-3xl text-center text-white font-urbanist  font-black'>{totalQuantity}</span> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
