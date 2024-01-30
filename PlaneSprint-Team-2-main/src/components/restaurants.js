import React from "react";
import image from "../assets/img1.png";
import image2 from "../assets/img2.png";
import image3 from "../assets/img3.png";
import image4 from "../assets/img4.png";
import star from "../assets/star.svg";
import {NavLink} from 'react-router-dom';

function Restaurants() {
  return (
    <>
      <div className="px-5 md:px-8 xl:px-16 bg-[#FFF9F2] py-8 md:py-12 flex-col flex space-y-8">
        <h1 className="text-lg font-semibold text-center">Available restaurants in your area</h1>
        <div class="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-5 mt-6">
            <div
                className="first px-5 py-4 bg-cover bg-origin-border bg-no-repeat rounded-lg"
                style={{
                backgroundImage: `url(${image})`,
                }}
            >
                <div className="flex flex-col justify-between space-y-28 md:space-y-72">
                <div className="top text-sm">
                    <span className="flex-box items-center px-2 py-1 rounded-full bg-white bg-opacity-30 md:px-4 md:py-2 md:text-md">
                <span class="text-[#59DA1D] text-xs">●</span>
                &nbsp;
                <span className="text-white text-xs">Open</span>
                </span>
                </div>
                <div className="bot">
                    <h1 className="tex-md font-bold text-white md:text-2xl">Hyderbadi Biriyani</h1>
                    <p className="flex text-xs font-regular text-gray-400 md:text-base">
                    18 Min |&nbsp; <img src={star} alt="" />
                    &nbsp;4.2
                    </p>
                </div>
                </div>
            </div>
            <div
                className="first px-5 py-4 bg-cover bg-origin-border bg-no-repeat rounded-lg"
                style={{
                backgroundImage: `url(${image2})`,
                }}
            >
                <div className="flex flex-col justify-between space-y-28 md:space-y-72">
                <div className="top text-sm">
                    <span className="flex-box items-center px-2 py-1 rounded-full bg-white bg-opacity-30 md:px-4 md:py-2 md:text-md">
                <span class="text-[#59DA1D] text-xs">●</span>
                &nbsp;
                <span className="text-white text-xs">Open</span>
                </span>
                </div>
                <div className="bot">
                    <h1 className="tex-md font-bold text-white md:text-2xl">Zam Zam Shawarma</h1>
                    <p className="flex text-xs font-regular text-gray-400 md:text-base">
                    18 Min |&nbsp; <img src={star} alt="" />
                    &nbsp;4.2
                    </p>
                </div>
                </div>
            </div>
            <div
                className="first px-5 py-4 bg-cover bg-origin-border bg-no-repeat rounded-lg"
                style={{
                backgroundImage: `url(${image3})`,
                }}
            >
                <div className="flex flex-col justify-between space-y-28 md:space-y-72">
                <div className="top text-sm">
                    <span className="flex-box items-center px-2 py-1 rounded-full bg-white bg-opacity-30 md:px-4 md:py-2 md:text-md">
                <span class="text-[#59DA1D] text-xs">●</span>
                &nbsp;
                <span className="text-white text-xs">Open</span>
                </span>
                </div>
                <div className="bot">
                    <h1 className="tex-md font-bold text-white md:text-2xl">Bezathi <br/> Burgers</h1>
                    <p className="flex text-xs font-regular text-gray-400 md:text-base">
                    18 Min |&nbsp; <img src={star} alt="" />
                    &nbsp;4.2
                    </p>
                </div>
                </div>
            </div>
            <div
                className="first px-5 py-4 bg-cover bg-origin-border bg-no-repeat rounded-lg"
                style={{
                backgroundImage: `url(${image4})`,
                }}
            >
                <div className="flex flex-col justify-between space-y-28 md:space-y-72">
                <div className="top text-sm">
                    <span className="flex-box items-center px-2 py-1 rounded-full bg-white bg-opacity-30 md:px-4 md:py-2 md:text-md">
                <span class="text-[#59DA1D] text-xs">●</span>
                &nbsp;
                <span className="text-white text-xs">Open</span>
                </span>
                </div>
                <div className="bot">
                    <h1 className="tex-md font-bold text-white md:text-2xl">Papparazi Pizzas</h1>
                    <p className="flex text-xs font-regular text-gray-400 md:text-base">
                    18 Min |&nbsp; <img src={star} alt="" />
                    &nbsp;4.2
                    </p>
                </div>
                </div>
            </div>
        </div>
        <NavLink to="/signup"><button className="px-8 py-4 font-bold text-md bg-[#F48A00] m-auto text-white rounded-full">
                    Order Food
                </button></NavLink>
      </div>
    </>
  );
}

export default Restaurants;
