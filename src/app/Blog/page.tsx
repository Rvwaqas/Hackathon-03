'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'

import { IoIosArrowForward } from "react-icons/io";

import { GrTrophy } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { IoIosGift } from "react-icons/io";
import { FaTag } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
const page = () => {
  return (
    <>
    <div className='w-[100%] h-screen'>

    {/* navbar */}
    <Navbar></Navbar>
    {/* hero section  */}
    <div className='w-[100%] h-[190px] md:h-[300px] relative'>
        <div className='w-[100%] h-[190px] md:h-[350px] absolute object-cover bg-cover'>
            <Image src={'/Rectangle.png'} alt='sa' width={700} height={350} className='w-[100%] h-[190px] md:h-[350px]' />    
                
        </div>
        <div className='absolute  w-[100%] h-[190px] md:h-[350px] flex flex-col justify-center items-center'>
                <h1 className='text-center text-[25px] md:text-[40px] font-bold leading-[30px] md:leading-[68px]'>Product Comparison</h1>
                <div className='flex gap-2 mt-[1px]'>
                <span className=' text-[14px] md:text-[16px] leading-[14px] md:leading-[24px] font-semibold'>Home </span>
                <span><IoIosArrowForward className='text-[12px] font-semibold md:text-[14px]  mt-[2px] md:mt-[5px]' /></span>
                <span className='md:font-light text-[14px] md:text-[16px] leading-[14px] md:leading-[24px]'>Comparison</span>
                </div>
                

            </div>
    
    </div>  

    

{/* hero section end */}


{/* card section start */}


<div className='w-[100%] h-[1000px] md:h-[2700px]  py-[100px]'>
    <div className='flex flex-col md:flex-row w-[80%]  h-[2500px] mt-[50px] m-auto '>
        {/* blog */}
        <div className='w-[100%] md:w-[70%] h-[2450px]'>
           <div className='w-[100%] h-[780px]'>
                <Image src={'/laptop.png'} alt='' width={600} height={500} className=' w-[100%] h-[300px] md:h-[500px] rounded-[10px]'/>
                    <div className='flex space-x-4 mt-4'>
                        <div className='flex gap-2'>
                            <IoIosContact className='w-[20px] h-[20px] text-[#9F9F9F]' />
                            <h1 className='text-[16px] font-normal leading-[24px] text-[#9F9F9F]'>Admin</h1>
                        </div>
                        <div className='flex gap-2'>
                            <IoIosGift className='w-[20px] h-[20px] text-[#9F9F9F]' />
                            <h1 className='text-[16px] font-normal leading-[24px] text-[#9F9F9F]'>14 oct 2022</h1>
                        </div>
                        <div className='flex gap-2'>
                            <FaTag className='w-[20px] h-[20px] text-[#9F9F9F]' />
                            <h1 className='text-[16px] font-normal leading-[24px] text-[#9F9F9F]'>Wood</h1>
                        </div>

                    </div>  
                <h1 className='font-medium text-[30px] leading-[45px] mt-4'>Going all-in with millennial design</h1> 
                <p className='font-normal text-[15px] leading-[22px] mt-3 text-justify text-[#9F9F9F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                <h1 className='font-normal text-[16px] leading-[24px] text-justify mt-2'>Read more</h1>
                <div className='w-[80px] mt-2 border border-black'></div>
            </div> 

            <div className='w-[100%] h-[800px] mt-[20px]'>
                <Image src={'/pencil.png'} alt='' width={600} height={500} className=' w-[100%] h-[300px] md:h-[500px] rounded-[10px]'/>
                    <div className='flex space-x-4 mt-4'>
                        <div className='flex gap-2'>
                            <IoIosContact className='w-[20px] h-[20px] text-[#9F9F9F]' />
                            <h1 className='text-[16px] font-normal leading-[24px] text-[#9F9F9F]'>Admin</h1>
                        </div>
                        <div className='flex gap-2'>
                            <IoIosGift className='w-[20px] h-[20px] text-[#9F9F9F]' />
                            <h1 className='text-[16px] font-normal leading-[24px] text-[#9F9F9F]'>14 oct 2022</h1>
                        </div>
                        <div className='flex gap-2'>
                            <FaTag className='w-[20px] h-[20px] text-[#9F9F9F]' />
                            <h1 className='text-[16px] font-normal leading-[24px] text-[#9F9F9F]'>Wood</h1>
                        </div>

                    </div>  
                <h1 className='font-medium text-[30px] leading-[45px] mt-4'>Going all-in with millennial design</h1> 
                <p className='font-normal text-[15px] leading-[22px] mt-3 text-justify text-[#9F9F9F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                <h1 className='font-normal text-[16px] leading-[24px] text-justify mt-2'>Read more</h1>
                <div className='w-[80px] mt-2 border border-black'></div>
            </div>

            <div className='w-[100%] h-[800px] mt-[20px]'>
                <Image src={'/tea.png'} alt='' width={600} height={500} className=' w-[100%] h-[300px] md:h-[500px] rounded-[10px]'/>
                    <div className='flex space-x-4 mt-4'>
                        <div className='flex gap-2'>
                            <IoIosContact className='w-[20px] h-[20px] text-[#9F9F9F]' />
                            <h1 className='text-[16px] font-normal leading-[24px] text-[#9F9F9F]'>Admin</h1>
                        </div>
                        <div className='flex gap-2'>
                            <IoIosGift className='w-[20px] h-[20px] text-[#9F9F9F]' />
                            <h1 className='text-[16px] font-normal leading-[24px] text-[#9F9F9F]'>14 oct 2022</h1>
                        </div>
                        <div className='flex gap-2'>
                            <FaTag className='w-[20px] h-[20px] text-[#9F9F9F]' />
                            <h1 className='text-[16px] font-normal leading-[24px] text-[#9F9F9F]'>Wood</h1>
                        </div>

                    </div>  
                <h1 className='font-medium text-[30px] leading-[45px] mt-4'>Going all-in with millennial design</h1> 
                <p className='font-normal text-[15px] leading-[22px] mt-3 text-justify text-[#9F9F9F]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                <h1 className='font-normal text-[16px] leading-[24px] text-justify mt-2'>Read more</h1>
                <div className='w-[80px] mt-2 border border-black'></div>
            </div> 

            <div className='flex justify-between space-x-2 w-[60%] md:w-[35%] h-[60px]  m-auto'>
                <div className='w-[60px] h-[60px] rounded-[10px] bg-[#B88E2F] text-center py-4'><h1 className='text-white font-light text-[20px] '>1</h1></div>
                <div className='w-[60px] h-[60px] rounded-[10px] bg-[#F9F1E7] text-center py-4'><h1 className='text-black font-light text-[20px] '>2</h1></div>
                <div className='w-[60px] h-[60px] rounded-[10px] bg-[#F9F1E7] text-center py-4'><h1 className='text-black font-light text-[20px] '>3</h1></div>
                <div className='w-[90px] h-[60px] rounded-[10px] bg-[#F9F1E7] text-center py-4'><h1 className='text-black font-light text-[20px] '>Next</h1></div>
            </div>
        </div>
        
        {/* sideblog */}
        <div className='hidden md:block w-[30%] h-[2450px]'>
            <div className='w-[80%] h-[530px] m-auto'>
                <div className='rounded-md px-2 items-center w-[100%] h-[58px] border border-[#9F9F9F] flex justify-end'>
                <CiSearch className='text-[24px]' />
                </div>
                <div className='w-[80%] mt-8 m-auto h-[350px] '>
                <h1 className='text-[24px] leading-[36px] font-medium'>Category</h1>
                <div className='flex justify-between mt-4 '>
                    <h1 className='font-normal text-[16px] leading-[24px] text-[#9F9F9F]'>Crafts</h1>
                     <h1 className='font-normal text-[16px] leading-[24px] text-[#9F9F9F]'>2</h1>   
                </div>
                <div className='flex justify-between mt-4 '>
                    <h1 className='font-normal text-[16px] leading-[24px] text-[#9F9F9F]'>Design</h1>
                     <h1 className='font-normal text-[16px] leading-[24px] text-[#9F9F9F]'>8</h1>   
                </div>
                <div className='flex justify-between mt-4 '>
                    <h1 className='font-normal text-[16px] leading-[24px] text-[#9F9F9F]'>Handmade</h1>
                     <h1 className='font-normal text-[16px] leading-[24px] text-[#9F9F9F]'>7</h1>   
                </div>
                <div className='flex justify-between mt-4 '>
                    <h1 className='font-normal text-[16px] leading-[24px] text-[#9F9F9F]'>Interior</h1>
                     <h1 className='font-normal text-[16px] leading-[24px] text-[#9F9F9F]'>1</h1>   
                </div>
                <div className='flex justify-between mt-4 '>
                    <h1 className='font-normal text-[16px] leading-[24px] text-[#9F9F9F]'>Wood</h1>
                     <h1 className='font-normal text-[16px] leading-[24px] text-[#9F9F9F]'>6</h1>   
                </div>
                </div>

                <div className='w-[80%] mt-28 m-auto h-[650px]'>
                        <h1 className='text-[24px] leading-[36px] font-medium'>Recent Posts</h1>
                        <div className='flex space-x-2 justify-between w-[100%] mt-5 h-[80px] '>
                            <Image src={'/tea.png'} width={80} height={80} className='rounded-[15px]' alt='help'/>
                                <div className=' h-[65px]'>
                                       <h1 className='font-normal text-[14px] leading-[21px]'>Going all-in with millennial design</h1>
                                        <p className='font-normal text-[12px] leading-[18px] text-[#9F9F9F]'>03 Aug 2022</p>
                                </div>   
                        </div>

                        <div className='flex space-x-2 justify-between w-[100%] mt-7 h-[80px] '>
                            <Image src={'/table.png'} width={80} height={80} className='rounded-[15px]' alt='help'/>
                                <div className=' h-[65px]'>
                                       <h1 className='font-normal text-[14px] leading-[21px]'>Going all-in with millennial design</h1>
                                        <p className='font-normal text-[12px] leading-[18px] text-[#9F9F9F]'>03 Aug 2022</p>
                                </div>   
                        </div>

                        <div className='flex space-x-2 justify-between w-[100%] mt-7 h-[80px] '>
                            <Image src={'/sofa.png'} width={80} height={80} className='rounded-[15px]' alt='help'/>
                                <div className=' h-[65px]'>
                                       <h1 className='font-normal text-[14px] leading-[21px]'>Going all-in with millennial design</h1>
                                        <p className='font-normal text-[12px] leading-[18px] text-[#9F9F9F]'>03 Aug 2022</p>
                                </div>   
                        </div>

                        <div className='flex space-x-2 justify-between w-[100%] mt-7 h-[80px] '>
                            <Image src={'/Rectangle.png'} width={80} height={80} className='rounded-[15px]' alt='help'/>
                                <div className=' h-[65px]'>
                                       <h1 className='font-normal text-[14px] leading-[21px]'>Going all-in with millennial design</h1>
                                        <p className='font-normal text-[12px] leading-[18px] text-[#9F9F9F]'>03 Aug 2022</p>
                                </div>   
                        </div>

                        <div className='flex space-x-2 justify-between w-[100%] mt-7 h-[80px] '>
                            <Image src={'/pencil.png'} width={80} height={80} className='rounded-[15px]' alt='help'/>
                                <div className=' h-[65px]'>
                                       <h1 className='font-normal text-[14px] leading-[21px]'>Going all-in with millennial design</h1>
                                        <p className='font-normal text-[12px] leading-[18px] text-[#9F9F9F]'>03 Aug 2022</p>
                                </div>   
                        </div>
                
                </div>   
            </div>


        </div>

        

    </div>

</div>





{/* card section end */}


{/* wininng section start */}

<div className='bg-[#FAF3EA] w-[100%] h-[250px] lg:h-[270px] flex items-center mt-[1800px] md:mt-1  '>
          <div className='grid grid-cols-1 md:grid-cols-4 justify-center items-center w-[90%] md:h-[60px] lg:[70px]  m-auto'>
                {/* div 1 */}
                <div className='w-[200px] m-auto flex justify-center mt-6  gap-2'>
                    <GrTrophy className='w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[50px] lg:h-[50px]'/>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-[16px] md:text-[16px] font-semibold leading-[20px] md:leading-[20px] text-[#242424]'>Hight Quality</h1>
                        <h1 className='text-[12px] md:text-[12px] font-medium leading-[2px] md:leading-[15px] text-[#898989]'>crafted from top materials</h1>
                    </div>
                </div>
                {/* div 1 */}
                {/* div 2 */}
                <div className='w-[200px] m-auto flex justify-center mt-6  gap-2'>
                    <GrTrophy className='w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[50px] lg:h-[50px]'/>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-[16px] md:text-[16px] font-semibold leading-[20px] md:leading-[20px] text-[#242424]'>Warranty Production</h1>
                        <h1 className='text-[12px] md:text-[12px] font-medium leading-[2px] md:leading-[15px] text-[#898989]'>Over 2 years</h1>
                    </div>
                </div>
                {/* div 2 */}
                {/* div 3 */}
                <div className='w-[200px] m-auto flex justify-center mt-6  gap-2'>
                    <GrTrophy className='w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[50px] lg:h-[50px]'/>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-[16px] md:text-[16px] font-semibold leading-[20px] md:leading-[20px] text-[#242424]'>Free Shipping</h1>
                        <h1 className='text-[12px] md:text-[12px] font-medium leading-[2px] md:leading-[15px] text-[#898989]'>Order Over 150$</h1>
                    </div>
                </div>
                {/* div 3 */}
                {/* div 4 */}
                <div className='w-[200px] m-auto flex justify-center mt-6  gap-2'>
                    <GrTrophy className='w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[50px] lg:h-[50px]'/>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-[16px] md:text-[16px] font-semibold leading-[20px] md:leading-[20px] text-[#242424]'>24/7 Support</h1>
                        <h1 className='text-[12px] md:text-[12px] font-medium leading-[2px] md:leading-[15px] text-[#898989]'>Dedicated support</h1>
                    </div>
                </div>
                {/* div 4 */}
            </div>  

</div>



{/* winnng section end */}

{/* footer section start */}


<Footer></Footer>

{/* footer section end */}



</div>
</>
  )
}

export default page
