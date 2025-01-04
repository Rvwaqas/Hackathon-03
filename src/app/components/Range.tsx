import React from 'react'
import Image from 'next/image'
import living from '../assert/living.png'
import mask from '../assert/mask.png'
import badroom from '../assert/badroom.png'
const Range = () => {
  return (
    <div className='px-[20px] w-[80%] h-[685px] m-auto  md:mt-[90px] '>
        <div className='text-center pt-[30px]'>
                <h1 className=' text-[20px] font-bold md:text-[32px] text-[#333333] md:leading-[34px] '>Browse The Range</h1>
                <p className='text-base mt-2 font-normal md:text-[20px] md:leading-[30px] text-[#666666]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='mt-[10px] flex justify-center flex-col md:flex-row md:justify-between'>
            <div className='mt-4'>
                    <Image src={mask} width={380} height={480} alt='help' className='w-[380px] h-[480px] '/>
                    <h1 className='text-[22px] text-center mt-2 font-bold'>Dinning</h1>
            </div>
            <div className='mt-4'>
                    <Image src={living} width={380} height={480} alt='help' className='w-[380px] h-[480px] '/>
                    <h1 className='text-[22px] text-center mt-2 font-bold'>Living</h1>
            </div>
            <div className='mt-4'>
                    <Image src={badroom} width={380} height={480} alt='help' className='w-[380px] h-[480px]'/>
                    <h1 className='text-[22px] text-center mt-2 font-bold'>Badroom</h1>
            </div>
            
        </div>
      
    </div>
  )
}

export default Range
