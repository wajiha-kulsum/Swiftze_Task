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

    </nav>
  );
};

export default Navbar;
