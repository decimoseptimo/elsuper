import React from "react"
import { Image, graphql } from "gatsby"

import SEO from "../components/seo"
import ProductGrid from "../components/product/productGrid"

const ProductIndex = props => {
  const products = props.data.allProductsJson.edges

  return (
    <>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <ProductGrid products={products} />
    </>
  )
}

export default ProductIndex

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allProductsJson(skip: $skip, limit: $limit) {
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
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
