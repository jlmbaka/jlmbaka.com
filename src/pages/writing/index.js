import { graphql, Link } from "gatsby"
import React from "react"
import InternalPageLayout from "../../components/InternalPageLayout"
import ContentList from "../../components/ContentList"

const sampleWritings = [
  {
    date: "2018-01-01",
    title: "Journey to the Edge of Reason",
    author: "Stephen Budiansky",
    frontmatter: { slug: "" },
    id: 1,
  },
  {
    date: "2018-01-01",
    title: "Project Hail Mary",
    author: "Andy Weir",
    frontmatter: { slug: "" },
    id: 2,
  },
  {
    date: "2018-01-01",
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    frontmatter: { slug: "" },
    id: 3,
  },
  {
    date: "2018-01-01",
    title: "Creative Selection ",
    author: "Ken Kocienda",
    frontmatter: { slug: "" },
    id: 4,
  },
  //
  {
    date: "2019-01-01",
    title: "Journey to the Edge of Reason",
    author: "Stephen Budiansky",
    frontmatter: { slug: "" },
    id: 1,
  },
  {
    date: "2019-01-01",
    title: "Project Hail Mary",
    author: "Andy Weir",
    frontmatter: { slug: "" },
    id: 2,
  },
  {
    date: "2019-01-01",
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    frontmatter: { slug: "" },
    id: 3,
  },
  {
    date: "2019-01-01",
    title: "Creative Selection ",
    author: "Ken Kocienda",
    frontmatter: { slug: "" },
    id: 4,
  },
  //
  {
    date: "2020-01-01",
    title: "Journey to the Edge of Reason",
    author: "Stephen Budiansky",
    frontmatter: { slug: "" },
    id: 1,
  },
  {
    date: "2020-01-01",
    title: "Project Hail Mary",
    author: "Andy Weir",
    frontmatter: { slug: "" },
    id: 2,
  },
  {
    date: "2020-01-01",
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    frontmatter: { slug: "" },
    id: 3,
  },
  {
    date: "2020-01-01",
    title: "Creative Selection ",
    author: "Ken Kocienda",
    frontmatter: { slug: "" },
    id: 4,
  },
  //
  {
    date: "2021-01-01",
    title: "Journey to the Edge of Reason",
    author: "Stephen Budiansky",
    frontmatter: { slug: "" },
    id: 1,
  },
  {
    date: "2021-01-01",
    title: "Project Hail Mary",
    author: "Andy Weir",
    frontmatter: { slug: "" },
    id: 2,
  },
  {
    date: "2021-01-01",
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    frontmatter: { slug: "" },
    id: 3,
  },
  {
    date: "2021-01-01",
    title: "Creative Selection ",
    author: "Ken Kocienda",
    frontmatter: { slug: "" },
    id: 4,
  },
  //
  {
    date: "2016-01-01",
    title: "Journey to the Edge of Reason",
    author: "Stephen Budiansky",
    frontmatter: { slug: "" },
    id: 1,
  },
  {
    date: "2016-01-01",
    title: "Project Hail Mary",
    author: "Andy Weir",
    frontmatter: { slug: "" },
    id: 2,
  },
  {
    date: "2016-01-01",
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    frontmatter: { slug: "" },
    id: 3,
  },
  {
    date: "2016-01-01",
    title: "Creative Selection ",
    author: "Ken Kocienda",
    frontmatter: { slug: "" },
    id: 4,
  },
  //
]

const SupportMaterial = ({ writings }) => {
  const video = writings?.video?.url
  const slides = writings?.slides?.url
  if (video && slides) {
    return (
      <span>
        <a href={video.url}>Video</a>
        &nbsp;&amp;&nbsp;
        <a href={slides.url}>Slides</a>
      </span>
    )
  }
  if (video) {
    return <a href={video.url}>Video</a>
  }
  if (slides) {
    return <a href={slides.url}>Slides</a>
  }
}

export default function Writing({ data }) {
  const years = Array.from(
    new Set(
      sampleWritings.map(reading => {
        const date = new Date(reading.date)
        return date.getFullYear()
      })
    )
  )
  return (
    <InternalPageLayout>
      <h1 className="mb-5">Writings</h1>
      {years.map(year => (
        <ContentList
          year={year}
          key={year}
          baseUrl="reading"
          showDate
          items={sampleWritings.filter(reading =>
            reading.date.startsWith(year)
          )}
        />
      ))}
    </InternalPageLayout>
  )
}
