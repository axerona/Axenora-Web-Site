import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const location = useLocation();
  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="h-20">
      <nav className="flex justify-between items-center px-8 py-3 text-white fixed w-full top-0 left-0 z-50 bg-gradient-to-b from-[#0a0f2c] to-[#080b1e] backdrop-blur-sm transition-all duration-300 shadow-lg">
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src={logo} 
            alt="Axenora Logo" 
            className="h-12 w-12 md:h-14 md:w-14" 
          />
          <span className="text-white text-xl md:text-2xl font-bold whitespace-nowrap">Axenora Technology</span>
        </Link>
      <ul className="flex space-x-8 text-base font-medium">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className={`cursor-pointer transition-all duration-300 ${
                location.pathname === link.path
                  ? "bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent font-semibold"
                  : "text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-300 hover:bg-clip-text hover:text-transparent"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
          </ul>
      </nav>
    </div>
  );
};

export default Navbar;
