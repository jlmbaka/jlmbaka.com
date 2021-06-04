import { Link, graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import styled, { css } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import classNames from "classnames"

const Style = styled.div`
  .nav-2 {
    display: flex;
    position: relative;
    top: 4px;
    margin-right: 5.555555%;
    flex-basis: 72.2222%;
    flex-grow: 0;
    flex-shrink: 0;
    flex-wrap: wrap;

    @media (max-width: 767px) {
      display: none;
    }
  }

  .mobile-nav {
    display: none;
  }

  .logo {
    position: relative;
    z-index: 10;
    padding-top: 5px;
    @media (max-width: 767px) {
      margin-left: 0;
    }

    a {
      opacity: 1;
      font-weight: 700;
      margin-bottom: 1rem;
      font-size: 1rem;
      text-transform: uppercase;
    }
  }

  .list {
    padding-left: 0;
    list-style: none;
    display: flex;
  }

  .page-nav {
    flex: 0 0 70%;
    width: 70%;

    @media (max-width: 575px) {
      padding-left: 30px;
      padding-right: 30px;
    }

    @media (max-width: 767px) {
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      width: 100%;
    }

    @media (max-width: 767px) {
      width: 100%;
      padding: 30px 5.555555%;
      background: #ffffff;
    }

    &__link {
      opacity: 0.3;
      &:hover,
      &.active {
        opacity: 1;
      }
    }
  }

  @media (max-width: 1024px) {
    ul.page-nav {
      min-width: 100%;
      display: flex;
      justify-content: space-around;
    }
  }

  .social-nav {
    position: relative;
    top: -5px;
    flex: 0 0 30%;
    width: 30%;
    justify-content: flex-end;
    @media (max-width: 1024px) {
      display: none;
    }
    &__item {
      margin-left: 49px;
      transition: opacity 0.35s;
      opacity: 0.3;
      &:first-of-type {
        margin-left: 0;
      }
    }
    @media (max-width: 1199px) {
      &__item {
        margin-left: 22px;
      }
    }
  }
`

const Header = styled.header`
  width: 100%;
  height: 108px;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  margin-bottom: auto;
  padding-top: 56px;
  padding-bottom: 27px;
  background: white;
  line-height: 1;

  @media (max-width: 767px) {
    height: 77px;
    padding-top: 30px;
    padding-bottom: 22px;
  }

  ${props =>
    props.fixed &&
    css`
      padding-top: 35px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      transition: 0.35s;

      .logo a {
        position: relative;
        top: 0;
      }

      @media (max-width: 767px) {
        transition: none;
      }

      @media (max-width: 991px) {
        padding-top: 30px;
        padding-bottom: 22px;
      }
    `}
`

export default function Navbar({ fixed }) {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata

  const [open, setOpen] = useState(false)

  const handleButtonOpenMenuClick = event => {
    event.preventDefault()
    setOpen(!open)
  }

  return (
    <Style>
      <Header fixed={fixed}>
        <div className="container-fluid row">
          <div className="col-9 col-md-2 offset-md-1">
            <Logo title={title} />
          </div>
          <ButtonOpenMenu onClick={handleButtonOpenMenuClick} open={open} />
          <div className="col-md-9">
            <nav className="nav-2">
              <PageNav />
              <SocialNavList />
            </nav>
          </div>
        </div>
        <MobileNav open={open} />
      </Header>
    </Style>
  )
}

const ButtonOpenMenu = styled(({ onClick, className }) => (
  <button className={className} onClick={onClick}>
    <span />
  </button>
))`
  position: relative;
  z-index: 10;
  display: none;
  width: 22px;
  height: 20px;
  margin-left: auto;
  margin-right: 5.555555%;
  border: 0;
  background: none;
  transition: 0.35s;

  @media (max-width: 767px) {
    margin-right: 0;
    display: block;
    margin-right: 0;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 22px;
    height: 2px;
    background: #000000;
    transition: 0.35s;
    ${props =>
      props.open &&
      css`
        top: 9px;
        width: 20px;
        transform: rotate(45deg);
      `}
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 22px;
    height: 2px;
    background: #000000;
    transition: 0.35s;
    ${props =>
      props.open &&
      css`
        bottom: 9px;
        width: 20px;
        transform: rotate(-45deg);
      `}
  }

  span {
    position: absolute;
    top: 50%;
    right: 0;
    width: 14px;
    height: 2px;
    margin-top: -1px;
    background: #000000;
    ${props =>
      props.open &&
      css`
        display: none;
      `};
  }
`

const PageNavItem = styled(({ children, to, className }) => (
  <li className={className}>
    <Link className="page-nav__link" activeClassName="active" to={to}>
      {children}
    </Link>
  </li>
))`
  margin-right: 81px;

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
    color: #000000;
  }
`

const PageNav = () => (
  <ul className="page-nav list">
    <PageNavItem to="/">Home</PageNavItem>
    <PageNavItem to="/blog">Blog</PageNavItem>
    <PageNavItem to="/projects">Projects</PageNavItem>
    <PageNavItem to="/about">About</PageNavItem>
    <PageNavItem to="/contacts">Contacts</PageNavItem>
  </ul>
)

const MobileNav = styled(({ className }) => (
  <div className={classNames(className)}>
    <ul className="page-nav list page-nav--mobile">
      <PageNavItem to="/">Home</PageNavItem>
      <PageNavItem to="/blog">Blog</PageNavItem>
      <PageNavItem to="/projects">Projects</PageNavItem>
      <PageNavItem to="/about">About</PageNavItem>
      <PageNavItem to="/contacts">Contacts</PageNavItem>
    </ul>
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

const Logo = ({ title }) => (
  <div className="logo">
    <Link to="/">{title}</Link>
  </div>
)

const SocialNavListItem = styled(({ icon, to, className }) => (
  <li className="social-nav__item">
    <Link target="_ blank" to={to} rel="nofollow">
      <FontAwesomeIcon
        icon={icon}
        color="black"
        className={className}
        size="lg"
      />
    </Link>
  </li>
))`
  &:hover {
    svg,
    path {
      color: black;
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
