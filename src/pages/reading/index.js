import React from "react"
import InternalPageLayout from "../../components/InternalPageLayout"
import ContentList from "../../components/ContentList"
import { graphql, Link } from "gatsby"

export default function Reading({ data }) {
  const readings = data.readings.nodes.map(reading => ({
    ...reading.frontmatter,
    id: reading.id,
  }))

  console.log(readings)

  const years = Array.from(
    new Set(
      readings.map(reading => {
        const date = new Date(reading.date)
        return date.getFullYear()
      })
    )
  )

  return (
    <InternalPageLayout>
      <h1 className="mb-5">Readings</h1>
      {years.map(year => (
        <ContentList
          year={year}
          key={year}
          baseUrl="readings"
          items={readings.filter(reading => reading.date.startsWith(year))}
        />
      ))}
    </InternalPageLayout>
  )
}

export const query = graphql`
  query ReadingPage {
    readings: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: ASC }
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
