import React, { useReducer } from "react"

export const MiscContext = React.createContext()

export const MiscProvider = props => {
  return (
    <MiscContext.Provider
      value={useReducer(miscReducer, {
        isCartOpen: false,
        isCategoriesOpen: false,
        isMobileSearchOpen: false,
        // localSearchProducts: null,
        query: null,
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
    case "TOGGLE_MY_ACCOUNT_OPEN":
      return { ...state, isMyAccountOpen: !state.isMyAccountOpen }
    case "TOGGLE_CATEGORIES_OPEN":
      return { ...state, isCategoriesOpen: !state.isCategoriesOpen }
    case "CLOSE_CATEGORIES":
      return { ...state, isCategoriesOpen: false }
    case "CLOSE_MY_ACCOUNT":
      return { ...state, isMyAccountOpen: false }
    case "CLOSE_CART":
      return { ...state, isCartOpen: false }
    case "SET_MOBILE_SEARCH_OPEN":
      return { ...state, isMobileSearchOpen: action.isMobileSearchOpen }
    case "SET_QUERY":
      return { ...state, query: action.query }
    default:
      return state
  }
}
