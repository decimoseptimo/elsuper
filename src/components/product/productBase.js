import React, { useState, useEffect } from "react"

import Button from "../button"
import useHasMounted from "../useHasMounted"
import InputNumber from "../inputNumber"
// import { round } from "../../utils"
// import { FaShoppingCart } from "react-icons/fa"

const AddButton = props => {
  return (
    <Button
      className={`round primary product ${props.className}`}
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
  const {data, countInCart, count, dispatch} = props

  //see: https://github.com/gatsbyjs/gatsby/issues/17914
  // https://joshwcomeau.com/react/the-perils-of-rehydration/
  const hasMounted = useHasMounted()

  return !countInCart ? (
    <AddButton className="toggleButton" key={hasMounted} dispatch={dispatch} data={data} count={count} />
  ) : (
    <RemoveButton className="toggleButton" key={hasMounted} dispatch={dispatch} _id={data._id} />
  )
}

const UpdateInput = props => {
  const {data, className, countInCart, count, setCount, dispatch} = props

  return (
    <>
      <InputNumber
        className={`updateInput ${className}`}
        aria-label="quantity"
        required={true}
        value={count}
        min={data.min_quantity}
        max={data.max_quantity}
        precision={data.unit === "Kg" ? 2 : 0}
        onChange={value => {
          if (value >= data.min_quantity && value <= data.max_quantity) {
            setCount(value)
            if (countInCart)
              dispatch({
                type: "UPDATE_CART_ITEM",
                _id: data._id,
                count: value,
              })
          }
        }}
      />
    </>
  )
}

const ProductBase = props => {
  const { dispatch, data, view:View, countInCart } = props
  // const price = round(props.price)
  const [count, setCount] = useState(countInCart || 1)

  useEffect(() => {
    if (countInCart) setCount(countInCart)
  }, [countInCart])

  const viewProps = {
    data,
    // price,
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
