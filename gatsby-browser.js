import React from 'react'
import "typeface-source-sans-pro"
import "normalize.css"
import {CartProvider} from "./src/state"

// const createStore = require("./src/state/createStore")
// const store = createStore()

export const wrapRootElement = ({ element }) => {
  return (
    <CartProvider>
      {element}
    </CartProvider>
  )
}