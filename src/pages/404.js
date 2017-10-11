import React from 'react'
import Link from 'gatsby-link'
import link from './404-dead-link.png'

class NotFound extends React.Component {
  render() {
    return (
      <div className="container box">
        <div className="d-flex flex-column justify-content-center box-content">
          <h1>404 Dead Link</h1>
          <img className="mx-auto img-fluid nf-img" src={link} alt="404-link-not-found" />
          <div><Link className="pj-link" to="/">Go back to save point</Link></div>
        </div>
      </div>
    )
  }
}

export default NotFound