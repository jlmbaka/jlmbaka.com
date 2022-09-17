import { graphql } from "gatsby"

import Writings from "../components/views/writings"
export default Writings

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
