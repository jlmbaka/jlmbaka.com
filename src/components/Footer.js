import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BaseWrapper from "./BaseWrapper"
import styled from "styled-components"

import { lightTheme } from "../lib/themes"

const FooterWrapper = styled(BaseWrapper)`
  min-height: 19vh;
  background-color: ${lightTheme.primary};
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query Footer {
      site {
        siteMetadata {
          copyright
          location
        }
      }
    }
  `)

  const { copyright, location } = data.site.siteMetadata
  return (
    <FooterWrapper>
      <div className="row">
        <div className="col offset-md-1">
          <footer>
            <div className="footer__container">
              <p>{copyright}</p>
              <p>{location}</p>
            </div>
          </footer>
        </div>
      </div>
    </FooterWrapper>
  )
}

export default Footer
