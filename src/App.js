import React from "react";

import Header from "./component/header/header.component";
import Home from "./component/home/home.component";
import About from "./component/about/about.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
    </div>
  );
}

export default App;
