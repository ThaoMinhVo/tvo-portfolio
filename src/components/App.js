import React from 'react';
import Nav from "./Nav"
import KeyVis from "./KeyVis"
import Skills from "./Skills"

function App() {
  return (
    <div className="portfolio">
      <Nav />
      <div className="wrapper">
        <KeyVis />
        <Skills />
      </div>
    </div>
  );
}

export default App;
