"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdShare } from "react-icons/io";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
//import { FaRegHeart } from "react-icons/fa";
import { urlFor } from "@/sanity/lib/image";
import WishList from "./WishList";
// import { useAtom } from "jotai";
//  import { wishlistAtom } from "@/lib/atom";
//  import { toast, Bounce, } from "react-toastify";
//  import { itemQuantity } from "@/lib/atom";
const Card = ({ product }: any) => { 
  //  const [wishlistItems, setWishlistItems] = useAtom(wishlistAtom);
  //  const [quantity, setQuantity] = useAtom(itemQuantity);
  // function addProductToWishlist() {
  //   // Check if the product is already in the wishlist
  //   const currentWishlistItem = wishlistItems.find(
  //     (wishlistItem) => wishlistItem.product.slug === product.slug
  //   );
  
  //   if (currentWishlistItem) {
  //     // Update quantity if the product is already in the wishlist
  //     const updatedWishlistItems = wishlistItems.map((wishlistItem) =>
  //       wishlistItem.product.slug === product.slug
  //         ? { ...wishlistItem, quantity: wishlistItem.quantity + quantity }
  //         : wishlistItem
  //     );
  //     setWishlistItems(updatedWishlistItems);
  //   }  else {
  //     // Add new product to the wishlist
  //     setWishlistItems((prevWishlist) => [
  //       ...prevWishlist,
  //       { product, quantity: quantity },
  //     ]);
  //   }
  //   // Reset the local quantity to 1 after adding to the wishlist
  //   setQuantity(1);
  
  //   // Display a toast notification
  //   toast.success("Product added to wishlist successfully!", {
  //     position: "top-center",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     theme: "light",
  //     transition: Bounce,
  //   });
  // }

if(!product){
  return <p className="text-red-600 text-2xl justify-center">
    Product is not available!
    </p>}
  return (
    <>
      <div
        className="bg-white rounded-lg shadow-md border border-gray-300 justify-center w-[90%] sm:w-[280px] items-center  h-[400px]" // Fixed card size
      >
        <div className="relative w-full h-[270px]">
          {" "}
          {/* Fixed image container */}
          <Image
            
            src={urlFor(product.imageUrl).url()}
            alt={product.slug}
            fill // Use fill to ensure the image fits the container
            className="object-cover rounded-t-lg" // Ensure the image covers the container
            quality={100}
          />
          {product.dicountPercentage && (
            <div className="absolute top-2 right-2 bg-accent2 text-white text-sm px-1 py-3 rounded-full">
              -{product.dicountPercentage}%
              
            </div>
          )}
          {product.new && (
            <div className="absolute top-2 left-2 bg-accent1 text-white text-sm px-2 py-3 rounded-full">
              NEW
            </div>
          )}
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <Link href={`/shop/${product.slug}`}>
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
             <Link href={""}>
             {/* <button className="hover:text-primary flex items-center"
             onClick={addProductToWishlist}
             >
                <FaRegHeart />
                Like
              </button>  */}
               <WishList /> 
             </Link>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold font-poppins text-text2 truncate">
            {product.slug}
          </h3>
          <p className="text-sm text-gray-500 mt-2 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-lg font-semibold text-text2">
              ${product.price}
            </span>
            {/* {product.fakePrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.fakePrice}
              </span> 
            )}*/}
          </div>
        </div>
      </div>
    </>
    
  );
};

export default Card;
