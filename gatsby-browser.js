import React from "react"
import "typeface-source-sans-pro"
import "normalize.css"

import { CartProvider } from "./src/state/cart"
import { MiscProvider } from "./src/state/misc"
import Layout from "./src/components/layout"

export const wrapRootElement = ({ element }) => (
  <MiscProvider>
    <CartProvider>{element}</CartProvider>
  </MiscProvider>
)

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}