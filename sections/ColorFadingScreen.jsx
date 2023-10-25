import React, { useEffect, useState } from 'react';
import { footerVariant } from '../utils/motion';
import { motion } from 'framer-motion';
import ContactPage from '../components/Menu';
import styles from '../styles';

const ColorFadingScreen = ({ onClick }) => {
  const [show, setShow] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleConnectClick = () => {
    setShowContact(!showContact);
  };

  useEffect(() => {
    const colorFadeTimer = setTimeout(() => {
      setShow(true);
    }, 200);

    const slidingTimer = setTimeout(() => {
      setIsSliding(true);
    }, 1000);

    return () => {
      clearTimeout(colorFadeTimer);
      clearTimeout(slidingTimer);
    };
  }, []);

  const handleSlidingComplete = () => {
    setShowContent(true);
  };

  const handleColorFadingScreenClick = () => {
    setShow(false);
    onClick();
  };

  const handleMenuItemClick = (scrollPosition) => {
    window.scrollTo(0, scrollPosition);
    handleColorFadingScreenClick(); // Close the color fading screen
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [show]);

  return (
    <>
      {showContact && <ContactPage onClose={handleConnectClick} />}

      {show && (
        <div
          className={`color-fading-overlay ${isSliding ? 'sliding' : ''}`}
          onTransitionEnd={handleSlidingComplete}
        >
          {showContent ? (
            <div className="menu-items">
              <a className='Home' onClick={() => handleMenuItemClick(0)}>
                Home
              </a>
              <a className='Services' onClick={() => handleMenuItemClick(1880)}>
                Services
              </a>
              <a className='Process' onClick={() => handleMenuItemClick(3220)}>
                Process
              </a>
              <a className='Contact' onClick={handleConnectClick}>
                Contact
              </a>
            </div>
          ) : (
            <>
              <motion.div  
                initial={{  opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <div className='font-extrabold poli Homes'>
                  <a className='Home' onClick={() => handleMenuItemClick(0)}>
                    Home
                  </a>
                  <a className='Services' onClick={() => handleMenuItemClick(1840)}>
                    Services
                  </a>
                  <a className='Process' onClick={() => handleMenuItemClick(3100)}>
                    Process
                  </a>
                  <a className='Contact' onClick={handleConnectClick}>
                    Contact
                  </a>
                </div>
              </motion.div>
              <motion.footer
                variants={footerVariant}
                initial="hidden"
                whileInView="show"
                className={`${styles.paddings} py-8 relative insta`}
              >
                <div className=''>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <h4 className="font-extrabold iron text-[22px] text-white">
                      DARWIN <br /> MEDIA.
                    </h4>
                    <p className="font-normal ironn text-[14px] text-white opacity-50">
                      Copyright © 2023 Darwin Media Labs.
                    </p>
                    <div className="flex gap-4">
                      <a href="https://www.instagram.com/darwinmedialabs/">
                        <img className='w-[24px] h-[24px] cursor-pointer' src="/instagram.svg" alt="" />
                      </a> 
                      <a href="https://www.linkedin.com/company/darwin-media-labs/">
                        <img className='w-[24px] h-[24px] cursor-pointer' src="/linkedin.svg" alt="" />
                      </a> 
                      <a href="https://twitter.com/darwinmedialabs">
                        <img className='w-[24px] h-[24px] cursor-pointer' src="/twitter.svg" alt="" />
                      </a> 
                    </div>
                  </div>
                </div>
              </motion.footer>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default ColorFadingScreen;
