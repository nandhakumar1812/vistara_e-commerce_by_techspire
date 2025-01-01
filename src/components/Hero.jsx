import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
        {/*Left side of Hero Section */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-5 sm:py-2'>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium font-semibold text-sm md:text-base'>OUR BESTSELLERS</p>
                </div>
                <h1 className='prata-regular text-3xl sm:py-4 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                </div>
            </div>
        </div>
        {/* Hero Right side */}
        <img src={assets.hero_men_image_3} className="w-full sm:w-1/2" alt="" />
    </div>
  )
}

export default Hero