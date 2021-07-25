import React from "react"
import { Link } from "gatsby"

const Logo = ({ title }) => (
  <div className="logo">
    <Link to="/">{title}</Link>
  </div>
)

export default Logo
