import styles from "@/styles/Post.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Post() {
  const [positions, setPositions] = useState(["center", "right", "left"]);
  const [positionIndex, setPositionIndex] = useState(0);

  const handleClick = (e, position) => {
    e.preventDefault();

    if (position === "left") {
      setPositions(["center", "left", "right"]);
    }

    if (position === "right") {
      setPositions(["center", "right", "left"]);
    }

    setPositionIndex((positionIndex + 1) % positions.length);
  };

  const firstCardPosition = positions[(positionIndex + 2) % positions.length];
  const secondCardPosition = positions[positionIndex % positions.length];
  const thirdCardPosition = positions[(positionIndex + 1) % positions.length];

  const card = {
    left: {
      x: -100,
      scale: 0.8,
      opacity: 0.4,
      zIndex: 0,
      transition: {
        staggerChildren: 0.5,
      },
    },
    center: {
      x: 0,
      scale: 1,
      opacity: 1,
      zIndex: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
    right: {
      x: 100,
      scale: 0.8,
      opacity: 0.4,
      zIndex: 0,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <motion.div className={styles.cards}>
          <motion.div
            className={styles.card}
            id="card-1"
            variants={card}
            animate={firstCardPosition}
          >
            <img
              className={styles.cardImage}
              src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt="card"
            />
          </motion.div>
          <motion.div
            className={styles.card}
            id="card-2"
            variants={card}
            animate={secondCardPosition}
          >
            <img
              className={styles.cardImage}
              src="https://images.unsplash.com/photo-1574100004472-e536d3b6bacc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="card"
            />
          </motion.div>
          <motion.div
            className={styles.card}
            id="card-3"
            variants={card}
            animate={thirdCardPosition}
          >
            <img
              className={styles.cardImage}
              src="https://images.unsplash.com/photo-1575318634028-6a0cfcb60c59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
              alt="card"
            />
          </motion.div>
        </motion.div>
      </div>
      <div style={{ alignSelf: "end" }}>
        <button
          style={{ alignSelf: "end" }}
          onClick={(e) => handleClick(e, "left")}
        >
          Left
        </button>
        <button
          style={{ alignSelf: "end" }}
          onClick={(e) => handleClick(e, "right")}
        >
          Right
        </button>
      </div>
    </div>
  );
}
