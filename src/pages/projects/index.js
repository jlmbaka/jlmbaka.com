import { graphql, Link } from "gatsby"
import React from "react"
import InternalPageLayout from "../../components/InternalPageLayout"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Style = styled.div`
  h2 {
    font-size: 2em;
  }
  h3 {
    font-size: 1em;
    font-weight: 400;
  }
  .projects {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 80px;
    margin: 80px 20px;
    h3 {
      margin: 20px auto 0px;
      font-weight: 500;
    }
    p {
      color: ${({ theme }) => theme.gray};
      margin-top: 4px;
    }
  }
`

export default function Projects({ data }) {
  const projects = data.projects.nodes
  return (
    <InternalPageLayout>
      <Style>
        <div>
          <h1 className="mb-5">Portfolio</h1>
          <p>
            Side Projects I'm currently working on. For professional work, visit
            Kinshasa Digital and Kinshasa Digital Academy.
          </p>
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
        </div>
      </Style>
    </InternalPageLayout>
  )
}

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "//projects//" } }
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
