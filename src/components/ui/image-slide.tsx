"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface ImageSlidesProps {
  images: string[];
}

export const ImageSlides: React.FC<ImageSlidesProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1 === images.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Autoplay every 5 seconds
    return () => clearInterval(interval); // Clean up on unmount
  }, [currentSlide]);

  return (
    <div id="carouselExampleIndicators" className="relative w-full">
      {/* Carousel indicators */}
      <div className="absolute bottom-0 left-0 right-0 z-[2] mx-auto mb-4 shadow-lg rounded-lg flex list-none justify-center p-0">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent  bg-clip-padding p-0 -indent-[999px] ${
              currentSlide === index ? "opacity-100" : "opacity-50"
            } transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)]`}
            aria-current={currentSlide === index}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel items */}
      <div className="relative w-full overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative ${
              currentSlide === index ? "flex" : "hidden"
            } transition-transform duration-[600ms] ease-in-out justify-center items-center`}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              className="block w-[372px] h-[486px] object-cover "
              width={372} // Ensure you set width
              height={486} // Ensure you set height
              style={{ maxHeight: "600px" }}
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-1/2 left-0 z-10">
        <button
          onClick={prevSlide}
          className="text-white p-2"
        >
          
        </button>
      </div>

      <div className="absolute top-1/2 right-0 z-10">
        <button
          onClick={nextSlide}
          className=""
        >

        </button>
      </div>
    </div>
  );
};
