import React from "react";
import WebsiteLogo from "../../assets/logo.png";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <img src={WebsiteLogo} alt="website_logo" />
    </div>
  );
};

export default Logo;
