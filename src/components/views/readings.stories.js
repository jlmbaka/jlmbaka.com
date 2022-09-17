import React from "react"
import Readings from "./readings"

export default {
  title: "Readings Page",
  component: Readings,
}

const Template = args => <Readings {...args} />

// Empty
export const Empty = Template.bind({})
Empty.args = { data: { readings: { nodes: [] } } }
