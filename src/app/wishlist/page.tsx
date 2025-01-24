"use client";
import Image from "next/image";
import Link from "next/link";
import { RiDeleteBin6Line } from "react-icons/ri";
//import ForYouProduct from "@/components/ForYouProduct";
import { useAtom } from "jotai";
import { wishlistAtom } from "@/lib/atom"; // Define a wishlist atom
//import { IoMdShare } from "react-icons/io";
//import { FaArrowRightArrowLeft, FaRegHeart } from "react-icons/fa6";

const WishlistPage = () => {
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
                  key={wishlistItem.product.slug}
                  className="bg-white rounded-lg shadow-md border border-gray-300 justify-center items-center w-[280px] h-[400px]" // Fixed card size
                >
                  <div className="relative w-full h-[270px]">
                    {" "}
                    {/* Fixed image container */}
                    <Image
                      src={(wishlistItem.product.imageUrl)}
                      alt={wishlistItem.product.slug}
                      fill // Use fill to ensure the image fits the container
                      className="object-cover rounded-t-lg" // Ensure the image covers the container
                      quality={100}
                    />
                    {/* {wishlistItem.product?. dicountPercentage && ( */}
                      <div className="absolute top-2 right-2 bg-accent2 text-white text-sm px-1 py-3 rounded-full">
                        {/* -{wishlistItem.product. dicountPercentage} */}
                        <RiDeleteBin6Line 
                        onClick={ () => removeItemFromWishlist(wishlistItem.product.slug)}
                        />
                      </div>
                    
                    {wishlistItem.product?.new && (
                      <div className="absolute top-2 left-2 bg-accent1 text-white text-sm px-2 py-3 rounded-full">
                        NEW
                      </div>
                    )}
                    {/* Hover overlay */}
                    {/* <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Link href={`/shop/${wishlistItem.product?.slug}`}>
                        <button className="bg-white text-primary px-4 py-2 mb-4 rounded hover:cursor-pointer">
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
                        <button className="hover:text-primary flex items-center">
                          <FaRegHeart />
                          Like
                        </button>
                      </div>
                    </div> */}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold font-poppins text-text2 truncate">
                      {wishlistItem.product.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                      {wishlistItem.product.description}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-lg font-semibold text-text2">
                        ${wishlistItem.product.price}
                      </span>
                      {/* {wishlistItem.product?.fakePrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ${wishlistItem.product?.fakePrice}
                        </span>
                      )} */}
                    </div>
                  </div>
                </div>
              
            ))}
          </div>
        </div>
      </section>
      {/* <ForYouProduct /> */}
    </>
  );
};

export default WishlistPage;
