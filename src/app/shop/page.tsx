"use client";
import React, { useState, useEffect } from "react";
//import Image from "next/image";
import Services from "@/components/Services";
import SubHero from "@/components/SubHero";
import { client } from "@/sanity/lib/client";
import Card from "@/components/Card";
//import { PiCirclesFourFill, PiGridFour } from "react-icons/pi";
import { FiFilter } from "react-icons/fi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { IoReorderThree } from "react-icons/io5";
import Pagination from "@/components/Pagination";

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
const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("default");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [gridView, setGridView] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  // Fetch products
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

  // Filter and sort products
  useEffect(() => {
    let filtered = [...products];

    // Price filter
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) =>
        selectedCategories.includes(p.categoryName)
      );
    }

    // Sorting
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

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  // Category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <>
      <SubHero title="Shop" home="Home" linkUrl="/shop" />

      {/* Filter Section */}
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

      {/* Filter Sidebar and Products */}
      <div className="container mx-auto px-4 py-8 flex gap-8">
        {/* Filter Sidebar */}
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

        {/* Product Grid */}
        <div className={`flex-1 ${gridView ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'space-y-4'} gap-6`}>
          {currentItems.map((product) => (
            <Card key={product.slug} product={product} layout={gridView ? 'grid' : 'list'} />
          ))}
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalItems={filteredProducts.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />

      <Services />
    </>
  );
};

export default ProductPage;