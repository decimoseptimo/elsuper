import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import slugify from "slugify"

import { getChildren, getCategoryTree } from "../utils"

const Categorias = props => {
  const data = useStaticQuery(graphql`
    query {
      allCategoriesJson {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `)

  const propsCategories = data.allCategoriesJson.edges
  const categories = propsCategories.map(i => i.node)
  const rootCategories = getChildren(categories, null)
  const categoryTree = []

  rootCategories.forEach(i => {
    const allSubcategories = getCategoryTree(categories, i)
    categoryTree.push(...allSubcategories)
  })

  const getCategoriesList = obj => {
    return (
      <ul className="categoryList">
        {obj.map(({ id, name, children }) => {
          const categoryList = children ? getCategoriesList(children) : null

          return (
            <li key={id}>
              <Link
                to={`/${slugify(name.toLowerCase())}`}
                onClick={() => props.onMenuClick()}
              >
                {name}
              </Link>
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
      <h2>Categorias</h2>
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
