import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Range from "./components/Range";
import Product from "./components/Product";
import Card1 from "./components/Card1";


export default function Home() {
  return (
  <>
  <div className="w-[1440px] h-screen" >
<Navbar />
<Hero/>
<Range/>
<Product/>

{/* <Card1/> */}


  </div>
  
  </>
  );
}
