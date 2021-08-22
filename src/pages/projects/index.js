import { graphql, Link } from "gatsby"
import React from "react"
import InternalPageLayout from "../../components/InternalPageLayout"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Title = styled.h2`
  margin: 20px auto 0px;
  font-weight: 500;
  font-size: 1.5em;
  opacity: 1;
`

const Stack = styled.p`
  color: ${({ theme }) => theme.gray};
  margin-top: 4px;
  opacity: 1 !important;
`

const Project = styled.div`
  padding: 20px 20px;
`

export default function Projects({ data }) {
  const projects = data.projects.nodes
  return (
    <InternalPageLayout>
      <>
        <h1 className="mb-5">Portfolio</h1>
        <p>
          Side Projects I'm currently working on. <br />
          For professional work, kindly visit{" "}
          <a href="https://kinshasadigital.com" target="_blank">
            Kinshasa Digital
          </a>{" "}
          and{" "}
          <a href="https://kinshasadigital.academy" target="_blank">
            Kinshasa Digital Academy
          </a>
          .
        </p>
        <div className="row">
          {projects.map(project => (
            <Project className="col-12 col-sm-6 col-lg-4" key={project.id}>
              <Link to={`/projects/${project.frontmatter.slug}`}>
                <GatsbyImage
                  image={
                    project.frontmatter.thumb.childImageSharp.gatsbyImageData
                  }
                  alt={project.frontmatter.title}
                />
                <Title>{project.frontmatter.title}</Title>
                <Stack>{project.frontmatter.stack}</Stack>
              </Link>
            </Project>
          ))}
        </div>
      </>
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
