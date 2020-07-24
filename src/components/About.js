import React, {Component} from "react"

class About extends Component{
  state= {}

  render(){
    return(
      <section className="section">
        <div className="section--wrapper">
          <div className="flex-center-col">
            <h1 className="about--header">About Me</h1>
            <small className="text-block text-center">I have 5 plus years of front-end web development experience. Occassionally I enjoy dipping
              my hands in UI/UX design. I am an eager learner ready to jump into a fast-pace
              environment with a great team! You can find my resume below or <a className="resume-btn" href="./TerraThaoVo-Resume.pdf" target="_blank" rel="noopener noreferrer">download the PDF here.</a></small>
            <div className="timeline timeline-about">
              <div className="timeline--group timeline--group-blue">
                <div className="timeline--group__left">
                  <p>July 2018 - Present</p>
                </div>
                <div className="timeline--group__right">
                  <h4>Front end web developer - <small>Web & product designer</small></h4>
                  <p>Hylink Digital Advertisement Agency</p>
                  <ul>
                    <li>
                      Implemented, designed, and maintained an internal web application consisting of multiple tools
                      to help departments improve efficiency and productivity.
                    </li>
                    <li>
                      Individually responsible for structuring, developing, and designing several automation tools to
                      convert complex form elements into a google document using the Google Drive API
                    </li>
                    <li>
                      Led in the development of numerous websites for clients focusing on branding, products, events,
                      and more.
                    </li>
                    <li>
                      Collaborated with designers to conceptualize multiple mobile interactive advertisement web
                      pages and also led the development process for each project.
                    </li>
                    <li>
                      In charge of the UI/UX and front end development of a stock trading AI application. Worked with
                      team members who understood stocks to come up with the most effective user flow.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="timeline--group timeline--group-blue">
                <div className="timeline--group__left">
                  <p>June 2016 - July 2018</p>
                </div>
                <div className="timeline--group__right">
                <h4>Front end web developer - <small>Web & graphic designer</small></h4>
                  <p>SureCo Insurance Agency</p>
                  <ul>
                    <li>Designed & developed (front-end) two main company websites along with multiple landing pages</li>
                    <li>
                      Project Coordinator for company outsourcing jobs
                      Plan meetings and propose project timelines for multiple design assignments
                      Communicates project details and revisions with freelancers on concepts and designs
                    </li>
                  </ul>
                </div>
              </div>
              <div className="timeline--group timeline--group-blue">
                <div className="timeline--group__left">
                  <p>May 2013 - Dec. 2015</p>
                </div>
                <div className="timeline--group__right">
                  <h4>Front End Developer Intern</h4>
                  <p>Macy's Systems & Technology</p>
                  <ul>
                    <li>Developed and designed an automation system for analytics monitoring</li>
                    <li>Implemented dynamic and responsive form fields.</li>
                    <li>Created Database tables and familiarized with SQL statements to populate form fields.</li>
                  </ul>
                </div>
              </div>
              <div className="timeline--group timeline--group-salmon">
                <div className="timeline--group__left">
                  <p>Graduated: Dec. 2015</p>
                </div>
                <div className="timeline--group__right">
                  <h4>B.S. Computer Science <br/> <small>Threads - Media & Information Internetworks</small></h4>
                  <p>Georgia Institute of Technology (Atlanta, GA)</p>
                </div>
              </div>
              <div className="timeline--group timeline--group-blue">
                <div className="timeline--group__left">
                  <p>May 2011 - Aug. 2013</p>
                </div>
                <div className="timeline--group__right">
                  <h4>Front end web applications (CMS) Developer Co-op</h4>
                  <p>Hannon Hill Corp</p>
                  <ul>
                    <li>Organized & performed JUnit testing to ensure quality assurance and fast performance</li>
                    <li>Created responsive form fields using Java, JSON, jQuery, JavaScript, XML, CSS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About