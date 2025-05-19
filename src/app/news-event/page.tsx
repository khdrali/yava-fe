"use client";

import React from "react";
import Navbar from "../components3/Navbar";
import Footer from "../components3/Footer";
import NewsEventPage from "./NewsEventPage";
import YouMayLike from "./YouMayLike";
import { CategoryProvider } from "../context/CategoryContext";

export default function NewsEvent() {
  return (
    <div className="bg-white min-h-screen">
      <CategoryProvider>
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <NewsEventPage />
          <YouMayLike/>
        </main>
        <Footer />
      </CategoryProvider>
    </div>
  );
}