import React from "react"
import { Link } from "gatsby"

const Logo = ({ title }) => (
  <i className="logo">
    <Link to="/">{title}</Link>
  </i>
)

export default Logo
