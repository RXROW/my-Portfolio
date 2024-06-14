import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import {  GlobeDemo } from "./GridGlobe";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem]   grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};
 


export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  id?: number;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl  overflow-hidden relative group/bento hover:shadow-xl transition duration-200 shadow-input  border   border-white/[0.1]    justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: 'linear-gradient(301deg, #02002448 0%, #6c45e01c 100%, #6613da46 100%)'
      }}
    >
      <div className={id === 6 ? "flex justify-center h-full" : ""}>
        <div className="w-full h-full absolute">
          {img && (
            <img src={img} alt={img} className={cn(imgClassName, 'object-center object-cover')} />
          )}
        </div>
      </div>
      {spareImg && (
        <div className={`absolute ring-0 -bottom-0 ${id === 5 ? 'w-full opacity-80' : ''}`}>
          <img src={spareImg} alt={spareImg} className="object-center object-cover w-full h-full" />
        </div>
      )}
      {id === 6 && (
        <BackgroundGradientAnimation>
          <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
        </BackgroundGradientAnimation>
      )}
      {id===2 && (
        <GlobeDemo/>
      )}
      {id===3 &&(
        <div className="flex absolute gap-1 lg:gap-5 w-fit -right-3 lg:-right-2 ">
          <div className="flex flex-col gap-3  ">
            {['React.js' ,'Next.js','TypeScript','JavaScript'].map((item)=>(
              <span 
              key={item}
              className="py-2 lg:py-4 lg:px-3 mr-3 px-3 text-xs   opacity-50 lg:opacity-80 rounded-sm text-center bg-[#10132E] " >{item}</span>
            ))}
            <span className="py-4 px-3 rounded-sm text-center bg-[#10132E] mr-3 "/>

          </div>
          <div className="flex flex-col gap-3   ">
          <span className="py-4 px-3 rounded-sm text-center bg-[#10132E] mr-3 "/>

            {['Node.js' ,'Express.js','Mongodb','PhP'].map((item)=>(
              <span 
              key={item}
              className="py-2 lg:py-4 lg:px-3 mr-3 px-3 text-xs   opacity-50 lg:opacity-80 rounded-sm text-center bg-[#10132E] " >{item}</span>
            ))}

          </div>
           
        </div>
        
      )}
      <div
        className={cn(
          titleClassName,
          'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10  '
        )}
      >
       
      </div>
      <div >
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 absolute top-3 left-5">
          {title}
        </div>
        <div className="font-sans font-normal mb-2 ml-2  text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};