import React from "react"
import Navbar from "./Navbar"
import "../styles/global.scss"

export default function Layout({ children }) {
  return (
    <>
      <div className="layout">
        <Navbar />
        <div className="content">{children}</div>
      </div>
      <footer>
        <div className="footer__container">
          <p>© 2021 Jean-Louis Mbaka</p>
          <p>hello@jlmbaka.com</p>
          <p>Kinshasa, DRC</p>
        </div>
      </footer>
    </>
  )
}
