import React from "react"
import nl2br from "react-nl2br"

const ProductSummary = props => {
  const {
    title,
    price,
    unit,
    description,
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
      <p className="item">{nl2br(description)}</p>

      <style jsx>{`
        .item {
          margin-bottom: 1rem;
        }

        .title {
          margin-bottom: 0;
          font-family: Lato,Helvetica Neue,Arial,Helvetica,sans-serif;
        }

        .price {
          font-size: 1.5rem;
          margin: .5rem 0 1rem;
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
          .cartInputs {
            margin-bottom: 1.8rem;
          }
        }
      `}</style>
    </div>
  )
}

export default ProductSummary
