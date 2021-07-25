import React, { useContext } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ThemeContext } from "styled-components"

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

const SocialIcon = styled(FontAwesomeIcon)`
  &:hover {
    color: ${({ theme }) => theme.primary};
    opacity: 1;
  }
`

const SocialNavListItem = ({ icon, to }) => {
  const theme = useContext(ThemeContext)
  return (
    <ListItem>
      <a target="_blank" href={to} rel="nofollow">
        <SocialIcon icon={icon} color={theme.primary} size="lg" />
      </a>
    </ListItem>
  )
}

const SocialNavList = styled.ul`
  position: relative;
  top: -5px;
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
      <SocialNavListItem icon={icon} to={url} />
    ))}
  </SocialNavList>
)

export default SocialNav
