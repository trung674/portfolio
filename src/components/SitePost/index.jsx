import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import size from 'lodash/size'
import ReadNext from '../ReadNext'
import './style.scss'

class SitePost extends React.Component {
  more(body, path) {
    if (body.match('<!--more-->')) {
      return (
        <Link className="readmore" to={path}>
          <span className="btn btn-outline-primary btn-block">MORE</span>
        </Link>
      )
    }
    return
  }

  description(body) {
    let test = body.replace(/<blockquote>/g, '<blockquote class="blockquote">')
    if (test.match('<!--more-->')) {
      test = test.split('<!--more-->')
      if (typeof test[0] !== 'undefined') {
        return test[0]
      }
    }
    return test
  }

  // categories(data) {
  //   if (!data) {
  //     return
  //   }
  //   const categories = []
  //   data.forEach((category, i) => {
  //     categories.push(
  //       <span className="badge badge-primary text-white" key={i}>
  //         {category}
  //       </span>
  //     )
  //   })
  //   return categories
  // }

  render() {
    const { site, data, isIndex } = this.props

    const title = data.frontmatter.title
    const path = data.frontmatter.path
    const date = data.frontmatter.date
    const desc = data.frontmatter.description || data.html
    // const cate = data.frontmatter.category') || get(data, 'frontmatter.categories')

    // const categories = cate ? this.categories(cate) : ''
    const description = isIndex ? this.description(desc) : desc
    const more = isIndex ? this.more(desc, path) : ''
    const footer = isIndex ? '' : <ReadNext data={site} />
    return (
      <div className="container blog">
        <div className="blog-content">
          <h1 className="blog-title">{title}</h1>
          <time className="lead blog-time" dateTime={date}>{date}</time>
          <hr/>
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <Link to="/blog">Back</Link>
          {/* <div className="article-wrap" key={path}>
            <div className="page-header">
           
              {categories}
            </div>
            <div
              className="page-content"
              dangerouslySetInnerHTML={{ __html: description }}
            /> 
          </div> */}
        </div>
      </div>
    )
  }
}

export default SitePost
