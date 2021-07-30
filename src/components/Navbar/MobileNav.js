import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import classNames from "classnames"

import PageNavList from "./PageNavList"
import menuItems from "../../lib/menu-Items"
import NavItem from "./NavItem"
import socialItems from "../../lib/social-items"
import SocialIcon from "./SocialIcon"

const MobileSocialContainer = styled.div`
  width: 100%;
  padding-top: 1rem;
  margin-top: 0.5rem;
  border-top: ${({ theme }) => theme.gray} 1px solid;
`

const MobileNav = styled(({ className }) => {
  const theme = useContext(ThemeContext)
  return (
    <div className={classNames(className)}>
      <PageNavList className="list page-nav--mobile">
        <>
          {menuItems.map(({ to, label }) => (
            <NavItem to={to} key={to}>
              {label}
            </NavItem>
          ))}
          <MobileSocialContainer className="d-flex justify-content-between">
            {socialItems.map(({ url, icon }) => (
              <a target="_blank" href={url} rel="nofollow" key={url}>
                <SocialIcon icon={icon} color={theme.primary} size="lg" />
              </a>
            ))}
          </MobileSocialContainer>
        </>
      </PageNavList>
    </div>
  )
})`
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
