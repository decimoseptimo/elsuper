import React from "react"
import { graphql, Link, navigate } from "gatsby"

import SEO from "../components/seo"
import ProductGrid from "../components/product/productGrid"
import Pagination from "../components/pagination"

const ProductIndex = (props) => {
  const products = props.data.allProductsJson.edges

  const handlePageChange = (current) => {
    current === 1 ? navigate(`/`) : navigate(`/${current}`)
  }

  const itemRender = (current, type, element) => {
    if (type === "page") {
      if (current === 1) return <Link to={`/`}>{current}</Link>
      return <Link to={`/${current}`}>{current}</Link>
    }
    return element
  }

  return (
    <>
      <SEO title="Inicio" keywords={[`gatsby`, `application`, `react`]} />
      <ProductGrid products={products} />
      <Pagination
        current={props.pageContext.humanPageNumber}
        total={props.pageContext.numberOfPages}
        pageSize={1}
        itemRender={itemRender}
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
              gatsbyImageData(
                width: 550
                layout: CONSTRAINED
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  }
`
