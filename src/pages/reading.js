import { graphql } from "gatsby"
import SEO from "../components/SEO"
import React from "react"

import Reading from "../components/views/reading"
// export { default as Reading } from "../components/views/reading"

export default Reading

export const query = graphql`
  query UseGoodreadsShelves {
    currentlyReading: allGoodreadsBook(
      filter: { shelf: { eq: "currently-reading" } }
      sort: { fields: started, order: DESC }
    ) {
      books: nodes {
        title
        author
        isbn
        url
        started
      }
    }
    recentlyFinished: allGoodreadsBook(
      filter: { shelf: { eq: "read" } }
      sort: { fields: finished, order: DESC }
    ) {
      books: nodes {
        finished
        title
        author
        isbn
        url
        started
      }
    }
  }
`

export const Head = ({}) => {
  return <SEO title="My Readings" />
}
