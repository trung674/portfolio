import React from 'react'
import Link from 'gatsby-link'
import './style.scss'

class Banner extends React.Component {
  render() {
    const data = this.props.data
    const title = data.title
    const author = data.author

    return (
      <div className="container box">
        <div className="d-flex flex-column justify-content-center box-content">
          <h1 className="box-title display-3">&lt;Hello World /&gt;</h1>
          <p className="lead">Hi, my name is Trung Nguyen and I am a graduate software engineer/full-stack developer</p>
          <p className="lead">I love programming, gaming and anime</p>
          <div className="d-flex flex-row justify-content-center">
          </div>
        </div>
      </div>
    )
  }
}

export default Banner
