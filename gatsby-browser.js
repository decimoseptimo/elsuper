import React from 'react'
import "typeface-source-sans-pro"
import "normalize.css"
import {CartProvider} from "./src/state/state"

export const wrapRootElement = ({ element }) => {
  return (
    <CartProvider>
      {element}
    </CartProvider>
  )
}