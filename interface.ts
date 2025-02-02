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
	firstName: string;
  lastName: string;
  company?: string;
  country: string;
  addressLine1: string;
  city: string;
  province: string;
  zipCode: string;
  email: string;
  phoneNumber: string;
  address2?: string;
	paymentMethod: "cashOnDelivery" | "stripe";
  }
  
  export interface ProductDetail {
	id: number;                  // Added essential identifier
	name: string;
	imageUrl: string;
	finalPrice: number;          // Consistent camelCase
	quantity: number;            // Consistent camelCase
	slug: string;                // Added for product linking
  }
  
  export interface Billing extends Omit<BillingDetails, 'paymentMethod'> {
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
	orderDate: Date;             // Added important order metadata
	paymentStatus: "pending" | "completed" | "failed";
	_id?: string;                // For database reference
	_type?: string;              // For Sanity.io compatibility
  }