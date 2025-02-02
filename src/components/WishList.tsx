"use client";
import Image from "next/image";
import Link from "next/link";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useAtom } from "jotai";
import { wishlistAtom } from "@/lib/atom"; // Define a wishlist atom

const Wishlist = () => {
  const [wishlistItems, setwishlistItems] = useAtom(wishlistAtom);

   const removeItemFromWishlist = (slug: string) => {
    setwishlistItems((prevWishlist) =>
      prevWishlist.filter((item) => item.product?.slug !== slug)
    );
   
  };
//console.log(" WishList Page", wishlistItems)
  if (wishlistItems.length === 0) {
    return (
      <div className="container mx-auto py-24 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Your Wishlist is Empty!
        </h1>
        <p className="text-gray-500 mt-4">
          Start adding items to your wishlist to view them here.
        </p>
      </div>
    );
  } 
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-start mb-12 flex justify-between items-center">
            <h1 className="sm:text-4xl text-3xl font-poppins title-font text-Text2">
              Wishlist ({wishlistItems.length})
            </h1>
            <Link href={"/shop"}>
              <button className="text-black hover:bg-black hover:text-white shadow-md bg-white px-8 hover:scale-110 py-2 rounded-md border text-[16px] font-medium">
                View All
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 justify-items-center">
            {/* Map Method to render wishlistItem.product cards */}
            {wishlistItems.map(wishlistItem =>  (
                <div
                  key={wishlistItem.product?.slug}
                  className="bg-white rounded-lg shadow-md border border-gray-300 justify-center items-center w-[280px] h-[400px]" // Fixed card size
                >
                  <div className="relative w-full h-[270px]">
                    {" "}
                    {/* Fixed image container */}
                    <Image
                      src={(wishlistItem.product?.imageUrl)}
                      alt={wishlistItem.product?.slug}
                      fill 
                      className="object-cover rounded-t-lg" 
                      quality={100}
                    />
                      <div className="absolute top-2 right-2 bg-accent2 text-white text-sm px-1 py-3 rounded-full">
                        
                        <RiDeleteBin6Line  className="h-6 w-6"
                        onClick={ () => removeItemFromWishlist(wishlistItem.product?.slug)}
                        />
                      </div>
                    
                    {/* Hover overlay */}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold font-poppins text-text2 truncate">
                      {wishlistItem.product?.name}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-lg font-semibold text-text2">
                        ${wishlistItem.product?.price}
                      </span>
                    </div>
                     {/* Rating Section */}
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                fill={index < Math.round(wishlistItem.product?.rating?.rate) ? "gold" : "none"}
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
              ({wishlistItem.product?.rating?.count} reviews)
            </span>
          </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Wishlist;
