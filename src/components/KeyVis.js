import React, {Component} from "react"
import {ReactComponent as KeyImage} from "../assets/images/graphics/main-kv.svg"

class KeyVis extends Component{
  state= {readyToAnimate: false}

  componentDidMount() {
    setTimeout(()=>{
      this.setState({readyToAnimate: true})
    }, 1000)
  }

  render(){
    return(
      <section className='keyvis__container section'>
        <div className="section--wrapper flex-center-col">
          <KeyImage onLoad={this.handleAnimation} className={this.state.readyToAnimate ? 'keyvis flex-center-col animate' : 'keyvis fullpage flex-center-col'}/>
          <h1>Hi! I'm Thao Vo.</h1>
          <p className="text-center text-block">I'm a front end web developer with an eye for design based in Southern California</p>
          <a href="#skills" >Learn More</a>
        </div>
      </section>
    )
  }
}

export default KeyVis