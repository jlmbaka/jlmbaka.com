const path = require("path")
const slugify = require("slugify")

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
      allFeedGoodreadsBook {
        books: nodes {
          title
          id
        }
      }
    }
  `)

  const markDownPages = [
    {
      basePath: "projects",
      componentPath: "./src/templates/details.js",
    },
    {
      basePath: "writings",
      componentPath: "./src/templates/writing-details.js",
    },
  ]
  markDownPages.forEach(({ basePath, componentPath }) => {
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

  data.allFeedGoodreadsBook.books.forEach(book => {
    actions.createPage({
      path: `/readings/${slugify(book.title)}`,
      component: path.resolve("./src/templates/reading-details.js"),
      context: { id: book.id },
    })
  })
}
