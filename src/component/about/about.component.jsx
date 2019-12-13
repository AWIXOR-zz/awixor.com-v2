import React from "react";

import codeReview from "../../assits/codeReview 1.svg";
import masterPlan from "../../assits/masterPlan 1.svg";
import "./about.styles.scss";

const About = () => (
  <section className="about">
    <h1>MORE ABOUT MY SKILLS</h1>
    <div className="about-content">
      <div className="row">
        <img src={codeReview} alt="Code Review" />
        <p>FULL STACK DEVELOPMENT</p>
        <div className="icons">
          <i class="fab fa-php php"></i>
          <i class="fab fa-sass sass"></i>
          <i class="fab fa-react react"></i>
          <i class="fab fa-js js"></i>
        </div>
      </div>
      <div className="row">
        <img src={masterPlan} alt="Code Review" />
        <p>GRAPHIC & UI DESIGN</p>
        <div className="icons">
          <img
            height="32"
            width="32"
            alt="img"
            color="red"
            className="figma"
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/figma.svg"
          />
          <img
            height="32"
            width="32"
            alt="img"
            className="ps"
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobephotoshop.svg"
          />
          <img
            height="32"
            width="32"
            alt="img"
            className="xd"
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobexd.svg"
          />
          <img
            height="32"
            width="32"
            alt="img"
            className="ai"
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobeillustrator.svg"
          />
        </div>
      </div>
    </div>
  </section>
);

export default About;
