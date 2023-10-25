import React from 'react';
import { LuMousePointerClick } from 'react-icons/lu';
import { GiClick } from 'react-icons/gi';

const WavyText = () => {
 
  return (
    <div className="wavy sm:left-[300px] sm:top-[300px] top-[180px] left-[200px]">
      <span>
        <LuMousePointerClick className="kingg sm:flex hidden unclickable" size={20} />
        <GiClick className="kingg sm:hidden unclickable" size={12} />
      </span>
		{/* <span style={{ '--i': 1 }}>&nbsp; &nbsp;</span>
      <span style={{ '--i': 1 }}>H</span>
      <span style={{ '--i': 2 }}>o</span>
      <span style={{ '--i': 3 }}>v</span>
      <span style={{ '--i': 4 }}>e</span>
      <span style={{ '--i': 5 }}>r</span>
      <span style={{ '--i': 6 }}>&nbsp;&nbsp;</span>
      <span style={{ '--i': 7 }}>f</span>
      <span style={{ '--i': 8 }}>o</span>
	  <span style={{ '--i': 8 }}>r</span>
      <span style={{ '--i': 9 }}>&nbsp;&nbsp;</span>
      <span style={{ '--i': 10 }}>d</span>
      <span style={{ '--i': 11 }}>e</span>
      <span style={{ '--i': 12 }}>t</span>
      <span style={{ '--i': 13 }}>a</span>
	  <span style={{ '--i': 13 }}>i</span>
	  <span style={{ '--i': 12 }}>l</span>
      <span style={{ '--i': 13 }}>s</span> */}
     
    </div>
  );
};

export default WavyText;
