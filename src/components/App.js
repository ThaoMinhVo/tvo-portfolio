import React, { Component } from 'react';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

import Nav from "./Nav"
import KeyVis from "./KeyVis"
import Skills from "./Skills"
import Work from "./Work"
import About from "./About"
import Contact from "./Contact"

class App extends Component {
  anchors = ["hi", "skills", "work", "about", "contact"]
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }
  render() {
    return (
      <div className="portfolio">
        <Nav />
      <ReactFullpage
        licenseKey={'D36D5BB4-645E47BD-858D70FB-EA0951AA'}
        anchors={this.anchors}
        menu = {'#menu'}
        navigation = {false}
        navigationTooltips={this.anchors}
        slidesNavigation= {false}
	      slidesNavPosition= {'bottom'}
        scrollOverflow={true}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper" className="wrapper">
              <KeyVis />
              <Skills />
              <Work />
              <About />
              <Contact />
            </div>
          );
        }}
      />
      </div>
    )
  }
}

export default App;
