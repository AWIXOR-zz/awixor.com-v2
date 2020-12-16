import React from "react";

import "./footer.component.scss";

const Footer = () => (
  <div className="footer">
    <div className="top">
      <div className="string">Follow me on:</div>
      <div className="icons">
        <a href="https://www.facebook.com/profile.php?id=100009514404677">
          <i className="fab fa-facebook facebook"></i>
        </a>
        <a href="https://twitter.com/HAoussare">
          <i className="fab fa-twitter twitter"></i>
        </a>
        <a href="https://www.behance.net/awixor">
          <i className="fab fa-behance behance"></i>
        </a>
        <a href="https://codepen.io/awixor">
          <i className="fab fa-codepen codepen"></i>
        </a>
        <a href="https://medium.com/@Awixor">
          <i className="fab fa-medium medium"></i>
        </a>
        <a href="https://www.instagram.com/awixor">
          <i className="fab fa-instagram instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/awixor/">
          <i className="fab fa-linkedin linkedin"></i>
        </a>
      </div>
    </div>
    <div className="bottom">
      <p>
        Awixor - Built with React <i className="fab fa-react react"></i> and
        Deployed on Vercel
        <img
          height="18"
          width="18"
          alt="img"
          className="netlify"
          src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vercel.svg"
        />
      </p>
    </div>
  </div>
);
export default Footer;
