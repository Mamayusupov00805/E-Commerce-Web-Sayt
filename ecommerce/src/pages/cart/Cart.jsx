import React, { useState } from "react";
import {
  FiChevronRight,
  FiTrash2,
  FiMinus,
  FiPlus,
  FiArrowRight,
  FiTag,
} from "react-icons/fi";

const initialCartItems = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    size: "Large",
    color: "White",
    price: 145,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=500&q=80",
  },
  {
    id: 2,
    name: "Checkered Shirt",
    size: "Medium",
    color: "Red",
    price: 180,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80",
  },
  {
    id: 3,
    name: "Skinny Fit Jeans",
    size: "Large",
    color: "Blue",
    price: 240,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80",
  },
];

function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id, delta) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  // Order Summary hisob-kitoblari
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const discount = Math.round(subtotal * 0.2); // 20% chegirma misol uchun
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="w-full min-h-screen bg-white font-sans text-gray-900 antialiased py-8">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-black transition">
            Home
          </a>
          <FiChevronRight className="text-xs text-gray-400" />
          <span className="text-black font-medium capitalize">Cart</span>
        </div>

        {/* Sahifa sarlavhasi */}
        <h1 className="text-3xl md:text-[40px] font-black uppercase mb-6 md:mb-8">
          Your Cart
        </h1>

        <div className="flex flex-col lg:flex-row gap-5 md:gap-8">
          {/* Chap qism - Cart Mahsulotlari */}
          <div className="flex-1 border border-[#0000001A] rounded-[20px] p-4 md:p-6 h-fit">
            {cartItems.map((item, index) => (
              <div key={item.id}>
                <div className="flex gap-4 items-center">
                  {/* Mahsulot rasmi */}
                  <div className="w-[100px] h-[100px] md:w-[124px] md:h-[124px] bg-[#F0EEED] rounded-xl flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover mix-blend-multiply"
                    />
                  </div>

                  {/* Mahsulot ma'lumotlari */}
                  <div className="flex flex-col flex-1 h-full justify-between py-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-base md:text-xl text-black line-clamp-1 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-xs md:text-sm text-black">
                          Size:{" "}
                          <span className="text-gray-500">{item.size}</span>
                        </p>
                        <p className="text-xs md:text-sm text-black">
                          Color:{" "}
                          <span className="text-gray-500">{item.color}</span>
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-[#FF3333] hover:text-red-700 transition p-1"
                      >
                        <FiTrash2 className="text-xl md:text-2xl" />
                      </button>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <span className="font-bold text-xl md:text-2xl text-black">
                        ${item.price}
                      </span>
                      {/* Quantity boshqaruvi */}
                      <div className="flex items-center justify-between bg-[#F0F0F0] rounded-full px-4 py-2 w-[100px] md:w-[120px]">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="text-lg md:text-xl text-black hover:text-gray-600 transition"
                        >
                          <FiMinus />
                        </button>
                        <span className="font-medium text-sm md:text-base">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="text-lg md:text-xl text-black hover:text-gray-600 transition"
                        >
                          <FiPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Oxirgi elementdan tashqari hammaga chiziq qoshamiz */}
                {index !== cartItems.length - 1 && (
                  <hr className="my-4 md:my-6 border-[#0000001A]" />
                )}
              </div>
            ))}
          </div>

          {/* O'ng qism - Order Summary */}
          <div className="w-full lg:w-[400px] border border-[#0000001A] rounded-[20px] p-5 md:p-6 h-fit">
            <h2 className="text-xl md:text-2xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="flex flex-col gap-4 mb-6">
              <div className="flex justify-between items-center text-base md:text-xl">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-bold text-black">${subtotal}</span>
              </div>
              <div className="flex justify-between items-center text-base md:text-xl">
                <span className="text-gray-500">Discount (-20%)</span>
                <span className="font-bold text-[#FF3333]">-${discount}</span>
              </div>
              <div className="flex justify-between items-center text-base md:text-xl">
                <span className="text-gray-500">Delivery Fee</span>
                <span className="font-bold text-black">${deliveryFee}</span>
              </div>
            </div>

            <hr className="border-[#0000001A] mb-6" />

            <div className="flex justify-between items-center mb-6">
              <span className="text-base md:text-xl text-black">Total</span>
              <span className="font-bold text-xl md:text-2xl text-black">
                ${total}
              </span>
            </div>

            {/* Promo Code Input */}
            <div className="flex gap-3 mb-6">
              <div className="relative flex-1">
                <FiTag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="w-full bg-[#F0F0F0] text-black placeholder-gray-500 rounded-full py-3 pl-12 pr-4 outline-none focus:ring-1 focus:ring-gray-400 transition"
                />
              </div>
              <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition">
                Apply
              </button>
            </div>

            {/* Checkout Button */}
            <button className="w-full bg-black text-white py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition">
              Go to Checkout <FiArrowRight className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
