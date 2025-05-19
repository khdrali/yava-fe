// src/app/product-detail/[id]/page.tsx
import React from "react";
import ProductDetailNavbar from "../../components3/productdetail/ProductDetailNavbar"; // New Navbar
import Footer from "../../components3/Footer";
import GranolaProduct from "../../components3/productdetail/GranolaProduct";
import RecommendationSection from "../../components3/RecommendationSection";

const availableProducts = ["1", "2", "3", "4"];

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; 

  if (!availableProducts.includes(id)) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500">Produk Tidak Ditemukan</h1>
          <p className="mt-2 text-gray-600">Produk dengan ID <strong>{id}</strong> belum tersedia.</p>
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
      <ProductDetailNavbar />
      <main className="bg-[#F9F5F0] min-h-screen">
        {/* Main Product Detail */}
        <GranolaProduct productId={id} />

        {/* Recommendation Section */}
        <RecommendationSection currentProductId={id} />
      </main>
      <Footer />
    </>
  );
}