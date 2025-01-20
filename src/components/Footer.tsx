// import React from "react";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="bg-[#ffffff] text-[#000000] font-poppins">
//       <div className="container pl-6 pr-8 py-12 mx-auto">
//         <div className="flex flex-wrap md:text-left text-center order-first">
//           {/* Logo and Address Section */}
//           <div className="w-full md:w-[25%] mb-6 md:mb-0">
//             <Link href={'/'} className="flex items-center md:justify-start justify-center">
//               <h2 className="text-[24px] font-[700] leading-[36px]">Funiro.</h2>
//             </Link>
//             <p className="mt-4 text-[16px] font-[400] leading-[24px] text-[#9F9F9F]">
//               400 University Drive Suite 200 Coral <br /> Gables, <br /> FL 33134 USA
//             </p>
//           </div>

//           {/* Links Section */}
//           <div className="w-full  mb-6 md:mb-0 ml-10 px-4">
//             <h2 className="text-[16px] font-[500] leading-[24px] text-[#9F9F9F] mb-8">Links</h2>
//             <nav className="list-none space-y-8">
//               <li>
//                 <Link href="/" className="hover:underline">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/shop" className="hover:underline">
//                   Shop
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/" className="hover:underline">
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="hover:underline">
//                   Contact
//                 </Link>
//               </li>
//             </nav>
//           </div>

//           {/* Help Section */}
//           <div className="w-full md:w-[16%] mb-6 md:mb-0 px-4">
//             <h2 className="text-[16px] font-[500] leading-[24px] text-[#9F9F9F] mb-8">Help</h2>
//             <nav className="list-none space-y-6">
//               <li>
//                 <Link href="/" className="hover:underline">
//                 Payment Options
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/" className="hover:underline">
//                 Returns
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/" className="hover:underline">
//                 Privacy Policies
//                 </Link>
//               </li>
//             </nav>
//           </div>

//           {/* Newsletter Section */}
//           <div className="w-full md:w-[35%] px-4">
//             <h2 className="text-[16px] font-[500] leading-[24px] text-[#9F9F9F] mb-7">Newsletter</h2>
//             <p className="text-[16px] font-[500] leading-[24px] text-[#000000] mb-8">
//             Get Our Latest Update In Your Email. Subscribe now!
//             </p>
//             <div className="flex items-center">
//               <input
//                 type="text"
//                 placeholder="Enter Your Email Address"
//                 className="border-b-2 border-[#000000] focus:outline-none flex-grow text-sm font-[400] leading-[21px] py-1"
//               />
//               <button className="ml-4 font-[500] ms:text-[16px] lg:text-xl leading-[21px] text-[#000000] hover:scale-110 border-b-2 border-[#000000]">
//                 SUBSCRIBE
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom Section */}
//       <div className="border-t-2 border-[#D9D9D9] px-6">
//         <div className="container py-4 mx-auto flex text-start items-start">
//           <p className="text-[14px] font-[400] leading-[24px]">
//             2023 Funiro. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
"use client"
import Link from "next/link";

import React, { useEffect, useState } from "react";

const Footer = () => {
  const [sub, setsub] = useState<boolean>(false);
  console.log(sub);

  useEffect(() => {
    if (sub == true) {
      alert("Send Your Email");
    }
  }, [sub]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <footer className="bg-[#FFFFFF] px-6 py-8 md:px-16 xl:px-24 border-2">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 xl:gap-12 ">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Furniro.</h2>
          <p className="text-gray-500">
            400 University Drive Suite 200 Coral Gables,
            <br />
            FL 33134 USA
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-500 mb-4">Links</h3>
          <ul className="md:space-y-2 lg:space-y-5">
            <li>
              <Link href="home" className="text-gray-700 hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-gray-700 hover:text-black">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 hover:text-black">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 hover:text-black">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-semibold text-gray-500 mb-4">Help</h3>
          <ul className="md:space-y-2 lg:space-y-5">
            <li>
              <Link href="404/Payment Options/4" className="text-gray-700 hover:text-black">
                Payment Options
              </Link>
            </li>
            <li>
              <Link href="404/Returns/5" className="text-gray-700 hover:text-black">
                Returns
              </Link>
            </li>
            <li>
              <Link href="404/Privacy Policies/6" className="text-gray-700 hover:text-black">
                Privacy Policies
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className=" lg:-ml-20">
          <h3 className="text-lg font-semibold text-gray-500 mb-4">
            Newsletter
          </h3>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2  "
          >
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 lg:w-[100%] "
            />
            <button
              type="submit"
              className="bg-black  text-white px-4 py-2 rounded hover:bg-gray-800 lg:w-[27%] lg:text-xs lg:font-bold lg:px-1 "
              onClick={() => {
                setsub(!sub);
              }}
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-300 pt-4 text-center text-gray-500">
        <p>2023 Furniro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;