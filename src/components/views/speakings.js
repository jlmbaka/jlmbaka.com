import React from "react"
import InternalPageLayout from "../InternalPageLayout"
import ContentList from "../ContentList"

export default function Speakings({ data }) {
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
        <a target="_blank" href="https://www.linkedin.com/in/jlmbaka/">
          let's talk
        </a>
        !
      </p>
      <h2>Upcoming events</h2>
      {upcoming.length > 0 ? (
        <ContentList
          items={upcoming}
          showYear={false}
          showDate={true}
          baseUrl="speaking"
        />
      ) : (
        <p>No events scheduled!</p>
      )}
      <h2 className="mb-3">Past events</h2>
      {past.length > 0 ? (
        <ContentList
          items={past}
          showYear={false}
          showDate={true}
          baseUrl="speakings"
        />
      ) : (
        <p>No past event!</p>
      )}
    </InternalPageLayout>
  )
}
