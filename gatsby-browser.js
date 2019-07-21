import React from "react"
import "typeface-source-sans-pro"
import "normalize.css"

import { CartProvider } from "./src/state/cart"
import { MiscProvider } from "./src/state/misc"

export const wrapRootElement = ({ element }) => (
  <MiscProvider>
    <CartProvider>{element}</CartProvider>
  </MiscProvider>
)