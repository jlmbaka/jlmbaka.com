import React from "react"
import Navbar from "./Navbar"
import styled from "styled-components"
import { useScroll } from "../context/scroll-context.js"
import GlobalStyle from "./GlobalStyle.js"

import Footer from "./Footer"
import BaseWrapper from "./BaseWrapper"

const MainContentWrapper = styled(BaseWrapper)`
  min-height: 81vh;
`

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
      <Footer />
    </>
  )
}

export default function LayoutWithScrollProvider({ children }) {
  /*   const isSSR = typeof window === "undefined"
  if (!isSSR) {
    return (
      <ScrollProvider>
        <Layout>{children}</Layout>
      </ScrollProvider>
    )
  } */
  return <Layout>{children}</Layout>
}
