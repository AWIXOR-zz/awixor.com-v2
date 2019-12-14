import React from "react";

import Header from "./component/header/header.component";
import Home from "./component/home/home.component";
import About from "./component/about/about.component";
import Work from "./component/work/work.component";
import Services from "./component/services/services.component";

import "./App.css";
import Projects from "./component/projects/projects.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Work />
      <Services />
      <Projects />
    </div>
  );
}

export default App;
