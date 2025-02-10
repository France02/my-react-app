import React from 'react';
import logo from "../icons_assets/Logo.svg"

const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="Little Lemon Logo" />
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;