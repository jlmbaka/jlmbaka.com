import { graphql } from "gatsby"
import SEO from "../components/SEO"
import React from "react"
import Readings from "../components/views/readings"

export default Readings

export const query = graphql`
  query UseGoodreadsShelves {
    recentlyFinished: allFeedGoodreadsBook(
      sort: { fields: created, order: DESC }
    ) {
      books: nodes {
        id
        created
        finished
        title
        author
      }
    }
  }
`

export const Head = ({}) => {
  return <SEO title="My Readings" />
}
