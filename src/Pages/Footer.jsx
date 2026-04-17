import React from "react";
import { CiTwitter } from "react-icons/ci";
import { FaDribbble, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#182118] text-white px-6 py-10">

      {/* Top Section */}
      <div className="text-center max-w-xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">KeenKeeper</h1>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4 pt-2">
          <a href="#" className="p-2 rounded-full border border-gray-700 hover:border-green-500 hover:text-green-400 transition text-lg">
            <FaFacebook />
          </a>
          <a href="#" className="p-2 rounded-full border border-gray-700 hover:border-green-500 hover:text-green-400 transition text-lg">
            <CiTwitter />
          </a>
          <a href="#" className="p-2 rounded-full border border-gray-700 hover:border-green-500 hover:text-green-400 transition text-lg">
            <FaDribbble />
          </a>
        </div>
      </div>

     
      <hr className="border-gray-700 my-8" />


      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-xs sm:text-[13px]">
        <p className="font-semibold text-center sm:text-left">
          © 2026 KeenKeeper. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center sm:justify-end gap-4 font-semibold">
          <a href="#" className="hover:text-green-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-green-400 transition">Terms of Service</a>
          <a href="#" className="hover:text-green-400 transition">Cookies</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;