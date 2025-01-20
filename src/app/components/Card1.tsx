'use client'
import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image';



interface Data{
    id:number;
    image:any;
    name:string;
    category:string;
    price:string;
   
}

interface CardProp{
    data:Data
}



const Card1:React.FC<CardProp> = ({data}) => {
  
  const {image,name,category,price}=data
    return (
    <div className='w-[240px] h-[100px]'>
      <Image src={urlFor(data.image).url()} alt="he" width={240}height={260} className='w-[285px] h-[300px]'/>
      <div className='px-2 pt-2 bg-gray-100'>
            <h1 className='text-[#3A3A3A] text-left font-semibold text-[22px] leading-[25px]'>{name}</h1>
            <p className='text-left font-medium text-[16px] text-[#898989] leading-[24px]'>{category}</p>
            <div className='flex w-[220px] h-[30px] justify-between '>
                <h1 className='font-semibold text-[20px] leading-[30px] text-[#3A3A3A]'>{price}</h1>
                {/* <p className='font-normal py-1 text-[16px] leading-[24px] text-[#B0B0B0]'>{price1b}</p> */}
            </div>
      </div>
   

    </div>
  )
}

export default Card1
