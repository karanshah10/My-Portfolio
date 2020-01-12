import React,{Component} from "react"

export default class Experience extends Component{
    render(){
        return(
            <div>
                <section className="colorlib-experience" data-section="experience">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">Experience</span>
							<h2 className="colorlib-heading animate-box">Work Experience</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
				         <div className="timeline-centered">
					         <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
					            <div className="timeline-entry-inner">

					               <div className="timeline-icon color-1">
					                  <i className="icon-pen2"></i>
					               </div>

					               <div className="timeline-label">
					                  <h2><a href="https://www.peaas.co/">Software Engineer at PEaaS - a Finablr Company</a> <span>February 2017 - August 2019</span></h2>
					                  <ul>
                                          <li>Designed and build advanced applications for the Web (in React) and Android Mobile Application Platform.</li>
                                          <li>Actively participated in Sprint Planning, Daily scrum, Backlog Grooming, Retrospective Planning.</li>
                                          <li>Done research work if required for incorporating new features and third party integrations as well.</li>
                                          <li>Developed Multiple loosely coupled React Module components like-</li>
										  <ol>
											  <li>Blog Management component </li>
											  <li>User Management component</li>
											  <li>Transaction Management component</li>
											  <li>Category Management component</li>
											  <li>Template Management component</li>
										  </ol>
                                          <li>Created multiple internal libraries and react components like-
											  <ol>
												  <li>React Table component</li>
												  <li>React Toast-Message component</li>
												  <li>React Dropdown-Menu component</li>
												  <li>Android In-App purchase library</li>
												  <li>Android Beaccon library</li>
												  <li>Android Push-Notification library</li>
												  <li>Android Utilities library</li>
											  </ol>
										  </li>
                                      </ul>
					               </div>
					            </div>
					         </article>
					      </div>
					   </div>
				   </div>
				</div>
			</section>
            </div>
        )
    }
}