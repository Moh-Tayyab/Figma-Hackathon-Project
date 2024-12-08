interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    originalPrice: number;
    discount: number;
    imageUrl: string; // Optional property to handle missing image URLs
  }
  
  export const products: Product[] = [
    {
      id: 1,
      title: "Syltherine",
      description: "Stylish cafe chair",
      price: 2500000,
      originalPrice: 3500000,
      discount: 30,
      imageUrl: "/shop/image 1.png",
    },
   
    // Remaining products...
  ];
  