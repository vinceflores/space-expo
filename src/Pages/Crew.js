import React, { useState } from "react";
import { data } from "../data.js";

const Crew = () => {
  const [crewIndex, setCrewIndex] = useState(0);
  const handleClick = (key) => {
    if(crewIndex !== key){
      setCrewIndex(key) 
    }else{
      setCrewIndex(0)
    }
  };

  return (
    <div
      className={`gap-8 overflow-scroll  flex flex-col justify-center items-center  h-screen bg-crew_mobile md:bg-crew_tablet lg:bg-crew_desktop bg-cover bg-no-repeat text-ternary`}
    >
      <h1 className="font-barlow  w-full text-center md:text-[18px] mt-[12rem] md:mt-[4rem]">
        <span className={`opacity-[25%] `}>02</span> Meet your crew
      </h1>
      <div
        className={`gap-8 flex flex-col md:flex-col-reverse lg:flex-row-reverse justify-center items-center`}
      >
        <img
          src={data.crew[crewIndex].images.png}
          alt="crew"
          className={`w-[177px] md:w-[400px] h-auto`}
        />

        <section className="gap-4 flex flex-col md:flex-col-reverse justify-center items-center md:items-start ">
          <div className={`flex gap-2`}>
            {Array.from({ length: 4 }).map((i, key) => {
              const active =
                crewIndex === parseInt(key) ? "opacity-[100%]" : "opacity-[25%]";
              return (
                <button
                  onClick={() => handleClick(parseInt(key))}
                  className={`${active} bg-ternary opacity-[25%] rounded-full w-[10px] h-[10px]`}
                ></button>
              );
            })}
          </div>
          <div
            className={`flex flex-col justify-center items-center text-center lg:text-left `}
          >
            <h2 className="font-bellefair text-center w-full md:text-left text-[16px]">
              {data.crew[crewIndex].role}
            </h2>
            <h1 className="text-[24px] text-center w-full  md:text-left font-bellefair">
              {data.crew[crewIndex].name}
            </h1>
            <p className="font-barlow text-[14px] w-[300px] h-[100px] text-center lg:text-left">
              {data.crew[crewIndex].bio}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Crew;
