import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Category from "./pages/category/Category";
import Cart from "./pages/cart/Cart"; // <-- 1. Cart komponentini chaqiramiz (Papka nomini o'zingizga moslaysiz)

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            {/* Asosiy sahifa */}
            <Route path="/" element={<Home />} />
            {/* Kategoriya (Shop) sahifasi */}
            <Route path="/category" element={<Category />} />
            {/* Mahsulot ichiga kirganda ochiladigan sahifa */}
            <Route path="/product/:id" element={<ProductDetail />} />
            {/* Cart (Savatcha) sahifasi */}
            <Route path="/cart" element={<Cart />} />{" "}
            {/* <-- 2. Cart yo'nalishini qo'shamiz */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
