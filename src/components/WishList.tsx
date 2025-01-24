"use client";
import React from 'react';
import { wishlistAtom, itemQuantity } from "@/lib/atom"; // Ensure both atoms are imported
import { toast, Bounce, ToastContainer } from "react-toastify";
import { FaRegHeart } from 'react-icons/fa';
import { useAtom } from 'jotai';



// interface Product {
//   product: {
//     slug: string
//     _id: string;
//     title: string;
//     imageUrl: string
//     name:string;
//     orignalPrice: number;
//     discount: number;
//     fakePrice: number;
//     sku: string;
//     new: boolean;
//     images:string;
//    productImage: string,
//       price: number
//       tags: string
//        dicountPercentage: number;
//       description: string
//       isNew: boolean
//   };
//   quantity: number;
// }
const WishList = ({ product }: any) => {
  const [wishlistItems, setWishlistItems] = useAtom(wishlistAtom);
  const [quantity, setQuantity] = useAtom(itemQuantity);

  function addProductToWishlist() {
    // Check if the product is already in the wishlist
    const currentWishlistItem = wishlistItems.find(wishlistItem => wishlistItem.product.title === product.title
    );

    if (currentWishlistItem) {
      // Update quantity if the product is already in the wishlist
      const updatedWishlistItems = wishlistItems.map((wishlistItem) =>
        wishlistItem.product.title === product.title
          ? { ...wishlistItem, quantity: wishlistItem.quantity + quantity }
          : wishlistItem
      );
      setWishlistItems(updatedWishlistItems);
    } else {
      // Add new product to the wishlist
      setWishlistItems((prevWishlist) => [
        ...prevWishlist,
        { product, quantity: quantity },
      ]);
    }

    // Reset the local quantity to 1 after adding to the wishlist
    setQuantity(1);

    // Display a toast notification
    toast.success("Product added to wishlist successfully!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  }

  //console.log("wishlistFunctionalityComponent", wishlistItems);

  return (
    <>
      <section>
        <button
          className="hover:text-primary flex items-center"
          onClick={ () =>addProductToWishlist()}
        >
          <FaRegHeart />
          Like
        </button>
      </section>
      <section>
        <ToastContainer />
      </section>
    </>
  );
}

export default WishList;