import React, { useState } from "react";
import { data } from "../data.js";
const Destination = () => {
  const [planetindex, setPlanetIndex] = useState(0);
  const [active, setActive] = useState("underline");

  const planet_list = data.destinations.map((i, key) => {
    const underline = planetindex === parseInt(key) ? "underline" : "";

    return (
      <li
        onClick={() => handleClick(key)}
        className={`${underline} cursor-pointer text-ternary hover:underline  underline-offset-[1.5rem] font-barlow text-[16px] `}
        key={key}
      >
        {i.name}
      </li>
    );
  });

  const handleClick = (key) => {
    if (planetindex !== key) {
      setPlanetIndex(key);
    } else {
      setPlanetIndex(0);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen overflow-scroll  w-full px-8 md:px-0 text-white bg-destination_mobile md:bg-destination_tablet lg:bg-destination_desktop bg-cover bg-no-repeat ">
        <h1 className="text-[18px]  mt-[16rem] lg:my-[4rem] md:text-[28px]"><span className="opacity-[25%]">01</span>  Pick your destination</h1>
      <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col justify-center items-center lg:items-start gap-4 lg:gap-12 ny-4">
        <img
          src={data.destinations[planetindex].images.png}
          alt="moon"
          className="w-[260px] h-[260px]  lg:w-[478px] lg:h-[478px] "
        />
      </div>
      <div className="flex flex-col justify-center items-start gap-4">
        {/* Planet navbar */}
        <ul className="flex gap-8 text-lg w-full justify-center items-center lg:justify-start ">{planet_list}</ul>
        {/* Planet info */}
        <h1 className=" font-bellefair w-full text-[60px] lg:text-[150px] h-auto text-center lg:text-left ">
          {data.destinations[planetindex].name}
        </h1>

        <p className="font-bellefair text-[14px]   lg:text-[18px] lg:w-[350px] w-[300px] h-auto text-center lg:text-left">
          {data.destinations[planetindex].description}
        </p>

        <div className="grid grid-cols-2 text-center lg:text-left gap-x-8 ">
          <h2 className="font-barlow text-[14px]  ">AvG. DISTANCE</h2>
          <h2 className="font-barlow text-[14px] ">EST. TRAVEL TIME</h2>
          <h1 className="font-bellefair text-[28px]">
            {data.destinations[planetindex].distance}
          </h1>
          <h1 className="font-bellefair text-[28px]">
            {data.destinations[planetindex].travel}
          </h1>
        </div>
      </div>
      </div>

    </div>
  );
};

export default Destination;
