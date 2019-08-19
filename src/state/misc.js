import React, { useReducer } from "react"

export const MiscContext = React.createContext()

export const MiscProvider = props => {
  return (
    <MiscContext.Provider
      value={useReducer(miscReducer, {
        isCartOpen: false,
        localSearchProducts: null,
        query: "",
      })}
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
    case "SET_LSP":
      console.log("SET_LSP!")
      console.log(action)

      return {
        ...state,
        localSearchProducts: action.localSearchProducts,
        query: action.query,
      }
    default:
      return state
  }
}
