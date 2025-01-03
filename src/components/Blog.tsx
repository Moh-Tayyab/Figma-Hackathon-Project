"use client";
import posts from "@/blogdetails/data.json";
import Image from "next/image";
import Link from "next/link";
import { FaCalendar } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { BiNotepad } from "react-icons/bi";

const Blog = () => {
  const post = posts[5]; // Directly select the sixth post

  return (
    <section className="pt-16" id="popular-articles">
  <div className="max-w-screen-xl mx-auto mt-12">
    {/* Large Image Blog */}
    <div className="flex flex-col gap-y-8 xl:flex-row xl:gap-x-8 px-4 md:px-7">
      <div className="flex flex-col xl:w-[746px] gap-y-6">
        <div className="flex flex-col gap-y-4">
          {/* Blog Image */}
          <Link href={`/blog/${post.id}`} className="block">
            <Image
              src={post.src}
              alt={`Blog ${post.id}`}
              height={600} 
              width={1000}    
              loading="lazy"
              className="w-full h-auto object-cover object-center rounded-md sm:w-full md:w-4/5 lg:w-full"
            />
          </Link>

          {/* Icons */}
          <div className="flex flex-wrap gap-x-4 text-sm md:text-base">
            <p className="my-4 text-[#9F9F9F] flex items-center gap-x-1">
              <FaUser className="w-4 md:w-5" />
              <span>Admin</span>
            </p>
            <p className="my-4 text-[#9F9F9F] flex items-center gap-x-1">
              <FaCalendar className="w-4 md:w-5" />
              <span>14</span> <span>Oct 2022</span>
            </p>
            <p className="my-4 text-[#9F9F9F] flex items-center gap-x-1">
              <BiNotepad className="w-4 md:w-5" />
              <span>Handmade</span>
            </p>
          </div>

          {/* Blog Title */}
          <h1 className="text-lg md:text-[30px] font-medium leading-snug md:leading-[45px] font-poppins mb-4">
            {post.tittle}
          </h1>

          {/* Blog Content */}
          <p className="text-sm md:text-[15px] text-[#9F9F9F] font-poppins leading-relaxed md:leading-[24.5px] mb-3">
            {post.content}
          </p>

          {/* Read More Link */}
          <Link href={`/blog/${post.id}`}>
          <div>
            <button className="border-b-2 border-black mt-4 font-poppins text-sm md:text-[16px] text-black mb-4">
              Read More
            </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Blog;
