'use client';

import { useState } from 'react';

export default function ContentImage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, src: '/contentimage/Highlight Video (1).png', alt: 'Slide 1' },
    { id: 2, src: '/contentimage/Highlight Video (2).png', alt: 'Slide 2' },
    { id: 3, src: '/contentimage/Highlight Video (3).png', alt: 'Slide 3' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Header Baris: Judul dan Tombol */}
      <div className="flex items-center justify-between mb-4">
        {/* Judul di Kiri Atas */}
        <div className="text-left">
          <p className="text-5xl font-wildworldslower lowercase tracking-wide">
            <span style={{ color: 'black' }}>against</span>{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(to right, rgb(255, 196, 0), rgb(255, 0, 0))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              video
            </span>
          </p>
        </div>

        {/* Tombol Navigasi di Kanan Atas */}
        <div className="flex space-x-2 z-10">
          <button
            onClick={prevSlide}
            className="bg-white bg-opacity-90 p-3 rounded-full shadow-lg hover:bg-gray-100 transition flex items-center justify-center"
            aria-label="Previous Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="bg-white bg-opacity-90 p-3 rounded-full shadow-lg hover:bg-gray-100 transition flex items-center justify-center"
            aria-label="Next Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel Image */}
      <div className="w-full h-[600px] bg-gray-200 overflow-hidden rounded-lg shadow-xl relative">
        <img
          src={slides[currentSlide].src}
          alt={slides[currentSlide].alt}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
        />
      </div>
    </div>
  );
}