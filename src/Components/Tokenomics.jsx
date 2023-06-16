import React from "react";
import Chart from "../assets/token.png";

const Tokenomics = () => {
  return (
    <section
      id="tokenomics"
      className="py-[80px] w-full  bg-black divide divide-white"
    >
      <div className="container text-center flex justify-center items-center flex-col gap-7">
        <h1
          className="text-5xl capitalize underline decoration-wavy font-bold text-primary"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          tokenomics
        </h1>

        <p className="text-white tracking-widest">
          Tax only on launch to REKT BOTS/SNIPERS and will reduce to 0/0. Will
          use the tax for buybacks and push the project. With the 4CHAN hype can
          be a good runner. With the right community we can push it.
        </p>

        <img src={Chart} alt="" loading="lazy" className="mt-10" />
      </div>
    </section>
  );
};

export default Tokenomics;
