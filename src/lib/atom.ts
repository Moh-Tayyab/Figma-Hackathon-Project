import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { BillingDetails } from "../../interface";
//import { DetailPreview } from "sanity";
interface CartItem {
    imageUrl: string;
	rating: {
	  count: number;
	  rate: number;
	};
	tags: string[];
	price: number;
	discount: number;
	originalPrice: number;
	slug: string;
	categoryName: string;
	name: string;
	stock: number;
	dimensions: {
	  depth: number;
	  width: number;
	  height: number;
	};
	id: number;
	description: string;
	Quantity: number;
	finalPrice: number;
	quantity: number;
  }
 

interface WishlistItem {
	imageUrl: string;
	rating: {
	  count: number;
	  rate: number;
	};
	tags: string[];
	price: number;               // Current price (after discount)
	discount: number;            // Discount percentage
	originalPrice: number;       // Original price before discount
	slug: string;
	categoryName: string;
	name: string;
	stock: number;
	dimensions: {
	  depth: number;
	  width: number;
	  height: number;
	};
	id: number;
	description: string;
	quantity: number;            // Changed from Quantity to camelCase
	finalPrice: number;          // Changed from Finalprice to camelCase
	Quantity: number; 
}

const initialBillingDetails: BillingDetails = {
    fullName: "",
    phoneNumber: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    paymentMethod: "cashOnDelivery", 
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
  const updatedCart = currentCart.filter((item) => item.id !== productId);
  set(cartAtom, updatedCart);
});


export const customerFormDetails = atomWithStorage<BillingDetails>('customerFormDetails', initialBillingDetails);


// Manage Loading State in Jotai for stripe payment
export const isStripeLoading = atom<boolean>(false);