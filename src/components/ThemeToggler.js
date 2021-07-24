import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import { ThemeContext } from "styled-components"

const ThemeToggler = ({ toggleTheme, isDarkTheme }) => {
  const theme = useContext(ThemeContext)
  return (
    <FontAwesomeIcon
      icon={isDarkTheme ? faMoon : faSun}
      color={theme.primary}
      size="lg"
      onClick={toggleTheme}
    />
  )
}

export default ThemeToggler
