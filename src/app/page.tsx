import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Range from "./components/Range";
import Product from "./components/Product";
import Footer from "./components/Footer"; 
import Image from "next/image";

export default function Home() {
  return (
  <>
  <div className="w-[100%] h-screen" >
<Navbar />
<Hero/>
<Range/>
<Product/>

<div className="w-[100%] h-[780px] mt-[2600px] md:mt-0 ">
  <h1 className="text-[#616161] text-center font-semibold text-[20px] leading-[30px]">Share your setup with</h1>
   <h1 className="text-center font-bold text-[40px] leading-[48px] text-[#3A3A3A]">#FuniroFurniture</h1> 
    <div className=" w-[95%] m-auto md:w-[100%] h-[720px] ">
      <Image src={'/last.png'} alt="help" width={1000} height={700} className=" w-[100%] h-[60%] md:w-[100%] md:h-[100%]  object-cover bg-cover"/>

    </div>
</div>

<Footer></Footer>






  </div>
  
  </>
  );
}
