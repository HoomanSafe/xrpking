import React from "react";
import { AiFillTwitterSquare } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";
import Logo2 from "../assets/logo2.png";
import etherscan from "../assets/etherscan.png";
import dextool from "../assets/dextool.png";
dextool;

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
          Given the current buzz surrounding tokens such as 4chan and Reddit, it
          is plausible to envision Medium as a thriving token.
        </p>
        <h2 className="text-4xl font-bold uppercase text-black hero-welcome">
          ca
        </h2>
        <p
          className="max-w-[800px] mx-auto font-bold break-all"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          0xfFF59Ef0dD78cb982082eD169A024841db7a1c36
        </p>
        <div className="flex items-center gap-4 flex-wrap mt-8 justify-center">
          <a
            data-aos="fade-right"
            data-aos-duration="600"
            href="https://etherscan.io/token/0xfff59ef0dd78cb982082ed169a024841db7a1c36"
            className="w-[3rem]"
          >
            <img src={etherscan} alt="" />
          </a>
          <a
            data-aos="fade-right"
            data-aos-duration="600"
            href="https://www.dextools.io/app/ru/ether/pair-explorer/0x3cf55b8d0beddc24ce83182e8916dc0f9cc0c414"
            className="w-[2rem]"
          >
            <img src={dextool} alt="" />
          </a>
        </div>

        <div className="flex items-center gap-4 flex-wrap mt-8 justify-center">
          <a
            data-aos="fade-right"
            data-aos-duration="600"
            href="https://t.me/MEDIUM_ERC"
            className="flex items-center gap-3 text-white  bg-black  px-8 py-3 rounded-md font-medium capitalize ring ring-primary/60"
          >
            <TbBrandTelegram /> join telegram
          </a>
          <a
            data-aos="fade-left"
            data-aos-duration="600"
            href="https://twitter.com/medium_erc20"
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
