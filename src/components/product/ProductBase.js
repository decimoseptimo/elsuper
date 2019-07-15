import React, { useState, useEffect } from "react"
import css from "styled-jsx/css"

import Button from "../button"
import InputNumber from "../inputNumber"
import { round } from "../../utils"

const ProductBase = props => {
  const { id, title, unit, slug, images, min_quantity, max_quantity, countInCart, dispatch } = props
  const price = round(props.price)
  const [count, setCount] = useState(countInCart || 1)

  // console.log(`INIT: ${id}`)
  // console.log(`count: ${count}`)
  // console.log(`countInCart: ${countInCart}`)

  // console.log("20.00")
  // console.log(20.00)
  // console.log(round(20.00))
  // console.log(props.price)

  useEffect(()=>{
    if (countInCart)
      setCount(countInCart)
  }, [countInCart])

  const AddButton = () => {
    const { className, styles } = css.resolve`
    button {
      margin-bottom: 1rem;
    }`
    return (
      <Button
        className={className}
        onClick={() => {
          dispatch({
            type: "ADD_CART_ITEM",
            ...props,
            count: count,
          })
        }}
      >
        Agregar
        {styles}
      </Button>
    )
  }

  const RemoveButton = () => {
    const { className, styles } = css.resolve`
    button {
      margin-bottom: 1rem;
      background-color: #613458;
    }`
    return (
      <Button
        className={className}
        onClick={() => {
          dispatch({
            type: "REMOVE_CART_ITEM",
            id,
          })
        }}
      >
        Remover
        {styles}
      </Button>
    )
  }

  const ToggleButton = !countInCart ? AddButton : RemoveButton

  const UpdateInput = (className, styles) => {
    return (
      <>
        <InputNumber
          className={className}
          required={true}
          value={count}
          min={min_quantity}
          max={max_quantity}
          precision={unit == "Kg" ? 2 : 0}
          onChange={value => {
            if(value >= min_quantity && value <= max_quantity){
              setCount(value)
              if (countInCart)
                dispatch({ type: "UPDATE_CART_ITEM", id, count: value })
            }
          }}
        />
        {styles}
      </>
    )
  }

  return (
    <>
      {props.children({
        ...props,
        price,
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
