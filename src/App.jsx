import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Footer, Navbar } from '../components';
import { GetStarted, WhatsNew } from '../sections';
import SplashScreen from '../sections/SplashScreen';
import Duno from '../components/Duno';
import CursorFollower from '../components/CursorFollower';
import StarsCanvas from '../components/Stars';
import RulesComponent from '../sections/RulesComponent';
import LoopingText from '../components/LoopingText';
import Gallery from '../components/Gallery';
import Where from '../components/Where';
import Spanig from '../components/Spanig';
import Pyramid from '../components/Pyramid';

const fadeInWithDelay = (delay) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay, duration: 0.3 } },
});

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="main-container">
      {showSplash && <SplashScreen />}
      {!showSplash && (
        <div>
          <motion.div initial="hidden" animate="visible" variants={fadeInWithDelay(0.8)}> <StarsCanvas /></motion.div>
          <div className="overflow-hidden">
            <Pyramid/>
          </div>
          <motion.div initial="hidden" animate="visible" variants={fadeInWithDelay(.5)}>
            <div className="ottt overflow-hidden">
              <Duno />
            </div>
            <div className="overflow-hidden">
              <LoopingText />
            </div>
          </motion.div>

          <div className="curr">
            <CursorFollower />
          </div>
          <div className="ottt overflow-hidden">
            <Navbar />
          </div>
          <div>
            <div className="overflow-hidden">
              <WhatsNew />
            </div>
          </div>
          <div >
            <Where/>
          </div>
          <div className="overflow-hidden normal">
            <Gallery />
          </div>
          <Spanig/>
          <div className="overflow-hidden">
            <RulesComponent />
          </div>
          <div className="overflow-hidden">
            <GetStarted />
          </div>
          <div className="overflow-hidden">
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;