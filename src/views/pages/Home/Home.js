import React from "react";

import MainHeader from "./../../components/MainHeader";
import ThreeAnimation from "./../../components/ThreeAnimation";
// import GuitarModel from "./../../components/GuitarModel";

function Home() {
  return (
    <div className="home">
      <MainHeader />
      <h1>Home page</h1>
      <ThreeAnimation />
      {/* <GuitarModel /> */}
    </div>
  );
}

export default Home;
