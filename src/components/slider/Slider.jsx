import React, { useState, useEffect } from "react";
import images from "./exportImages";
import styles from "./slider.module.scss";
import { motion } from "framer-motion";

const Slider = () => {
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPosition = currentPosition - 1; // Ajusta la velocidad de desplazamiento cambiando el valor aquí
      setCurrentPosition(newPosition);
    }, 10); // Ajusta el intervalo de tiempo entre desplazamientos aquí

    return () => clearInterval(interval);
  }, [currentPosition]);
  if (currentPosition <= -1640) {
    setCurrentPosition(0);
  }
  return (
    <motion.div className={styles.slider_container}>
      <motion.div
        className={styles.slider}
        style={{ transform: `translateX(${currentPosition}px)` }}
        drag="x"
        dragConstraints={{ right: 0, left: -1630 }}
        dragElastic={0.8}
      >
        {images.map((image, index) => (
          <motion.div className={styles.item} key={index}>
            <img src={image} alt="" className={styles.item_image} />
            <p className={styles.text_card}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. !
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Slider;
