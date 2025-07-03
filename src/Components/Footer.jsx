import React from "react";
import {
  FaPhoneAlt,
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-[#0a3a34] text-white pt-12 pb-6 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <div>
          <div className="flex justify-center items-center gap-2">
            <img src={logo} alt="Logo" className="w-40 h-40 object-contain" />
          </div>
          <p className="mt-2 text-sm text-gray-300">
            712 Jefferson Ave, Brooklyn <br />
            New York 11221
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-8">
          <div className="flex flex-col items-center gap-2">
            <FaPhoneAlt className="text-[#c07b47] text-2xl" />
            <p className="font-semibold">Call Us</p>
            <p className="text-sm text-gray-300">Call: +91 9898989899</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaClock className="text-[#c07b47] text-3xl" />
            <p className="font-semibold">Opening Hours</p>
            <p className="text-sm text-gray-300">Mon to Sat 08:00 – 20:00</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaEnvelope className="text-[#c07b47] text-3xl" />
            <p className="font-semibold">Email Us</p>
            <p className="text-sm text-gray-300">contact@residem.com</p>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            Copyright 2025 - Residem by devansh
          </p>
          <div className="flex gap-4 text-lg text-gray-300">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaTimes className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
            <FaWhatsapp className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
