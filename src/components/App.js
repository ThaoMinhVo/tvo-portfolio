import React, { Component } from 'react';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

import Nav from "./Nav"
import KeyVis from "./KeyVis"
import Skills from "./Skills"
import Work from "./Work"

class App extends Component {
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
        scrollOverflow={true}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper" className="wrapper">
              <KeyVis />
              <Skills />
              <Work />
            </div>
          );
        }}
      />
      </div>
    )
  }

  // <div className="section section1">
  //               <h3>Section 1</h3>
  //             </div>
  //             <div className="section extraHeight">
  //               <div className="slide">
  //                 <h3>Slide 2.1</h3>
  //               </div>
  //               <div className="slide">
  //                 <h3>Slide 2.2</h3>
  //               </div>
  //               <div className="slide">
  //                 <h3>Slide 2.3</h3>
  //               </div>
  //             </div>
  //             <div className="section">
  //               <h3>Section 3</h3>
  //               <button onClick={() => fullpageApi.moveTo(1, 0)}>
  //                 Move top
  //               </button>
  //             </div>

  // render() {
  //   return (
  //     <ReactFullpage
  //       licenseKey = {'D36D5BB4-645E47BD-858D70FB-EA0951AA'}
  //       scrollOverflow={true}
  //       sectionsColor={["orange", "purple", "green"]}
  //       onLeave={this.onLeave.bind(this)}
  //       afterLoad={this.afterLoad.bind(this)}
  //       render={({ state, fullpageApi }) => {
  //         return (
  //           <div id="fullpage-wrapper">
  //             <div className="section section1">
  //               <h3>Section 1</h3>
  //             </div>
  //             <div className="section extraHeight">
  //               <div className="slide">
  //                 <h3>Slide 2.1</h3>
  //               </div>
  //               <div className="slide">
  //                 <h3>Slide 2.2</h3>
  //               </div>
  //               <div className="slide">
  //                 <h3>Slide 2.3</h3>
  //               </div>
  //             </div>
  //             <div className="section">
  //               <h3>Section 3</h3>
  //               <button onClick={() => fullpageApi.moveTo(1, 0)}>
  //                 Move top
  //               </button>
  //             </div>
  //           </div>
  //         );
  //       }}
  //     />
  //   );
  // }

}

export default App;
