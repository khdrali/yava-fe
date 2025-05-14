"use client";

import Image from "next/image";
import { FC, useState } from "react";

const HeroSection: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: ["WELCOME", "TO YAVA"],
      description: "Healthy CAN be delicious.",
      subDescription: "At YAVA, we celebrate food that brings health, joy and freedom.",
      images: {
        product1: "/heroimage/Product Container (1).png",
      }
    },
    {
      title: ["DISCOVER", "OUR PRODUCTS"],
      description: "Natural & Nutritious.",
      subDescription: "Experience the perfect blend of taste and health in every bite.",
      images: {
        product1: "/heroimage/Healthy Food (1).png",
      }
    },
    {
      title: ["EXPLORE", "THE TASTE"],
      description: "Premium Quality Ingredients.",
      subDescription: "Each bite is crafted with care using only the finest natural ingredients.",
      images: {
        product1: "/heroimage/Petani Lokal (1).png",
      }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-orange-500 to-amber-400 relative">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-1 py-10 gap-10 h-full">
        {/* LEFT SIDE TEXT */}
        <div className="md:w-1/2 text-center md:text-left order-2 md:order-1 ">
          <div className="transition-all duration-500">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white">
              {slides[currentSlide].title[0]}
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              {slides[currentSlide].title[1]}
            </h1>
            <p className="font-normal text-lg text-white mb-7">
              {slides[currentSlide].description}
            </p>
            <p className="text-white text-lg mb-8">
              {slides[currentSlide].subDescription}
            </p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition duration-300 text-lg">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="md:w-1/2 relative h-[400px] md:h-[800px] w-full order-1 md:order-2 flex items-center justify-center">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.images.product1}
                alt={`Slide ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

     {/* Slide Navigation */}
<div className="absolute bottom-10 right-6 md:bottom-24 md:right-20 z-20 flex gap-4 items-center bg-white/90 px-4 py-2 rounded-lg shadow-md">
  {/* Dot Indicator - Sekarang Warna Merah & di sebelah kiri tombol */}
  <div className="flex gap-2 items-center mr-2">
    {slides.map((_, index) => (
      <div
        key={index}
        onClick={() => setCurrentSlide(index)}
        className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
          currentSlide === index ? 'bg-red-600' : 'bg-red-600/30'
        }`}
      />
    ))}
  </div>

  <button 
    onClick={prevSlide}
    className="bg-white p-2 rounded-md hover:bg-gray-100 transition border border-gray-200"
    aria-label="Previous slide"
  >
    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
  <button 
    onClick={nextSlide}
    className="bg-white p-2 rounded-md hover:bg-gray-100 transition border border-gray-200"
    aria-label="Next slide"
  >
    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
</div>
    </section>
  );
};

export default HeroSection;