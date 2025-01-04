import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import { MdDelete } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

import { GrTrophy } from "react-icons/gr";

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
                <h1 className='text-center text-[25px] md:text-[40px] font-bold leading-[30px] md:leading-[68px]'>Cart</h1>
                <div className='flex gap-2 mt-[1px]'>
                <span className=' text-[14px] md:text-[16px] leading-[14px] md:leading-[24px] font-semibold'>Home </span>
                <span><IoIosArrowForward className='text-[12px] font-semibold md:text-[14px]  mt-[2px] md:mt-[5px]' /></span>
                <span className='md:font-light text-[14px] md:text-[16px] leading-[14px] md:leading-[24px]'>Cart</span>
                </div>
                

            </div>
    
    </div>  

    

{/* hero section end */}


{/* card section start */}


<div className='w-[100%] h-[600px]  '>
    <div className='w-[85%] h-[500px] m-auto mt-[200px] md:pt-[100px] flex flex-col md:flex-row   justify-center space-x-5'>
        <div className='w-[70%] h-[215px]  '>
            <div className='w-[100%] h-[55px] bg-[#F9F1E7] flex items-center justify-end pr-0 md:pr-10 space-x-6 md:space-x-20'>
                <h1 className='text-[18px] font-semibold '>Product</h1>
                <h1 className='text-[18px] font-semibold'>Price</h1>
                <h1 className='text-[18px] font-semibold'>Quality</h1>
                <h1 className='text-[18px] font-semibold'>Subtotal</h1>
            </div>
            <div className=' w-[100%] h-[200px] flex flex-col md:flex-row justify-between mt-20'>
                <div className=' mt-2 md:mt-10'><Image src={'/sofa.png'} alt={'help'} width={200} height={200} />   </div>
                <div className='flex justify-between items-center space-x-10'>
                    <h1 className=' font-normal text-[14px] md:text-[16px] '>Asgaard sofa</h1>
                    <h1 className=' font-normal text-[14px] md:text-[16px]'>Rs. 250,000.00</h1>
                    <h1 className=' font-normal text-[14px] md:text-[16px] border px-2 rounded-[5px]' >1</h1>
                    <h1 className=' font-normal text-[14px] md:text-[16px]'>Rs. 250,000.00</h1>
                    <h1 className=' font-normal text-[14px] md:text-[16px] text-[#B88E2F]'><MdDelete /></h1>

                </div>

            </div>
        </div>
        <div className='mt-44 md:mt-0 w-[80%] md:w-[30%] h-[390p] bg-[#F9F1F7] shadow rounded-sm'>
            <h1 className='text-[25px] font-bold leading-[48px] text-center pt-7'>Cart Totals</h1>
                <div className='flex justify-evenly mt-12 space-x-5'>
                    <h1 className='text-[16px] font-medium leading-[24px]'>Subtotal</h1>
                    <h1 className='text-[16px] font-normal leading-[24px] text-[#9F9F9F]'>Rs. 250,000.00</h1>
                </div>
                <div className='flex justify-evenly mt-12 space-x-5'>
                    <h1 className='text-[16px] font-medium leading-[24px]'>Total</h1>
                    <h1 className='text-[16px] font-semibold leading-[24px] text-[#B88E2F]'>Rs. 250,000.00</h1>
                </div>
                <div className='w-[45%] m-auto h-[55px] mb-2 md:mb-0  mt-[60px] border border-black rounded-[15px]'>
                    <h1 className='text-center pt-4 text-[16px] font-medium '>Check Out</h1>
                </div>
                

        </div>

    </div>

</div>




{/* card section end */}


{/* wininng section start */}

<div className='bg-[#FAF3EA] w-[100%] h-[250px] lg:h-[270px] flex items-center mt-16 md:mt-10 '>
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



{/* wininng section end */}

{/* footer section start */}


<Footer></Footer>

{/* footer section end */}



</div>
</>
  )
}

export default page
