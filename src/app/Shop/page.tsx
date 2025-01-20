'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Rectangle from '../../../public/Rectangle.png'
import { client } from '@/sanity/lib/client'
import { IoIosArrowForward } from "react-icons/io";
import { BsFillGridFill } from "react-icons/bs";
import { BsViewList } from "react-icons/bs";
import Card1 from '../components/Card1';
import { GrTrophy } from "react-icons/gr";
import Footer from '../components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


interface Data{

    id:number,
    imag:any ,
    name:string,
    category:string,
    price:string,
    
}



const qury=`*[_type=='product'] | order(_createdAt desc)[0...8]{
    _id,name,category,
      price,
      "image":image.asset->url
  }`
  
    const data:Data[] = await client.fetch(qury)

// const data:Data[]=[
//     {
//         id:1,
//         imag :'/a1.png',
//         heading:'Syltherine',
//         description:'Stylish cafe chair',
//         price1a:'Rp 2.500.000',
//         price1b:'Rp 3.500.000'
//       },
//       {id:2,
//         imag :'/b2.png',
//         heading:'Cake',
//         description:'Stylish cafe chair',
//         price1a:'Rp 2.500.000',
//         price1b:'Rp 3.500.000'},
//       {id:3,
//         imag :'/c3.png',
//         heading:'Lays',
//         description:'Stylish cafe chair',
//         price1a:'Rp 2.500.000',
//         price1b:'Rp 3.500.000'},
//         {id:4,
//             imag :'/d4.png',
//             heading:'haya',
//             description:'Stylish cafe chair',
//             price1a:'Rp 2.500.000',
//             price1b:'Rp 3.500.000'},
//             {id:5,
//               imag :'/d4.png',
//               heading:'Zip',
//               description:'Stylish cafe chair',
//               price1a:'Rp 2.500.000',
//               price1b:'Rp 3.500.000'},
//               {id:6,
//                 imag :'/d4.png',
//                 heading:'Hero',
//                 description:'Stylish cafe chair',
//                 price1a:'Rp 2.500.000',
//                 price1b:'Rp 3.500.000'},
//                 {id:7,
//                   imag :'/d4.png',
//                   heading:'Foodie',
//                   description:'Stylish cafe chair',
//                   price1a:'Rp 2.500.000',
//                   price1b:'Rp 3.500.000'},
//                   {id:8,
//                     imag :'/d4.png',
//                     heading:'Lunch',
//                     description:'Stylish cafe chair',
//                     price1a:'Rp 2.500.000',
//                     price1b:'Rp 3.500.000'},
//                     {
//                     id:9,
//                     imag :'/a1.png',
//                     heading:'Syltherine',
//                     description:'Stylish cafe chair',
//                     price1a:'Rp 2.500.000',
//                     price1b:'Rp 3.500.000'
//                   },
//                   {id:10,
//                     imag :'/b2.png',
//                     heading:'Cake',
//                     description:'Stylish cafe chair',
//                     price1a:'Rp 2.500.000',
//                     price1b:'Rp 3.500.000'},
//                   {id:11,
//                     imag :'/c3.png',
//                     heading:'Lays',
//                     description:'Stylish cafe chair',
//                     price1a:'Rp 2.500.000',
//                     price1b:'Rp 3.500.000'},
//                     {id:12,
//                         imag :'/d4.png',
//                         heading:'haya',
//                         description:'Stylish cafe chair',
//                         price1a:'Rp 2.500.000',
//                         price1b:'Rp 3.500.000'},
//                         {id:13,
//                           imag :'/d4.png',
//                           heading:'Zip',
//                           description:'Stylish cafe chair',
//                           price1a:'Rp 2.500.000',
//                           price1b:'Rp 3.500.000'},
//                           {id:14,
//                             imag :'/d4.png',
//                             heading:'Hero',
//                             description:'Stylish cafe chair',
//                             price1a:'Rp 2.500.000',
//                             price1b:'Rp 3.500.000'},
//                             {id:15,
//                               imag :'/d4.png',
//                               heading:'Foodie',
//                               description:'Stylish cafe chair',
//                               price1a:'Rp 2.500.000',
//                               price1b:'Rp 3.500.000'},
//                               {id:16,
//                                 imag :'/d4.png',
//                                 heading:'Lunch',
//                                 description:'Stylish cafe chair',
//                                 price1a:'Rp 2.500.000',
//                                 price1b:'Rp 3.500.000'}
// ]








