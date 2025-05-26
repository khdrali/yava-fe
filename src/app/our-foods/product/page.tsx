"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import useGlobalCategory from "../../../lib/globalState";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
}

const ProductList = () => {
  const storeIcons = ["blibli", "lazada", "shopee", "tiktokshop", "tokopedia"];

  const products: Product[] = [
    { id: 1, name: 'GO`NOLA Chocolate Vanilla', category: 'Granola', image: '/product/GranolaVanilla.png' },
    { id: 2, name: 'Granola Puffs Chocolate Vanila', category: 'Granola', image: '/product/GranolaPuffts.png' },
    { id: 3, name: 'Granola Chocolate Vanilla', category: 'Granola', image: '/product/GranolaChocolate.png' },
    { id: 4, name: 'Granola Chocolate Banana', category: 'Granola', image: '/product/GranolaCocolateBanana.png' },
    { id: 5, name: 'Granola Coconut Banana', category: 'Granola', image: '/product/GranolaCoconutBanana.png' },
    { id: 6, name: 'Granola Rosella Cinnamon', category: 'Granola', image: '/product/GranolaRosella.png' },
    { id: 7, name: 'Granola Tropical Fruits', category: 'Granola', image: '/product/GranolaTropicalFruits.png' },
    { id: 8, name: 'Granola Chocolate Banana', category: 'Granola', image: '/product/GranolaPuffsChocolateVanila.png' },
    { id: 9, name: 'Popcorn Sea Salt Caramel', category: 'Popcorn', image: '/product/PopcornSeaSaltCaramel.png' },
    { id: 10, name: 'Popcorn Chocolate Peanut', category: 'Popcorn', image: '/product/PopcornChocolatePeanut.png' },
    { id: 11, name: 'Popcorn Cheeze Flavor', category: 'Popcorn', image: '/product/PopcornCheezeFlavor.png' },
    { id: 12, name: 'Krispi Puffs Caocao', category: 'Puffs', image: '/product/KrispiPuffsCaocao.png' },
    { id: 13, name: 'Krispi Sweet Cashews', category: 'Puffs', image: '/product/KrispiSweetCashews.png' },
    { id: 14, name: 'Krispi Sweet & Spicy Balado', category: 'Puffs', image: '/product/KrispiSweet&SpicyBalado.png' },
    { id: 15, name: 'Wild Harvested Cashews Caocao Cashews', category: 'Cashews', image: '/product/CaocaoCashews.png' },
    { id: 16, name: 'Wild Harvested Cashews Chlili Limes', category: 'Cashews', image: '/product/ChliliLimes.png' },
    { id: 17, name: 'Wild Harvested Cashews Roasted', category: 'Cashews', image: '/product/Roasted.png' },
    { id: 18, name: 'Wild Harvested Cashews Raw', category: 'Cashews', image: '/product/Raw.png' },
    { id: 19, name: 'Wild Harvested Cashews Roasted Pieces', category: 'Cashews', image: '/product/RoastedPieces.png' },
    { id: 20, name: 'Wild Harvested Cashews Sweet & Spicy', category: 'Cashews', image: '/product/Sweet&Spicy.png' },
 ];

  const [activeCategory] = useGlobalCategory();

  const groupedProducts = products.reduce((acc: Record<string, Product[]>, product) => {
    if (!acc[product.category]) acc[product.category] = [];
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  const renderProductCard = (product: Product) => {
    const isClickable = product.id === 3;
    const card = (
      <div
        key={product.id}
        className="group relative bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute bottom-0 w-full h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
        </div>
        <div className="relative w-full h-56 overflow-hidden rounded-t-lg z-10">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="relative z-20 p-4 text-center">
          <p
            className="text-[#333333] group-hover:text-white transition-colors duration-300 font-medium text-base"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 500,
              fontSize: "18px",
              lineHeight: "140%",
            }}
          >
            {product.name}
          </p>
        </div>
      </div>
    );
    return isClickable ? (
      <Link href={`/our-foods/product-detail/${product.id}`} key={product.id}>
        {card}
      </Link>
    ) : (
      card
    );
  };

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        {activeCategory === "All Products" && (
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 capitalize">
            All Products
          </h2>
        )}

        {activeCategory === "All Products" ? (
          <>
            {Object.keys(groupedProducts).map((category) => (
              <div key={category} className="mb-10">
                <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 capitalize">
                  {category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {groupedProducts[category]?.map(renderProductCard)}
                </div>
              </div>
            ))}
          </>
        ) : (
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900 capitalize">
              {activeCategory}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {groupedProducts[activeCategory]?.map(renderProductCard)}
            </div>
          </div>
        )}

        <div className="mt-10 text-center">
          <h2
            style={{
              fontFamily: "'WildWords', cursive",
              fontSize: "2.25rem",
              marginBottom: "2rem",
              fontWeight: "bold",
            }}
          >
            <span style={{ color: "#4B1A1B" }} className="block">
              AVAILABLE
            </span>
            <span
              style={{
                backgroundImage: "linear-gradient(90deg, #FE8301, #FEB519, #F31212)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "block",
              }}
            >
              IN YOUR FAVORITE STORE
            </span>
          </h2>
          <div className="flex justify-center gap-6 flex-wrap">
            {storeIcons.map((icon) => (
              <a
                key={icon}
                href={`https://${icon}.com`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={`/images/${icon}.png`} alt={icon} width={50} height={50} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;