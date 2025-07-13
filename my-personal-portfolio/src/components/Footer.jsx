import "../styles/footer.css";
import user_icon from "../assets/user_icon.svg";
import computer from "../assets/computers.gif";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={computer} alt="footer_logo" />
          <p>
            I am a Full Stack developer with over a year of experience in
            creating web designs.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="user_icons" />
            <input type="Email" placeholder="Enter your email" />
          </div>
          <div className="footer-email-button">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="copyright">
          Copyright &copy; 2024 Atif Arshad. All rights reserved.
        </p>
        <div className="footer-icons">
          <a href="https://github.com/123atif">
            <FaGithub style={{ width: "2rem", height: "2rem" }} />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-atif-arshad-8118a4196">
            <FaLinkedin style={{ width: "2rem", height: "2rem" }} />
          </a>
          <a href="https://www.instagram.com/atif_arshad_333/">
            <FaInstagram style={{ width: "2rem", height: "2rem" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
