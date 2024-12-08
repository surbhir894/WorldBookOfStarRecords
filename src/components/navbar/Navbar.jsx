import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-zinc-800 shadow-lg fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-16 w-auto object-contain md:h-20"
            />
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Links for Desktop */}
          <div className={`hidden md:flex items-center space-x-8`}>
            {["home", "awards", "records", "media", "gallery","Blogs", "events", "testimonials", "about"].map((link) => (
              <Link
                key={link}
                to={`/${link}`}
                className="text-white text-lg hover:font-bold hover:text-red-500 transition-transform transform hover:scale-110 capitalize"
              >
                {link}
              </Link>
            ))}
            <Link
              to="/register"
              className="flex items-center text-white text-lg hover:font-bold hover:text-red-500 transition-transform transform hover:scale-110"
            >
              <FaUserCircle className="mr-2" />
              Register
            </Link>
          </div>
        </div>

        {/* Links for Mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-blue-900 shadow-md">
            {["home", "awards", "records", "media", "gallery","Blogs", "events", "testimonials", "about"].map((link) => (
              <Link
                key={link}
                to={`/${link}`}
                className="block text-white text-lg hover:font-bold hover:text-red-500 px-4 py-2 transition-transform transform hover:scale-110 capitalize"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link}
              </Link>
            ))}
            <Link
              to="/register"
              className="block flex items-center text-white text-lg hover:font-bold hover:text-red-500 px-4 py-2 transition-transform transform hover:scale-110"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaUserCircle className="mr-2" />
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
