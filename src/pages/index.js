import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const Style = styled.div`
  .hero {
    padding: 29vh 0 7vh 0;
  }

  .hero--textblock {
    h1 {
      font-size: 50px;
      font-weight: 400;
    }
  }
`

const Button = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  margin-top: 1.5rem;
  color: white;
  background-color: #222020;
  border: 2px solid #222020;
  border-radius: 0;
  opacity: 1;
  svg {
    margin-left: 1rem;
  }

  path {
    color: white;
  }

  &:hover {
    color: #222020;
    background-color: white;
    border: 2px solid #222020;
    path {
      color: #222020;
    }
  }
`

const Paragraph = styled.p`
  font-size: 24px;
  color: #b3b3b3;

  a {
    color: #222020;
    text-decoration: underline;

    &:hover {
      color: #222020;
    }
  }
`

export default function Home({ data }) {
  return (
    <Layout>
      <Style>
        <section className="hero row">
          <div className="hero--textblock order-2 order-lg-1 col-lg-4 offset-md-3">
            <h1>Jean-Louis Mbaka</h1>
            <Paragraph>
              I'm a Co-Founder at{" "}
              <a href="https://kinshasadigital.com" target="_blank">
                Kinshasa Digital
              </a>{" "}
              and Managing Director of{" "}
              <a href="https://kinshasadigital.academy" target="_blank">
                Kinshasa Digital Academy
              </a>
            </Paragraph>
            <Button to="https://www.linkedin.com/in/jlmbaka/" target="_blank">
              Contact Me
              <FontAwesomeIcon icon={faChevronRight} color="white" />
            </Button>
          </div>
          <div className="hero--banner order-1 order-lg-2 col-lg-4 offset-md-3 offset-lg-0">
            <GatsbyImage
              image={data.file.childImageSharp.gatsbyImageData}
              alt="site banner"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </section>
      </Style>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner2_bw.webp" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
