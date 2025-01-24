"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoSearch } from "react-icons/io5";

const SHEET_SIDES = ["top"] as const;
type SheetSide = (typeof SHEET_SIDES)[number];

type Product = {
  slug: string;
  title: string;
  price: number;
  productImage?: string;
  description?: string;
  discountPercentage?: number;
};

export function SheetSide() {
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
      // Fetch suggestions dynamically
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
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet
          key={side}
          onOpenChange={(open) => {
            if (!open) {
              setQuery("");
              setResults([]);
              setShowSuggestions(false);
            }
          }}
        >
          <SheetTrigger asChild>
            <IoSearch className="h-[32px] w-[32px] text-center hover:scale-110 hover:text-primary pr-2" />
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle className="text-white">Search Products</SheetTitle>
              <SheetDescription className="text-white">
                Search for products by name.
              </SheetDescription>
            </SheetHeader>
            <div className="mt-4">
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="text"
                  placeholder="Search by product name..."
                  value={query}
                  onChange={handleInputChange}
                  className="border p-2 w-full"
                />
                {/* Suggestions Dropdown */}
                {showSuggestions && suggestions.length > 0 && (
                  <div className="absolute left-0 right-0 bg-white shadow-md rounded-md mt-2 max-h-60 overflow-y-auto z-50">
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
                <button
                  type="submit"
                  className="p-2 bg-blue-500 text-white mt-2 w-full"
                >
                  Search
                </button>
              </form>
              {/* Search Results */}
              <div>
                {results.length > 0 ? (
                  results.map((product) => (
                    <div key={product.slug} className="p-2 border-b">
                      <h2 className="text-blue-500">{product.title}</h2>
                      <p>Price: ${product.price}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 mt-2">No results found.</p>
                )}
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <button className="p-2 bg-red-500 text-white">Close</button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
