"use client";
import posts from "@/blogdetails/data.json";
import Image from "next/image";
import Link from "next/link";
import { FaCalendar } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { BiNotepad } from "react-icons/bi";
import Blog from "@/components/Blog";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Services from "@/components/Services";
//import { CalendarDays } from "lucide-react";

const Page = () => {
  const post = posts[6];
  return (
    <>
    
        {/* Subhero Section */}
        <section>
      {/* Banner Section */}
      <div className="relative">
        <Image
          src="/shop/shop.png"
          alt="Shop Banner"
          width={1440}
          height={316}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <Image
            src="/logo1.png"
            alt="Logo"
            width={50}
            height={32}
            className="lg:mb-2 sm:mb-0"
          />
          <h1 className="text-black1 text-[28px] sm:text-[30px] font-medium leading-[40px] sm:leading-[72px] font-poppins hover:scale-110 transition-transform">
            Blog
          </h1>
          <ul className="flex flex-wrap items-center justify-center space-x-2 lg:mt-4 sm:mt-1 text-[16px] sm:text-[20px]">
            <Link
              href={'/'}
              className="text-black1 hover:cursor-pointer hover:scale-110 transition-transform"
            >
              Home
            </Link>
            <IoIosArrowForward className="w-4 h-4" />
            <Link
              href={'/blog'}
              className="text-black1 hover:cursor-pointer hover:scale-110 transition-transform"
            >
              Blog
            </Link>
          </ul>
        </div>
      </div>
    </section>

    
    <section className="pt-16" id="popular-articles">
  <div className="max-w-screen-xl mx-auto mt-12 md:px-7 px-4">
    {/* Large Image Blog */}
    <div className="flex flex-col xl:flex-row gap-12">
      {/* Left Section */}
      <div className="flex flex-col xl:max-w-2xl gap-8">
        <div className="flex flex-col gap-6">
          {/* Blog Image */}
          <Link href={`/blog/${post.id}`} className="block">
            <Image
              src={post.src}
              alt={`Blog ${post.id}`}
              height={600}
              width={1000}
              loading="lazy"
              className="w-full object-cover object-center rounded-md"
            />
          </Link>

          {/* Icons */}
          <div className="flex flex-wrap gap-x-4 text-sm sm:text-base">
            <p className="my-4 text-[#9F9F9F] flex items-center gap-x-1">
              <FaUser className="w-4 sm:w-5" />
              <span>Admin</span>
            </p>
            <p className="my-4 text-[#9F9F9F] flex items-center gap-x-1">
              <FaCalendar className="w-4 sm:w-5" />
              <span>14</span> <span>Oct 2022</span>
            </p>
            <p className="my-4 text-[#9F9F9F] flex items-center gap-x-1">
              <BiNotepad className="w-4 sm:w-5" />
              <span>Handmade</span>
            </p>
          </div>

          {/* Blog Title */}
          <h1 className="text-lg sm:text-[30px] font-medium leading-[1.5] font-poppins mb-4">
            {post.tittle}
          </h1>

          {/* Blog Content */}
          <p className="text-sm sm:text-[15px] text-[#9F9F9F] font-poppins leading-relaxed mb-3 mt-4">
            {post.content}
          </p>

          {/* Read More Link */}
          <Link href={`/blog/${post.id}`}>
          <div>
            <button className="border-b-2 border-black mt-4 font-poppins text-sm sm:text-[16px] text-black mb-4">
              Read More
            </button>
            </div>
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full xl:w-auto flex flex-col gap-8 xl:ml-12">
        {/* Search Bar */}
        <div className="flex items-center border border-black rounded-md p-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-3 text-sm outline-none"
          />
          <FaSearch className="w-8 h-8 mr-4 hover:cursor-pointer" />
        </div>

        {/* Categories */}
        <h2 className="text-black text-lg sm:text-2xl font-poppins font-medium">
          Categories
        </h2>
        <div className="flex flex-row gap-4 sm:gap-12">
          <ul className="flex flex-col gap-5">
            <li className="text-sm sm:text-[20px] text-[#9F9F9F] font-normal leading-[1.5]">
              Craft
            </li>
            <li className="text-sm sm:text-[20px] text-[#9F9F9F] font-normal leading-[1.5]">
              Design
            </li>
            <li className="text-sm sm:text-[20px] text-[#9F9F9F] font-normal leading-[1.5]">
              Handmade
            </li>
            <li className="text-sm sm:text-[20px] text-[#9F9F9F] font-normal leading-[1.5]">
              Interior
            </li>
            <li className="text-sm sm:text-[20px] text-[#9F9F9F] font-normal leading-[1.5]">
              Wood
            </li>
          </ul>
          <ul className="flex flex-col gap-5">
            <li className="text-sm sm:text-[20px] text-[#9F9F9F] font-normal leading-[1.5]">
              2
            </li>
            <li className="text-sm sm:text-[20px] text-[#9F9F9F] font-normal leading-[1.5]">
              8
            </li>
            <li className="text-sm sm:text-[20px] text-[#9F9F9F] font-normal leading-[1.5]">
              7
            </li>
            <li className="text-sm sm:text-[20px] text-[#9F9F9F] font-normal leading-[1.5]">
              1
            </li>
            <li className="text-sm sm:text-[20px] text-[#9F9F9F] font-normal leading-[1.5]">
              6
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="pt-16 mb-12" id="popular-articles">
  <div className="max-w-screen-xl mx-auto px-4 md:px-7">
    {/* Large Image Blog */}
    <div className="flex flex-col xl:flex-row gap-12">
      {/* Left Section */}
      <div className="flex flex-col xl:max-w-xl">
        {posts.slice(0, 1).map((post, index) => (
          <div key={index}>
            <Link href={`/blog/${post.id}`} className="">
              <Image
                src={post.src}
                alt={`Blog ${post.id}`}
                height={700}
                width={1100}
                loading="lazy"
                className="w-full h-auto object-cover rounded-md"
              />
            </Link>
            <div className="flex flex-wrap gap-x-4 mt-4 text-sm md:text-base">
              <p className="text-[#9F9F9F] flex items-center gap-x-1">
                <FaUser className="w-4 md:w-5" />
                <span>Admin</span>
              </p>
              <p className="text-[#9F9F9F] flex items-center gap-x-1">
                <FaCalendar className="w-4 md:w-5" />
                <span>14</span> <span>Oct 2022</span>
              </p>
              <p className="text-[#9F9F9F] flex items-center gap-x-1">
                <BiNotepad className="w-4 md:w-5" />
                <span>Handmade</span>
              </p>
            </div>
            <h1 className="text-lg md:text-[30px] font-medium leading-snug md:leading-[45px] font-poppins mt-4 mb-4">
              {post.tittle}
            </h1>
            <p className="text-sm md:text-[15px] text-[#9F9F9F] font-poppins leading-relaxed">
              {post.content}
            </p>
            <Link href={`/blog/${post.id}`}>
              <div>
                <button className="border-b-2 border-black mt-4 font-poppins text-sm md:text-[16px] text-black">
                  Read More
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Right Section (Small Image Blogs) */}
      <div className="flex flex-col gap-8 xl:pl-16">
        <h2 className="text-[20px] md:text-[24px] font-poppins font-semibold mb-6">
          Recent Posts
        </h2>
        {posts.slice(1, 5).map((post, index) => (
          <div
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6"
            key={index}
          >
            <Image
              src={post.src}
              alt={post.tittle}
              height={100}
              width={100}
              loading="lazy"
              className="w-24 h-24 md:w-28 md:h-28 rounded-md object-cover"
            />
            <div className="flex flex-col justify-center items-center sm:items-start text-center sm:text-start">
              <h1 className="text-sm md:text-base font-poppins mt-2 mb-2">
                {post.tittle}
              </h1>
              <Link
                href={`/blog/${post.id}`}
                className="flex items-center gap-x-1 text-[#9F9F9F] text-sm md:text-base"
              >
                <FaCalendar className="w-4 md:w-5" />
                <span>03 Aug 2022</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
  <Blog />
{/*Buttons */}
<div className=" text-center flex-row space-x-4 mt-4 w-auto">
  <button className="bg-[#FAF3EA] text-black hover:text-white hover:bg-primary py-2 px-4 rounded-lg">
    1
  </button>

  <button className="bg-[#FAF3EA] text-black hover:text-white hover:bg-primary py-2 px-4 rounded-lg">
    2
  </button>

  <button className="bg-[#FAF3EA] text-black hover:text-white hover:bg-primary py-2 px-4 rounded-lg">
    3
  </button>

  <button className="bg-[#FAF3EA] text-black hover:text-white hover:bg-primary py-2 px-4 rounded-lg">
    Next
  </button>
</div>
  <Services />
    </>
  );
};

export default Page;
