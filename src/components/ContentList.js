import styled from "styled-components"
import React from "react"
import { Link } from "gatsby"

const ResourceLink = styled(Link)`
  text-decoration: underline;
`

const TextItem = styled.span`
  color: #222020;
  opacity: 0.7;
`

const Resource = ({ to, children }) => {
  if (to) {
    return <ResourceLink to={to}>{children}</ResourceLink>
  }
  return <TextItem>{children}</TextItem>
}

const ContentList = ({
  year,
  showYear = true,
  items,
  baseUrl,
  showDate = false,
}) => (
  <div className="row mb-4">
    {showYear && (
      <div className="col-12 col-md-1">
        <h2>{year}</h2>
      </div>
    )}
    <div className="col-12 col-md-11">
      {items.map(item => {
        const url = item.slug && `/${baseUrl}/${item.slug}`

        return (
          <div class="row" key={item.id}>
            {showDate && (
              <div className="col-5 col-sm-2 col-md-auto text-justify">
                <TextItem>
                  {new Intl.DateTimeFormat("en-GB").format(new Date(item.date))}
                </TextItem>
              </div>
            )}
            <div className="col">
              <div className="mb-1">
                <Resource to={url}>{item.title}</Resource>
                {item.author && (
                  <>
                    &nbsp;by&nbsp;
                    <span>{item.author}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  </div>
)

export default ContentList
