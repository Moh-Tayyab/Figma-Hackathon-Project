"use client";
import Image from "next/image";
import SubHero from "@/components/SubHero";
import { AiFillDelete } from "react-icons/ai";
import Link from "next/link";
import Services from "@/components/Services";
import { useAtom } from "jotai";
import { cartAtom } from "@/lib/atom";

export default function Cart() {
  const [cartItems, setCartItems] = useAtom(cartAtom);

  const removeItem = (slug: string) => {
    setCartItems(prevCart => prevCart.filter(item => item.slug !== slug));
  };

  const handleQuantityChange = (slug: string, newQuantity: number) => {
    // Ensure the quantity doesn't drop below 1
    const quantity = newQuantity < 1 ? 1 : newQuantity;
    setCartItems(prevCart =>
      prevCart.map(item =>
        item.slug === slug ? { ...item, quantity } : item
      )
    );
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item?.price || 0;
      const quantity = item?.quantity || 0;
      return total + price * quantity;
    }, 0);
  };

  return (
    <>
      <SubHero title="Cart" home="Home" linkUrl="/cart" />
      
      {/* Cart Container */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section - Cart Items */}
          <div className="lg:w-3/5 w-full">
            {/* Cart Header */}
            <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-50 px-6 py-4 rounded-lg shadow-sm">
              <div className="col-span-5 font-medium text-gray-600">Product</div>
              <div className="col-span-2 font-medium text-gray-600">Price</div>
              <div className="col-span-2 font-medium text-gray-600">Quantity</div>
              <div className="col-span-2 font-medium text-gray-600">Subtotal</div>
              <div className="col-span-1"></div>
            </div>

           {/* Cart Items */}
<div className="mt-4 space-y-4">
  {cartItems.map((cartItem) => (
    <div
      key={cartItem.slug}
      className="grid grid-cols-12 sm:grid-cols-8 gap-4  items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Product Info */}
      <div className="col-span-5 sm:col-span-3 flex items-center space-x-4">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden">
          <Image
            src={cartItem.imageUrl}
            fill
            alt={cartItem.name}
            className="object-cover"
          />
        </div>
        <p className="font-medium text-gray-800 sm:block hidden">
          {cartItem.name}
        </p>
      </div>

      {/* Price */}
      <div className="col-span-2 sm:col-span-1 text-gray-600 text-sm sm:text-base">
        ${cartItem.price.toFixed(2)}
      </div>

      {/* Quantity Input */}
      <div className="col-span-4 sm:col-span-2">
        <input
          type="number"
          min="1"
          className="w-12 sm:w-20 px-2 py-1 sm:px-3 sm:py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          value={cartItem.quantity}
          onChange={(e) =>
            handleQuantityChange(cartItem.slug, parseInt(e.target.value) || 1)
          }
        />
      </div>

      {/* Subtotal */}
      <div className="col-span-2 sm:col-span-1 font-medium text-gray-800 text-sm sm:text-base">
        ${(cartItem.price * cartItem.quantity).toFixed(2)}
      </div>

      {/* Delete Button */}
      <div className="col-span-1 flex justify-end">
        <button
          onClick={() => removeItem(cartItem.slug)}
          className="text-primary hover:text-red-700 transition-colors"
          aria-label="Remove item"
        >
          <AiFillDelete className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  ))}
</div>

          </div>

          {/* Right Section - Cart Summary */}
          <div className="lg:w-2/5 w-full">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Cart Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium text-gray-800">${calculateSubtotal().toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <span className="text-lg font-semibold text-gray-800">Total:</span>
                  <span className="text-lg font-bold text-primary">${calculateSubtotal().toFixed(2)}</span>
                </div>
              </div>

              <Link href={cartItems.length > 0 ? "/checkout" : "#"}>
                <button 
                  className={`w-full mt-6 py-3 px-6 rounded-lg font-medium text-white transition-colors
                    ${cartItems.length > 0 
                      ? 'bg-primary hover:bg-primary-dark' 
                      : 'bg-gray-400 cursor-not-allowed'}`}
                >
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Services />
      </div>
    </>
  );
}
