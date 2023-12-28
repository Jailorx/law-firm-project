import React from "react";
import styles from "./Introduction.module.css";

const Introduction = () => {
  return (
    <div className={styles.wrapper}>
      <div id={styles.heading}>
        <p>Let's Introduce Ourself</p>
      </div>
      <div id={styles.verticalLine}></div>

      <div className={styles.speciality}>
        <p id={styles.title}>Criminal Lawyer</p>
        <p id={styles.desc}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
