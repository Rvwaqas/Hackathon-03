// 'use client'
// import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import Image from 'next/image'
// import { IoIosArrowForward } from "react-icons/io";
// import { GrTrophy } from "react-icons/gr";
// import { TiStar } from "react-icons/ti";
// import { FaStarHalf } from "react-icons/fa";
// import { FaAngleDown } from "react-icons/fa";
// import Link from 'next/link'
// const page = () => {
//   return (
//     <>
//     <div className='w-[100%] h-screen'>

//     {/* navbar */}
//     <Navbar></Navbar>
//     {/* hero section  */}
//     <div className='w-[100%] h-[190px] md:h-[300px] relative'>
//         <div className='w-[100%] h-[190px] md:h-[350px] absolute object-cover bg-cover'>
//             <Image src={'/Rectangle.png'} alt='sa' width={700} height={350} className='w-[100%] h-[190px] md:h-[350px]' />    
                
//         </div>
//         <div className='absolute  w-[100%] h-[190px] md:h-[350px] flex flex-col justify-center items-center'>
//                 <h1 className='text-center text-[25px] md:text-[40px] font-bold leading-[30px] md:leading-[68px]'>Product Comparison</h1>
//                 <div className='flex gap-2 mt-[1px]'>
//                 <span className=' text-[14px] md:text-[16px] leading-[14px] md:leading-[24px] font-semibold'>Home </span>
//                 <span><IoIosArrowForward className='text-[12px] font-semibold md:text-[14px]  mt-[2px] md:mt-[5px]' /></span>
//                 <span className='md:font-light text-[14px] md:text-[16px] leading-[14px] md:leading-[24px]'>Comparison</span>
//                 </div>
                

//             </div>
    
//     </div>  

    

// {/* hero section end */}


// {/* card section start */}


// <div className='w-[70%] md:w-[90%] h-[2100px] md:h-[1900px] m-auto mt-[300px] md:mt-10 '>
//     <div className='w-[100%] h-[400px] py-10 flex md:flex-row flex-col justify-center space-x-10'>
//         <div>
//             <div className=' text-left w-[200px] h-[105px] leading-8'>
//                 <h1 className=' font-medium text-[13px] md:text-[16px] lg:text-[28px] '>Go to Product page for more 
//                 Products</h1>
//             </div>
//             <Link href={'/Shop'}><h1 className='text-[14px] font-medium pt-3 text-[#9F9F9F] '>View More</h1></Link>
//             <div className='w-[70px] border'></div>
//         </div>
//         <div className='flex flex-col mt-5 md:mt-0 py-1 gap-2'>
//             <Image src={'/table.png'} alt='hello' width={200} height={100} className=' w-[200px] h-[120px]'/>
//             <h1 className='text-[24px] pl-4 font-medium '>Asgaard Sofa</h1>
//              <h1 className='text-[16px] md:text-[18px] pl-4 font-medium '>Rs. 250,000.00</h1>
//              <div className='pl-4 flex justify-start space-x-3'>
//                 <h1 className='text-[16px] md:text-[18px] '>4.7</h1>
//                      <div className='flex '> <TiStar className='w-[20px] h-[20px] text-yellow-500' />
//                                             <TiStar className='w-[20px] h-[20px] text-yellow-500' />
//                                             <TiStar className='w-[20px] h-[20px] text-yellow-500' />
//                                             <TiStar className='w-[20px] h-[20px] text-yellow-500' />
//                                             <FaStarHalf className='w-[20px] h-[20px] text-yellow-500' />
//                                             <div className='h-[20px] border ml-2'></div>
//                                             <h1 className='text-[12px] font-normal text-[#9F9F9F]  pl-5'>204 Review</h1>
                
                                            
//                                              </div>    
//             </div>   
//         </div>
//         <div className='flex flex-col mt-5 md:mt-0 py-1 gap-2'>
//             <Image src={'/table.png'} alt='hello' width={200} height={100} className=' w-[200px] h-[120px]'/>
//             <h1 className='text-[24px] pl-4 font-medium '>Outdoor Sofa Set </h1>
//              <h1 className='text-[16px] md:text-[18px] pl-4 font-medium '>Rs. 224,000.00</h1>
//              <div className='pl-4 flex justify-start space-x-3'>
//                 <h1 className='text-[16px] md:text-[18px] '>4.2</h1>
//                      <div className='flex '> <TiStar className='w-[20px] h-[20px] text-yellow-500' />
//                                             <TiStar className='w-[20px] h-[20px] text-yellow-500' />
//                                             <TiStar className='w-[20px] h-[20px] text-yellow-500' />
//                                             <TiStar className='w-[20px] h-[20px] text-yellow-500' />
//                                             <FaStarHalf className='w-[20px] h-[20px] text-yellow-500' />
//                                             <div className='h-[20px] border ml-2'></div>
//                                             <h1 className='text-[12px] font-normal text-[#9F9F9F]  pl-5'>147 Review</h1>
                
                                            
//                                              </div>    
//             </div>   
//         </div>
//         <div className='py-10'>
//             <div className='w-[240px] h-[78px] '>
//                 <h1 className='font-semibold leading-[30px]'>Add A Product</h1>
//                 <div className='px-4 py-3 w-[100%] h-[38px] bg-[#B88E2F] rounded-[6px] flex justify-between'>
//                     <h1 className=' text-white text-[12px] md:text-[14px] leading-[17px] font-semibold'>Choose a Product</h1>
//                     <h1 className='text-white'><FaAngleDown /></h1>
//                 </div>
//             </div>
//         </div>

