import React from "react"
import InternalPageLayout from "../components/InternalPageLayout"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import styled from "styled-components"

const BookAuthor = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  opacity: 0.7;
  margin-bottom: 40px;
`

const HTML = styled.html`
  margin-top: 40px;
`

const Featured = styled.div`
  margin-bottom: 40px;
`

export default function ReadingDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, author, bookCover } = data.markdownRemark.frontmatter
  return (
    <InternalPageLayout>
      <div className="row">
        <div className="col-12 order-lg-1 d-lg-none">
          <h1>{title}</h1>
          <BookAuthor>by {author}</BookAuthor>
        </div>
        <div className="col-12 order-lg-0 col-lg-4">
          <Featured>
            <GatsbyImage image={bookCover.childImageSharp.gatsbyImageData} />
          </Featured>
        </div>
        <div className="col-12 col-lg-8">
          <div className="d-none d-lg-block">
            <h1>{title}</h1>
            <BookAuthor>by {author}</BookAuthor>
          </div>
          <HTML dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </InternalPageLayout>
  )
}

export const query = graphql`
  query ReadingPage($slug: String) {
    markdownRemark(
      fileAbsolutePath: { regex: "//readings//" }
      frontmatter: { slug: { eq: $slug } }
    ) {
      html
      frontmatter {
        title
        author
        bookCover {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
