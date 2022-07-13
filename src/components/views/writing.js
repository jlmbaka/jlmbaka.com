import React from "react"
import InternalPageLayout from "../InternalPageLayout"
import ContentList from "../ContentList"

function Writing({ data }) {
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
      {writings.length > 0
        ? years.map(year => (
            <ContentList
              key={year}
              year={year}
              baseUrl="writings"
              showDate
              items={writings.filter(writing => writing.date.startsWith(year))}
            />
          ))
        : "No past writings. Come back soon!"}
    </InternalPageLayout>
  )
}

export { Writing }
