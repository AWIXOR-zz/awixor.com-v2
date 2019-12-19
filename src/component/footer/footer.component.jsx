import React from "react";

import "./footer.component.scss";

const Footer = () => (
  <div className="footer">
    <div className="top">
      <div className="string">Follow me on:</div>
      <div className="icons">
        <i className="fab fa-facebook facebook"></i>
        <i className="fab fa-twitter twitter"></i>
        <i className="fab fa-behance behance"></i>
        <i className="fab fa-codepen codepen"></i>
        <i className="fab fa-medium medium"></i>
        <i className="fab fa-instagram instagram"></i>
        <i className="fab fa-linkedin linkedin"></i>
      </div>
    </div>
    <div className="bottom">
      <p>
        Awixor - Built with React <i className="fab fa-react react"></i> and
        Deployed on Netlify
        <img
          height="18"
          width="18"
          alt="img"
          className="netlify"
          src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/netlify.svg"
        />
      </p>
    </div>
  </div>
);
export default Footer;
