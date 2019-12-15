import React from "react";

import "./home.styles.scss";
import codeThinking from "../../assits/bg 3.png";

const Home = () => (
  <section id="#home" className="home">
    <div className="left-side">
      <h2 className="title">EL HOUCINE AOUASSAR,</h2>
      <p>
        also known as Awixor, I'm a self taught Designer & Front-end Developer
      </p>
      <a href="#contact" className="animated-button">
        <button>Get in Touch</button>
      </a>
      <a href="/" className="animated-button">
        <button>View Resume</button>
      </a>
    </div>

    <div className="right-side">
      <img src={codeThinking} alt="thinking code" />
    </div>
  </section>
);
export default Home;
