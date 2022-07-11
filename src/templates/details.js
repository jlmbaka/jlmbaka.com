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

export default function ProjectsDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter
  return (
    <InternalPageLayout>
      <Style>
        <h1>{title}</h1>
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
  query ProjectPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
