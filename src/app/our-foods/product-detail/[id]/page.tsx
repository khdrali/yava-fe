"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const availableProducts = ["3"];

const ProductDetail = () => {
  const params = useParams();
  const id = params.id as string | undefined;

  if (!id || !availableProducts.includes(id)) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500">Produk Tidak Ditemukan</h1>
          <p className="mt-2 text-gray-600">
            Produk dengan ID <strong>{id ?? "tidak valid"}</strong> belum tersedia.
          </p>
          <button
            onClick={() => window.history.back()}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Kembali
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <ProductDetails productId={id} />
      <RecommendationSection currentProductId={id} />
    </>
  );
};

// Komponen Detail Produk
const ProductDetails = ({ productId }: { productId: string | undefined }) => {
  const [selectedSize, setSelectedSize] = useState<"400g" | "200g" | "90g">("400g");
  const [isFlipped, setIsFlipped] = useState(false);

  // Data produk
  const productData = {
    name: "CHOCOLATE VANILLA",
    description:
      "When you start your day with chocolate from Sulawesi, vanilla, creamy cashew nuts (sugar palm sugar to taste) and crunchy granola clusters only from YAVA – you won’t be able to resist SmileAllDay!",
    sizes: ["400g", "200g", "90g"] as const,
    sizeIcons: {
      "400g": "/icons/400g.png",
      "200g": "/icons/200g.png",
      "90g": "/icons/90g.png",
    },
    images: {
      front: {
        "400g": "/product/depan400gr.png",
        "200g": "/product/depan200gr.png",
        "90g": "/product/depan90gr.png",
      },
      back: {
        "400g": "/product/belakang400g.png",
        "200g": "/product/belakang200g.png",
        "90g": "/product/belakang90g.png",
      },
    },
    icons: ["/icons/bre.png", "/icons/snk.png"],
    ingredients: [
      "Cashews",
      "Cocoa from Sulawesi",
      "Lontar Sugar",
      "Source of Dietary Fiber",
      "Contains 53mg Inulin/serving",
    ],
    shareIcons: [
      "/icons/share-twitter.png",
      "/icons/share-facebook.png",
      "/icons/gmail.png",
    ],
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section className="w-full overflow-hidden md:min-h-[100vh]">
      <div className="container mx-auto px-4 max-w-screen-xl bg-[#F9F5F0] py-16">
        {/* Breadcrumb Langsung */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-600 mb-6">
          <ol className="flex items-center space-x-2">
            <li>
              <a href="/" className="hover:text-red-500">
                Home
              </a>
            </li>
            <li>/</li>
            <li>Our Foods</li>
          </ol>
        </nav>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2
              style={{
                fontFamily: "'WildWords', cursive",
                fontSize: "1.1rem",
                fontWeight: "bold",
                color: "#4B1A1B",
              }}
            >
              GRANOLA
            </h2>

            {/* Judul Untuk CHOCOLATE & VANILLA */}
            <div className="mt-4">
              <h1
                style={{
                  fontFamily: "'WildWords', cursive",
                  fontSize: "2rem",
                  fontWeight: "bold",
                  backgroundImage: "linear-gradient(90deg, #F31212, #FB8201, #FEB519)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "block",
                }}
              >
                CHOCOLATE
              </h1>
              <h2
                style={{
                  fontFamily: "'WildWords', cursive",
                  fontSize: "2rem",
                  fontWeight: "bold",
                  backgroundImage: "linear-gradient(90deg, #F31212, #FB8201, #FEB519)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "block",
                }}
              >
                VANILLA
              </h2>
            </div>

            {/* Pilihan Ukuran Product*/}
            <div className="flex gap-3 mt-6">
              {["400g", "200g", "90g"].map((size) => (
                <button
                  key={size}
                  onClick={() => {
                    setSelectedSize(size as "400g" | "200g" | "90g");
                    setIsFlipped(false);
                  }}
                  className={`bg-[#FDF5E6] border-2 ${
                    selectedSize === size ? "border-[#F31212]" : "border-[#333333]"
                  } text-[#333333] text-xs px-3 py-1 rounded-full transition duration-300`}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Deskripsi */}
            <p
              className="mt-6 text-sm leading-relaxed text-[#333333] pl-8"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "14px",
                lineHeight: "140%",
                letterSpacing: "0%",
              }}
            >
              {productData.description}
            </p>

            {/* Ikon Nutrisi */}
            <div className="flex gap-3 mt-6 items-center">
              {productData.icons.map((icon, index) => (
                <img
                  key={index}
                  src={icon}
                  alt={`icon-${index}`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              ))}
            </div>

            {/* Tombol Beli */}
            <button className="mt-6 bg-[#F31212] hover:bg-red-700 text-white px-6 py-2 text-sm rounded-full shadow-md transition duration-300">
              BUY NOW
            </button>
          </div>

          {/* Kolom Tengah */}
          <div className="md:col-span-4 flex flex-col items-center justify-center relative">
            {/* Gambar Produk */}
            <div className="relative">
              <Image
                src={
                  isFlipped
                    ? productData.images.back[selectedSize]
                    : productData.images.front[selectedSize]
                }
                alt="Granola Product"
                width={360}
                height={360}
                className="object-contain transition-transform duration-700 ease-in-out"
              />
            </div>

            {/* Tombol Untuk Putar Gambar */}
            <div className="mt-4">
              <button onClick={handleFlip}>
                <Image src="/icons/putar.png" alt="Flip Icon" width={30} height={30} />
              </button>
            </div>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold uppercase mb-2 text-[#4B1A1B]">INGREDIENTS</h3>

            {/* List Bahan */}
            <div className="flex flex-wrap gap-2 mb-4">
              {productData.ingredients.map((ingredient, index) => (
                <span
                  key={index}
                  className="bg-[#FDF5E6] border-2 border-[#333333] text-[#333333] text-xs px-3 py-1 rounded-full"
                >
                  {ingredient}
                </span>
              ))}
            </div>

            {/* Deskripsi bahan */}
            <p
              className="text-xs leading-relaxed text-[#333333]"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "14px",
                lineHeight: "140%",
                letterSpacing: "0%",
              }}
            >
              Oats (35.5%), Palm Sugar (17.8%), Cashew Nuts (12.8%), Brown Rice (10.9%), Coconut Oil (10.1%), Mung Beans (6.0%), Sorghum (3.2%), Cocoa Powder (2.1%), Sea Salt (1.2%), Cocoa Mass (0.3%), Sodium Hydrogen Carbonate Raising Agent (Baking Soda), Natural Vanilla Flavor, Vanilla Paste (0.01%). Contains allergens, see bold ingredients list. Manufactured on equipment that also processes sesame and peanuts.
              <br />
              <br />
              No Preservatives, No Synthetic Colors, No Flavor Enhancers.
            </p>

            {/* Bagikan ke Media Sosial */}
            <div className="flex items-center gap-3 mt-4">
              <span
                className="text-xs text-[#333333]"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14px",
                  lineHeight: "140%",
                  letterSpacing: "0%",
                }}
              >
                Share:
              </span>
              {productData.shareIcons.map((icon, index) => (
                <a key={index} href="#">
                  <Image
                    src={icon}
                    alt={`share-${index}`}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Komponen Rekomendasi Produk
const RecommendationSection = ({ currentProductId }: { currentProductId?: string }) => {
  interface Product {
    id: number;
    name: string;
    category: string;
    image: string;
  }

  const allProducts: Product[] = [
    { id: 1, name: 'GO`NOLA Chocolate Vanilla', category: 'Granola', image: '/product/GranolaVanilla.png' },
    { id: 2, name: 'Granola Puffs Chocolate Vanila', category: 'Granola', image: '/product/GranolaPuffts.png' },
    { id: 3, name: 'Granola Chocolate Vanilla', category: 'Granola', image: '/product/GranolaChocolate.png' },
    { id: 4, name: 'Granola Chocolate Banana', category: 'Granola', image: '/product/GranolaCocolateBanana.png' },
    { id: 5, name: 'Granola Coconut Banana', category: 'Granola', image: '/product/GranolaCoconutBanana.png' },
  ];

  const filteredProducts = allProducts.filter(product => String(product.id) !== currentProductId);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleLeftClick = () => {
    if (containerRef.current) {
      const newScroll = Math.max(scrollPosition - 400, 0);
      setScrollPosition(newScroll);
      containerRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
    }
  };

  const handleRightClick = () => {
    if (containerRef.current) {
      const newScroll = scrollPosition + 400;
      setScrollPosition(newScroll);
      containerRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-8 w-full overflow-hidden sm:overflow-x-hidden">
      <div className="container mx-auto px-4 relative">

        {/* Judul Rekomendasi */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-1">
            <h2
              style={{
                fontFamily: "'WildWords', cursive",
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#4B1A1B",
                display: "block",
              }}
              className="text-xl sm:text-2xl"
            >
              OUR
            </h2>
            <h2
              style={{
                fontFamily: "'WildWords', cursive",
                fontSize: "2rem",
                fontWeight: "bold",
                backgroundImage: "linear-gradient(90deg, #FE8301, #FEB519, #F31212)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "block",
              }}
              className="text-xl sm:text-2xl"
            >
              RECOMMENDATION
            </h2>
          </div>
          <div className="flex gap-2">
            <button onClick={handleLeftClick} className="p-2">
              <Image src="/icons/kiri.png" alt="Previous" width={30} height={30} />
            </button>
            <button onClick={handleRightClick} className="p-2">
              <Image src="/icons/kanan.png" alt="Next" width={30} height={30} />
            </button>
          </div>
        </div>

        {/* Carousel Rekomendasi */}
        <div
          ref={containerRef}
          className="flex overflow-x-scroll scrollbar-hide whitespace-nowrap transition-transform duration-300"
          style={{ scrollBehavior: "smooth" }}
        >
          {filteredProducts.map((product) => (
            <Link href={`/product-detail/${product.id}`} key={product.id}>
              <div
                className="group relative bg-white rounded-lg overflow-hidden shadow-md mr-4 inline-block min-w-[240px]"
                style={{ width: "200px", height: "320px" }}
              >
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div className="absolute bottom-0 w-full h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                </div>
                <div className="relative w-full h-56 overflow-hidden rounded-t-lg z-10">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={240}
                    height={240}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="relative z-20 p-4 text-center">
                  <p
                    className="text-[#333333] group-hover:text-white transition-colors duration-300 font-medium"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "18px",
                      lineHeight: "140%",
                    }}
                  >
                    {product.name.split(' ')[0]}
                  </p>
                  <p
                    className="text-[#333333] group-hover:text-white transition-colors duration-300 font-medium"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "18px",
                      lineHeight: "140%",
                    }}
                  >
                    {product.name.split(' ').slice(1).join(' ')}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;