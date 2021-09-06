import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Button from "../components/Button"
import { GatsbyImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import Card from "../components/Card"

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

const Paragraph = styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.gray};

  a {
    ${({ theme }) => theme.primary};
    text-decoration: underline;

    &:hover {
      ${({ theme }) => theme.primary};
    }
  }
`

const LatestCard = ({ item, to, image, title }) => (
  <div className="col-12 col-md-3 col-lg-4">
    <h2>Latest read</h2>
    <Card
      to={`/reading/${item.frontmatter.slug}`}
      image={item.frontmatter.bookCover.childImageSharp.gatsbyImageData}
      title={item.frontmatter.title}
    />
    <Link to="/reading">All speaking &rarr;</Link>
  </div>
)

export default function Home({ data }) {
  const latestWritings = data.latestWritings.nodes
  const latestReadings = data.latestReadings.nodes
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
            <Button href="https://www.linkedin.com/in/jlmbaka/" target="_blank">
              Contact Me
              <FontAwesomeIcon icon={faChevronRight} color="white" />
            </Button>
          </div>
          <div className="hero--banner order-1 order-lg-2 col-lg-4 offset-md-3 offset-lg-0">
            <GatsbyImage
              image={data.banner.childImageSharp.gatsbyImageData}
              alt="site banner"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </section>
        <section className="row offset-md-3">
          <div className="col-12 col-md-3 col-lg-4">
            <h2>Latest essay</h2>
            {latestWritings.length > 0 && (
              <div className="col-12 col-md-3 col-lg-4">
                <h2>Latest Essay</h2>
                <Card
                  to={`/writings/${latestWritings[0].frontmatter.slug}`}
                  image={
                    latestWritings[0].frontmatter.featuredImg.childImageSharp
                      .gatsbyImageData
                  }
                  title={latestWritings[0].frontmatter.title}
                />
                <div>
                  <Link to="/reading">All speakings &rarr;</Link>
                </div>
              </div>
            )}
          </div>
          {latestReadings.length > 0 && (
            <div className="col-12 col-md-3 col-lg-4">
              <h2>Latest read</h2>
              <Card
                to={`/readings/${latestReadings[0].frontmatter.slug}`}
                image={
                  latestReadings[0].frontmatter.bookCover.childImageSharp
                    .gatsbyImageData
                }
                title={latestReadings[0].frontmatter.title}
              />
              <div>
                <Link to="/reading">All readings &rarr;</Link>
              </div>
            </div>
          )}
        </section>
      </Style>
    </Layout>
  )
}

export const query = graphql`
  query IndexPage {
    banner: file(relativePath: { eq: "banner2_bw.webp" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    latestWritings: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//writings//" } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 1
    ) {
      nodes {
        frontmatter {
          slug
          title
          featuredImg {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
    latestReadings: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//readings//" } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 1
    ) {
      nodes {
        frontmatter {
          slug
          title
          bookCover {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`
