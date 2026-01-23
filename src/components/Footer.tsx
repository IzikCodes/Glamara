import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="bg-white shadow-sm">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">

        {/* LEFT — Brand + About + Contact Form */}
        <div className="flex flex-col gap-6">
          <Link to="/home" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="/images/glamara.png"
              alt="GLAMARA"
              className="h-16 w-16 object-contain sm:h-18 sm:w-18"
            />
            <span className="text-lg sm:text-xl font-bold tracking-wide brand-gradient whitespace-nowrap">
              GLAMARA
            </span>
          </Link>

          <p className="text-gray-700 text-sm leading-relaxed mb-6 max-w-md">
            GLAMARA is more than fashion — it is confidence worn quietly and carried
            boldly. Each piece is chosen to help you step forward assured, refined,
            and unmistakably yourself.
          </p>

          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your message"
              rows={3}
              className="w-full px-4 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white text-sm px-5 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* MIDDLE — Quick Links */}
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-gray-800 mb-4">
            Quick Links
          </h2>

          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <Link to="/home"
                className="transition-colors duration-200 hover:text-blue-600"
              >
                Home
              </Link>
            </li>
            <li>        
              <a
                href="#shop"
                className="transition-colors duration-200 hover:text-blue-600"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="transition-colors duration-200 hover:text-blue-600"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="transition-colors duration-200 hover:text-blue-600"
              >
                Services
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT — Contact Info + Social Icons */}
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-gray-800 mb-4">
            Contact
          </h2>

          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> 47 D-Line, London UK
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope />
              <a href="mailto:glamara@gmail.com" className="hover:text-blue-600">
                glamara@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +234 807 500 5248
            </li>
          </ul>

          {/* Social Icons with subtle zoom */}
          <div className="flex gap-4 text-gray-600 mt-2">
            <a href="#" className="transform transition duration-300 hover:scale-110 hover:text-green-500">
              <FaWhatsapp size={18} />
            </a>
            <a href="#" className="transform transition duration-300 hover:scale-110 hover:text-blue-500">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="transform transition duration-300 hover:scale-110 hover:text-pink-500">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="transform transition duration-300 hover:scale-110 hover:text-blue-700">
              <FaFacebook size={18} />
            </a>
            <a href="#" className="transform transition duration-300 hover:scale-110 hover:text-black">
              <FaTiktok size={18} />
            </a>
          </div>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-300" />

      {/* BOTTOM BAR */}
      <div className="text-center py-4 text-sm text-gray-600">
        © {new Date().getFullYear()} GLAMARA — <em>Where style becomes story</em>
        <br />
        Designed by{" "}
        <a
          href="http://izik.netlify.app"
          className="text-blue-600 hover:underline"
        >
          Izik
        </a>{" "}
        with React & TailwindCSS
      </div>
    </footer>
  );
};

export default Footer;