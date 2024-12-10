import Image from "next/image"
const Services = () => {
  return (
<section>
    
{/* Features Section */}
<div className="mt-8 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-[#F9F1E7] p-6 h-[250px] items-center justify-center ">

<div className="flex items-start gap-5">
          {/* Icon */}
          <Image
            src="/Group.png"
            alt="benefit 1"
            width={30}
            height={24}
          />
          {/* Text Section */}
          <div>
            <h2 className="font-[600] text-[#242424] font-popins text-[20px] leading-[37px]">
            High Quality
            </h2>
            <p className="text-[#898989] text-[16px] font-poppins leading-[30px] pt-2">
            crafted from top materials        
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          {/* Icon */}
          <Image
            src="/guarantee.png"
            alt="benefit 1"
            width={30}
            height={24}
          />
          {/* Text Section */}
          <div>
            <h2 className="font-[600] text-[#242424] font-popins text-[20px] leading-[37px]">
            Warranty Protection
            </h2>
            <p className="text-[#898989] text-[16px] font-poppins leading-[30px] pt-2">
            Over 2 years         
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          {/* Icon */}
          <Image
            src="/shiping.png"
            alt="benefit 1"
            width={30}
            height={24}
          />
          {/* Text Section */}
          <div>
            <h2 className="font-[600] text-[#242424] font-popins text-[20px] leading-[37px]">
              FREE SHIPPING
            </h2>
            <p className="text-[#898989] text-[16px] font-poppins leading-[30px] pt-2">
            Order over 150 $         
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          {/* Icon */}
          <Image
            src="/Vector (1).png"
            alt="benefit 1"
            width={30}
            height={24}
          />
          {/* Text Section */}
          <div>
            <h2 className="font-[600] text-[#242424] font-popins text-[20px] leading-[37px]">
            24 / 7 Support
            </h2>
            <p className="text-[#898989] text-[16px] font-poppins leading-[30px] pt-2">
            Dedicated support       
            </p>
          </div>
        </div>
      </div>
</section>
  )
}

export default Services
