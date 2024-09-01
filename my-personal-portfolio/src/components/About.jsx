import React from "react";
import "../styles/about.css";
import theme_pattern from "../assets/theme_pattern.svg";
import Atif from "../assets/Atif.jpeg";
import { Tilt } from "react-tilt";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <Tilt>
            <img src={Atif} alt="Atif" />
          </Tilt>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Motivated Software Engineer with a strong foundation in computer
              science and a passion for developing innovative software
              solutions. Eager to bring my skills to your team and contribute
              meaningfully while gaining valuable hands-on experience. I am
              excited about the opportunity to grow within your organization and
              help drive your projects forward.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML & CSS</p>
                <hr style={{ width: "65%" }}></hr>
              </div>
              <div className="about-skill">
                <p>Javascript</p> <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill">
                <p>React Js</p> <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>Next Js</p> <hr style={{ width: "60%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievments">
        <div className="about-achievment">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>4+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievment">
          <h1>2+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
