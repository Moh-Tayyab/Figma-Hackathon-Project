import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'


const SubHero = () => {
  return (
    <section>
    {/* Banner Section */}
<div className="relative">
    <Image src="/shop/shop.png" alt="Shop Banner" width={1440} height={316} />
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
    <Image
        src="/logo1.png"
        alt="Logo"
        width={50}
        height={32}
      />
      <h1 className="text-black1 text-[48px] font-medium leading-[72px] font-poppins hover:scale-110">
       Shop
      </h1>
      <ul className="flex items-center space-x-2 mt-4">
        <Link href={'/'}  className="text-black1 text-2xl hover:cursor-pointer hover:scale-110">Home</Link >
        <IoIosArrowForward className="w-4 h-4 " />
        <Link href= {'/contact'} className="text-black1 text-2xl hover:cursor-pointer hover:scale-110">Shop</Link >
      </ul>
    </div>
  </div>
</section>
  )
}

export default SubHero
