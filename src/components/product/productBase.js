import React, { useState, useEffect } from "react"

import Button from "../button"
import useHasMounted from "../useHasMounted"
import InputNumber from "../inputNumber"
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
  return <>
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
}

const ToggleButton = props => {
  const {data, countInCart, count, dispatch, addClassName, removeClassName} = props

  //see: https://github.com/gatsbyjs/gatsby/issues/17914
  // https://joshwcomeau.com/react/the-perils-of-rehydration/
  const hasMounted = useHasMounted()

  return !countInCart ? (
    <AddButton className={`toggleButton addButton ${addClassName}`} key={hasMounted} dispatch={dispatch} data={data} count={count} />
  ) : (
    <RemoveButton className={`toggleButton removeButton ${removeClassName}`} key={hasMounted} dispatch={dispatch} _id={data._id} />
  )
}

const UpdateInput = props => {
  const {data, className, countInCart, count, setCount, dispatch} = props

  return (
      <InputNumber
        className={` ${className}`}
        aria-label="quantity"
        // value={count}
        // min={data.min_quantity}
        // max={data.max_quantity}
        precision={data.unit === "Kg" ? 2 : 0}
        // onChange={value => {
        //   if (value >= data.min_quantity && value <= data.max_quantity) {
        //     setCount(value)
        //     if (countInCart)
        //       dispatch({
        //         type: "UPDATE_CART_ITEM",
        //         _id: data._id,
        //         count: value,
        //       })
        //   }
        // }}

        min={0}
        max={10}
        // step={1}
        // precision={2}
      />
  )
}

const ProductBase = props => {
  const { dispatch, data, view:View, countInCart } = props
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
    UpdateInput,
  }

  return (
      <View {...viewProps} />
  )
}

export default React.memo(ProductBase)
