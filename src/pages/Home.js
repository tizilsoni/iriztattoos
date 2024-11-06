import React from "react";
import Canvas from "../components/Canvas";
import Gallery from "../components/Gallery";
import HeroHeader from "../components/HeroHeader";
import About from "../components/About";

const Home = () => {
  return (
    <div>
      <HeroHeader />
      <section id="tattoo-works">
        <Gallery />
      </section>
      <section id="canvas-works">
        <Canvas />
      </section>
      <section id="about-us">
        <About />
      </section>
    </div>
  );
};

export default Home;
