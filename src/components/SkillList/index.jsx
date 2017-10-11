import React from 'react'
import Link from 'gatsby-link'
import './style.scss'

class SkillList extends React.Component {
  render() {
    return (
      <div className="container box">
        <div className="d-flex flex-column justify-content-center box-content">
          <h2 className="display-4">&lt;Skills /&gt;</h2>
          <p className="lead">I actually like frontend more than backend, although I suck at design.</p>

          <div className="sl-icons mb-4 row">
            <div className="sl-icon col-md-2 col-3">
              <i className="devicon-html5-plain-wordmark colored"></i>
            </div>
            <div className="sl-icon col-md-2 col-3">
              <i className="devicon-css3-plain-wordmark colored"></i>
            </div>
            <div className="sl-icon col-md-2 col-3">
              <i className="devicon-javascript-plain colored"></i>
            </div>
            <div className="sl-icon col-md-2 col-3">
              <i className="devicon-react-original-wordmark colored"></i>
            </div>
            <div className="sl-icon col-md-2 col-3">
              <i className="devicon-angularjs-plain colored colored"></i>
            </div>
            <div className="sl-icon col-md-2 col-3">
              <i className="devicon-jquery-plain-wordmark colored"></i>
            </div>
            <div className="sl-icon col-md-2 col-3">
              <i className="devicon-nodejs-plain-wordmark"></i>
            </div>
            <div className="sl-icon col-md-2 col-3">
              <i className="devicon-express-original-wordmark"></i>
            </div>
            <div className="sl-icon col-md-2 col-3">
              <i className="devicon-rails-plain-wordmark colored"></i>
            </div>
            <div className="sl-icon col-md-2 col-3">
              <i className="devicon-mysql-plain-wordmark"></i>
            </div>
            <div className="sl-icon col-md-2 col-3">
              <i className="devicon-mongodb-plain-wordmark colored"></i>
            </div>
            <div className="sl-icon col-md-2 col-3">
              <i className="devicon-git-plain-wordmark colored"></i>
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}

export default SkillList
