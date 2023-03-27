import styles from "@/styles/Post.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const CardCarousal = ({moveRight, hideArrow}) => {
  // Carousal
  const [positionIndex, setPositionIndex] = useState(0);

  const positions = ["center", "right"];
  //const activeCardPosition = positions[(positionIndex + 2) % positions.length];
  const activeCardPosition = positions[positionIndex % positions.length];
  const passiveCardPosition = positions[(positionIndex + 1) % positions.length];

  console.log(activeCardPosition, passiveCardPosition);



  const card = {
    center: {
      x: 0,
      scale: 1,
      opacity: 1,
      zIndex: 2,
    },
    right: {
      x: 100,
      scale: 0.8,
      opacity: 0.4,
      zIndex: 1,
    },
  };

  const handleClick = (e, position) => {
    e.preventDefault();
    if (position === "right") {
      setPositionIndex((positionIndex + 1) % positions.length);
    } else if (position === "left") {
      setPositionIndex(
        (positionIndex + positions.length - 1) % positions.length
      );
    }
  };

  return (
    <div className={styles.container} style={{ color: "white" }}>
      <motion.div className={styles.cards}>
        <motion.div
          className={styles.card}
          id="card-1"
          variants={card}
          animate={activeCardPosition}
        >
          <img
            className={styles.cardImage}
            src={
              "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="card"
          />
        </motion.div>
        <motion.div
          className={styles.card}
          id="card-2"
          variants={card}
          animate={passiveCardPosition}
        >
          <img
            className={styles.cardImage}
            src={
              "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="card"
          />
        </motion.div>
        <motion.div
          className={styles.card}
          id="card-3"
          variants={card}
          animate={passiveCardPosition}
        >
          <img
            className={styles.cardImage}
            src={
              "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="card"
          />
        </motion.div>
      </motion.div>
      <motion.div className={styles.btnWrapper} style={{opacity: hideArrow}}>
        <button className={styles.btnL} onClick={(e) => handleClick(e, "left")}>
          &#60;
        </button>
        <button
          className={styles.btnR}
          onClick={(e) => handleClick(e, "right")}
        >
          &#62;
        </button>
      </motion.div>
    </div>
  );
};

export default CardCarousal;
