import React from "react"
import BaseWrapper from "./BaseWrapper"
import styled from "styled-components"

import { color } from "../lib/utils"

const FooterWrapper = styled(BaseWrapper)`
  min-height: 19vh;
  background-color: ${({ theme }) => theme.primary};
`

const Footer = () => (
  <FooterWrapper>
    <div className="row">
      <div className="col offset-md-1">
        <footer>
          <div className="footer__container">
            <p>© 2021 Jean-Louis Mbaka</p>
            <p>Kinshasa, DRC</p>
          </div>
        </footer>
      </div>
    </div>
  </FooterWrapper>
)

export default Footer
