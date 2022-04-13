import React from "react";
import Toggle from "./components/Toggle";
import Tap from "./components/Tab";
import "./App.scss";

const App = () => {
  return (
    <div className='global'>
      <Toggle></Toggle>
      <Tap></Tap>
    </div>
  );
};

export default App;
