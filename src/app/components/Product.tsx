'use client'
import React from 'react'
import Card1 from './Card1';
import Image from 'next/image';

interface Data{
    id:number;
    imag:string;
    heading:string;
    description:string;
    price1a:string;
    price1b:string;
}


const data:Data[]=[
    {
        id:1,
        imag :'/a1.png',
        heading:'Syltherine',
        description:'Stylish cafe chair',
        price1a:'Rp 2.500.000',
        price1b:'Rp 3.500.000'
      },
      {id:2,
        imag :'/b2.png',
        heading:'Syltherine',
        description:'Stylish cafe chair',
        price1a:'Rp 2.500.000',
        price1b:'Rp 3.500.000'},
      {id:3,
        imag :'/c3.png',
        heading:'Syltherine',
        description:'Stylish cafe chair',
        price1a:'Rp 2.500.000',
        price1b:'Rp 3.500.000'},
        {id:4,
            imag :'/d4.png',
            heading:'Syltherine',
            description:'Stylish cafe chair',
            price1a:'Rp 2.500.000',
            price1b:'Rp 3.500.000'},
            {id:5,
              imag :'/d4.png',
              heading:'Syltherine',
              description:'Stylish cafe chair',
              price1a:'Rp 2.500.000',
              price1b:'Rp 3.500.000'},
              {id:6,
                imag :'/d4.png',
                heading:'Syltherine',
                description:'Stylish cafe chair',
                price1a:'Rp 2.500.000',
                price1b:'Rp 3.500.000'},
                {id:7,
                  imag :'/d4.png',
                  heading:'Syltherine',
                  description:'Stylish cafe chair',
                  price1a:'Rp 2.500.000',
                  price1b:'Rp 3.500.000'},
                  {id:8,
                    imag :'/d4.png',
                    heading:'Syltherine',
                    description:'Stylish cafe chair',
                    price1a:'Rp 2.500.000',
                    price1b:'Rp 3.500.000'},
]





const Product = () => {
  return (
    <div className='w-[679px]  px-[20px] h-auto md:w-[1236px] md:h-[1084px] md:m-auto  md:mt-[10px]'>
        <h1 className='text-center font-bold text-[40px] leading-[48px]'>Our Products</h1>


          <div className="grid grid-cols-1 gap-y-[350px]  mt-8 sm:grid-cols-2 lg:grid-cols-4 "> 
                {
            data.map((ele)=>{
                   return <Card1 key={ele.id} data={ele}/> 
            })
                }
          </div>
        



    {/* <div className="grid grid-cols-1  mt-8 sm:grid-cols-2 lg:grid-cols-4"> 
            <div className='w-[280px] h-[48px]'>
      <Image src={"/a.png"} alt='help' width={12} height={12} className='w-[280px] h-[300]'/>
      <div className='px-2 pt-2 bg-gray-100'>
            <h1 className='text-[#3A3A3A] font-semibold text-[22px] leading-[25px]'>Grifo</h1>
            <p className='font-medium text-[14px] text-[#898989] leading-[24px]'>Night lamp</p>
            <div className='flex justify-between '>
                <h1 className='font-semibold text-[20px] leading-[30px] text-[#3A3A3A]'>Rp 1.500.000</h1>
                <p className='font-normal text-[16px] leading-[24px] text-[#B0B0B0]'>Rp 3.500.000</p>
            </div>
      </div>
   

    </div>

    <div className='w-[280px] h-[48px]'>
      <Image src={"/b.png"} alt='help' width={12} height={12} className='w-[280px] h-[300]'/>
      <div className='px-2 pt-2 bg-gray-100'>
            <h1 className='text-[#3A3A3A] font-semibold text-[22px] leading-[25px]'>Muggo</h1>
            <p className='font-medium text-[14px] text-[#898989] leading-[24px]'>Night lamp</p>
            <div className='flex justify-between '>
                <h1 className='font-semibold text-[20px] leading-[30px] text-[#3A3A3A]'>Rp 1.500.000</h1>
                <p className='font-normal text-[16px] leading-[24px] text-[#B0B0B0]'>Rp 3.500.000</p>
            </div>
      </div>
   </div>
      <div className='w-[280px] h-[48px]'>
      <Image src={"/c.png"} alt='help' width={12} height={12} className='w-[280px] h-[300]'/>
      <div className='px-2 pt-2 bg-gray-100'>
            <h1 className='text-[#3A3A3A] font-semibold text-[22px] leading-[25px]'>Pingky</h1>
            <p className='font-medium text-[14px] text-[#898989] leading-[24px]'>Cute bed set</p>
            <div className='flex justify-between '>
                <h1 className='font-semibold text-[20px] leading-[30px] text-[#3A3A3A]'>Rp 1.500.000</h1>
                <p className='font-normal text-[16px] leading-[24px] text-[#B0B0B0]'>Rp 3.500.000</p>
            </div>
      </div>

    </div>
    <div className='w-[280px] h-[48px]'>
      <Image src={"/d.png"} alt='help' width={12} height={12} className='w-[280px] h-[300]'/>
      <div className='px-2 pt-2 bg-gray-100'>
            <h1 className='text-[#3A3A3A] font-semibold text-[22px] leading-[25px]'>Potty</h1>
            <p className='font-medium text-[14px] text-[#898989] leading-[24px]'>Minimalist flower pot</p>
            <div className='flex justify-between '>
                <h1 className='font-semibold text-[20px] leading-[30px] text-[#3A3A3A]'>Rp 1.500.000</h1>
                <p className='font-normal text-[16px] leading-[24px] text-[#B0B0B0]'>Rp 3.500.000</p>
            </div>
      </div>

    </div> */}

{/* 

            </div> */}
    </div>   
    
      )
}

export default Product
