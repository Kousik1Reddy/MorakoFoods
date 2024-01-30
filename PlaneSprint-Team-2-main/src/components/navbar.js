import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {NavLink} from 'react-router-dom';
import top_logo from "../assets/top_logo.svg";


function Navbar() {
    const navlinks = [
        {
          title: "SimpTable",
          link: "/simptable",
        },
        {
          title: "Cusines",
          link: "/cusines",
        },
        {
          title: "Restaurants",
          link: "/restaurants",
        },
        {
          title: "Login",
          link: "/login",
        },
      ];
    
      const [open, setOpen] = useState(false);
      
      const handleMenu = () => {
        setOpen((prev) => !prev);
      };
  return (
    <>
      <div className="nav flex px-5 justify-between py-2 md:px-8 xl:px-16 w-auto items-center bg-orange-200">
        <div className="left cursor-pointer">
          <NavLink to="/"><img className="w-3/4 md:w-auto " src={top_logo} alt="" /></NavLink>
        </div>

        <div>
        <div className="right hidden md:block text-sm">
          <div className="ml-10 flex items-baseline space-x-16">
        
              <NavLink
                to="/simptable"
                className="py-2 px-8 text-white rounded-md bg-[#F48A00] font-semibold"
              >
                SimpTable
              </NavLink>
              <NavLink
                to="/cusines"
                className=""
              >
                Cusines
              </NavLink>
              <NavLink
                to="/restaurants"
                className=""
              >
                Restaurants
              </NavLink>
              <NavLink
                to="/signup"
                className="py-2 px-8 text-white rounded-md bg-[#F48A00] font-semibold"
              >
                Login
              </NavLink>
          </div>

        </div>
        {/* Hamburger Buttons */}
        <div className=" flex md:hidden">
          <button type="button" onClick={handleMenu} className="flex items-center justify-center p-2 rounded-md text-black">
            <span className="sr-only">Open Main Menu</span>
            {open === true ? <FaTimes/> : <FaBars/>}
          </button>
        </div>
        </div>
      </div>
        
        {/* Mobile Menu */}
        {open ? (
          <div className="md:hidden">
            <div className=" px-2 pt-2 pb-3 space-y-1 sm:px-3 text-right bg-gray-100">
              {navlinks.map((link,index) =>(
                <NavLink
                className="text-black hover:text-gray-800 block px-3 py-2 font-medium"
                key={index}
                to={link.link}
              >
                {link.title}
              </NavLink>
              ))}
            </div>
          </div>
        ) : null}
    </>
  );
}

export default Navbar