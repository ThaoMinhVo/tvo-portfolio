import React from "react"

import mailIcon from "../assets/images/email.svg"
import linkedinIcon from "../assets/images/linkedin.svg"

function Nav(){
  return(
    <nav>
      <div className="logo"></div>
      <div className="social">
        <a href="mailto:thaomvo@gmail.com">
          <img src={mailIcon} alt="email"/>
        </a>
        <a href="www.linkedin.com/in/thaomvo">
          <img src={linkedinIcon} alt="linkedin"/>
        </a>
      </div>
    </nav>
  )
}

export default Nav