import { graphql } from "gatsby"

import Writing from "../components/views/writing"

export const query = graphql`
  query WritingsPage {
    writings: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "//writings//" } }
    ) {
      nodes {
        frontmatter {
          slug
          title
          date
        }
        id
      }
    }
  }
`

export default Writing
