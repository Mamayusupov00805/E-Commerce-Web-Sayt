import React, { useState } from "react";
import {
  FiSliders,
  FiChevronRight,
  FiCheck,
  FiChevronUp,
  FiChevronDown,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";

const productsData = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
    image: "/imgs/image8.svg",
  },
  {
    id: 2,
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
    image: "/imgs/image8.svg",
  },
  {
    id: 3,
    name: "Black Striped T-shirt",
    price: 120,
    oldPrice: 150,
    discount: "-30%",
    rating: 5.0,
    image: "/imgs/image9.svg",
  },
  {
    id: 4,
    name: "Skinny Fit Jeans",
    price: 240,
    oldPrice: 260,
    discount: "-20%",
    rating: 3.5,
    image: "/imgs/image8.svg",
  },
  {
    id: 5,
    name: "Checkered Shirt",
    price: 180,
    rating: 4.5,
    image: "/imgs/image9.svg",
  },
  {
    id: 6,
    name: "Sleeve Striped T-shirt",
    price: 130,
    oldPrice: 160,
    discount: "-30%",
    rating: 4.5,
    image: "/imgs/image8.svg",
  },
  {
    id: 7,
    name: "Vertical Striped Shirt",
    price: 212,
    oldPrice: 232,
    discount: "-20%",
    rating: 5.0,
    image: "/imgs/image9.svg",
  },
  {
    id: 8,
    name: "Courage Graphic T-shirt",
    price: 145,
    rating: 4.0,
    image: "/imgs/image8.svg",
  },
  {
    id: 9,
    name: "Loose Fit Bermuda Shorts",
    price: 80,
    rating: 3.0,
    image: "/imgs/image8.svg",
  },
];

const colors = [
  "#00C12B",
  "#F50606",
  "#F5DD06",
  "#F57906",
  "#06CAF5",
  "#063AF5",
  "#7D06F5",
  "#F506A4",
  "#FFFFFF",
  "#000000",
];
const sizes = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3X-Large",
  "4X-Large",
];
const categoriesList = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];
const dressStyles = ["Casual", "Formal", "Party", "Gym"];

