import React, {Component} from "react"
import {ReactComponent as WorkImg} from "../assets/images/graphics/what-im-up-to.svg"
import WorkComponent from "./WorkComponent"
import workData from '../assets/js/workData'

class Work extends Component{
  state= {
    allwork: workData
  }

  render(){
    const workComponents = this.state.allwork.map(work => <WorkComponent key={work.id} work={work}/>)
    return(
      <section className="work flex-center-col section">
        <div className="slide slide-main">
          <div className="section--wrapper">
            <div className="slide__content slide__content-main">
              <div className="slide__content-main--img">
                <WorkImg />
              </div>
              <div className="slide__content-main--text">
                <h1>Work</h1>
                <p className="text-bold">What have I been up to lately?</p>
                <p>Here are a few of the projects I’ve been working on. If you would like to see more, please contact me.</p>
              </div>
            </div>
          </div>
        </div>
        {workComponents}
      </section>
    )
  }
}

export default Work