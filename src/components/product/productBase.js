import React, { useState, useEffect } from "react"

import Button from "../button"
import InputNumber from "../inputNumber"
import { round } from "../../utils"

const AddButton = props => {
  return (
    <Button
      className={`${props.className}`}
      onClick={() => {
        props.dispatch({
          type: "ADD_CART_ITEM",
          ...props,
          count: props.count,
        })
      }}
    >
      Agregar
    </Button>
  )
}

const RemoveButton = props => {
  return (
    <Button
      className={`${props.className}`}
      style={{ backgroundColor: "#613458" }}
      onClick={() => {
        props.dispatch({
          type: "REMOVE_CART_ITEM",
          id: props.id,
        })
      }}
    >
      Remover
    </Button>
  )
}

const ToggleButton = props => {
  return !props.countInCart ? (
    <AddButton {...props} />
  ) : (
    <RemoveButton {...props} />
  )
}

const UpdateInput = props => {
  return (
    <>
      <InputNumber
        className={`${props.className}`}
        aria-label="quantity"
        required={true}
        value={props.count}
        min={props.min_quantity}
        max={props.max_quantity}
        precision={props.unit === "Kg" ? 2 : 0}
        onChange={value => {
          if (value >= props.min_quantity && value <= props.max_quantity) {
            props.setCount(value)
            if (props.countInCart)
              props.dispatch({
                type: "UPDATE_CART_ITEM",
                id: props.id,
                count: value,
              })
          }
        }}
      />
    </>
  )
}

const ProductBase = props => {
  const { countInCart } = props
  const price = round(props.price)
  const [count, setCount] = useState(countInCart || 1)

  useEffect(() => {
    if (countInCart) setCount(countInCart)
  }, [countInCart])

  // console.log(`INIT: ${props.id}`)
  // console.log(`count: ${props.count}`)
  // console.log(`countInCart: ${countInCart}`)

  return (
    <>
      {props.children({
        ...props,
        price,
        count,
        setCount,
        countInCart,
        ToggleButton,
        UpdateInput,
      })}
    </>
  )
}

// ProductBase.defaultProps = {
//   min_quantity: 1,
//   max_quantity: 100,
// }

export default ProductBase
