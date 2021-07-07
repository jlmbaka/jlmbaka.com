import React from "react"
import Layout from "./Layout"
import styled from "styled-components"

const ContentLayout = styled(({ className, children }) => (
  <div className="row">
    <div className={`${className} col offset-md-3`}>{children}</div>
  </div>
))`
  margin-top: 11rem;
  margin-bottom: 5rem;
`

export default ({ children, ...rest }) => (
  <Layout {...rest}>
    <ContentLayout>{children}</ContentLayout>
  </Layout>
)
