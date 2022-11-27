import React from "react";
import styles from "../style";
import { useNavigate } from "react-router-dom";

import Ref from "./Ref";

function Contact() {
  return (
    <div className="flex flex-col justify-center items-center pt-24">
      <div className={`${styles.contact} text-center text-4xl `}>
        Contact Pasta Boys
      </div>
      <div className="flex gap-14 lg:gap-56 mt-40 cursor-pointer">
        <Ref link={1} image={"Instagram.svg"} title={"@pastaboys.id"} />
        <Ref link={2} image={"WhatsApp.svg"} title={"Whatsapp"} />
      </div>
    </div>
  );
}

export default Contact;
