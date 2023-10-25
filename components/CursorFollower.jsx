import React, { useState, useEffect } from 'react';

const CursorFollower = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isBlackBackground, setIsBlackBackground] = useState(false);
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isHoveringDragg, setIsHoveringDragg] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    const handleBackgroundColorChange = () => {
      const isBackgroundDark = window.getComputedStyle(document.body).backgroundColor === 'rgb(5, 5, 5)';
      setIsBlackBackground(isBackgroundDark);
    };

    const handleLinkHover = () => {
      setIsHoveringLink(true);
    };

    const handleLinkLeave = () => {
      setIsHoveringLink(false);
    };

    const handleDraggEnter = () => {
      setIsHoveringDragg(true);
    };

    const handleDraggLeave = () => {
      setIsHoveringDragg(false);
    };

    const links = document.querySelectorAll('a');
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    const draggElement = document.querySelector('.slided');
    draggElement.addEventListener('mouseenter', handleDraggEnter);
    draggElement.addEventListener('mouseleave', handleDraggLeave);

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('load', handleBackgroundColorChange);
    window.addEventListener('resize', handleBackgroundColorChange);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('load', handleBackgroundColorChange);
      window.removeEventListener('resize', handleBackgroundColorChange);
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
      draggElement.removeEventListener('mouseenter', handleDraggEnter);
      draggElement.removeEventListener('mouseleave', handleDraggLeave);
    };
  }, []);

  if (window.innerWidth <= 768) {
    return null;
  }

  return (
    <div
      className={`cursorFollower ${isBlackBackground ? 'black' : 'white'} ${isHoveringLink ? 'hovet' : ''} ${isHoveringDragg ? 'circle-with-text' : ''}`}
      style={{
        left: cursorPosition.x,
        top: cursorPosition.y,
      }}
    >
      {isHoveringDragg && (
        <div className="circle-text">
          Slide
        </div>
      )}
    </div>
  );
};

export default CursorFollower;
