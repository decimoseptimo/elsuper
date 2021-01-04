import React, { useContext, useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useFlexSearch } from "react-use-flexsearch"
import { Location, navigate } from "@reach/router"
import queryString from "query-string"

import SearchBoxBase from "./searchBoxBase"
import SearchBox from "./searchBox"
import SearchBoxMobile from "./searchBoxMobile"
import { MiscContext } from "../state/misc"

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
  const querystring = (() => {
    try {
      return props.search.p
    } catch {
      return ""
    }
  })()
  const [query, setQuery] = useState(querystring)
  useEffect(() => {
    //console.log("useEffect")
    setQuery(querystring)
  }, [querystring])

  if (
    props.location.pathname === "/buscar/" &&
    props.search &&
    props.search.p &&
    !state.query
  ) {
    //console.log('dispatch')
    dispatch({
      type: "SET_QUERY",
      query: query,
    })
  }

  const results = useFlexSearch(query, index, store)

  // const mql = window.matchMedia("(min-width: 570px)")
  // console.log("mql:")
  // console.log(mql.matches)

  const normalizeResults = results.map(({ title, slug }) => {
    return { title, slug }
  })

  const handleSearch = (query) => {
    //console.log('handleSearch')
    //console.log(query)
    dispatch({
      type: "SET_MOBILE_SEARCH_OPEN",
      isMobileSearchOpen: false,
    })
    navigate(`/buscar/?p=${query}`, {
      state: { query },
    })
  }

  const searchBoxProps = {
    results: normalizeResults.slice(0, 10),
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

// export default InputSearchMain
export default (props) => (
  <Location>
    {(locationProps) => (
      <Search
        location={locationProps.location}
        search={
          locationProps.location.search
            ? queryString.parse(locationProps.location.search)
            : null
        }
        {...props}
      />
    )}
  </Location>
)
