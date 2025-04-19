import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";  // <-- Remove the duplicate import
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Tomato Logo" />
          <p>
            Whether you are craving gourmet meals, comforting favorites, or
            exotic flavors, CraveCart offers an extensive menu crafted by expert
            chefs, using only the freshest ingredients.
          </p>

          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>
              <Link to="/" state={{ scrollTo: "top" }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/" state={{ scrollTo: "find" }}>
                About us
              </Link>
            </li>
            <li>
              <Link to="/" state={{ scrollTo: "menu" }}>
                Delivery
              </Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link> {/* Corrected Link */}
            </li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>
              <a href="tel:+12124567890">+1-212-456-7890</a>
            </li>
            <li>
              <a href="mailto:contact@tomato.com">contact@tomato.com</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © CraveCart - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
