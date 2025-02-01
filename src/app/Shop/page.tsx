
// "use client"
// import React from 'react'
// import Navbar from '../components/Navbar'
// import Image from 'next/image'
// import Rectangle from '../../../public/Rectangle.png'
// import { client } from '@/sanity/lib/client'
// import { IoIosArrowForward } from "react-icons/io";
// import { BsFillGridFill } from "react-icons/bs";
// import { BsViewList } from "react-icons/bs";
// import Card1 from '../components/Card1';
// import { GrTrophy } from "react-icons/gr";
// import Footer from '../components/Footer';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import Link from 'next/link';
// import SearchAndFilter from '../components/SearchandFilter'

// interface Data{

//     id:number,
//     image:any ,
//     name:string,
//     category:string,
//     price:number,
//     slug:string
    
// }


// const page = async() => {
  
//     const qury=`*[_type=='product'] | order(_createdAt desc)[0...8]{
//         _id,name,category,
//           price, "slug":slug.current,
//           "image":image.asset->url,
//       }`
      
//         const data:Data[] = await client.fetch(qury)

   
//     return (
//     <>
//     <div className='w-[100%] h-screen'>

//         {/* navbar */}
//         <Navbar></Navbar>
//         {/* hero section  */}
//         <div className='w-[100%] h-[190px] md:h-[350px] relative'>
//             <div className='w-[100%] h-[190px] md:h-[350px] absolute bg-cover'>
//                 <Image src={Rectangle} alt='sa' width={1000} height={350} className='w-[100%] h-[190px] md:h-[350px]' />    
                    
//             </div>
//             <div className='absolute  w-[100%] h-[190px] md:h-[350px] flex flex-col justify-center items-center'>
//                     <h1 className='text-center text-[25px] md:text-[40px] font-bold leading-[30px] md:leading-[68px]'>Shop</h1>
//                     <div className='flex gap-2 mt-[1px]'>
//                     <span className=' text-[14px] md:text-[16px] leading-[14px] md:leading-[24px] font-semibold'>Home </span>
//                     <span><IoIosArrowForward className='text-[12px] md:text-[14px]  mt-[2px] md:mt-[5px]' /></span>
//                     <span className='md:font-light text-[14px] md:text-[16px] leading-[14px] md:leading-[24px]'>Shop</span>
//                     </div>
                    

//                 </div>
        
//         </div>  

//         <div className='hidden md:block w-[100%] h-[90px] bg-[#F9F1E7] py-1'>
//             <div className='w-[85%] m-auto py-6 mt-4'>
//                 <div className='flex justify-between'>
//                     <div className='flex gap-5'>
//                         <h1 className='text-[20px] font-normal leading-[30px
//                         ]'>Filter</h1>
//                         <BsFillGridFill className='w-[28px] h-[28px]' />
//                         <BsViewList className='w-[28px] h-[28px]'/>
//                         <div className='w-[0px] border-2 border-[#9F9F9F] h-[30px]'>
//                         </div>
//                         <h1 className=' font-normal text-[16px] leading-[24px]'>Showing 1–16 of 32 results</h1>
                        
//                     </div>
//                     <div className='flex justify-between gap-5'>
//                        <div className='flex justify-between gap-2'>
//                             <h1 className='font-normal text-[20px] leading-[30px]'>Show</h1>
//                             <h1 className='bg-white text-gray-300 px-1 text-[20px]'>16</h1>  
//                         </div>

//                         <div className='flex justify-between gap-2'>
//                             <h1 className='font-normal text-[20px] leading-[30px]'>Short by</h1>
//                             <h1 className='bg-white text-gray-300 px-1 text-[20px]'>Defaults</h1>  
//                         </div> 
                          
//                     </div>

//                 </div>

//             </div>

//         </div>

// {/* hero section end */}


// {/* card section start */}

// <div className='mt-10 w-[100%] h-auto '>


//         <div className='mt-2 w-[85%] h-auto m-auto'>
//             <div className='grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-4  gap-y-[350px]'>
//                 {
//                     data.map((ele:any)=>{
//                         return (
//                         <Link href={`/Singleproduct/${ele.slug}`} >
//                         <Card1 key={ele.id} data={ele}/>
//                         </Link>
//                     )})
//                 }

//             </div>

