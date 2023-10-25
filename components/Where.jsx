'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const Where = () => (
    <section >
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidh} mx-auto flex flex-col`}
        >
            <div >
                <div className="shadow-container overflow-hidden">
                   
                                            <h1 className="where">"Where Vision Meets Creation: Tailored for Influencers & Brands."</h1>

                    <div className="spanig" />
                </div>
            </div>
        </motion.div>
    </section>
);

export default Where;
