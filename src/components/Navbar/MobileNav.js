import React from "react"
import styled from "styled-components"
import classNames from "classnames"

import PageNavList from "./PageNavList"

import menuItems from "../../lib/menu-Items"
import NavItem from "./NavItem"

const MobileNav = styled(({ className }) => (
  <div className={classNames(className)}>
    <PageNavList className="list page-nav--mobile">
      {menuItems.map(({ to, label }) => (
        <NavItem to={to} key={to}>
          {label}
        </NavItem>
      ))}
    </PageNavList>
  </div>
))`
  display: none;
  @media (max-width: 767px) {
    position: fixed;
    top: ${props => (props.open ? "77px" : "-800px")};
    left: 0;
    z-index: 9;
    display: block;
    width: 100%;
    overflow: ${props => (props.open ? "visible" : "hidden")};
    transition: 0.6s;
    ${props => props.open && "height: auto"};
  }
  .page-nav--mobile {
    flex-wrap: wrap;
  }
`

export default MobileNav
