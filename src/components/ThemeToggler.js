import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import styled, { ThemeContext } from "styled-components"

const ThemeToggler = styled(({ toggleTheme, isDarkTheme, className }) => {
  const theme = useContext(ThemeContext)
  return (
    <FontAwesomeIcon
      icon={isDarkTheme ? faSun : faMoon}
      color={theme.primary}
      size="lg"
      onClick={toggleTheme}
      className={className}
    />
  )
})`
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.35s, border 0.35s, opacity 0.35s;
  &:hover {
    color: ${({ theme }) => theme.primary};
    opacity: 1;
  }
`

export default ThemeToggler
