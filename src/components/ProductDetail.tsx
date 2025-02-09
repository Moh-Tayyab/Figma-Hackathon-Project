"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { useAtom } from "jotai";
import { cartAtom, itemQuantity } from "@/lib/atom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Product } from "../../interface";

const ProductDetail = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useAtom(itemQuantity);
  const [cartItems, setCartItems] = useAtom(cartAtom);

  const incQty = () => setQuantity((prev) => prev + 1);
  const decQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  function addProductToCart() {
    const currentCartItem = cartItems.find(
      (cartItem) => cartItem.name === product.name
    );

    if (currentCartItem) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.name === product.name
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevCart) => [
        ...prevCart,
        { ...product, quantity: quantity },
      ]);
    }

    // Reset the quantity to 1 after adding to cart
    setQuantity(1);
    // Display toast notification
    toast.success("Product added to cart successfully!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  }

  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="flex items-center justify-between gap-4 bg-[#F9F1E7] mx-auto px-4 py-8">
        <ul className="flex flex-wrap items-center justify-center space-x-2 mt-4 text-[16px] sm:text-[20px]">
          <Link
            href="/"
            className="text-[#9F9F9F] hover:cursor-pointer hover:scale-110 transition-transform">
            Home
          </Link>
          <IoIosArrowForward className="w-4 h-4" />
          <Link
            href= {"/shop"}
            className="text-[#9F9F9F] hover:cursor-pointer hover:scale-110 transition-transform">
            Shop
          </Link>
          <IoIosArrowForward className="w-4 h-4" />
          <span> |</span>
          <p className="pl-2 text-black">{product?.name}</p>
        </ul>
      </div>

      {/* Main Product Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Gallery */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="aspect-square relative overflow-hidden rounded-xl">
              <Image
                src={product?.imageUrl}
                alt={product?.name}
                fill
                className="object-contain transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-neutral-900 mb-2">{product?.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <p className="text-3xl font-semibold text-primary-600">
                  ${product?.originalPrice}
                </p>
                {/* {product?.originalPrice !== product?.discountedPrice && (
                  <span className="text-xl line-through text-neutral-400">
                    ${product?.discountedPrice}
                  </span>
                )} */}
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`text-xl ${
                        index < Math.round(product?.rating.rate)
                          ? "text-amber-400"
                          : "text-neutral-200"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-neutral-500">
                  ({product?.rating.count} reviews)
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                  In Stock
                </span>
              </div>
            </div>

            <p className="text-neutral-600 leading-relaxed">{product?.description}</p>

            <div className="space-y-6">
              {/* Product Features */}
              <div className="bg-neutral-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    Premium sustainable materials
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    Handcrafted with precision
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    Lifetime craftsmanship warranty
                  </li>
                </ul>
              </div>

              {/* Product Dimensions */}
              <div className="grid grid-cols-3 gap-4 text-center border rounded-lg p-4">
                <div className="space-y-1">
                  <dt className="text-sm text-neutral-500">Height</dt>
                  <dd className="font-medium">{product?.dimensions.height}cm</dd>
                </div>
                <div className="space-y-1 border-x">
                  <dt className="text-sm text-neutral-500">Width</dt>
                  <dd className="font-medium">{product?.dimensions.width}cm</dd>
                </div>
                <div className="space-y-1">
                  <dt className="text-sm text-neutral-500">Depth</dt>
                  <dd className="font-medium">{product?.dimensions.depth}cm</dd>
                </div>
              </div>

              {/* Add to Cart Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={decQty}
                      className="px-4 py-3 text-neutral-600 hover:bg-neutral-100 transition-colors border-r-2"
                    >
                      <AiOutlineMinus className="w-5 h-5" />
                    </button>
                    <span className="w-12 text-center text-xl font-medium ">
                      {quantity}
                    </span>
                    <button
                      onClick={incQty}
                      className="px-4 py-3 text-neutral-600 hover:bg-neutral-100 transition-colors border-l-2"
                    >
                      <AiOutlinePlus className="w-5 h-5" />
                    </button>
                  </div>
                  <button
                    onClick={addProductToCart}
                    className="flex-1 hover:opacity-110 bg-neutral-900 text-white py-3 rounded-lg hover:bg-neutral-800 transition-colors font-medium"
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t">
                  <span className="text-neutral-500">Share:</span>
                  <div className="flex gap-3">
                    <FaFacebook className="text-xl text-neutral-600 hover:text-blue-600 transition-colors cursor-pointer" />
                    <FaTwitter className="text-xl text-neutral-600 hover:text-blue-400 transition-colors cursor-pointer" />
                    <FaLinkedin className="text-xl text-neutral-600 hover:text-blue-700 transition-colors cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b">
            <nav className="flex gap-8">
              <button className="py-4 border-b-2 border-transparent hover:text-neutral-900 text-neutral-500 font-medium">
                Description
              </button>
              <button className="py-4 border-b-2 border-transparent hover:text-neutral-900 text-neutral-500 font-medium">
                Specifications
              </button>
              <button className="py-4 border-b-2 border-transparent hover:text-neutral-900 text-neutral-500 font-medium">
                Reviews ({product?.rating.count})
              </button>
            </nav>
          </div>

          <div className="py-8">
            <div className="prose max-w-none">
              <h3 className="text-2xl font-semibold mb-6">Craftsmanship Details</h3>
              <p className="text-neutral-600 mb-6">
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable
                active stereo speaker takes the unmistakable look and sound of Marshall,
                unplugs the chords, and takes the show on the road.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <Image
                  src={product?.imageUrl}
                  alt={product?.name}
                  width={605}
                  height={348}
                  className="rounded-xl shadow-lg"
                />
                <Image
                  src={product?.imageUrl}
                  alt={product?.name}
                  width={605}
                  height={348}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position="bottom-right" />
    </>
  );
};

export default ProductDetail;