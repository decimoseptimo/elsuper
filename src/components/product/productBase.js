import React, { useState, useEffect } from "react"

import Button from "../button"
import AsInputNumber from "../inputNumber"
import useHasMountedAndHasValue from "../useHasMountedAndHasValue"
import { round } from "../../utils"

const AddButton = (props) => {
  return (
    <Button
      className={`${props.className}`}
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

const RemoveButton = (props) => {
  return (
    <>
      <Button
        className={`${props.className}`}
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

const InputNumber = (props) => {
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

const ProductBase = (props) => {
  const { dispatch, data, view: View, countInCart } = props
  data.price = round(data.price)
  const [count, setCount] = useState(countInCart || 1)

  // Two-pass rendering technique, see:
  // https://github.com/gatsbyjs/gatsby/issues/17914
  // https://joshwcomeau.com/react/the-perils-of-rehydration/
  const hasMountedAndHasValue = useHasMountedAndHasValue(countInCart)

  useEffect(() => {
    if (countInCart) setCount(countInCart)
  }, [countInCart])

  const viewProps = {
    data,
    count,
    dispatch,
    setCount,
    countInCart,
    AddButton,
    RemoveButton,
    InputNumber,
    hasMountedAndHasValue,
  }

  return <View {...viewProps} />
}

export default React.memo(ProductBase)
