'use client'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'

import { IoIosArrowForward } from "react-icons/io"
import { GrTrophy } from "react-icons/gr"
import { useRouter } from 'next/navigation'

interface CartItem {
  id: string
  image: string
  name: string
  price: number
  quantity: number
}

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([])
  const router = useRouter()

  // Load cart data from localStorage on component mount
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart') || '{}')
    const cartItems: CartItem[] = Object.values(cartData)
    setCart(cartItems)
  }, [])

  // Function to update the cart in localStorage and state
  const updateCart = (updatedCart: CartItem[]) => {
    const cartObject = updatedCart.reduce((acc: Record<string, CartItem>, item: CartItem) => {
      acc[item.id] = item
      return acc
    }, {})
    localStorage.setItem('cart', JSON.stringify(cartObject))
    setCart(updatedCart)
  }

  // Function to handle quantity increase
  const handleIncreaseQuantity = (id: string) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
    updateCart(updatedCart)
  }

  // Function to handle quantity decrease
  const handleDecreaseQuantity = (id: string) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
    updateCart(updatedCart)
  }

  // Function to handle item removal
  const handleRemoveItem = (id: string) => {
    const updatedCart = cart.filter((item) => item.id !== id)
    updateCart(updatedCart)
  }

  // Function to calculate the total price of the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  // Function to handle checkout
  const handleCheckout = () => {
    // Save cart data to localStorage or pass it via query params
    localStorage.setItem('checkoutData', JSON.stringify(cart))
    router.push('/Checkout')
    setCart([])
  }

  return (
    <>
      <div className='w-[100%] h-screen'>
        <Navbar />
        <div className='w-[100%] h-[190px] md:h-[300px] relative'>
          <div className='w-[100%] h-[190px] md:h-[350px] absolute object-cover bg-cover'>
            <Image src={'/Rectangle.png'} alt='sa' width={700} height={350} className='w-[100%] h-[190px] md:h-[350px]' />
          </div>
          <div className='absolute w-[100%] h-[190px] md:h-[350px] flex flex-col justify-center items-center'>
            <h1 className='text-center text-[25px] md:text-[40px] font-bold leading-[30px] md:leading-[68px]'>Cart</h1>
            <div className='flex gap-2 mt-[1px]'>
              <span className='text-[14px] md:text-[16px] leading-[14px] md:leading-[24px] font-semibold'>Home</span>
              <span><IoIosArrowForward className='text-[12px] font-semibold md:text-[14px] mt-[2px] md:mt-[5px]' /></span>
              <span className='md:font-light text-[14px] md:text-[16px] leading-[14px] md:leading-[24px]'>Cart</span>
            </div>
          </div>
        </div>

        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>
            <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
              <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={item.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                        <img className="h-20 w-20 dark:hidden" src={item.image} alt={item.name} />
                        <div className="flex items-center justify-between md:order-3 md:justify-end">
                          <div className="flex items-center">
                            <button
                              type="button"
                              onClick={() => handleDecreaseQuantity(item.id)}
                              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                            >
                              <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
                              </svg>
                            </button>
                            <input
                              type="text"
                              className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                              value={item.quantity}
                              readOnly
                            />
                            <button
                              type="button"
                              onClick={() => handleIncreaseQuantity(item.id)}
                              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                            >
                              <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
                              </svg>
                            </button>
                          </div>
                          <div className="text-end md:order-4 md:w-32">
                            <p className="text-base font-bold text-gray-900 dark:text-white">${item.price * item.quantity}</p>
                          </div>
                        </div>
                        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                          <a href="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white">{item.name}</a>
                          <div className="flex items-center gap-4">
                            <button
                              type="button"
                              onClick={() => handleRemoveItem(item.id)}
                              className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Subtotal</dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">${calculateTotal()}</dd>
                      </dl>
                    </div>
                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                      <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                      <dd className="text-base font-bold text-gray-900 dark:text-white">${calculateTotal()}</dd>
                    </dl>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-black hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className='bg-[#FAF3EA] w-[100%] h-[250px] lg:h-[270px] flex items-center mt-16 md:mt-10'>
          <div className='grid grid-cols-1 md:grid-cols-4 justify-center items-center w-[90%] md:h-[60px] lg:[70px] m-auto'>
            {/* Winning section content */}
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

        <Footer />
      </div>
    </>
  )
}

export default CartPage