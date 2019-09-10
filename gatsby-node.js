const path = require(`path`)
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const productIndex = path.resolve(`./src/templates/productIndex.js`)
  const productView = path.resolve(`./src/templates/productView.js`)
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
    const products = result.data.allProductsJson.edges

    paginate({
      createPage,
      items: products,
      component: productIndex,
      itemsPerPage: 50,
      // itemsPerFirstPage: 3,
      pathPrefix: "/"
    })

    products.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: productView,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          id: node.id,
        },
      })
    })
  })
}
