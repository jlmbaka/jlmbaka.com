import React from "react"
import styled from "styled-components"

const InternalPageLayout = styled(({ className, children }) => (
  <div className="row">
    <div className={`${className} col col-sm-8 col-lg-7 offset-md-3`}>
      {children}
    </div>
  </div>
))`
  margin-top: 11rem;
  margin-bottom: 5rem;
`

export default InternalPageLayout
