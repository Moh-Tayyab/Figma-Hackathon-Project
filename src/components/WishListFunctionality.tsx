"use client";
import React from 'react';
import { wishlistAtom, itemQuantity } from "@/lib/atom"; // Ensure both atoms are imported
import { toast, Bounce, ToastContainer } from "react-toastify";
import { FaRegHeart } from 'react-icons/fa';
import { useAtom } from 'jotai';
import { Product } from '../../interface';
const WishListFunctionality = ({product}:{product:Product}) => {

  const [wishlistItems, setWishlistItems] = useAtom(wishlistAtom);
  const [quantity, setQuantity] = useAtom(itemQuantity);

  function addProductToWishlist(name:string) {
    // Check if the product is already in the wishlist
    const currentWishlistItem = wishlistItems.find(wishlistItem => wishlistItem.name === name
    );

    if (currentWishlistItem) {
      // Update quantity if the product is already in the wishlist
      const updatedWishlistItems = wishlistItems.map((wishlistItem) =>
        wishlistItem.name === name
          ? { ...wishlistItem, quantity: wishlistItem.quantity + quantity }
          : wishlistItem
      );
      setWishlistItems(updatedWishlistItems);
    } else {
      // Add new product to the wishlist
      setWishlistItems((prevWishlist) => [
        ...prevWishlist,
        {...product, quantity: quantity },
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


  return (
    <>
      <section>
        <button
          className="flex items-center gap-1 text-sm hover:text-gray-200 transition-colors"
          onClick={ () =>addProductToWishlist(product.name)}
        >
          <FaRegHeart  className="text-lg" />
          <span className="text-xs">Like</span>
        </button>
      </section>
      <section>
        <ToastContainer />
      </section>
    </>
  );
}

export default WishListFunctionality;