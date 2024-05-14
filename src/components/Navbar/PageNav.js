import React from "react"
import NavItem from "./NavItem"
import PageNavList from "./PageNavList"
import menuItems from "../../lib/menu-Items"

const PageNav = () => (
  <PageNavList className="list">
    {menuItems
      .filter(item => !item.hidden)
      .map(({ to, label, className }) => (
        <NavItem to={to} key={to} className={className}>
          {label}
        </NavItem>
      ))}
  </PageNavList>
)

export default PageNav
