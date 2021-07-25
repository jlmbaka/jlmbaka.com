import React from "react"
import NavItem from "./NavItem"

import PageNavList from "./PageNavList"
import menuItems from "../../lib/menu-Items"

const PageNav = () => (
  <PageNavList className="list">
    {menuItems.map(({ to, label }) => (
      <NavItem to={to} key={to}>
        {label}
      </NavItem>
    ))}
  </PageNavList>
)

export default PageNav
