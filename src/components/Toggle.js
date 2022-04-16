import React, { useState } from "react";
import "../styles/Toggle.scss";

const Toggle = ({ items }) => {
  const [toggle, setToggle] = useState(false);
  const onClick = () => {
    setToggle(prev => !prev);
  };

  return (
    <div>
      <div className='toggle-wrapper' onClick={onClick}>
        <div className={`toggle-box ${toggle ? "right" : "left"}`}></div>
        <div className='toggle-text'>
          {items.map(item => (
            <div key={item} className='text'>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Toggle;
