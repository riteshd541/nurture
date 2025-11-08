import React from "react";
import { useNavigate } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const navigateTo = (route) => {
    navigate(route);
  };

  const staticPolicies = [
    { name: "Privacy Policy", route: "/policy/privacy-policy" },
    { name: "Refund Policy", route: "/policy/refund-policy" },
    { name: "Terms & Conditions", route: "/policy/terms-and-conditions" },
  ];

  return (
    <div style={{ background: "#f47c90" }}>
      <div className="footer-section-wrapper">
        {/* Left Section */}
        <div
          className="footer-vertical-section"
          style={{ textAlign: "center" }}
        >
          <img src="/Header-logo.png" alt="logo" className="footer-image" />
          <div style={{ marginBottom: "10px", textAlign: "justify" }}>
            <div className="footer-section-heading">
              Nurture - Your Health, Our Care
            </div>
            <p>
              Nurture a product by Jaccha Baccha Healthcare Pvt Ltd aims to
              revolutionize motherhood and child care by offering a
              comprehensive digital journey — from pregnancy to teenage. Our
              platform blends medical insights, AI-driven analytics, and
              emotional support to ensure holistic growth.
            </p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-vertical-section">
          <div className="footer-section-heading">Quick Links</div>
          <div className="footer-link-wrapper">
            <div
              className="footer-section-links"
              onClick={() => navigateTo("/registration-form")}
            >
              Registration Form
            </div>
            {staticPolicies.map((item, index) => (
              <div
                className="footer-section-links"
                key={index}
                onClick={() => navigateTo(item.route)}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-vertical-section">
          <div className="footer-section-heading">Socials</div>
          <div className="footer-section-links">
            <a
              href="https://rijuvalikatechnologies.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="header-icon" />
            </a>
            <a
              href="https://rijuvalikatechnologies.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="header-icon" />
            </a>
          </div>

          <div className="footer-section-heading">Contact</div>
          <ul>
            <li>HEAD OFFICE- DUMMY ADDRESS, India</li>
            <div style={{ margin: "10px 0px", fontWeight: "bold" }}>
              Office : +91 1234567890
            </div>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-dev">
        Powered by{" "}
        <a
          style={{ color: "black" }}
          href="https://rijuvalikatechnologies.in/"
          target="_blank"
          rel="noreferrer"
        >
          Rijuvalika Technologies Pvt Ltd
        </a>
      </div>
    </div>
  );
};

export default Footer;
