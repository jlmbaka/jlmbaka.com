import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  opacity: 1;
  svg {
    fill: LightSkyBlue;
    stroke-width: 4px;
    stroke: LightSkyBlue;
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
  }

  .title {
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }
`

const Circle = () => (
  <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="25" r="20"></circle>
  </svg>
)

const Logo = ({ title }) => (
  <LogoLink to="/">
    <Circle />
    <span className="title">{title}</span>
  </LogoLink>
)

export default Logo
