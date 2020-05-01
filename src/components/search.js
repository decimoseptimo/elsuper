import React, { useContext, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useFlexSearch } from "react-use-flexsearch"
import { Location, navigate } from "@reach/router"
import queryString from "query-string"

import SearchBoxBase from "./searchBoxBase"
import SearchBox from "./searchBox"
import SearchBoxMobile from "./searchBoxMobile"
import { MiscContext } from "../state/misc"

const Search = props => {
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
  const [query, setQuery] = useState(() => {
    if (props.search && props.search.p) {
      return props.search.p
    }
    return ""
  })

  // const keywords = query.split(" ")
  const results = useFlexSearch(query, index, JSON.parse(store))

  if (
    props.location.pathname === "/buscar/" &&
    props.search &&
    props.search.p &&
    results.length &&
    !state.localSearchProducts
  ) {
    dispatch({
      type: "SET_LSP",
      localSearchProducts: results,
      query: query,
    })
  }

  // const mql = window.matchMedia("(min-width: 570px)")
  // console.log("mql:")
  // console.log(mql.matches)

  const normalizeResults = results.map(({ title, slug }) => {
    return { title, slug }
  })

  // const handleSearch = () => {
  //   if (query.trim() !== "") {
  //     dispatch({
  //       type: "SET_MOBILE_SEARCH_OPEN",
  //       isMobileSearchOpen: false,
  //     })
  //     navigate(`/buscar/?p=${query}`, {
  //       state: { query: query, products: results },
  //     })
  //   }
  // }

  console.log("Search")
  console.log(query)
  console.log(results)

  const handleSearch2 = (query) => {
    console.log('handleSearch2')
    console.log(query)

    navigate(`/buscar/?p=${query}`,{
      state: { query: "", products: results },
    })
  }

  const searchBoxProps = {
    results: normalizeResults.slice(0, 10),
    query,
    setQuery,
    dispatch,
    handleSearch2,
    // onSearchChange: (e, { value }) => {
    //   setQuery(value)
    // },
    // onResultSelect: (e, { result }) => {
    //   dispatch({
    //     type: "SET_MOBILE_SEARCH_OPEN",
    //     isMobileSearchOpen: false,
    //   })
    //   navigate(`/${result.slug}/?p=${query}`)
    // },
    // onButtonClick: () => {
      //console.log("click")
      // handleSearch()
    // },
    // onKeyDown: e => {
    //   if (e.key === "Enter") {
    //     //console.log("down")
    //     e.target.blur()
    //     // handleSearch()
    //   }
    // },
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
export default props => (
  <Location>
    {locationProps => (
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
