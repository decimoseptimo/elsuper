import React, { useContext } from "react"

import SEO from "../components/seo"
import ProductGrid from "../components/product/productGrid"
import { MiscContext } from "../state/misc"
import useSearch from "../components/useSearch"

const Buscar = props => {
  console.log("buscar!")
  const [state, dispatch] = useContext(MiscContext)
  let query = ""

  try {
    // console.log('1')
    query = props.location.state.query
  } catch {
    // console.log('2')
    query = state.query
  }

  const products = useSearch(query)

  // ProductGrid expects a graphql-like result (i.e. 'node' element)
  const normalizedProducts = products.map(value => {
    return { node: value }
  })

  console.log(normalizedProducts)

  return (
    <>
      <SEO title="Buscar" keywords={[`gatsby`, `application`, `react`]} />
      <h1>
        {normalizedProducts.length}{" "}
        {normalizedProducts.length == 1 ? "Resultado" : "Resultados"} para "
        {query}"
      </h1>
      <ProductGrid products={normalizedProducts} />{" "}
    </>
  )
}

export default Buscar
