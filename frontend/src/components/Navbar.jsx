import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      
      <nav className="flex justify-between items-center px-6 md:px-12 py-3 text-white fixed w-full top-0 left-0 z-50 bg-gradient-to-b from-[#0a0f2c] to-[#080b1e] backdrop-blur-sm shadow-lg">
         
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Axenora Logo"
            className="h-10 w-10 md:h-12 md:w-12"
          />
          <span className="text-white text-lg md:text-xl font-bold whitespace-nowrap">
            Axenora Technology
          </span>
        </Link>

         
        <ul className="hidden md:flex space-x-8 text-base font-medium">
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

        
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <HiX className="h-7 w-7 text-white" />
            ) : (
              <HiMenuAlt3 className="h-7 w-7 text-white" />
            )}
          </button>
        </div>
      </nav>

       
      {menuOpen && (
        <div className="fixed top-16 left-0 w-full bg-[#080b1e] flex flex-col items-center space-y-6 py-6 md:hidden z-40 shadow-md">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`cursor-pointer text-lg transition-all duration-300 ${
                location.pathname === link.path
                  ? "bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent font-semibold"
                  : "text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-300 hover:bg-clip-text hover:text-transparent"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
