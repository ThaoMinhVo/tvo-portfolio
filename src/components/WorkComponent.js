import React from "react"

function WorkComponent(props){
  return(
    <div className="slide">
      <div className="slide__container">
        <div className="slide__content">
          <div className="slide__content-work--bg slide__content-work--bg-1" style={{backgroundColor:props.work.color}}></div>
          <div className="slide__content-work--bg slide__content-work--bg-2" style={{backgroundColor:props.work.color}}></div>
          <div className="slide__content slide__content-work">
            <img src={require(`../assets/images/work/${props.work.img}`)} alt="work-img"/>
            <h2>{props.work.header}</h2>
            <small>{props.work.contribution}</small>
            <p className="text-block text-center">{props.work.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkComponent