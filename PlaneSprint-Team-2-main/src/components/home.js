import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Restaurants from "./restaurants";
import TopRated from "./top_rated";
import bikef from "../assets/bikef.svg";
import hotfood from "../assets/hotfood.svg";
import download from "../assets/download.svg";
import banner from "../assets/banner.svg";
import {NavLink} from 'react-router-dom';

function Home() {
  return (
    <>
      <Navbar />
      <div className="px-5 md:px-8 xl:px-16 flex flex-col-reverse space-y-10 md:flex-row md:justify-between md:items-center my-10">
        <div className="left mt-5">
            <div className="feat space-x-2 text-xs flex-col space-y-8">
                <div className="flex md:space-x-4 justify-center md:justify-start">
                <div className="bg-[#FFF9F2] font-medium text-[.7rem] py-2 px-2 rounded-full flex space-x-1 items-center space">
                    💨 &nbsp; Fastest Delivery &nbsp;{" "}
                    <img src={bikef} alt="" className="h-3/4" />
                </div>
                <div className="bg-[#FFF9F2] font-medium text-[.7rem] py-2 px-2 rounded-full flex space-x-1 items-center">
                    🔥 &nbsp; Hotter than your... &nbsp;{" "}
                    <img src={hotfood} alt="" className="h-3/4" />
                </div>
                </div>
                <div className=" flex-col flex items-center justify-center md:justify-start md:items-start space-y-12">
                <h1 className="text-4xl font-bold leading-normal text-center md:flex-col md:flex md:space-y-10 md:text-6xl md:w-3/4 md:text-start">
                    Your favourite food, delivered to you
                <p className="font-medium text-xs text-center md:text-start mt-2 md:mt-4 md:text-base">
                    Food, Drinks, Snacks and Instant food to order from. Hello nithin
                </p>
                </h1>
                <NavLink to="/signup"><button className="px-8 py-4 font-bold text-md bg-[#F48A00] text-white rounded-full">
                    Order Food
                </button></NavLink>
                </div>
                <div className="down flex-col items-center justify-center flex space-y-3 md:items-start">
                <span className="align-center">Check us out on.</span>
                <img src={download} className="md:h-[4rem]" alt="" />
                </div>
            </div>
        </div>
        <div className="right flex flex-col justify-center items-center">
          <img src={banner} className="md:w-[44rem]" alt="" />
        </div>
      </div>
      <Restaurants/>
      <TopRated/>
      <Footer/>
    </>
  );
}

export default Home;
