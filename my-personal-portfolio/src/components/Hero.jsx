import React from "react";
import "../styles/hero.css";
import atif22 from "../assets/atif22.jpg";
const Hero = () => {
  return (
    <div className="hero">
      <img src={atif22} alt="Hero" className="hero-img" />
      <h1>
        <span> I'm Atif Arshad,</span> web developer based in Pakistan
      </h1>
      <p>
        I'm a front-end developer based in Lahore, PK with over a year of
        experience in creating engaging and user-friendly web interfaces.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect With me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
