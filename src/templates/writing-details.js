import React from "react"
import InternalPageLayout from "../components/InternalPageLayout"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import styled from "styled-components"

const Style = styled.div`
  margin-top: 11rem;
  margin-bottom: 5rem;
  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    opacity: 0.7;
    margin-bottom: 40px;
  }

  .html {
    margin-top: 40px;
  }

  .featured {
    margin-bottom: 40px;
  }
`

export default function WritingDetails({ data }) {
  const { html, frontmatter, fields } = data.markdownRemark
  const { title, stack, featuredImg, date } = frontmatter
  const dateStr = new Date(date).toDateString()
  const readingTimeText = fields.readingTime.text

  return (
    <Style>
      <div className="col">
        <div className="text-center" style={{ marginBottom: "5rem" }}>
          <h1>{title}</h1>
          <p
            style={{
              color: "#6d676d",
              fontWeight: 400,
              fontSize: "18px",
            }}
          >
            {dateStr} · {readingTimeText}
          </p>
        </div>
        <div className="featured text-center col col-md-10 offset-md-1">
          <GatsbyImage
            image={featuredImg?.childImageSharp?.gatsbyImageData}
            alt={title}
          />
        </div>
        <div className="row">
          <div
            className={`col col-sm-8 col-lg-8 col-xl-6 offset-md-2 offset-xl-3`}
          >
            <div className="html" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </Style>
  )
}

export const query = graphql`
  query WritingDetailsPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        date
        featuredImg {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
