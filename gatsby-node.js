const path = require(`path`)
const slugify = require(`slugify`)
const itemsData = require('./src/data/products')

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const productViewTemplate = path.resolve(`src/templates/productView.js`)

    // Create blog post pages.
      itemsData.items.forEach(i => {
      createPage({
        // Path for this page — required
        path: slugify(i.title),
        component: productViewTemplate,
        context: {
          ...i
        },
      })
    })
  }