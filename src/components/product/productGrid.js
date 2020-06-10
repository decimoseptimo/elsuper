import React, { useContext } from "react"

import ProductBase from "./productBase"
import ProductCard from "./productCard"
import { CartContext, findIndex } from "../../state/cart"

const ProductGrid = ({ products }) => {
  const [state, dispatch] = useContext(CartContext)

  return (
    <>
      <ul className="shop-items">
        {products.map((value, index) => {
          const indexInCart = findIndex(state, value.node._id)
          const countInCart = state[indexInCart]?.count

          return <li key={index}>
            <ProductBase
              {...value.node}
              countInCart={countInCart}
              dispatch={dispatch}
              view={ProductCard}
            />
          </li>
        })}
      </ul>
      <style jsx global>{`
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
    </>
  )
}

export default ProductGrid
