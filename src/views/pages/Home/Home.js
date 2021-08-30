import React from "react";

import MainHeader from "./../../components/MainHeader";
import ThreeAnimation from "./../../components/ThreeAnimation";
import TorusModel from "./../../components/TorusModel";
import BallModel from "../../components/BallModel";
import GuitarAnimation from "../../components/GuitarAnimation";

function Home() {
  return (
    <div className="home">
      <MainHeader />
      <h1>Home page</h1>
      <GuitarAnimation />
      <BallModel />
      <ThreeAnimation />
      <TorusModel />
    </div>
  );
}

export default Home;
