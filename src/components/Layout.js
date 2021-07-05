import React from "react"
import Navbar from "./Navbar"
import styled, { createGlobalStyle } from "styled-components"
import { useScroll, ScrollProvider } from "../context/scroll-context.js"

const screen = {
  phone: "640px",
  tablet: "768px",
  desktop: "1024px",
}

const color = {
  primary: "#222020",
  secondary: "white",
  background: "white",
  text: "#000000",
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: "Rubik", sans-serif;
  color: ${color.primary};
}

html,
body {
  min-height: 100%;
}

p {
  margin: 16px auto;
  line-height: 1.5em;
}

a {
  display: inline-block;
  text-decoration: none;
  background-color: transparent;
  color: ${color.primary};
  opacity: 0.7;
  transition: background 0.35s, border 0.35s, opacity 0.35s;
  &:hover {
    opacity: 1;
    color: ${color.primary};
  }
}

footer {
  width: 100%;
  padding: 24px 0;
  display: block;
  p {
    color: #bbb;
  }
}

.footer__container {
  @media (max-width: ${screen.tablet}) {
    padding: 0 15px;
  }
}
`

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
  const { scrollPosition } = useScroll()
  const fixed = scrollPosition > 1

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
  return (
    <ScrollProvider>
      <Layout>{children}</Layout>
    </ScrollProvider>
  )
}
