import React, { useState, useEffect } from "react";
import "../styles/Dropdown.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";

const Dropdown = ({ items }) => {
  const [value, setValue] = useState("");
  const [filtered, setFiltered] = useState(items);
  const [selcted, setSelected] = useState("All symbols");
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
        <MdArrowDropDown className='dropdown-icon' />
      </div>
      <div className={`options ${visibleDropdown ? "" : "invisible"}`}>
        <div className='search-box'>
          <input
            type='text'
            onChange={onChange}
            value={value}
            className='search-bar'
            placeholder='Search symbol'
          />
          <AiOutlineSearch className='search-icon' />
        </div>
        <div className='item-box'>
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
    </div>
  );
};

export default Dropdown;
