import React from "react"
import NavItem from "./NavItem"

import menuItems from "../../lib/menu-Items"

const PageNav = () => (
  <ul className="page-nav list">
    {menuItems.map(({ to, label }) => (
      <NavItem to={to} key={to}>
        {label}
      </NavItem>
    ))}
  </ul>
)

export default PageNav
