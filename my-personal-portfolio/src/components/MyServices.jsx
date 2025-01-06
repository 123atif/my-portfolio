import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import "../styles/services.css";

const MyServices = ({ service }) => {
  const [readMore, setReadMore] = useState(false);

  let description = service.description;
  if (!readMore) {
    description = service.s_desc.slice(0, 60) + "...";
  } else {
    description = service.s_desc;
  }

  return (
    <div key={service.id} className="service-format">
      <h3>{service.s_no}</h3>
      <h2>{service.s_name}</h2>
      <p className="description">{description}</p>
      <div className="services-readmore">
        <p onClick={() => setReadMore(() => !readMore)} key={service.id}>
          {readMore ? "Less" : "Read More"}
          <FaArrowRight className="arrow" />
        </p>
      </div>
    </div>
  );
};

export default MyServices;
