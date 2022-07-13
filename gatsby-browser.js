import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import Layout from "./src/components/Layout"

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
