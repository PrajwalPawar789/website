import React from "react";
import logo from "../images/logo.svg";


const Navbar = () => {
  return (
    <nav className="bg-white-800">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <div className="flex-shrink-0">
            <img
              className="h-12 w-50 m-20"
              src={logo}
              alt="Logo"
            />
          </div>

          <div className="hidden md:flex space-x-8">
            <a
              href="#pricing"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              style={{ fontSize: '18px' }}
            >
              ABOUT
            </a>
            <a
              href="#about"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              style={{ fontSize: '18px' }}
            >
              PRICE
            </a>
            <a
              href="#unit-plan"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              style={{ fontSize: '18px' }}
            >
              GALLERY
            </a>
            <a
              href="#location"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              style={{ fontSize: '18px' }}
            >
              AMENITIES
            </a>
            <a
              href="#location"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              style={{ fontSize: '18px' }}
            >
              UNIT PLAN
            </a>
            <a
              href="#location"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              style={{ fontSize: '18px' }}
            >
              LOCATION
            </a>
          </div>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
