import React, { useReducer } from "react"
import { getLocalState, setLocalState } from "./localState"

export const CartContext = React.createContext()

export const CartProvider = (props) => {
  const initialState = getLocalState() || []
  const useReducer1 = useReducer(cartReducer, initialState)
  setLocalState(useReducer1[0])

  return (
    <CartContext.Provider value={useReducer1}>
      {props.children}
    </CartContext.Provider>
  )
}

//Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART_ITEM":
      if (itemExists(state, action.id)) return state
      return [
        ...state,
        {
          _id: action._id,
          title: action.title,
          price: action.price,
          unit: action.unit,
          slug: action.slug,
          images: action.images,
          count: action.count,
          min_quantity: action.min_quantity,
          max_quantity: action.max_quantity,
        },
      ]
    case "REMOVE_CART_ITEM":
      return state.filter((i) => {
        return i._id !== action._id
      })
    case "EMPTY_CART":
      return []
    case "UPDATE_CART_ITEM":
      return state.map((i) => {
        if (i._id === action._id) {
          return { ...i, count: action.count }
        }
        return i
      })
    default:
      return state
  }
}

const itemExists = (state, _id) => {
  let index = state.findIndex((i) => i._id === _id)
  if (index >= 0) return true
  return false
}

export const findIndex = (state, _id) => {
  return state.findIndex((i) => i._id === _id)
}
