import React from "react"
import Button from "../components/Button.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

//👇 This default export determines where your story goes in the story list
export default {
  title: "Button",
  component: Button,
}

//👇 We create a “template” of how args map to rendering
const Template = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  /*👇 The args you need here will depend on your component */
  children: "Contact Me",
}

export const WithFontAwesomeIcon = Template.bind({})
WithFontAwesomeIcon.args = {
  /*👇 The args you need here will depend on your component */
  children: (
    <>
      Call Me!
      <FontAwesomeIcon icon={faChevronRight} color="white" />
    </>
  ),
}
