import React from "react"
import Navbar from "./Navbar"
import styled from "styled-components"
import { useScroll, ScrollProvider } from "../context/scroll-context.js"
import GlobalStyle from "./GlobalStyle.js"
import { color } from "../lib/utils"

const BaseWrapper = ({ children, className }) => (
  <div className={`container-fluid ${className}`}>{children}</div>
)

const MainContentWrapper = styled(BaseWrapper)`
  min-height: 81vh;
`

const FooterWrapper = styled(BaseWrapper)`
  min-height: 19vh;
  background-color: ${color.primary};
`

const Footer = () => (
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
)

function Layout({ children }) {
  let fixed = false
  const scroll = useScroll()
  fixed = scroll?.scrollPosition > 1
  return (
    <>
      <GlobalStyle />
      <MainContentWrapper>
        <div className="row">
          <div className="col">
            <Navbar fixed={fixed} />
          </div>
        </div>
        <div className="row">
          <div className="col">{children}</div>
        </div>
      </MainContentWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </>
  )
}

export default function LayoutWithScrollProvider({ children }) {
  const isSSR = typeof window === "undefined"
  if (!isSSR) {
    return (
      <ScrollProvider>
        <Layout>{children}</Layout>
      </ScrollProvider>
    )
  }
  return <Layout>{children}</Layout>
}
