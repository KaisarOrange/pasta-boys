import React from "react";
import styles from "../style";

function Navbar() {
  return (
    <div className="flex flex-col lg:flex-row justify-center  gap-6 items-center p-2 pt-10 ">
      <div>
        <p className={`${styles.logo} text-3xl sm:text-4xl cursor-pointer`}>
          Pasta Boys
        </p>
      </div>
      <div className=" flex m-auto gap-2 text-sm sm:gap-12 justify-center border sm:mr-auto sm:text-xl  lg:ml-40  w-1/2 border-r-0 border-l-0">
        <div className=" mt-4 mb-4 cursor-pointer">Home</div>
        <div className=" mt-4 mb-4 cursor-pointer">Menu</div>
        <div className=" mt-4 mb-4 cursor-pointer">Contact</div>
      </div>
    </div>
  );
}

export default Navbar;
