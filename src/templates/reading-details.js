import React from "react"
import InternalPageLayout from "../components/InternalPageLayout"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import SEO from "../components/SEO"

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
  const { title, author, coverImage } = data.goodreadsBook
  return (
    <InternalPageLayout>
      <div className="row">
        <div className="col-12 order-lg-1 d-lg-none">
          <Link to="/reading">&#8592; All books</Link>
          <h1>{title}</h1>
          <BookAuthor>by {author}</BookAuthor>
        </div>
        <div className="col-12 order-lg-0 col-lg-4">
          <Featured>
            <GatsbyImage
              image={coverImage.childImageSharp.gatsbyImageData}
              alt={title}
            />
          </Featured>
        </div>
        <div className="col-12 col-lg-8">
          <div className="d-none d-lg-block mt-5">
            <Link to="/reading">&#8592; All books</Link>
            <h1>{title}</h1>
            <BookAuthor>by {author}</BookAuthor>
          </div>
        </div>
      </div>
    </InternalPageLayout>
  )
}

export const query = graphql`
  query ReadingPage($id: String) {
    goodreadsBook(id: { eq: $id }) {
      id
      title
      author
      coverImage {
        id
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`

export const Head = ({ data }) => <SEO title={data?.goodreadsBook?.title} />
