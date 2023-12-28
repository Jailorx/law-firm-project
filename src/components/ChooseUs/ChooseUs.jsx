import Button from "../Button/Button";
import styles from "./ChooseUs.module.css";
import Gift from "../../assets/Gift.png";

const ChooseUs = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h2>Why Choose Us?</h2>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.icon}>
            <img src={Gift} alt="icon" />
          </div>
          <div className={styles.title}>
            <h3>98% Success Rate</h3>
          </div>
          <div className={styles.desc}>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
          </div>
          <Button text="Read More" />
        </div>
        <div className={`${styles.card} ${styles.bg}`}>
          <div className={styles.icon}>
            <img src={Gift} alt="icon" />
          </div>
          <div className={styles.title}>
            <h3>100% Success Rate</h3>
          </div>
          <div className={styles.desc}>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
          </div>
          <Button text="Read More" />
        </div>
        <div className={styles.card}>
          <div className={styles.icon}>
            <img src={Gift} alt="icon" />
          </div>
          <div className={styles.title}>
            <h3>100% Success Rate</h3>
          </div>
          <div className={styles.desc}>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
          </div>
          <Button text="Read More" />
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
