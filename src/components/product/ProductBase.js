import React, { useState } from "react"
import css from "styled-jsx/css"

import Button from "../button"
import InputNumber from "../inputNumber"

const ProductBase = props => {
  const { id, title, price, unit, slug, images, countInCart, dispatch } = props
  const [count, setCount] = useState(countInCart || 1)

  console.log(`INIT: ${id}`)
  console.log(countInCart || 1)

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
          min={1}
          max={100}
          precision={unit == "Kg" ? 2 : 0}
          onChange={value => {
            setCount(value)
            console.log(value)

            if (countInCart)
              dispatch({ type: "UPDATE_CART_ITEM", id, count: value })
          }}
        />
        {styles}
      </>
    )
  }

  return (
    <>
      {props.children({
        id,
        title,
        price,
        unit,
        slug,
        images,
        ToggleButton,
        UpdateInput,
      })}
    </>
  )
}

// ProductView.defaultProps = {
//   asd: "fgh"
// }

export default ProductBase
