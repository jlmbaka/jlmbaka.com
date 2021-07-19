import React from "react"
import YearGroup from "../components/YearGroup.js"

const items = [
  {
    title: "Journey to the Edge of Reason",
    author: "Stephen Budiansky",
    frontmatter: { slug: "" },
    id: "dfqdf",
  },
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    frontmatter: { slug: "" },
    id: "dqfdq",
  },
  {
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    frontmatter: { slug: "" },
    id: "fqdfdq",
  },
  {
    title: "Creative Selection ",
    author: "Ken Kocienda",
    frontmatter: { slug: "" },
    id: "dqfqdq",
  },
]

export default {
  title: "YearGroup",
  component: YearGroup,
}
const Template = args => <YearGroup {...args} />
export const Default = Template.bind({})
Default.args = { year: 2021, items, baseUrl: "" }