function Category() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeColor, setActiveColor] = useState("#063AF5");
  const [activeSize, setActiveSize] = useState("Large");
  const [activeStyle, setActiveStyle] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const [price, setPrice] = useState(200);

  const [openFilters, setOpenFilters] = useState({
    price: true,
    colors: true,
    size: true,
    style: true,
    categories: true,
  });

  const toggleFilter = (filterName) => {
    setOpenFilters((prev) => ({ ...prev, [filterName]: !prev[filterName] }));
  };

  const getPaginationNumbers = () => {
    let pages = [];
    if (totalPages <= 7) {
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      if (currentPage <= 4) pages = [1, 2, 3, 4, 5, "...", totalPages];
      else if (currentPage >= totalPages - 3)
        pages = [
          1,
          "...",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ];
      else
        pages = [
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        ];
    }
    return pages;
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    return (
      <div className="flex text-yellow-400 text-base">
        {Array.from({ length: 5 }, (_, i) => {
          if (i < fullStars) return <span key={i}>★</span>;
          if (i === fullStars && hasHalf)
            return (
              <span key={i} className="text-yellow-400">
                ★
              </span>
            );
          return (
            <span key={i} className="text-gray-200">
              ★
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen bg-white font-sans text-gray-900 antialiased py-8">
      {/* MAIN CONTAINER */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* 1. BREADCRUMBS (Home > Casual) */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <a href="#" className="hover:text-black transition">
            Home
          </a>
          <FiChevronRight className="text-xs text-gray-400" />
          <span className="text-black font-medium capitalize">Casual</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* SIDEBAR FILTERS */}
          <aside className="w-full lg:w-[295px] border border-gray-200 rounded-2xl p-5 h-fit bg-white">
            <div className="flex justify-between items-center mb-5 pb-5 border-b border-gray-100">
              <h2 className="text-xl font-bold">Filters</h2>
              <FiSliders className="text-black text-xl cursor-pointer" />
            </div>

            {/* Categories */}
            <div className="mb-6 border-b border-gray-100 pb-6">
              <h3
                onClick={() => toggleFilter("categories")}
                className="font-bold text-base mb-4 flex justify-between items-center cursor-pointer select-none"
              >
                Categories
                <FiChevronUp
                  className={`transition-transform duration-200 text-gray-500 ${openFilters.categories ? "" : "rotate-180"}`}
                />
              </h3>
              {openFilters.categories && (
                <ul className="space-y-4 text-gray-500 text-sm font-normal">
                  {categoriesList.map((cat) => (
                    <li
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`flex justify-between items-center cursor-pointer transition-colors ${
                        activeCategory === cat
                          ? "text-black font-semibold"
                          : "hover:text-black"
                      }`}
                    >
                      {cat} <FiChevronRight className="text-gray-400 text-xs" />
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Price */}
            <div className="mb-6 border-b border-gray-100 pb-6">
              <h3
                onClick={() => toggleFilter("price")}
                className="font-bold text-base mb-4 flex justify-between items-center cursor-pointer select-none"
              >
                Price
                <FiChevronUp
                  className={`transition-transform duration-200 text-gray-500 ${openFilters.price ? "" : "rotate-180"}`}
                />
              </h3>
              {openFilters.price && (
                <>
                  <input
                    type="range"
                    min="50"
                    max="200"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full accent-black cursor-pointer h-1 bg-gray-200 rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-sm mt-2 font-semibold text-black">
                    <span>$50</span>
                    <span>${price}</span>
                  </div>
                </>
              )}
            </div>

            {/* Colors */}
            <div className="mb-6 border-b border-gray-100 pb-6">
              <h3
                onClick={() => toggleFilter("colors")}
                className="font-bold text-base mb-4 flex justify-between items-center cursor-pointer select-none"
              >
                Colors
                <FiChevronUp
                  className={`transition-transform duration-200 text-gray-500 ${openFilters.colors ? "" : "rotate-180"}`}
                />
              </h3>
              {openFilters.colors && (
                <div className="flex flex-wrap gap-2.5">
                  {colors.map((color, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveColor(color)}
                      className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center transition hover:scale-105 active:scale-95"
                      style={{ backgroundColor: color }}
                    >
                      {activeColor === color && (
                        <FiCheck
                          className={
                            color === "#FFFFFF" ? "text-black" : "text-white"
                          }
                        />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Size */}
            <div className="mb-6 border-b border-gray-100 pb-6">
              <h3
                onClick={() => toggleFilter("size")}
                className="font-bold text-base mb-4 flex justify-between items-center cursor-pointer select-none"
              >
                Size
                <FiChevronUp
                  className={`transition-transform duration-200 text-gray-500 ${openFilters.size ? "" : "rotate-180"}`}
                />
              </h3>
              {openFilters.size && (
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setActiveSize(size)}
                      className={`px-5 py-2.5 rounded-full text-xs font-medium transition ${
                        activeSize === size
                          ? "bg-black text-white"
                          : "bg-[#F0F0F0] text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dress Styles */}
            <div className="mb-6 pb-2">
              <h3
                onClick={() => toggleFilter("style")}
                className="font-bold text-base mb-4 flex justify-between items-center cursor-pointer select-none"
              >
                Dress Style
                <FiChevronUp
                  className={`transition-transform duration-200 text-gray-500 ${openFilters.style ? "" : "rotate-180"}`}
                />
              </h3>
              {openFilters.style && (
                <ul className="space-y-4 text-gray-500 text-sm font-normal">
                  {dressStyles.map((s) => (
                    <li
                      key={s}
                      onClick={() => setActiveStyle(s)}
                      className={`flex justify-between items-center cursor-pointer transition-colors ${
                        activeStyle === s
                          ? "text-black font-semibold"
                          : "hover:text-black"
                      }`}
                    >
                      {s} <FiChevronRight className="text-gray-400 text-xs" />
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <button className="w-full bg-black text-white py-4 rounded-full text-sm font-medium hover:bg-neutral-800 transition shadow-sm">
              Apply Filter
            </button>
          </aside>

          {/* MAIN PRODUCTS GRID SECTION */}
          <main className="flex-1">
            {/* PRODUCT GRID TOP ROW (Title & Sorting info) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <h1 className="text-2xl sm:text-3xl font-black text-black capitalize">
                Casual
              </h1>
              <div className="flex items-center justify-between sm:justify-end gap-4 text-xs sm:text-sm text-gray-500">
                <span>Showing 1-10 of 100 Products</span>
                <div className="flex items-center gap-1 cursor-pointer text-black font-medium">
                  Sort by:{" "}
                  <span className="text-black font-semibold">Most Popular</span>{" "}
                  <FiChevronDown />
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {productsData.map((p) => (
                <div key={p.id} className="group cursor-pointer">
                  {/* Image wrapper */}
                  <div className="bg-[#F0EEED] rounded-[20px] mb-3 aspect-[3/4] overflow-hidden flex items-center justify-center p-4">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 mix-blend-multiply"
                    />
                  </div>
                  {/* Name */}
                  <h3 className="font-bold text-base sm:text-lg text-black mb-1 line-clamp-1 group-hover:text-neutral-700">
                    {p.name}
                  </h3>
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-1.5">
                    {renderStars(p.rating)}
                    <span className="text-xs sm:text-sm text-black">
                      {p.rating}/<span className="text-gray-400">5</span>
                    </span>
                  </div>
                  {/* Price Row with Discount logic */}
                  <div className="flex items-center gap-2.5 font-bold text-xl sm:text-2xl text-black">
                    <span>${p.price}</span>
                    {p.oldPrice && (
                      <span className="text-gray-400 line-through text-lg sm:text-xl font-medium">
                        ${p.oldPrice}
                      </span>
                    )}
                    {p.discount && (
                      <span className="bg-red-50 text-[#FF3333] text-xs font-semibold px-3 py-1 rounded-full">
                        {p.discount}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* PAGINATION */}
            <div className="flex justify-between items-center border-t border-gray-100 mt-10 pt-5 text-sm font-medium">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed text-black"
              >
                <FiArrowLeft /> Previous
              </button>
              <div className="flex gap-0.5 sm:gap-1">
                {getPaginationNumbers().map((p, i) => (
                  <button
                    key={i}
                    onClick={() => typeof p === "number" && setCurrentPage(p)}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-xs sm:text-sm transition ${
                      currentPage === p
                        ? "bg-black/5 text-black font-semibold"
                        : typeof p === "number"
                          ? "text-gray-500 hover:bg-gray-50"
                          : "text-gray-400 cursor-default"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed text-black"
              >
                Next <FiArrowRight />
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Category;
