import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const LogoStyle = styled.span`
  position: relative;
  z-index: 10;
  padding-top: 5px;
  @media (max-width: 767px) {
    margin-left: 0;
  }

  a {
    opacity: 1;
    font-weight: 700;
    margin-bottom: 1rem;
    font-size: 1rem;
    text-transform: uppercase;
  }

  .triangle {
    font-size: 2rem;
    vertical-align: sub;
    margin-right: 0.5rem;
  }

  .title {
  }
`

const Logo = ({ title }) => (
  <LogoStyle>
    <Link to="/">
      <span className="triangle">&#9651;</span>
      <span className="title">{title}</span>
    </Link>
  </LogoStyle>
)

export default Logo
