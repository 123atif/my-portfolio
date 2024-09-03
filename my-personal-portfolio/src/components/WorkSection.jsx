import React, { useState } from "react";
import Heading from "../common/Heading";
import "../styles/worksection.css";
import arrow from "../assets/arrow_icon.svg";
import { myWork } from "../data";

const WorkSection = () => {
  const [readMore, setReadMore] = useState(false);
  const displayedWork = readMore ? myWork : myWork.slice(0, 3);
  return (
    <div className="my-work">
      <div>
        <Heading heading="My Latest Work" />
      </div>
      <div className="mywork-container">
        {displayedWork.map((mywork) => {
          return (
            <div key={mywork.id}>
              <a href={mywork.link} target="_blank" rel="noopener noreferrer">
                <img src={mywork.w_img} alt="w_img" className="work-img" />
              </a>
            </div>
          );
        })}
      </div>
      <div className="mywork-showmore" onClick={() => setReadMore(!readMore)}>
        <p>{readMore ? "Show Less" : "Show More"}</p>
        <img src={arrow} alt="arrow-icon" />
      </div>
    </div>
  );
};

export default WorkSection;