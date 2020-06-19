import React from "react"
import nl2br from "react-nl2br"

const ProductSummary = props => {
  const {
    data,
    count,
    setCount,
    dispatch,
    countInCart,
    UpdateInput,
    ToggleButton,
  } = props

  return (
    <div className="productSummary">
      <h1 className="item title">{data.title}</h1>
      <p className="item price">
        ${data.price} {data.unit}
      </p>
      <div className="item cartInputs">
        <UpdateInput className="style3" data={data} count={count} setCount={setCount} dispatch={dispatch} countInCart={countInCart} />
        <ToggleButton data={data} count={count} dispatch={dispatch} countInCart={countInCart} />
      </div>
      <p className="item">{nl2br(data.description)}</p>

      <style jsx global>{`
        .productSummary .item {
          margin-bottom: 1rem;
        }

        .productSummary .title {
          margin-bottom: 0;
          font-family: Lato,Helvetica Neue,Arial,Helvetica,sans-serif;
        }

        .productSummary .price {
          font-size: 1.5rem;
          margin: .5rem 0 1rem;
        }

        .productSummary .cartInputs {
          display: flex;
          margin-bottom: 1.6rem;
        }

        .productSummary .updateInput {
          display: inline-flex;
          margin-bottom: 0;
        }

        .productSummary .toggleButton {
          margin-left: 1rem;
          flex: 1;
        }

        @media screen and (min-width: 1100px) {
          .productSummary .toggleButton {
            flex: 0;
          }
        }
        
        @media screen and (min-width: 450px) {
          .productSummary .cartInputs {
            margin-bottom: 1.8rem;
          }
        }
      `}</style>
    </div>
  )
}

export default ProductSummary
