export interface Product {
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
	Quantity: number;            // Changed from Quantity to camelCase
  }
  
  export interface BillingDetails {
	fullName: string;
	phoneNumber: string;
	email: string;
	addressLine1: string;
	addressLine2?: string; 
	city: string;
	paymentMethod: "cashOnDelivery" | "stripe"; 
  }
  
  
export interface ProductDetail {
	name: string;
	imageUrl: string;
	Finalprice: number;
	Quantity: number;
  }
  
  export interface Billing{
	fullName: string;
	email: string;
	phoneNumber: string;
	addressLine1: string;
	addressLine2?: string;
	city: string;
  }
  
  export interface Order {
	customerDetails: Billing;
	cartItems: ProductDetail[];
	totalAmount: number;
  }