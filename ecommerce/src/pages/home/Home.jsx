import { Link } from "react-router-dom";
import { useRef } from "react";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Home() {
  const swiperRef = useRef(null);

  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      verified: true,
      text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      id: 2,
      name: "Alex K.",
      rating: 5,
      verified: true,
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      id: 3,
      name: "James L.",
      rating: 5,
      verified: true,
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
    {
      id: 4,
      name: "Mooen",
      rating: 5,
      verified: true,
      text: "Shop.co has completely transformed my wardrobe. The attention to detail and quality of their products is outstanding. I highly recommend them to anyone looking for stylish clothing.",
    },
  ];

  const products = [
    {
      id: 1,
      name: "T-shirt with Tape Details",
      price: 120,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
    },
    {
      id: 2,
      name: "Skinny Fit Jeans",
      price: 240,
      oldPrice: 260,
      rating: 3.5,
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80",
    },
    {
      id: 3,
      name: "Checkered Shirt",
      price: 180,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80",
    },
    {
      id: 4,
      name: "Sleeve Striped T-shirt",
      price: 130,
      oldPrice: 160,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&q=80",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#F2F0F1] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-0 md:gap-8 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center space-y-5 md:space-y-8 pt-10 pb-2 md:py-20 relative z-10 w-full">
              <h1 className="text-[36px] sm:text-[44px] md:text-5xl lg:text-[64px] font-black leading-[1] md:leading-[1.05] tracking-tight text-black uppercase">
                FIND CLOTHES
                <br className="hidden sm:block" /> THAT MATCHES
                <br className="hidden sm:block" /> YOUR STYLE
              </h1>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-[545px]">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <button className="bg-black text-white px-12 md:px-14 py-4 rounded-full font-medium hover:bg-gray-800 transition w-full md:w-[210px] text-base">
                Shop Now
              </button>

              {/* Stats - Fully Responsive matching the mobile image */}
              <div className="flex flex-wrap justify-center md:justify-start items-center w-full pt-4 md:pt-6 gap-y-4">
                <div className="flex flex-col items-center md:items-start w-[48%] md:w-auto border-r border-gray-300 md:pr-8">
                  <h3 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-none mb-1 text-black">
                    200+
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm">
                    International Brands
                  </p>
                </div>
                <div className="flex flex-col items-center md:items-start w-[48%] md:w-auto md:border-r md:border-gray-300 pl-4 md:px-8">
                  <h3 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-none mb-1 text-black">
                    2,000+
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm">
                    High-Quality Products
                  </p>
                </div>
                <div className="flex flex-col items-center md:items-start w-full md:w-auto mt-2 md:mt-0 md:pl-8">
                  <h3 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-none mb-1 text-black">
                    30,000+
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm">
                    Happy Customers
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image & Stars */}
            <div className="relative flex items-end justify-center w-full h-[350px] sm:h-[450px] md:h-[600px] lg:h-[663px] mt-4 md:mt-0">
              <img
                src="/imgs/herofoto.jpg"
                alt="Fashion Models"
                className="object-cover object-top w-full h-full md:object-contain"
              />
              {/* Stars */}
              <svg
                className="absolute top-8 right-4 md:top-24 md:right-12 w-12 md:w-[76px] h-12 md:h-[76px] z-20"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28 0L31.8152 24.1848L56 28L31.8152 31.8152L28 56L24.1848 31.8152L0 28L24.1848 24.1848L28 0Z"
                  fill="black"
                />
              </svg>
              <svg
                className="absolute top-[40%] left-6 md:top-[55%] md:left-8 w-8 md:w-14 h-8 md:h-14 z-20"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28 0L31.8152 24.1848L56 28L31.8152 31.8152L28 56L24.1848 31.8152L0 28L24.1848 24.1848L28 0Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="bg-black py-8 md:py-10">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-10">
            <img
              src="/imgs/versace.svg"
              alt="Versace"
              className="h-5 md:h-8 w-auto brightness-0 invert"
            />
            <img
              src="/imgs/zara-logo.svg"
              alt="Zara"
              className="h-5 md:h-8 w-auto brightness-0 invert"
            />
            <img
              src="/imgs/gucci.svg"
              alt="Gucci"
              className="h-5 md:h-8 w-auto brightness-0 invert"
            />
            <img
              src="/imgs/prada.svg"
              alt="Prada"
              className="h-5 md:h-8 w-auto brightness-0 invert"
            />
            <img
              src="/imgs/calvinklein.svg"
              alt="Calvin Klein"
              className="h-5 md:h-8 w-auto brightness-0 invert"
            />
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
        <h2 className="text-[32px] md:text-[48px] font-black text-center mb-8 md:mb-14 uppercase">
          NEW ARRIVALS
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mb-8 md:mb-10">
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="group cursor-pointer block"
            >
              <div className="bg-[#F0EEED] rounded-[14px] md:rounded-[20px] overflow-hidden mb-3 md:mb-4 aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="font-bold text-sm md:text-xl mb-1 md:mb-2 line-clamp-1">
                {product.name}
              </h3>
              <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                <div className="flex gap-0.5 md:gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`w-3.5 h-3.5 md:w-4 md:h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-xs md:text-sm text-gray-600">
                  {product.rating}/5
                </span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 flex-wrap">
                <span className="text-lg md:text-2xl font-bold">
                  ${product.price}
                </span>
                {product.oldPrice && (
                  <>
                    <span className="text-sm md:text-xl text-gray-400 line-through">
                      ${product.oldPrice}
                    </span>
                    <span className="bg-[#FF33331A] text-[#FF3333] px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-medium">
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
            </Link>
          ))}
        </div>
        <div className="text-center border-b border-[#0000001A] pb-10 md:pb-16">
          <button className="border border-[#0000001A] rounded-full font-medium hover:bg-black hover:text-white transition w-full md:w-[218px] py-3 md:py-4 text-sm md:text-base">
            View All
          </button>
        </div>
      </section>

      {/* Top Selling */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16 pt-2 md:pt-16">
        <h2 className="text-[32px] md:text-[48px] font-black text-center mb-8 md:mb-14 uppercase">
          TOP SELLING
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mb-8 md:mb-10">
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="group cursor-pointer block"
            >
              <div className="bg-[#F0EEED] rounded-[14px] md:rounded-[20px] overflow-hidden mb-3 md:mb-4 aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="font-bold text-sm md:text-xl mb-1 md:mb-2 line-clamp-1">
                {product.name}
              </h3>
              <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                <div className="flex gap-0.5 md:gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`w-3.5 h-3.5 md:w-4 md:h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
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
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <button className="border border-[#0000001A] rounded-full font-medium hover:bg-black hover:text-white transition w-full md:w-[218px] py-3 md:py-4 text-sm md:text-base">
            View All
          </button>
        </div>
      </section>

      {/* Browse by Style */}
      {/* Browse by Style */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-16">
        <div className="bg-[#F0F0F0] rounded-[20px] md:rounded-[40px] p-6 md:p-16 lg:p-[70px]">
          <h2 className="text-[32px] md:text-[48px] font-black text-center mb-8 md:mb-16 uppercase leading-tight md:max-w-none max-w-[250px] mx-auto">
            BROWSE BY DRESS STYLE
          </h2>

          <div className="flex flex-col gap-4 md:gap-5">
            {/* Row 1 - Flex column on mobile, row on desktop */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-5">
              {/* Casual */}
              <div className="relative bg-white rounded-[20px] overflow-hidden h-[190px] md:h-[289px] flex-1 group cursor-pointer w-full">
                <h3 className="absolute top-4 left-6 md:top-6 md:left-8 text-2xl md:text-4xl font-bold z-10">
                  Casual
                </h3>
                <img
                  src="/imgs/casual.svg"
                  alt="Casual"
                  className="absolute right-0 top-0 w-auto h-full object-cover object-right group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Formal */}
              <div className="relative bg-white rounded-[20px] overflow-hidden h-[190px] md:h-[289px] md:flex-[2] group cursor-pointer w-full">
                <h3 className="absolute top-4 left-6 md:top-6 md:left-8 text-2xl md:text-4xl font-bold z-10">
                  Formal
                </h3>
                <img
                  src="/imgs/formal.svg"
                  alt="Formal"
                  className="absolute right-0 top-0 w-auto md:w-full h-full object-cover object-right group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>

            {/* Row 2 - Flex column on mobile, row on desktop */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-5">
              {/* Party */}
              <div className="relative bg-white rounded-[20px] overflow-hidden h-[190px] md:h-[289px] md:flex-[2] group cursor-pointer w-full">
                <h3 className="absolute top-4 left-6 md:top-6 md:left-8 text-2xl md:text-4xl font-bold z-10">
                  Party
                </h3>
                <img
                  src="/imgs/party.svg"
                  alt="Party"
                  className="absolute right-0 top-0 w-auto md:w-full h-full object-cover object-right group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Gym */}
              <div className="relative bg-white rounded-[20px] overflow-hidden h-[190px] md:h-[289px] flex-1 group cursor-pointer w-full">
                <h3 className="absolute top-4 left-6 md:top-6 md:left-8 text-2xl md:text-4xl font-bold z-10">
                  Gym
                </h3>
                <img
                  src="/imgs/gym.svg"
                  alt="Gym"
                  className="absolute right-0 top-0 w-auto h-full object-cover object-right group-hover:scale-105 transition duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:pt-12 lg:pb-36">
        {/* Header and navigation arrows are grouped together to match mobile view */}
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <h2 className="text-[32px] md:text-[48px] font-black leading-[1.1] uppercase">
            OUR HAPPY
            <br className="md:hidden" /> CUSTOMERS
          </h2>
          <div className="flex gap-2 md:gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-gray-100 rounded-full transition"
              aria-label="Previous"
            >
              <FiChevronLeft className="text-xl md:text-2xl" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-gray-100 rounded-full transition"
              aria-label="Next"
            >
              <FiChevronRight className="text-xl md:text-2xl" />
            </button>
          </div>
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          className="pb-2"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="border border-[#0000001A] rounded-[20px] p-6 h-full min-h-[220px] md:h-[240px] flex flex-col">
                <div className="flex gap-1.5 mb-3 md:mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="w-4 h-4 md:w-[18px] md:h-[18px] fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 mb-2 md:mb-3">
                  <h4 className="font-bold text-base md:text-xl">
                    {review.name}
                  </h4>
                  {review.verified && (
                    <div className="bg-green-500 rounded-full p-0.5 shrink-0">
                      <svg
                        className="w-3 md:w-3.5 h-3 md:h-3.5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base flex-1">
                  "{review.text}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}

export default Home;
