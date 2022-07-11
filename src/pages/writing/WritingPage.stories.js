import React from "react"
import Writing from "./view"

export default {
  title: "Writing Page",
  component: Writing,
}

const Template = args => <Writing {...args} />

// Empty
export const Empty = Template.bind({})
Empty.args = { data: { writings: { nodes: [] } } }