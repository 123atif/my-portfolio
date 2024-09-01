import React from "react";
import "../styles/navbar.css";
import logo from "../assets/logo.svg";
// import portfolio from "../assets/portfolio.png";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="Portfolio" />
        <ul className="nav-menu">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
        <div className="nav-contact">Connect With Me </div>
      </div>
    </>
  );
};

export default Navbar;
