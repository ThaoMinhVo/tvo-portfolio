import React, {Component} from "react"

class Skills extends Component{
  state= {}

  render(){
    return(
      <section className="section">
        <div className="flex-center-col">
          <h1>Skills</h1>
          <div className="skills__container">
          <div className="skills__block skills__block-dev">
            <h2>Development</h2>
            <div className="skills__timeline">
              <div className="skills__timeline--group">
                <h3>Languages</h3>
                <div>
                  <p>HTML5, CSS3, Sass with Gulp, Javascript, jQuery, MySQL, Node.js, React.js</p>
                </div>
              </div>
              <div className="skills__timeline--group">
                <h3>Software</h3>
                <div>
                  <p>Visual Studio Code, Brackets, Sublime, MAMP, FileZilla</p>
                </div>
              </div>
              <div className="skills__timeline--group">
                <h3>Operating Systems</h3>
                <div>
                  <p>Mac OS, Windows, Linux</p>
                </div>
              </div>
              <div className="skills__timeline--group">
                <h3>Other</h3>
                <div>
                  <p>Git, Bootstrap, Craft CMS, Jira, Media Temple</p>
                </div>
              </div>
            </div>
          </div>
          <div className="skills__block skills__block-design">
            <h2>Design</h2>
            <div className="skills__timeline">
              <div className="skills__timeline--group">
                <h3>Focus</h3>
                <div>
                  <p>UI/UX<br/>Web Design<br/>Photography</p>
                </div>
              </div>
              <div className="skills__timeline--group">
                <h3>Software</h3>
                <div>
                  <p>Sketch<br/>Adobe Creative Suite:<br/>Illustrator<br/>Photoshop<br/>PS Lightroom<br/>InDesign</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    )
  }
}

export default Skills