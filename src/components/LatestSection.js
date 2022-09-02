import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const Style = styled.div`
  strong {
    font-weight: 700;
  }

  .post {
    margin-top: 2rem;
    h3 {
      margin-bottom: 0;
      font-size: 1.4rem;
      font-weight: 400;
    }
  }
  .toAll {
    margin-top: 3.5rem;
    text-decoration: underline;
  }
`
const LatestSection = ({ title, items = [], to, titleTo = "All writing" }) => (
  <Style>
    <div className="col">
      <strong>{title}</strong>
      {items.map(({ to, title, date }) => (
        <div className="post" key={to}>
          <Link to={to}>
            <h3>{title}</h3>
            <div>{new Date(date).toDateString()}</div>
          </Link>
        </div>
      ))}
      <Link to={to} className="toAll">
        {titleTo} &rarr;
      </Link>
    </div>
  </Style>
)

export default LatestSection
