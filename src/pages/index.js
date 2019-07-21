import React, { useContext, useMemo } from "react"
import { Image, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductBase from "../components/product/ProductBase"
import ProductCard from "../components/product/productCard"
import { CartContext, findIndex } from "../state/cart"

const IndexPage = props => {
  const products = props.data.allProductsJson.edges
  const [state, dispatch] = useContext(CartContext)

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <ul className="shop-items">
        {products.map((value, index) => {
          let indexInCart = findIndex(state, value.node.id)
          let countInCart
          try {
            countInCart = state[indexInCart].count
          } catch {}

          return (
            <li key={index}>
              {useMemo(
                () => (
                  <ProductBase
                    {...value.node}
                    countInCart={countInCart}
                    dispatch={dispatch}
                  >
                    {data => <ProductCard {...data} />}
                  </ProductBase>
                ),
                [countInCart]
              )}
            </li>
          )
        })}
      </ul>
      {/*<Link to="/page-2/">Go to page 2</Link>*/}
      <style jsx>{`
        .shop-items {
          // outline: 1px solid black;
          margin: 0;
          list-style: none;
        }

        .shop-items li {
          // outline: 1px solid red;
          display: block;
          margin: 0;
          padding-bottom: 1rem;
        }

        .shop-items li:nth-child(4) {
          // padding-right: 0;
        }

        @media screen and (min-width: 350px) {
          .shop-items {
            margin-right: -1rem;
          }

          .shop-items li {
            display: inline-block;
            width: 50%;
            padding: 0 1rem 1rem 0;
          }
        }

        @media screen and (min-width: 750px) {
          .shop-items li {
            width: 33.33%;
          }
        }

        @media screen and (min-width: 1000px) {
          .shop-items li {
            width: 25%;
          }
        }

        @media screen and (min-width: 1400px) {
          .shop-items li {
            width: 20%;
          }
        }
      `}</style>
    </Layout>
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
