import React from "react";

import "./projects.styles.scss";

const Projects = () => (
  <section className="projects">
    <div className="title">Projects</div>
    <div className="projects-content">
      <div className="button-group">
        <ul>
          <li>
            <button className="is-checked" data-filter="*">
              All
            </button>
          </li>
          <li>
            <button class="button" data-filter=".logos">
              Logos
            </button>
          </li>
          <li>
            <button class="button" data-filter=".landing-page">
              Landing Pages
            </button>
          </li>
          <li>
            <button class="button" data-filter=".other">
              Other Things
            </button>
          </li>
        </ul>
      </div>
      <div className="projects-imgs">
        <div className="img-container " data-category="landing-page">
          <img src="https://picsum.photos/seed/picsum/200/300" alt="test" />
        </div>
        <div className="img-container " data-category="landing-page">
          <img src="https://picsum.photos/seed/picsum/200/300" alt="test" />
        </div>
        <div className="img-container " data-category="landing-page">
          <img src="https://picsum.photos/seed/picsum/200/300" alt="test" />
        </div>
        <div className="img-container " data-category="landing-page">
          <img src="https://picsum.photos/seed/picsum/200/300" alt="test" />
        </div>
        <div className="img-container " data-category="landing-page">
          <img src="https://picsum.photos/seed/picsum/200/300" alt="test" />
        </div>
        <div className="img-container " data-category="landing-page">
          <img src="https://picsum.photos/seed/picsum/200/300" alt="test" />
        </div>
        <div className="img-container " data-category="landing-page">
          <img src="https://picsum.photos/seed/picsum/200/300" alt="test" />
        </div>
      </div>
    </div>
  </section>
);
export default Projects;
