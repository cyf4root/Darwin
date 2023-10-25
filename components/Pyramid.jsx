import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const fadeInWithDelay = (delay) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay, duration: 0.5 } },
});

const Pyramid = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setImagesLoaded(true);
    }, 500);
  }, []);

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeInWithDelay(0.5)}>
    <div className={`drawww mian ${imagesLoaded ? 'visible' : 'hidden'}`}>
        <img
          src="/worth.png"
          alt="ll"
          onLoad={() => setImagesLoaded(true)}
        />
      </div>
      <div className={`draww `}>
        <img
          src="/pagal.png"
          alt="ll"
          onLoad={() => setImagesLoaded(true)}
        />
      </div>
    </motion.div>
  );
};

export default Pyramid;
