import React from "react"
import queryString from "query-string"

import SEO from "../components/seo"
import ProductGrid from "../components/product/productGrid"
import useSearch from "../components/search/useSearch"

const Buscar = ({ location }) => {
  // console.log("buscar!")
  let query
  if (typeof window !== `undefined`) {
    query = queryString.parse(location.search).p
  }

  const products = useSearch(query)

  // ProductGrid expects a graphql-like result (i.e. 'node' element)
  const normalizedProducts = products.map((value) => {
    return { node: value }
  })

  return (
    <>
      <SEO title="Buscar" keywords={[`gatsby`, `application`, `react`]} />
      <h1>
        {normalizedProducts.length}{" "}
        {normalizedProducts.length === 1 ? "Resultado" : "Resultados"} para "
        {query}"
      </h1>
      <ProductGrid products={normalizedProducts} />{" "}
    </>
  )
}

export default Buscar
