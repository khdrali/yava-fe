"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const articles = [
  {
    id: 1,
    title: "Stable Blood Sugar for Health & Energy",
    subtitle: "While Breastfeeding",
    date: "17 January 2025",
    image: "/articleimage/IMG 1.png",
    isFeatured: true
  },
  {
    id: 2,
    title: "Positive Thinking for a Healthier Heart",
    subtitle: "Mindset Matters for Cardiovascular Health",
    date: "10 February 2025",
    image: "/articleimage/IMG 2.png",
    isFeatured: true
  },
  {
    id: 3,
    title: "Normal Blood Sugar: Why It Matters",
    subtitle: "Maintaining Balance for Long-Term Health",
    date: "5 March 2025",
    image: "/articleimage/IMG 3.png",
    isFeatured: true
  },
  {
    id: 4,
    image: "/articleimage/News Card 3.png"
  },
  {
    id: 5,
    image: "/articleimage/News Card 4.png"
  },
  {
    id: 6,
    image: "/articleimage/News Card 2.png"
  }
];

export default function ArticleGallery() {
  const featuredArticles = articles.filter(article => article.isFeatured);
  const regularArticles = articles.filter(article => !article.isFeatured);
  const [currentSlide, setCurrentSlide] = useState(0);

  const router=useRouter();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredArticles.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredArticles.length - 1 : prev - 1));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Title Section */}
      <div className="text-center mb-6">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wide font-wildworlds">
          <span style={{ color: 'black' }}>HAPPY</span>{' '}
          <span className="text-gradient-orange-red">FOOD NOTES</span>
        </h1>
      </div>

      {/* Featured Article Slider */}
      <div className="relative w-full rounded-xl overflow-hidden shadow-lg mb-8">
        <div className="relative w-full aspect-[16/9] max-h-[60vh]">
          <Image
            src={featuredArticles[currentSlide].image}
            alt="Featured article"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 80vw"
          />
          
          {/* Text Overlay - Styled like the reference image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-6">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
                {featuredArticles[currentSlide].title}
              </h2>
              {featuredArticles[currentSlide].subtitle && (
                <p className="text-xl opacity-90">
                  {featuredArticles[currentSlide].subtitle}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Buttons - Styled like the reference image */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-10">
          {/* Date Display */}
          <div className="bg-white/90 px-4 py-2 rounded-lg shadow-md">
            <p className="text-black text-sm font-medium">
              <span className="text-orange-500 font-bold">Yava</span> • {featuredArticles[currentSlide].date}
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="bg-white/90 hover:bg-white text-black p-2 rounded-lg shadow-md transition-all"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="bg-white/90 hover:bg-white text-black p-2 rounded-lg shadow-md transition-all"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Regular Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {regularArticles.map((article) => (
          <div key={article.id} className="group rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative w-full aspect-[4/3] max-h-[180px]">
              <Image
                src={article.image}
                alt="Article image"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="text-center">
        <div
          onClick={() => router.push("/articles")}
          className="inline-block bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
        >
          See More
        </div>
      </div>
    </div>
  );
}