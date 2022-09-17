import React from "react"
import Projects from "./projects"

export default {
  title: "Projects Page",
  component: Projects,
}

const Template = args => <Projects {...args} />
// Empty
export const Empty = Template.bind({})
Empty.args = { data: { projects: { nodes: [] } } }
