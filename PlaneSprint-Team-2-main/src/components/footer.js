import React from "react";
import foologo from "../assets/bot_logo.svg";
import mailicon from "../assets/mailicon.svg";
import callicon from "../assets/callicon.svg";

function Footer() {
  return (
    <>
      <div className="footer bg-[#F48A00] text-white mt-10 px-5 py-12 md:hidden">
        <div className="logo">
          <img className="w-36" src={foologo} alt="" />
          <p className="text-xs w-3/4 my-4">
                You favourite food delivered directly
                to your home with in minutes...
          </p>
        </div>
        <div className="det"></div>
        <div className="foot">
          <div className="space-y-1 mt-8">
            <h2 className="text-xl font-medium underline-offset-8 cursor-pointer">
              Pages
            </h2>
            <ul className="manu text-sm space-y-4 py-2">
              <li className="cursor-pointer">SimpTable</li>
              <li className="cursor-pointer">Cuisines</li>
              <li className="cursor-pointer">Restaurants</li>
              <li className="cursor-pointer">Login</li>
            </ul>
          </div>
          <div className="space-y-1 my-8">
            <h2 className="text-xl font-medium underline-offset-8 cursor-pointer">
              Contact
            </h2>
            <ul className="manu text-sm space-y-5 py-3">
              <li className="cursor-pointer flex space-x-3">
                <img className="w-5" src={mailicon} alt="" />
                <p className="text-sm">support@morakofood.com</p>
              </li>
              <li className="cursor-pointer flex space-x-3">
                <img className="w-5" src={callicon} alt="" />
                <p className="text-sm">+91 99999 00000</p>
              </li>
            </ul>
          </div>
          <hr />
          <p className="text-xs text-[#858585] text-center my-4">
            © 2023 | Created by All Eaters Team
          </p>
        </div>
      </div>

      <div className="footer bg-[#F48A00] text-white mt-10 px-5 py-12 hidden md:block md:px-8 xl:px-16">
        <div className="grid grid-cols-3">
          <div className="logo">
            <img className="w-36" src={foologo} alt="" />
            <p className="text-xs w-3/4 my-4">
                    You favourite food delivered directly
                    to your home with in minutes...
            </p>
          </div>

          <div className="space-y-1">
            <h2 className="text-xl font-medium underline-offset-8 cursor-pointer">
              Resources
            </h2>
            <ul className="manu text-sm space-y-4 py-2">
              <li className="cursor-pointer">SimpTable</li>
              <li className="cursor-pointer">Cuisines</li>
              <li className="cursor-pointer">Restaurants</li>
              <li className="cursor-pointer">Login</li>
            </ul>
          </div>

          <div className="space-y-1">
            <h2 className="text-xl font-medium underline-offset-8 cursor-pointer">
              Contact
            </h2>
            <ul className="manu text-sm space-y-5 py-3">
              <li className="cursor-pointer flex space-x-3">
                <img className="w-5" src={mailicon} alt="" />
                <p className="text-sm">support@morakofood.com</p>
              </li>
              <li className="cursor-pointer flex space-x-3">
                <img className="w-5" src={callicon} alt="" />
                <p className="text-sm">+91 99999 00000</p>
              </li>
            </ul>
          </div>
        </div>
        <hr className="mt-6 border-white-400 "/>
          <p className="text-xs text-white-400 text-center my-4">
            © 2023 | Create by All Eaters Team
          </p>
      </div>
    </>
  );
}

export default Footer;
