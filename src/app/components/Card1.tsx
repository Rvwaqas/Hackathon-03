'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image';



interface Data{
    id:number;
    image:any;
    name:string;
    category:string;
    price:number;
    quantity:number;
   
}

interface CardProp{
    data:Data
}



const Card1:React.FC<CardProp> = ({data}:CardProp) => {
  

  

  const handleClick=(data:Data)=>{

    const cart= JSON.parse(localStorage.getItem('cart') || '{}');
    if(cart[data.id]){
        cart[data.id]={
          ...cart[data.id], quantity:cart[data.id].quantity+1
        } 
    }else{
      cart[data.id]={...data,quantity:1}
    }
      localStorage.setItem('cart',JSON.stringify(cart))
  }
  

  const {image,name,category,price,id,quantity}=data;
  

  return (
    <div className='w-[240px] h-[100px]'>
      <Image src={urlFor(data.image).url()} alt="he" width={240}height={260} className='w-[285px] h-[300px]'/>
      <div className='px-2 pt-2 bg-gray-100'>
            <h1 className='text-[#3A3A3A] text-left font-bold text-[16px] '>{data.name}</h1>
            <p className='text-left font-medium text-[16px] text-[#898989] '>{data.category}</p>
            <div className='flex w-[220px] h-[30px] justify-start '>
                <h1 className='font-semibold text-[20px] leading-[30px] text-[#3A3A3A]'>{data.price}</h1>
              {/* <button className='font-normal py-1 px-4 text-[16px]   text-[#B0B0B0]'>Add to Cart</button>  */}
            </div>
      </div>
   

    </div>
  )
}

export default Card1
