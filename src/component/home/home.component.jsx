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
      <a
        href="https://drive.google.com/file/d/1V1LnjmIMxF7op88GUsoIyFZTScsu_hrroHtcsgAvgoE/view?usp=sharing"
        className="animated-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>View Resume</button>
      </a>
    </div>

    <div className="right-side">
      <img src={codeThinking} alt="thinking code" />
    </div>
  </section>
);
export default Home;
