import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaTruck,
  FaHeadset,
  FaClock,
  FaCreditCard,
  FaExternalLinkAlt,
} from "react-icons/fa";

const slides = [
  "/images/Shoping.jfif",
  "/images/Create.jfif",
  "/images/Confidence.jfif",
  "/images/Laugh.jfif",
];

const Home = () => {
const [currentSlide, setCurrentSlide] = useState(0);
const [expanded, setExpanded] = useState(false);

// Go to specific slide
const goToSlide = (index: number): void => {
  setCurrentSlide(index);
};

// Auto-slide every 5 seconds
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, 5000);

  return () => clearInterval(interval);
}, []);

return (
<>
  {/* Slide Section */}
<section className="relative mt-0 mx-0 sm:m-2 md:m-3 lg:m-4 rounded-xl sm:rounded-2xl
  overflow-hidden h-[38rem] sm:h-[46rem] md:h-[54rem]">
  {slides.map((slide, index) => (
    <div
      key={index}
      className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
        currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
      }`}
      style={{ backgroundImage: `url(${slide})` }}
    />
  ))}
  {/* Static Overlay On Slide */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
    className="absolute inset-0 z-20 bg-black/40 flex flex-col items-center justify-center text-center px-6"
  >
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
    WEAR YOUR CONFIDENCE
  </h1>
  <p className="text-white/90 mb-8 max-w-2xl text-base sm:text-lg">
    GLAMARA is your trusted plug for outfits that speak volumes. Every piece we
    curate helps you step out with courage, style, and the assurance that
    confidence is always in fashion.
  </p>

  <div className="flex gap-4 flex-wrap justify-center">
    <button className="bg-white text-black font-semibold px-6 py-2 rounded-md hover:bg-gray-100 transition">
      Shop Now
    </button>
    <button className="border border-white text-white px-6 py-2 rounded-md hover:bg-gradient-to-r
      hover:from-purple-500 hover:via-yellow-400 hover:to-blue-500 hover:text-black transition">
      Sign Up
    </button>
  </div>

  {/* Click Dots */}
  <div className="flex gap-3 mt-10">
    {slides.map((_, index) => (
      <button
        key={index}
        onClick={() => goToSlide(index)} // <-- use your function here
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          currentSlide === index
            ? "bg-white scale-110 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            : "bg-white/50 hover:bg-white"
        }`}
      />
    ))}
  </div>
  </motion.div>
