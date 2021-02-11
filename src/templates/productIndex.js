import React from "react"
import { graphql, navigate } from "gatsby"

import SEO from "../components/seo"
import ProductGrid from "../components/product/productGrid"
import Pagination from "../components/pagination"

const ProductIndex = (props) => {
  const products = props.data.allProductsJson.edges

  const handlePageChange = (page) => {
    page === 1 ? navigate(`/`) : navigate(`/${page}/`)
  }

  return (
    <>
      <SEO title="Inicio" keywords={[`gatsby`, `application`, `react`]} />
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

export default ProductIndex

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allProductsJson(skip: $skip, limit: $limit) {
      edges {
        node {
          _id
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
