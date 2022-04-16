import React, { useState, useEffect } from "react";
import "../styles/Dropdown.scss";

const Dropdown = ({ items }) => {
  const [value, setValue] = useState("");
  const [filtered, setFiltered] = useState(items);
  const [selcted, setSelected] = useState("");
  const [visibleDropdown, setVisibleDropdown] = useState(false);

  const showDropdown = () => {
    setVisibleDropdown(prev => !prev);
  };

  const onChange = e => {
    const text = e.target.value;
    setValue(text);
  };

  const selectedItem = e => {
    setSelected(e.target.innerText);
  };

  useEffect(() => {
    const filteredItems = items.filter(item => {
      return item.includes(value) || item.toLowerCase().includes(value);
    });
    setFiltered(filteredItems);
  }, [value]);

  return (
    <div className='dropdown-wrapper'>
      <div className='display' onClick={showDropdown}>
        {selcted}
      </div>
      <div className={`options ${visibleDropdown ? "" : "invisible"}`}>
        <input
          type='text'
          onChange={onChange}
          value={value}
          className='search-bar'
        />
        <hr />
        <div className='item-text'>All Symbols</div>
        {filtered.map((filterItem, index) => {
          return (
            <div key={index} className='item-text' onClick={selectedItem}>
              {filterItem}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
