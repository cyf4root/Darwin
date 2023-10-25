'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn,textVariant, staggerContainer } from '../utils/motion';

const World = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [rotated, setRotated] = useState(false);

  const controls = useAnimation();

  const customWords = ['Content', 'Website', 'designs','Products'];
  const currentWord = customWords[currentWordIndex];

  useEffect(() => {
    if (!rotated) {
      if (currentLetterIndex === currentWord.length) {
        setRotated(true);
        controls.start({ rotateY: 180 });
        setTimeout(() => {
          controls.start({ rotateY: 0 });
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % customWords.length);
          setCurrentLetterIndex(0);
          setRotated(false);
        }, 1000); 
      }
    }
  }, [currentLetterIndex, currentWord, controls, rotated]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!rotated) {
        setCurrentLetterIndex((prevIndex) =>
          prevIndex < currentWord.length ? prevIndex + 1 : prevIndex
        );
      }
    }, 150);

    return () => clearInterval(interval);
  }, [currentLetterIndex, currentWord, rotated]);

  return (
  <section className={`${styles.paddings} relative h-[100%] z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`${styles.innerWidth} mx-auto flex z-[-1] flex-col`}
    >
       <motion.div
                      variants={textVariant(0.2)}>

                     

      <TypingText title=" OUR MISSION IS FUELED BY MISSION" textStyles="about" />
      <TitleText
        title={(
          <> <h1 className='emtra'>
          With a customer-centric approach, we create{' '}
          <span className='craftt  md:text-[47px]  text-start text-[18px]' style={{ display: 'inline-block',}}>
            {currentWord.substring(0, currentLetterIndex + 1)}
          </span>
          that align with our clients' business goals. Your project's fulfillment remains our topmost priority!
        </h1>
          </>
        )}
        textStyles="text-center"
      />
       </motion.div>

    </motion.div>
  </section>
);
}
export default World;
