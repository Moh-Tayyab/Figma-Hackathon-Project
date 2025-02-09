"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PuffLoader } from "react-spinners";
import { useAtom } from "jotai";
import { cartAtom } from "@/lib/atom";
import confetti from "canvas-confetti";
import Image from "next/image";

const OrderSuccessPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [_, setCartItems] = useAtom(cartAtom);
  const [isExiting, setIsExiting] = useState(false);
  const router = useRouter();

  const triggerConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      spread: 160,
    };

    confetti({
      ...defaults,
      particleCount: count,
      colors: ["#60A5FA", "#34D399", "#FBBF24", "#A78BFA"],
      scalar: 0.8,
    });
  };

  const playThankYou = () => {
    const audio = new Audio("/studio/thankyou.mp3");
    audio.play();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCartItems([]);
      setIsLoading(false);
      triggerConfetti();
      playThankYou();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleContinueShopping = () => {
    setIsExiting(true);
    setTimeout(() => {
      router.push("/cart");
    }, 500);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-slate-50 to-blue-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}>
          {isLoading ? (
            <motion.div
              className="flex flex-col items-center space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}>
              <div className="relative">
                <PuffLoader color="#3B82F6" size={80} />
                <motion.div
                  className="absolute inset-0 border-4 border-blue-100 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              </div>
              <motion.p
                className="text-2xl font-semibold text-gray-700 tracking-wide"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}>
                Finalizing Your Order...
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              className="relative bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full border border-gray-100 overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120 }}>
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-green-400" />
              <div className="absolute bottom-0 right-0 opacity-10">
                <svg className="w-64 h-64" viewBox="0 0 200 200">
                  <path
                    fill="#3B82F6"
                    d="M42.8,-39.1C53.5,-24.3,59.5,-6.4,56.4,9.6C53.3,25.6,41.1,39.6,25.8,48.1C10.5,56.5,-7.8,59.3,-24.1,53.6C-40.4,47.9,-54.6,33.6,-59.2,16.3C-63.8,-1.1,-58.7,-21.6,-47.2,-36.4C-35.7,-51.2,-17.8,-60.3,0.7,-60.9C19.3,-61.5,38.5,-53.8,42.8,-39.1Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </div>

              <div className="relative z-10 space-y-8">
                {/* Header Section */}
                <div className="flex items-center justify-between mb-8">
                  <Image
                    src="/logo1.png"
                    alt="Furniro Logo"
                    width={120}
                    height={40}
                    className="h-8 w-auto"
                  />
                  <span className="text-sm font-medium text-gray-500">
                    Order Confirmation
                  </span>
                </div>

                {/* Main Content */}
                <motion.div
                  className="text-center space-y-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.15 }}>
                  {/* Success Icon */}
                  <motion.div
                    className="flex justify-center mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}>
                    <div className="p-6 bg-gradient-to-br from-green-500 to-blue-400 rounded-full shadow-lg transform hover:rotate-12 transition-transform duration-300">
                      <svg
                        className="w-24 h-24 text-white"
                        viewBox="0 0 24 24"
                        fill="none">
                        <motion.path
                          d="M5 13L9 17L19 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Content Section */}
                  <div className="space-y-6">
                    <motion.h1
                      className="text-4xl font-bold text-gray-800 tracking-tight"
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}>
                      Order Confirmed!
                    </motion.h1>

                    <motion.p
                      className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}>
                      Thank you for choosing Furniro! Your order{" "}
                      <span className="font-semibold text-blue-600">
                        #34251
                      </span>{" "}
                      has been successfully placed.
                    </motion.p>

                    {/* Order Details Card */}
                    <motion.div
                      className="bg-gray-50 p-6 rounded-xl space-y-4 text-gray-700 border border-gray-200"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <svg
                              className="w-6 h-6 text-green-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Order ID</p>
                            <p className="font-medium text-gray-900">#34251</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-green-100 rounded-lg">
                            <svg
                              className="w-6 h-6 text-green-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">
                              Est. Delivery
                            </p>
                            <p className="font-medium text-gray-900">
                              2-3 Days
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex items-center justify-center space-x-4">
                          <div className="p-2 bg-purple-100 rounded-lg">
                            <svg
                              className="w-6 h-6 text-purple-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Total Paid</p>
                            <p className="font-medium text-gray-900">
                              $1,499.00
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      className="grid gap-4 sm:grid-cols-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}>
                      <button
                        onClick={handleContinueShopping}
                        className="w-full py-3 px-6 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl font-semibold text-white transition-all hover:shadow-lg hover:scale-[1.02] active:scale-95">
                        Continue Shopping
                      </button>
                      <button className="w-full py-3 px-6 bg-gray-100 rounded-xl font-semibold text-gray-700 transition-all hover:bg-gray-200 hover:scale-[1.02] active:scale-95">
                        Download Invoice
                      </button>
                    </motion.div>

                    {/* Trust Badges */}
                    <div className="pt-6 border-t border-gray-200">
                      <div className="flex items-center justify-center space-x-6">
                        {/* Secure Payment */}
                        <motion.svg
                          className="w-16 h-16 text-blue-500 hover:text-blue-600 transition-colors"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          whileHover={{ scale: 1.05 }}>
                          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                          <path d="M12 7.01c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                        </motion.svg>

                        {/* 30-Day Money Back */}
                        <motion.svg
                          className="w-16 h-16 text-green-500 hover:text-green-600 transition-colors"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          whileHover={{ scale: 1.05 }}>
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                          <path d="M16.59 7.58L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
                        </motion.svg>

                        {/* SSL Secure */}
                        <motion.svg
                          className="w-16 h-16 text-purple-500 hover:text-purple-600 transition-colors"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          whileHover={{ scale: 1.05 }}>
                          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                        </motion.svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-500">
                  Need help? Contact us at{" "}
                  <a
                    href="mailto:support@furniro.com"
                    className="text-blue-500 hover:underline">
                    support@furniro.com
                  </a>
                </p>
                <div className="mt-4 flex items-center justify-center space-x-4">
                  <button className="text-gray-400 hover:text-blue-500 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-blue-500 transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-blue-500 transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OrderSuccessPage;
