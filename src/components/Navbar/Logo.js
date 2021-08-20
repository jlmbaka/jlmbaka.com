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

  .triangle {
    font-size: 2rem;
    vertical-align: middle;
    margin-right: 0.5rem;
  }

  .title {
    vertical-align: top;
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
