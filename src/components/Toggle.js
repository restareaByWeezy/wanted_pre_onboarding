import React, { useState } from "react";
import "../styles/Toggle.scss";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  const onClick = () => {
    setToggle(prev => !prev);
  };

  return (
    <div>
      <div className='toggle-wrapper' onClick={onClick}>
        <div className={`toggle-box ${toggle ? "right" : "left"}`}></div>
        <div className='toggle-text'>
          <div className='default'>기본</div>
          <div className='detail'>상세</div>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
