import React, { useContext } from "react"

import SEO from "../components/seo"
import ProductGrid from "../components/product/productGrid"
import { MiscContext } from "../state/misc"

const Buscar = props => {
  //console.log("buscar!")
  const [state, dispatch] = useContext(MiscContext)
  //console.log(state)
  let products, query

  try {
    //console.log("1")
    products = props.location.state.products
    query = props.location.state.query
  } catch {
    //console.log("2")
    products = state.localSearchProducts || []
    query = state.query || ""
  }

  //ProductGrid expects a graphql-like result (i.e. 'node' element)
  const normalizedProducts = products.map(value => {
    return { node: value }
  })

  return (
    <>
      <SEO title="Buscar" keywords={[`gatsby`, `application`, `react`]} />
      <h1>
        {normalizedProducts.length} Resultados para "{query}"
      </h1>
      <ProductGrid products={normalizedProducts} />{" "}
    </>
  )
}

export default Buscar
