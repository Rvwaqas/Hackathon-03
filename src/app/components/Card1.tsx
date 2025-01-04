'use client'
import React from 'react'
import Image from 'next/image'



interface Data{
    id:number;
    imag:string;
    heading:string;
    description:string;
    price1a:string;
    price1b:string;
}

interface CardProp{
    data:Data
}



const Card1:React.FC<CardProp> = ({data}) => {
  
  const {imag,heading,description,price1a,price1b}=data
    return (
    <div className='w-[240px] h-[100px]'>
      <Image src={imag} alt='help' width={240}height={260} className='w-[285px] h-[300px]'/>
      <div className='px-2 pt-2 bg-gray-100'>
            <h1 className='text-[#3A3A3A] text-left font-semibold text-[22px] leading-[25px]'>{heading}</h1>
            <p className='text-left font-medium text-[16px] text-[#898989] leading-[24px]'>{description}</p>
            <div className='flex w-[220px] h-[30px] justify-between '>
                <h1 className='font-semibold text-[20px] leading-[30px] text-[#3A3A3A]'>{price1a}</h1>
                <p className='font-normal py-1 text-[16px] leading-[24px] text-[#B0B0B0]'>{price1b}</p>
            </div>
      </div>
   

    </div>
  )
}

export default Card1
