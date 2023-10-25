import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import ColorFadingScreen from '../sections/ColorFadingScreen';
import BurgerMenu from '../sections/BurgerMenu';
import ContactPage from './Menu';

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isHomePage, setIsHomePage] = useState(true);
  const [showColorFadingScreen, setShowColorFadingScreen] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showConnect] = useState(true);

  const handleMenuClick = () => {
    setShowColorFadingScreen(!showColorFadingScreen);
  };

  const handleConnectClick = () => {
    setShowContact(!showContact);
  };

  useEffect(() => {
    const checkIfHomePage = () => {
      setIsHomePage(window.location.pathname === '/');
    };
    checkIfHomePage();

    const handleRouteChange = () => {
      checkIfHomePage();
    };
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const blurValue = scrollY > 100 ? 4 : 0;

  useEffect(() => {
    if (showContact) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showContact]);

  return (
    <>
      {showColorFadingScreen && <ColorFadingScreen onClick={handleMenuClick} />}

      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="show"
        className={`${styles.xPaddings} navbar`}
        style={{
          backgroundColor: isHomePage ? 'transparent' : '#your-navbar-color',
          backdropFilter: `blur(${blurValue}px)`,
          transition: 'background-color 0.3s, backdrop-filter 0.3s',
        }}
      >
        <div className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}>
          <BurgerMenu onClick={handleMenuClick} isActive={showColorFadingScreen} />
          <AnimatePresence>
            {!showColorFadingScreen && (
              <motion.div
                className="darr"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
              >
                <a href="/">
                  <motion.img
                    src="/darwinn.png"
                    alt="ll"
                    className="w-[25vh] h-[vh]"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                  />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {!showColorFadingScreen && showConnect && window.innerWidth > 768 && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
              >
                <a  onClick={handleConnectClick} > <div  className="md:block">
                <button type="button" className="connect md:block" onClick={handleConnectClick}>
                    CONNECT
                  </button>
                </div></a> 
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {showContact && <ContactPage onClose={handleConnectClick} />}
    </>
  );
};

export default Navbar;
