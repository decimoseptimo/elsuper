import React from "react"
import "typeface-source-sans-pro"
import "normalize.css"
// import queryString from "query-string"

import { CartProvider } from "./src/state/cart"
import { MiscProvider } from "./src/state/misc"
import Layout from "./src/components/layout"

// Logs when the client route changes
// export const onRouteUpdate = ({ location }) => {
// console.log(
//   "new pathname",
//   queryString.parse(location.search, { arrayFormat: "bracket", sort: false })
// )
// getQueryRoute(location.search)
// }

// const getQueryRoute = (querystring) => {
//   let paths = querystring.filter((item = null) => item)
//   console.log(paths)
// }

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
