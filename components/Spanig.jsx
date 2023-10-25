'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import {  staggerContainer } from '../utils/motion';

const zoomInVariant = {
  hidden: { scale: 0.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const Spanig = () => (
  <section>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidh} mx-auto flex flex-col`}
    >
      <div>
        <div className="shadow-containerr overflow-hidden">
          <motion.div>
            <motion.h1
              className="wheree sm:text-[50px] text-[34px] xl:text-[60px] font-extrabold"
              variants={zoomInVariant}
              initial="hidden"
              whileInView="show"
            >
              <span className="wherree sm:text-[20px] text-[10px] xl:text-[20px]">WHAT WE DO </span> <br />
              "We create cutting-edge online experiences that elevate brands, maximize ROI, and generate conversions." <br />
              <span className="itself sm:text-[25px] text-[15px] xl:text-[30px]">We let our work speak for itself.</span>
            </motion.h1>
          </motion.div>
          <div className="spanigg" />
        </div>
      </div>
    </motion.div>
  </section>
);

export default Spanig;
