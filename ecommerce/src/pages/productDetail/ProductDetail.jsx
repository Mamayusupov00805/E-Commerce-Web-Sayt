import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiStar,
  FiMinus,
  FiPlus,
  FiCheck,
  FiMoreHorizontal,
  FiSliders,
  FiChevronDown,
} from "react-icons/fi";

function ProductDetail() {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(2); // "Large" default selected

  const images = [
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
    "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&q=80",
  ];
  const [mainImage, setMainImage] = useState(images[0]);

  const colors = ["#4F4631", "#314F4A", "#31344F"];
  const sizes = ["Small", "Medium", "Large", "X-Large"];

  const reviews = [
    {
      id: 1,
      name: "Samantha D.",
      rating: 5,
      date: "August 14, 2023",
      text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    },
    {
      id: 2,
      name: "Alex M.",
      rating: 5,
      date: "August 15, 2023",
      text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UX/UI designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    },
    {
      id: 3,
      name: "Ethan R.",
      rating: 4,
      date: "August 16, 2023",
      text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    },
    {
      id: 4,
      name: "Olivia P.",
      rating: 5,
      date: "August 17, 2023",
      text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    },
    {
      id: 5,
      name: "Liam K.",
      rating: 4,
      date: "August 18, 2023",
      text: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    },
    {
      id: 6,
      name: "Ava H.",
      rating: 5,
      date: "August 19, 2023",
      text: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this t-shirt a conversation starter.",
    },
  ];

  const relatedProducts = [
    {
      id: 1,
      name: "Polo with Contrast Trims",
      price: 212,
      oldPrice: 242,
      rating: 4.0,
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80",
    },
    {
      id: 2,
      name: "Gradient Graphic T-shirt",
      price: 145,
      rating: 3.5,
      image:
        "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=500&q=80",
    },
    {
      id: 3,
      name: "Polo with Tipping Details",
      price: 180,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&q=80",
    },
    {
      id: 4,
      name: "Black Striped T-shirt",
      price: 120,
      oldPrice: 150,
      rating: 5.0,
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80",
    },
  ];
  const handleAddToCart = () => {
    // Bu yerda aslida Cart stateni yoki Redux/Zustand ni yangilashingiz mumkin
    // Va keyin sahifani almashtiramiz:
    navigate("/cart");
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-gray-500 text-sm mb-8">
        <a href="/" className="hover:text-black">
          Home
        </a>
        <span>&gt;</span>
        <a href="/shop" className="hover:text-black">
          Shop
        </a>
        <span>&gt;</span>
        <a href="/men" className="hover:text-black">
          Men
        </a>
        <span>&gt;</span>
        <span className="text-black">T-shirts</span>
      </div>

      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 mb-16 md:mb-20">
        {/* Left: Images */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="flex md:flex-col gap-3.5 md:w-[152px] overflow-x-auto md:overflow-visible">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setMainImage(img)}
                className={`flex-shrink-0 w-24 h-24 md:w-full md:h-[167px] rounded-[20px] overflow-hidden border-2 transition ${
                  mainImage === img ? "border-black" : "border-transparent"
                }`}
              >
                <img
                  src={img}
                  alt="Thumbnail"
                  className="w-full h-full object-cover bg-[#F0EEED]"
                />
              </button>
            ))}
          </div>
          <div className="flex-1 rounded-[20px] overflow-hidden bg-[#F0EEED] h-[350px] md:h-[530px]">
            <img
              src={mainImage}
              alt="Main Product"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Product Details */}
        <div>
          <h1 className="text-2xl md:text-[40px] font-black uppercase leading-tight md:leading-none mb-3.5 md:mb-4">
            ONE LIFE GRAPHIC T-SHIRT
          </h1>

          <div className="flex items-center gap-2 mb-3.5 md:mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={`text-lg md:text-xl ${i < 4 ? "fill-yellow-400 text-yellow-400" : "fill-yellow-400/50 text-yellow-400/50"}`}
                />
              ))}
            </div>
            <span className="text-sm md:text-base text-gray-600">4.5/5</span>
          </div>

          <div className="flex items-center gap-3 mb-5 md:mb-6">
            <span className="text-2xl md:text-[32px] font-bold">$260</span>
            <span className="text-2xl md:text-[32px] font-bold text-gray-400 line-through">
              $300
            </span>
            <span className="bg-[#FF33331A] text-[#FF3333] px-3.5 py-1.5 rounded-full text-sm md:text-base font-medium">
              -40%
            </span>
          </div>

          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6 border-b border-[#0000001A] pb-6">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>

          {/* Select Colors */}
          <div className="mb-6 border-b border-[#0000001A] pb-6">
            <p className="text-gray-500 mb-3.5 md:mb-4">Select Colors</p>
            <div className="flex gap-4">
              {colors.map((color, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedColor(idx)}
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition"
                  style={{ backgroundColor: color }}
                >
                  {selectedColor === idx && (
                    <FiCheck className="text-white text-lg" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Choose Size */}
          <div className="mb-6 border-b border-[#0000001A] pb-6">
            <p className="text-gray-500 mb-3.5 md:mb-4">Choose Size</p>
            <div className="flex flex-wrap gap-3">
              {sizes.map((size, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSize(idx)}
                  className={`px-5 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base transition ${
                    selectedSize === idx
                      ? "bg-black text-white"
                      : "bg-[#F0F0F0] text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex gap-4 md:gap-5 mt-6">
            <div className="flex items-center justify-between bg-[#F0F0F0] rounded-full px-5 py-3.5 md:py-4 w-[110px] md:w-[170px]">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-xl md:text-2xl hover:text-black transition text-gray-600"
              >
                <FiMinus />
              </button>
              <span className="font-medium text-sm md:text-base">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="text-xl md:text-2xl hover:text-black transition text-gray-600"
              >
                <FiPlus />
              </button>
            </div>
            <button
              onClick={handleAddToCart} // O'ZGARISH: onClick event qo'shildi
              className="flex-1 bg-black text-white rounded-full font-medium text-sm md:text-base hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-between md:justify-around border-b border-[#0000001A] mb-8 md:mb-10 text-base md:text-xl text-gray-500">
        <button className="pb-5 w-1/3 text-center">Product Details</button>
        <button className="pb-5 w-1/3 text-center text-black border-b-2 border-black font-medium">
          Rating & Reviews
        </button>
        <button className="pb-5 w-1/3 text-center">FAQs</button>
      </div>

      {/* Reviews Section */}
      <div className="mb-16 md:mb-20">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h3 className="text-xl md:text-2xl font-bold">
            All Reviews{" "}
            <span className="text-sm md:text-base text-gray-500 font-normal ml-1">
              (451)
            </span>
          </h3>
          <div className="flex items-center gap-2.5 md:gap-4">
            <button className="w-10 h-10 md:w-12 md:h-12 bg-[#F0F0F0] rounded-full flex items-center justify-center hover:bg-gray-200 transition">
              <FiSliders className="text-lg md:text-xl" />
            </button>
            <button className="hidden md:flex items-center gap-4 bg-[#F0F0F0] rounded-full px-5 py-3 hover:bg-gray-200 transition text-base font-medium">
              Latest
              <FiChevronDown />
            </button>
            <button className="bg-black text-white rounded-full px-5 py-3 md:px-7 md:py-4 hover:bg-gray-800 transition text-xs md:text-base font-medium">
              Write a Review
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-8 md:mb-9">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border border-[#0000001A] rounded-[20px] p-6 md:p-8"
            >
              <div className="flex justify-between items-start mb-3 md:mb-4">
                <div className="flex gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`text-lg md:text-xl ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <button className="text-gray-400 hover:text-black">
                  <FiMoreHorizontal className="text-xl md:text-2xl" />
                </button>
              </div>
              <div className="flex items-center gap-1.5 mb-3">
                <h4 className="font-bold text-base md:text-xl">
                  {review.name}
                </h4>
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base mb-4 md:mb-6">
                "{review.text}"
              </p>
              <p className="text-gray-500 font-medium text-sm md:text-base">
                Posted on {review.date}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="border border-[#0000001A] rounded-full px-10 md:px-12 py-3.5 md:py-4 hover:bg-black hover:text-white transition font-medium text-sm md:text-base">
            Load More Reviews
          </button>
        </div>
      </div>

      {/* You Might Also Like */}
      <div>
        <h2 className="text-3xl md:text-[48px] font-black text-center mb-10 md:mb-14 uppercase">
          YOU MIGHT ALSO LIKE
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {relatedProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="bg-[#F0EEED] rounded-[13px] md:rounded-[20px] overflow-hidden mb-3 md:mb-4 aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="font-bold text-sm md:text-xl mb-1 md:mb-2 line-clamp-1">
                {product.name}
              </h3>
              <div className="flex items-center gap-1.5 md:gap-2 mb-1 md:mb-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      size={14}
                      className={`md:w-4 md:h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-xs md:text-sm text-gray-600">
                  {product.rating}/5
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <span className="text-lg md:text-2xl font-bold">
                  ${product.price}
                </span>
                {product.oldPrice && (
                  <>
                    <span className="text-sm md:text-xl text-gray-400 line-through">
                      ${product.oldPrice}
                    </span>
                    <span className="bg-[#FF33331A] text-[#FF3333] px-1.5 py-0.5 md:px-3.5 md:py-1.5 rounded-full text-[10px] md:text-xs font-medium">
                      -
                      {Math.round(
                        ((product.oldPrice - product.price) /
                          product.oldPrice) *
                          100,
                      )}
                      %
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
