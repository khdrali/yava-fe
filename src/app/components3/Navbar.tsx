"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCategory } from "../context/CategoryContext"; 

const Navbar = () => {
  const { activeCategory, setActiveCategory } = useCategory(); 
  const categories = ["All Products", "Granola", "Biscuits", "Bar", "Popcorn", "Puffs", "Cashews"];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) setIsMenuOpen(false);
      if (isDropdownOpen) setIsDropdownOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen, isDropdownOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Logo */}
          <div className="flex-1 flex justify-center md:justify-start">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Logo YAVA"
                width={60}
                height={60}
                className="h-auto w-14 sm:w-16 transition-all duration-300"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 sm:space-x-6 md:space-x-8 text-xs sm:text-sm font-semibold text-black">
            <a href="#" className="hover:text-red-500">Lontar Sugar</a>

            {/* Our Foods Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="hover:text-red-500 focus:outline-none font-semibold"
              >
                Our Foods ▾
              </button>
              {isDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%', 
                    left: '0', 
                    background: 'white',
                    border: 'none',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    borderRadius: '4px',
                    zIndex: '1000',
                    minWidth: '150px',
                    display: 'flex',
                    flexDirection: 'column', 
                  }}
                >
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        setIsDropdownOpen(false);
                      }}
                      style={{
                        padding: '8px 12px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '14px',
                        color: activeCategory === cat ? 'red' : '#333',
                        backgroundColor: 'transparent',
                        border: 'none',
                        outline: 'none', 
                        whiteSpace: 'nowrap', 
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Static Links */}
            <a href="#" className="hover:text-red-500">Ingredients</a>
            <a href="#" className="hover:text-red-500">Company</a>
            <a href="#" className="hover:text-red-500">YAVAKataMereka</a>
            <Link href="/news-event" className="hover:text-red-500">
              News & Event
            </Link>
            <div className="space-x-1 font-semibold">
              <span>ID</span>
              <span className="text-red-500">EN</span>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden max-h-[80vh] overflow-y-auto pb-2 pt-1 bg-white border-t text-xs sm:text-sm font-semibold">
            <ul className="space-y-2 text-black">
              <li><a href="#" className="block py-1.5 hover:text-red-500">Lontar Sugar</a></li>

              <li>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full text-left font-semibold flex justify-between items-center"
                >
                  <span>Our Foods</span>
                  <span>{isDropdownOpen ? "▼" : "▶"}</span>
                </button>
                {isDropdownOpen && (
                  <ul className="pl-3 mt-1 space-y-1 border-l border-gray-300">
                    {categories.map((cat) => (
                      <li key={cat}>
                        <button
                          onClick={() => {
                            setActiveCategory(cat);
                            setIsDropdownOpen(false);
                            setIsMenuOpen(false);
                          }}
                          className={`block w-full text-left py-1 hover:text-red-500 ${
                            activeCategory === cat ? 'text-red-500' : ''
                          }`}
                        >
                          {cat}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li><a href="#" className="block py-1.5 hover:text-red-500">Ingredients</a></li>
              <li><a href="#" className="block py-1.5 hover:text-red-500">Company</a></li>
              <li><a href="#" className="block py-1.5 hover:text-red-500">YAVAKataMereka</a></li>
              <li>
                <Link href="/news-event" className="block py-1.5 hover:text-red-500">
                  News & Event
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;