//     </div>

//     <div className='w-[100%] border'></div>
//   <div className=' mt-[200px] md:mt-0'>  
//     {/* General */}
//     <div className='w-[100%]  text-justify  h-[20%] py-10 grid grid-cols-1 md:grid-cols-4'>
//         <div className='flex flex-col space-y-2'>
//             <h1 className='text-[28px] font-medium leading-[35px]'>General</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Sales Package</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Model Number</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Secondary Material</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Configuration</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Upholstery Material</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Upholstery Color</h1>

//         </div>
//         <div className='flex flex-col space-y-2'>
//             <h1 className='text-white text-[28px] font-medium leading-[35px]'>General</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>1 sectional sofa</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>TFCBLIGRBL6SRHS</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Solid Wood</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>L-shaped</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Fabric + Cotton</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Bright Grey & Lion</h1>

//         </div>
//         <div className='flex flex-col space-y-2'>
//             <h1 className='text-white text-[28px] font-medium leading-[35px]'>General</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>1 Three Seater, 2 Single Seater</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>DTUBLIGRBL568</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Solid Wood</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>L-shaped</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Fabric + Cotton</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Bright Grey & Lion</h1>

//         </div>
//         {/* empty */}
//         <div></div>
//     </div>

//     {/* Product */}
//     <div className='w-[100%] text-justify h-[20%] py-10 grid grid-cols-1 md:grid-cols-4'>
//         <div className='flex flex-col space-y-2'>
//             <h1 className='text-[28px] font-medium leading-[35px]'>Product</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Filling Material</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Finish Type</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Adjustable Headrest</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Maximum Load Capacity</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Origin of Manufacture</h1>
            

//         </div>
//         <div className='flex flex-col space-y-2'>
//             <h1 className='text-white text-[28px] font-medium leading-[35px]'>General</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Foam</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Bright Grey & Lion</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>No</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>280 KG</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>India</h1>
            

//         </div>
//         <div className='flex flex-col space-y-2'>
//             <h1 className='text-white text-[28px] font-medium leading-[35px]'>General</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Matte</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Bright Grey & Lion</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>yes</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>300kg</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>India</h1>
            

//         </div>
//         {/* empty */}
//         <div></div>
//     </div>

//     {/* Dimension */}
//     <div className='w-[100%] text-justify h-[20%] py-10 grid grid-cols-1 md:grid-cols-4'>
//         <div className='flex flex-col space-y-2'>
//             <h1 className='text-[28px] font-medium leading-[35px]'>Dimensions</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Width</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Height</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Depth</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Weight</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Seat Height</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Seat Height</h1>

//         </div>
//         <div className='flex flex-col space-y-2'>
//             <h1 className='text-white text-[28px] font-medium leading-[35px]'>General</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>265.32 cm</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>76 cm</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>167.76 cm</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>45 KG</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>41.52 cm</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>5.46 cm</h1>

//         </div>
//         <div className='flex flex-col space-y-2'>
//             <h1 className='text-white text-[28px] font-medium leading-[35px]'>General</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>265.32 cm</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>76 cm</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>167.76 cm</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>65 KG</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>65 KG</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>65 KG</h1>

//         </div>
//         {/* empty */}
//         <div></div>
//     </div>

//     {/* warranty */}
//     <div className='w-[100%] text-justify space-x-10 h-[35%] py-10 grid grid-cols-1 md:grid-cols-4'>
//         <div className='flex flex-col space-y-2'>
//             <h1 className='text-[28px] font-medium leading-[35px]'>Warranty</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Warranty Summary</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Warranty Service Type</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Covered in Warranty</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Not Covered in Warranty</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Domestic Warranty</h1>
            

