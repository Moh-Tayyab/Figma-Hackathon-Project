"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Services from '@/components/Services';
import SubHero from '@/components/SubHero';
import { client } from '@/sanity/lib/client';
import { FiFilter } from "react-icons/fi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { IoReorderThree } from "react-icons/io5";
import { IoMdShare } from 'react-icons/io';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import WishListFunctionality from '@/components/WishListFunctionality';
import Pagination from '@/components/Pagination';

interface Product {
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
  quantity: number;
  finalPrice: number;
  Quantity: number;
}

const Product = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("default");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [gridView, setGridView] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "myproduct"]{
        name,
        tags,
        price,
        stock,
        dimensions,
        id,
        description,
        discount,
        originalPrice,
        "categoryName": category->name,
        "slug": slug.current,
        "imageUrl": image.asset->url,
        rating
      }`;
      const res = await client.fetch(query);
      setProducts(res);
      setFilteredProducts(res);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = [...products];
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) =>
        selectedCategories.includes(p.categoryName)
      );
    }

    switch (sortBy) {
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "popularity":
        filtered.sort((a, b) => b.rating.count - a.rating.count);
        break;
      default:
        filtered = filtered;
    }

    setFilteredProducts(filtered);
  }, [sortBy, priceRange, selectedCategories, products]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const getTagColor = (tag: string) => {
    switch (tag.toLowerCase()) {
      case "sale":
        return "bg-green-500";
      case "popular":
        return "bg-yellow-500";
      case "limited":
        return "bg-blue-500";
      case "discount":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <>
      <SubHero title="Shop" home="Home" linkUrl='/shop' />

      <div className="bg-[#F9F1E7] border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Left Section */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <FiFilter className="w-5 h-5" />
                <span className="font-medium">Filters</span>
              </button>

              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={() => setGridView(true)}
                  className={`p-2 rounded-lg ${gridView ? 'bg-primary/10 text-primary' : 'text-gray-600'}`}
                >
                  <TfiLayoutGrid4Alt className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setGridView(false)}
                  className={`p-2 rounded-lg ${!gridView ? 'bg-primary/10 text-primary' : 'text-gray-600'}`}
                >
                  <IoReorderThree className="w-6 h-6" />
                </button>
              </div>

              <span className="text-gray-600">
                Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredProducts.length)} of {filteredProducts.length} results
              </span>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <label className="text-gray-700">Show:</label>
                <select
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  className="px-3 py-1 border rounded-md"
                >
                  {[8, 16, 24, 32].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <label className="text-gray-700">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1 border rounded-md"
                >
                  <option value="default">Default</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="popularity">Popularity</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 flex gap-8">
        {showFilters && (
         <div className="w-64 shrink-0 bg-white p-6 rounded-lg shadow-sm border">
         <h3 className="text-lg font-semibold mb-4">Filters</h3>
         
         {/* Price Range */}
         <div className="mb-6">
           <h4 className="text-sm font-medium mb-3">Price Range</h4>
           <div className="flex items-center gap-2">
             <input
               type="number"
               value={priceRange[0]}
               onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
               className="w-20 px-2 py-1 border rounded-md text-sm"
             />
             <span className="text-gray-500">-</span>
             <input
               type="number"
               value={priceRange[1]}
               onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
               className="w-20 px-2 py-1 border rounded-md text-sm"
             />
           </div>
         </div>

         {/* Categories */}
         <div className="mb-6">
           <h4 className="text-sm font-medium mb-3">Categories</h4>
           <div className="space-y-2">
             {Array.from(new Set(products.map(p => p.categoryName))).map(category => (
               <label key={category} className="flex items-center gap-2 text-sm">
                 <input
                   type="checkbox"
                   checked={selectedCategories.includes(category)}
                   onChange={() => toggleCategory(category)}
                   className="rounded text-primary focus:ring-primary"
                 />
                 {category}
               </label>
             ))}
           </div>
         </div>
       </div>
        )}

        <div className={`flex-1 ${gridView ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'space-y-4'} gap-6`}>
          {currentItems.map((product, i) => (
            <div key={i} className="group bg-white rounded-xl shadow-sm border border-gray-100 
              w-full max-w-[320px] h-[400px] overflow-hidden 
              transition-all duration-300 hover:shadow-lg hover:border-gray-200">
              
              {/* Image Container */}
              <div className="relative w-full h-64 bg-gray-100">
                <Image
                  src={product.imageUrl}
                  alt={product.slug}
                  fill
                  className="object-cover object-center transition-opacity duration-300"
                  quality={100}
                  sizes="(max-width: 640px) 100vw, 320px"
                />

                {/* Discount Badge */}
                {product.discount > 0 && (
                  <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    -{product.discount}%
                  </div>
                )}

                {/* Tags */}
                {product.tags && (
                  <div className="absolute top-3 left-3 flex gap-2">
                    {product.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className={`text-white text-xs font-medium px-3 py-1 rounded-full ${getTagColor(tag)}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={`/shop/${product.slug}`} className="mb-4 w-[60%] text-center">
                    <button className="w-full bg-white/90 text-gray-900 px-6 py-3 rounded-full 
                      font-medium text-sm shadow-md hover:bg-white hover:shadow-lg
                      transition-all duration-200">
                      Quick View
                    </button>
                  </Link>
                  <div className="flex items-center gap-4 text-white">
                    <button className="flex items-center gap-1 text-sm hover:text-gray-200 transition-colors">
                      <IoMdShare className="text-lg" />
                      <span className="text-xs">Share</span>
                    </button>
                    <Link href="/comparison">
                      <button className="flex items-center gap-1 text-sm hover:text-gray-200 transition-colors">
                        <FaArrowRightArrowLeft className="text-lg" />
                        <span className="text-xs">Compare</span>
                      </button>
                    </Link>
                    <WishListFunctionality product={product} />
                  </div>
                </div>
              </div>
              {/* Product Info */}
              <div className="p-4 pt-5">
                <Link href={`/shop/${product.slug}`}>
                  <h3 className="text-gray-800 font-semibold text-lg mb-2 hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                </Link>

                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl font-bold text-gray-900">
                    ${product.originalPrice}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className={`w-4 h-4 ${index < Math.round(product.rating.rate) ? 'text-amber-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  ({product.rating.count} reviews)
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalItems={filteredProducts.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />

      <div className='px-4 py-10'>
        <Services />
      </div>
    </>
  );
};

export default Product;
