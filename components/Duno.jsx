import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Drag from './DragToScroll';

const fadeInWithDelay = (delay) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay, duration: 0.5 } },
});

const Duno = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollThreshold = windowHeight / 3;
      const tuElement = document.querySelector('.tu');
      if (scrollPosition >= scrollThreshold) {
        tuElement.classList.add('diminished');
      } else {
        tuElement.classList.remove('diminished');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="duno  mx-auto overflow-hidden">
      <div className="content-wrapper">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInWithDelay(1)}
          className="oooo"
        >
          <motion.h2
            className="tu  font-extrabold"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, delay: 0.7, type: 'spring' }}
          >
            ELEVATE Your <br />
            Brand With Our <br />
            MAGICAL <span className="craft">CRAFT.</span>
          </motion.h2>
        </motion.div>
        <h1 className="tw font-extrabold">
          "CRAFTING DIGITAL NARRATIVES"
          <Drag />
        </h1>
      </div>
      <div className='forgap' />
    </div>
  );
};

export default Duno;
