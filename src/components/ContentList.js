import styled from "styled-components"
import React from "react"
import { Link } from "gatsby"

const ResourcesLink = styled(Link)`
  text-decoration: underline;
`

const ItemDate = styled.span`
  color: #222020;
  opacity: 0.7;
`

const ContentList = ({ year, items, baseUrl, showDate = false }) => (
  <div className="row mb-4">
    <div className="col-12 col-md-2">
      <h2>{year}</h2>
    </div>
    <div className="col-12 col-md-10">
      {items.map(item => (
        <div class="row">
          {showDate && (
            <div className="col-5 col-sm-2 text-justify">
              <ItemDate>{item.date}</ItemDate>
            </div>
          )}
          <div className="col">
            <div className="mb-1" key={item.id}>
              <ResourcesLink to={`/${baseUrl}/${item.frontmatter.slug}`}>
                {item.title}
              </ResourcesLink>
              &nbsp;by&nbsp;
              <span>{item.author}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default ContentList
