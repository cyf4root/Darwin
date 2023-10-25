import React, { useState, useEffect } from 'react';

const fontFamilies = ['AmaticSC-Bold', 'Bangers-Regular', 'Rye-Regular', 'IndieFlower-Regular', 'KirangHaerang-Regular', 'FrederickatheGreat-Regular'];

const SplashScreen = () => {
  const [currentFontIndex, setCurrentFontIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFontIndex((prevIndex) => (prevIndex + 1) % fontFamilies.length);
    }, 350);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = 'auto'; 
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto'; 
    };
  }, []);

  return (
    <div className="containep overflow-hidden">
      <h2 className="loki">
        {Array.from('DARWIN ').map((letter, index) => (
          <p
            key={index}
            className="letter"
            style={{ fontFamily: fontFamilies[(currentFontIndex + index) % fontFamilies.length] }}
          >
            {letter}
          </p>
        ))}
      </h2>
    </div>
  );
};

export default SplashScreen;
