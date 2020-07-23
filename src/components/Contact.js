import React, {Component} from "react"
import {ReactComponent as WorkImg} from "../assets/images/graphics/code-struction.svg"

class Contact extends Component{
  state= {}

  render(){
    return(
      <section className="section">
        <div className="section--wrapper">
            <div className="contact__container--content">
              <h1>Contact</h1>
              <WorkImg />
              <div><a className="contact__btn" a href="mailto:thaomvo@gmail.com">Email Me Instead</a></div>
            </div>
        </div>
      </section>
    )
  }
}

export default Contact