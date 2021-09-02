import React from "react";

import MainFooter from "../../components/MainFooter/MainFooter";
import GuitarAnimation from "../../components/GuitarAnimation";
import ParticlesBackground from "../../components/ParticlesBackground/ParticlesBackground";

import "./home.css";

function Home() {
  return (
    <div className="home">
      <section className="title__content--container">
        <div className="title__content">
          <h1>The best guitar on the world</h1>
          <p>
            The guitar is a string instrument which is played by plucking the
            strings. The main parts of a guitar are the body, the fretboard, the
            headstock and the strings. Guitars are usually made from wood or
            plastic. Their strings are made of steel or nylon.
          </p>
        </div>
      </section>
      <GuitarAnimation />
      <ParticlesBackground />
      <MainFooter />
      
    </div>
  );
}

export default Home;
