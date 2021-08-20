import { graphql, useStaticQuery, StaticQuery } from "gatsby"
import React, { useState } from "react"
import styled, { css } from "styled-components"
import ThemeToggler from "../ThemeToggler"
import SocialNav from "./SocialNav"
import ButtonOpenMenu from "./ButtonOpenMenu"
import PageNav from "./PageNav"
import MobileNav from "./MobileNav"
import Logo from "./Logo"

const Style = styled.div`
  .nav-2 {
    display: flex;
    align-items: center;
    position: relative;
    margin-right: 5.555555%;
    flex-basis: 72.2222%;
    flex-grow: 0;
    flex-shrink: 0;
    flex-wrap: wrap;

    @media (max-width: 767px) {
      display: none;
    }

    ul {
      margin-bottom: 0;
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
    list-style: none;
    display: flex;
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
  background: ${({ theme }) => theme.secondary};
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

export default function Navbar({ fixed, onToggleTheme, isDarkTheme }) {
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

  const hideThemeToggler = true

  return (
    <Style>
      <Header fixed={fixed}>
        <div className="container-fluid row align-items-center">
          <div className="col-9 col-md-2 offset-md-1">
            <Logo title={title} />
            <div
              className={
                hideThemeToggler ? "d-none" : "d-inline d-md-none ml-3"
              }
              style={{ marginLeft: "1rem" }}
            >
              <ThemeToggler
                isDarkTheme={isDarkTheme}
                toggleTheme={onToggleTheme}
              />
            </div>
          </div>
          <ButtonOpenMenu onClick={handleButtonOpenMenuClick} open={open} />
          <div className="col-md-8">
            <nav className="nav-2">
              <PageNav />
              <SocialNav />
            </nav>
          </div>
          <div
            className={
              hideThemeToggler ? "d-none" : "col-md-1 d-none d-md-block"
            }
          >
            <ThemeToggler
              isDarkTheme={isDarkTheme}
              toggleTheme={onToggleTheme}
            />
          </div>
        </div>
        <MobileNav open={open} />
      </Header>
    </Style>
  )
}
