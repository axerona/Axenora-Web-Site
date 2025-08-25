import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";  

const Footer = () => {
  return (
    <footer className="bg-[#0a0f2c] text-gray-300 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        
        <div>
          <h3 className="font-semibold text-white mb-4">Product & Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services">Premium LMS</Link></li>
            <li><Link to="/services">E-Commerce Website</Link></li>
            <li><Link to="/services">Custom Web Application</Link></li>
            <li><Link to="/services">Creative Design Packages</Link></li>
            <li><Link to="/services">Mobile App Development</Link></li>
            <li><Link to="/services">Advanced SEO & Marketing</Link></li>
          </ul>
        </div>

       
        <div>
          <h3 className="font-semibold text-white mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/Terms">Terms & Conditions</Link></li>
            <li><Link to="/customers">Customers</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
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
          <Link to="/terms">Terms</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/cookies">Cookies</Link>
        </div>

         
        <div className="flex space-x-4 text-gray-400">
          <span className="p-2 rounded-full bg-[#11152d]">
            <FaLinkedinIn size={14} />
          </span>
          <span className="p-2 rounded-full bg-[#11152d]">
            <FaFacebookF size={14} />
          </span>
          <span className="p-2 rounded-full bg-[#11152d]">
            <FaTwitter size={14} />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
