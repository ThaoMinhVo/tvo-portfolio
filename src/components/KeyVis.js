import React, {Component} from "react"
import {ReactComponent as KeyImage} from "../assets/images/main-kv.svg"

class KeyVis extends Component{
  state= {readyToAnimate: false}

  componentDidMount() {
    setTimeout(()=>{
      this.setState({readyToAnimate: true})
    }, 1000)
  }

  render(){
    return(
      <section className={this.state.readyToAnimate ? 'keyvis__container fullpage flex-center-col animate' : 'keyvis__container fullpage flex-center-col'}>
        <KeyImage onLoad={this.handleAnimation}/>
        <h1>Hi! I'm Thao Vo.</h1>
        <p>I'm a front end web developer with an eye for design based in Southern California</p>
        <button>Say Hello</button>
      </section>
    )
  }
}

export default KeyVis