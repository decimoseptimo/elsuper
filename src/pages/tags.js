import React from "react"
import { graphql, Link } from "gatsby"
import slugify from "slugify"

import SEO from "../components/seo"
import Image from "../components/image"

const Tags = (props) => {
  const categories = props.data.allProductsJson.group

  return (
    <>
      <SEO title="Tags" />
      <h1>Tags</h1>

      <ul>
        {categories.map((tag) => (
          <li>
            <Link to={`/${slugify(tag.fieldValue)}`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{``}</style>
    </>
  )
}

export default Tags

export const pageQuery = graphql`
  query {
    allProductsJson {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
  }
`
