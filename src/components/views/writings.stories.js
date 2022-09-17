import React from "react"
import Writings from "./writings"

export default {
  title: "Writings Page",
  component: Writings,
}

const Template = args => <Writings {...args} />

// Empty
export const Empty = Template.bind({})
Empty.args = { data: { writings: { nodes: [] } } }
