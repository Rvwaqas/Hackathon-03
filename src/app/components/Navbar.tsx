"use client"
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../assert/logo.png';
import { BsPerson } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { IoMdHeartEmpty } from 'react-icons/io';
import { BsCart3 } from 'react-icons/bs';
import { FaBars, FaTimes } from 'react-icons/fa'; // Hamburger and close icons
import Link from 'next/link';
import { MdAccountCircle } from "react-icons/md";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="h-auto w-full bg-[#ffffff]">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between w-full h-[100px] max-w-[1200px] px-5 mx-auto items-center">
        {/* Logo */}
        <div>
          <Image width={185} height={41} alt="logo" src={logo} className="w-[185px] h-[50px]" />
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="flex justify-between font-medium space-x-10 text-[16px] ">
            <Link href="/">
              <li className='text-[#B88E2F] hover:bg-yellow-600 hover:text-white rounded-sm hover:p-2  font-medium'>Home</li>
            </Link>
            <Link href="/Shop">
              <li className='text-[#B88E2F] hover:bg-yellow-600 hover:text-white rounded-sm hover:p-2 font-medium'>Shop</li>
            </Link>
            <Link href="/Blog">
              <li className='text-[#B88E2F] hover:bg-yellow-600 hover:text-white rounded-sm hover:p-2 font-medium'>Blog</li>
            </Link>
            <Link href="/Contact">
              <li className='text-[#B88E2F] hover:bg-yellow-600 hover:text-white rounded-sm hover:p-2 font-medium'>Contact</li>
            </Link>
          </ul>
        </div>

        {/* Icons */}
        <div>
          <ul className="flex justify-between space-x-5">
            <Link href="/Sign-up">
              <li>
                <BsPerson className="w-[28px] h-[28px] text-[#B88E2F]" />
              </li>
            </Link>
           
           
            <Link href="/Cart">
              <li>
                <BsCart3 className="w-[28px] h-[28px] text-[#B88E2F]" />
              </li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center px-5 py-4">
        {/* Logo */}
        <div>
          <Image width={185} height={41} alt="logo" src={logo} className="w-[90px] h-[40px]" />
        </div>

        {/* Hamburger Menu Icon */}
        
        <div className='flex justify-end gap-4'>
        <Link href="/Sign-up">
              <h1>
              <MdAccountCircle className=" w-[28px] h-[28px] text-[#B88E2F]" /> 
              </h1>
            </Link>
            <Link href="/Cart">
              <h1>
              <BsCart3 className="w-[28px] h-[28px] text-[#B88E2F]" /> 
              </h1>
            </Link>
        
        <div onClick={toggleMobileMenu} className="cursor-pointer">
          {isMobileMenuOpen ? (
            <FaTimes className="w-6 h-6 text-[#B88E2F]" /> // Close icon
          ) : (
            <FaBars className="w-6 h-6 text-[#B88E2F]" /> // Hamburger icon
          )}
        </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#ffffff] w-full">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/Shop">
              <li>Shop</li>
            </Link>
            <Link href="/Blog">
              <li>Blog</li>
            </Link>
            <Link href="/Contact">
              <li>Contact</li>
            </Link>
           
            
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;