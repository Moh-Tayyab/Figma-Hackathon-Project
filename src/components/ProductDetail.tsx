"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { urlFor } from "@/sanity/lib/image";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useContext } from "react";
import { CartContext } from "@/app/context/CartContext";
const ProductDetail = ({ product }: any) => {
  
  const {index, setIndex, addProduct, incQty, decQty, cartItems, quantity }: any = useContext(CartContext);
  //const [quantity, setQuantity] = useState(1);
  // const handleIncrement = () => {
  //   setQuantity((prev) => prev + 1);
  // };
  // const handleDecrement = () => {
  //   if (quantity > 1) {
  //     setQuantity((prev) => prev - 1);
  //   }
  // };
  // const handleAddToCart = () => {
  //   addProduct(product, quantity);
  //   setQuantity(1);
  // };

  console.log("productdetailpage", cartItems);

  return (
    <>
      {/* Sub Navbar */}
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
          <p className="pl-2 text-black">{product.name}</p>
        </ul>
      </div>
      
      <div className="font-poppins overflow-hidden container mx-auto px-4 md:px-20 pt-20">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-6">
          {/* Left Section */}
          <div className="flex lg:flex-col lg:h-[391px] lg:justify-start gap-4 mb-6 lg:mb-0">
            {product.images?.map((item: any, i: number) => (
              <Image
                //loader={()=>urlForImage(product.images[i]).url()}
                src={urlFor(product.images && product.images[i]).url()}
                alt={product.images[i]}
                width={90}
                height={90}
                className="rounded bg-[#F9F1E7] object-cover object-center hover:cursor-pointer hover:scale-110"
                onClick={() => setIndex(i)}
              />
            ))}
          </div>

          {/* Main product Image */}
          <div className="flex-1 flex justify-center items-start mb-6 lg:mb-0 h-[440px]">
            <Image
              className="rounded object-cover  hover:scale-110"
              //loader={()=>urlFor(product.images[0]).url()}
              src={urlFor(product?.images && product.images[index]).url()}
              alt={product.images[index]}
              width={481}
              height={400}
            />
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 text-start lg:pl-6 lg:mt-0">
            <h1 className="text-black text-2xl lg:text-4xl font-semibold mb-2">
              {product.name}
            </h1>
            <p className="text-[#9F9F9F] text-lg lg:text-2xl font-medium mb-4">
              ${product.orignalPrice}
            </p>
            <div className="flex items-center mb-4">
              <AiFillStar className="text-[#FFC700]" />
              <AiFillStar className="text-[#FFC700]" />
              <AiFillStar className="text-[#FFC700]" />
              <AiOutlineStar className="text-gray-400" />
              <span className="ml-3 text-sm text-[#9F9F9F] border-l-2 pl-3 border-[#9F9F9F]">
                5 Customer Reviews
              </span>
            </div>
            <p className="text-sm lg:text-base text-black mb-4">
              {product.description}
            </p>
            <div className="flex flex-col gap-4 mb-6">
              <div>
                <span className="block text-sm lg:text-base text-[#9F9F9F] mb-2">
                  Size
                </span>
                <div className="flex gap-2">
                  {["L", "XL", "XS"].map((size) => (
                    <button
                      key={size}
                      className="px-3 py-1 bg-[#F9F1E7] rounded hover:bg-[#B88E2F] hover:text-white transition">
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <span className="block text-sm lg:text-base text-[#9F9F9F] mb-2">
                  Colors
                </span>
                <div className="flex gap-2">
                  <button className="w-6 h-6 bg-[#816DFA] rounded-full border-2" />
                  <button className="w-6 h-6 bg-black rounded-full border-2" />
                  <button className="w-6 h-6 bg-primary rounded-full border-2" />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mb-6">
              <button className="text-black border border-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition sm:w-auto flex text-center items-center">
                <span className="">
                  <AiOutlineMinus  onClick={decQty}/>
                  </span>  
                  <span className="px-3 text-xl "> {quantity} </span>
                  <span className="">
                    <AiOutlinePlus onClick={incQty}/>
                  </span>
              </button>
            {/* <Link href="/cart"> */}
                <button className="border border-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:scale-110 transition sm:w-auto hover:text-white hover:bg-black "
                onClick={() => addProduct(product, quantity)}
                >
                  Add to Cart
                </button>
              {/* </Link> */}
              <Link href="/comparsion">
                <button className="hover:text-white hover:bg-black border border-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:scale-110 transition sm:w-auto">
                  Compare
                </button>
              </Link>
            </div>
            <ul className="text-sm lg:text-base text-[#9F9F9F] gap-5">
              <li className="pt-5">SKU: {product.fakePrice}</li>
              <li className="py-5">Category: {product.category.name}</li>
              <li className="pb-5">Tags: Sofa, Chair, Home, Shop</li>
              <li className="flex items-center gap-2">
                Share: <FaFacebook className="text-black" />{" "}
                <FaLinkedin className="text-black" />{" "}
                <FaTwitter className="text-black" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font">
<div className="container px-5 py-24 mx-auto">
  <div className="flex flex-wrap w-full mb-20">
    <div className=" w-full mb-6 lg:mb-0 flex flex-row items-center text-center justify-center gap-9">
      <h1 className="sm:text-3xl leading-9 h-[36px] lg:text-[24px] font-medium font-poppins mb-2 text-[#000000]">
      Description
      </h1>
      <p className='text-[#9F9F9F] leading-9  h-[36px] lg:text-[24px] font-medium font-poppins sm:text-3xl'>Additional Information</p>
      <p className='text-[#9F9F9F] leading-9  h-[36px] lg:text-[24px] font-medium font-poppins sm:text-3xl'>Reviews [5]</p>
    </div>
    <p className=" lg:ml-28 w-[1026px] text-[#9F9F9F] leading-6 lg:text-[16px] font-[400] font-poppins sm:text-3xl ml-2 mt-10">
    Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
    <br className="hidden lg:inline-block" />
      Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
    </p>
  </div>
  <div className="flex flex-wrap -m-4">
    <div className=" md:w-1/2 lg:w-1/2 p-4">
      <div className="bg-[#F9F1E7] p-6 rounded-lg">
        <Image
          className="rounded w-full object-cover object-center mb-6"
          src="/sofaa2.png"
          alt="content"
          width={605}
          height={348}
        />
       
      </div>
    </div>
    <div className=" md:w-1/2 lg:w-1/2  p-4">
      <div className="bg-[#F9F1E7] p-6 rounded-lg">
        <Image
          className="rounded w-full object-cover object-center mb-6"
          src="/sofaa2.png"
          alt="content"
          width={605}
          height={348}
        /> 
      </div>
    </div>
  </div>
</div>
</section>
    </>
  );
};

export default ProductDetail;

