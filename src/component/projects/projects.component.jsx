import React from "react";

import ProjectMenu from "./project-menu.component";
import ProjectItem from "./project-item.component";

import "./projects.styles.scss";

class Projects extends React.Component {
  constructor() {
    super();

    this.state = {
      imgs: [
        {
          id: 1,
          title: "Redesign my personal website",
          data_category: "landing-page",
          imgUrl: "https://i.imgur.com/UbtYBcbm.jpg"
        },
        {
          id: 2,
          title: "Daily UI #09 #FreePalestine",
          data_category: "landing-page",
          imgUrl: "https://i.imgur.com/J3MgbKCm.jpg"
        },
        {
          id: 3,
          title: "Daily UI #08 #Shaco",
          data_category: "landing-page",
          imgUrl: "https://i.imgur.com/q2DMOeRm.jpg?1"
        },
        {
          id: 4,
          title: "Daily UI #07 #Halloween",
          data_category: "landing-page",
          imgUrl: "https://i.imgur.com/bBIQlpDm.jpg"
        },
        {
          id: 5,
          title: "Daily UI #06 #Music",
          data_category: "landing-page",
          imgUrl: "https://i.imgur.com/9UjuWb2m.jpg"
        },
        {
          id: 6,
          title: "Daily UI #05 #NasaWebsiteDesign",
          data_category: "landing-page",
          imgUrl: "https://i.imgur.com/aK5lMiMm.jpg?1"
        },
        {
          id: 7,
          title: "Daily UI #04 #BookPlaneDesign",
          data_category: "landing-page",
          imgUrl: "https://i.imgur.com/cYczyp7m.jpg"
        },
        {
          id: 8,
          title: "Daily UI #03 #CarBrandDesign",
          data_category: "landing-page",
          imgUrl: "https://i.imgur.com/LxzjqASm.jpg"
        },
        {
          id: 9,
          title: "Daily UI #02 #JOKER",
          data_category: "landing-page",
          imgUrl: "https://i.imgur.com/yUyfeQXm.jpg"
        },
        {
          id: 10,
          title: "My Personal Website",
          data_category: "landing-page",
          imgUrl: "https://i.imgur.com/1cdWidAm.jpg"
        },
        {
          id: 11,
          title: "My Legacy logo",
          data_category: "logo",
          imgUrl: "https://i.imgur.com/GL45Y3gm.png"
        },
        {
          id: 12,
          title: "Car brand logo",
          data_category: "logo",
          imgUrl: "https://i.imgur.com/poCZmQpm.png"
        },
        {
          id: 13,
          title: "My New logo",
          data_category: "logo",
          imgUrl: "https://i.imgur.com/T0PpVEZm.png"
        },
        {
          id: 14,
          title: "Shaco logo",
          data_category: "logo",
          imgUrl: "https://i.imgur.com/KSTfUGLm.png"
        },
        {
          id: 15,
          title: "Book a flight logo",
          data_category: "logo",
          imgUrl: "https://i.imgur.com/FFBUNenm.png"
        }
      ]
    };
  }

  render() {
    return (
      <section className="projects">
        <div className="title">Projects</div>
        <div className="projects-content">
          <ProjectMenu />
          <div className="projects-item">
            {this.state.imgs.map(({ id, ...otherProps }) => (
              <ProjectItem key={id} {...otherProps} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
export default Projects;
