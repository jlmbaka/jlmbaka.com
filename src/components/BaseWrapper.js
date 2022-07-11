import React from "react"

const BaseWrapper = ({ children, className }) => (
  <div className={`container-fluid ${className}`}>{children}</div>
)

export default BaseWrapper
