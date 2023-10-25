import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineHome } from 'react-icons/ai';
import styles from '../styles';
import Contact from '../sections/ContactForm';
import Footer2 from './Footer2';

const fadeInWithDelay = (delay) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay, duration: 0.5 } },
});

const ContactPage = ({ onClose }) => {
  useEffect(() => {
    document.body.classList.add('no-scroll');

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div className="color-fading-overlayy">
      <motion.div
        className="lasta"
        initial="hidden"
        animate="visible"
        variants={fadeInWithDelay(0.8)}
      >
        <nav className="navbare">
          <div
            className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}
          >
            <AiOutlineHome
              className="king"
              onClick={onClose}
              size={50}
              role="button"
              tabIndex={0}
            />
            <a onClick={onClose} className="darrr">
              <img
                src="/darwinn.png"
                alt="Logo"
                className="w-[25vh] h-[24vh]"
              />
            </a>
          </div>
        </nav>
        <div className="overflow-hidden lorem">
          <Contact />
        </div>
        <div className='cpoyright'>
          <Footer2/>
        </div>
        
      </motion.div>
    </div>
  );
};

export default ContactPage;
