import { graphql, useStaticQuery } from "gatsby"
import { useFlexSearch } from "react-use-flexsearch"

const useSearch = (query) => {
  const data = useStaticQuery(graphql`
    query {
      localSearchProducts {
        index
        store
      }
    }
  `)
  const { index, store } = data.localSearchProducts
  const results = useFlexSearch(query, index, store)
  return results
}

export default useSearch
