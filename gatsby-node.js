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
            _id
            slug
            parent_id
          }
        }
      }
      tags: allProductsJson {
        group(field: tags) {
          fieldValue
          totalCount
          edges {
            node {
              _id
            }
          }
        }
      }
      categories: allCategoriesJson {
        edges {
          node {
            _id
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
  const _categories = result.data.categories.edges
  const categories = _categories.map(i => i.node)
  const tags = result.data.tags.group

  console.log("products:" + products.length)
  console.log("categories:" + categories.length)

  paginate({
    createPage,
    items: products,
    component: productIndex,
    itemsPerPage: 50,
    // itemsPerFirstPage: 3,
    pathPrefix: "/",
    trailingSlash: true
  })

  products.forEach(({ node }) => {
    createPage({
      path: node.slug + '/',
      component: productView,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        _id: node._id,
        allSupercategories: getParentRecursively(categories, node).reverse(),
      },
    })
  })

  for (const i of categories) {
    const allSupercategories = getParentRecursively(categories, i).reverse()
    const allSubcategories = getChildrenRecursively(categories, i)
    const allSubcategoriesIds = [i._id, ...allSubcategories.map(i => i._id)]
    const subcategories = getChildren(allSubcategories, i._id)

    const result = await graphql(
      `
        query($allSubcategoriesIds: [String]) {
          allProductsJson(filter: { parent_id: { in: $allSubcategoriesIds } }) {
            edges {
              node {
                _id
              }
            }
          }
        }
      `,
      { allSubcategoriesIds }
    )
    if (result.errors) {
      reporter.panicOnBuild(`2 Error while running GraphQL query.`)
      return
    }

    const products = result.data.allProductsJson.edges

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
        productsCount: products.length,
      },
      pathPrefix: `/${slugify(i.name.toLowerCase())}`,
      trailingSlash: true
    })
  }

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
      trailingSlash: true
    })
  })
}
