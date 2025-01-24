import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

interface CartItem {
  product: {
    slug: string
    _id: string;
    title: string;
    imageUrl: string
    name:string;
    orignalPrice: number;
    discount: number;
    fakePrice: number;
    sku: string;
    new: boolean;
    images:string;
   productImage: string,
      price: number
      tags: string
       dicountPercentage: number;
      description: string
      isNew: boolean
  };
  quantity: number;
}

interface WishlistItem {
  product: {
    slug: string
    _id: string;
    title: string;
    imageUrl: string
    name:string;
    orignalPrice: number;
    discount: number;
    fakePrice: number;
    sku: string;
    new: boolean;
    images:string;
   productImage: string,
      price: number
      tags: string
       dicountPercentage: number;
      description: string
      isNew: boolean
  };
  quantity: number;
}



export const wishlistAtom = atomWithStorage<WishlistItem[]>("wishlist", []);
export const cartAtom = atomWithStorage<CartItem[]>("cart", []);


export const itemQuantity = atom(1);

export const cartQuantity = atom((get) => {
  const cart = get(cartAtom);
  const totalQuantity = cart.reduce((total, cartItem) => {
    return total + cartItem.quantity;
  }, 0);
  return totalQuantity;
});

export const removeFromCartAtom = atom(null, (get, set, productId) => {
  const currentCart = get(cartAtom);
  const updatedCart = currentCart.filter((item) => item.product._id !== productId);
  set(cartAtom, updatedCart);
});


