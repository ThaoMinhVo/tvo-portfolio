import React, {Component} from "react"

class Skills extends Component{
  state= {}

  render(){
    return(
      <section className="section">
        <div className="section--wrapper flex-center-col">
          <h1>Skills</h1>
          <div className="skills__container">
          <div className="skills__block skills__block-dev">
            <h2>Development</h2>
            <div className="timeline timeline-skills">
              <div className="timeline--group">
                <div className="timeline--group__left">
                  <h3>Languages</h3>
                </div>
                <div className="timeline--group__right">
                  <p>HTML5, CSS3, Sass with Gulp, Javascript, jQuery, MySQL, Node.js, React.js</p>
                </div>
              </div>
              <div className="timeline--group">
                <div className="timeline--group__left">
                  <h3>Software</h3>
                </div>
                <div className="timeline--group__right">
                  <p>Visual Studio Code, Brackets, Sublime, MAMP, FileZilla</p>
                </div>
              </div>
              <div className="timeline--group">
                <div className="timeline--group__left">
                  <h3>Operating Systems</h3>
                </div>
                <div className="timeline--group__right">
                  <p>Mac OS, Windows, Linux</p>
                </div>
              </div>
              <div className="timeline--group">
                <div className="timeline--group__left">
                  <h3>Other</h3>
                </div>
                <div className="timeline--group__right">
                  <p>Git, Bootstrap, Craft CMS, Jira, Media Temple</p>
                </div>
              </div>
            </div>
          </div>
          <div className="skills__block skills__block-design">
            <h2>Design</h2>
            <div className="timeline timeline-skills">
              <div className="timeline--group">
                <div className="timeline--group__left">
                  <h3>Focus</h3>
                </div>
                <div className="timeline--group__right">
                  <p>UI/UX<br/>Web Design<br/>Photography</p>
                </div>
              </div>
              <div className="timeline--group">
                <div className="timeline--group__left">
                  <h3>Software</h3>
                </div>
                <div className="timeline--group__right">
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