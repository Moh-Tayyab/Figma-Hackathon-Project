import React from 'react';
//import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { TbPhoneFilled, TbClockHour4Filled } from "react-icons/tb";

const Contact = () => {
  return (
    <section className="text-[#000000] font-poppins overflow-hidden">
      <div className="container px-5 py-24 mx-auto sm:w-1/2">
        <div className="flex flex-wrap -m-12">

          {/* Contact Information */}
          <div className="flex flex-col items-center p-12 gap-12 md:w-1/2">
            <div className="flex gap-4 items-start w-full md:w-[48%]">
              <FaLocationDot className="text-2xl text-primary" />
              <div>
                <h2 className="font-bold font-poppins text-primary">Address</h2>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>
            <div className="flex gap-4 items-start w-full md:w-[48%]">
              <TbPhoneFilled className="text-2xl text-primary" />
              <div>
                <h2 className="font-bold font-poppins text-primary">Phone</h2>
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
              </div>
            </div>
            <div className="flex gap-4 items-start w-full md:w-[48%]">
              <TbClockHour4Filled className="text-2xl text-primary" />
              <div>
                <h2 className="font-bold font-poppins text-primary">Working Time</h2>
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

           {/* Contact Form */}
           <div className="mt-8 px-4 flex justify-center sm:justify-center sm:items-center sm:text-center sm:mx-auto sm:pl-12 md:w-1/2">
            <form className="flex flex-col gap-4 max-w-md sm:px-4 sm:py-6 sm:border sm:rounded-lg sm:shadow-md">
              <label htmlFor="name" className="text-sm sm:text-base">Name</label>
              <input
                id="name"
                type="text"
                className="border-[#9F9F9F] border-2 p-2 rounded-md w-full sm:p-3"
                placeholder="Abc"
              />
               <label htmlFor="email" className="text-sm sm:text-base">Email</label>
              <input
                id="email"
                type="email"
                className="border-[#9F9F9F] border-2 p-2 rounded-md w-full sm:p-3"
                placeholder="Abc@def.com"
              />
              <label htmlFor="subject" className="text-sm sm:text-base">Subject</label>
              <input
                id="subject"
                type="text"
                className="border-[#9F9F9F] border-2 p-2 rounded-md w-full sm:p-3"
                placeholder="This is Optional"
              />
              <label htmlFor="message" className="text-sm sm:text-base">Message</label>
              <textarea
                id="message"
                className="border-[#9F9F9F] border-2 p-4 rounded-md w-full h-24 sm:p-3 sm:h-30"
                placeholder="Hi! I’d like to ask about..."
              />
              <button className="bg-[#B88E2F] text-white p-3 w-28 rounded-md hover:scale-110 sm:p-4 sm:w-full">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
