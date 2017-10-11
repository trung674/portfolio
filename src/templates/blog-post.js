import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import React from 'react'
import striptags from 'striptags'

import SitePost from '../components/SitePost'
import SitePage from '../components/SitePage'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.post
    const site = this.props.data.site
    const layout = post.frontmatter.layout
    const title = post.frontmatter.title
    const siteTitle = site.meta.title

    let template = ''
    if (layout != 'page') {
      template = <SitePost data={post} site={site} isIndex={false} />
    } else {
      template = <SitePage {...this.props} />
    }
    return (
      <div>
        <Helmet
          title={`${title} | ${siteTitle}`}
          meta={[
            { property: 'og:title', content: post.frontmatter.title },
            { property: 'og:type', content: 'article' },
            {
              property: 'og:description',
              content: striptags(post.html).substr(0, 200),
            },
            {
              property: 'og:url',
              content: `${site.meta.url}${post.frontmatter.path}`,
            },
          ]}
        />
        {template}
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      meta: siteMetadata {
        title
        description
        url
        author
      }
    }
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        layout
        title
        path
        date(formatString: "YYYY/MM/DD")
      }
    }
  }
`
