"use client";
import React, { useState, } from "react";
import { IoSearch } from "react-icons/io5";

type Product = {
  slug: string;
  title: string;
  price: number;
  productImage?: string;
  description?: string;
  discountPercentage?: number;
};

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `http://localhost:3000/api/search?q=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      setResults(data.results);
      setShowSuggestions(false); // Hide suggestions after submitting
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      // Fetch suggestions when the input has at least 3 characters
      try {
        const res = await fetch(
          `http://localhost:3000/api/search?q=${encodeURIComponent(value)}`
        );
        const data = await res.json();
        setSuggestions(data.results);
        setShowSuggestions(true);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: Product) => {
    setQuery(suggestion.title);
    setShowSuggestions(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-full max-w-lg">
        <form onSubmit={handleSearch} className="flex items-center bg-white shadow-md rounded-full px-4 py-2">
          <IoSearch className="text-gray-500 w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="Search for products..."
            value={query}
            onChange={handleInputChange}
            className="w-full border-none outline-none text-gray-700 placeholder-gray-400"
          />
          <button
            type="submit"
            className=" bg-primary text-white hover:scale-100 px-4 py-2 rounded-full "
          >
            Search
          </button>
        </form>

        {/* Suggestions Dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute left-0 right-0 mt-2 bg-white shadow-lg rounded-md max-h-60 overflow-y-auto z-50">
            {suggestions.map((suggestion) => (
              <div
                key={suggestion.slug}
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {suggestion.title}
              </div>
            ))}
          </div>
        )}

        {/* Results */}
        <div className="mt-4">
          {results.length > 0 && (
            <div className="bg-white shadow-md rounded-lg p-4">
              {results.map((product) => (
                <div key={product.slug} className="border-b pb-2 mb-2">
                  <h2 className="text-lg font-semibold text-blue-500">
                    {product.title}
                  </h2>
                  <p className="text-gray-600">Price: ${product.price}</p>
                </div>
              ))}
            </div>
          )}
          {results.length === 0 && query && (
            <p className="text-gray-500 mt-4 text-center">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
