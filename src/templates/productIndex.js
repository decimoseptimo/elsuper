import React from "react"
import { Image, graphql, navigate } from "gatsby"

import SEO from "../components/seo"
import ProductGrid from "../components/product/productGrid"
import Pagination from "../components/pagination"
import { Icon } from "semantic-ui-react"

const ProductIndex = props => {
  const products = props.data.allProductsJson.edges

  const handlePageChange = (e, d) => {
    d.activePage == 1 ? navigate(`/`) : navigate(`/${d.activePage}`)
  }

  return (
    <>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <ProductGrid products={products} />
      <Pagination
        activePage={props.pageContext.humanPageNumber}
        ellipsisItem={{
          content: <Icon name="circle" />,
          icon: true,
        }}
        prevItem={{ content: <Icon name="angle left" />, icon: true }}
        nextItem={{ content: <Icon name="angle right" />, icon: true }}
        totalPages={props.pageContext.numberOfPages}
        firstItem={null}
        lastItem={null}
        // ellipsisItem={null}
        onPageChange={handlePageChange}
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
