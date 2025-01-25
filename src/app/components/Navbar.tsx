import React from 'react'
import Image from 'next/image'
import logo from '../assert/logo.png'
import { BsPerson } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className=' h-auto md:w-[100%] md:h-[100px] bg-[#ffffff]'>
        <div className='flex justify-between w-[100%] h-auto md:w-[85%] md:h-[38px] py-2 px-5 m-auto'>
               <div className='hidden md:block'>
                <Image width={185} height={41} alt='help' src={logo}  className='w-[185px] h-[50px]' />
               </div>
               <div className='pt-5 hidden md:block'>
                <ul className='flex justify-between font-medium  space-x-10 text-[16px]'>
                <Link href="/">
                  <li>Home</li>
                </Link>
                <Link href="/Shop">
                  <li>Shop</li>
                  </Link>
                  <Link href='/Blog'>
                  <li>Blog</li>
                  </Link>
                  <Link href='/Contact'>
                  <li>Contact</li>
                  </Link>
                </ul>
               </div>

               <div className='pt-3 md:block hidden'>
                <ul className='flex justify-between space-x-5'>
                <li><BsPerson className='  w-[28px] h-[28px]' /></li>
                <li><CiSearch className='w-[28px] h-[28px]' /></li>
                <li><IoMdHeartEmpty className='w-[28px] h-[28px]' /></li>
                <Link href={'/Cart'}><li><BsCart3 className='w-[28px] h-[28px]' /></li></Link>
                </ul>

                </div> 
        </div>
        <div className='md:hidden block '>
          <div className='flex justify-center pt-5 '>
                <Image width={185} height={41} alt='help' src={logo}  className='w-[185px] h-[50px] ' />
               </div>
               </div>
    </div>
  )
}

export default Navbar
