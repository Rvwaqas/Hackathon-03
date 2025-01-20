'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'

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
                <h1 className='text-center text-[25px] md:text-[40px] font-bold leading-[30px] md:leading-[68px]'>Checkout</h1>
                <div className='flex gap-2 mt-[1px]'>
                <span className=' text-[14px] md:text-[16px] leading-[14px] md:leading-[24px] font-semibold'>Home </span>
                <span><IoIosArrowForward className='text-[12px] font-semibold md:text-[14px]  mt-[2px] md:mt-[5px]' /></span>
                <span className='md:font-light text-[14px] md:text-[16px] leading-[14px] md:leading-[24px]'>Checkout</span>
                </div>
                

            </div>
    
    </div>  

    

{/* hero section end */}


{/* card section start */}


<div className='w-[100%] h-[1650px] pt-10  mt-14'>

    <div className='flex  flex-col md:flex-row justify-between gap-3  w-[85%]  h-[1600px]  m-auto '>
            <div className=' w-[100%] md:w-[48%]  px-10 py-6 '>
                <div className='flex flex-col space-y-5'>
                    <h1 className='text-[25px] md:text-[36px] font-semibold leading-[54px]'>Billing details</h1>
                     <div className='flex justify-between '>
                     <div className='w-[200px] h-[121px] flex flex-col space-y-2'>
                        <label className='text-[16px] font-medium leading-[24px]'>First Name</label>
                        <input className='w-[200px] border h-[60px] rounded-sm' type="text" />
                    </div> 
                    <div className='w-[200px] h-[121px] flex flex-col  space-y-2'>
                        <label className='text-[16px] font-medium leading-[24px]'>Last Name</label>
                        <input className='w-[200px] border h-[60px] rounded-sm' type="text" />
                    </div>                     
                    </div> 
                    <div className='w-[100%] h-[121px] flex flex-col space-y-2'>
                        <label className='text-[16px] font-medium leading-[24px]'>Company Name (Optional)</label>
                        <input className='w-[100%] border h-[60px] rounded-sm' type="text" />
                    </div> 
                     
                    <div className='w-[100%] h-[121px] flex flex-col space-y-2'>
                        <label className='text-[16px] font-medium leading-[24px]'>Country/Region</label>
                        <select name='country' id='country' className='w-[100%] border h-[60px] rounded-sm'>
                                <option value="" disabled selected className='text-[#9F9F9F]'>Choose a country</option>
                                <option value="USA">United State of America</option>
                                <option value="Canada">Canda</option>
                        </select>
                    </div> 
                    <div className='w-[100%] h-[121px] flex flex-col space-y-2'>
                        <label className='text-[16px] font-medium leading-[24px]'>Street address</label>
                        <input className='w-[100%] border h-[60px] rounded-sm' type="text" />
                    </div> 
                    <div className='w-[100%] h-[121px] flex flex-col space-y-2'>
                        <label className='text-[16px] font-medium leading-[24px]'>Town/City</label>
                        <input className='w-[100%] border h-[60px] rounded-sm' type="text" />
                    </div> 
                    <div className='w-[100%] h-[121px] flex flex-col space-y-2'>
                        <label className='text-[16px] font-medium leading-[24px]'>Province</label>
                        <input className='w-[100%] border h-[60px] rounded-sm' type="text" />
                    </div> 
                    <div className='w-[100%] h-[121px] flex flex-col space-y-2'>
                        <label className='text-[16px] font-medium leading-[24px]'>ZIP code</label>
                        <input className='w-[100%] border h-[60px] rounded-sm' type="text" />
                    </div> 
                    <div className='w-[100%] h-[121px] flex flex-col space-y-2'>
                        <label className='text-[16px] font-medium leading-[24px]'>Phone</label>
                        <input className='w-[100%] border h-[60px] rounded-sm' type="text" />
                    </div> 
                    <div className='w-[100%] h-[121px] flex flex-col space-y-2'>
                        <label className='text-[16px] font-medium leading-[24px]'>Phone</label>
                        <input className='w-[100%] border h-[60px] rounded-sm' type="text" />
                    </div> 
                    <div className='w-[100%] h-[121px] flex flex-col space-y-2'>
                        
                        <input placeholder='Additional Information' className='text-[#9F9F9F] p-2 w-[100%] border h-[60px] rounded-sm' type="text" />
                    </div> 


  
                </div>

            </div>
            <div className='w-[100%] md:w-[48%]   h-[780px] py-5 md:py-20 '>
                <div className='w-[90%] h-[600px] m-auto '>
                        <div className='flex justify-between'>
                            <h1 className='text-[24px] leading-[36px] font-medium'>Product</h1><h2 className='text-[24px] leading-[36px] font-medium'>Subtotal</h2>
                        </div>
                        <div className='mt-4 flex justify-between'>
                        <div className='w-[100px] h-[22px] flex gap-1 text-[16px] leading-[22px] font-normal text-[#9F9F9F]'><h1 className='text-[12px]'>Asgaard sofa</h1><h2>x</h2><h3>1</h3></div>
                        <div className='w-[110px] h-[22px] font-light text-[16px] leading-[22px] text-[#9F9F9F]'>Rs. 250,000.00</div>
                        </div>
                        <div className='mt-4 flex justify-between'>
                        <div className='w-[100px] h-[22px] flex gap-1 text-[16px] leading-[22px] font-normal text-black'><h1 className='text-[12px]'>Subtotal</h1></div>
                        <div className='w-[110px] h-[22px] font-light text-[16px] leading-[22px] text-[#9F9F9F]'>Rs. 250,000.00</div>
                        </div>
                        <div className='mt-4 flex justify-between'>
                        <div className='w-[100px] h-[22px] flex gap-1 text-[16px] leading-[22px] font-normal text-black'><h1 className='text-[12px]'>Total</h1></div>
                        <div className='w-[170px] h-[22px] font-light text-[24px] leading-[36px] text-[#B88E2F]'>Rs. 250,000.00</div>
                        </div>
                        <div className='w-[100%] border mt-6'></div>
                        <div className='w-[100%] h-[100px] mt-6'>
                            <h1 className='text-[16px] leading-[24px] font-normal '>Direct Bank Transfer</h1>
                            <p className='text-[16px] text-[#9F9F9F] leading-[24px] text-justify mt-3'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>   
                        </div>

                        <div className='mt-6'>
                            <div className='flex gap-3' >
                                <input type="radio" />
                                <h1 className='text-[16px] font-medium leading-[24px] text-[#9F9F9F]'>Direct Bank Transfer</h1>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <div className='flex gap-3' >
                                <input type="radio" />
                                <h1 className='text-[16px] font-medium leading-[24px] text-[#9F9F9F]'>Cash On Delivery</h1>
                            </div>
                        </div>
                        <p className='pt-4 text-[16px] leading-[24px] font-light text-justify'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                        <div className='w-[50%] h-[60px] m-auto rounded-[15px] border border-black mt-8'>
                            <h1 className='text-[20px] font-normal leading-[30px] text-center py-3 '>Place order</h1>
                        </div>    
                </div>

            </div>
    </div>

</div>




{/* card section end */}


{/* wininng section start */}

<div className='bg-[#FAF3EA] w-[100%] h-[250px] lg:h-[270px] flex items-center mt-[650px] md:mt-1  '>
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
