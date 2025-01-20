import React from 'react';
import Image from 'next/image';

const FuniroFurniture = () => {
  return (

    
    <div className="p-4 bg-white  [@media(max-width:500px)]:-mt-7 mb-20">
       <h3 className="text-[16px] font-medium text-gray-600 text-center">
          Share your setup with
        </h3>
    <h1 className="text-center text-3xl font-bold mb-4 font-poppins text-gray-800 leading-10">
      #FuniroFurniture
    </h1>
    <Image
      src={"/last-image.png"}
      alt={""}
      width={1800}
      height={400}
      quality={100}
      className="w-full mt-9"
    />
  </div>

    // <section className="px-4 py-8">
    //   {/* Header Section */}
    //   <div className="text-center mb-8">
    //     <h3 className="text-lg font-medium text-gray-600">
    //       Share your setup with
    //     </h3>
    //     <h2 className="text-3xl font-bold text-gray-800 text-center">#FuniroFurniture</h2>
    //   </div>

      
    //    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-auto scroll-mx-14">
    //     <div className="col-span-2 row-span-2">
    //       <Image
    //         alt="Funiro Furniture"
    //         src="/funiro/1.png"
    //         width={451}
    //         height={312}
    //         className="object-cover w-full h-full  hover:scale-110"
    //       />
    //     </div>
    //     <div className="col-span-1 row-span-1">
    //       <Image
    //         alt="Funiro Furniture"
    //         src="/funiro/2.png"
    //         width={295}
    //         height={292}
    //         className="object-cover w-full h-full  hover:scale-110"
    //       />
    //     </div>

    //     <div className="col-span-1 row-span-2">
    //       <Image
    //         alt="Funiro Furniture"
    //         src="/funiro/3.png"
    //         width={290}
    //         height={348}
    //         className="object-cover w-full h-full  hover:scale-110"
    //       />
    //     </div>

    //     <div className="col-span-1 row-span-2">
    //       <Image
    //         alt="Funiro Furniture"
    //         src="/funiro/4.png"
    //         width={290}
    //         height={348}
    //         className="object-cover w-full h-full  hover:scale-110"
    //       />
    //     </div>

    //     <div className="col-span-2 row-span-2">
    //       <Image
    //         alt="Funiro Furniture"
    //         src="/funiro/5.png"
    //         width={425}
    //         height={433}
    //         className="object-cover w-full h-full  hover:scale-110"
    //       />
    //     </div>

    //     <div className="col-span-1 row-span-1">
    //       <Image
    //         alt="Funiro Furniture"
    //         src="/funiro/6.png"
    //         width={344}
    //         height={242}
    //         className="object-cover w-full h-full  hover:scale-110"
    //       />
    //     </div>

    //     <div className="col-span-1 row-span-1">
    //       <Image
    //         alt="Funiro Furniture"
    //         src="/funiro/7.png"
    //         width={178}
    //         height={242}
    //         className="object-cover w-full h-full  hover:scale-110"
    //       />
    //     </div>
    //     <div className="col-span-1 row-span-1">
    //       <Image
    //         alt="Funiro Furniture"
    //         src="/funiro/7.png"
    //         width={178}
    //         height={242}
    //         className="object-cover w-full h-full  hover:scale-110"
    //       />
    //     </div>
    //   </div> 
    // </section>
  );
};

export default FuniroFurniture;
