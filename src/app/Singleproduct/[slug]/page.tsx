
"use client"
import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { client } from '@/sanity/lib/client'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Prop {
  params: {
    slug: string
  }
}

interface Data {
  id: string
  image: string
  name: string
  category: string
  price: number
  quantity: number
}

const Page = async ({ params }: Prop) => {
  const query = `*[_type == "product" && slug.current == "${params.slug}"]{
    "id": _id,
    "image": image.asset->url,
    name,
    category,
    price,
    quantity
  }`

  const productData = await client.fetch(query)

  if (!productData || productData.length === 0) {
    throw new Error("Product not found")
  }

  const product = productData[0]

  const handleAddToCart = (data: Data) => {
    
    const cart = JSON.parse(localStorage.getItem('cart') || '{}')
    if (cart[data.id]) {
      cart[data.id] = {
        ...cart[data.id],
        quantity: cart[data.id].quantity + 1
      }
    } else {
      cart[data.id] = { ...data, quantity: 1 }
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    alert("Product add in cart")
  }

  return (
    <div className="w-[100%] min-h-screen">
      <Navbar />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={product.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product.category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {/* Rating stars */}
                </span>
              </div>
              <p className="leading-relaxed">
                {product.description}
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                {/* Color and size selectors */}
              </div>
              <div className="flex justify-between gap-2">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${product.price}
                </span>
                <div>
                  
                <button
                  onClick={() => handleAddToCart(product)} 

                  className="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
                >
                 <ToastContainer/>
                  Add to Cart
                </button>
                </div>
                <Link href={'/'}>
                <button
                  className="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded"
                >
                  Back to Home
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Page