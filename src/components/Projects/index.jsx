import React from 'react'
import Link from 'gatsby-link'
import './style.scss'

class Projects extends React.Component {
  render() {
    return (
      <div className="container box">
        <div className="d-flex flex-column justify-content-center box-content">
          <h2 className="box-title display-4">&lt;Past Projects /&gt;</h2>
          <p className="lead">Some of my proudest works, but none of them is about designing a new middle-out compression algorithm.</p>

          <div className="pj-project">
            <h2>Online Speech Recorder (2017)</h2>
            <p className="">My third-year dissertation - A web application that helps record the users' speech directly on the web browser and also function as a digital archive management system.</p>
            <p><strong>Technologies</strong>: Node.js | Express.js | MongoDB | Socket.IO | WebRTC API | Amazon Web Services.</p>
            <p><strong>Source</strong>: <a href="https://github.com/trung674/third-year-dissertation" className="pj-link" target="_blank" rel="external">Github</a></p>
          </div>

          <div className="pj-project">
            <h2>Tracking Football Transfer News Web Application (2017)</h2>
            <p className="">A web app that can capture tweets about the transfer rumours related to a given footballer's name and/or club on Twitter in real time. The returned data is analyzed and shown to the users as detailed frequency tables and pie charts.</p>
            <p><strong>Technologies: </strong>Node.js | Express.js | MySQL | Twitter API | SPARQL | Chart.js.</p>
            <p><strong>Source: </strong><a href="https://github.com/trung674/IW_Web_App" className="pj-link" target="_blank" rel="external">Github</a></p>
          </div>

          <div className="pj-project">
            <h2>Tracking Football Transfer News Mobile App (2017)</h2>
            <p className="">A hybrid mobile app that has the same functionality as the web application. Data is retrieved from the web application's RESTful API via AJAX and then displayed to the users.</p>
            <p><strong>Technologies: </strong>Apache Cordova | SQlite | jQuery | Ajax.</p>
            <p><strong>Source: </strong><a href="https://github.com/trung674/IW_Mobile_App" className="pj-link" target="_blank" rel="external">Github</a></p>
          </div>

          <div className="pj-project">
            <h2>Village Memories Archive Management System (2016)</h2>
            <p className="">My first working experience with a real-world client - A web application for supporting the archive management of oral history & files for the South Yorkshire villages of Micklebring, Clifton and Braithwell.</p>
            <p><strong>Technologies: </strong>Ruby on Rails | SQlite | jQuery | Google Maps API | <a className="pj-link" href="http://www.webasr.org/" target="_blank" rel="external">WebASR</a> | Heroku.</p>
            <p><strong>Source: </strong><a href="https://github.com/trung674/com3420-post-project" className="pj-link" target="_blank" rel="external">Github</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
