"use client";
import posts from "@/blogdetails/data.json";
import Image from "next/image";
import Link from "next/link";
import { FaCalendar } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { BiNotepad } from "react-icons/bi";

const Blog = () => {
  const post = posts[6]; // Directly select the first post

  return (
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
        </div>
      </div>
    </section>
  );
};

export default Blog;
