import React from "react";
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div
      className={` pt-24 lg:gap-24 gap-12 flex flex-col md:flex-row justify-center h-screen w-full items-center text-white md:bg-home_tablet bg-home_tablet lg:bg-home_desktop bg-no-repeat bg-cover`}
    >
      <div className="gap-8 h-auto lex flex-col justify-center items-start text-center lg:text-left ">
        <h5 className=" font-barlow text-2xl">So, you want to travel to </h5>
        <h1 className="font-bellefair text-7xl lg:text-[150px]">SPACE</h1>
        <p className=" w-[222px] md:w-[444px] h-auto lg:w-[444px] lg:h-[128px] font-barlow ">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <button className="font-bellefair text-[32px] w-[150px] h-[150px] md:w-[274px] md:h-[274px] rounded-full bg-ternary text-primary">
        
        <Link to={'/destination'}>
        Explore
        </Link>
      </button>
    </div>
  );
};

export default Home;
