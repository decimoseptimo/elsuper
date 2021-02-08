import React, { useContext, useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useFlexSearch } from "react-use-flexsearch"
import { useLocation, navigate } from "@reach/router"
import queryString from "query-string"

import SearchBoxBase from "./searchBoxBase"
import SearchBox from "./searchBox"
import SearchBoxMobile from "./searchBoxMobile"
import { MiscContext } from "../../state/misc"

const Search = (props) => {
  //console.log("Search")
  const data = useStaticQuery(graphql`
    query {
      localSearchProducts {
        index
        store
      }
    }
  `)
  const { index, store } = data.localSearchProducts
  const [state, dispatch] = useContext(MiscContext)
  const location = useLocation()
  const searchQueryParam = queryString.parse(location.search).p ?? ""
  const [query, setQuery] = useState(searchQueryParam)

  useEffect(() => {
    setQuery(searchQueryParam)
  }, [searchQueryParam])

  const results = useFlexSearch(query, index, store)

  const normalizeResults = results.map(({ title, slug }) => {
    return { title, slug }
  })

  const handleSearch = (query) => {
    //console.log('handleSearch')
    dispatch({
      type: "SET_MOBILE_SEARCH_OPEN",
      isMobileSearchOpen: false,
    })
    navigate(`/buscar/?p=${query}`)
  }

  const searchBoxProps = {
    results: normalizeResults.slice(0, 10) || null,
    query,
    setQuery,
    dispatch,
    handleSearch,
  }

  return (
    <>
      <SearchBoxBase {...searchBoxProps} view={SearchBox} />
      {state.isMobileSearchOpen && (
        <SearchBoxBase {...searchBoxProps} view={SearchBoxMobile} />
      )}
    </>
  )
}

export default Search
