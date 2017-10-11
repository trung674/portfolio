import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'

import Banner from '../components/Banner'
import SkillList from '../components/SkillList'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

class Index extends React.Component {
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
            { property: 'og:author', content: site.author },
          ]}
        />
        <Banner data={site} />
        <SkillList />
        <Projects />
        <Contact />
      </div>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
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
