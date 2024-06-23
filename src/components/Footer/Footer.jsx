import React from "react";
import "./Footer.css";

import Icon from "../Icon/Icon";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <footer
      className={location.pathname === "/" ? "footer" : "footer-location"}
    >
      <div className="footer-wrapper">
        <h3 className="footer-title heading-s">Modern art gallery</h3>
        <p className="footer-text text-s">
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </p>
        <ul className="footer-social-icons">
          <li>
            <a
              to="/"
              className={
                location.pathname === "/"
                  ? "social-icon-button"
                  : "social-icon-button_location"
              }
            >
              <Icon
                name="facebook"
                height="20"
                width="20"
                className="social-icon"
              />
            </a>
          </li>
          <li>
            <a
              to="/"
              className={
                location.pathname === "/"
                  ? "social-icon-button"
                  : "social-icon-button_location"
              }
            >
              <Icon
                name="twitter"
                height="20"
                width="20"
                className="social-icon"
              />
            </a>
          </li>
          <li>
            <a
              to="/"
              className={
                location.pathname === "/"
                  ? "social-icon-button"
                  : "social-icon-button_location"
              }
            >
              <Icon
                name="instagram"
                height="20"
                width="20"
                className="social-icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
