'use client'
import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image';



interface Data{
    id:number;
    image:string;
    name:string;
    category:string;
    price:number;
    quantity:number;
   
}

interface CardProp{
    data:Data
}



const Card1:React.FC<CardProp> = ({data}:CardProp) => {
  


  
  

  return (
    <div className='w-[240px] h-[180px] shadow-sm'>
      <Image src={urlFor(data.image).url()} alt="he" width={240}height={260} className='w-[285px] h-[300px]'/>
      <div className='grid grid-cols-1 text-center border rounded-sm  p-3 bg-gray-100 w-[100%] h-[110%] '>
            <h1 className='text-[#3A3A3A]  font-bold text-[16px] '>{data.name}</h1>
            <p className=' font-medium text-[16px] text-[#898989] '>{data.category}</p>
            <h1 className='font-semibold text-[14px] font-serif md:text-[16px] leading-[30px] text-red-700'>{(data.price).toLocaleString()}</h1> 
            <div className='w-[80%] h-[30px] m-auto hover:bg-[#e7b746] translate-x-2 hover:text-white mb-1 rounded-sm border bg-[#B88E2F]'>
            <button className='text-center font-semibold py-[2px] px-4 text-[16px]   text-black'>Buy Now</button>
            </div>
      </div>
     

    </div>
   
  )
}

export default Card1



