import React from "react"

import mailIcon from "../assets/images/email.svg"
import linkedinIcon from "../assets/images/linkedin.svg"

function Nav(){
  return(
    <nav>
      <a data-menuanchor="hi" href="#hi" className="logo"></a>
      <ul id="menu">
        <li data-menuanchor="skills"><a href="#skills">skills</a></li>
        <li data-menuanchor="work"><a href="#work">work</a></li>
        <li data-menuanchor="about"><a href="#about">about</a></li>
        <li data-menuanchor="contact"><a href="#contact">contact</a></li>
      </ul>
      <div className="social">
        <a href="mailto:thaomvo@gmail.com">
          <img src={mailIcon} alt="email"/>
        </a>
        <a href="https://www.linkedin.com/in/thaomvo" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="linkedin"/>
        </a>
      </div>
    </nav>
  )
}

export default Nav