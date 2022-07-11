import React from "react"
import Reading from "./view"

export default {
  title: "Reading Page",
  component: Reading,
}

const Template = args => <Reading {...args} />

// Empty
export const Empty = Template.bind({})
Empty.args = { data: { readings: { nodes: [] } } }