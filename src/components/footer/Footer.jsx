import { FaInstagram, FaTelegramPlane, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import backgroundImage from "../../assets/images/background.png"; // Ensure the correct path to your image

export default function Footer() {
  return (
    <footer
      className="bg-cover bg-center py-16 bg-zinc-800 text-white"
     // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* First Column: Company Logo and Title */}
          <div className="flex flex-col items-center text-center">
            <img src={logo} alt="Company Logo" className="h-32 w-auto object-contain mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">World Book of <span className="text-red-500">Star Records</span></h2>
          </div>

          {/* Second Column: Address and Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="flex items-center mb-4">
        <span className="text-lg mr-2">📍</span>
        <a
          href="https://www.google.com/maps?q=A/11, 2nd Floor, Pandit Din Dayal, Upadhyay Nagar, Sukhliya, Indore M.P. 452010"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-gray-700 hover:text-blue-500 transition-all duration-200"
        >
          <p>A/11, 2nd Floor, Pandit Din Dayal,</p>
          <p>Upadhyay Nagar,</p>
          <p>Sukhliya, Indore M.P. 452010</p>
        </a>
      </div>

      {/* Phone */}
      <div className="flex items-center mb-4">
        <span className="text-lg mr-2">📞</span>
        <a
          href="tel:+919876543210"
          className="text-lg text-gray-700 hover:text-green-500 transition-all duration-200"
        >
          +91 98765 43210
        </a>
      </div>
           
            <div className="flex items-center mb-2 text-lg">
              <span className="text-lg mr-2">📧</span>
              <span>worldbookofstarrecord@gmail.com</span>
            </div>
          </div>

          {/* Third Column: Social Media Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-2 mb-4">
              <a
                href="https://www.instagram.com"
                className="text-pink-600 hover:text-red-500 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.telegram.com"
                className="text-blue-400 hover:text-red-500 transition-colors"
                aria-label="Telegram"
              >
                <FaTelegramPlane size={20} />
              </a>
              <a
                href="https://www.facebook.com"
                className="text-blue-600 hover:text-red-500 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.twitter.com"
                className="text-blue-400 hover:text-red-500 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com"
                className="text-blue-700 hover:text-red-500 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="https://www.youtube.com"
                className="text-red-600 hover:text-red-500 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom: Additional Links and Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <div className="flex justify-center space-x-8 mb-4">
            <a href="#faq" className="text-white hover:text-red-500 transition-colors font-bold">FAQ</a>
            <a href="#rules" className="text-white hover:text-red-500 transition-colors font-bold">Rules</a>
            <a href="#privacy" className="text-white hover:text-red-500 transition-colors font-bold">Privacy Policies</a>
            <a href="#terms" className="text-white hover:text-red-500 transition-colors font-bold">Terms & Conditions</a>
          </div>
          <p className="text-sm text-gray-300">
            © 2024 All Rights Reserved | World Book of Star Records, India
          </p>
        </div>
      </div>
    </footer>
  );
}
