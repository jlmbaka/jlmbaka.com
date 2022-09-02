import React from "react"
import InternalPageLayout from "../InternalPageLayout"
import ContentList from "../ContentList"
import slugify from "slugify"

export default function Reading({
  data: { currentlyReading, recentlyFinished },
}) {
  const readings = recentlyFinished.books.map(
    ({ isbn, title, author, finished }) => ({
      id: isbn,
      date: finished,
      title,
      author,
      slug: slugify(title),
    })
  )

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
      {readings.length > 0
        ? years.map(year => (
            <ContentList
              year={year}
              key={year}
              baseUrl="readings"
              items={readings.filter(
                ({ date }) => new Date(date).getFullYear() === year
              )}
            />
          ))
        : "My readings will appear hear. Comeback soon!"}
    </InternalPageLayout>
  )
}
