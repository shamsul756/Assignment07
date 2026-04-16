import React, { useState } from "react";
import { IoIosHome } from "react-icons/io";
import { MdAccessTime, MdAutoGraph } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-4">
        
        {/* Brand */}
        <div className="navbar-start">
          <span className="font-bold text-2xl bg-gradient-to-r from-cyan-700 to-yellow-900 bg-clip-text text-transparent">
            keenkeeper
          </span>
        </div>

        {/* Desktop Links — hidden on small screens */}
        <div className="navbar-end gap-3 hidden md:flex">
          <button className="btn btn-ghost btn-md"><IoIosHome /> Home</button>
          <button className="btn btn-ghost btn-md"><MdAccessTime /> TimeLine</button>
          <button className="btn btn-ghost btn-md"><MdAutoGraph /> Stats</button>
        </div>

        {/* Hamburger — visible only on small screens */}
        <div className="navbar-end md:hidden">
          <button className="btn btn-ghost btn-sm" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoClose size={22} /> : <RxHamburgerMenu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-base-100 shadow px-4 pb-4 flex flex-col gap-2">
          <button className="btn btn-ghost btn-sm justify-start w-full">
            <IoIosHome /> Home
          </button>
          <button className="btn btn-ghost btn-sm justify-start w-full">
            <MdAccessTime /> TimeLine
          </button>
          <button className="btn btn-ghost btn-sm justify-start w-full">
            <MdAutoGraph /> Stats
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;