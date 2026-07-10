import { useState } from "react";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
  FiChevronDown,
} from "react-icons/fi";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  return (
    <>
      {/* Top Banner */}
      {isBannerVisible && (
        <div className="bg-black text-white py-2 px-4 flex items-center justify-center relative text-sm">
          <p className="font-light text-center">
            Sign up and get 20% off to your first order.{" "}
            <a
              href="/signup"
              className="underline font-medium hover:text-gray-300 transition-colors ml-1"
            >
              Sign Up Now
            </a>
          </p>
          <button
            onClick={() => setIsBannerVisible(false)}
            className="absolute right-4 md:right-8 text-white hover:text-gray-300 transition-colors"
            aria-label="Close banner"
          >
            <FiX className="text-lg" />
          </button>
        </div>
      )}

      {/* Main Navbar */}
      <nav className="bg-white sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20 gap-4 lg:gap-8">
            {/* Mobile Menu Button & Logo */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-black text-2xl md:hidden"
              >
                {isMobileMenuOpen ? <FiX /> : <FiMenu />}
              </button>
              <a
                href="/"
                className="text-2xl md:text-3xl font-black text-black uppercase tracking-tighter"
              >
                SHOP.CO
              </a>
            </div>

            {/* Desktop Menu */}
            <ul
              className="hidden md:flex items-center gap-8"
              style={{ gap: "2rem" }}
            >
              <li className="relative group">
                {/* O'ZGARTIRILGAN QISM: button o'rniga 'a' tegi qo'yildi va href="/category" berildi */}
                <a
                  href="/category"
                  className="flex items-center gap-1 text-black hover:text-gray-600 font-normal transition"
                >
                  Shop
                  <FiChevronDown className="text-sm" />
                </a>
              </li>
              <li>
                <a
                  href="/on-sale"
                  className="text-black hover:text-gray-600 font-normal transition whitespace-nowrap"
                >
                  On Sale
                </a>
              </li>
              <li>
                <a
                  href="/new-arrivals"
                  className="text-black hover:text-gray-600 font-normal transition whitespace-nowrap"
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="/brands"
                  className="text-black hover:text-gray-600 font-normal transition"
                >
                  Brands
                </a>
              </li>
            </ul>

            {/* Search Bar (Desktop) */}
            <div className="hidden md:flex flex-1 relative max-w-lg lg:max-w-2xl mx-auto">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-11 pr-4 py-2.5 bg-[#F0F0F0] rounded-full focus:outline-none focus:ring-1 focus:ring-gray-300 transition text-sm text-black placeholder-gray-500"
              />
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4 text-black">
              <button className="hover:text-gray-600 transition md:hidden">
                <FiSearch className="text-xl md:text-2xl" />
              </button>
              <button className="hover:text-gray-600 transition">
                <FiShoppingCart className="text-xl md:text-2xl" />
              </button>
              <button className="hover:text-gray-600 transition">
                <FiUser className="text-xl md:text-2xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 absolute w-full left-0 shadow-lg">
            <ul className="px-4 py-4 space-y-4">
              <li>
                {/* O'ZGARTIRILGAN QISM: Mobil menyudagi Shop ham 'a' tegiga o'zgartirildi */}
                <a
                  href="/category"
                  className="flex items-center gap-1 text-black hover:text-gray-600 font-medium w-full text-left"
                >
                  Shop
                  <FiChevronDown className="text-sm" />
                </a>
              </li>
              <li>
                <a
                  href="/on-sale"
                  className="block text-black hover:text-gray-600 font-medium"
                >
                  On Sale
                </a>
              </li>
              <li>
                <a
                  href="/new-arrivals"
                  className="block text-black hover:text-gray-600 font-medium"
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="/brands"
                  className="block text-black hover:text-gray-600 font-medium"
                >
                  Brands
                </a>
              </li>
            </ul>
            <div className="px-4 pb-4">
              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full pl-11 pr-4 py-3 bg-[#F0F0F0] rounded-full focus:outline-none focus:ring-1 focus:ring-gray-300 transition text-sm text-black"
                />
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
