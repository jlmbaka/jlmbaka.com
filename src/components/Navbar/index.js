import { graphql, useStaticQuery } from "gatsby"
import React, { useState, useRef, useEffect } from "react"
import styled, { css } from "styled-components"
import ThemeToggler from "../ThemeToggler"
import SocialNav from "./SocialNav"
import ButtonOpenMenu from "./ButtonOpenMenu"
import PageNav from "./PageNav"
import MobileNav from "./MobileNav"
import Logo from "./Logo"
import { useLocation } from "@reach/router"
import { rgba, cssVar } from "polished"

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
  background: var(--color-secondary);
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
      border-bottom: ${rgba(cssVar("--color-gray", "#000000"), 0.15)} 1px solid;
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

const usePrevious = value => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

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

  const location = useLocation()
  const prevLocation = usePrevious(location)
  useEffect(() => {
    if (location !== prevLocation) {
      setOpen(false)
    }
  }, [location, prevLocation, setOpen])

  const handleButtonOpenMenuClick = event => {
    event.preventDefault()
    setOpen(!open)
  }

  return (
    <Style>
      <Header fixed={fixed}>
        <div className="container-fluid row align-items-center">
          <div className="col-9 col-md-2 offset-md-1 p-1">
            <div style={{ display: "flex", alignItems: "center" }}>
              <Logo title={title} />
              <div
                className="d-inline d-md-none ml-3 text-center"
                style={{ marginLeft: "1rem" }}
              >
                <ThemeToggler />
              </div>
            </div>
          </div>
          <ButtonOpenMenu onClick={handleButtonOpenMenuClick} open={open} />
          <div className="col-md-8">
            <nav className="nav-2">
              <PageNav />
              <SocialNav />
            </nav>
          </div>
          <div className={"col-md-1 d-none d-md-block"}>
            <ThemeToggler />
          </div>
        </div>
        <MobileNav open={open} />
      </Header>
    </Style>
  )
}
