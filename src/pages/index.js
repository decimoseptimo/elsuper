import React, { useContext, useMemo } from "react"
import { Image, graphql } from "gatsby"

import SEO from "../components/seo"
import ProductGrid from "../components/product/productGrid"

const IndexPage = props => {
  const products = props.data.allProductsJson.edges

  return (
    <>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <ProductGrid products={products} />
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allProductsJson {
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
