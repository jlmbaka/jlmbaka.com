import { graphql, Link } from "gatsby"
import React from "react"
import InternalPageLayout from "../../components/InternalPageLayout"

const speakings = [
  {
    date: "06/06/19",
    title: "Front Utah: Designing Change",
    slides: { url: "true" },
    video: { url: "true" },
  },
  { date: "10/15/18", title: "Tech Inclusion" },
  { date: "09/18/18", title: "Design Driven NYC", video: { url: "true" } },
  { date: "05/27/18", title: "Tech Inclusion NYC" },
  { date: "08/15/17", title: "Data Storytelling NY" },
  {
    date: "11/02/16",
    title: "Graphical Web 2016: Tiny Data Visualizations",
    slides: { url: "true" },
  },
  {
    date: "10/09/16",
    title: "OpenCamp 2016: Datum Ipsum",
    slides: { url: "true" },
  },
  { date: "07/21/16", title: "Brooklyn.JS: WebVR with aframe.js" },
  { date: "01/25/16", title: "D3.js NYC: Tiny Data visualizations" },
  {
    date: "04/18/13",
    title: "Pecha Kucha: The Creatives Must Be Crazy",
    video: { url: "true" },
  },
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

export default function Speaking({ data }) {
  return (
    <InternalPageLayout>
      <h1 className="mb-5">I like to share.</h1>
      <p>
        I am often a speaker on talks regarding products, technology, education,
        and african development.
      </p>
      <h2>Upcoming events</h2>
      <p>No events scheduled!</p>
      <h2 className="mb-3">Past events</h2>
      {speakings.map(speaking => (
        <div className="row mb-1" key={speaking.date}>
          <div className="col-3 col-md-1 text-justify">{speaking.date}</div>
          <div className="col-9 col-md-11">{speaking.title}</div>
        </div>
      ))}
    </InternalPageLayout>
  )
}
