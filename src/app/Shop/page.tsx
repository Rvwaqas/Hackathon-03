
"use client"
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Rectangle from '../../../public/Rectangle.png';
import { client } from '@/sanity/lib/client';
import { IoIosArrowForward } from "react-icons/io";
import Card1 from '../components/Card1';
import Footer from '../components/Footer';
import Link from 'next/link';
import SearchAndFilter from '../components/SearchandFilter';
import Pagination from '../components/Pagination'; // Import the Pagination component

interface Data {
  id: number;
  image: any;
  name: string;
  category: string;
  price: number;
  slug: string;
  quantity: number;
}

const Page = () => {
  const [products, setProducts] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState<Data[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8); // Number of products per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type=='product'] | order(_createdAt desc){
           _id, name, category,
          price, "slug":slug.current,
          "image":image.asset->url,quantity
        }`;
        const data: Data[] = await client.fetch(query);
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  const handleSearch = (searchTerm: string) => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to the first page after search
  };

  const handleFilter = (filters: { category?: string; minPrice?: number; maxPrice?: number }) => {
    let filtered = products;

    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    if (filters.minPrice !== undefined) {
      filtered = filtered.filter(product => product.price >= filters.minPrice!);
    }

    if (filters.maxPrice !== undefined) {
      filtered = filtered.filter(product => product.price <= filters.maxPrice!);
    }

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to the first page after filtering
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <>
      <div className='w-[100%] h-screen'>
        <Navbar />
        <div className='w-[100%] h-[190px] md:h-[350px] relative'>
          <div className='w-[100%] h-[190px] md:h-[350px] absolute bg-cover'>
            <Image src={Rectangle} alt='sa' width={1000} height={350} className='w-[100%] h-[190px] md:h-[350px]' />
          </div>
          <div className='absolute w-[100%] h-[190px] md:h-[350px] flex flex-col justify-center items-center'>
            <h1 className='text-center text-[25px] md:text-[40px] font-bold leading-[30px] md:leading-[68px]'>Shop</h1>
            <div className='flex gap-2 mt-[1px]'>
              <span className='text-[14px] md:text-[16px] leading-[14px] md:leading-[24px] font-semibold'>Home </span>
              <span><IoIosArrowForward className='text-[12px] md:text-[14px] mt-[2px] md:mt-[5px]' /></span>
              <span className='md:font-light text-[14px] md:text-[16px] leading-[14px] md:leading-[24px]'>Shop</span>
            </div>
          </div>
        </div>

        <SearchAndFilter onSearch={handleSearch} onFilter={handleFilter} />

        <div className='mt-10 w-[100%] h-auto'>
          <div className='mt-2 w-[85%] h-auto m-auto'>
            <div className='grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-4 gap-y-[350px]'>
              {currentProducts.map((ele: Data) => (
                <Link href={`/Singleproduct/${ele.slug}`} >
                           <Card1 key={ele.id} data={ele}/>
                         </Link>
              ))}
            </div>

            {/* Pagination Component */}
            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={filteredProducts.length}
              currentPage={currentPage}
              paginate={(pageNumber) => setCurrentPage(pageNumber)}
            />
          </div>
        </div>

        {/* Winning section and footer remain unchanged */}
        <Footer></Footer>
      </div>
    </>
  );
};

export default Page;