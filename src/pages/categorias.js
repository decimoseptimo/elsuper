import React from "react"
import { graphql, Link } from "gatsby"
import slugify from "slugify"

import SEO from "../components/seo"
import { getChildren, getCategoryTree } from "../utils"

const Categorias = (props) => {
  const propsCategories = props.data.allCategoriesJson.edges
  const categories = propsCategories.map((i) => i.node)
  const rootCategories = getChildren(categories, null)
  const categoryTree = []

  rootCategories.forEach((i) => {
    const allSubcategories = getCategoryTree(categories, i)
    categoryTree.push(...allSubcategories)
  })

  const getCategoriesList = (obj) => {
    return (
      <ul className="categoryList">
        {obj.map(({ _id, name, children }) => {
          const categoryList = children ? getCategoriesList(children) : null

          return (
            <li key={_id}>
              <Link to={`/${slugify(name.toLowerCase())}`}>{name}</Link>
              {categoryList}
            </li>
          )
        })}
      </ul>
    )
  }
  const categoriesList = getCategoriesList(categoryTree)

  return (
    <>
      <SEO title="Categorias" />
      <h1>Categorias</h1>
      {categoriesList}
      <style jsx global>{`
        .categoryList {
          margin-left: 1rem;
        }
      `}</style>
    </>
  )
}

export default Categorias

export const pageQuery = graphql`
  query {
    allCategoriesJson {
      edges {
        node {
          _id
          name
        }
      }
    }
  }
`
