import React, { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";
import { TextPlugin } from "gsap/TextPlugin";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./Components/Footer";
import Tokenomics from "./Components/Tokenomics";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);

  useEffect(() => {
    Aos.init({ duration: "700", easing: "ease-in-back", mirror: true });
    const heroWelcome = new SplitType(".hero-welcome", { types: "chars" });
    gsap.to(".header-logo", {
      autoAlpha: 0.2,
      repeat: -1,
      yoyo: true,
    });
    gsap.timeline().from(heroWelcome.chars, {
      opacity: 0,
      stagger: 0.2,
      x: 20,
    });
  });
  return (
    <div className="min-h-screen overflow-hidden w-full font-primary font-normal bg-primary text-black">
      <Header />
      <Hero />
      <About />
      <Tokenomics />
      <Footer />
    </div>
  );
};

export default App;
