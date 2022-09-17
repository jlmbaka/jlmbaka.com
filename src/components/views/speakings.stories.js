import React from "react"
import Speakings from "./speakings"

export default {
  title: "Speakings Page",
  component: Speakings,
}

const speakings = [
  {
    frontmatter: {
      slug: "",
      url: "true",
      slides: "",
      video: "",
      date: "2022-01-01",
      title: "Journey to the Edge of Reason",
    },
    id: 1,
  },
  {
    frontmatter: {
      slug: "",
      slides: "",
      video: "",
      date: "2022-01-01",
      title: "Project Hail Mary",
    },
    id: 2,
  },
  {
    frontmatter: {
      slug: "",
      date: "2022-01-01",
      title: "Guns, Germs, and Steel",
    },
    id: 3,
  },
  {
    frontmatter: {
      slug: "",
      url: "true",
      video: "",
      date: "2022-01-01",
      title: "Creative Selection ",
    },
    id: 4,
  },
  //
  {
    frontmatter: {
      slug: "",
      date: "2018-01-01",
      title: "Journey to the Edge of Reason",
    },
    id: 1,
  },
  {
    frontmatter: { slug: "", date: "2018-01-01", title: "Project Hail Mary" },
    id: 2,
  },
  {
    frontmatter: {
      slug: "",
      date: "2018-01-01",
      title: "Guns, Germs, and Steel",
    },
    id: 3,
  },
  {
    frontmatter: { slug: "", date: "2018-01-01", title: "Creative Selection " },
    id: 4,
  },
  //
  {
    frontmatter: {
      slug: "",
      date: "2019-01-01",
      title: "Journey to the Edge of Reason",
    },
    id: 1,
  },
  {
    frontmatter: { slug: "", date: "2019-01-01", title: "Project Hail Mary" },
    id: 2,
  },
  {
    frontmatter: {
      slug: "",
      date: "2019-01-01",
      title: "Guns, Germs, and Steel",
    },
    id: 3,
  },
  {
    frontmatter: { slug: "", date: "2019-01-01", title: "Creative Selection " },
    id: 4,
  },
  //
  {
    frontmatter: {
      slug: "",
      date: "2020-01-01",
      title: "Journey to the Edge of Reason",
    },
    id: 1,
  },
  {
    frontmatter: { slug: "", date: "2020-01-01", title: "Project Hail Mary" },
    id: 2,
  },
  {
    frontmatter: {
      slug: "",
      date: "2020-01-01",
      title: "Guns, Germs, and Steel",
    },
    id: 3,
  },
  {
    frontmatter: { slug: "", date: "2020-01-01", title: "Creative Selection " },
    id: 4,
  },
  //
  {
    frontmatter: {
      slug: "",
      date: "2021-01-01",
      title: "Journey to the Edge of Reason",
    },
    id: 1,
  },
  {
    frontmatter: { slug: "", date: "2021-01-01", title: "Project Hail Mary" },
    id: 2,
  },
  {
    frontmatter: {
      slug: "",
      date: "2021-01-01",
      title: "Guns, Germs, and Steel",
    },
    id: 3,
  },
  {
    frontmatter: { slug: "", date: "2021-01-01", title: "Creative Selection " },
    id: 4,
  },
  //
  {
    frontmatter: {
      slug: "",
      date: "2016-01-01",
      title: "Journey to the Edge of Reason",
    },
    id: 1,
  },
  {
    frontmatter: { slug: "", date: "2016-01-01", title: "Project Hail Mary" },
    id: 2,
  },
  {
    frontmatter: {
      slug: "",
      date: "2016-01-01",
      title: "Guns, Germs, and Steel",
    },
    id: 3,
  },
  {
    frontmatter: { slug: "", date: "2016-01-01", title: "Creative Selection " },
    id: 4,
  },
  //
]

const Template = args => <Speakings {...args} />
// Default
export const Default = Template.bind({})
Default.args = { data: { speakings: { nodes: speakings } } }

// Empty
export const Empty = Template.bind({})
Empty.args = { data: { speakings: { nodes: [] } } }
