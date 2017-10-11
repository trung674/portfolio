import React from 'react'
import Link from 'gatsby-link'
import './style.scss'

class Contact extends React.Component {
  render() {
    return (
      <div className="container box">
        <div className="d-flex flex-column justify-content-center box-content">
          <h2 className="box-title display-4">&lt;Contact /&gt;</h2>
          <p className="lead">If you are interested, please check out my resume and feel free to drop me an email.</p>
          <div className="mb-4 d-flex flex-row justify-content-center">
            <a className="mx-1 btn btn-lg btn-outline-success" title="resume" href="/pdf/NTT_CV.pdf" target="_blank" rel="external">Resume</a>
            <a className="mx-1 btn btn-lg btn-outline-success" title="email" href="mailto:thanhtrung674@gmail.com">Email</a>
            <a className="mx-1 btn btn-lg btn-outline-success" title="github" href="https://github.com/trung674/" target="_blank" rel="external">Github</a>
            <a className="mx-1 btn btn-lg btn-outline-success" title="linkedin" href="https://www.linkedin.com/in/trung674/" target="_blank" rel="external">Linked</a>
          </div>
          <p className="lead">Also, I have a <Link className="pj-link" to="/blog">blog</Link>.</p>
          
        </div>
      </div>
    )
  }
}

export default Contact
