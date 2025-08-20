import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a0f2c] text-gray-300 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <div>
          <h3 className="font-semibold text-white mb-4">Product & Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Premium LMS</li>
            <li>E-Commerce Website</li>
            <li>Custom Web Application</li>
            <li>Creative Design Packages</li>
            <li>Mobile App Development</li>
            <li>Advanced SEO & Marketing</li>
          </ul>
        </div>
 
        <div>
          <h3 className="font-semibold text-white mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>Services</li>
            <li>Blogs</li>
            <li>Pricing</li>
          </ul>
        </div>

         
        <div>
          <h3 className="font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
            <li>Terms & Conditions</li>
            <li>Customers</li>
            <li>Contact us</li>
          </ul>
        </div>

         
        <div>
          <h3 className="font-semibold text-white mb-4">Subscribe</h3>
          <div className="flex items-center bg-[#11152d] rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-3 py-2 bg-transparent text-sm text-gray-300 placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-blue-700 hover:bg-blue-800 px-4 py-2">
              →
            </button>
          </div>
          <p className="text-xs mt-4 text-gray-400 leading-relaxed">
            Hello, we are Axenora Technology – A futuristic software company 
            crafting cutting-edge AI, gaming, and safety solutions.
          </p>
        </div>
      </div>

      
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
         
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
        </div>

         
        <div className="flex space-x-4">
          <a href="#" className="p-2 rounded-full bg-[#11152d] hover:bg-blue-700 transition">
            <FaLinkedinIn size={14} />
          </a>
          <a href="#" className="p-2 rounded-full bg-[#11152d] hover:bg-blue-700 transition">
            <FaFacebookF size={14} />
          </a>
          <a href="#" className="p-2 rounded-full bg-[#11152d] hover:bg-blue-700 transition">
            <FaTwitter size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
