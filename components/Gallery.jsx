import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import WavyText from './Hovert';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const Gallery = () => {
  const images = [
    '/pant.jpg',
    '/pant1.jpg',
    '/pant2.jpg',
    '/pant4.jpg',
    '/pant.jpg',
    '/pant1.jpg',
    '/pant2.jpg',
    '/pant4.jpg',
  ];
  const customTexts = [
    'Amplify your message with our engaging content writing services.',
    'Unveil your brand online with our seamless web development.',
    'Craft exceptional interfaces through our meticulous UI/UX design',
    'Shape your ideas into captivating mobile apps.',
    'Amplify your message with our engaging content writing services.',
    'Unveil your brand online with our seamless web development.',
    'Craft exceptional interfaces through our meticulous UI/UX design',
    'Shape your ideas into captivating mobile apps.',
  ];
  const texts = ['Content', 'Web', 'ui/ux', 'Micro Saas', 'Content', 'Web', 'ui/ux', 'Micro Saas'];
  const textsStyles = [
    'moda11',
    'moda21',
    'moda31',
    'moda41',
    'moda51',
    'moda61',
    'moda71',
    'moda81',
  ];
  const modalCont = [
    {
      heading: 'Content writing',
      content: [
        '• Article Writing',
        '• Blog Writing',
        '• Product Description',
        '• Website Content Writing',
        '• Copy Writing',
        '• Emailers',
        '• Newsletter Writing',
      ],
    },
    {
      heading: 'Development',
      content: [
        '• Portfolio Development',
        '• Framer Development',
        '• Full stack Development',
        '• WordPress development',
        '• Custom applications',
      ],
    },
    {
      heading: 'UI/UX Design',
      content: ['• Identity Design', '• Product Design', '• Website Design', '• App Design'],
    },
    {
      heading: 'Micro Saas',
      content: ['Coming soon'],
    },
    {
      heading: 'Content writing',
      content: [
        '• Article Writing',
        '• Blog Writing',
        '• Product Description',
        '• Website Content Writing',
        '• Copy Writing',
        '• Emailers',
        '• Newsletter Writing',
      ],
    },
    {
      heading: 'Development',
      content: [
        '• Portfolio Development',
        '• Framer Development',
        '• Full stack Development',
        '• WordPress development',
        '• Custom applications',
      ],
    },
    {
      heading: 'UI/UX Design',
      content: ['• Identity Design', '• Product Design', '• Website Design', '• App Design'],
    },
    {
      heading: 'Micro Saas',
      content: ['Coming soon'],
    },
  ];

  const modalStyles = [
    'moda1',
    'moda2',
    'moda3',
    'moda4',
    'moda5',
    'moda6',
    'moda7',
    'moda8',
  ];
  const [isImageHovered, setIsImageHovered] = useState(false); // Add this state
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [modalIndex, setModalIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageHover = (index) => {
    setHoveredIndex(index);
    setIsModalOpen(true);
    setModalIndex(index);
    setIsImageHovered(true); // Set the state to indicate that an image is hovered
  };

  const handleImageLeave = () => {
    setHoveredIndex(null);
    setIsModalOpen(false);
    setIsImageHovered(false); // Reset the state when leaving the image
  };

  const handleImageClick = (index) => {
    setIsModalOpen(true);
    setModalIndex(index);
  };

  useEffect(() => {
    const handleScroll = (e) => {
      if (isModalOpen) {
        e.preventDefault();
      }
    };

    if (isModalOpen) {
      window.addEventListener('mousewheel', handleScroll, { passive: false });
    } else {
      window.removeEventListener('mousewheel', handleScroll);
    }

    return () => {
      window.removeEventListener('mousewheel', handleScroll);
    };
  }, [isModalOpen]);

  return (
    <>
       <h1 className="tetas">SERVICES</h1>
      <div className="containr">
        <div className={`wrapper xl:w-[160px] xl:h-[260px] sm:w-[155px] sm:h-[230px] ${hoveredIndex !== null ? 'stop-rotation' : ''}`}>
          {images.map((image, index) => (
            <span
              key={index}
              style={{ '--i': index + 1 }}
              onMouseEnter={() => handleImageHover(index)}
              onMouseLeave={handleImageLeave}
              onClick={() => handleImageClick(index)}
              className={hoveredIndex === index ? 'active' : ''}
            >
              <img src={image} />
              {hoveredIndex === index && (
                <p className={`custom-text custom-text-${index}`}>{customTexts[index]}</p>
              )}
              <motion.p
                className={`imagess-on-image ${textsStyles[index]}`}
                initial={{ webkitTextFillColor: 'transparent' }}
                animate={hoveredIndex === index ? { webkitTextFillColor: 'white' } : {}}
              >
                {texts[index]}
              </motion.p>
            </span>
          ))}
        </div>

        {!isImageHovered && ( // Hide the <WavyText /> component when an image is hovered
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <WavyText />
          </motion.div>
        )}

        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="modal-cont-right-bottom"
          >
            <div className={`modal-content ${modalStyles[modalIndex]}`}>
              <div>
                {modalCont[modalIndex].content.map((point, idx) => (
                  <p className="parag font-extrabold" key={idx}>
                    {point}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
     
    </>
  );
};

export default Gallery;
