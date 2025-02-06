"use client";

import Services from "@/components/Services";
import SubHero from "@/components/SubHero";
import Image from "next/image";
import Link from "next/link";
import { useAtom } from "jotai";
import { useState } from "react";
import { BillingDetails } from "../../../interface";
import CheckoutButton from "@/components/CheckoutButton";
import { cartAtom, customerFormDetails, isStripeLoading } from "@/lib/atom";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useAtom(cartAtom);
  const [billingDetails, setBillingDetails] =
    useAtom<BillingDetails>(customerFormDetails);
  const [isLoading] = useAtom<boolean>(isStripeLoading);
  const [errors, setErrors] = useState({
    phoneNumber: false,
    email: false,
  });

  // Validation Regex
  const phoneRegex = /^[0-9]{11}$/; // 11 digit phone number
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex

  // Helper function to check if all required fields are filled
  const isFormValid = () => {
    const { fullName, phoneNumber, email, addressLine1, city } = billingDetails;
    return (
      fullName.trim() !== "" &&
      phoneRegex.test(phoneNumber) &&
      emailRegex.test(email) &&
      addressLine1.trim() !== "" &&
      city.trim() !== ""
    );
  };

  const updatedCart = cartItems.map(
    (item: { quantity: number; price: number }) => ({
      ...item,
      totalPrice: item.quantity * item.price,
    })
  );

  const totalAmount = updatedCart.reduce(
    (acc: number, item: { totalPrice: number }) => acc + item.totalPrice,
    0
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setBillingDetails((prev) => ({ ...prev, [name]: value }));

    // Validation logic
    if (name === "phoneNumber") {
      setErrors((prev) => ({
        ...prev,
        phoneNumber: !phoneRegex.test(value),
      }));
    }
    if (name === "email") {
      setErrors((prev) => ({
        ...prev,
        email: !emailRegex.test(value),
      }));
    }
  };

  return (
    <>
      <SubHero title="CheckOut" home="Home" linkUrl="/checkout" />
      <div className="container mx-auto px-4 py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-semibold mb-8">Billing Details</h2>
              <div className="grid gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={billingDetails.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="addressLine1"
                    className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="addressLine1"
                    value={billingDetails.addressLine1}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={billingDetails.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="City"
                  />
                </div>
                <div>
                  <label
                    htmlFor="zipCode"
                    className="block text-sm font-medium text-gray-700 mb-2">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={billingDetails.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary`}
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      Please enter a valid email address.
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={billingDetails.phoneNumber}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border ${
                      errors.phoneNumber ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary`}
                    required
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm mt-1">
                      Please enter a valid 11-digit phone number.
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="addressLine2"
                    className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Additional information"
                    name="addressLine2"
                    value={billingDetails.addressLine2}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Place Order Section */}
          <div className="bg-white border shadow-lg border-spacing-1 border-gray-300 p-8 rounded-lg">
            <div className="flex justify-between mb-6">
              <p className="font-semibold text-lg">Product</p>
              <p className="font-semibold text-lg">Name & Quantity</p>
              <p className="font-semibold text-lg">Subtotal</p>
            </div>

            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-center">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      fill
                      alt={item?.name}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-gray-600">
                    {item.name}{" "}
                    <span className="font-semibold text-black">
                      X {item.quantity}
                    </span>
                  </p>
                  <p className="font-semibold">${item.price * item.quantity}</p>
                </div>
              ))}
            </div>

            <div className="border-t pt-6 mb-6">
              <div className="flex justify-between">
                <p className="font-semibold text-lg">Total</p>
                <p className="font-bold text-xl text-primary">
                  ${totalAmount.toFixed(2)}
                </p>
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="space-y-4">
                <p className="text-gray-600">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="stripe"
                      checked={billingDetails.paymentMethod === "stripe"}
                      onChange={handleInputChange}
                      className="border-gray-300 rounded-full focus:ring-primary"
                    />
                    <span>Direct Bank Transfer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cashOnDelivery"
                      checked={
                        billingDetails.paymentMethod === "cashOnDelivery"
                      }
                      onChange={handleInputChange}
                      className="border-gray-300 rounded-full focus:ring-primary"
                    />
                    <span>Cash on Delivery</span>
                  </div>
                </div>
                <p className="text-gray-600">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <span className="font-semibold">privacy policy</span>.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              {billingDetails.paymentMethod === "stripe" ? (
                <CheckoutButton disabled={!isFormValid()} />
              ) : (
                <Link
                  href={isFormValid() && !isLoading ? "/success" : "/checkout"}>
                  <button
                    onClick={() => isFormValid() && setCartItems([])}
                    className={`mt-6 px-8 py-4  border border-black text-black rounded-xl shadow-sm text-[20px] leading-[30px] font- hover:scale-110 focus:outline-none ${
                      isFormValid() && !isLoading
                        ? "hover:bg-black  bg-white hover:text-white  text-black"
                        : " cursor-not-allowed"
                    }`}
                    disabled={!isFormValid() || isLoading}>
                    Place Order
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28">
        <Services />
      </div>
    </>
  );
}
