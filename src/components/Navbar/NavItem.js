import styled from "styled-components"
import { Link } from "gatsby"
import React from "react"

const NavItem = styled(({ children, to, className }) => (
  <li className={className}>
    <Link className="page-nav__link" activeClassName="active" to={to}>
      {children}
    </Link>
  </li>
))`
  margin-right: 3rem;

  @media (max-width: 1199px) {
    margin-right: 60px;
  }

  @media (max-width: 991px) {
    margin-right: 40px;
  }

  @media (max-width: 961px) {
    margin-right: 30px;
  }

  @media (max-width: 907px) {
    margin-right: 20px;
  }

  @media (max-width: 806px) {
    margin-right: 10px;
  }

  @media (max-width: 767px) {
    display: block;
    width: 100%;
    margin-right: 0;
    margin-bottom: 7px;
    font-size: 24px;
    line-height: 40px;
    color: var(--color-primary);
  }
`

export default NavItem
