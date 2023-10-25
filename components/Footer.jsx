import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ContactPage from './Menu';
import { slideIn, staggerContainer, textVariant,footerVariants } from '../utils/motion';
import styles from '../styles';

const Footer = () => {
  const [showContact, setShowContact] = useState(false);

  const handleConnectClick = (e) => {
    e.preventDefault();
    setShowContact(!showContact);
  };

  useEffect(() => {
    if (showContact) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showContact]);

  return (
    <>
    <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.paddings} mx-auto flex sm:mb-0 xl:mb-2 mb-0  flex-col`}
      >
        <div className="flex justify-center items-center flex-col sm:text-[65px] 2xl:text-[90px] text-[70px] relative z-10 text-white font-bold">
          <motion.h1 className='darin' >
          Let's Discuss 
          </motion.h1>
          <motion.div
            className="flex flex-row sm:mb-2 mb-5 justify-center items-center"
          >
            <h1 className='darin'>Something <span className='riot'>Cool</span> Together!!</h1>
            
          </motion.div>
          <motion.div
                      variants={textVariant(1)}

            className="flex flex-row justify-center items-center"
          >
            <button type="button"  onClick={handleConnectClick} className="flex items-center h-fit py-4 px-6 connectt rounded-[32px] ">
          
          <h  className=" xl:text-[16px] text-[9px] sm:text-[10px]">
            Shoot US!!
          </h>
        </button>
        </motion.div>
        </div>
        
        
      </motion.div>
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative 	 foott`}
    >
      <div className="flex justify-center items-center flex-col relative z-10 text-black">
          <motion.h1 className="darwin sm:text-[220px] sm:leading-[165.6px] sm:max-h-[400px] max-h-[80px] leading-[105.6px] 2xl:text-[300px] 2xl:leading-[229.6px] text-black">
            DARWIN
          </motion.h1>
          
        </div>
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div       className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}>
        <div className="flex justify-center items-center flex-col relative z-10">
         
         
        </div>
         
        </div>
  
        <div className="flex flex-col">
  
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold DARWINMEDIA sm:text-[20px] text-[14px] xl:text-[24px] text-black">
              DARWIN MEDIA.
            </h4>
            <p className="font-normal text-[10px] sm:text-[14px]  text-black opacity-50">
            Copyright © 2023 Darwin Media Labs.
            </p>
  
            <div className="flex gap-4">
            <a href="https://www.instagram.com/darwinmedialabs/" target="_blank" rel="noopener noreferrer">
      <img className="w-[24px] h-[24px] cursor-pointer" src="/instagram.svg" alt="" />
    </a>
    <a href="https://www.linkedin.com/company/darwin-media-labs/" target="_blank" rel="noopener noreferrer">
      <img className="w-[24px] h-[24px] cursor-pointer" src="/linkedin.svg" alt="" />
    </a>
    <a href="https://twitter.com/darwinmedialabs" target="_blank" rel="noopener noreferrer">
      <img className="w-[24px] h-[24px] cursor-pointer" src="/twitter.svg" alt="" />
    </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
    {showContact && <ContactPage onClose={handleConnectClick} />}

    </>
    
  );
};

export default Footer;
