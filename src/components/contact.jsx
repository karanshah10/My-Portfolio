import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-contact" data-section="contact">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Get in Touch</span>
                                <h2 className="colorlib-heading">Contact</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">
                                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="colorlib-icon">
                                        <i className="icon-globe-outline"></i>
                                    </div>
                                    <div className="colorlib-text">
                                        <p><a href="mailto: karanshah10121995@gmail.com">karanshah10121995@gmail.com</a></p>
                                    </div>
                                </div>

                                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="colorlib-icon">
                                        <i className="icon-map"></i>
                                    </div>
                                    <div className="colorlib-text">
                                        <p>265 Algoma Street South, Thunder Bay, ON P7B3C3</p>
                                    </div>
                                </div>

                                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="colorlib-icon">
                                        <i className="icon-phone"></i>
                                    </div>
                                    <div className="colorlib-text">
                                        <p><a href="tel://">+807 356 5623</a></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-7 col-md-push-1">
							<div class="row">
								<div class="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
                                <div className="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="karan-shah10"><a class="LI-simple-link" href='https://ca.linkedin.com/in/karan-shah10?trk=profile-badge'>karan shah</a></div>
								</div>
								
							</div>
						</div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}