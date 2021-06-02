import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

export default function Navbar() {
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

  return (
    <div className="header-wrapper">
      <header>
        <div className="header">
          <div className="row">
            <div className="col-9 col-md-2 offset-md-1">
              <Logo title={title} />
            </div>
            <ButtonOpenMenu />
            <div className="col-md-9">
              <nav className="nav-2">
                <PageNav />
                <SocialNavList />
              </nav>
            </div>
          </div>
        </div>
        <MobileNav />
      </header>
    </div>
  )
}

const ButtonOpenMenu = () => (
  <button className="btn-open-menu">
    <span></span>
  </button>
)

const PageNav = () => (
  <ul className="page-nav list">
    <li className="page-nav__item">
      <Link className="page-nav__link" to="/">
        Home
      </Link>
    </li>
    <li className="page-nav__item">
      <Link className="page-nav__link" to="/blog">
        Blog
      </Link>
    </li>
    <li className="page-nav__item">
      <Link className="page-nav__link" to="/projets">
        Projets
      </Link>
    </li>
    <li className="page-nav__item">
      <Link className="page-nav__link" to="/about">
        About
      </Link>
    </li>
    <li className="page-nav__item">
      <Link className="page-nav__link" to="/contacts">
        Contacts
      </Link>
    </li>
  </ul>
)

const Logo = ({ title }) => (
  <div className="logo">
    <Link to="/">
      <span>{title}</span>
    </Link>
  </div>
)

const MobileNav = () => (
  <div className="mobile-nav">
    <ul className="page-nav list">
      <li className="page-nav__item">
        <Link className="page-nav__link" to="/">
          Home
        </Link>
      </li>
      <li className="page-nav__item">
        <Link className="page-nav__link" to="/blog">
          Blog
        </Link>
      </li>
      <li className="page-nav__item current">
        <Link className="page-nav__link" to="/projets">
          Projets
        </Link>
      </li>
      <li className="page-nav__item">
        <Link className="page-nav__link" to="/about">
          About
        </Link>
      </li>
      <li className="page-nav__item">
        <Link className="page-nav__link" to="/contacts">
          Contacts
        </Link>
      </li>
      <li className="page-nav__item">
        <Link className="page-nav__link" to="/contacts">
          Contacts
        </Link>
      </li>
    </ul>
  </div>
)

