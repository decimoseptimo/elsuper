const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const productViewTemplate = path.resolve(`src/templates/productView.js`)
  return graphql(`
    query {
      allProductsJson {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `).then(result => {
    console.log(result)
    result.data.allProductsJson.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: productViewTemplate,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          id: node.id,
        },
      })
    })
  })
}
