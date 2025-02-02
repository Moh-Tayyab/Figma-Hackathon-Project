"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../interface";

interface SearchModalProps {
  onClose: () => void;
}

export default function SearchBar({ onClose }: SearchModalProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        setIsLoading(true);
        const query = `*[_type == "myproduct" && name match "${searchTerm}*"]{
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
          "slug":slug.current,
          "imageUrl": image.asset->url,
          rating
        }`;
        client.fetch(query).then((results: Product[]) => {
          setSuggestions(results);
          setIsLoading(false);
        });
      } else {
        setSuggestions([]);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const handleSuggestionClick = (productId: string) => {
    router.push(`/shop/${productId}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-white rounded-xl p-8 w-full max-w-2xl shadow-2xl transform transition-transform duration-300 scale-100"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-primary">
            Search Products
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Close Modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
           placeholder="Search by product name..."
          className="w-full px-4 py-3 mb-4 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent1 transition-colors"
        />
        {isLoading && (
          <div className="mt-4 flex justify-center">
            <div
              className="animate-spin rounded-full h-10 w-10 border-4 border-t-4 border-gray-200"
              style={{ borderTopColor: "#B88E2F" }}
            ></div>
          </div>
        )}
        {suggestions.length > 0 && (
          <div className="mt-4 max-h-60 overflow-y-auto">
            {suggestions.map((product) => (
              <Link
                key={product.id}
                href={`/shop/${product.slug}`}
                className="flex items-center p-3 mb-2 hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={() => handleSuggestionClick(product.slug)}
              >
                <Image
                  src={urlFor(product.imageUrl).url() || "/placeholder.svg"}
                  alt={product.name}
                  width={40}
                  height={40}
                  className="mr-4 rounded-md shadow-sm"
                />
                <span className="text-lg font-medium text-gray-800">
                  {product.name}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
