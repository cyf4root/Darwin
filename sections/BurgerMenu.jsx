import React from 'react';

const BurgerMenu = ({ onClick, isActive }) => {
  return (
    <div
      className={`burger-menu ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

export default BurgerMenu;
