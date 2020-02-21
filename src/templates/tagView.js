import React from "react"
import slugify from "slugify"
import { graphql, navigate } from "gatsby"

import { capitalize } from "../utils"
import SEO from "../components/seo"
import ProductGrid from "../components/product/productGrid"
import Pagination from "../components/pagination"

const TagView = props => {
  const products = props.data.allProductsJson.edges
  const { tag } = props.pageContext

  const handlePageChange = (e, d) => {
    d.activePage === 1
      ? navigate(`/tags/${slugify(tag)}`)
      : navigate(`/tags/${slugify(tag)}/${d.activePage}`)
  }

  return (
    <>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>{capitalize(tag)}</h1>
      <ProductGrid products={products} />
      <Pagination
        current={props.pageContext.humanPageNumber}
        total={props.pageContext.numberOfPages}
        pageSize={1}
        onChange={handlePageChange}
      />
    </>
  )
}

export default TagView

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!, $tag: String) {
    allProductsJson(
      skip: $skip
      limit: $limit
      filter: { tags: { in: [$tag] } }
    ) {
      totalCount
      edges {
        node {
          id
          title
          price
          unit
          min_quantity
          max_quantity
          slug
          images {
            childImageSharp {
              fluid(maxWidth: 550) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
