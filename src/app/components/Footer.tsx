import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div>

<div className='w-[100%] h-[500px]  '>

            <div className=' w-[80%] h-[400px] m-auto py-[48px] '>

                {/* // grid */}

                <div className='grid grid-cols-1 md:gap-2 md:grid-cols-4 '>
                    <div>
                          <h1 className='font-bold text-[24px]  leading-[36px]'>Funiro.</h1>
                          <p className='pt-[100px] font-normal text-[14px] leading-[24px] text-[#9F9F9F]'>400 University Drive Suite 200 Coral <br /> Gables,<br />FL 33134 USA</p>      
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h1 className='font-normal text-[16px] leading-[24px] text-[#9F9F9F]'>Links</h1>
                        <Link href={'/'}><h1 className='text-[16px] font-medium leading-[24px]'>Home</h1></Link>
                        <Link href={'/Shop'}><h1>Shop</h1></Link>
                        <Link href={'/About'}><h1>About</h1></Link>
                        <Link href={'/Contact'}><h1>Contact</h1></Link>

                    </div>
                    <div className='flex flex-col gap-5'>
                        <h1 className='font-normal text-[16px] leading-[24px] text-[#9F9F9F]'>Help</h1>
                        <h1>Payment Option</h1>
                        <Link href={'/Shop'}><h1>Shop</h1></Link>
                        <Link href={'/About'}><h1>About</h1></Link>
                        

                    </div>
                    <div className='flex flex-col gap-5'>
                        <h1 className='font-normal text-[16px] leading-[24px] text-[#9F9F9F]'>Newsletters</h1>
                        <div className='flex space-x-2'><h1 className='font-normal underline text-[14px] leading-[21px] text-[#9F9F9F] '>Enter Your Email Address </h1> <span className='text-[14px] font-medium underline'>SUBSCRIBE</span> </div>
                        
                        

                    </div>
                </div>


                {/* grid */}
                <div className='mt-10  border bg-[#D9D9D9] m-auto'></div>
                <div className=' m-auto pt-3'>
                    <h1 className='text-[16px] leading-[24px] font-normal text-black'>2023 furino. All rights reverved</h1>

                </div>

            </div>

</div>

    </div>
  )
}

export default Footer