//              <div className='w-[100%] h-[90px]  mt-[350px]'>
//                 <div className='flex justify-center items-baseline gap-2 md:gap-6 w-[392px] h-[90px] m-auto '>
//                 <Link href={'/Shop'}>  <h1 className='rounded-[10px] bg-[#F9F1E7] hover:bg-[#B88E2F] hover:transition-colors hover:duration-300 hover:ease-in-out  px-3 py-1  md:px-5 md:py-2 text-center text-black text-[16px] md:text-[20px] font-normal leading-[30px]'>1</h1></Link>
//                    <Link href={'/Shop'}> <h1 className='rounded-[10px] bg-[#F9F1E7] hover:bg-[#B88E2F] px-3 py-1  md:px-5 md:py-2 text-center text-[16px] md:text-[20px] font-normal leading-[30px]'>2</h1></Link>
//                    <Link href={'/Shop'}>  <h1 className='rounded-[10px] bg-[#F9F1E7] hover:bg-[#B88E2F] px-3 py-1  md:px-5 md:py-2 text-center text-[16px] md:text-[20px] font-normal leading-[30px]'>Next</h1></Link>
//                 </div>

//             </div> 
//         </div>

        
            



// </div>

// {/* wininng section start */}

// <div className='bg-[#FAF3EA] w-[100%] h-[250px] lg:h-[270px] flex items-center mt-10 '>
//               <div className='grid grid-cols-1 md:grid-cols-4 justify-center items-center w-[90%] md:h-[60px] lg:[70px]  m-auto'>
//                     {/* div 1 */}
//                     <div className='flex justify-center mt-6  gap-2'>
//                         <GrTrophy className='w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[50px] lg:h-[50px]'/>
//                         <div className='flex flex-col gap-1'>
//                             <h1 className='text-[16px] md:text-[16px] font-semibold leading-[20px] md:leading-[20px] text-[#242424]'>Hight Quality</h1>
//                             <h1 className='text-[12px] md:text-[12px] font-medium leading-[2px] md:leading-[15px] text-[#898989]'>crafted from top materials</h1>
//                         </div>
//                     </div>
//                     {/* div 1 */}
//                     {/* div 2 */}
//                     <div className='flex justify-center mt-6  gap-2'>
//                         <GrTrophy className='w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[50px] lg:h-[50px]'/>
//                         <div className='flex flex-col gap-1'>
//                             <h1 className='text-[16px] md:text-[16px] font-semibold leading-[20px] md:leading-[20px] text-[#242424]'>Warranty Production</h1>
//                             <h1 className='text-[12px] md:text-[12px] font-medium leading-[2px] md:leading-[15px] text-[#898989]'>Over 2 years</h1>
//                         </div>
//                     </div>
//                     {/* div 2 */}
//                     {/* div 3 */}
//                     <div className='flex justify-center mt-6  gap-2'>
//                         <GrTrophy className='w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[50px] lg:h-[50px]'/>
//                         <div className='flex flex-col gap-1'>
//                             <h1 className='text-[16px] md:text-[16px] font-semibold leading-[20px] md:leading-[20px] text-[#242424]'>Free Shipping</h1>
//                             <h1 className='text-[12px] md:text-[12px] font-medium leading-[2px] md:leading-[15px] text-[#898989]'>Order Over 150$</h1>
//                         </div>
//                     </div>
//                     {/* div 3 */}
//                     {/* div 4 */}
//                     <div className='flex justify-center mt-6  gap-2'>
//                         <GrTrophy className='w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[50px] lg:h-[50px]'/>
//                         <div className='flex flex-col gap-1'>
//                             <h1 className='text-[16px] md:text-[16px] font-semibold leading-[20px] md:leading-[20px] text-[#242424]'>24/7 Support</h1>
//                             <h1 className='text-[12px] md:text-[12px] font-medium leading-[2px] md:leading-[15px] text-[#898989]'>Dedicated support</h1>
//                         </div>
//                     </div>
//                     {/* div 4 */}
//                 </div>  

// </div>



// {/* wininng section end */}

// {/* footer section start */}


// <Footer></Footer>

// {/* footer section end */}



//     </div>
//     </>
//   )
// }

// export default page





// "use client"
// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import Image from 'next/image';
// import Rectangle from '../../../public/Rectangle.png';
// import { client } from '@/sanity/lib/client';
// import { IoIosArrowForward } from "react-icons/io";
// import { BsFillGridFill } from "react-icons/bs";
// import { BsViewList } from "react-icons/bs";
// import Card1 from '../components/Card1';
// import { GrTrophy } from "react-icons/gr";
// import Footer from '../components/Footer';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import Link from 'next/link';
// import SearchAndFilter from '../components/SearchandFilter';

// interface Data {
//   id: number;
//   image: any;
//   name: string;
//   category: string;
//   price: number;
//   slug: string;
//   quantity:number;
// }

