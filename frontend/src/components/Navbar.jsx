import React from "react";

const Navbar = ({ activeTab, setActiveTab }) => {
  const links = ["Home", "Services", "Pricing", "Careers", "Contact"];

  return (
    <nav className="flex justify-between items-center px-8 py-6 text-white absolute w-full top-0 z-10">
      
      <ul className="flex space-x-8 text-sm font-medium">
        {links.map((link) => (
          <li
            key={link}
            className={`cursor-pointer hover:text-indigo-400 ${
              activeTab.toLowerCase() === link.toLowerCase() ? "text-indigo-400 font-semibold" : ""
            }`}
            onClick={() => setActiveTab(link.toLowerCase())}
          >
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
