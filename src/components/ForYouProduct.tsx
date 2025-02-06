import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightArrowLeft,} from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import { Product } from "../../interface";
import WishListFunctionality from "./WishListFunctionality";

const ForYouProduct = async () => {
  const ourProducts = await client.fetch(groq `*[_type=="myproduct"]{
        title,
        name,
        tags,
        price,
        stock,
        dimensions,
        id,
        description,
        discount,
        originalPrice,
        "categoryName": category->name,
        "slug":slug.current,
        "imageUrl": image.asset->url,
        rating,}[12...16]
    `)

const getTagColor = (tag: string) => {
  switch (tag.toLowerCase()) {
    case "sale":
      return "bg-green-500";
    case "popular":
      return "bg-yellow-500";
    case "limited":
      return "bg-blue-500";
    case "discount":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};
  return (
    <section className="text-gray-600 body-font">
      {/* Container for the whole section */}
      <div className="container px-5 py-24 mx-auto">
        {/* Section Title */}

        {/* Heading and View All Button */}
        <div className="text-start mb-12 flex justify-between items-center">
        <h1 className="sm:text-4xl text-3xl font-poppins font-[500px] text-black">
        Just For You
        </h1>
       <Link href={"/shop"}> <button className="text-black hover:bg-black hover:text-white shadow-md bg-white px-8 hover:scale-110 py-2 rounded-md border text-[16px] font-medium">
        View All 
        </button>
        </Link>
      </div>
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
     
       
     {/* Map Method to render ourProduct cards */}
     {ourProducts.map((ourProduct:Product, i:number) => {
          return (
            <div
            key={i}
            className="group bg-white rounded-xl shadow-sm border border-gray-100 
                  w-full max-w-[320px] h-[400px] overflow-hidden 
                  transition-all duration-300 hover:shadow-lg hover:border-gray-200">
            {/* Image Container */}
            <div className="relative w-full h-64 bg-gray-100">
        <Image
          src={(ourProduct.imageUrl)}
          alt={ourProduct.slug}
          fill
          className="object-cover object-center transition-opacity duration-300"
          quality={100}
          sizes="(max-width: 640px) 100vw, 320px"
        />

        {/* Discount Badge */}
        {ourProduct.discount && (
          <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            -{ourProduct.discount}%
          </div>
        )}

        {/* Tags */}
        {ourProduct.tags && (
          <div className="absolute top-3 left-3 flex gap-2">
            {ourProduct.tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className={`text-white text-xs font-medium px-3 py-1 rounded-full ${getTagColor(tag)}`}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link 
            href={`/shop/${ourProduct.slug}`}
            className="mb-4 w-[60%] text-center"
          >
            <button className="w-full bg-white/90 text-gray-900 px-6 py-3 rounded-full 
                            font-medium text-sm shadow-md hover:bg-white hover:shadow-lg
                            transition-all duration-200">
              Quick View
            </button>
          </Link>
          <div className="flex items-center gap-4 text-white">
            <button className="flex items-center gap-1 text-sm hover:text-gray-200 transition-colors">
              <IoMdShare className="text-lg" />
              <span className="text-xs">Share</span>
            </button>
            <Link href="/comparison">
              <button className="flex items-center gap-1 text-sm hover:text-gray-200 transition-colors">
                <FaArrowRightArrowLeft className="text-lg" />
                <span className="text-xs">Compare</span>
              </button>
            </Link>
            <WishListFunctionality product={ourProduct} />
          </div>
        </div>
      </div>
        {/* Product Info */}
      <div className="p-4 pt-5">
        <Link href={`/shop/${ourProduct.slug}`}>
          <h3 className="text-gray-800 font-semibold text-lg mb-2 hover:text-primary transition-colors line-clamp-2">
            {ourProduct.slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
          </h3>
        </Link>

        {/* Pricing */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xl font-bold text-gray-900">
            ${ourProduct.originalPrice}
          </span>
          {/* {ourProduct.discount && (
            <span className="text-sm text-gray-500 line-through">
              ${ourProduct.originalPrice}
            </span>
          )} */}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-4 h-4 ${index < Math.round(ourProduct.rating.rate) ? 'text-amber-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-500">
            ({ourProduct.rating.count} reviews)
          </span>
        </div>
      </div>
          </div>
          );
        })}
   </div>
      </div>
    </section>
  );
};

export default ForYouProduct;