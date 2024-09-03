import React from "react";
import "../styles/contact.css";
import Heading from "../common/Heading";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="contact">
      <div>
        <Heading heading="Get In Touch" />
      </div>

      <div className="contact-sections">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <IoIosMail style={{ width: "2rem", height: "2rem" }} />
              <a href="mailto:atifarshad593@gmail.com">
                atifarshad593@gmail.com
              </a>
            </div>
            <div className="contact-detail">
              <IoCall style={{ width: "2rem", height: "2rem" }} />
              <a href="tel:0324-5725778">0324-5725778</a>
            </div>
            <div className="contact-detail">
              <FaLocationDot style={{ width: "2rem", height: "2rem" }} />
              <p>Lahore, PK</p>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <form>
            <label htmlFor="name">Your Name</label>
            <input type="text" name="name" placeholder="Enter your name" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Enter your email" />
            <label htmlFor="message">Write your Message here</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              cols="30"
              rows="10"
            ></textarea>
            <button type="submit" className="contact-submit">
              {" "}
              Submit now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
