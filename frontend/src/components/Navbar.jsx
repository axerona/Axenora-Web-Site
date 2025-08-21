import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="flex justify-end items-center px-8 py-6 text-white fixed w-full top-0 z-10 bg-blue-950 bg-opacity-50">
      <ul className="flex space-x-8 text-sm font-medium">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className={`cursor-pointer transition ${
                location.pathname === link.path
                  ? "text-indigo-400 font-semibold"
                  : "hover:text-indigo-400"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
