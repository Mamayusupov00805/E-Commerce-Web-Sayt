import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="relative bg-[#F0F0F0] mt-32 md:mt-40">
      {/* Qora Newsletter bloki - Footer'ning ustiga chiqib turishi uchun absolute */}
      <div className="absolute top-0 left-4 right-4 md:left-8 md:right-8 lg:left-16 lg:right-16 -translate-y-1/2 z-10">
        <div className="max-w-[1440px] mx-auto bg-black rounded-[20px] p-8 md:px-16 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 shadow-2xl">
          <h2 className="text-[32px] md:text-[40px] font-black text-white leading-[1.1] md:max-w-[551px] text-left uppercase">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className="flex flex-col gap-3.5 w-full md:max-w-[349px]">
            <div className="relative">
              <MdOutlineEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="pl-12 pr-4 py-3 md:py-3.5 rounded-full w-full outline-none text-sm md:text-base text-black placeholder-gray-500 bg-white focus:ring-2 focus:ring-gray-300 transition"
              />
            </div>
            <button className="bg-white text-black py-3 md:py-3.5 rounded-full font-medium hover:bg-gray-200 transition text-sm md:text-base w-full">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      {/* Asosiy kulrang Footer qismi */}
      <div className="pt-44 md:pt-[140px] pb-12 md:pb-20 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Yuqori qism: Ma'lumot va havolalar */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12 mb-12 md:mb-16">
          {/* Company Info (Mobil ekranda 2 ustunni to'liq egallaydi) */}
          <div className="col-span-2 lg:col-span-2 flex flex-col">
            <h2 className="text-[28px] md:text-[33px] font-black mb-4 md:mb-6 uppercase">
              SHOP.CO
            </h2>
            <p className="text-[#00000099] mb-6 md:mb-9 leading-relaxed text-sm md:text-base max-w-sm">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center bg-white border border-[#0000001A] rounded-full text-black hover:bg-black hover:text-white transition"
                aria-label="Twitter"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center bg-black border border-[#0000001A] rounded-full text-white hover:bg-gray-800 transition"
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center bg-white border border-[#0000001A] rounded-full text-black hover:bg-black hover:text-white transition"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center bg-white border border-[#0000001A] rounded-full text-black hover:bg-black hover:text-white transition"
                aria-label="Github"
              >
                <FaGithub size={16} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h3 className="font-medium text-sm md:text-base tracking-[3px] mb-4 md:mb-6 uppercase text-black">
              COMPANY
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a
                  href="/about"
                  className="text-[#00000099] hover:text-black transition text-sm md:text-base"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/features"
                  className="text-[#00000099] hover:text-black transition text-sm md:text-base"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/works"
                  className="text-[#00000099] hover:text-black transition text-sm md:text-base"
                >
                  Works
                </a>
              </li>
              <li>
                <a
                  href="/career"
                  className="text-[#00000099] hover:text-black transition text-sm md:text-base"
                >
                  Career
                </a>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div className="col-span-1">
            <h3 className="font-medium text-sm md:text-base tracking-[3px] mb-4 md:mb-6 uppercase text-black">
              HELP
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a
                  href="/support"
                  className="text-[#00000099] hover:text-black transition text-sm md:text-base"
                >
                  Customer Support
                </a>
              </li>
              <li>
                <a
                  href="/delivery"
                  className="text-[#00000099] hover:text-black transition text-sm md:text-base"
                >
                  Delivery Details
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-[#00000099] hover:text-black transition text-sm md:text-base"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-[#00000099] hover:text-black transition text-sm md:text-base"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* FAQ Links */}
          <div className="col-span-1">
            <h3 className="font-medium text-sm md:text-base tracking-[3px] mb-4 md:mb-6 uppercase text-black">
              FAQ
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a
                  href="/account"
                  className="text-[#00000099] hover:text-black transition text-sm md:text-base"
                >
                  Account
                </a>
              </li>
              <li>
                <a
                  href="/manage-deliveries"
                  className="text-[#00000099] hover:text-black transition text-sm md:text-base"
                >
                  Manage Deliveries
                </a>
              </li>
              <li>
                <a
                  href="/orders"
                  className="text-[#00000099] hover:text-black transition text-sm md:text-base"
                >
                  Orders
                </a>
              </li>
              <li>
                <a
                  href="/payment"
                  className="text-[#00000099] hover:text-black transition text-sm md:text-base"
                >
                  Payments
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="col-span-1">
            <h3 className="font-medium text-sm md:text-base tracking-[3px] mb-4 md:mb-6 uppercase text-black">
              RESOURCES
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li>
                <a
                  href="/ebooks"
                  className="text-[#00000099] hover:text-black transition text-sm md:text-base"
                >
                  Free eBooks
                </a>
              </li>
              <li>
                <a
                  href="/tutorial"
                  className="text-[#00000099] hover:text-black transition text-sm md:text-base"
                >
                  Development Tutorial
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-[#00000099] hover:text-black transition text-sm md:text-base"
                >
                  How to - Blog
                </a>
              </li>
              <li>
                <a
                  href="/playlist"
                  className="text-[#00000099] hover:text-black transition text-sm md:text-base"
                >
                  Youtube Playlist
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payments */}
        <div className="pt-6 md:pt-8 border-t border-[#0000001A] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#00000099] text-xs md:text-sm text-center md:text-left order-1 md:order-1">
            Shop.co © 2000-2023, All Rights Reserved
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 order-2 md:order-2">
            <div className="bg-white px-2.5 py-1.5 md:py-2 rounded-[5px] border border-[#D6DCE5] flex items-center justify-center">
              <img
                src="/imgs/Visa.svg"
                alt="Visa"
                className="h-[14px] md:h-[18px] w-auto object-contain"
              />
            </div>
            <div className="bg-white px-2.5 py-1.5 md:py-2 rounded-[5px] border border-[#D6DCE5] flex items-center justify-center">
              <img
                src="/imgs/Mastercard.svg"
                alt="Mastercard"
                className="h-[14px] md:h-[18px] w-auto object-contain"
              />
            </div>
            <div className="bg-white px-2.5 py-1.5 md:py-2 rounded-[5px] border border-[#D6DCE5] flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                alt="PayPal"
                className="h-[14px] md:h-[18px] w-auto object-contain"
              />
            </div>
            <div className="bg-white px-2.5 py-1.5 md:py-2 rounded-[5px] border border-[#D6DCE5] flex items-center justify-center">
              <img
                src="/imgs/apple.svg"
                alt="Apple Pay"
                className="h-[14px] md:h-[18px] w-auto object-contain"
              />
            </div>
            <div className="bg-white px-2.5 py-1.5 md:py-2 rounded-[5px] border border-[#D6DCE5] flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg"
                alt="Google Pay"
                className="h-[14px] md:h-[18px] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
