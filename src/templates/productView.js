import React, { useContext, useMemo } from "react"
import { image, graphql } from "gatsby"

import ProductGallery from "../components/product/productGallery"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductBase from "../components/product/productBase"
import ProductSummary from "../components/product/productSummary"
import ProductSidebar from "../components/product/productSidebar"
import { CartContext, findIndex } from "../state/cart"

const ProductView = props => {
  const { id, title, images } = props.data.productsJson
  const [state, dispatch] = useContext(CartContext)

  let indexInCart = findIndex(state, id)
  let countInCart
  try {
    countInCart = state[indexInCart].count
  } catch {}

  return (
    <>
      <SEO title={title} keywords={[`gatsby`, `application`, `react`]} />

      <div className="row">
        <div className="col col-a">
          {useMemo(
            () => (
              <ProductGallery images={images} />
            ),
            [images]
          )}
        </div>
        <div className="col col-b">
          <ProductBase
            {...props.data.productsJson}
            countInCart={countInCart}
            dispatch={dispatch}
          >
            {data => <ProductSummary {...data} />}
          </ProductBase>
        </div>
        <div className="col col-c">
          <ProductSidebar />
        </div>
      </div>
      <style jsx>
        {`
          .row {}

          .col {
            // border: 1px solid red;
          }

          .col-a {
            margin-bottom: 1rem;
            overflow: hidden;
          }

          .col-b {
            margin-bottom: 5rem;
          }

          .col-c {}

        @media screen and (min-width: 500px) {
          .row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            grid-column-gap: 1rem;
            grid-row-gap: 5rem;
          }

          .col-a {
            margin-bottom 0;
          }

          .col-b {
            margin-bottom: 0;
          }

          .col-c {
            grid-column: 1 / span 2;
          }

        }

        @media screen and (min-width: 850px) {
          .row {
            grid-column-gap: 2rem;
          }

          main {
            padding: 8.5rem 3rem 0;
          }
        }

        @media screen and (min-width: 1100px) {
          .row {
            grid-template-columns: 4fr 3fr 2fr;
          }

          .col-c {
            grid-column: auto;
            margin-left: 4rem;
          }

        }
        `}
      </style>
    </>
  )
}

// ProductView.defaultProps = {
//   asd: "fgh"
// }

export default ProductView

export const query = graphql`
  query($id: String!) {
    productsJson(id: { eq: $id }) {
      id
      title
      price
      unit
      min_quantity
      max_quantity
      slug
      description
      images {
        childImageSharp {
          fluid(maxWidth: 1080) {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  }
`
