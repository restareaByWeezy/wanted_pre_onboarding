import React from "react";
import Toggle from "./components/Toggle";
import Tab from "./components/Tab";
import Input from "./components/Input";
import Dropdown from "./components/Dropdown";
import Slider from "./components/Slider";
import "./App.scss";

const toggleItems = ["기본", "상세"];
const tabItems = ["감자", "고구마", "카레라이스"];
const dropdownItems = [
  "BTCUSD.PERP",
  "ETHUSD.PERP",
  "BCHUSD.PERP",
  "LTCUSD.PERP",
  "XRPUSD.PERP",
];
const sliderItems = [1, 25, 50, 75, 100];

const App = () => {
  return (
    <div className='global'>
      <Toggle items={toggleItems} />
      <Tab items={tabItems} />
      <Slider items={sliderItems} />
      <Input />
      <Dropdown items={dropdownItems} />
    </div>
  );
};

export default App;
