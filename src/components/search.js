import React, { useContext, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useFlexSearch } from "react-use-flexsearch"
import Highlighter from "react-highlight-words"
import { Location, navigate } from "@reach/router"
import queryString from "query-string"

import SearchBox from "./searchBox"
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
  const keywords = query.split(" ")
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
  // const results2 = [
  //   { title: "pineapple application apptitude" },
  //   { title: "apple app" },
  // ]
  const simpleResultRenderer = ({ title }) => (
    <div key={title} className="content">
      <div className="title">{title}</div>
    </div>
  )
  const highlightResultRenderer = ({ title }) => (
    <div key={title} className="content">
      <div className="title">
        <Highlighter
          highlightTag={({ children, highlightIndex }) => (
            <b className="highlighted-text">{children}</b>
          )}
          searchWords={keywords}
          autoEscape={true}
          textToHighlight={title}
        />
      </div>
    </div>
  )
  const handleSearch = () => {
    if (query.trim() !== "") {
      dispatch({
        type: "SET_MOBILE_SEARCH_OPEN",
        isMobileSearchOpen: false,
      })
      navigate(`/buscar/?p=${query}`, {
        state: { query: query, products: results },
      })
    }
  }

  const inputSearchProps = {
    resultRenderer: highlightResultRenderer,
    results: normalizeResults.slice(0, 10),
    value: query,
    placeholder: "¿Que estás buscando?",
    onSearchChange: (e, { value }) => {
      setQuery(value)
    },
    onResultSelect: (e, { result }) => {
      dispatch({
        type: "SET_MOBILE_SEARCH_OPEN",
        isMobileSearchOpen: false,
      })
      navigate(`/${result.slug}/?p=${query}`)
    },
    onButtonClick: () => {
      //console.log("click")
      handleSearch()
    },
    onKeyDown: e => {
      if (e.key === "Enter") {
        //console.log("down")
        e.target.blur()
        handleSearch()
      }
    },
  }

  return (
    <>
      <SearchBox {...inputSearchProps} />
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