//         </div>
//         <div className='flex flex-col  h-[400px]'>
//             <h1 className='text-white text-[28px] font-medium leading-[35px]'>General</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>1 Year Manufacturing Warranty</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Warranty Against Manufacturing Defect</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>1 year</h1>
//             <div className='w-[70%] h-[50px]  md:h-[60px] m-auto  bg-[#B88E2F]'><h1 className='text-[16px]  text-center text-white pt-4 md:text-[20px] font-normal leading-[20px] md:leading-[30px]  '>Add Cart</h1></div>
            

//         </div>
//         <div className='flex flex-col '>
//             <h1 className='text-white text-[28px] font-medium leading-[35px]'>General</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>1.2 Year Manufacturing Warranty</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>Warranty of the product is limited to manufacturing defects only.</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</h1>
//             <h1 className='text-[text-20px] leading-[25px] font-normal'>3 Months</h1>
//             <div className='w-[70%] h-[50px] md:h-[60px] m-auto  bg-[#B88E2F]'><h1 className='text-[16px]  text-center text-white pt-4 md:text-[20px] font-normal leading-[20px] md:leading-[30px]  '>Add Cart</h1></div>

//         </div>
//         {/* empty */}
//         <div></div>
//     </div>
//     </div>
// </div>





// {/* card section end */}


// {/* wininng section start */}

// <div className='bg-[#FAF3EA] w-[100%] h-[250px] lg:h-[270px] flex items-center mt-[1800px] md:mt-1  '>
//           <div className='grid grid-cols-1 md:grid-cols-4 justify-center items-center w-[90%] md:h-[60px] lg:[70px]  m-auto'>
//                 {/* div 1 */}
//                 <div className='w-[200px] m-auto flex justify-center mt-6  gap-2'>
//                     <GrTrophy className='w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[50px] lg:h-[50px]'/>
//                     <div className='flex flex-col gap-1'>
//                         <h1 className='text-[16px] md:text-[16px] font-semibold leading-[20px] md:leading-[20px] text-[#242424]'>Hight Quality</h1>
//                         <h1 className='text-[12px] md:text-[12px] font-medium leading-[2px] md:leading-[15px] text-[#898989]'>crafted from top materials</h1>
//                     </div>
//                 </div>
//                 {/* div 1 */}
//                 {/* div 2 */}
//                 <div className='w-[200px] m-auto flex justify-center mt-6  gap-2'>
//                     <GrTrophy className='w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[50px] lg:h-[50px]'/>
//                     <div className='flex flex-col gap-1'>
//                         <h1 className='text-[16px] md:text-[16px] font-semibold leading-[20px] md:leading-[20px] text-[#242424]'>Warranty Production</h1>
//                         <h1 className='text-[12px] md:text-[12px] font-medium leading-[2px] md:leading-[15px] text-[#898989]'>Over 2 years</h1>
//                     </div>
//                 </div>
//                 {/* div 2 */}
//                 {/* div 3 */}
//                 <div className='w-[200px] m-auto flex justify-center mt-6  gap-2'>
//                     <GrTrophy className='w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[50px] lg:h-[50px]'/>
//                     <div className='flex flex-col gap-1'>
//                         <h1 className='text-[16px] md:text-[16px] font-semibold leading-[20px] md:leading-[20px] text-[#242424]'>Free Shipping</h1>
//                         <h1 className='text-[12px] md:text-[12px] font-medium leading-[2px] md:leading-[15px] text-[#898989]'>Order Over 150$</h1>
//                     </div>
//                 </div>
//                 {/* div 3 */}
//                 {/* div 4 */}
//                 <div className='w-[200px] m-auto flex justify-center mt-6  gap-2'>
//                     <GrTrophy className='w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[50px] lg:h-[50px]'/>
//                     <div className='flex flex-col gap-1'>
//                         <h1 className='text-[16px] md:text-[16px] font-semibold leading-[20px] md:leading-[20px] text-[#242424]'>24/7 Support</h1>
//                         <h1 className='text-[12px] md:text-[12px] font-medium leading-[2px] md:leading-[15px] text-[#898989]'>Dedicated support</h1>
//                     </div>
//                 </div>
//                 {/* div 4 */}
//             </div>  

// </div>



// {/* winnng section end */}

// {/* footer section start */}


// <Footer></Footer>

// {/* footer section end */}



// </div>
// </>
//   )
// }

// export default page


// Now Edit the my hackathon 2 template 6

