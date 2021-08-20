import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const LogoStyle = styled.div`
  position: relative;
  z-index: 10;
  padding-top: 5px;
  @media (max-width: 767px) {
    margin-left: 0;
  }

  a {
    opacity: 1;
    font-weight: 500;
    margin-bottom: 1rem;
    font-size: 1rem;
    text-transform: uppercase;
  }

  svg {
    fill: transparent;
    stroke-width: 4px;
    stroke: currentColor;
  }

  .title {
    vertical-align: top;
  }
`

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  svg {
    fill: transparent;
    stroke-width: 4px;
    stroke: currentColor;
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
  }
`

const Triangle = () => (
  <span style={{ fontSize: "2.7rem", fontWeight: 500, marginRight: ".5rem" }}>
    &#9651;
  </span>
)

const Logo = ({ title }) => (
  <LogoLink to="/">
    <Triangle />
    <span className="title">{title}</span>
  </LogoLink>
)

export default Logo
