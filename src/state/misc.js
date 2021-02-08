import React, { useReducer } from "react"

export const MiscContext = React.createContext(null)

export const MiscProvider = (props) => {
  return (
    <MiscContext.Provider
      value={useReducer(miscReducer, {
        isMobileSearchOpen: false,
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
    default:
      return state
  }
}
