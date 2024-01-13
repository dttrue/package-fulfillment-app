import React, { useState } from "react";
import "./Header.css";
import "../imgs/fulfillment.png";


const Header = ({ onSearch }) => {
const [ search, setSearch ] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  }

  return (
    <header className="header">
      <h1>Fulfillment App</h1>
      <h3>Manage your packages</h3>
      <input className="search" type="text" placeholder="Search..." value={search} onChange={handleSearch} />
   
    </header>
  );
};

export default Header;
