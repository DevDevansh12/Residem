import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "./../assets/logo-black.png";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2 px-4 w-full"
          : "mt-6 max-w-6xl mx-auto bg-white rounded-xl py-4 px-6 shadow-lg"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Logo"
            className="w-32 md:w-40 h-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-gray-800 font-medium">
          <li className="relative group">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 hover:text-black focus:outline-none"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              Home <ChevronDown size={16} />
            </button>
            {dropdownOpen && (
              <ul className="absolute top-8 left-0 bg-white border rounded-md shadow-md py-2 w-40 z-10">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Sub Home 1
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Sub Home 2
                </li>
              </ul>
            )}
          </li>
          <li className="hover:text-black cursor-pointer">Overview</li>
          <li className="hover:text-black cursor-pointer">Rooms</li>
          <li className="hover:text-black cursor-pointer">Gallery</li>
          <li className="hover:text-black cursor-pointer">Floorplan</li>
          <li className="hover:text-black cursor-pointer">Contact</li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-[#B07E50] text-white font-medium px-5 py-2 rounded-md hover:bg-yellow-700 transition">
            SCHEDULE A VISIT
          </button>
        </div>

        {/* Hamburger (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 md:hidden">
          <ul className="flex flex-col gap-4 text-gray-800 font-medium">
            <li className="flex items-center justify-between">
              <span>Home</span>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                <ChevronDown size={16} />
              </button>
            </li>
            {dropdownOpen && (
              <ul className="pl-4 space-y-2 text-sm">
                <li>Sub Home 1</li>
                <li>Sub Home 2</li>
              </ul>
            )}
            <li>Overview</li>
            <li>Rooms</li>
            <li>Gallery</li>
            <li>Floorplan</li>
            <li>Contact</li>
            <li>
              <button className="bg-yellow-800 text-white w-full py-2 rounded-md hover:bg-yellow-700 transition">
                SCHEDULE A VISIT
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
