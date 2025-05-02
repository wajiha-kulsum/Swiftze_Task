import React from "react";
import { Link } from "react-router-dom";
import swiftze_logo from "@/assets/img/swiftze_logo.png";

const Navbar = () => {
  return (
    <nav className="bg-background text-white px-6 py-4 flex items-center justify-between shadow-md bg-gray-900">
      {/* Logo on the left */}
      <div className="flex items-center">
        <img
          src={swiftze_logo}
          alt="Swiftze Logo"
          className="h-10 w-auto"
        />
      </div>

      {/* Navigation Links on the right */}
      <div className="hidden md:flex items-center gap-6">
        <Link to="/" className="hover:text-red-400 transition">
          Home
        </Link>
        <Link to="/about" className="hover:text-red-400 transition">
          About Us
        </Link>
        <Link to="/services" className="hover:text-red-400 transition">
          Services
        </Link>
        <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded transition">
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
