import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BaseWrapper from "./BaseWrapper"
import styled from "styled-components"

import { lightTheme } from "../lib/themes"

const FooterWrapper = styled(BaseWrapper)`
  min-height: 19vh;
  // background-color: ${lightTheme.primary};
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
        <div className="col offset-md-1 offset-xl-3 col-xl-6 mt-50">
          <footer>
            <div className="footer__container">
              <hr className="mt-4 mb-4" />
              <p>
                {copyright} · {location}
              </p>
            </div>
          </footer>
        </div>
      </div>
    </FooterWrapper>
  )
}

export default Footer
