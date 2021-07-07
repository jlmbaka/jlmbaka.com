import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import styled from "styled-components"

const InternalPageLayout = styled(({ className, children }) => (
  <div className="row">
    <div className={`${className} col offset-md-3`}>{children}</div>
  </div>
))`
  margin-top: 11rem;
  margin-bottom: 5rem;
`

const sampleYears = [2018, 2019, 2020, 2021]
const sampleReadings = [
  {
    title: "Journey to the Edge of Reason",
    author: "Stephen Budiansky",
    frontmatter: { slug: "" },
    id: "dfqdf",
  },
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    frontmatter: { slug: "" },
    id: "dqfdq",
  },
  {
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    frontmatter: { slug: "" },
    id: "fqdfdq",
  },
  {
    title: "Creative Selection ",
    author: "Ken Kocienda",
    frontmatter: { slug: "" },
    id: "dqfqdq",
  },
]

const ResourcesLink = styled(Link)`
  text-decoration: underline;
`

const YearGroup = ({ year, items, baseUrl }) => (
  <div className="row mb-4">
    <div className="col-12 col-md-2">
      <h2>{year}</h2>
    </div>
    <div className="col-12 col-md-10">
      {items.map(item => (
        <div className="mb-1" key={item.id}>
          <ResourcesLink to={`/${baseUrl}/${item.frontmatter.slug}`}>
            {item.title}
          </ResourcesLink>
          &nbsp;by&nbsp;
          <span>{item.author}</span>
        </div>
      ))}
    </div>
  </div>
)

export default function Reading({ data }) {
  return (
    <Layout>
      <InternalPageLayout>
        <h1 className="mb-5">Readings</h1>
        {sampleYears.map(year => (
          <YearGroup
            year={year}
            key={year}
            baseUrl="reading"
            items={sampleReadings}
          />
        ))}
      </InternalPageLayout>
    </Layout>
  )
}

// export const query = graphql`
//   query ProjectsPage {
//     projects: allMarkdownRemark(
//       sort: { fields: frontmatter___date, order: ASC }
//     ) {
//       nodes {
//         frontmatter {
//           slug
//           stack
//           title
//           thumb {
//             childImageSharp {
//               gatsbyImageData
//             }
//           }
//         }
//         id
//       }
//     }
//     contact: site {
//       siteMetadata {
//         contact
//       }
//     }
//   }
// `
