import React from "react"
import Navbar from "./Navbar"
import "../styles/global.scss"

export default function Layout({ children }) {
  return (
    <div fluid className="container-fluid page-wrapper">
      <div className="row">
        <div className="col">
          <Navbar />
          <div className="container row col content">{children}</div>
          <footer>
            <div className="footer__container">
              <p>© 2021 Jean-Louis Mbaka</p>
              <p>hello@jlmbaka.com</p>
              <p>Kinshasa, DRC</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
