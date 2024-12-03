import React from "react";
import Logo from "../assets/xrplogo.jpg";

const About = () => {
  return (
    <section className="py-[50px] w-full bg-black text-white" id="about">
      <div className="container grid lg:grid-cols-2 justify-between items-center  gap-10">
        <article className="">
          <h1
            className="text-5xl capitalize"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            about <span className="text-primary font-bold">XrpKing</span>
          </h1>
          <p
            data-aos="fade-left"
            data-aos-duration="600"
            className="leading-relaxed tracking-widest mt-10"
          >
            A human-focused technology and innovation business that extends blockchain technology for a brighter future.
Deeply connected and driven by our award-winning community, we're growing forever. Building blockchain products and making 
            King XRP currency more widely known and acquiring new types of value from crypto technologies and their applications for ever-increasing uses. We now address the second part of our mission – extending and extending our technology to drive new innovations for good, 
            and modeling The King XRP's Efforts to advance those innovations to every part of the world.
          </p>
        </article>
        <img src={Logo} alt="" loading="lazy" data-aos="flip-out" />
      </div>
    </section>
  );
};

export default About;
