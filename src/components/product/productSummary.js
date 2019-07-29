import React from "react"
import css from "styled-jsx/css"
import { Test as Test3 } from "./productBase"

const ProductSummary = props => {
  const {
    id,
    title,
    price,
    unit,
    slug,
    images,
    UpdateInput,
    ToggleButton,
  } = props

  return (
    <div className="pSummary">
      <h1 className="item title">{title}</h1>
      <p className="item price">
        ${price} {unit}
      </p>
      <div className="item cartInputs">
      <UpdateInput {...props} className="updateInput" />
      <ToggleButton {...props} className="toggleButton" />
      </div>
      <p className="item">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
        asperiores, dolorum eos excepturi id ipsa minima nam nemo odit pariatur
        perferendis provident qui quis recusandae totam vel voluptas voluptatem
        voluptatibus?
      </p>

      <style jsx>{`
        .item {
          margin-bottom: 1rem;
        }

        .title {
          margin-bottom: 0;
        }

        .price {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .cartInputs {
          display: flex;
          margin-bottom: 1.6rem;
        }

        .updateInput {
          display: inline-flex;
          margin-bottom: 0;
        }

        .toggleButton {
          margin-left: 1rem;
          flex: 1;
        }

        @media screen and (min-width: 1100px) {
        .toggleButton {
          flex: 0;
        }
        }
        @media screen and (min-width: 450px) {
          .title {
            // margin-bottom: 1rem;
          }

          .cartInputs {
            // display: block;
                      margin-bottom: 1.8rem;
            // margin-bottom: 0;
          }
        }
      `}</style>
    </div>
  )
}

export default ProductSummary
