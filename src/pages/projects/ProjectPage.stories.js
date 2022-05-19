import React from "react"
import Project from "./view"

export default {
  title: "Project Page",
  component: Project,
}

const Template = args => <Project {...args} />
// Empty
export const Empty = Template.bind({})
Empty.args = { data: { projects: { nodes: [] } } }