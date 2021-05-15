import React from "react";
import "./ContactDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const ContactDetails = () => {
  return (
    <div id="contactInfo">
      <p>
        <FontAwesomeIcon icon={faPhone} /> +8801521203263
      </p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} /> umarfchy@gmail.com
      </p>
      <div className="d-flex align-items-center pb-3">
        <p className="my-auto">Social Media </p>
        <div>
          <span
            style={{
              color: "#0e76a8",
            }}
            className="socialIcons"
          >
            <a
              href="https://www.linkedin.com/in/umarfchy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </span>
          <span
            className="socialIcons"
            style={{
              color: "#fff",
            }}
          >
            <a
              href="https://github.com/umarfchy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
