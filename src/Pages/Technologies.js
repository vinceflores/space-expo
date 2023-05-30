import React, { useState, useEffect } from "react";
import { data } from "../data.js";
const Technologies = () => {
  const [techIndex, setTechIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });



  return (
    <div className=" h-screen  flex  flex-col justify-center items-center md:h-screen overflow-scroll bg-technologies_mobile md:bg-technologies_tablet lg:bg-technologies_desktop  bg-cover  bg-no-repeat">
      <h1 className="text-white  mt-[18rem] md:mt-[8rem] ">
        <span className={`opacity-[25%]`}>03</span> SPACE LAUNCH 101
      </h1>
      <div className="flex flex-col lg:flex-row-reverse my-[4rem] gap-4 ">
        <img
          src={windowWidth <= 640?  data.technology[techIndex].images.landscape : data.technology[techIndex].images.portrait}
          alt="tech"
          className=" flex-row"
        />
        <section className=" text-ternary flex flex-col lg:flex-row justify-center items-center gap-4">
          <div className="flex gap-2 lg:flex-col py-2">
            {Array.from({ length: data.technology.length }).map((i, key) => {
              const active = techIndex === key? "bg-ternary text-primary": "text-ternary bg-primary"
              const handleClick = (k) =>{
                if(techIndex !== key){
                  setTechIndex(parseInt(key))
                }else{
                  setTechIndex(0)
                }
              }
              
              return (
                <button
                onClick={() => handleClick(key)}
                  className={` ${active} font-bellefair text-[16px] md:text-[32px] w-[40px] h-[40px] md:w-[60px] md:h-[60px]  lg:w-[80px] lg:h-[80px]  hover:bg-ternary hover:text-primary border  border-ternary rounded-full `}
                >
                  {key + 1}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col">
            <h2 className="font-barlow text-[14px] w-full text-center lg:text-left">The Technology...</h2>
            <h1 className="text-[24px] font-bellefair  w-full text-center lg:text-left">
              {data.technology[techIndex].name}
            </h1>
            <p className="w-[300px] lg:w-[444px] text-center lg:text-left"> 
              {data.technology[techIndex].description}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Technologies;
