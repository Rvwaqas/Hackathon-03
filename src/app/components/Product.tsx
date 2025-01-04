'use client'
import React from 'react'
import Card1 from './Card1';


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
        heading:'Cake',
        description:'Stylish cafe chair',
        price1a:'Rp 2.500.000',
        price1b:'Rp 3.500.000'},
      {id:3,
        imag :'/c3.png',
        heading:'Lays',
        description:'Stylish cafe chair',
        price1a:'Rp 2.500.000',
        price1b:'Rp 3.500.000'},
        {id:4,
            imag :'/d4.png',
            heading:'haya',
            description:'Stylish cafe chair',
            price1a:'Rp 2.500.000',
            price1b:'Rp 3.500.000'},
            {id:5,
              imag :'/chumma.png',
              heading:'Zip',
              description:'Stylish cafe chair',
              price1a:'Rp 2.500.000',
              price1b:'Rp 3.500.000'},
              {id:6,
                imag :'/halmet.png',
                heading:'Hero',
                description:'Stylish cafe chair',
                price1a:'Rp 2.500.000',
                price1b:'Rp 3.500.000'},
                {id:7,
                  imag :'/hand.png',
                  heading:'Foodie',
                  description:'Stylish cafe chair',
                  price1a:'Rp 2.500.000',
                  price1b:'Rp 3.500.000'},
                  {id:8,
                    imag :'/halwa.png',
                    heading:'Lunch',
                    description:'Stylish cafe chair',
                    price1a:'Rp 2.500.000',
                    price1b:'Rp 3.500.000'},
]





const Product = () => {
  return (
    <div className=' text-center w-[80%] h-[1200px] md:h-[1084px] mt-[1100px] m-auto  md:mt-[50px]'>
        <h1 className=' text-center font-bold text-[30px] md:text-[40px] leading-[48px]'>Our Products</h1>
          <div className="w-[100%]  m-auto flex flex-col sm:grid items-center justify-center  gap-y-[350px]  mt-8 sm:grid-cols-2 lg:grid-cols-4  "> 
                {
            data.map((ele)=>{
                   return <Card1 key={ele.id} data={ele}/> 
             })
                }
          </div>
          <div className='w-[35%] md:w-[20%] m-auto h-[45px] md:h-[52px] border border-[#B88E2F]   mt-[330px]'>
                 <h1 className='py-3 text-[14px] md:text-[16px] font-semibold text-[#B88E2F]'>Show Now</h1> 
          </div>
        
                


    </div>   
    
      )
}

export default Product
