"use client";
import { CiCircleRemove } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
//import { BsBagX } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/shoppingcartsheet";
import { useAtom, useAtomValue } from "jotai";
import { cartAtom, cartQuantity } from "@/lib/atom";

const ShoppingCart = () => {
  const cartItemsQuantity = useAtomValue(cartQuantity);
  const [cartItems, setCartItems] = useAtom(cartAtom);

  const removeItem = (slug: string) => {
    setCartItems(prevCart => prevCart.filter(item => item.slug !== slug));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const price = Number(item?.originalPrice) || 0;
      const quantity = Number(item?.quantity) || 0;
      return total + price * quantity;
    }, 0);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative cursor-pointer">
          <MdOutlineShoppingCart className="h-8 w-8 text-gray-600 hover:text-primary transition-colors" />
          {cartItemsQuantity > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartItemsQuantity}
            </span>
          )}
        </div>
      </SheetTrigger>

      <SheetContent className="w-full max-w-md" side="right">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b pb-4">
            <h2 className="text-2xl font-semibold text-gray-900">Shopping Cart</h2>
            {/* <BsBagX className="h-6 w-6 text-gray-400 hover:text-primary cursor-pointer transition-colors" /> */}
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto py-6">
            {cartItems?.length > 0 ? (
              <div className="space-y-6">
                {cartItems.map((cartItem) => (
                  <div
                    key={cartItem.slug}
                    className="flex items-center gap-4 rounded-lg bg-gray-50 p-4 transition-colors hover:bg-gray-100"
                  >
                    <Image
                      src={cartItem.imageUrl}
                      alt={cartItem.name}
                      width={96}
                      height={96}
                      className="h-24 w-24 rounded-lg object-cover"
                    />

                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{cartItem.name}</h3>
                      <div className="mt-2 flex items-center gap-4 text-sm">
                        <span className="text-gray-600">Qty: {cartItem.quantity}</span>
                        <span className="text-primary font-medium">
                          ${(cartItem.originalPrice * cartItem.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => removeItem(cartItem.slug)}
                      className="text-gray-400 hover:text-primary transition-colors"
                      aria-label="Remove item"
                    >
                      <CiCircleRemove className="h-6 w-6" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex h-full flex-col items-center justify-center">
                <p className="text-gray-500">Your cart is empty</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t pt-4">
            <div className="flex items-center justify-between py-4">
              <span className="text-gray-600 text-lg">Subtotal:</span>
              <span className="text-lg font-semibold text-primary">
                ${calculateSubtotal().toFixed(2)}
              </span>
            </div>

            <SheetFooter>
              <div className="grid grid-cols-2 gap-4 justify-center">
                <Button
                  asChild
                  variant="outline"
                  className="w-full rounded-lg border-gray-300 text-gray-700 hover:border-primary hover:text-primary"
                >
                  <Link href="/cart">View Cart</Link>
                </Button>
                
                <Button asChild className="w-full rounded-lg bg-white border-gray-300 border hover:bg-black hover:text-white">
                  <Link href="/checkout">Checkout</Link>
                </Button>
              </div>
            </SheetFooter>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;