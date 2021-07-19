import React from "react"
import ContentList from "../components/ContentList.js"

const items = [
  {
    date: "2018-01-01",
    title: "Journey to the Edge of Reason",
    author: "Stephen Budiansky",
    frontmatter: { slug: "awesome-slug" },
    id: 1,
  },
  {
    date: "2018-01-01",
    title: "Project Hail Mary",
    author: "Andy Weir",
    frontmatter: { slug: "awesome-slug" },
    id: 2,
  },
  {
    date: "2018-01-01",
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    frontmatter: { slug: "awesome-slug" },
    id: 3,
  },
  {
    date: "2018-01-01",
    title: "Creative Selection ",
    author: "Ken Kocienda",
    frontmatter: { slug: "awesome-slug" },
    id: 4,
  },
]

export default {
  title: "ContentList",
  component: ContentList,
}
const Template = args => <ContentList {...args} />
export const Default = Template.bind({})
Default.args = { year: 2021, items, baseUrl: "" }

export const WithDate = Template.bind({})
WithDate.args = { year: 2020, items, baseUrl: "", showDate: true }

export const WithoutYearGroup = Template.bind({})
WithoutYearGroup.args = {
  year: 2020,
  showYear: false,
  items,
  baseUrl: "",
  showDate: true,
}

export const WithoutSlug = Template.bind({})
WithoutSlug.args = {
  year: 2020,
  showYear: true,
  items: items.map(item => ({ ...item, frontmatter: { slug: "" } })),
  baseUrl: "",
}
