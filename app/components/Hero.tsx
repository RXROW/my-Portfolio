import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ButtonsMagic from "./ui/ButtonsMagic";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />

        <Spotlight className="top-32 -right-96   h-screen" fill="purple" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100  bg-white
       dark:bg-grid-white/[0.05] bg-grid-black/[0.2]   flex items-center justify-center absolute top-0 left-0"
      >
     
        <div
          className="absolute pointer-events-none inset-0 flex items-center 
      justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        ></div>
      </div>
      {/* text */}
      <div className="flex relative  my-20  justify-center z-10">
        <div className="max max-w[98vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className=" uppercase   tracking-wide text-xs text-center text-blue-100 
          max-w-80 ">Dynamic Web Magic with Next.Js </h2>
          <TextGenerateEffect className=" text-center    tracking-wide px-10 md:px-0  " words="Transforming  Concepts  into Seamles User Experiences " />
          <p className=" tracking-wide text-center mt-4 text-sm lg:text-xl ">HI,I&apos;M Eslam, a Full Stack Web Developer  </p>
          <a href="/about"> <ButtonsMagic 
          title="Show My Work" 
          icon={<FaLocationArrow/>} position="right"/></a>
        </div>

      </div>
    </div>
  );
};

export default Hero;
