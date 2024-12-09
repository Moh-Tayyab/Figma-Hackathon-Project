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
//import { CalendarDays } from "lucide-react";

const Page = () => {
  const post = posts[6];
  return (
    <>
    <section>
        {/* Subheo Section */}
    <div className="relative">
        <Image src="/shop/shop.png" alt="Shop Banner" width={1440} height={316} />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <Image
            src="/logo1.png"
            alt="Logo"
            width={50}
            height={32}
          />
          <h1 className="text-black1 text-[48px] font-medium leading-[72px] font-poppins hover:scale-110">
            Blog
          </h1>
          <ul className="flex items-center space-x-2 mt-4">
            <Link href={'/'} className="text-black1 text-2xl  hover:cursor-pointer hover:scale-110">Home</Link>
            <IoIosArrowForward className="w-4 h-4" />
            <Link href={'/blog'} className="text-black1 text-2xl hover:cursor-pointer hover:scale-110">Blog</Link>
          </ul>
        </div>
      </div>
    </section>
     <section className="pt-16" id="popular-articles">
      <div className="max-w-screen-xl mx-auto mt-12">
        {/* Large Image Blog */}
        <div className="flex gap-x-8 gap-y-12 flex-col xl:flex-row px-7">
          <div className="flex flex-col xl:max-w-xl mr-16 gap-y-6">
            <div className="flex flex-col gap-y-4">
              {/* Blog Image */}
              <Link href={`/blog/${post.id}`} className="block">
                <Image
                  src={post.src}
                  alt={`Blog ${post.id}`}
                  height={500}
                  width={817}
                  loading="lazy"
                  className="w-full object-cover object-center rounded-md"
                />
              </Link>

              {/* Icons */}
              <div className="flex flex-wrap gap-x-4">
                <p className="my-4 text-[#9F9F9F] flex items-center gap-x-1">
                  <FaUser className="w-5" />
                  <span>Admin</span>
                </p>
                <p className="my-4 text-[#9F9F9F] flex items-center gap-x-1">
                  <FaCalendar className="w-5" />
                  <span>14</span> <span>Oct 2022</span>
                </p>
                <p className="my-4 text-[#9F9F9F] flex items-center gap-x-1">
                  <BiNotepad className="w-5" />
                  <span>Handmade</span>
                </p>
              </div>

              {/* Blog Title */}
              <h1 className="text-[30px] font-medium leading-[45px] font-poppins w-[506px] h-[45px] mb-4">
                {post.tittle}
              </h1>

              {/* Blog Content */}
              <p className="text-[#9F9F9F] font-poppins text-[15px] leading-[24.5px] items-center mb-3 mt-4">
                {post.content}
              </p>

              {/* Read More Link */}
              <Link href={`/blog/${post.id}`}>
                <p className="underline mt-4 font-poppins font-normal text-[16px] text-black mb-4">
                  Read More
                </p>
              </Link>
            </div>
          </div>
          {/* Blog  */}
          {/* in working */}
          <div className="w-auto">
            
          <div className="flex flex-wrap gap-x-4   rounded-md border  border-black focus:outline-none">
                <label className="py-1 text-black flex items-center gap-x-1 ">     
            <input type="text"
             placeholder=""
             className="w-full p-3 text-sm"
             />
             <FaSearch className="w-8 h-8 mr-4 hover:cursor-pointer"/>
                </label>
                
             </div>
             <h2 className="text-black pt-6 text-2xl font-poppins font-[500px]">Categories</h2>
             <p className="text-[#9F9F9F] font-[400px] leading-[24px] text-[20px] pt-5">Craft</p>
             <p className="text-[#9F9F9F] font-[400px] leading-[24px] text-[20px] pt-5">Design</p>
             <p className="text-[#9F9F9F] font-[400px] leading-[24px] text-[20px] pt-5">Handmade</p>
             <p className="text-[#9F9F9F] font-[400px] leading-[24px] text-[20px] pt-5">Interior</p>
             <p className="text-[#9F9F9F] font-[400px] leading-[24px] text-[20px] pt-5">Wood</p>
          </div>
          
        </div>
      </div>
    </section>

    {/* Blog List */}
    <section className="pt-16" id="popular-articles mb-12">
      <div className="max-w-screen-xl mx-auto">
        {/* Large Image Blog */}
        <div className="flex gap-x-8 gap-y-12 flex-col xl:flex-row px-7">
          <div className="flex flex-col xl:max-w-xl mr-16">
            {posts.slice(0, 1).map((post, index) => (
              <div key={index}>
                <Link href={`/blog/${post.id}`} className="">
                  <Image
                    src={post.src}
                    alt="Blog-1"
                    height={500}
                    loading="lazy"
                    width={817}
                    className="w-full md:h-[70%] object-cover object-center rounded-md"
                  />
                </Link>
                <div className="flex flex-wrap gap-x-4">
                <p className="my-4 text-[#9F9F9F] flex items-center gap-x-1">
                <FaUser className="w-5" />
                  <span>Admin</span> 
                </p>
                <p className="my-4 text-[#9F9F9F] flex items-center gap-x-1">
                <FaCalendar className="w-5" />
                  <span>14</span> <span>Oct 2022</span>
                </p>
                <p className="my-4 text-[#9F9F9F] flex items-center gap-x-1">
                <BiNotepad className="w-5" />
                  <span>Handmade</span> 
                </p>
                </div>
                <h1 className="text-[30px]  font-[500px] leading-[45px] font-poppins w-[506px] h-[45px] mb-4">{post.tittle}</h1>
                <p className="text-[#9F9F9F] font-poppins text-[15px] leading-[24.5px] items-center">{post.content}</p>
                <Link href={`/blog/${post.id}`}>
                  <p className="border-b-2 border-black mt-4 font-poppins font-[400px] text-[16px] items-center text-black">
                    Read More</p>
                </Link>
              </div>
            ))}
          </div>

          {/* Small Image Blogs */}
          <div className="flex flex-col sm:gap-4 gap-12">
            <h2 className="text-[24px] leading-[36px] font-poppins font-semibold mb-10 ml-8">
              Recent Posts
            </h2>
            {posts.slice(1, 5).map((post, index) => (
              <div
                className="flex sm:flex-row items-center sm:items-start flex-col gap-6"
                key={index}
              >
                <Image
                  src={post.src}
                  alt={post.tittle}
                  height={80}
                  width={80}
                  loading="lazy"
                  className="rounded-md cursor-pointer"
                />
                <div className="flex flex-col justify-center text-center sm:text-start items-center sm:items-start">
                  <h1 className="text-sm leading-[21px] font-[400px] font-poppins mt-2 mb-4">
                    {post.tittle}
                  </h1>
                  <Link href={`/blog/${post.id}`} className="flex items-center gap-x-1 text-[#9F9F9F]">
                    <FaCalendar className="w-5" />
                    <span className="font-light ">03 Aug 2022</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    
  <Blog />
    </>
  );
};

export default Page;