</section>

  {/* Latest Products Section */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12">
  {/* Header */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
    className="text-center mb-10"
  >
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3">
    Latest Products
  </h1>
  <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
    Glamara brings you the best fashion wear on site — where style meets confidence and every outfit tells a story.
  </p>
  </motion.div>

  {/* Latest Products Cards */}
  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
  {/* Card 1 */} 
  <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transform transition
    hover:scale-105 hover:shadow-xl duration-300">
    <div className="overflow-hidden">
      <img src="/images/womenin.jfif" alt="Men Party Shirt"
        className="w-full max-h-64 object-contain transform transition hover:scale-105 duration-500"
      />
    </div>

    <div className="p-4 flex flex-col flex-grow">
      <h2 className="text-lg font-semibold text-gray-800 mb-2"> Women Party Shirt </h2>
      <p className="text-gray-600 mb-4">$45.21 USD</p>
      <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700
        hover:scale-105 transition-transform duration-300">
        Add to Cart 
      </button> 
    </div> 
  </div> 
  {/* Card 2 */} 
  <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transform transition
    hover:scale-105 hover:shadow-xl duration-300"> 
    <div className="overflow-hidden">
      <img src="/images/mensout.jpg" alt="Men Party Shirt"
        className="w-full max-h-64 object-contain transform transition hover:scale-105 duration-500"
      />
    </div> 

    <div className="p-4 flex flex-col flex-grow">
      <h2 className="text-lg font-semibold text-gray-800 mb-2"> Men Party Shirt </h2>
      <p className="text-gray-600 mb-4">$45.21 USD</p>
      <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700
        hover:scale-105 transition-transform duration-300">
        Add to Cart 
      </button> 
    </div> 
  </div> 
  {/* Card 3 */} 
  <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transform transition
    hover:scale-105 hover:shadow-xl duration-300">
    <div className="overflow-hidden">
      <img src="/images/kidplay.jfif" alt="My Girl"
        className="w-full max-h-64 object-contain transform transition hover:scale-105 duration-500"
      />
    </div>

    <div className="p-4 flex flex-col flex-grow">
      <h2 className="text-lg font-semibold text-gray-800 mb-2"> My Girl </h2>
      <p className="text-gray-600 mb-4">$45.21 USD</p>
      <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700
        hover:scale-105 transition-transform duration-300">
        Add to Cart
      </button> 
    </div> 
  </div> 
  </div>    
</section>

  {/* Service Section*/}
<section id="services" className="bg-white w-full py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
  <motion.div 
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
    className="text-center mb-12"
  >
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3">
    Our Services
  </h1>
  <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
    At Glamara, style is only the beginning. We move with intention — delivering
    ease, assurance, and presence at every step. From swift delivery to steady
    support, we remain active, attentive, and always within reach.
  </p>
  </motion.div>

  <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 text-center">
    {/* Free Shipping */}
    <div className="flex flex-col items-center px-4 py-6 rounded-xl transform transition duration-300 ease-out
      hover:-translate-y-2 hover:shadow-lg">
      <FaTruck className="text-4xl text-blue-600 mb-4" />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        Free Shipping
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Wherever you are, we carry your style to your doorstep with care —
        no hidden costs, no hesitation, just seamless delivery.
      </p>
    </div>
    {/* 24/7 Support */}
    <div className="flex flex-col items-center px-4 py-6 rounded-xl transform transition duration-300 ease-out
      hover:-translate-y-2 hover:shadow-lg">
      <FaHeadset className="text-4xl text-blue-600 mb-4" />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        24/7 Support
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Day or night, our line remains open. Questions are answered,
        concerns are heard, and you are never left waiting.
      </p>
    </div>
    {/* Easy Returns */}
    <div className="flex flex-col items-center px-4 py-6 rounded-xl transform transition duration-300 ease-out
      hover:-translate-y-2 hover:shadow-lg">
      <FaClock className="text-4xl text-blue-600 mb-4" />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        Easy Returns
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Should something not feel right, returning it is simple and swift —
        because confidence should never feel forced.
      </p>
    </div>
    {/* Easy Buy */}
    <div className="flex flex-col items-center px-4 py-6 rounded-xl transform transition duration-300 ease-out
      hover:-translate-y-2 hover:shadow-lg">
      <FaCreditCard className="text-4xl text-blue-600 mb-4" />
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        Easy Buy
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        Smooth checkout, secure payments, and clarity at every step —
        buying should feel as good as wearing.
      </p>
    </div>
  </div>
</div>
</section>

  {/* Category Section */}
<section id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12">
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
    className="text-center mb-10"
  >
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3">
    Categories
  </h1>
  <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
    Glamara is a unisex clothing store that offers timeless fashion for women,
    men, and children — thoughtfully curated for every season of life.
  </p>
  </motion.div>

<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
  {/* Girls Card*/}
  <div className="relative rounded-xl overflow-hidden shadow-md transform transition duration-300
    hover:scale-105 hover:shadow-xl">
    <img
      src="/images/Tween.jfif"
      alt="Girls"
      className="w-full h-auto max-h-[26rem] sm:h-80 md:h-96 object-cover"
    />
    <div className="absolute inset-0 flex items-end justify-center pb-8">
      <button className="bg-white/40 backdrop-blur-sm text-gray-900 px-16 py-1 rounded-full font-medium
        tracking-widest hover:bg-white/80 transition-all duration-300">
        Girls
      </button>
    </div>
  </div>
  {/* Mens Card */}
  <div className="relative rounded-xl overflow-hidden shadow-md transform transition duration-300
    hover:scale-105 hover:shadow-xl">
    <img
      src="/images/shine.jfif"
      alt="Men"
      className="w-full h-auto max-h-[26rem] sm:h-80 md:h-96 object-cover"
    />
    <div className="absolute inset-0 flex items-end justify-center pb-8">
      <button className="bg-white/40 backdrop-blur-sm text-gray-900 px-16 py-1 rounded-full font-medium
        tracking-widest hover:bg-white/80 transition-all duration-300">
        Men
      </button>
    </div>
  </div>
  {/* Womens Card */}
  <div className="relative rounded-xl overflow-hidden shadow-md transform transition duration-300
    hover:scale-105 hover:shadow-xl">
    <img
      src="/images/woming.jfif"
      alt="Women"
      className="w-full h-auto max-h-[26rem] sm:h-80 md:h-96 object-cover"
    />
    <div className="absolute inset-0 flex items-end justify-center pb-8">
      <button className="bg-white/40 backdrop-blur-sm text-gray-900 px-16 py-1 rounded-full font-medium
        tracking-widest hover:bg-white/80 transition-all duration-300">
        Women
      </button>
    </div>
  </div>
  {/* Boys Card */}
  <div className="relative rounded-xl overflow-hidden shadow-md transform transition duration-300
    hover:scale-105 hover:shadow-xl">
    <img
      src="/images/Boysd.jfif"
      alt="Boys"
      className="w-full h-auto max-h-[26rem] sm:h-80 md:h-96 object-cover"
    />
    <div className="absolute inset-0 flex items-end justify-center pb-8">
      <button className="bg-white/40 backdrop-blur-sm text-gray-900 px-16 py-1 rounded-full font-medium
        tracking-widest hover:bg-white/80 transition-all duration-300">
        Boys
      </button>
    </div>
  </div>
</div>
</section>

  {/* About Section */}
<section id="about" className="bg-white w-full py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
  <div className="grid gap-12 md:grid-cols-2 items-center">
  {/* LEFT — Text */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
      Glamara Exclusive Offer
    </h1>
    <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
      Glamara is a refined fashion destination built on intention,
      confidence, and quiet elegance. We curate pieces that feel natural
      to wear and timeless to own — clothing that supports your presence
      without demanding attention.
    </p>

    {/* Animated expansion */}
    <div
      className={`overflow-hidden transition-all duration-700 ease-in-out ${
        expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
        Our collections serve women, men, and children with a focus on
        quality fabrics, thoughtful cuts, and lasting comfort. At
        Glamara, fashion is not rushed — it is considered. Every item is
        chosen to fit seamlessly into real lives, offering versatility,
        ease, and a sense of assurance that carries beyond the moment.
      </p>
    </div>

    <div className="flex flex-wrap gap-4 mt-6">
      <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition">
        Shop Now
      </button>

      <button
        onClick={() => setExpanded(!expanded)}
        className="border border-gray-300 text-gray-800 px-6 py-2 rounded-md font-medium hover:bg-gray-100
          transition">
        {expanded ? "Read Less" : "Read More"}
      </button>
    </div>
    </motion.div>

  {/* RIGHT — Image */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative group"
    >
    <img
      src="/images/exclusive3.jpg" alt="About Glamara"
      className="w-full h-[26rem] sm:h-[30rem] object-cover rounded-2xl shadow-lg transform transition
      duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-2xl"
    />
    </motion.div>
  </div>
</div>
</section>

  {/* Featured Product Section */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12">
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
    className="text-center mb-10"
  >
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3">
    Featured Products
  </h1>
  <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
    Glamara offers a curated range of essentials — from gowns and polos to trousers and shirts — 
    designed for women, men, and children, with comfort, versatility, and confidence at the core.    
  </p>
  </motion.div>

<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
  {/* Card 1 */}
  <div className="relative rounded-xl overflow-hidden shadow-md transform transition duration-300
    hover:scale-105 hover:shadow-xl group">
    <img
      src="/images/gowngh.jpg" alt="Cloth 1"
      className="w-full h-auto max-h-[26rem] sm:h-80 md:h-96 object-cover transition-transform duration-500
      ease-out group-hover:scale-105"
    />
    <div className="absolute inset-0 flex items-end justify-center pb-4">
      <div className="bg-white/60 backdrop-blur-sm px-4 py-1 rounded-full text-gray-900 font-medium tracking-wide
        transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg">
        Gown
      </div>
    </div>
  </div>
  {/* Card 2 */}
  <div className="relative rounded-xl overflow-hidden shadow-md transform transition duration-300
    hover:scale-105 hover:shadow-xl group">
    <img
      src="/images/Apparel.jfif" alt="Cloth 2"
      className="w-full h-auto max-h-[26rem] sm:h-80 md:h-96 object-cover transition-transform duration-500
      ease-out group-hover:scale-105"
    />
    <div className="absolute inset-0 flex items-end justify-center pb-4">
      <div className="bg-white/60 backdrop-blur-sm px-4 py-1 rounded-full text-gray-900 font-medium tracking-wide
        transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg">
        Polo
      </div>
    </div>
  </div>
  {/* Card 3 */}
  <div className="relative rounded-xl overflow-hidden shadow-md transform transition duration-300
    hover:scale-105 hover:shadow-xl group">
    <img
      src="/images/Asher.jfif" alt="Cloth 3"
      className="w-full h-auto max-h-[26rem] sm:h-80 md:h-96 object-cover transition-transform duration-500
      ease-out group-hover:scale-105"
    />
    <div className="absolute inset-0 flex items-end justify-center pb-4">
      <div className="bg-white/60 backdrop-blur-sm px-4 py-1 rounded-full text-gray-900 font-medium tracking-wide
        transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg">
        Shirt
      </div>
    </div>
  </div>
  {/* Card 4 */}
  <div className="relative rounded-xl overflow-hidden shadow-md transform transition duration-300
    hover:scale-105 hover:shadow-xl group">
    <img
      src="/images/Asborne.jfif" alt="Cloth 4"
      className="w-full h-auto max-h-[26rem] sm:h-80 md:h-96 object-cover transition-transform duration-500
      ease-out group-hover:scale-105"
    />
    <div className="absolute inset-0 flex items-end justify-center pb-4">
      <div className="bg-white/60 backdrop-blur-sm px-4 py-1 rounded-full text-gray-900 font-medium tracking-wide
        transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg">
        Trouser
      </div>
    </div>
  </div>
</div>
  {/* See More Button below the grid */}
  <div className="flex justify-center mt-8">
    <button className="bg-blue-600 text-white px-8 py-2 rounded-md font-medium flex items-center gap-2 hover:bg-blue-700 transition group">
      See More
      <FaExternalLinkAlt className="transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  </div>
</section>

  {/* Seasonal Collection Section */}
<section className="bg-white w-full py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
    className="text-center mb-14"
  >
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
    Seasonal Collection
  </h1>
  <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
    Shaped by the season, defined by balance. Each collection carries
    clarity in form, ease in motion, and quiet confidence for women,
    men, and children.
  </p>
  </motion.div>

  <div className="grid gap-12 md:grid-cols-2 items-center">
    {/* First Image Card */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl shadow-lg transform transition
      duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      <img src="/images/seasonal.jfif" alt="Seasonal Wear" className="w-full h-[26rem] sm:h-[30rem] object-cover"/>
      {/* Slanted Stripes */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
        bg-[repeating-linear-gradient(-45deg,rgba(0,0,0,0.18),rgba(0,0,0,0.18)_14px,rgba(255,255,255,0.12)_14px,rgba(255,255,255,0.12)_28px)]" />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-end items-end text-right p-6 text-white">
        <h3 className="text-xl font-semibold tracking-wide"> Light Layers </h3>
        <div className="flex items-start gap-4 max-w-[18rem] mt-2 mb-4">
          <p className="text-sm text-white/90 leading-relaxed">Breathable pieces designed to move with changing days.</p>
          {/* Vertical line */}
          <span className="block w-[2px] h-12 bg-white shrink-0 mt-1" />
        </div>
        <a href="/login" className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-sm px-4 py-1.5 rounded-full
          text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-white/70 hover:pl-5">
            Explore
          <FaExternalLinkAlt className="text-xs transition-transform duration-300 group-hover:translate-x-1"/>
        </a>
      </div>
    </motion.div>

    {/* Second Image Card */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl shadow-lg transform transition
      duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
    <img src="/images/gofel.jfif" alt="Seasonal Style" className="w-full h-[26rem] sm:h-[30rem] object-cover"/>
    {/* Slanted Stripes */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
      bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.18),rgba(0,0,0,0.18)_14px,rgba(255,255,255,0.12)_14px,rgba(255,255,255,0.12)_28px)]" />

    {/* Overlay Content */}
    <div className="absolute inset-0 flex flex-col justify-end items-end text-right p-6 text-white">
      <h3 className="text-xl font-semibold tracking-wide"> Grounded Tones </h3>
      <div className="flex items-start gap-4 max-w-[18rem] mt-2 mb-4">
        <p className="text-sm text-white/90 leading-relaxed">
          Calm palettes shaped for continuity and presence.
        </p>
        {/* Vertical line */}
        <span className="block w-[2px] h-12 bg-white shrink-0 mt-1" />
      </div>
      <a href="/login" className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-sm px-4 py-1.5 rounded-full
        text-sm font-medium text-gray-900 transition-all duration-300 hover:bg-white/70 hover:pl-5">
        Explore
        <FaExternalLinkAlt className="text-xs transition-transform duration-300 group-hover:translate-x-1"/>
      </a>
    </div>
    </motion.div>
  </div>
</div>
</section>

  {/* Customer Remark Section */}
<section className="bg-gray-50 w-full py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
  {/* Header */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
    className="text-center mb-12"
  >
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3">
    Fashion That Speaks for Itself
  </h1>
  <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
    Reflections from those who wear Glamara — honest words, shared freely.
  </p>
  </motion.div>

  {/* Customer Remark Cards Array */}
  <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
    {[
      {
        name: "Aisha Bello",
        img: "/images/bads.jpg",
        stars: "★★★★★",
        text: "Glamara pieces feel intentional. The fit, the fabric, the restraint — everything speaks quality without trying too hard.",
      },
      {
        name: "Daniel Okoye",
        img: "/images/restp.jpeg",
        stars: "★★★★☆",
        text: "You can tell the designs were thought through. Nothing feels rushed. It’s clothing that settles into your routine naturally.",
      },
      {
        name: "Mariam Sarid",
        img: "/images/frabs.jpg",
        stars: "★★★★★",
        text: "What I appreciate most is the balance — stylish without excess, modern without losing warmth.",
      },
    ].map((item, i) => (
    <motion.div
      key={i}
      custom={i}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
      }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white rounded-2xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition relative overflow-hidden"
    >          
    {/* Quote Accent */}
    <span className="absolute top-4 right-5 text-6xl text-gray-100 font-serif leading-none select-none"> “ </span>
    <div className="flex items-center gap-4 mb-4 relative z-10">
      <img
        src={item.img}
        alt={item.name}
        className="w-14 h-14 rounded-full object-cover"
      />
      <div>
        <h3 className="font-semibold text-gray-800">{item.name}</h3>
        <div className="flex gap-1 text-yellow-400 text-sm">
          {item.stars.split("").map((s, idx) => (
            <span key={idx}>{s}</span>
          ))}
        </div>
      </div>
    </div>
    <p className="text-gray-600 text-sm leading-relaxed relative z-10">
      {item.text}
    </p>
    </motion.div>
    ))}
  </div>
</div>
</section>
</>
);
};
export default Home;