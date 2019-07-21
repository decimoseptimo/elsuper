import React, { useReducer } from "react"

export const MiscContext = React.createContext()

export const MiscProvider = props => {
  return (
    <MiscContext.Provider
      value={useReducer(miscReducer, { isCartOpen: false })}
    >
      {props.children}
    </MiscContext.Provider>
  )
}

//Reducer
const miscReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_CART_OPEN":
      console.log(`TOGGLE_CART_OPEN: ${!state.isCartOpen}`)
      return { ...state, isCartOpen: !state.isCartOpen }
    case "SET_CART_OPEN":
      // console.log(`SET_CART_OPEN: ${action.isOpen}`)
      return { ...state, isCartOpen: action.isOpen }
    default:
      return state
  }
}
