import React, { useContext, useMemo } from "react"
import { image, graphql } from "gatsby"

import ProductGallery from "../components/product/productGallery"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Sidebar from "../components/sidebar"
import ProductBase from "../components/product/ProductBase"
import ProductSummary from "../components/product/productSummary"
import { CartContext, findIndex } from "../state/state"

const ProductView = props => {
  const { id, title, images } = props.data.productsJson
  const [state, dispatch] = useContext(CartContext)

  let indexInCart = findIndex(state, id)
  let countInCart
  try {
    countInCart = state[indexInCart].count
  } catch {}


  return (
    <Layout>
      <SEO title={title} keywords={[`gatsby`, `application`, `react`]} />

      <div className="row">
        <div className="col col-a">
          {useMemo(()=><ProductGallery images={images} />,[images])}
        </div>
        <div className="col col-b">
          <ProductBase {...props.data.productsJson} countInCart={countInCart} dispatch={dispatch}>{(data)=><ProductSummary {...data} />}</ProductBase>
        </div>
        <div className="col col-c">
          <Sidebar />
        </div>
      </div>
      <style jsx>
        {`
          .row {
            display: flex;
            flex-flow: row wrap;
            // border: 2px solid red;
          }

          .col {
            flex: 1;
            // border: 1px solid red;
          }

          .col-a {
            width: 100%;
            //max-width: 600px;
          }

          .col-b {
            // flex: 1;
            padding: 0 2rem;
          }

          .col-b > * {
            // border: 1px solid red;
            margin-bottom: 1rem;
          }
        `}
      </style>
    </Layout>
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
