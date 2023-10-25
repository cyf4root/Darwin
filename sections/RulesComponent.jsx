import React, { useEffect, useState } from 'react';

const RulesComponent = () => {
  const slides = [
    {
      title: 'Inspiration',
      description: 'Our journey starts with you. We take the time to fully understand your business, your vision, and your goals',
    },
    {
      title: 'Creation',
      description: 'Once we\'re immersed in your world, we get to work crafting a unique digital narrative that tells your story in an engaging and innovative way.',
    },
    {
      title: 'Realization',
      description: 'Using cutting-edge technology and industry best practices, we bring the story to life, and websites that speak to your target audience',
    },
    {
      title: 'Evolution',
      description: 'Our journey doesn\'t end at launch. We stand by you, ready to adapt and evolve your digital presence as your business grows',
    },
  ];

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [docWidth, setDocWidth] = useState(0);
  const [slidesWidth, setSlidesWidth] = useState(0);

  useEffect(() => {
    setDocWidth(document.body.clientWidth);
    setSlidesWidth(document.getElementById('imgs').clientWidth);

    const handleResize = () => {
      setDocWidth(document.body.clientWidth);
      setSlidesWidth(document.getElementById('imgs').clientWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseMove = (e) => {
    const mouseX = e.pageX;
    const offset = (mouseX / docWidth) * slidesWidth - mouseX / 2;

    document.getElementById('imgs').style.transform = `translate3d(${-offset}px, 0, 0)`;
  };

  useEffect(() => {
    const handleResize = () => {
      setShowNextButton(window.innerWidth <= 992); // Adjust the breakpoint as needed
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNextClick = () => {
    setActiveSlideIndex(prevIndex => (prevIndex + 1) % slides.length);
  };

  const activeSlide = slides[activeSlideIndex];

  return (
    <div className='rulesss'>
      <h1 className='tetass'>PROCESS</h1>
      {showNextButton && (
      <div className="slided " id="imgs">
      <div className="lg:max-w-[400px] lg:h-[400px] max-h-[400px] max-w-[300px] flex justify-end flex-col sm:p-8 p-4 rounded-[32px] border-[2px] border-[#6A6A6A] relative ">
            <h1 className='power sm:text-[308px] text-[320px]'>{activeSlideIndex + 1}</h1>
            <h2 className='inspire font-bold sm:text-[32px] text-[40px] sm:leading-[40.32px] leading-[36.32px] text-white'>{activeSlide.title}</h2>
            <p className='inspired mt-[24px] font-normal sm:text-[24px] text-[22px] sm:leading-[45.6px] leading-[39.6px] text-white'>{activeSlide.description}</p>
          </div>
        </div>  
      )}
      {!showNextButton && (
      <div className="slided" id="imgs" onMouseMove={handleMouseMove}>
      {slides.map((slide, index) => (
            <div className={`flex-[0.5] lg:max-w-[400px] lg:h-[400px]  flex justify-end flex-col sm:p-8 p-5 rounded-[32px] border-[2px] border-[#6A6A6A] relative ${index === activeSlideIndex ? 'active' : ''}`} key={index}>
              <h1 className='power sm:text-[308px] text-[12px] '>{index + 1}</h1>
              <h2 className='inspire font-bold sm:text-[52px] text-[30px] sm:leading-[150.32px] leading-[38.32px] '>{slide.title}</h2>
              <p className='inspired mt-[24px] font-normal sm:text-[24.5px] text-[20px] sm:leading-[45.6px] leading-[39.6px] text-white'>{slide.description}</p>
            </div>
          ))}
        </div>
      )}
      {showNextButton && (
        <button className="next-button" onClick={handleNextClick}>
          ‹ ›
        </button>
      )}
    </div>
  );
};

export default RulesComponent;
