import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
// import styled, { ThemeContext } from "styled-components"
import { useDarkMode } from "../hooks/useDarkMode"

const modes = {
  light: [`Light Mode`, faSun, `dark`],
  dark: [`Dark Mode`, faMoon, `light`],
}

const ThemeToggler = (props) => {
  const [colorMode, setColorMode] = useDarkMode()
  if (colorMode && ![`light`, `dark`].includes(colorMode)) {
    console.error(`Invalid color mode: ${colorMode}`)
  }

  const [title, Icon, nextMode] = modes[colorMode]

  return (
    <FontAwesomeIcon
      icon={Icon}
      // color={theme.primary}
      size="lg"
      onClick={() => setColorMode(nextMode)}
    />
  )
}

export default ThemeToggler
