import Image from "next/image";
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "./components/Grid";
import Projects from "./components/Projects";
import { navItems } from "@/data";
 
export default function Home() {
  return (
   <main className=" relative bg-black-100 flex items-center justify-center flex-col overflow-hidden mx-auto 
   sm:px-10">
    <div className="max-w-7xl w-full ">
 <FloatingNav navItems={navItems}/>
  <Hero/>
  <Grid/>
  <Projects/>

 

    </div>
   </main>
  );

}
