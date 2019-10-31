import React, { useReducer } from "react"

export const MiscContext = React.createContext()

export const MiscProvider = props => {
  return (
    <MiscContext.Provider
      value={useReducer(miscReducer, {
        isCartOpen: false,
        isCatalogOpen: false,
        isMobileSearchOpen: false,
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
      return { ...state, isCartOpen: !state.isCartOpen }
    case "TOGGLE_CATALOG_OPEN":
      return { ...state, isCatalogOpen: !state.isCatalogOpen }
    case "CLOSE_CATALOG":
      return { ...state, isCatalogOpen: false }
    case "SET_MOBILE_SEARCH_OPEN":
      return { ...state, isMobileSearchOpen: action.isMobileSearchOpen }
    case "SET_LSP":
      return {
        ...state,
        localSearchProducts: action.localSearchProducts,
        query: action.query,
      }
    default:
      return state
  }
}
