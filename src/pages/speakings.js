import { graphql } from "gatsby"

import Speakings from "../components/views/speakings"
export default Speakings

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
