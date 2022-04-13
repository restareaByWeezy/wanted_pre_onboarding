import React, { useState } from "react";
import "../styles/Tab.scss";

const Tab = () => {
  const [counter, setCounter] = useState(null);

  const clickPotato = () => {
    setCounter(0);
  };
  const clickSweetPotato = () => {
    setCounter(1);
  };
  const clickCurry = () => {
    setCounter(2);
  };

  return (
    <>
      <div className='tab-wrapper'>
        <div
          className={`potato ${counter === 0 ? "selected" : ""}`}
          onClick={clickPotato}
        >
          감자
        </div>
        <div
          className={`sweet-potato ${counter === 1 ? "selected" : ""}`}
          onClick={clickSweetPotato}
        >
          고구마
        </div>
        <div
          className={`curry ${counter === 2 ? "selected" : ""}`}
          onClick={clickCurry}
        >
          카레라이스
        </div>
      </div>
      <div className='tab-bar'>
        <div
          className={
            "tab-slider" +
            " " +
            (counter === 0 ? "left" : counter === 1 ? "center" : "right")
          }
        ></div>
      </div>
    </>
  );
};

export default Tab;
