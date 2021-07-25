import React, { useContext } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { ThemeContext } from "styled-components"

const SocialNavListItem = styled(({ icon, to, className }) => {
  const theme = useContext(ThemeContext)
  return (
    <li className="social-nav__item">
      <a target="_blank" href={to} rel="nofollow">
        <FontAwesomeIcon
          icon={icon}
          color={theme.primary}
          className={className}
          size="lg"
        />
      </a>
    </li>
  )
})`
  &:hover {
    svg,
    path {
      color: ${({ theme }) => theme.primary};
      opacity: 1;
    }
  }
`

const SocialNavList = () => (
  <ul className="social-nav list">
    <SocialNavListItem icon={faGithub} to="https://github.com/jlmbaka" />
    <SocialNavListItem icon={faTwitter} to="https://twitter.com/jlmbaka" />
    <SocialNavListItem
      icon={faLinkedin}
      to="https://www.linkedin.com/in/jlmbaka/"
    />
  </ul>
)

export default SocialNavList
