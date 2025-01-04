'use client'
import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='w-[100%] h-auto  md:w-[100%] md:h-[716.8] relative'>
        <Image src={'/heropi.png'} alt='help' width={1000} height={500} className='object-cover bg-cover h-auto w-[100%] md:h-[500px]  '/>
      <div className='absolute top-10 right-10 md:top-[12%] md:right-20 w-[250px] h-[200px] md:w-[500px] md:h-[343px] px-3 md:px-6 py-3 md:py-10 bg-[#FFF3E3] md:block'>
        <h1 className='text-[10px] md:text-[16px] font-semibold leading-[12px] md:leading-[15px]  tracking-[3px]'> NEW ARRIVAL</h1>
        <h1 className=' pt-3 md:pt-3 text-[18px] leading-[20px]  md:text-[52px] font-bold  md:leading-[55px] text-[#B88E2F]'>Discover Our <br /> New Collection</h1>
       
         <p className='mt-2 text-[9px] md:text-[14px] leading-[12px]  md:leading-[20px] font-medium text-[#333333]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis</p>   
        <button className='bg-[#B88E2F] mt-6  md:mt-4 w-[100px] h-[30px] md:w-[180px] md:h-[50px]  text-[10px] md:text-[16px] font-bold leading-[24px] text-white'>BUY NOW</button>
      </div>
    </div>
  )
}

export default Hero
