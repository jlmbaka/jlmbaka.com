const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: "eval-source-map",
  })
}

exports.createPages = async ({ graphql, actions }) => {
  // Query data
  const { data } = await graphql(`
    query DetailPageData {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
          fileAbsolutePath
        }
      }
    }
  `)

  const pages = [
    {
      basePath: "projects",
      componentPath: "./src/templates/details.js",
    },
    {
      basePath: "readings",
      componentPath: "./src/templates/reading-details.js",
    },
    {
      basePath: "writings",
      componentPath: "./src/templates/details.js",
    },
  ]

  pages.forEach(({ basePath, componentPath }) => {
    data.allMarkdownRemark.nodes
      .filter(node => node.fileAbsolutePath.includes(`src/${basePath}`))
      .forEach(node => {
        actions.createPage({
          path: `/${basePath}/${node.frontmatter.slug}`,
          component: path.resolve(componentPath),
          context: { slug: node.frontmatter.slug },
        })
      })
  })
}
