import { graphql, Link } from "gatsby"
import React from "react"
import InternalPageLayout from "../../components/InternalPageLayout"
import ContentList from "../../components/ContentList"

export default function Writing({ data }) {
  const writings = data.writings.nodes.map(writing => ({
    ...writing.frontmatter,
    id: writing.id,
  }))
  const years = Array.from(
    new Set(
      writings.map(writing => {
        const date = new Date(writing.date)
        return date.getFullYear()
      })
    )
  )

  return (
    <InternalPageLayout>
      <h1 className="mb-5">Writings</h1>
      {years.map(year => (
        <ContentList
          key={year}
          year={year}
          baseUrl="writings"
          showDate
          items={writings.filter(writing => writing.date.startsWith(year))}
        />
      ))}
    </InternalPageLayout>
  )
}

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