import React, { useState, useEffect } from "react"

import Button from "../button"
import AsInputNumber from "../inputNumber"
import { round } from "../../utils"

const AddButton = props => {
  return (
    <Button
      className={`primary ${props.className}`}
      onClick={() => {
        props.dispatch({
          type: "ADD_CART_ITEM",
          ...props.data,
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
    <>
      <Button
        className={`primary primary-active ${props.className}`}
        onClick={() => {
          props.dispatch({
            type: "REMOVE_CART_ITEM",
            _id: props._id,
          })
        }}
      >
        Remover
      </Button>
    </>
  )
}

const ToggleButton = props => {
  const {
    data,
    countInCart,
    count,
    dispatch,
    addClassName,
    removeClassName,
  } = props

  return !countInCart ? (
    <AddButton
      className={`toggleButton addButton ${addClassName}`}
      dispatch={dispatch}
      data={data}
      count={count}
    />
  ) : (
    <RemoveButton
      className={`toggleButton removeButton ${removeClassName}`}
      dispatch={dispatch}
      _id={data._id}
    />
  )
}

const InputNumber = props => {
  const { data, className, value, onDelete, onChange } = props

  return (
    <AsInputNumber
      className={className}
      aria-label="quantity"
      value={value}
      min={data.min_quantity}
      max={data.max_quantity}
      precision={data.unit === "Kg" ? 2 : 0}
      onChange={onChange}
      onDelete={onDelete}
    />
  )
}

const ProductBase = props => {
  const { dispatch, data, view: View, countInCart } = props
  data.price = round(data.price)
  const [count, setCount] = useState(countInCart || 1)

  useEffect(() => {
    if (countInCart) setCount(countInCart)
  }, [countInCart])

  const viewProps = {
    data,
    count,
    dispatch,
    setCount,
    countInCart,
    ToggleButton,
    InputNumber,
  }

  return <View {...viewProps} />
}

export default React.memo(ProductBase)
