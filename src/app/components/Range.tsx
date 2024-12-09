import React from 'react'
import Image from 'next/image'
import living from '../assert/living.png'
import mask from '../assert/mask.png'
import badroom from '../assert/badroom.png'
const Range = () => {
  return (
    <div className='w-[679px] px-[20px] h-auto md:w-[1183px] md:h-[685px] md:m-auto  md:mt-[-80px] '>
        <div className='flex flex-col md:justify-center md:items-center pt-[30px]'>
                <h1 className='text-base font-bold text-[35px] text-[#333333] md:leading-[30px] '>Browse The Range</h1>
                <p className='text-base mt-2 font-normal md:text-[18px] md:leading-[40px] text-[#666666]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='flex flex-wrap justify-between space-x-2 '>
            <div className='mt-4'>
                    <Image src={mask} width={380} height={480} alt='help' className='w-[360px] h-[460px] '/>
                    <h1 className='text-[22px] text-center mt-2 font-bold'>Dinning</h1>
            </div>
            <div className='mt-4'>
                    <Image src={living} width={380} height={480} alt='help' className='w-[360px] h-[460px] '/>
                    <h1 className='text-[22px] text-center mt-2 font-bold'>Living</h1>
            </div>
            <div className='mt-4'>
                    <Image src={badroom} width={380} height={480} alt='help' className='w-[360px] h-[460px] '/>
                    <h1 className='text-[22px] text-center mt-2 font-bold'>Badroom</h1>
            </div>
            
        </div>
      
    </div>
  )
}

export default Range
