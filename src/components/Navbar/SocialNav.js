import React from "react"
import styled from "styled-components"
import SocialIcon from "./SocialIcon"
import socialItems from "../../lib/social-items"

const ListItem = styled.li`
  margin-left: 49px;
  transition: opacity 0.35s;
  opacity: 0.7;
  &:first-of-type {
    margin-left: 0;
  }

  @media (max-width: 1199px) {
    margin-left: 22px;
  }
`

const SocialNavListItem = ({ icon, to }) => {
  return (
    <ListItem>
      <a target="_blank" href={to} rel="nofollow">
        <SocialIcon
          icon={icon}
          // color={theme.primary}
          size="lg"
        />
      </a>
    </ListItem>
  )
}

const SocialNavList = styled.ul`
  position: relative;
  flex: 0 0 30%;
  width: 30%;
  justify-content: flex-end;
  @media (max-width: 1024px) {
    display: none;
  }
`

const SocialNav = () => (
  <SocialNavList className="list">
    {socialItems.map(({ icon, url }) => (
      <SocialNavListItem icon={icon} to={url} key={url} />
    ))}
  </SocialNavList>
)

export default SocialNav
