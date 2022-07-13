import React from "react"
import styled from "styled-components"

const ContentLayout = styled(({ className, children }) => (
  <div className="row">
    <div className={`${className} col col-sm-8 col-lg-7 offset-md-3`}>
      {children}
    </div>
  </div>
))`
  margin-top: 11rem;
  margin-bottom: 5rem;
`

const InternalPageLayout = ({ children }) => (
  <ContentLayout>{children}</ContentLayout>
)

export default InternalPageLayout
