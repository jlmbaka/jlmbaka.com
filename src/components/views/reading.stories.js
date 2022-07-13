import React from "react"
import Reading from "./reading"

export default {
  title: "Reading Page",
  component: Reading,
}

const Template = args => <Reading {...args} />

// Empty
export const Empty = Template.bind({})
Empty.args = { data: { readings: { nodes: [] } } }
