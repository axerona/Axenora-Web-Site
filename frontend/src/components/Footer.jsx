import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0a0f2c] to-[#080b1e] text-gray-300 pt-16 pb-8 px-6 md:px-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-900/20 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-900/20 rounded-full filter blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="inline-flex items-center space-x-3">
            <img
              src={logo}
              alt="Axenora Logo"
              className="h-14 w-14"
            />
            <span className="text-white text-xl font-bold whitespace-nowrap">Axenora Technology</span>
          </Link>
          <p className="text-gray-400 leading-relaxed">
            We are a futuristic software company building cutting-edge AI, gaming, and safety solutions that transform businesses.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-blue-700/30 transition-all duration-300 group">
              <FaLinkedinIn className="text-gray-300 group-hover:text-white transition-colors" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-blue-700/30 transition-all duration-300 group">
              <FaFacebookF className="text-gray-300 group-hover:text-white transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-blue-700/30 transition-all duration-300 group">
              <FaTwitter className="text-gray-300 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
            Company
            <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300"></span>
          </h3>
          <ul className="space-y-3">
            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors flex items-start group">
              <span className="w-1 h-1 bg-blue-400 rounded-full mt-2.5 mr-2 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
              About us
            </Link></li>
            <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors flex items-start group">
              <span className="w-1 h-1 bg-blue-400 rounded-full mt-2.5 mr-2 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
              Terms & Conditions
            </Link></li>
            {/* <li><Link to="/customers" className="text-gray-400 hover:text-white transition-colors flex items-start group">
              <span className="w-1 h-1 bg-blue-400 rounded-full mt-2.5 mr-2 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
              Customers
            </Link></li> */}
            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors flex items-start group">
              <span className="w-1 h-1 bg-blue-400 rounded-full mt-2.5 mr-2 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
              Contact us
            </Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
            Explore
            <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300"></span>
          </h3>
          <ul className="space-y-3">
            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors flex items-start group">
              <span className="w-1 h-1 bg-blue-400 rounded-full mt-2.5 mr-2 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
              Services
            </Link></li>
            {/* <li><Link to="/blogs" className="text-gray-400 hover:text-white transition-colors flex items-start group">
              <span className="w-1 h-1 bg-blue-400 rounded-full mt-2.5 mr-2 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
              Blogs
            </Link></li> */}
            <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors flex items-start group">
              <span className="w-1 h-1 bg-blue-400 rounded-full mt-2.5 mr-2 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
              Pricing
            </Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-6 relative inline-block">
            Contact Us
            <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300"></span>
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-400">Axenora Technology (Pvt) Ltd., Galewela, Sri Lanka</span>
            </li>
            <li className="flex items-start">
              <FaEnvelope className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
              <a href="mailto:info@axenora.com" className="text-gray-400 hover:text-white transition-colors">info@axenoratechnology.com</a>
            </li>
            <li className="flex items-start">
              <FaPhoneAlt className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
              <a href="tel:+94123456789" className="text-gray-400 hover:text-white transition-colors">+94 70 576 8036</a>
            </li>
          </ul>
        </div>
      </div>



      <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <div className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Axenora Technology. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
