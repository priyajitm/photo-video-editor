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

  const showLeftArrow = currentIndex !== cards.length - 1;

  return (
    <motion.div className={styles.container}>
      {showLeftArrow && <motion.div
        className={styles.arrowLeft}
        onClick={handlePrevClick}
        animate={{ x: inView ? maxLeftArrowRight : 0 }}
        transition={inView ? { duration: 0.4 } : undefined}
      >
         &#60;
      </motion.div>}
      <motion.div className={styles.carousel}>
        {reversedCards.map((card, index) => {
          
          const isCenter = index === currentIndex;

          const cardsStyle = {
            center: { x: 0, z: 0, },
            side: { x: 100, z: -200, },
            right: { x: maxCardRight, z: 0, },
          };

          const color = colors[index % colors.length];
          let cardPos;

          if (inView) {
            cardPos = "right";
          } else {
            cardPos = isCenter ? "center" : "side";
          }

          return (
            <motion.div
              key={index}
              className={styles.card}
              style={{
                backgroundColor: color,
                scale: isCenter ? "1" : "0.8",
                zIndex: isCenter ? reversedCards.length + 1 : index + 1,
              }}
              variants={cardsStyle}
              animate={cardPos}
              transition={inView ? { duration: 0.4 } : undefined}
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
        transition={inView ? { duration: 0.4 } : undefined}
      >
         &#62;
      </motion.div>
    </motion.div>
  );
};

export default CardCarousel;
