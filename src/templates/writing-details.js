import React from "react"
import InternalPageLayout from "../components/InternalPageLayout"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import styled from "styled-components"

const Style = styled.div`
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
    <InternalPageLayout>
      <Style>
        <h1 className="text-center">{title}</h1>
        <p
          className="text-center"
          style={{
            color: "#6d676d",
            fontWeight: 400,
            marginTop: "1.75rem",
            fontSize: "18px",
          }}
        >
          {dateStr} · {readingTimeText}
        </p>
        <h2>{stack}</h2>
        <div className="featured">
          <GatsbyImage
            image={featuredImg?.childImageSharp?.gatsbyImageData}
            alt={title}
          />
        </div>
        <div className="html" dangerouslySetInnerHTML={{ __html: html }} />
      </Style>
    </InternalPageLayout>
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
