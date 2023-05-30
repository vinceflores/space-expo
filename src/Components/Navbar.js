import React, { useEffect, useState } from "react";
import logo from "../assets/shared/logo.svg";
import ham from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import { Link, useNavigate, Outlet } from "react-router-dom";

const destination = [
  {
    name: "01 Home",
    path: "/",
  },
  {
    name: "02  Destination",
    path: "destination",
  },
  {
    name: "03 Crew",
    path: "crew",
  },
  {
    name: "04 Technologies",
    path: "technologies",
  },
];

const Navbar = () => {
  const [clicked, setclicked] = useState(false);
  const nav_style = `max-md:hidden md:flex   p-4 gap-4 `;
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    if (clicked) {
      setclicked(false);
    } else {
      setclicked(true);
    }
  };

  useEffect(() => {
    if (clicked) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [clicked]);

  return (
    <div className="h-screen">
      <div className={` fixed `}>
        <div
          className={` text-white font-bellefair flex justify-between md:justify-center md:gap-16 lg:gap-32 items-center p-8 w-screen`}
        >
          <Link to={`/`}>
            <img
              src={logo}
              alt="logo"
              className="min-w-[40px] min-h-[40px] md:w-[48px] md:h-[48px]"
            />
          </Link>
          <div className="h-[1px] w-[473px] bg-ternary border border-ternary opacity-[0.25] left-[167px] top-[88px] max-lg:hidden " />
          <NavLinks styles={nav_style} />

          <img
            src={clicked ? close : ham}
            alt="nav_btn"
            onClick={handleClick}
            className="md:hidden"
          />
        </div>
      </div>
      <NavMobile
        clicked={clicked}
        setclicked={setclicked}
        setActive={setActive}
        active={active ? "" : "hidden"}
      />

      <div className={`h-auto ${active ? "hidden" : ""}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;

const NavLinks = ({ styles, setActive, clicked, setclicked }) => {
  const [selected, setselected] = useState(0);
  const [backdrop, setBackdrop] = useState("backdrop-blur-lg");
  const list = destination.map((i, key) => {
    const isSelected = key === selected;
    const selected_style = isSelected ? "underline decoration-red-950" : "";
    const li_styles = `
    ${selected_style}
    text-left md:text-center
    min-w-[120px]
    text-[16px] font-bold font-barlow text-ternary  decoration-ternary hover:decoration-ternary-50  hover:underline underline-offset-[1rem]  md:underline-offset-[2rem]
    `;

    return (
      <li key={key} onClick={()=> handleClick(key)} className={li_styles}>
        <Link to={i.path}>{i.name}</Link>
      </li>
    );
  });

  const handleSelect = (key) => {
    if (selected !== key) {
      setselected(key);
    } else if (selected === key) {
      setselected(key);
    } else {
      setselected("");
    }
  };

  const handleClick = (key) => {
    handleSelect(key);
    if (setActive !== undefined) {
      setActive();
      setclicked();
    }
  };

  const decor = `${styles} ${backdrop}`;
  return <ul className={decor}>{list}</ul>;
};

export const NavMobile = ({ active, setActive, setclicked, clicked }) => {
  return (
    <div
      className={`${active} h-auto flex justify-center items-center bg-black`}
    >
      <NavLinks
        setActive={setActive}
        setclicked={setclicked}
        styles="flex  mt-[12rem] justify-center items-center flex-col  h-full  md:hidden gap-8"
      />
    </div>
  );
};
