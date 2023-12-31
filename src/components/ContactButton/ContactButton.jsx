import React from "react";
import styles from "./ContactButton.module.css";

const Button = ({ text }) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button}>{text}</button>
    </div>
  );
};

export default Button;
