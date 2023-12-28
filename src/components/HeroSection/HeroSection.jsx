import React from "react";
import styles from "./HeroSection.module.css";
import Button from "../Button/Button";
import HeroImage from "../../assets/HeroImage.png";
import { ReactComponent as MessageIcon } from "../../assets/MessageIcon.svg";

const HeroSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.header}>
          <p>You don't have to</p>
          <p className={styles.bold}>Fight them Alone.</p>
        </div>
        <div className={styles.desc}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </p>
        </div>
        <div className={styles.emailInput}>
          <MessageIcon />
          <input type="email" placeholder="Enter your email address" />
          <Button text="Let's Talk" />
        </div>
      </div>
      <div className={styles.heroImage}>
        <img src={HeroImage} alt="hero_image" />
      </div>
    </div>
  );
};

export default HeroSection;
