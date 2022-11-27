import React from "react";
import styles from "../style";

function Ref({ image, link, title }) {
  return (
    <div className="hover:scale-110 duration-150">
      <div
        className="transform rounded-full bg-[#cbcbcb4a]  hover:bg-[#e1e0e07d]  hover:scale-110 p-8 
    "
        onClick={() => {
          window.location.href =
            link === 1
              ? "https://www.instagram.com/pastaboys.id/"
              : "https://youtube.com";
          return null;
        }}
      >
        {" "}
        <img className="w-10 md:w-16" src={image}></img>
      </div>
      <div className={`${styles.contact} text-center mt-3`}>{title}</div>
      <div className="w-full bg-[#FD6767] h-[2px] mt-2"></div>
    </div>
  );
}

export default Ref;
