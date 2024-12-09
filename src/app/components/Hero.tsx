'use client'
import React from 'react'
import heropi from '../assert/heropi.png'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='w-[679px] h-auto  md:w-[1440px] md:h-[716.83px] relative'>
        <Image src={heropi} alt='help' width={1440} height={500} className='w-[679px] h-auto md:w-[1440px] md:h-[500px]  '/>
      <div className='absolute top-10 right-10 md:top-[12%] md:right-20 w-[250px] h-[200px] md:w-[500px] md:h-[343px] px-3 md:px-6 py-3 md:py-10 bg-white md:block'>
        <h1 className='text-[10px] md:text-[14px] font-semibold  tracking-[3px] leading-auto'> NEW ARRIVAL</h1>
        <h1 className='md:pt-5 text-[25px] md:text-[52px] font-semibold md:font-bold leading-10 md:leading-[45px] tracking-[0px] text-[#B88E2F]'>Discover Our</h1>
        <h1 className='md:pt-5 text-[25px] md:text-[52px] font-semibold md:font-bold leading-6 md:leading-[45px] tracking-[0px] text-[#B88E2F]'>New Collection</h1>
         <p className='text-[10px] md:text-[16px] leading-[15px]  md:leading-[20px] font-medium text-[#333333] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis'</p>   
        <button className='mt-6 w-[100px] h-[40px]  md:w-[200px] md:h-[50px] px-[30px] py-[5px] md:px-[60px] md:py-[10px]  bg-[#B88E2F] text-white text-center md:text-[14px] text-[8px] font-bold'>BUY NOW</button>
      </div>
    </div>
  )
}

export default Hero
