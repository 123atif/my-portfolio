import React from "react";
import "../styles/hero.css";
import atif22 from "../assets/atif22.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <img src={atif22} alt="Hero" className="hero-img" />
      <h1>
        <span> I'm Atif Arshad,</span> web developer based in Pakistan
      </h1>
      <p>
        I'm a front-end developer based in Lahore, PK with over a year of
        experience in creating engaging and user-friendly web interfaces.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#footer">
            Connect With me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            href="https://drive.google.com/file/d/1iU0rmJXt02RXuotkPUV8dfVsOcQzTYXW/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
