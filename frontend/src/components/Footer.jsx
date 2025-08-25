import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#080b1e] text-gray-300 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        
        <div className="max-w-xs">
          <h3 className="font-semibold text-white mb-4">Axenora Technology</h3>
          <p className="text-sm text-gray-400 leading-relaxed text-justify">
            We are a futuristic software company <br />building cutting-edge AI, gaming,<br />
            and safety solutions.
          </p>
        </div>

        
        <div>
          <h3 className="font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-blue-400 transition-colors">About us</Link></li>
            <li><Link to="/terms" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/customers" className="hover:text-blue-400 transition-colors">Customers</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact us</Link></li>
          </ul>
        </div>


        
        <div>
          <h3 className="font-semibold text-white mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
            <li><Link to="/blogs" className="hover:text-blue-400 transition-colors">Blogs</Link></li>
            <li><Link to="/pricing" className="hover:text-blue-400 transition-colors">Pricing</Link></li>
          </ul>
        </div>


         
        <div>
          <h3 className="font-semibold text-white mb-4">Product & Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-blue-400 transition-colors">Premium LMS</Link></li>
            <li><Link to="/services" className="hover:text-blue-400 transition-colors">E-Commerce Website</Link></li>
            <li><Link to="/services" className="hover:text-blue-400 transition-colors">Custom Web Application</Link></li>
            <li><Link to="/services" className="hover:text-blue-400 transition-colors">Creative Design Packages</Link></li>
            <li><Link to="/services" className="hover:text-blue-400 transition-colors">Mobile App Development</Link></li>
            <li><Link to="/services" className="hover:text-blue-400 transition-colors">Advanced SEO & Marketing</Link></li>
          </ul>
        </div>
      </div>


      
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

        <div className="flex space-x-6 mb-4 md:mb-0">
          <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
          <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
        </div>

        <div className="flex space-x-4 text-gray-400">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-[#0b0e27] hover:bg-blue-700 transition-colors">
            <FaLinkedinIn size={14} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-[#0b0e27] hover:bg-blue-700 transition-colors">
            <FaFacebookF size={14} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-[#0b0e27] hover:bg-blue-700 transition-colors">
            <FaTwitter size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
