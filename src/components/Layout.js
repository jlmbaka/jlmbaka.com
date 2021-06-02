import React from "react"
import Navbar from "./Navbar"
import "../styles/global.scss"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function Layout({ children }) {
  return (
    <Container fluid>
      <Row>
        <Col>
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
        </Col>
      </Row>
    </Container>
  )
}
