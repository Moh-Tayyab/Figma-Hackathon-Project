import React from "react";
import Link from "next/link";
import { FiHome } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

const Error404 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <nav className="flex items-center text-sm text-gray-500 font-medium">
            <Link 
              href="/" 
              className="hover:text-primary transition-colors flex items-center"
            >
              <FiHome className="mr-2" />
              Home
            </Link>
            <IoIosArrowForward className="mx-2 text-gray-400" />
            <span className="text-gray-400">Page Not Found</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="max-w-2xl px-4 text-center">
          {/* Animated 404 Number */}
          <div className="relative mb-8">
            <span className="text-[180px] md:text-[240px] font-bold text-primary/10">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg 
                className="w-64 h-64 text-primary animate-pulse" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lost in Space?
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            The page you&apos;re looking for seems to have vanished into the digital void. 
            Let&apos;s get you back home.
          </p>

          {/* Home Button */}
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5
            bg-primary text-white rounded-lg font-medium hover:bg-primary/90
            transition-all transform hover:scale-105 shadow-lg hover:shadow-primary/30"
          >
            <FiHome className="w-5 h-5" />
            Return to Homepage
          </Link>

          {/* Optional: Search Bar */}
          <div className="mt-8 max-w-md mx-auto">
            <p className="text-gray-500 mb-2">Or try searching:</p>
            <div className="relative">
              <input
                type="text"
                placeholder="Search our site..."
                className="w-full px-4 py-2 border border-gray-200 rounded-lg
                focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button className="absolute right-2 top-2 p-2 text-gray-500 hover:text-primary">
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Error404;