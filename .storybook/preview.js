import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import GlobalStyle from "../src/components/GlobalStyle"

// Global decorator to apply the styles to all stories
export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
