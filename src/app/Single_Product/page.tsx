import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import { TiStar } from "react-icons/ti";
import { FaStarHalf } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Card1 from '../components/Card1';
import Footer from '../components/Footer';


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
        ]


import { PiTwitterLogo } from "react-icons/pi";
const page = () => {
  return (
    <>

        <div className='w-[100%] h-screen'>
        <Navbar></Navbar>

            <div className='pl-[150px] flex items-center justify-start space-x-5 w-[100%] h-[100px] bg-[#F9F1E7] '>
                    <div className='flex gap-1 text-[16px] font-normal text-[#9F9F9F]'><h1>Home</h1> <h1>  </h1></div>
                    <div className='flex gap-1 text-[16px] font-normal text-[#9F9F9F]'><h1>Shop</h1> <h1>  </h1></div>
                    <div className='h-[37px]  bg-black border border-black'></div>
                    <h1 className='font-normal text-[16px]  leading-[24px] '>Asgaard sofa</h1>
            </div>    

                {/* single item section start */}
            <div className='w-[100%] md:h-[700px] lg:h-[800px] '>
                <div className='w-[80%] md:h-[700px] m-auto  mt-10 grid grid-rows-2 md:grid-cols-2 '>
                        <div className='w-[400px] md:w-[500px] h-[400px] md:h-[500px]'>
                            <Image src={'/table.png'} alt={"help"} width={500} height={500}  className='w-[400px] md:w-[500px]  h-[400px] md:h-[500px]'/>
                        </div>
                        <div className='w-[600px] h-[700px] flex flex-col space-y-4'>
                            <h1 className='text-[40px] font-normal leading-[38px]'>Asgaard sofa</h1>
                            <h1 className='text-[22px] font-medium text-[#9F9F9F] '>Rs. 250,000.00</h1>
                            <div className='flex '> <TiStar className='w-[20px] h-[20px] text-yellow-500' />
                            <TiStar className='w-[20px] h-[20px] text-yellow-500' />
                            <TiStar className='w-[20px] h-[20px] text-yellow-500' />
                            <TiStar className='w-[20px] h-[20px] text-yellow-500' />
                            <FaStarHalf className='w-[20px] h-[20px] text-yellow-500' />
                            <div className='h-[20px] border ml-2'></div>
                            <h1 className='text-[12px] font-normal text-[#9F9F9F]  pl-5'>5 Customer Review</h1>

                            
                             </div>
                             <p className='text-[12px] font-normal text-black '>
                             Setting the bar as one of the loudest speakers in its class, <br /> the Kilburn is a compact, stout-hearted hero with a well-balanced <br /> audio which boasts a clear midrange and extended highs for a <br /> sound.</p>
                             <p className='text-[12px] text-[#9F9F9F]'>Size</p>
                             <div className='flex space-x-4'>
                                <div className='w-[30px] h-[30px] bg-[#B88E2F] rounded-[3px] '> <h1 className='text-white text-[13px] text-center pt-1 '>L</h1></div>
                                <div className='w-[30px] h-[30px] bg-[#F9F1E7] rounded-[3px] '> <h1 className='text-black text-[13px] text-center pt-1 '>XL</h1></div>
                                <div className='w-[30px] h-[30px] bg-[#F9F1E7] rounded-[3px] '> <h1 className='text-black text-[13px] text-center pt-1 '>XS</h1></div>

                             </div>
                             <p className='text-[12px] text-[#9F9F9F]'>Color</p>
                             
                             <div className='flex space-x-4'>
                             <div className='w-[30px] h-[30px] bg-[#816DFA] rounded-[100%] '> </div>
                             <div className='w-[30px] h-[30px] bg-[#000000] rounded-[100%] '> </div>
                            <div className='w-[30px] h-[30px] bg-[#B88E2F] rounded-[100%] '></div>
                             </div>
                            <div className='flex flex-col gap-3 md:flex-row md:justify-between'>
                                
                             <div className=' w-[120px] h-[60px] flex space-x-2 border border-[#9F9F9F] rounded-[8px] justify-center items-center'>
                                <h1 className='text-[16px] font-normal '>-</h1>
                                <h1 className='text-[16px] font-normal '>1</h1>
                                <h1 className='text-[16px] font-normal '>+</h1>
                             </div>

                             <div className='border border-black  w-[215px] h-[60px] flex space-x-2  rounded-[8px] justify-center items-center'>
                                <h1 className='text-[20px] font-normal '>Add To Cart</h1>
                                
                             </div>

                             <div className=' w-[215px] h-[60px] flex space-x-2 border border-black rounded-[8px] justify-center items-center'>
                                <h1 className='text-[16px] font-normal '>+</h1>
                                <h1 className='text-[20px] font-normal '>Compare</h1>
                                
                             </div>    
                            
                            
                            </div>          

                            <div className=''>
                                <div className='w-[100%] border mt-12'></div>
                            </div>

                            <div className='w-[50%] h-auto'>
                                <div className='flex justify-center space-x-10'>
                                    <h1 className='text-[16px] font-normal text-[#9F9F9F]'>SKU</h1>
                                    <div className='flex space-x-2'>
                                        <h1 className='text-[16px] font-normal text-[#9F9F9F]' >:</h1>
                                        <h1 className='text-[16px] font-normal text-[#9F9F9F]'>SS001</h1>
                                    </div>
                                </div>
                                <div className='flex justify-center space-x-10'>
                                    <h1 className='text-[16px] font-normal text-[#9F9F9F]'>SKU</h1>
                                    <div className='flex space-x-2'>
                                        <h1 className='text-[16px] font-normal text-[#9F9F9F]' >:</h1>
                                        <h1 className='text-[16px] font-normal text-[#9F9F9F]'>SS001</h1>
                                    </div>
                                </div>
                                <div className='flex justify-center space-x-10'>
                                    <h1 className='text-[16px] font-normal text-[#9F9F9F]'>SKU</h1>
                                    <div className='flex space-x-2'>
                                        <h1 className='text-[16px] font-normal text-[#9F9F9F]' >:</h1>
                                        <h1 className='text-[16px] font-normal text-[#9F9F9F]'>SS001</h1>
                                    </div>
                                </div>
                                <div className='flex justify-center space-x-5'>
                                    <h1 className='text-[16px] font-normal text-[#9F9F9F]'>Category</h1>
                                    <div className='flex space-x-2'>
                                        <h1 className='text-[16px] font-normal text-[#9F9F9F]' >:</h1>
                                        <h1 className='text-[16px] font-normal text-[#9F9F9F]'>Sofas</h1>
                                    </div>
                                </div>
                                <div className='flex justify-center space-x-6'>
                                    <h1 className='text-[16px] font-normal pl-16 text-[#9F9F9F]'>Tags</h1>
                                    <div className='flex space-x-2'>
                                        <h1 className='text-[16px] font-normal text-[#9F9F9F]' >:</h1>
                                        <h1 className='text-[16px] font-normal text-[#9F9F9F]'>Sofe,chair,Shop</h1>
                                    </div>
                                </div>
                                <div className='flex justify-center space-x-4 space-y-1'>
                                    <h1 className='text-[16px] font-normal pl-2 text-[#9F9F9F]'>Share</h1>
                                    <div className='flex space-x-2'>
                                        <h1 className='text-[16px] font-normal text-[#9F9F9F]' >:</h1>
                                        <h1 className='text-[16px] font-normal text-black'><FaFacebook /></h1>
                                         <h1 className='text-[16px] font-normal'><FaLinkedin  /></h1>
                                         <h1 className='text-[16px] font-normal text-black'><PiTwitterLogo /></h1>   
                                    </div>
                                </div>

                            </div>



                        </div>
                </div>


            </div>
            {/* single item section end  */}

<div className='w-[100%] border mt-52 md:mt-0'></div>
            {/* descritopn section start */}

            <div className='w-[100%] h-[700px] mt-[100px]  '>
                <div className='flex justify-center space-x-5 w-[60%] h-[36px] m-auto '>
                    <h1 className='text-[16px] md:text-[24px] font-medium'>Description</h1>
                    <p className='text-[16px] md:text-[24px] font-normal text-[#9F9F9F]'>Additional Information</p>
                    <p className='text-[16px] md:text-[24px] font-normal text-[#9F9F9F]'>Reviews[5]</p>
                </div>

                <div className='w-[70%] h-[170px] pt-10 m-auto'>
                        <h1 className=' text-[16px] font-normal text-[#9F9F9F]'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look <br /> and sound of Marshall, unplugs the chords, and takes the show on the road.</h1>
                        <h1 className=' text-[16px] pt-5 font-normal text-[#9F9F9F]'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest <br /> speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange <br /> and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls <br /> to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</h1>
                </div>

                <div className='w-[80%] h-[340px] m-auto pt-28'>
                    <div className='flex flex-col space-y-5 md:space-y-0 md:flex-row  justify-between'>
                        <Image src={"/sofa.png"} alt={'help'} width={500} height={340} />
                        <Image src={"/sofa.png"} alt={'help'} width={500} height={340} />

                    </div>

                </div>

            </div>

            <div className='w-[100%] border mt-48 md:mt-0'></div>

            {/* description section end */}

                {/* card section start */}


                <div className='px-[30px] h-[750px] w-[100%]  md:m-auto  md:mt-[10px]'>
        <h1 className='text-center font-bold text-[30px] md:text-[40px] leading-[48px]'>Relative Products</h1>
          <div className="grid  justify-center grid-cols-1 gap-y-[350px]  mt-8 sm:grid-cols-2 lg:grid-cols-4  "> 
                {
            data.map((ele)=>{
                   return <Card1 key={ele.id} data={ele}/> 
             })
                }
          </div>

          <div className='mt-[400px] m-auto text-center w-[245px] h-[45px] border pt-2 border-[#B88E2F] text-[#B88E2F]'>Show More</div>
        


                {/* card section end */}

                <div className='w-[100%] m-auto border mt-24'></div>
    </div>            

                <div className='w-[100%] h-[500px] mt-[250%] md:mt-0'>
        <div className=''><Footer></Footer></div>

        </div>
            



        </div>
        

      
    </>
  )
}

export default page
