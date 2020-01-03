import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import Contact from './components/contact'
import Skills from './components/skills'
import Education from './components/education'
import Experience from './components/experience'
import Work from './components/work'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
          <Skills></Skills>
          <Education></Education>
          <Experience></Experience>
          <Work></Work>
					{/* <Timeline></Timeline> */}
          <Contact></Contact>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
