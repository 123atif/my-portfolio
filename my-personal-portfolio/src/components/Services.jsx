import "../styles/services.css";
import Heading from "../common/Heading";
import { Services_Data } from "../data";
import MyServices from "./MyServices";

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="services-heading">
        <Heading heading="My Services" />
      </div>
      <div className="service-container">
        {Services_Data.map((service) => (
          <MyServices service={service} key={service.id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
