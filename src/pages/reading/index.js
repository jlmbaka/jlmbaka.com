import React from "react"
import InternalPageLayout from "../../components/InternalPageLayout"
import YearGroup from "../../components/YearGroup"
import { graphql, Link } from "gatsby"

const sampleReadings = [
  {
    date: "2018-01-01",
    title: "Journey to the Edge of Reason",
    author: "Stephen Budiansky",
    frontmatter: { slug: "" },
    id: 1,
  },
  {
    date: "2018-01-01",
    title: "Project Hail Mary",
    author: "Andy Weir",
    frontmatter: { slug: "" },
    id: 2,
  },
  {
    date: "2018-01-01",
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    frontmatter: { slug: "" },
    id: 3,
  },
  {
    date: "2018-01-01",
    title: "Creative Selection ",
    author: "Ken Kocienda",
    frontmatter: { slug: "" },
    id: 4,
  },
  //
  {
    date: "2019-01-01",
    title: "Journey to the Edge of Reason",
    author: "Stephen Budiansky",
    frontmatter: { slug: "" },
    id: 1,
  },
  {
    date: "2019-01-01",
    title: "Project Hail Mary",
    author: "Andy Weir",
    frontmatter: { slug: "" },
    id: 2,
  },
  {
    date: "2019-01-01",
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    frontmatter: { slug: "" },
    id: 3,
  },
  {
    date: "2019-01-01",
    title: "Creative Selection ",
    author: "Ken Kocienda",
    frontmatter: { slug: "" },
    id: 4,
  },
  //
  {
    date: "2020-01-01",
    title: "Journey to the Edge of Reason",
    author: "Stephen Budiansky",
    frontmatter: { slug: "" },
    id: 1,
  },
  {
    date: "2020-01-01",
    title: "Project Hail Mary",
    author: "Andy Weir",
    frontmatter: { slug: "" },
    id: 2,
  },
  {
    date: "2020-01-01",
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    frontmatter: { slug: "" },
    id: 3,
  },
  {
    date: "2020-01-01",
    title: "Creative Selection ",
    author: "Ken Kocienda",
    frontmatter: { slug: "" },
    id: 4,
  },
  //
  {
    date: "2021-01-01",
    title: "Journey to the Edge of Reason",
    author: "Stephen Budiansky",
    frontmatter: { slug: "" },
    id: 1,
  },
  {
    date: "2021-01-01",
    title: "Project Hail Mary",
    author: "Andy Weir",
    frontmatter: { slug: "" },
    id: 2,
  },
  {
    date: "2021-01-01",
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    frontmatter: { slug: "" },
    id: 3,
  },
  {
    date: "2021-01-01",
    title: "Creative Selection ",
    author: "Ken Kocienda",
    frontmatter: { slug: "" },
    id: 4,
  },
  //
  {
    date: "2016-01-01",
    title: "Journey to the Edge of Reason",
    author: "Stephen Budiansky",
    frontmatter: { slug: "" },
    id: 1,
  },
  {
    date: "2016-01-01",
    title: "Project Hail Mary",
    author: "Andy Weir",
    frontmatter: { slug: "" },
    id: 2,
  },
  {
    date: "2016-01-01",
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    frontmatter: { slug: "" },
    id: 3,
  },
  {
    date: "2016-01-01",
    title: "Creative Selection ",
    author: "Ken Kocienda",
    frontmatter: { slug: "" },
    id: 4,
  },
  //
]

export default function Reading({ data }) {
  const years = Array.from(
    new Set(
      sampleReadings.map(reading => {
        const date = new Date(reading.date)
        return date.getFullYear()
      })
    )
  )
  return (
    <InternalPageLayout>
      <h1 className="mb-5">Readings</h1>
      {years.map(year => (
        <YearGroup
          year={year}
          key={year}
          baseUrl="reading"
          items={sampleReadings.filter(reading =>
            reading.date.startsWith(year)
          )}
        />
      ))}
    </InternalPageLayout>
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
