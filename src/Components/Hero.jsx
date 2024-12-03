import React from "react";
import { AiFillTwitterSquare } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";
import Logo2 from "../assets/logo112.png";
import etherscan from "../assets/etherscan.png";
import dextool from "../assets/dextool.png";


const Hero = () => {
  return (
    <section className=" w-full py-[150px] hero">
      <div className="container flex justify-center text-center items-center flex-col gap-2">
        <h2 className="text-xl font-bold uppercase text-white hero-welcome">
          welcome to
        </h2>
        <a
          href=""
          data-aos="fade-right"
          className="text-7xl md:text-9xl uppercase font-bold text-black hero-logo"
        >
          <img src={Logo2} alt="" loading="lazy" />
        </a>
        <p
          className="max-w-[800px] mx-auto font-bold"
          data-aos="fade-up"
          data-aos-duration="500"
        >
         We are now tackling the second part of our mission – extending and expanding our technology to drive new innovation
          for good, and exemplify the XRP King Effort to advance that innovation to all corners of the globe.
        </p>
        <h2 className="text-4xl font-bold uppercase text-black hero-welcome">
          ca
        </h2>
        <p
          className="max-w-[800px] mx-auto font-bold break-all"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          0x1326d9EdE54Ce7Aa631567D307Bd4b09470e510a
        </p>
        <div className="flex items-center gap-4 flex-wrap mt-8 justify-center">
          <a
            data-aos="fade-right"
            data-aos-duration="600"
            href="https://bscscan.com/token/0x1326d9ede54ce7aa631567d307bd4b09470e510a"
            className="w-[3rem]"
          >
            <img src={etherscan} alt="" />
          </a>
          <a
            data-aos="fade-right"
            data-aos-duration="600"
            href="https://www.dextools.io/app/en/bnb/pair-explorer/0x2092d49f87825ac79ba1113b53b88b27b551ab6f?t=1733230394644"
            className="w-[2rem]"
          >
            <img src={dextool} alt="" />
          </a>
        </div>

        <div className="flex items-center gap-4 flex-wrap mt-8 justify-center">
          <a
            data-aos="fade-right"
            data-aos-duration="600"
            href="https://t.me/TheKingXRP"
            className="flex items-center gap-3 text-white  bg-black  px-8 py-3 rounded-md font-medium capitalize ring ring-primary/60"
          >
            <TbBrandTelegram /> join telegram
          </a>
          <a
            data-aos="fade-left"
            data-aos-duration="600"
            href="http://x.com/TheXRPKing"
            className="flex items-center gap-3 text-white  bg-black  px-8 py-3 rounded-md font-medium capitalize ring ring-primary/60"
          >
            <AiFillTwitterSquare /> follow twitter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
