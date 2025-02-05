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
       <Link href={"/shop"}> <button className="text-Text2 bg-white text-black hover:text-white hover:bg-black px-8 hover:scale-110 py-2 rounded-md border text-[16px] font-medium">
        View All 
        </button>
        </Link>
      </div>
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 justify-items-center">
     
       
     {/* Map Method to render ourProduct cards */}
     {ourProducts.map((ourProduct:Product, i:number) => {
          return (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md border border-gray-300 w-[90%] sm:w-[280px] h-[400px]" // Width adjusts on small screens
            >
              <div className="relative w-full h-[270px]">
                <Image
                  src={(ourProduct.imageUrl)}
                  alt={ourProduct.slug}
                  fill
                  className="object-cover rounded-t-lg"
                  quality={100}
                />
                {ourProduct.discount && (
            <div className="absolute top-2 right-2 bg-accent2 text-white text-sm px-2 py-1 rounded-lg">
              -{ourProduct.discount}% off
            </div>
          )}
          {/* Tags */}
          {ourProduct.tags && (
            <div className="absolute top-2 left-2 space-y-1">
              {ourProduct.tags.slice(0, 1).map((tag, index) => (
                <span
                  key={index}
                  className={`text-white text-xs font-semibold px-2 py-1 rounded-lg shadow-md ${getTagColor(
                    tag
                  )}`}>
                  {tag}
                </span>
              ))}
            </div>
          )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Link href={`/shop/${ourProduct.slug}`}>
                    <button className="bg-white text-primary px-4 py-2 mb-4 rounded">
                      Add to Cart
                    </button>
                  </Link>
                  <div className="flex space-x-4 text-white">
                    <button className="hover:text-primary flex items-center">
                      <IoMdShare />
                      Share
                    </button>
                    <Link href={"/comparison"}>
                      <button className="hover:text-primary flex items-center">
                        <FaArrowRightArrowLeft />
                        Compare
                      </button>
                    </Link>
               <WishListFunctionality product ={ourProduct}/>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold font-poppins text-text2 truncate">
                  {ourProduct.name}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg font-semibold text-text2">
                    ${ourProduct.originalPrice}
                  </span>
                  {/* {ourProduct.fakePrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${ourProduct.fakePrice}
                    </span>
                  )} */}
                </div>
                {/* Rating Section */}
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                fill={index < Math.round(ourProduct.rating.rate) ? "gold" : "none"}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-yellow-500">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 17.25l6.172 3.83-1.638-7.07 5.466-4.86-7.22-.62L12 2.25l-2.78 6.28-7.22.62 5.466 4.86-1.638 7.07L12 17.25z"
                />
              </svg>
            ))}
            <span className="ml-2 text-gray-600 text-sm">
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