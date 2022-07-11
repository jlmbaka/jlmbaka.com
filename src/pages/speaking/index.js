import { graphql } from "gatsby"
import Speaking from "./view"

export default Speaking

export const query = graphql`
  query SpeakingsPage {
    speakings: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "//speakings//" } }
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
