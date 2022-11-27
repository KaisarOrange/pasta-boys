import React from "react";
import styles from "./style";
import pasta from "./pasta.png";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Main from "./Components/Main";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="">
      <div
        className="bg-local "
        style={{
          backgroundImage: `url(/stone.png)`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
        }}
      >
        <div
          className="bg-local  h-screen"
          style={{
            backgroundImage: `url(/pastaBack.png)`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}
        >
          <div className="flex flex-col gap-44 bg-back h-screen px-20">
            {" "}
            <Navbar />
            <Hero />
          </div>
        </div>
        <div
          className="bg-local  h-screen"
          style={{
            backgroundImage: `url(/pastaBackTwo.png)`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}
        >
          {" "}
          <div className="flex flex-col gap-44 bg-back h-screen sm:px-20">
            {" "}
            <Main />
          </div>
        </div>
        <div
          className="bg-local  h-screen"
          style={{
            backgroundImage: `url(/backThree.png)`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}
        >
          {" "}
          <div className="flex flex-col gap-44 bg-back h-screen md:px-20">
            {" "}
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
