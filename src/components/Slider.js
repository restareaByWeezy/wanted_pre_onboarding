import React, { useState } from "react";
import "../styles/Slider.scss";

const items = [1, 25, 50, 75, 100];

const Slider = ({ defaultPercent }) => {
  const [percent, setPercent] = useState(
    100 < defaultPercent || defaultPercent < 1 ? "Error" : defaultPercent
  );
  const [selected, setSelected] = useState(0);

  const onChange = e => {
    setPercent(e.target.value);
  };

  const onClick = p => {
    setPercent(p);
  };

  const onMouseOver = p => {
    setSelected(p);
  };

  const onMouseLeave = () => {
    setSelected(0);
  };

  return (
    <div className='slider-container'>
      <div className='display-box'>
        <div className='display-text'>{percent}</div>
        <div className='percent-icon'>%</div>
      </div>

      <input
        className='range'
        type='range'
        value={percent}
        min='1'
        max='100'
        onChange={onChange}
      />
      <div className='circle'></div>

      <div className='branch-text-wrapper'>
        {items.map(item => {
          return (
            <span
              key={item}
              onClick={() => {
                onClick(item);
              }}
              onMouseOver={() => {
                onMouseOver(item);
              }}
              onMouseLeave={onMouseLeave}
              className={`branch-text ${selected === item ? "selected" : ""}`}
            >
              {item}%
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
