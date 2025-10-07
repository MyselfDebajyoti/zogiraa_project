"use client";
import { Menu, Search, Mic } from "lucide-react"; // icons
import { X } from "lucide-react"; // close icon
import { useState } from "react";

export default function Yellow_NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-yellow-400 min-h-[50px] w-full">
      {/* Hamburger menu button for mobile */}
      <div className="md:hidden p-4">
        <button onClick={toggleMenu} className="text-gray-800">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-yellow-400 w-64 fixed top-0 left-0 h-full z-50 shadow-lg`}>
        <div className="p-4">
          <button onClick={toggleMenu} className="text-gray-800 mb-4">
            <X size={24} />
          </button>
          <div className="flex flex-col space-y-2">
            <a href="#" className="px-4 py-2 text-gray-800 font-bold hover:bg-yellow-500 rounded">Construction</a>
            <a href="#" className="px-4 py-2 text-gray-800 font-bold hover:bg-yellow-500 rounded">Industries</a>
            <a href="#" className="px-4 py-2 text-gray-800 font-bold hover:bg-yellow-500 rounded">Electronics</a>
            <a href="#" className="px-4 py-2 text-gray-800 font-bold hover:bg-yellow-500 rounded">Retail</a>
            <a href="#" className="px-4 py-2 text-gray-800 font-bold hover:bg-yellow-500 rounded">Power</a>
            <a href="#" className="px-4 py-2 text-gray-800 font-bold hover:bg-yellow-500 rounded">Skill</a>
            <a href="#" className="px-4 py-2 text-gray-800 font-bold hover:bg-yellow-500 rounded">Logistic</a>
            <a href="#" className="px-4 py-2 text-gray-800 font-bold hover:bg-yellow-500 rounded">Bank & Insurance</a>
            <a href="#" className="px-4 py-2 text-gray-800 font-bold hover:bg-yellow-500 rounded">Government jobs</a>
          </div>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex w-full items-center justify-between px-8 py-2">
        <a href="#" className="px-4 py-2 text-gray-800 font-bold hover:bg-yellow-500 rounded">
          Construction
        </a>

        <div className="flex flex-1 items-center justify-evenly">
          <a href="#" className="px-4 py-2 text-gray-800 font-bold hover:bg-yellow-500 rounded">Industries</a>
          <a href="#" className="px-4 py-2 text-gray-800 font-bold hover:bg-yellow-500 rounded">Electronics</a>
          <a href="#" className="px-4 py-2 text-gray-800 font-bold hover:bg-yellow-500 rounded">Retail</a>
          <a href="#" className="px-4 py-2 text-gray-800 font-bold hover:bg-yellow-500 rounded">Power</a>
          <a href="#" className="px-4 py-2 text-gray-800 font-bold hover:bg-yellow-500 rounded">Skill</a>
          <a href="#" className="px-4 py-2 text-gray-800 font-bold hover:bg-yellow-500 rounded">Logistic</a>
          <a href="#" className="px-4 py-2 text-gray-800 font-bold hover:bg-yellow-500 rounded">Bank & Insurance</a>
        </div>

        <a href="#" className="px-4 py-2 text-gray-800 font-bold hover:bg-yellow-500 rounded">
          Government jobs
        </a>
      </div>
    </nav>
  );
}
