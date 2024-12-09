import Image from "next/image";
import SubHero from "@/components/SubHero";
import { AiFillDelete } from "react-icons/ai";

export default function Cart() {
  return (
    <>
      <SubHero />

    {/* Cart Container */}
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto flex flex-wrap items-center">
        {/* Left Section */}
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          {/* Product Details Section */}
          <div className="producDetails flex justify-around items-center p-4  h-[4rem] bg-[#F9F1E7]">
            <h2>Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Subtotal</h2>
          </div>
          <div className="flex flex-col gap-4 p-4">
            {/* Product Row */}
            <div className="flex justify-evenly items-center gap-4 mt-4">
              <Image
                src="/Group 146.png"
                width={50}
                height={50}
                alt="Asgaard sofa"
              />
              <p>Asgaard sofa</p>
              <p>Rs. 250,000.00</p>
            
              <input
                type="number"
                className="w-16 border rounded-md p-1"
                defaultValue={1}
              />
              <p>Rs. 250,000.00</p>
              <AiFillDelete className="w-6 h-6 text-primary"/>
            </div>

           
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-2/6 md:w-1/2 bg-[#F9F1E7] flex flex-col md:ml-auto w-[293px] h-[290px]  md:mt-0 items-center text-center justify-center mt-32">
            <h2 className="font-poppins text-[32px] leading-[48px] font-semibold  text-black pb-9">Cart Totals</h2>
            <p className="text-[#9F9F9F]">
              <span className="pb-4 text-[16px] leading-[36px] font-[500px] font-poppins text-black pr-12">Subtotal:</span> Rs. 250,000.00
            </p>
            <p className="text-[#B88E2F]">
              <span className="text-[16px] leading-[36px] font-[500px] font-poppins text-black pr-12">Total:</span> Rs. 250,000.00
            </p>
            <button className="mt-5 rounded-md border-gray-900 border-2 p-2 px-5">
              Check Out
            </button>
          </div>
      </div>
    </section>
      

      {/* Features Section */}
      <div className="mb-3 mt-10 flex justify-evenly items-center p-4 w-full bg-[#F9F1E7]">
        {[
          { imgSrc: "/Vector (1).png", title: "High Quality", desc: "Crafted from top materials" },
          { imgSrc: "/guarantee.png", title: "Warranty Protection", desc: "Over 2 years" },
          { imgSrc: "/vector.png", title: "Free Shipping", desc: "Order over 150 $" },
          { imgSrc: "/Vector (1).png", title: "24/7 Support", desc: "Dedicated support" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-row gap-3 items-start w-[20%] h-[230px] justify-center pt-20"
          >
            <Image
              src={item.imgSrc}
              width={40}
              height={40}
              alt={item.title}
            />
            <div>
              <h4 className="font-bold ">{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
