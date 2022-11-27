import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import "./sty.css";

import Card from "./Card";
function Main() {
  return (
    <div className="lg:relative flex flex-col sm:flex-row justify-center items-center h-screen gap-14 md:gap-48 lg:gap-96  lg:bg-[url('/grup.png')]  bg-no-repeat bg-contain bg-center ">
      <div className="lg:absolute lg:top-28 lg:left-60">
        <Card image={"/pastaTwo.png"} name={"CARBONARA"} price={"Rp. 25.000"} />
      </div>
      <div className="lg:absolute lg:bottom-28 lg:right-60">
        <Card image={"/aglio.png"} name={"AGLIO"} price={"Coming soon"} />
      </div>
    </div>
  );
}

export default Main;