'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';
import { GrTrophy } from 'react-icons/gr';
import { TiStar } from 'react-icons/ti';
import { FaStarHalf } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <div className="relative w-full h-[190px] md:h-[300px]">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/Rectangle.png"
              alt="Hero Background"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-[#B88E2F]">
              Product Comparison
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-sm md:text-base font-semibold text-[#B88E2F]">
                Home
              </span>
              <IoIosArrowForward className="text-sm md:text-base text-[#B88E2F]" />
              <span className="text-sm md:text-base font-light text-[#B88E2F]">
                Comparison
              </span>
            </div>
          </div>
        </div>

        {/* Card Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Go to Product Page */}
            <div className="flex flex-col space-y-4">
              <h2 className="text-lg md:text-2xl font-medium">
                Go to Product page for more Products
              </h2>
              <Link href="/Shop">
                <span className="text-sm font-medium text-gray-500 hover:text-[#B88E2F] transition-colors">
                  View More
                </span>
              </Link>
              <div className="w-16 border-b border-gray-300"></div>
            </div>

            {/* Product 1 */}
            <div className="flex flex-col space-y-4">
              <Image
                src="/table.png"
                alt="Asgaard Sofa"
                width={200}
                height={120}
                className="w-full h-auto"
              />
              <h3 className="text-xl font-medium">Asgaard Sofa</h3>
              <p className="text-lg font-medium">Rs. 250,000.00</p>
              <div className="flex items-center space-x-2">
                <span className="text-lg">4.7</span>
                <div className="flex space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <TiStar key={i} className="w-5 h-5 text-yellow-500" />
                  ))}
                  <FaStarHalf className="w-5 h-5 text-yellow-500" />
                </div>
                <span className="text-sm text-gray-500">204 Reviews</span>
              </div>
            </div>

            {/* Product 2 */}
            <div className="flex flex-col space-y-4">
              <Image
                src="/table.png"
                alt="Outdoor Sofa Set"
                width={200}
                height={120}
                className="w-full h-auto"
              />
              <h3 className="text-xl font-medium">Outdoor Sofa Set</h3>
              <p className="text-lg font-medium">Rs. 224,000.00</p>
              <div className="flex items-center space-x-2">
                <span className="text-lg">4.2</span>
                <div className="flex space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <TiStar key={i} className="w-5 h-5 text-yellow-500" />
                  ))}
                  <FaStarHalf className="w-5 h-5 text-yellow-500" />
                </div>
                <span className="text-sm text-gray-500">147 Reviews</span>
              </div>
            </div>

            {/* Add A Product */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold">Add A Product</h3>
              <div className="w-full h-12 bg-[#B88E2F] rounded-lg flex items-center justify-between px-4">
                <span className="text-sm text-white font-semibold">
                  Choose a Product
                </span>
                <FaAngleDown className="text-white" />
              </div>
            </div>
          </div>

          <div className="border-b my-8"></div>

          {/* Comparison Details */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* General */}
            <div className="space-y-4">
              <h3 className="text-2xl font-medium">General</h3>
              <p>Sales Package</p>
              <p>Model Number</p>
              <p>Secondary Material</p>
              <p>Configuration</p>
              <p>Upholstery Material</p>
              <p>Upholstery Color</p>
            </div>

            {/* Product 1 Details */}
            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-transparent">General</h3>
              <p>1 sectional sofa</p>
              <p>TFCBLIGRBL6SRHS</p>
              <p>Solid Wood</p>
              <p>L-shaped</p>
              <p>Fabric + Cotton</p>
              <p>Bright Grey & Lion</p>
            </div>

            {/* Product 2 Details */}
            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-transparent">General</h3>
              <p>1 Three Seater, 2 Single Seater</p>
              <p>DTUBLIGRBL568</p>
              <p>Solid Wood</p>
              <p>L-shaped</p>
              <p>Fabric + Cotton</p>
              <p>Bright Grey & Lion</p>
            </div>

            {/* Empty Column */}
            <div></div>
          </div>

          {/* Repeat for other sections (Product, Dimensions, Warranty) */}
        </div>

        {/* Winning Section */}
        <div className="bg-[#FAF3EA] py-8 mt-8">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <GrTrophy className="w-8 h-8" />,
                title: 'High Quality',
                description: 'Crafted from top materials',
              },
              {
                icon: <GrTrophy className="w-8 h-8" />,
                title: 'Warranty Protection',
                description: 'Over 2 years',
              },
              {
                icon: <GrTrophy className="w-8 h-8" />,
                title: 'Free Shipping',
                description: 'Order Over $150',
              },
              {
                icon: <GrTrophy className="w-8 h-8" />,
                title: '24/7 Support',
                description: 'Dedicated support',
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                {item.icon}
                <div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Page;