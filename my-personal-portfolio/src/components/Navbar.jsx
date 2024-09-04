import React, { useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/logo.svg";
import underline from "../assets/nav_underline.svg";
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="Portfolio" />
        <ul className="nav-menu">
          <li>
            <p onClick={() => setMenu("home")}>Home</p>
            {menu === "home" ? <img src={underline} alt="underline" /> : <></>}
          </li>
          <li>
            <p onClick={() => setMenu("about")}>About</p>
            {menu === "about" ? <img src={underline} alt="underline" /> : <></>}
          </li>
          <li>
            <p onClick={() => setMenu("services")}>Services</p>
            {menu === "services" ? (
              <img src={underline} alt="underline" />
            ) : (
              <></>
            )}
          </li>
          <li>
            <p onClick={() => setMenu("work")}>Portfolio</p>
            {menu === "work" ? <img src={underline} alt="underline" /> : <></>}
          </li>
          <li>
            <p onClick={() => setMenu("contact")}>Contact</p>
            {menu === "contact" ? (
              <img src={underline} alt="underline" />
            ) : (
              <></>
            )}
          </li>
        </ul>
        <div className="nav-contact">Connect With Me </div>
      </div>
    </>
  );
};

export default Navbar;
