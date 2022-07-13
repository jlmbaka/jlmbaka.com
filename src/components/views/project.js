import React from "react"
import InternalPageLayout from "../InternalPageLayout"
import styled from "styled-components"
import Card from "../Card"

const Project = styled.div`
  padding: 20px 20px;
`

export default function Projects({ data }) {
  const projects = data.projects.nodes
  return (
    <InternalPageLayout>
      <>
        <h1 className="mb-5">Portfolio</h1>
        <p>{projects.length > 0 ? "Side Projects I'm currently working on." : "I'm not currently working on any side projects."}</p>
        <p>
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
              <Card
                to={`/projects/${project.frontmatter.slug}`}
                image={
                  project.frontmatter.thumb.childImageSharp.gatsbyImageData
                }
                title={project.frontmatter.title}
                subtitle={project.frontmatter.stack}
              />
            </Project>
          ))}
        </div>
      </>
    </InternalPageLayout>
  )
}
