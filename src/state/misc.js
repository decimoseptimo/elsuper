import React, { useReducer } from "react"

export const MiscContext = React.createContext()

export const MiscProvider = (props) => {
  return (
    <MiscContext.Provider
      value={useReducer(miscReducer, {
        isMobileSearchOpen: false,
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
    case "SET_MOBILE_SEARCH_OPEN":
      return { ...state, isMobileSearchOpen: action.isMobileSearchOpen }
    case "SET_QUERY":
      return { ...state, query: action.query }
    default:
      return state
  }
}
