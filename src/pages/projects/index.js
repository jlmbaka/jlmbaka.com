import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Style = styled.div`
  .portfolio {
    text-align: center;
    padding: 29vh 0 7vh 0;
  }
  .portfolio > h2 {
    font-size: 3em;
  }
  .portfolio > h3 {
    font-size: 2em;
    font-weight: 400;
  }
  .projects {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 80px;
    margin: 80px 20px;
  }
  .projects h3 {
    text-align: center;
    margin: 20px auto 0px;
    font-weight: 500;
  }
  .projects p {
    color: #ccc;
    margin-top: 4px;
  }
`

export default function Projects({ data }) {
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  return (
    <Layout>
      <Style>
        <div className="portfolio">
          <h2>Portfolio</h2>
          <h3>Projects & Websites I've Created</h3>
          <div className="projects">
            {projects.map(project => (
              <Link
                to={`/projects/${project.frontmatter.slug}`}
                key={project.id}
              >
                <div>
                  <GatsbyImage
                    image={
                      project.frontmatter.thumb.childImageSharp.gatsbyImageData
                    }
                  />
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                </div>
              </Link>
            ))}
          </div>
          <p>Like what you see ? Email me at {contact}</p>
        </div>
      </Style>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: ASC }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
