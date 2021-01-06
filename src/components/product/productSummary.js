import React from "react"
import nl2br from "react-nl2br"

const ProductSummary = (props) => {
  const {
    data,
    count,
    setCount,
    dispatch,
    countInCart,
    InputNumber,
    AddButton,
    RemoveButton,
    hasMountedAndHasValue,
  } = props

  const ToggleButton = () => {
    return !countInCart ? (
      <AddButton
        className={`toggleButton primary`}
        dispatch={dispatch}
        data={data}
        count={count}
      />
    ) : (
      <RemoveButton
        className={`toggleButton primary primary-active`}
        dispatch={dispatch}
        _id={data._id}
      />
    )
  }

  return (
    <div key={hasMountedAndHasValue} className="productSummary">
      <h1 className="item title">{data.title}</h1>
      <p className="item price">
        ${data.price} {data.unit}
      </p>
      <div className="item cartInputs">
        <InputNumber
          className="style3"
          data={data}
          value={count}
          dispatch={dispatch}
          onChange={(value) => {
            // console.log(`onChange: ${value}`)
            setCount(value)
            if (countInCart)
              dispatch({
                type: "UPDATE_CART_ITEM",
                _id: data._id,
                count: value,
              })
          }}
        />
        <ToggleButton
          data={data}
          count={count}
          dispatch={dispatch}
          countInCart={countInCart}
        />
      </div>
      {/* <p className="item">{nl2br(data.description)}</p> */}
      <p className="item">
        En ELSUPER encuentras todo tipo de articulos para tu hogar y alacena.
        Proximamente agregaremos una descripcion cool a este producto.
      </p>

      <style jsx global>{`
        .productSummary .item {
          margin-bottom: 1rem;
        }

        .productSummary .title {
          margin-bottom: 0;
          font-family: Lato, Helvetica Neue, Arial, Helvetica, sans-serif;
        }

        .productSummary .price {
          font-size: 1.5rem;
          margin: 0.5rem 0 1rem;
        }

        .productSummary .cartInputs {
          display: flex;
          margin-bottom: 1.6rem;
        }

        .productSummary .toggleButton {
          margin-left: 1rem;
          flex: 1;
        }

        @media screen and (min-width: 1100px) {
          .productSummary .toggleButton {
            {/* flex: 0; */}
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
