import Link from 'next/link'
import React from 'react'

const Pagination = () => {
  return (
	<>
{/*Buttons */}
<div className=" text-center flex-row space-x-4 py-10 w-auto">
<Link href={`/shop`}>
  <button className="bg-[#FAF3EA] text-black hover:text-white hover:bg-primary py-2 px-4 rounded-lg text-xl">
    1
  </button>
  </Link>
<Link href={'/page2'}>
  <button className="bg-[#FAF3EA] text-black hover:text-white hover:bg-primary py-2 px-4 rounded-lg text-xl">
    2
  </button>
</Link>
<Link href={'/page3'}>
  <button className="bg-[#FAF3EA] text-black hover:text-white hover:bg-primary py-2 px-4 rounded-lg text-xl">
    3
  </button>
</Link>
<Link href = {"/shop"}>
  <button className="bg-[#FAF3EA] text-black hover:text-white hover:bg-primary py-2 px-4 rounded-lg text-xl">
    Next
  </button>
  </Link>
</div>
</>
  )
}

export default Pagination
