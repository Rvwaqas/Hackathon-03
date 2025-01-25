'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'

import { IoIosArrowForward } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { GrTrophy } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import { useState } from 'react'




const page = () => {
  
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject:'',
        message: '',
      });
    
      const [isSubmitting, setIsSubmitting] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        try {
          const response = await fetch('/api/submitContact/route.ts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            alert('Form submitted successfully!');
            setFormData({ name: '', email: '',subject:'', message: '' }); // Clear form
          } else {
            alert('Failed to submit the form.');
          }
        } catch (error) {
          console.error('Error submitting form:', error);
          alert('An error occurred. Please try again.');
        } finally {
          setIsSubmitting(false);
        }
      };
    
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
                <h1 className='text-center text-[25px] md:text-[40px] font-bold leading-[30px] md:leading-[68px]'>Contact</h1>
                <div className='flex gap-2 mt-[1px]'>
                <span className=' text-[14px] md:text-[16px] leading-[14px] md:leading-[24px] font-semibold'>Home </span>
                <span><IoIosArrowForward className='text-[12px] font-semibold md:text-[14px]  mt-[2px] md:mt-[5px]' /></span>
                <span className='md:font-light text-[14px] md:text-[16px] leading-[14px] md:leading-[24px]'>Contact</span>
                </div>
                

            </div>
    
    </div>  

    

{/* hero section end */}


{/* card section start */}

<div className='w-[100%] h-[900px] pt-20  mt-11'>

    <div className='w-[640px] h-[48px] m-auto'>
    <h1 className='font-semibold text-[36px] leading-[54px] text-center'>Get In Touch With Us</h1>
    <p className='text-[16px] leading-[24px] font-normal text-center text-[#9F9F9F] '>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
    </div>

    <div className='w-[80%] h-[800px] mt-16 m-auto flex flex-col md:flex-row gap-5'>
        <div className='w-[393px] h-[537px] border px-10 py-10'>
            <div className='flex space-x-3'>
            <MdLocationPin  className='w-[26px] h-[27px]'/>
            <div className='flex flex-col '>
                <h1 className='font-medium text-[24px] leading-[36px]'>Address</h1>
                <div className='w-[212px] h-[70px]'>
                    <h1 className='font-normal text-[16px] leading-[24px]'>236 5th SE Avenue, New York NY10000, United States</h1>

                </div>

            </div>
            </div>

            <div className='flex space-x-3'>
            <FaPhoneAlt  className='w-[22px] h-[27px]'/>
            <div className='flex flex-col '>
                <h1 className='font-medium text-[24px] leading-[36px]'>Phone</h1>
                <div className='w-[212px] h-[70px]'>
                    <h1 className='font-normal text-[16px] leading-[24px]'>Mobile: +(84) 546-6789
                    Hotline: +(84) 456-6789</h1>

                </div>

            </div>
            </div>

            <div className='flex space-x-3'>
            <GoClockFill  className='w-[22px] h-[27px]'/>
            <div className='flex flex-col '>
                <h1 className='font-medium text-[24px] leading-[36px]'>Working Time</h1>
                <div className='w-[212px] h-[70px]'>
                    <h1 className='font-normal text-[16px] leading-[24px]'>Monday-Friday: 9:00 - <br /> 22:00
                    <br />Saturday-Sunday: 9:00 - 21:00</h1>

                </div>

            </div>
            </div>
        </div>

        <div className='w-[630px] h-[900px]'>
                <form  onSubmit={handleSubmit} className='w-[530px] h-[730px] '>
                <div className='w-[90%] m-auto h-[121px] flex flex-col space-y-2'>
                        <label className='text-[16px] font-medium leading-[24px]'>Your Name</label>
                        <input type="text" value={formData.name}   onChange={handleChange} placeholder='abc'  className='px-5 w-[70%] md:w-[100%] text-[#9F9F9F] border h-[60px] rounded-sm' />
                    </div>
                    <div className='w-[90%] m-auto h-[121px] flex flex-col space-y-2'>
                        <label className='text-[16px] font-medium leading-[24px]'>Email Address</label>
                        <input type='email' value={formData.email}  onChange={handleChange} placeholder='ABC@def.com' className='px-5 w-[70%] md:w-[100%] text-[#9F9F9F] border h-[60px] rounded-sm'  />
                    </div>
                    <div className='w-[90%] m-auto h-[121px] flex flex-col space-y-2'>
                        <label className='text-[16px] font-medium leading-[24px]'>Subject</label>
                        <input value={formData.subject} onChange={handleChange} placeholder='This is an optional' className='px-5 w-[70%] md:w-[100%] text-[#9F9F9F] border h-[60px] rounded-sm' type="text" />
                    </div>   

                    <div className='w-[90%] m-auto h-[121px] flex flex-col space-y-2'>
                        <label className='text-[16px] font-medium leading-[24px]'>Message</label>
                        <input value={formData.message}  onChange={handleChange}  placeholder='This is an optional' className='px-5 w-[70%] md:w-[100%] text-[#9F9F9F] border h-[120px] rounded-lg' type="text" />
                    </div>
                    <div className='bg-[#B88E2F] w-[250px] h-[55px] rounded-[5px] border mt-16'>
                        <button type="submit" disabled={isSubmitting} className='text-center w-[250px] h-[55px] font-normal text-[16px] leading-[24px] py-4 text-white'> {isSubmitting ? 'Submitting...' : 'Submit'}</button>
                        
                    </div>


                </form>
        </div>


    </div>

</div>




{/* card section end */}


{/* wininng section start */}

<div className='bg-[#FAF3EA] w-[100%] h-[250px] lg:h-[270px] flex items-center mt-[350px] md:mt-1  '>
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
