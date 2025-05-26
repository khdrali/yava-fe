"use client"; 

import React, { useState } from "react";
import Image from "next/image";
import useGlobalCategory from "../../../lib/globalState";
import Breadcrumb from "../../components1/Breadcrumb";

const categories = [
  { name: "All Products", image: "/icons/all-products.png" },
  { name: "Granola", image: "/icons/granola.png" },
  { name: "Biscuits", image: "/icons/biscuits.png" },
  { name: "Bar", image: "/icons/bar.png" },
  { name: "Popcorn", image: "/icons/popcorn.png" },
  { name: "Puffs", image: "/icons/puffs.png" },
  { name: "Cashews", image: "/icons/cashews.png" },
];

const HeroSectionPage = () => {
  const [, setCategory] = useGlobalCategory();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section style={{
      backgroundColor: "#FFFFFF",
      padding: "5rem 0 3rem",
      fontFamily: `'Poppins', sans-serif`,
      position: "relative",
      zIndex: 1,
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        textAlign: "center",
        padding: "0 1rem",
      }}>

        {/* Breadcrumb */}
        <Breadcrumb />

        {/* Heading */}
        <h1 style={{
          fontSize: "2.25rem",
          lineHeight: "2.5rem",
          marginBottom: "2rem",
          fontWeight: "bold",
          fontFamily: `'WildWords', cursive`,
        }}>
          <span style={{ color: "#4B1A1B" }}>DISCOVER</span>
          <br />
          <span
            style={{
              backgroundImage: "linear-gradient(90deg, #FE8301, #FEB519, #F31212)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: `'WildWords', cursive`,
            }}
          >
            YOUR PERFECT CRUNCH
          </span>
        </h1>

        {/* Search Bar */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: '80%',
            maxWidth: '600px',
            border: '1px solid #000',
            borderRadius: '20px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '10px',
            paddingRight: '10px',
            boxSizing: 'border-box',
            fontSize: '1rem',
            fontFamily: `'Poppins', sans-serif`,
            color: '#000',
          }}>
            {/* Input Text */}
            <input
              type="text"
              placeholder="Find your perfect crunch..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                background: 'transparent',
                fontSize: '1rem',
                fontFamily: `'Poppins', sans-serif`,
                color: '#000',
              }}
            />

            {/* Button Search Icon */}
            <button
              type="button"
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                marginLeft: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '35px',
                height: '35px',
              }}
              aria-label="Search"
            >
              <Image
                src="/icons/src.png"
                alt="Search"
                width={35}
                height={35}
                style={{ objectFit: 'contain' }}
              />
            </button>
          </div>
        </div>

        {/* Category Icons */}
        <div style={{ marginTop: "2rem" }}>
          <div style={{
            display: "flex",
            gap: "1.5rem",
            overflowX: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            paddingBottom: "0.5rem",
            justifyContent: "center",
          }}>
            {categories.map((categoryObj) => (
              <div
                key={categoryObj.name}
                onClick={() => {
                  setCategory(categoryObj.name);
                  setActiveCategory(categoryObj.name);
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  minWidth: "100px",
                  cursor: "pointer",
                  opacity: 1,
                  transition: "all 0.3s ease",
                }}
              >
                {/* Icon */}
                <div style={{
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "0.75rem",
                }}>
                  <Image
                    src={categoryObj.image}
                    alt={categoryObj.name}
                    width={70}
                    height={70}
                    style={{ objectFit: "contain" }}
                  />
                </div>

                {/* Text Style */}
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "18px",
                    lineHeight: "1.4",
                    letterSpacing: "0%",
                    color: "#333333",
                    fontWeight: activeCategory === categoryObj.name ? 700 : 500,
                    textAlign: "center",
                  }}
                >
                  {categoryObj.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionPage;