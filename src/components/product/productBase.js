import React, { useState, useEffect } from "react"

import Button from "../button"
import useHasMounted from "../useHasMounted"
import InputNumber from "../inputNumber"
import { round } from "../../utils"
// import { FaShoppingCart } from "react-icons/fa"

const AddButton = props => {
  return (
    <Button
      className={`round primary product ${props.className}`}
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
  return <>
    <Button
      className={`round primary product primary-active ${props.className}`}
      onClick={() => {
        props.dispatch({
          type: "REMOVE_CART_ITEM",
          _id: props._id,
        })
      }}
    >
      Remover
    </Button>
    <style jsx global>{`
    .button.primary-active {
      background-color: #613458;
      color: #fff;
    }
    `}</style>
  </>
}

const ToggleButton = props => {
  //see: https://github.com/gatsbyjs/gatsby/issues/17914
  // https://joshwcomeau.com/react/the-perils-of-rehydration/
  const hasMounted = useHasMounted()

  return !props.countInCart ? (
    <AddButton key={hasMounted} {...props} />
  ) : (
    <RemoveButton key={hasMounted} {...props} />
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
                _id: props._id,
                count: value,
              })
          }
        }}
      />
    </>
  )
}

const ProductBase = props => {
  const { view:View, countInCart } = props
  const price = round(props.price)
  const [count, setCount] = useState(countInCart || 1)

  useEffect(() => {
    if (countInCart) setCount(countInCart)
  }, [countInCart])

  const viewProps = {
    ...props,
    price,
    count,
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
