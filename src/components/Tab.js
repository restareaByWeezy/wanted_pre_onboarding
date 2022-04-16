import React, { useState } from "react";
import "../styles/Tab.scss";

const Tab = ({ items }) => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className='tab-wrapper'>
        {items.map((tabItem, index) => {
          return (
            <div
              key={tabItem}
              className={`tab ${counter === index ? "selected" : ""}`}
              onClick={() => setCounter(index)}
            >
              {tabItem}
            </div>
          );
        })}
      </div>
      <div className='tab-slider-wrapper'>
        <div
          className={"tab-slider"}
          style={{ transform: `translateX(${counter * 150}px)` }}
        ></div>
      </div>
    </>
  );
};

export default Tab;
