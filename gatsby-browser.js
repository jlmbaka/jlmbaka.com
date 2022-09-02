import "bootstrap/dist/css/bootstrap.min.css"
import "katex/dist/katex.min.css"
import React from "react"
import Layout from "./src/components/Layout"
import { ThemeProvider } from "./src/context/ThemeContext"
import { ScrollProvider } from "./src/context/scroll-context"

export const wrapRootElement = ({ element }) => {
  return (
    <ScrollProvider>
      <ThemeProvider>{element}</ThemeProvider>
    </ScrollProvider>
  )
}

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
