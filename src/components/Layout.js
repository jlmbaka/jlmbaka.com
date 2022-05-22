import React from "react"
import Navbar from "./Navbar"
import styled, { ThemeProvider } from "styled-components"
import { useScroll, ScrollProvider } from "../context/scroll-context.js"
import GlobalStyle from "./GlobalStyle.js"
import { darkTheme, lightTheme } from "../lib/themes"
import { useDarkMode } from "../hooks/useDarkMode"

import Footer from "./Footer"
import BaseWrapper from "./BaseWrapper"

const MainContentWrapper = styled(BaseWrapper)`
  min-height: 81vh;
`

function Layout({ children }) {
  const [theme, themeToggler] = useDarkMode()
  // const themeMode = theme === "light" ? lightTheme : darkTheme
  const themeMode = lightTheme
  const isDarkTheme = theme === "dark"

  let fixed = false
  const scroll = useScroll()
  fixed = scroll?.scrollPosition > 1

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <MainContentWrapper>
        <div className="row">
          <div className="col">
            <Navbar
              fixed={fixed}
              onToggleTheme={themeToggler}
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
