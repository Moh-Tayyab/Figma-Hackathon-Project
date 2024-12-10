import Contact from "@/components/Contact";
import SubHero from "@/components/SubHero1";
import Services from '@/components/Services'
//import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <SubHero />

      {/* Introduction Section */}
      <div className="text-center mt-6 px-16">
        <h2 className="text-[36px] font-poppins leading-[54px]  font-semibold">Get In Touch With Us</h2>
        <p className="mt-3 text-[#9F9F9F] items-center font-poppins font-[400px] text-[16px] leading-[24px]">
          For more information about our product & services, please feel free to drop us<br/>
          an email. Our staff will always be there to help you out. Do not hesitate!
        </p>
      </div>

      {/* Contact Information and Contact Form */}
     <Contact />

      {/* Features Section */}
      <Services />
    </>
  );
}
