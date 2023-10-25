import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const fadeInWithDelay = (delay) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay, duration: 0.4 } },
});

const Pyramid = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setImagesLoaded(true);
    }, 500);
  }, []);

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeInWithDelay(0.4)}>
    <div className="drawww mian">
        <img
          src="/worth.png"
          alt="ll"
        />
      </div>
      <div className={`draww `}>
        <img
          src="/pagal.png"
          alt="ll"        />
      </div>
    </motion.div>
  );
};

export default Pyramid;
