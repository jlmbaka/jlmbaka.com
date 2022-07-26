import { graphql } from "gatsby"
// import SEO from "../components/SEO"
import Reading from "../components/views/reading"
// import React from "react"

/* export const Head = ({}) => {
  // const { title } = data.markdownRemark.frontmatter
  return <SEO title="foo" />
} */

export const query = graphql`
  query ReadingsPage {
    readings: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "//readings//" } }
    ) {
      nodes {
        frontmatter {
          slug
          title
          date
          author
        }
        id
      }
    }
  }
`

export default Reading
