import React, { useContext, useState } from "react"
import css from "styled-jsx/css"

import Button from "../button"
import InputNumber from "../inputNumber"
import { CartContext, itemExists, findIndex } from "../../state"

const ProductBase = props => {
  const { id, title, price, unit, slug, images } = props
  const [state, dispatch] = useContext(CartContext)
  const [inputValue, setInputValue] = useState(1)
  const productInCart = itemExists(state, id)

  // const productIndex = findIndex(state, id)
  // const initState = () => {
  //   return (productIndex >= 0) ? setInputValue(state[productIndex].count) : 1;
  // }

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
            count: inputValue,
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

  const ToggleButton = !productInCart ? AddButton : RemoveButton

  const UpdateInput = (className, styles) => {
    return (
      <>
        <InputNumber
          className={className}
          required={true}
          value={inputValue}
          min={1}
          max={100}
          precision={unit == "Kg" ? 2 : 0}
          onChange={value => {
            setInputValue(value)
            if (productInCart)
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
