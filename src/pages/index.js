import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'

import Banner from '../components/Banner'

class BlogIndex extends React.Component {
  render() {
    const site = this.props.data.site.siteMetadata

    return (
      <div>
        <Helmet
          title={site.title}
          meta={[
            { property: 'og:title', content: site.title },
            { property: 'og:type', content: 'website' },
            { property: 'og:description', content: site.description },
            { property: 'og:url', content: site.url },
            {
              property: 'og:image',
              content: `${site.url}/img/profile.jpg`,
            },
          ]}
        />
        <Banner data={site} />
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        url
        author
        twitter
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
            categories
            description
            date(formatString: "YYYY/MM/DD")
          }
        }
      }
    }
  }
`
