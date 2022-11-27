import React from "react";
import styles from "../style";

function Navbar() {
  return (
    <div className=" flex flex-col lg:flex-row justify-center  gap-6 items-center p-2 pt-10 ">
      <div>
        <p className={`${styles.logo} text-3xl sm:text-4xl cursor-pointer`}>
          Pasta Boys
        </p>
      </div>
      <div className=" flex m-auto gap-2 text-sm sm:gap-12 justify-center border sm:mr-auto sm:text-xl  lg:ml-40  w-1/2 border-r-0 border-l-0">
        <div className=" mt-4 mb-4 cursor-pointer hover:scale-110 duration-150">
          Home
        </div>
        <div className=" mt-4 mb-4 cursor-pointer hover:scale-110 duration-150">
          <a href="#hello">Menu</a>
        </div>
        <div className=" mt-4 mb-4 cursor-pointer hover:scale-110 duration-150">
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
