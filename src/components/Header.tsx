'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbUserExclamation } from "react-icons/tb";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full bg-white shadow-md ">
      <div className="flex items-center justify-between px-5 py-4 lg:px-[20px]">
        {/* Logo */}
        <div className="flex flex-row gap-3 items-center pr-20">
          <Image
            src="/logo1.png"
            alt="Logo"
            width={50}
            height={32}
          />
          <Link href="/">
            <h1 className="text-3xl font-inter font-bold text-Text2 cursor-pointer lg:pr-20">
              Furniro
            </h1>
          </Link>
        </div>

        {/* Toggle Button for Small Screens */}
<button
  className={`lg:hidden text-black bg-[#F9F1E7] p-2 rounded focus:outline-none transition`}
  onClick={toggleMenu}
>
  {menuOpen ? <HiX className="text-black" /> : <HiMenuAlt3 className="text-black" />}
</button>
        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } lg:flex lg:ml-4 absolute top-16 left-1 w-full flex-col items-center gap-6 bg-white py-4 shadow-md lg:relative lg:flex-row lg:gap-16 lg:top-0 lg:shadow-none`}
        >
          <Link
            href="#"
            className="text-Text2 hover:underline font-normal font-poppins text-[16px]"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="text-Text2 hover:underline font-normal font-poppins text-[16px]"
          >
            Shop
          </Link>
          <Link
            href="/blog"
            className="text-Text2 hover:underline font-normal font-poppins text-[16px]"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-Text2 hover:underline font-normal font-poppins text-[16px]"
          >
            Contact
          </Link>
        </nav>

        {/* Search and Icons */}
        <div className="hidden lg:flex gap-8 items-center">
          <Link href={'/'}>
            <TbUserExclamation className="h-[32px] w-[32px] hover:scale-110 hover:text-Button1" />
          </Link>
          <Link href={'/'}>
          
            <IoSearch className="h-[32px] w-[32px] text-center hover:scale-110" />
          </Link>
          <Link href={'/checkout'}>
            <FaRegHeart className="h-[32px] w-[32px] hover:scale-110 hover:text-Button2 " />
          </Link>
          <Link href={'/cart'}>
            <MdOutlineShoppingCart className="h-[32px] w-[32px] hover:scale-110 hover:text-Button2" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
