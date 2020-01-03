import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
            <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="karan-shah10"><a class="LI-simple-link" href='https://ca.linkedin.com/in/karan-shah10?trk=profile-badge'>karan shah</a></div>
              {/* <div className="author-img" style={{backgroundImage: 'url(images/IMG_0031.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Karan Shah</a></h1>
              <span className="email"><i className="icon-mail"></i> karanshah10121995@gmail.com</span> */}
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#skills" data-nav-section="skills">SKILLS</a></li>
                  <li><a href="#education" data-nav-section="education">EDUCATION</a></li>
                  <li><a href="#experience" data-nav-section="experience">EXPERIENCE</a></li>
                  <li><a href="#work" data-nav-section="work">WORK</a></li>
                  {/* <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li> */}
                  <li><a href="#contact" data-nav-section="contact">Contact</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                {/* <li><a href="https://www.facebook.com/dhruv.barochia" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li> */}
                {/* <li><a href="https://twitter.com/ddbarochiya" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li> */}
                {/* <li><a href="https://www.instagram.com/ddbarochiya/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li> */}
                <li><a href="https://www.linkedin.com/in/karan-shah-b521bab1/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/karanshah10" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                {/* <li><a href="https://medium.com/@dhruv.barochia34788" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li> */}
              </ul>
            </nav>
            <div className="colorlib-footer">
              {/* <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br>
                  Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration 
              </small></p> */}
              <p><small>
                Something coming soon !!
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
