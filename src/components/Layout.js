import React, { useState } from "react"
import Navbar from "./Navbar"
import styled, { ThemeProvider } from "styled-components"
import { useScroll, ScrollProvider } from "../context/scroll-context.js"
import GlobalStyle from "./GlobalStyle.js"
import { darkTheme, lightTheme } from "../lib/themes"

import Footer from "./Footer"
import BaseWrapper from "./BaseWrapper"

const MainContentWrapper = styled(BaseWrapper)`
  min-height: 81vh;
`

function Layout({ children }) {
  const [theme, setTheme] = useState("light")
  const isDarkTheme = theme === "dark"
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark")

  let fixed = false
  const scroll = useScroll()
  fixed = scroll?.scrollPosition > 1

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <MainContentWrapper>
        <div className="row">
          <div className="col">
            <Navbar
              fixed={fixed}
              onToggleTheme={toggleTheme}
              isDarkTheme={isDarkTheme}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">{children}</div>
        </div>
      </MainContentWrapper>
      <Footer />
    </ThemeProvider>
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
