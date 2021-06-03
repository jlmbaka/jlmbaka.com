import React from "react"
import Navbar from "./Navbar"
import { createGlobalStyle } from "styled-components"
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
  background-color: ${color.primary};
  width: 100%;
  padding: 24px 0;
  display: block;
  position: fixed;
  left: 0;
  bottom: 0;
  p {
    color: #bbb;
  }
}

.content {
  margin: 0 auto;
  max-width: 1200px;
}

.footer__container {
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: ${screen.tablet}) {
    padding: 0 15px;
  }
}

.page-wrapper {
  min-height: 73vh;
}
`

function Layout({ children }) {
  const { scrollPosition } = useScroll()
  const fixed = scrollPosition > 1

  return (
    <>
      <GlobalStyle />
      <div className="container-fluid page-wrapper">
        <div className="row">
          <div className="col">
            <Navbar fixed={fixed} />
            <div className="row col content">{children}</div>
            <footer>
              <div className="footer__container">
                <p>© 2021 Jean-Louis Mbaka</p>
                <p>hello@jlmbaka.com</p>
                <p>Kinshasa, DRC</p>
              </div>
            </footer>
          </div>
        </div>
      </div>
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
