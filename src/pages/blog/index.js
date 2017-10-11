import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'

import SitePost from '../../components/SitePost'

function BlogEntry(props) {
  const data = props.post.post
  return (
    <div>
      <Link to={data.frontmatter.path}>
        <h1>{data.frontmatter.title}</h1>
      </Link>
      <p className="lead">{data.frontmatter.date}</p>
    </div>
  )
}

class BlogIndex extends React.Component {
  render() {
    const pageLinks = []
    const site = this.props.data.site.siteMetadata
    const posts = this.props.data.remark.posts

    // const sortedPosts = posts.map(post => post.post.frontmatter.date).reverse()
    posts.forEach((data, i) => {
      const layout = data.post.frontmatter.layout
      const path = data.post.path
      if (layout === 'post' && path !== '/404/') {
        pageLinks.push(
          <LazyLoad height={500} offset={500} once={true} key={i}>
            <SitePost data={data.post} site={site} isIndex={true} key={i} />
          </LazyLoad>
        )
      }
    })

    const postEntries = posts.map((post, i) => {
      return <BlogEntry key={i} post={post} />
    })

    console.log(postEntries)
    return (
      <div className="container blog">
        <div className="blog-content">
          <h1 className="mb-4 display-4">Blog</h1>
          {postEntries}
          <Link to="/">Back to homepage</Link>
        </div>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
        description
        url
        author
      }
    }
    remark: allMarkdownRemark {
      posts: edges {
        post: node {
          html
          frontmatter {
            layout
            title
            path
            description
            date(formatString: "YYYY/MM/DD")
          }
        }
      }
    }
  }
`
