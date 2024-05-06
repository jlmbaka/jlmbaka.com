const path = require("path")
const slugify = require("slugify")

let unsubscribe
export const onPreBootstrap = async ({ store }) => {
  console.log("onPreBootstrap()")
  unsubscribe = store.subscribe(() => {
    const lastAction = store.getState().lastAction

    if (lastAction.type === "ADD_FIELD_TO_NODE") {
      console.log(lastAction.payload)
    }
  })
}

export const onPostBootstrap = async () => {
  unsubscribe()
}

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

  const markDownPages = [
    {
      basePath: "project",
      componentPath: "./src/templates/details.js",
    },
    {
      basePath: "writing",
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

  data?.allFeedGoodreadsBook?.books.forEach(book => {
    actions.createPage({
      path: `/reading/${slugify(book.title)}`,
      component: path.resolve("./src/templates/reading-details.js"),
      context: { id: book.id },
    })
  })
}
