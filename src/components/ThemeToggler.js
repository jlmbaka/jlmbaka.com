import React, { useContext } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import { ThemeContext } from "../context/ThemeContext"
import styled from "styled-components"


const ToggleButton = styled(({className, onClick, icon }) => (
  <FontAwesomeIcon
    className={className}
    icon={icon}
    size="lg"
    onClick={onClick}
  />
))`
color: black;
cursor: pointer;
opacity: 0.5;
color: var(--color-primary);
transition: opacity 0.35s, border 0.35s, opacity 0.35s;
&:hover {
  color: var(--color-primary);
  opacity: 1;
}`

const ThemeToggler = () => {
  const { colorMode, setColorMode } = useContext(ThemeContext);
  if (!colorMode) return null;
  
  const modes = {
    dark: [faSun, "light"],
    light: [faMoon, "dark"],
  }

  const [ icon, nextTheme] = modes[colorMode]
  return <ToggleButton icon={icon} onClick={() => setColorMode(nextTheme)}/>
}

export default ThemeToggler
