import React from "react"
import SEO from "../components/SEO"
import { graphql } from "gatsby"
import Button from "../components/Button"
import LatestSection from "../components/LatestSection"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const Style = styled.div`
  .hero {
    padding: 24vh 0 7vh 0;
  }

  .hero--textblock {
    h1 {
      font-size: 58px;
      font-weight: 400;
    }
  }
`

const Paragraph = styled.p`
  font-size: 24px;
  color: var(--color-gray);

  a {
    color: var(--color-primary);
    text-decoration: underline;

    &:hover {
      color: var(--color-primary);
    }
  }
`

export default function Home({ data }) {
  const latestWritings = data.latestWritings.nodes
  return (
    <Style>
      <section className="hero row">
        <div className="hero--textblock col offset-md-1 offset-xl-3 col-xl-6">
          <h1>Jean-Louis Mbaka</h1>
          <Paragraph>
            I'm a Co-Founder at{" "}
            <a href="https://kinshasadigital.com" target="_blank">
              Kinshasa Digital
            </a>{" "}
            and currently lead our{" "}
            <a href="https://kinshasadigital.academy" target="_blank">
              Digital Academies
            </a>
            .
          </Paragraph>
          <Paragraph style={{ fontSize: "22px" }}>
            My passions are Computer Science, Deep Learning, Education, Science
            &amp; Technology, and Social and Economical Development.
          </Paragraph>
          <Button href="https://www.linkedin.com/in/jlmbaka/" target="_blank">
            Contact Me
            <FontAwesomeIcon icon={faChevronRight} color="white" />
          </Button>
        </div>
      </section>
      <section className="col offset-md-1 offset-xl-3 col-xl-6 mt-5">
        <LatestSection
          items={latestWritings.map(
            ({ frontmatter: { slug, title, date } }) => ({
              to: `writings/${slug}`,
              title,
              date,
            })
          )}
          to="/writing"
          title="Latest Writing"
        />
      </section>
    </Style>
  )
}

export const Head = () => <SEO />

export const query = graphql`
  query IndexPage {
    latestWritings: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//writings//" } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 3
    ) {
      nodes {
        frontmatter {
          slug
          title
          date
        }
      }
    }
  }
`
