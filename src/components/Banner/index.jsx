import React from 'react'
import Link from 'gatsby-link'
import './style.scss'

class Banner extends React.Component {
  render() {
    const data = this.props.data
    const title = data.title
    const author = data.author

    return (
      <div className="container-fluid banner-wrap">
        <div className="container d-flex flex-column justify-content-center banner-content">
          <h1 className="banner-title display-3">programmer.moe</h1>
          <p className="banner-p">Hi, my name is Trung Nguyen and I am a software engineer/full-stack developer</p>
          <p className="banner-p">I love coding, gaming and anime.</p>

        </div>
      </div>
    )
  }
}

export default Banner
