import { graphql } from "gatsby"
import Reading from "./view"

export default Reading

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
