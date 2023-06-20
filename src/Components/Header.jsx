import React from "react";
import logo from "../assets/logo.png";
import LocomotiveScroll from "locomotive-scroll";

const Header = () => {
  const scroll = new LocomotiveScroll();

  return (
    <header className="py-4 w-full text-black ">
      <nav className="container flex justify-between items-center">
        <a
          href=""
          data-aos="fade-right"
          className="flex justify-center gap-2 items-center font-bold capitalize text-3xl"
        >
          <img src={logo} alt="" className="w-[3rem] header-logo" />
        </a>

        <div className="hidden lg:flex items-center gap-7 justify-between">
          <p className=" font-primary cursor-pointer font-medium uppercase tracking-wide italic hover:text-white">
            home
          </p>
          <p
            className=" font-primary cursor-pointer font-medium uppercase tracking-wide italic hover:text-white"
            onClick={() => {
              scroll.scrollTo(document.querySelector("#about"));
            }}
          >
            about
          </p>
          <p
            onClick={() => {
              scroll.scrollTo(document.querySelector("#tokenomics"));
            }}
            className=" font-primary cursor-pointer font-medium uppercase tracking-wide italic hover:text-white"
          >
            tokenomics
          </p>
        </div>

        <a
          href="https://www.dextools.io/app/ru/ether/pair-explorer/0x3cf55b8d0beddc24ce83182e8916dc0f9cc0c414"
          target="_blank"
          data-aos="fade-left"
          data-aos-duration="900"
          className="text-white bg-black  px-8 py-3 rounded-md font-medium capitalize ring ring-primary/60"
        >
          buy now
        </a>
      </nav>
    </header>
  );
};

export default Header;
