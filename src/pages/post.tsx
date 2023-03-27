import Article from "@/components/Article";
import CardCarousel from "@/components/Carousal";
import styles from "@/styles/Post.module.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const cards = [
  <div key={1}>Card 1</div>,
  <div key={2}>Card 2</div>,
  <div key={3}>Card 3</div>,
  <div key={4}>Card 4</div>,
];

const Post = () => {
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  const [ref, inView] = useInView({
    threshold: 0.25,
    triggerOnce: false,
  });

  useEffect(() => {
    function handleResize() {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxCardRight = viewport.width / 2.5;
  const maxLeftArrowRight = viewport.width - 800;
  const maxRightArrowRight = viewport.width / 2 - 500;

  return (
    <motion.div className={styles.main}>
      <CardCarousel
        cards={cards}
        inView={inView}
        maxLeftArrowRight={maxLeftArrowRight}
        maxRightArrowRight={maxRightArrowRight}
        maxCardRight={maxCardRight}
      />
      <Article reference={ref} inView={inView} />
    </motion.div>
  );
};

export default Post;
