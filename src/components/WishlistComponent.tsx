"use client";
import Image from "next/image";
import Link from "next/link";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useAtom } from "jotai";
import { wishlistAtom } from "@/lib/atom";

const Wishlist = () => {
  const [wishlistItems, setwishlistItems] = useAtom(wishlistAtom);

  const removeItemFromWishlist = (slug: string) => {
    setwishlistItems((prevWishlist) =>
      prevWishlist.filter((item) => item.slug !== slug)
    );
  };
  if (wishlistItems.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-32 px-4 text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative w-48 h-48 bg-primary/10 rounded-full flex items-center justify-center">
            <svg 
              className="w-24 h-24 text-primary/40 animate-pulse" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1" 
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
              />
            </svg>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
          Your Wishlist Awaits
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto leading-relaxed">
          Discover items you love! Start saving products to your wishlist and they&apos;ll appear here.
        </p>
        
        <Link
          href="/shop"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 
          bg-primary text-white rounded-lg font-medium hover:bg-primary/90 
          transition-transform duration-200 hover:scale-[1.02] shadow-sm
          border border-primary/20"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
            />
          </svg>
          Start Shopping
        </Link>
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
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
            {/* Map Method to render wishlistItem.product cards */}
            {wishlistItems.map((wishlistItem) => (
              <div
                key={wishlistItem.slug}
                className="group bg-white rounded-xl shadow-sm border border-gray-100 
                      w-full max-w-[320px] h-[400px] overflow-hidden 
                      transition-all duration-300 hover:shadow-lg hover:border-gray-200">
                {/* Image Container */}
                <div className="relative w-full h-64 bg-gray-100">
                  <Image
                    src={wishlistItem.imageUrl}
                    alt={wishlistItem.slug}
                    fill
                    className="object-cover object-center transition-opacity duration-300"
                    quality={100}
                    sizes="(max-width: 640px) 100vw, 320px"
                  />

                  {/* Discount Badge */}
                  {wishlistItem.discount && (
                    <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      -{wishlistItem.discount}%
                    </div>
                  )}

                  <div className="absolute top-1 right-2  text-white text-sm px-1 py-3 rounded-full hover:text-red-500 transition-colors hover:cursor-pointer hover:opacity-90">
                    <RiDeleteBin6Line
                      className="h-6 w-6"
                      onClick={() => removeItemFromWishlist(wishlistItem.slug)}
                    />
                  </div>
                </div>
                {/* Product Info */}
                <div className="p-4 pt-5">
                  <Link href={`/shop/${wishlistItem.slug}`}>
                    <h3 className="text-gray-800 font-semibold text-lg mb-2 hover:text-primary transition-colors line-clamp-2">
                      {wishlistItem.slug
                        .replace(/-/g, " ")
                        .replace(/\b\w/g, (c) => c.toUpperCase())}
                    </h3>
                  </Link>

                  {/* Pricing */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl font-bold text-gray-900">
                      ${wishlistItem.originalPrice}
                    </span>
                    {/* {wishlistItem.discount && (
                <span className="text-sm text-gray-500 line-through">
                  ${wishlistItem.originalPrice}
                </span>
              )} */}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className={`w-4 h-4 ${index < Math.round(wishlistItem.rating.rate) ? "text-amber-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      ({wishlistItem.rating.count} reviews)
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
