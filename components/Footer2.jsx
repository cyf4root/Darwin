'use client';

import { motion } from 'framer-motion';

import styles from '../styles';

const Footer2 = () => (
  <motion.footer
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className={`${styles.interWidth} mx-auto flex flex-col gap-20`}>
      <div className="flex flex-col">

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            DARWIN MEDIA.
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
          Copyright © 2023 Darwin Media Labs.
          </p>

          <div className="flex items-center gap-4">
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
);

export default Footer2;