const page = () => {
  
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
     





    return (
    <>
    <div className='w-[100%] h-screen'>

        {/* navbar */}
        <Navbar></Navbar>
        {/* hero section  */}
        <div className='w-[100%] h-[190px] md:h-[350px] relative'>
            <div className='w-[100%] h-[190px] md:h-[350px] absolute bg-cover'>
                <Image src={Rectangle} alt='sa' width={1000} height={350} className='w-[100%] h-[190px] md:h-[350px]' />    
                    
            </div>
            <div className='absolute  w-[100%] h-[190px] md:h-[350px] flex flex-col justify-center items-center'>
                    <h1 className='text-center text-[25px] md:text-[40px] font-bold leading-[30px] md:leading-[68px]'>Shop</h1>
                    <div className='flex gap-2 mt-[1px]'>
                    <span className=' text-[14px] md:text-[16px] leading-[14px] md:leading-[24px] font-semibold'>Home </span>
                    <span><IoIosArrowForward className='text-[12px] md:text-[14px]  mt-[2px] md:mt-[5px]' /></span>
                    <span className='md:font-light text-[14px] md:text-[16px] leading-[14px] md:leading-[24px]'>Shop</span>
                    </div>
                    

                </div>
        
        </div>  

        <div className='hidden md:block w-[100%] h-[90px] bg-[#F9F1E7] py-1'>
            <div className='w-[85%] m-auto py-6 mt-4'>
                <div className='flex justify-between'>
                    <div className='flex gap-5'>
                        <h1 className='text-[20px] font-normal leading-[30px
                        ]'>Filter</h1>
                        <BsFillGridFill className='w-[28px] h-[28px]' />
                        <BsViewList className='w-[28px] h-[28px]'/>
                        <div className='w-[0px] border-2 border-[#9F9F9F] h-[30px]'>
                        </div>
                        <h1 className=' font-normal text-[16px] leading-[24px]'>Showing 1–16 of 32 results</h1>
                        
                    </div>
                    <div className='flex justify-between gap-5'>
                       <div className='flex justify-between gap-2'>
                            <h1 className='font-normal text-[20px] leading-[30px]'>Show</h1>
                            <h1 className='bg-white text-gray-300 px-1 text-[20px]'>16</h1>  
                        </div>

                        <div className='flex justify-between gap-2'>
                            <h1 className='font-normal text-[20px] leading-[30px]'>Short by</h1>
                            <h1 className='bg-white text-gray-300 px-1 text-[20px]'>Defaults</h1>  
                        </div> 
                          
                    </div>

                </div>

            </div>

        </div>

{/* hero section end */}


{/* card section start */}

<div className='mt-10 w-[100%] h-auto '>

<div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
      </Slider>
    </div>    

        <div className='mt-2 w-[85%] h-auto m-auto'>
            <div className='grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-4  gap-y-[350px]'>
                {
                    data.map((ele)=>{
                        return <Card1 key={ele.id} data={ele}/>
                    })
                }

            </div>

             <div className='w-[100%] h-[90px]  mt-[350px]'>
                <div className='flex justify-center items-baseline gap-2 md:gap-6 w-[392px] h-[90px] m-auto '>
                    <h1 className='rounded-[10px] bg-[#B88E2F] px-3 py-1  md:px-5 md:py-2 text-center text-white text-[16px] md:text-[20px] font-normal leading-[30px]'>1</h1>
                    <h1 className='rounded-[10px] bg-[#F9F1E7] px-3 py-1  md:px-5 md:py-2 text-center text-[16px] md:text-[20px] font-normal leading-[30px]'>2</h1>
                    <h1 className='rounded-[10px] bg-[#F9F1E7] px-3 py-1  md:px-5 md:py-2 text-center text-[16px] md:text-[20px] font-normal leading-[30px]'>3</h1>
                    <h1 className='rounded-[10px] bg-[#F9F1E7] px-3 py-1  md:px-5 md:py-2 text-center text-[16px] md:text-[20px] font-normal leading-[30px]'>Next</h1>
                </div>

            </div> 
        </div>

        
            



</div>

{/* wininng section start */}

<div className='bg-[#FAF3EA] w-[100%] h-[250px] lg:h-[270px] flex items-center mt-10 '>
              <div className='grid grid-cols-1 md:grid-cols-4 justify-center items-center w-[90%] md:h-[60px] lg:[70px]  m-auto'>
                    {/* div 1 */}
                    <div className='flex justify-center mt-6  gap-2'>
                        <GrTrophy className='w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[50px] lg:h-[50px]'/>
                        <div className='flex flex-col gap-1'>
                            <h1 className='text-[16px] md:text-[16px] font-semibold leading-[20px] md:leading-[20px] text-[#242424]'>Hight Quality</h1>
                            <h1 className='text-[12px] md:text-[12px] font-medium leading-[2px] md:leading-[15px] text-[#898989]'>crafted from top materials</h1>
                        </div>
                    </div>
                    {/* div 1 */}
                    {/* div 2 */}
                    <div className='flex justify-center mt-6  gap-2'>
                        <GrTrophy className='w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[50px] lg:h-[50px]'/>
                        <div className='flex flex-col gap-1'>
                            <h1 className='text-[16px] md:text-[16px] font-semibold leading-[20px] md:leading-[20px] text-[#242424]'>Warranty Production</h1>
                            <h1 className='text-[12px] md:text-[12px] font-medium leading-[2px] md:leading-[15px] text-[#898989]'>Over 2 years</h1>
                        </div>
                    </div>
                    {/* div 2 */}
                    {/* div 3 */}
                    <div className='flex justify-center mt-6  gap-2'>
                        <GrTrophy className='w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[50px] lg:h-[50px]'/>
                        <div className='flex flex-col gap-1'>
                            <h1 className='text-[16px] md:text-[16px] font-semibold leading-[20px] md:leading-[20px] text-[#242424]'>Free Shipping</h1>
                            <h1 className='text-[12px] md:text-[12px] font-medium leading-[2px] md:leading-[15px] text-[#898989]'>Order Over 150$</h1>
                        </div>
                    </div>
                    {/* div 3 */}
                    {/* div 4 */}
                    <div className='flex justify-center mt-6  gap-2'>
                        <GrTrophy className='w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[50px] lg:h-[50px]'/>
                        <div className='flex flex-col gap-1'>
                            <h1 className='text-[16px] md:text-[16px] font-semibold leading-[20px] md:leading-[20px] text-[#242424]'>24/7 Support</h1>
                            <h1 className='text-[12px] md:text-[12px] font-medium leading-[2px] md:leading-[15px] text-[#898989]'>Dedicated support</h1>
                        </div>
                    </div>
                    {/* div 4 */}
                </div>  

</div>



{/* wininng section end */}

{/* footer section start */}


<Footer></Footer>

{/* footer section end */}



    </div>
    </>
  )
}

export default page
