import Image from "next/image";
import React from "react";
import styles from "../styles/WhyUs.module.css";

const WhyUs = ({ icon, text, caption }) => {
  return (
    <div className={styles.whyUs}>
      <Image src={icon} alt="" width={90} height={90} />
      <div className={styles.text}>
        <p>{caption}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default WhyUs;
