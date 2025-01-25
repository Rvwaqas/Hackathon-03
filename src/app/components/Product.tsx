'use client'
import React from 'react'
import Card1 from './Card1';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';



interface Data{
    id:number;
    image:any;
    category:string;
    name:string
    price:number;
    quantity:number;
    slug:string;
    
}


const Product = async () => {
  
  
  const qury=`*[_type=='product'] | order(_createdAt desc)[0...8]{
    "id":_id,name,category,
      price,"slug":slug.current,
      "image":image.asset->url,quantity
  }`

  const data:[]=await client.fetch(qury);
  console.log(data)
 
  
  return (
    <>    
    <div className=' text-center w-[80%] h-[1200px] md:h-[1084px] mt-[1100px] m-auto  md:mt-[50px]'>
        <h1 className=' text-center font-bold text-[12px] md:text-[36px] leading-[48px]'>Our Products</h1>
          <div className="w-[100%]  m-auto flex flex-col sm:grid items-center justify-center  gap-y-[350px]  mt-8 sm:grid-cols-2 lg:grid-cols-4  "> 
          {
            data.map((ele:Data)=>{
                  return(
                    <Link href={`Singleproduct/${ele.slug}`}>
                <Card1 data={ele}/>
                </Link>

            )})
                
          }

          
          </div>
              
          <div className='w-[35%] md:w-[20%] m-auto h-[45px] md:h-[52px] border border-[#B88E2F]   mt-[330px]'>
                <Link href={'/Shop'} > <h1 className='py-3 text-[14px] md:text-[16px] font-semibold text-[#B88E2F]'>Show Now</h1></Link> 
          </div>
        
                


    </div>
    </>
  
  )

    }
export default Product


    