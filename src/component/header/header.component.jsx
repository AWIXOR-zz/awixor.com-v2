import React from "react";

import "./header.styles.scss";

const Header = () => (
  <header className="main-header">
    <div className="header-wrapper">
      <a className="logo" href="/">
        Awixor
      </a>

      <div class="mobile-menu">
        <span class="ch1"></span>
        <span class="ch2"></span>
        <span class="ch3"></span>
      </div>
      <nav className="navbar">
        <ul>
          <li>
            <a id="home-link" href="#home">
              HOME
            </a>
          </li>
          <li>
            <a id="about-link" href="#about">
              ABOUT{" "}
            </a>
          </li>

          <li>
            <a id="work-link" href="#work">
              WORK
            </a>
          </li>
          <li>
            <a id="services-link" href="#services">
              SERVICES
            </a>
          </li>
          <li>
            <a id="projects-link" href="#projects">
              PROJECTS
            </a>
          </li>
          <li>
            <a id="contact-link" href="#contact">
              CONTACT
            </a>
          </li>
          <li>
            <i className="fas fa-sun"></i>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
