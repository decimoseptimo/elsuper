import React from "react"
import "typeface-source-sans-pro"
import "normalize.css"

import { CartProvider } from "./src/state/cart"
import { MiscProvider } from "./src/state/misc"
import Layout from "./src/components/layout"

// sets prevPath
export const onRouteUpdate = ({ location }) => {
  window.locations = window.locations || [document.referrer]
  window.locations.push(window.location.href)
  const prevPath = window.locations[window.locations.length - 2]
  if (location && location.state) {
    location.state.prevPath = prevPath
  }
}

export const shouldUpdateScroll = ({ routerProps }) => {
  const { disableScrollUpdate } = routerProps.location.state || {}
  return !disableScrollUpdate
}

export const wrapRootElement = ({ element }) => {
  return (
    <MiscProvider>
      <CartProvider>{element}</CartProvider>
    </MiscProvider>
  )
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
