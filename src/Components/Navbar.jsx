import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // <-- Import Link
import Logo from "./../assets/logo-black.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="w-32 md:w-40 h-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-6 text-gray-800 font-medium">
          <li>
            <Link to="/about" className="hover:text-black">
              About
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-black">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="hover:text-black">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-black">
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <Link to="/visit">
            <button className="bg-[#B07E50] text-white font-medium px-5 py-2 rounded-md hover:bg-yellow-700 transition">
              SCHEDULE A VISIT
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-gray-800 text-white font-medium px-5 py-2 rounded-md hover:bg-gray-700 transition">
              Login
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
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
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/visit">
                <button className="bg-[#B07E50] text-white w-full py-2 rounded-md hover:bg-yellow-700 transition">
                  SCHEDULE A VISIT
                </button>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <button className="bg-gray-800 text-white w-full py-2 rounded-md hover:bg-gray-700 transition">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
