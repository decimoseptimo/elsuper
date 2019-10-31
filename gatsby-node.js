const React = require("react")
const path = require("path")
const slugify = require("slugify")
const { paginate } = require("gatsby-awesome-pagination")

const {
  getParentRecursively,
  getChildrenRecursively,
  getChildren,
} = require("./src/utils")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const productIndex = path.resolve(`./src/templates/productIndex.js`)
  const productView = path.resolve(`./src/templates/productView.js`)
  const tagView = path.resolve(`./src/templates/tagView.js`)
  const categoryView = path.resolve(`./src/templates/categoryView.js`)

  const result = await graphql(`
    {
      products: allProductsJson {
        edges {
          node {
            id
            slug
          }
        }
      }
      tags: allProductsJson {
        group(field: tags) {
          fieldValue
          totalCount
          edges {
            node {
              id
            }
          }
        }
      }
      categories: allCategoriesJson {
        edges {
          node {
            id
            name
            parent_id
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const products = result.data.products.edges
  const the_categories = result.data.categories.edges
  const categories = the_categories.map(i => i.node)
  const tags = result.data.tags.group

  paginate({
    createPage,
    items: products,
    component: productIndex,
    itemsPerPage: 50,
    // itemsPerFirstPage: 3,
    pathPrefix: "/",
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

  categories.forEach(async i => {
    const allSupercategories = getParentRecursively(categories, i).reverse()
    const allSubcategories = getChildrenRecursively(categories, i)
    const allSubcategoriesIds = [i.id, ...allSubcategories.map(i => i.id)]
    const subcategories = getChildren(allSubcategories, i.id)

    const result2 = await graphql(
      `
        query($allSubcategoriesIds: [String]) {
          allProductsJson(filter: { category_id: { in: $allSubcategoriesIds } }) {
            edges {
              node {
                id
              }
            }
          }
        }
      `,
      { allSubcategoriesIds }
    )
    if (result2.errors) {
      reporter.panicOnBuild(`2 Error while running GraphQL query.`)
      return
    }

    const products = result2.data.allProductsJson.edges

    paginate({
      createPage,
      items: products,
      component: categoryView,
      itemsPerPage: 50,
      context: {
        category: i,
        allSupercategories,
        subcategories,
        allSubcategoriesIds,
        productsCount: products.length
      },
      pathPrefix: `/${slugify(i.name.toLowerCase())}`,
    })
  })

  tags.forEach(tag => {
    paginate({
      createPage,
      items: tag.edges,
      component: tagView,
      itemsPerPage: 50,
      context: {
        tag: tag.fieldValue,
      },
      pathPrefix: `/tags/${slugify(tag.fieldValue.toLowerCase())}`,
    })
  })
}
