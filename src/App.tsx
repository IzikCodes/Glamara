import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Menu, X, User, Heart, ShoppingCart, Search, ArrowUp, MessageCircle } from "lucide-react";

import Home from "./pages/Home";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Show scroll-to-top after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setShowScroll(scrollTop > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const openWhatsApp = () => {
    window.open("https://wa.me/2348075005248", "_blank");
  };

  if (loading) return <Loader />;

  return (
    <>
    <div className="min-h-screen bg-gray-100 flex flex-col relative">
      {/* TOP BLUE HEADER */}
      <header className="bg-blue-600 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          {/* Email & Phone */}
          <div className="flex items-center justify-center divide-x divide-white w-full sm:w-auto">
            <span className="px-2 sm:px-3">glamara@gmail.com</span>
            <span className="px-2 sm:px-3">+234 807 500 5248</span>
          </div>

          {/* Address */}
          <div className="text-center sm:text-right">47 D-Line London UK</div>

          {/* Welcome */}
          <div className="font-medium text-center sm:text-right">
            Welcome to our store
          </div>
        </div>
      </header>

      {/* MAIN HEADER */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="/images/glamara.png"
              alt="GLAMARA"
              className="h-16 w-16 object-contain sm:h-20 sm:w-20"
            />
            <span className="text-lg sm:text-xl font-bold tracking-wide brand-gradient whitespace-nowrap">
              GLAMARA
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="transition-colors duration-200 hover:text-blue-600"
            >
              Home
            </button>

            <a
              href="#shop"
              className="transition-colors duration-200 hover:text-blue-600"
            >
              Shop
            </a>
            <a
              href="#about"
              className="transition-colors duration-200 hover:text-blue-600"
            >
              About
            </a>
            <a
              href="#services"
              className="transition-colors duration-200 hover:text-blue-600"
            >
              Services
            </a>

            <button
              onClick={() => document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" })}
              className="transition-colors duration-200 hover:text-blue-600"
            >
              Contact
            </button>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-3 sm:gap-5 flex-shrink-0 text-gray-700">
            <button className="transition-all duration-200 hover:text-blue-600 hover:scale-110">
              <Search size={20} />
            </button>
            <button className="transition-all duration-200 hover:text-blue-600 hover:scale-110">
              <User size={20} />
            </button>
            <button className="relative transition-all duration-200 hover:text-blue-600 hover:scale-110">
              <Heart size={20} />
              <span className="absolute -top-1 -right-2 bg-blue-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
            <button className="relative transition-all duration-200 hover:text-blue-600 hover:scale-110">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-2 bg-blue-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                3
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden transition-colors duration-200 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col gap-4 px-6 py-6 font-medium text-gray-700">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setMobileMenuOpen(false);
                }}
                className="text-left transition-colors duration-200 hover:text-blue-600"
              >
                Home
              </button>

              <a
                href="#shop"
                onClick={() => setMobileMenuOpen(false)}
                className="transition-colors duration-200 hover:text-blue-600"
              >
                Shop
              </a>

              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="transition-colors duration-200 hover:text-blue-600"
              >
                About
              </a>

              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="transition-colors duration-200 hover:text-blue-600"
              >
                Services
              </a>

              <button
                onClick={() => {
                  document
                    .getElementById("footer")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setMobileMenuOpen(false);
                }}
                className="text-left transition-colors duration-200 hover:text-blue-600"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* ROUTES */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      
      {/* Scroll + WhatsApp Buttons */}
      {showScroll && (
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
          <button
            onClick={openWhatsApp}
            className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
            title="Chat on WhatsApp"
          >
            <MessageCircle size={24} />
          </button>
          <button
            onClick={scrollToTop}
            className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
            title="Back to top"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      )}
    </div>
    <Footer />
    </>
  );
};

export default App;