// const Page = () => {
//   const [products, setProducts] = useState<Data[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<Data[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const query = `*[_type=='product'] | order(_createdAt desc)[0...8]{
//         _id, name, category,
//         price, "slug":slug.current,
//         "image":image.asset->url,quantity
//       }`;
//       const data: Data[] = await client.fetch(query);
//       setProducts(data);
//       setFilteredProducts(data);
//     };

//     fetchData();
//   }, []);

//   const handleSearch = (searchTerm: string) => {
//     const filtered = products.filter(product =>
//       product.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   };

//   const handleFilter = (filters: { category?: string; minPrice?: number; maxPrice?: number }) => {
//     let filtered = products;

//     if (filters.category) {
//       filtered = filtered.filter(product => product.category === filters.category);
//     }

//     if (filters.minPrice !== undefined) {
//       filtered = filtered.filter(product => product.price >= filters.minPrice!);
//     }

//     if (filters.maxPrice !== undefined) {
//       filtered = filtered.filter(product => product.price <= filters.maxPrice!);
//     }

//     setFilteredProducts(filtered);
//   };

//   return (
//     <>
//       <div className='w-[100%] h-screen'>
//         <Navbar />
//         <div className='w-[100%] h-[190px] md:h-[350px] relative'>
//           <div className='w-[100%] h-[190px] md:h-[350px] absolute bg-cover'>
//             <Image src={Rectangle} alt='sa' width={1000} height={350} className='w-[100%] h-[190px] md:h-[350px]' />
//           </div>
//           <div className='absolute  w-[100%] h-[190px] md:h-[350px] flex flex-col justify-center items-center'>
//             <h1 className='text-center text-[25px] md:text-[40px] font-bold leading-[30px] md:leading-[68px]'>Shop</h1>
//             <div className='flex gap-2 mt-[1px]'>
//               <span className=' text-[14px] md:text-[16px] leading-[14px] md:leading-[24px] font-semibold'>Home </span>
//               <span><IoIosArrowForward className='text-[12px] md:text-[14px]  mt-[2px] md:mt-[5px]' /></span>
//               <span className='md:font-light text-[14px] md:text-[16px] leading-[14px] md:leading-[24px]'>Shop</span>
//             </div>
//           </div>
//         </div>

//         <SearchAndFilter onSearch={handleSearch} onFilter={handleFilter} />

//         <div className='mt-10 w-[100%] h-auto'>
//           <div className='mt-2 w-[85%] h-auto m-auto'>
//             <div className='grid grid-cols-1 justify-center sm:grid-cols-2 md:grid-cols-4 gap-y-[350px]'>
//               {filteredProducts.map((ele: Data) => (
//                 <Link href={`/Singleproduct/${ele.slug}`} key={ele.id}>
//                   <Card1 data={ele} />
//                 </Link>
//               ))}
//             </div>

//             <div className='w-[100%] h-[90px] mt-[350px]'>
//               <div className='flex justify-center items-baseline gap-2 md:gap-6 w-[392px] h-[90px] m-auto'>
//                 <Link href={'/Shop'}><h1 className='rounded-[10px] bg-[#F9F1E7] hover:bg-[#B88E2F] hover:transition-colors hover:duration-300 hover:ease-in-out px-3 py-1 md:px-5 md:py-2 text-center text-black text-[16px] md:text-[20px] font-normal leading-[30px]'>1</h1></Link>
//                 <Link href={'/Shop'}><h1 className='rounded-[10px] bg-[#F9F1E7] hover:bg-[#B88E2F] px-3 py-1 md:px-5 md:py-2 text-center text-[16px] md:text-[20px] font-normal leading-[30px]'>2</h1></Link>
//                 <Link href={'/Shop'}><h1 className='rounded-[10px] bg-[#F9F1E7] hover:bg-[#B88E2F] px-3 py-1 md:px-5 md:py-2 text-center text-[16px] md:text-[20px] font-normal leading-[30px]'>Next</h1></Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Winning section and footer remain unchanged */}
//       </div>
//     </>
//   );
// };

// export default Page;



"use client"
import React, { useState, useEffect } from 'react';
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

const page = () => {
  const [products, setProducts] = useState<Data[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Data[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8); // Number of products per page

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type=='product'] | order(_createdAt desc){
         _id, name, category,
        price, "slug":slug.current,
        "image":image.asset->url,quantity
      }`;
      const data: Data[] = await client.fetch(query);
      setProducts(data);
      setFilteredProducts(data);
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

export default page;