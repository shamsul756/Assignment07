import React, { useState } from "react";
import { IoIosHome } from "react-icons/io";
import { MdAccessTime, MdAutoGraph } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router"; 

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

        
        <div className="navbar-end gap-3 hidden md:flex">
          <NavLink to="/" className={({ isActive }) => isActive ? "btn btn-primary btn-md" : "btn btn-ghost btn-md"}>
            <IoIosHome /> Home
          </NavLink>
          <NavLink to="/TotalCard" className={({ isActive }) => isActive ? "btn btn-primary btn-md" : "btn btn-ghost btn-md"}>
            <MdAccessTime /> TimeLine
          </NavLink>
          <NavLink to="/stats" className={({ isActive }) => isActive ? "btn btn-primary btn-md" : "btn btn-ghost btn-md"}>
            <MdAutoGraph /> Stats
          </NavLink>
        </div>

        {/* Hamburger */}
        <div className="navbar-end md:hidden">
          <button className="btn btn-ghost btn-sm" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoClose size={22} /> : <RxHamburgerMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-base-100 shadow px-4 pb-4 flex flex-col gap-2">
         
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "bg-purple-800 text-white btn btn-sm justify-start" : "text-red-500 btn btn-ghost btn-sm justify-start"}
            onClick={() => setMenuOpen(false)}
          >
            <IoIosHome /> Home
          </NavLink>

          <NavLink 
            to="/TotalCard" 
            className={({ isActive }) => isActive ? "bg-purple-800 text-white btn btn-sm justify-start" : "text-red-500 btn btn-ghost btn-sm justify-start"}
            onClick={() => setMenuOpen(false)}
          >
            <MdAccessTime /> TimeLine
          </NavLink>

          <NavLink 
            to="/stats" 
            className={({ isActive }) => isActive ? "bg-purple-800 text-white btn btn-sm justify-start" : "text-red-500 btn btn-ghost btn-sm justify-start"}
            onClick={() => setMenuOpen(false)}
          >
            <MdAutoGraph /> Stats
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;