import { graphql, Link } from "gatsby"
import React from "react"
import InternalPageLayout from "../../components/InternalPageLayout"
import ContentList from "../../components/ContentList"

const sampleSpeakings = [
  {
    date: "2022-01-01",
    title: "Journey to the Edge of Reason",
    frontmatter: { slug: "", url: "true", slides: "", video: "" },
    id: 1,
  },
  {
    date: "2022-01-01",
    title: "Project Hail Mary",
    frontmatter: { slug: "", slides: "", video: "" },
  },
  {
    date: "2022-01-01",
    title: "Guns, Germs, and Steel",
    frontmatter: { slug: "" },
    id: 3,
  },
  {
    date: "2022-01-01",
    title: "Creative Selection ",
    frontmatter: { slug: "", url: "true", video: "" },
    id: 4,
  },
  //
  {
    date: "2018-01-01",
    title: "Journey to the Edge of Reason",
    frontmatter: { slug: "" },
    id: 1,
  },
  {
    date: "2018-01-01",
    title: "Project Hail Mary",
    frontmatter: { slug: "" },
    id: 2,
  },
  {
    date: "2018-01-01",
    title: "Guns, Germs, and Steel",
    frontmatter: { slug: "" },
    id: 3,
  },
  {
    date: "2018-01-01",
    title: "Creative Selection ",
    frontmatter: { slug: "" },
    id: 4,
  },
  //
  {
    date: "2019-01-01",
    title: "Journey to the Edge of Reason",
    frontmatter: { slug: "" },
    id: 1,
  },
  {
    date: "2019-01-01",
    title: "Project Hail Mary",
    frontmatter: { slug: "" },
    id: 2,
  },
  {
    date: "2019-01-01",
    title: "Guns, Germs, and Steel",
    frontmatter: { slug: "" },
    id: 3,
  },
  {
    date: "2019-01-01",
    title: "Creative Selection ",
    frontmatter: { slug: "" },
    id: 4,
  },
  //
  {
    date: "2020-01-01",
    title: "Journey to the Edge of Reason",
    frontmatter: { slug: "" },
    id: 1,
  },
  {
    date: "2020-01-01",
    title: "Project Hail Mary",
    frontmatter: { slug: "" },
    id: 2,
  },
  {
    date: "2020-01-01",
    title: "Guns, Germs, and Steel",
    frontmatter: { slug: "" },
    id: 3,
  },
  {
    date: "2020-01-01",
    title: "Creative Selection ",
    frontmatter: { slug: "" },
    id: 4,
  },
  //
  {
    date: "2021-01-01",
    title: "Journey to the Edge of Reason",
    frontmatter: { slug: "" },
    id: 1,
  },
  {
    date: "2021-01-01",
    title: "Project Hail Mary",
    frontmatter: { slug: "" },
    id: 2,
  },
  {
    date: "2021-01-01",
    title: "Guns, Germs, and Steel",
    frontmatter: { slug: "" },
    id: 3,
  },
  {
    date: "2021-01-01",
    title: "Creative Selection ",
    frontmatter: { slug: "" },
    id: 4,
  },
  //
  {
    date: "2016-01-01",
    title: "Journey to the Edge of Reason",
    frontmatter: { slug: "" },
    id: 1,
  },
  {
    date: "2016-01-01",
    title: "Project Hail Mary",
    frontmatter: { slug: "" },
    id: 2,
  },
  {
    date: "2016-01-01",
    title: "Guns, Germs, and Steel",
    frontmatter: { slug: "" },
    id: 3,
  },
  {
    date: "2016-01-01",
    title: "Creative Selection ",
    frontmatter: { slug: "" },
    id: 4,
  },
  //
]

const SupportMaterial = ({ speaking }) => {
  const video = speaking?.video?.url
  const slides = speaking?.slides?.url
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

export default function Speaking({ data = sampleSpeakings }) {
  const speakings = data.speakings.nodes.map(speaking => ({
    ...speaking.frontmatter,
    id: speaking.id,
  }))
  const upcoming = speakings.filter(({ date }) => new Date(date) > new Date())
  const past = speakings.filter(({ date }) => new Date(date) <= new Date())

  return (
    <InternalPageLayout>
      <h1 className="mb-5">I like to share.</h1>
      <p>
        I am often a speaker on talks regarding technology, education, and DRC's
        economical and societal development.
        <br />
        If you'd be interested in a workshop or lecture,{" "}
        <a target="_blank" href="https://linkedin.com/jlmbaka">
          let's talk
        </a>
        !
      </p>
      <h2>Upcoming events</h2>
      {upcoming.length > 0 ? (
        <ContentList items={upcoming} showYear={false} showDate={true} />
      ) : (
        <p>No events scheduled!</p>
      )}
      <h2 className="mb-3">Past events</h2>
      {past.length > 0 ? (
        <ContentList items={past} showYear={false} showDate={true} />
      ) : (
        <p>No past event!</p>
      )}
    </InternalPageLayout>
  )
}

export const query = graphql`
  query SpeakingPage {
    speakings: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: ASC }
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
