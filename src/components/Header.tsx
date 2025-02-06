"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { TbUserExclamation } from "react-icons/tb";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/smalldevicesheet";
import ShoppingCart from "@/components/ShoppingCart";
import Link from "next/link";
import { useAtom } from "jotai";
import { wishlistAtom } from "@/lib/atom";
import { UserButton, SignInButton, useUser } from "@clerk/nextjs";
import SearchModal from "./SearchBar";

const Header = () => {
  const { isSignedIn } = useUser();
  const [wishlistItems] = useAtom(wishlistAtom);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const toggleSearchModal = () => setIsSearchModalOpen(!isSearchModalOpen);

  return (
    <header className="w-full bg-white shadow-sm top-0 z-50">
      <div className="container mx-auto px-4 sm:px-4 lg:px-8 justify-between">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo1.png"
              alt="Furniro Logo"
              width={32}
              height={32}
              className="h-6 w-6"
            />
            <span className="text-2xl font-bold text-gray-900">
              Furniro
            </span>
          </Link>

          {/* Desktop Navigation */}
           <nav className="hidden md:flex items-center gap-8 mx-8">
            <Link href="/" className="text-gray-600 hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link href="/shop" className="text-gray-600 hover:text-primary transition-colors font-medium">
              Shop
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-primary transition-colors font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </nav> 

          {/* Icons Section */}
          <div className=" items-center gap-4 sm:gap-6 flex">
            {/* Search Icon */}
            <button
              onClick={toggleSearchModal}
              className="p-1 text-gray-600 hover:text-primary transition-colors hidden md:flex"
            >
              <IoSearch className="h-6 w-6" />
            </button>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="p-1 relative text-gray-600 hover:text-primary transition-colors hidden md:flex"
            >
              <FaRegHeart className="h-6 w-6" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full  items-center justify-center hidden md:flex">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            {/* Shopping Cart */}
            <div className="p-1 text-gray-600 hover:text-primary transition-colors hidden md:flex">
              <ShoppingCart />
            </div>
         {/* Toggle Button for Small Screens */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="text-primary" size={24} />
            </SheetTrigger>
            <SheetContent>
              <ul className="flex flex-col text-[#333333] md:flex-row gap-4 p-4 items-center">
                {/* Search and Icons */}
                <div className="flex-row flex lg:flex gap-8 items-center  text-primary">
                  {/* Search Icon for Large Screens */}

                  {isSearchModalOpen && (
                    <SearchModal onClose={() => setIsSearchModalOpen(false)} />
                  )}
                  <button
                    onClick={toggleSearchModal}
                    className="focus:outline-none">
                    <IoSearch className="h-[32px] w-[32px] text-center hover:scale-110 hover:text-primary" />
                  </button>
                  <Link href={"/wishlist"}>
                    <FaRegHeart className="h-[32px] w-[32px] hover:scale-110  hover:text-[#f7e9d9]" />
                    <span className="absolute text-[12px] top-6  bg-primary w-[18px] h-auto rounded-3xl text-center text-white font-urbanist  font-black">
                      {wishlistItems.length}
                    </span>
                  </Link>
                  <ShoppingCart />
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
        
         {/* User Account */}
         <div className="p-1 text-gray-600 hover:text-primary transition-colors">
              {isSignedIn ? (
                <UserButton appearance={{
                  elements: {
                    avatarBox: "h-8 w-8",
                  }
                }} />
              ) : (
                <SignInButton>
                  <button>
                    <TbUserExclamation className="h-6 w-6" />
                  </button>
                </SignInButton>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      {isSearchModalOpen && (
        <SearchModal onClose={() => setIsSearchModalOpen(false)} />
      )}
    </header>
  );
};

export default Header;