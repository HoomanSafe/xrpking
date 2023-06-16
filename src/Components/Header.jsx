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
          <p
            href=""
            className=" font-primary cursor-pointer font-medium uppercase tracking-wide italic hover:text-white"
          >
            home
          </p>
          <p
            href=""
            className=" font-primary cursor-pointer font-medium uppercase tracking-wide italic hover:text-white"
            onClick={() => {
              scroll.scrollTo(document.querySelector("#about"));
            }}
          >
            about
          </p>
          <p
            href=""
            className=" font-primary cursor-pointer font-medium uppercase tracking-wide italic hover:text-white"
          >
            tokenomics
          </p>
        </div>

        <a
          href=""
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
