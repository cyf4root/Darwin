import React, { useState, useEffect } from 'react';

const Drag = () => {
  const [, setActive] = useState('');
  const [, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPosition = () => {
    setActive('');
    window.scrollTo(0, 850);
  };

  return (
    <div>
      <button type="button" onClick={scrollToPosition}>
        <div onClick={scrollToPosition} className="fll" id="header">
          <div className="containerr">
            <div className="chevron" />
            <div className="chevron" />
            <div className="chevron" />
          </div>
        </div>
      </button>
    </div>
  );
};

export default Drag;
