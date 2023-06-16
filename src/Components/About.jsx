import React from "react";
import Logo from "../assets/logo.jpg";

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
            about <span className="text-primary font-bold">medium</span>
          </h1>
          <p
            data-aos="fade-left"
            data-aos-duration="600"
            className="leading-relaxed tracking-widest mt-10"
          >
            Given the current buzz surrounding tokens such as 4chan and Reddit,
            it is plausible to envision Medium as a thriving token. Its
            utilization for announcement dissemination, sharing of whitepapers
            and technical documentation, provision of educational content,
            establishment of thought leadership, community engagement, and
            reinforcement of marketing and branding endeavors make Medium an
            attractive candidate for success in the cryptocurrency space.
          </p>
        </article>
        <img src={Logo} alt="" loading="lazy" data-aos="flip-out" />
      </div>
    </section>
  );
};

export default About;
