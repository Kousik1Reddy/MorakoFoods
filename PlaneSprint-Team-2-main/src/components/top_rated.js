import React from 'react'
import image from "../assets/img1.png";
import star from "../assets/star.svg";
import {NavLink} from 'react-router-dom';

function TopRated() {
  return (
    <>
        <div className="mt-8 px-5 md:px-8 xl:px-16 py-8 md:py-12 flex-col flex space-y-8">
            <h1 className="text-lg font-semibold text-center">Top rated Food</h1>
            <div class="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-5 mt-6">
                
                <div className="flex justify-stretch bg-[#FFF9F2] rounded-lg">
                    <div className="left p-16 bg-cover rounded-md" style={{
                    backgroundImage: `url(${image})`
                    }}>
                    </div>
                    <div className="right py-4 pl-4 pr-8 w-full space-y-4">
                        <div className='flex justify-between'>
                            <div className='left'>
                            <h1 className='text-lg font-semibold'>CHICKEN  Chicken Biriyani | Mini</h1>
                            <p className='text-sm text-gray-400'> Description here...</p>
                            </div>
                            <div className="right flex items-center space-x-2">
                            <span> 4.2</span><img src={star} alt="" />
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='left text-lg font-bold'>
                                ₹ 260
                            </div>
                            <div className="right">
                                <button className='py-1 px-4 bg-[#FA7126] text-white font-semibold rounded-full'> Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-stretch bg-[#FFF9F2] rounded-lg">
                    <div className="left p-16 bg-cover rounded-md" style={{
                    backgroundImage: `url(${image})`
                    }}>
                    </div>
                    <div className="right py-4 pl-4 pr-8 w-full space-y-4">
                        <div className='flex justify-between'>
                            <div className='left'>
                            <h1 className='text-lg font-semibold'>Chicken Biriyani | Mini</h1>
                            <p className='text-sm text-gray-400'> Description here...</p>
                            </div>
                            <div className="right flex items-center space-x-2">
                            <span> 4.2</span><img src={star} alt="" />
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='left text-lg font-bold'>
                                ₹ 260
                            </div>
                            <div className="right">
                                <button className='py-1 px-4 bg-[#FA7126] text-white font-semibold rounded-full'> Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-stretch bg-[#FFF9F2] rounded-lg">
                    <div className="left p-16 bg-cover rounded-md" style={{
                    backgroundImage: `url(${image})`
                    }}>
                    </div>
                    <div className="right py-4 pl-4 pr-8 w-full space-y-4">
                        <div className='flex justify-between'>
                            <div className='left'>
                            <h1 className='text-lg font-semibold'>Chicken Biriyani | Mini</h1>
                            <p className='text-sm text-gray-400'> Description here...</p>
                            </div>
                            <div className="right flex items-center space-x-2">
                            <span> 4.2</span><img src={star} alt="" />
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='left text-lg font-bold'>
                                ₹ 260
                            </div>
                            <div className="right">
                                <button className='py-1 px-4 bg-[#FA7126] text-white font-semibold rounded-full'> Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-stretch bg-[#FFF9F2] rounded-lg">
                    <div className="left p-16 bg-cover rounded-md" style={{
                    backgroundImage: `url(${image})`
                    }}>
                    </div>
                    <div className="right py-4 pl-4 pr-8 w-full space-y-4">
                        <div className='flex justify-between'>
                            <div className='left'>
                            <h1 className='text-lg font-semibold'>Chicken Biriyani | Mini</h1>
                            <p className='text-sm text-gray-400'> Description here...</p>
                            </div>
                            <div className="right flex items-center space-x-2">
                            <span> 4.2</span><img src={star} alt="" />
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='left text-lg font-bold'>
                                ₹ 260
                            </div>
                            <div className="right">
                                <button className='py-1 px-4 bg-[#FA7126] text-white font-semibold rounded-full'> Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <NavLink to="/signup"><button className="px-8 py-4 font-bold text-md bg-[#F48A00] text-white rounded-full">
                    Order Food
                </button></NavLink>
        
        </div>
    </>
  )
}

export default TopRated