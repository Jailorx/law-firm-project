import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import ContactButton from "../ContactButton/ContactButton";
import NavigationButtons from "../NavigationButtons/NavigationButtons";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <NavigationButtons />
      <ContactButton text="Contact Now" />
    </div>
  );
};

export default Navbar;
