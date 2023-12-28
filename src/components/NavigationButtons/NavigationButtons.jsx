import React from "react";
import styles from "./NavigationButtons.module.css";

const NavigationButtons = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button}>Home</button>
      <button className={styles.button}>Attornys</button>
      <button className={styles.button}>Practice Areas</button>
      <button className={styles.button}>About Us</button>
    </div>
  );
};

export default NavigationButtons;
