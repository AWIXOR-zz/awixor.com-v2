import React from "react";

// import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
// import { TimelineMax, TweenMax, TweenLite } from "gsap/all";
// import ScrollMagic from "scrollmagic";

import Header from "./component/header/header.component";
import Home from "./component/home/home.component";
import About from "./component/about/about.component";
import Work from "./component/work/work.component";
import Services from "./component/services/services.component";
import Contact from "./component/contact/contact.component";
import Footer from "./component/footer/footer.component";
import "./App.css";
import Projects from "./component/projects/projects.component";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Home />
        <About />
        <Work />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};
export default App;
