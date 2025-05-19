// src/app/components3/ProductCategories.tsx
import React from "react";
import { useCategory } from "../context/CategoryContext";

const ProductCategories = () => {
  const { activeCategory, setActiveCategory } = useCategory();

  const categories = ['All Products', 'Granola', 'Biscuits', 'Bar', 'Popcorn', 'Puffs', 'Cashews'];

  return (
    <section className="bg-white py-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-2 py-1 text-center rounded-md ${
                activeCategory === category
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;