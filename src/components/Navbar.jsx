// src/components/Navbar.jsx
import React from "react";

 function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-transparent text-white">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full bg-[#E8CDBF] flex items-center justify-center">
          <span className="text-white font-bold text-lg">A</span>
        </div>
        <span className="font-semibold text-lg tracking-wider">ura </span>
      </div>
      

      {/* <ul className="hidden md:flex items-center space-x-6 text-sm font-medium">
        <li className="hover:text-orange-400 cursor-pointer">HOME</li>
        <li className="hover:text-orange-400 cursor-pointer">PAGES</li>
        <li className="hover:text-orange-400 cursor-pointer">PORTFOLIO</li>
        <li className="hover:text-orange-400 cursor-pointer">BLOG</li>
        <li className="hover:text-orange-400 cursor-pointer">SHOP</li>
        <li className="hover:text-orange-400 cursor-pointer">ELEMENTS</li>
      </ul> */}

      <button className="bg-[#df936d]  transition px-5 py-2 text-sm font-medium rounded">
        BOOK NOW
      </button>
    </nav>
  );
}
export default Navbar;