const SocialNavList = () => (
  <ul className="social-nav list">
    <li className="social-nav__item">
      <Link target="_ blank" to="https://twitter.com/jlmbaka" rel="nofollow">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTE2LjMzMy4wMDRWMGgxLjE0NmwuNDIuMDg0Yy4yOC4wNTYuNTMzLjEyNy43Ni4yMTZhNS4zNSA1LjM1IDAgMCAxIC42NjEuMzExYy4yMTMuMTE4LjQwNi4yMzguNTguMzZhMy41OSAzLjU5IDAgMCAxIC40NjMuMzg3Yy4xMzYuMTM4LjM0Ny4xNzIuNjMzLjEwN2E4LjY3IDguNjcgMCAwIDAgLjkyNi0uMjc4bC45OC0uNC41OS0uMjgyLjExLS4wNjcuMDAzLS4wMDYuMDktLjA0NC4wMDMtLjAwNy4wMTMtLjAxLjAwNC0uMDA3LjAyMi0uMDA3LjAyMi0uMDA0LS4wMDQuMDMzLS4wMDcuMDMzLS4wMjIuMDY3LS4wMjIuMDQ0LS4wMS4wMzNjLS4wMS4wMy0uMDE3LjA2LS4wMjIuMDktLjAwNy4wMzctLjA3Ny4xODQtLjIxLjQ0M3MtLjI5OC41MjItLjQ5Ni43OS0uMzc3LjQ2Ny0uNTMzLjYwM2wtLjMxNi4yOWEuOTUuOTUgMCAwIDEtLjE4Ny4xNTZsLS4xMS4wNzItLjA0NC4wMjItLjAwMy4wMDctLjAxMy4wMS0uMDA0LjAwNy0uMDQ0LjAyMi0uMDA0LjAwNy0uMDEzLjAxLS4wMS4wMTMtLjAxMy4wMS0uMDA0LjAwN2guMTFsLjYxNy0uMTMzYy40MS0uMDkuODA0LS4xOTYgMS4xOC0uMzIybC42OTYtLjIzMy4wMjItLjAxLjAyLS4wMS4wNDQtLjAyMi4wNDQtLjAwNi4wNDMtLjAwNHYuMDQ0bC0uMDEuMDA0LS4wMS4wMDctLjAwNC4wMDctLjAxMy4wMS0uMDEuMDEzLS4wMTMuMDEtLjAwNC4wMDctLjAwMy4wMDctLjAwNy4wMDQtLjAyMi4wNDQtLjAwNy4wMDMtLjI4LjM3OC0uMjk4LjM3OGMtLjAxNC4wMDQtLjAzNi4wMjctLjA2Mi4wNjdzLS4xOC4yMDYtLjQ2Ny40OTRsLS44NDIuNzdjLS4yNzYuMjI3LS40MTYuNTA2LS40Mi44MzZsLS4wNSAxLjExM2MtLjAzLjQxNC0uMDg0Ljg2Mi0uMTY3IDEuMzQ0cy0uMjA0IDEuMDIzLS4zNzMgMS42My0uMzc1IDEuMTk4LS42MTggMS43NzctLjQ5NiAxLjA5NC0uNzYgMS41NTNhMTQuOTggMTQuOTggMCAwIDEtMS40IDIuMDY0IDEzLjExIDEzLjExIDAgMCAxLS44NjQuOTVsLS41NzIuNTc4YTEzLjk2IDEzLjk2IDAgMCAxLS40MzMuMzYzbC0uODE0LjYzNi0uNzk4LjUyNi0uODc4LjQ4MmExMC40IDEwLjQgMCAwIDEtMS4xMDcuNTA2bC0xLjI1Ni40MzNhMTEuNDYgMTEuNDYgMCAwIDEtMS4yNzkuMzExbC0xLjQuMTktLjc4Mi4wNzdWMjBINi45ODd2LS4wMWwtLjE4Ny0uMDEtLjMxLS4wMjItLjkxNC0uMTIyLTEuMjQ0LS4yMjItMS4zNDYtLjQyMmExMy4wMyAxMy4wMyAwIDAgMS0xLjUyOC0uNjI4bC0uNzkzLS40LS4zNTctLjIwMy0uMi0uMTIyLS4wMDQtLjAwNy0uMDEzLS4wMS0uMDA0LS4wMDctLjA0NC0uMDIyLS4wMDMtLjAwNy0uMDEzLS4wMS0uMDEtLjAxMy0uMDA3LS4wMDRIMHYtLjA0NGwuMDIyLjAwNC4wMjIuMDA3LjEuMDFjLjA2Ny4wMDguMjQ2LjAyLjU0LjAzMyAxLjA3LjA1IDIuMTQzLS4wNzMgMy4xNzQtLjM2Ny40NDMtLjExNi44NzYtLjI2NiAxLjI5Ni0uNDQ4bC44MzgtLjM5Yy4yNi0uMTQzLjUxLS4zLjc1My0uNDdsLjUwOC0uMzQ0LjAwNC0uMDA3LjAwNy0uMDA0LjAwNi0uMDA0LjAxLS4wMTMuMDEzLS4wMS4wMDQtLjAwNy4wMjItLjAwNy4wMjItLjAwNC4wMDQtLjAyMi4wMDctLjAyMi4wMDctLjAwNC4wMDQtLjAwNy0uMTc3LS4wMS0uMzQtLjAyMmEzLjI5IDMuMjkgMCAwIDEtLjUxOS0uMSA0Ljk1IDQuOTUgMCAwIDEtLjc2LS4yNjcgNS44NSA1Ljg1IDAgMCAxLS43OTMtLjQyMWMtLjE5OC0uMTE4LS4zODQtLjI1NC0uNTU4LS40MDZsLS40NC0uNDUzYTQuNDkgNC40OSAwIDAgMS0uNDY3LS42MDYgNS40NiA1LjQ2IDAgMCAxLS4zOC0uNzE4bC0uMTgyLS40MDMtLjAyMi0uMDY3LS4wMDctLjAyMi0uMDA0LS4wMjIuMDMzLjAwNC4wMzMuMDA3LjI0Mi4wMzNjLjE2LjAyMi40MTQuMDMuNzYuMDIybC43MTctLjA0NC4yNDItLjA0NC4wNDQtLjAxLjA1Ni0uMDEuMDU0LS4wMS4wMDQtLjAwNy4wMTMtLjAxLjAwNC0uMDA3LS4xMzMtLjAzMy0uMDQzLS4wMS0uMDQ0LS4wMS0uMTUzLS4wNDQtLjU5Ni0uMjQ0YTQuNTQgNC41NCAwIDAgMS0uNzcxLS40MTFjLS4xOTItLjEzMy0uMzc0LS4yOC0uNTQ3LS40MzctLjIwMi0uMTkzLS4zOTItLjQtLjU2Ny0uNjE3LS4yMTctLjI3LS40MDItLjU2NS0uNTUtLjg3OC0uMTUtLjMwNS0uMjczLS42MjUtLjM2My0uOTUzLS4wOC0uMzAyLS4xMzQtLjYxLS4xNi0uOTIybC0uMDQtLjQ2Ni4wMjIuMDA0LjAyMi4wMDcuMDY3LjAzMy4wMi4wMS4zNDIuMTU2Yy4yMjguMTAzLjUxLjE5Mi44NDguMjY3bC42MDcuMTIyLjEuMDFoLjE5OGwtLjAwNC0uMDA4LS4wMTMtLjAxLS4wMS0uMDEzLS4wMTMtLjAxLS4wMDQtLjAwNy0uMDQ0LS4wMjItLjAwNC0uMDA3LS4wMTMtLjAxLS4wMDQtLjAwNy0uMDQ0LS4wMjItLjAwMy0uMDA3LS4xOS0uMTRhMi45IDIuOSAwIDAgMS0uMzgtLjM2MmwtLjM5Ny0uNDY3YTMuNiAzLjYgMCAwIDEtLjM1Mi0uNTIxYy0uMTIzLS4yMjgtLjIzMi0uNDY0LS4zMjctLjcwNi0uMjE4LS41NDYtLjM0LTEuMTI3LS4zNTctMS43MTQtLjAwOC0uMjggMC0uNTIyLjAyMi0uNzJzLjA2Ni0uNDI2LjEzLS42NzhhNS4zIDUuMyAwIDAgMSAuMjg3LS43OThsLjE4OC0uNDIyTDEuNjY0LjkgMS42Ny45MDZsLjAxLS4wMTMuMDA3LS4wMDMuMDA3LjAwNC4wMDQuMDA3LjAwMy4wMDcuMDEzLjAxLjAxLjAxMy4wMDcuMDA0LjAyMi4wNDQuMDA3LjAwNC4wMDQuMDA3LjI5OC4zMzMuNzA2Ljc0My40NS40MjdjLjAzLjAxLjA2Ny4wNDQuMTEuMXMuMi4xODcuNDQuMzkzYTEzLjQ5IDEzLjQ5IDAgMCAwIC45ODEuNzIyYy40MDQuMjczLjg1Mi41NDMgMS4zNDQuODFhMTMuMDkgMTMuMDkgMCAwIDAgMS41ODcuNzIybDEuMTkuNDIyYy4yMjguMDY3LjYxNy4xNSAxLjE2OC4yNTZsMS4yNDQuMi41NzQuMDUuMTU0LjAwNC0uMDA0LS4wMzMtLjAwNy0uMDMzLS4wNDQtLjI3OGE1LjMxIDUuMzEgMCAwIDEtLjA0NC0uNzc3IDUuMDcgNS4wNyAwIDAgMSAuMDc4LS45MjJjLjA1LS4yOC4xMjgtLjU2Ni4yMy0uODUzcy4yMDMtLjUyLjMwMi0uNjk2YTYuODkgNi44OSAwIDAgMSAuMzkyLS41OTJjLjE2LS4yMjIuMzctLjQ1LjYyOC0uNjlzLjU1LS40NDcuODgyLS42MzIuNjM2LS4zMjYuOTE0LS40MjIuNTE0LS4xNTguNzA2LS4xOWwuMjg3LS4wNVYuMDA0eiIgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"
          alt="Open Exyte's Twitter in new tab"
        />
      </Link>
    </li>
    <li className="social-nav__item">
      <Link target="_ blank" to="https://github.com/jlmbaka" rel="nofollow">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4NCiAgICA8cGF0aCBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05Ljk5NyAwQzQuNDc3IDAgMCA0LjU5IDAgMTAuMjUyYzAgNC41MyAyLjg2NSA4LjM3MyA2LjgzNyA5LjczLjUuMDk0LjY4My0uMjIzLjY4My0uNDk0IDAtLjI0NS0uMDEtMS4wNTItLjAxNC0xLjkwOS0yLjc4MS42Mi0zLjM2OC0xLjIxLTMuMzY4LTEuMjEtLjQ1NS0xLjE4NS0xLjExLTEuNS0xLjExLTEuNS0uOTA3LS42MzYuMDY4LS42MjMuMDY4LS42MjMgMS4wMDQuMDcyIDEuNTMzIDEuMDU3IDEuNTMzIDEuMDU3Ljg5MiAxLjU2NyAyLjMzOSAxLjExNCAyLjkxLjg1Mi4wODktLjY2My4zNDgtMS4xMTUuNjM0LTEuMzcxLTIuMjItLjI2LTQuNTU1LTEuMTM4LTQuNTU1LTUuMDY3IDAtMS4xMi4zOS0yLjAzNCAxLjAzLTIuNzUyLS4xMDQtLjI1OC0uNDQ2LTEuMy4wOTctMi43MTMgMCAwIC44NC0uMjc2IDIuNzUgMS4wNWE5LjM1NCA5LjM1NCAwIDAgMSAyLjUwMi0uMzQ0Yy44NS4wMDQgMS43MDYuMTE4IDIuNTA1LjM0NSAxLjkwOC0xLjMyNyAyLjc0Ni0xLjA1MSAyLjc0Ni0xLjA1MS41NDQgMS40MTIuMjAyIDIuNDU1LjA5OCAyLjcxMy42NDEuNzE4IDEuMDMgMS42MzMgMS4wMyAyLjc1MiAwIDMuOTM4LTIuMzQgNC44MDUtNC41NjYgNS4wNTkuMzU5LjMxOC42NzguOTQyLjY3OCAxLjg5OCAwIDEuMzcyLS4wMTEgMi40NzYtLjAxMSAyLjgxNCAwIC4yNzMuMTguNTkyLjY4Ny40OTIgMy45Ny0xLjM1NyA2LjgzLTUuMiA2LjgzLTkuNzI4QzE5Ljk5NSA0LjU5IDE1LjUyIDAgOS45OTggMCIvPg0KPC9zdmc+DQo="
          alt="Open Exyte's Github in new tab"
        />
      </Link>
    </li>
  </ul>
)
