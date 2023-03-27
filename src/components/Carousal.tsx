import React, { useState } from "react";
import styles from "@/styles/Carousel.module.css";
import { motion } from "framer-motion";

type CardCarouselProps = {
  cards: React.ReactNode[];
  inView: boolean;
  maxRightArrowRight: number;
  maxLeftArrowRight: number;
  maxCardRight: number;
};

const CardCarousel = ({
  cards,
  inView,
  maxCardRight,
  maxLeftArrowRight,
  maxRightArrowRight,
}: CardCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(cards.length - 1);
  const reversedCards = [...cards].reverse();
  const handlePrevClick = () => {
    setCurrentIndex((currentIndex + 1) % cards.length);
  };
  const handleNextClick = () => {
    setCurrentIndex((currentIndex - 1 + cards.length) % cards.length);
  };

  const colors = ["blue", "green", "yellow", "purple"];

  return (
    <motion.div className={styles.container}>
      <motion.div
        className={styles.arrowLeft}
        onClick={handlePrevClick}
        animate={{ x: inView ? maxLeftArrowRight : 0 }}
        transition={{ duration: 0.4 }}
      >
        L
      </motion.div>
      <motion.div className={styles.carousel}>
        {reversedCards.map((card, index) => {
          const isCenter = index === currentIndex;
          const cardStyle = isCenter
            ? {
                transform: "translateX(0) translateZ(0)",
                zIndex: reversedCards.length,
                transition: "transform 0.2s ease-out",
              }
            : {
                transform: `translateX(40%) translateZ(-200px)`,
                scale: "0.8",
                zIndex: 2,
                transition: "transform 0.2s ease-out",
              };

          const color = colors[index % colors.length];
          return (
            <motion.div
              key={index}
              className={styles.card}
              style={{ ...cardStyle, backgroundColor: color }}
              animate={inView ? { x: maxCardRight } : { x: 0 }}
              transition={{ duration: 0.1 }}
            >
              {card}
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div
        className={styles.arrowRight}
        onClick={handleNextClick}
        animate={inView ? { x: maxRightArrowRight } : { x: 0 }}
        transition={{ duration: 0.2 }}
      >
        R
      </motion.div>
    </motion.div>
  );
};

export default CardCarousel;
