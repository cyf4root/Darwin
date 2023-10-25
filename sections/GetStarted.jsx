'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
<h1 className='zonea '>D 
<span className='zonr '>A</span ><span className='zona'>R</span><span className='zonf'>W</span>< span className='zont'>I</span>N</h1>
    <div className='aout lg:max-w-[1300px] flex justify-centre flex-col gradient-05 sm:p-8 p-4  relative'>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} `}
      > 
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row house flex-col gap-8`}
      >
       <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1)}>
            <h1 className='emra'>
                  <h1 className='emra' > Simply put, <br /><h1 className='emtraa'> we deliver results.</h1></h1> 
                  <h1 className='emtrat'> We work hard to complete <br />all projects in-house</h1>
                </h1>

        </motion.div>

        <motion.div
          variants={planetVariants('right')}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img
            src="/darwin.png"
            alt="get-started"
            className="w-[90%] h-[90%] object-contain logo-float"
          />
        </motion.div>
      </motion.div>
    </div>

  </section>
);

export default GetStarted;