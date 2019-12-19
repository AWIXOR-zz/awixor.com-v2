import React from "react";
import { Link } from "react-scroll";

import "./header.styles.scss";

class Header extends React.Component {
  state = {
    active: ""
  };

  openMenu = e => {
    const clicked = document.getElementById("main-header").id;

    if (this.state.active === clicked) {
      this.setState({ active: "" });
    } else {
      this.setState({ active: clicked });
    }
  };

  render() {
    return (
      <header
        className={`main-header ${
          this.state.active === "main-header" ? "open-nav" : ""
        }`}
        id="main-header"
      >
        <div className="header-wrapper">
          <a className="logo" href="/">
            Awixor
          </a>

          <div className="mobile-menu" onClick={this.openMenu}>
            <span className="ch1"></span>
            <span className="ch2"></span>
            <span className="ch3"></span>
          </div>
          <nav className="navbar">
            <div className="nav-menu">
              <Link
                className="menu-item"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
              >
                HOME
              </Link>
              <Link
                activeClass="active"
                className="menu-item"
                to="about"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                ABOUT
              </Link>
              <Link
                activeClass="active"
                className="menu-item"
                to="work"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                WORK
              </Link>
              <Link
                activeClass="active"
                className="menu-item"
                to="services"
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
              >
                SERVICES
              </Link>
              <Link
                activeClass="active"
                className="menu-item"
                to="projects"
                spy={true}
                smooth={true}
                offset={-130}
                duration={500}
              >
                PROJECTS
              </Link>
              <Link
                activeClass="active"
                className="contact-link menu-item"
                to="contact"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
              >
                CONTACT
              </Link>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
