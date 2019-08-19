import React, { useContext, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useLunr } from "react-lunr"
import { useFlexSearch } from "react-use-flexsearch"
import Highlighter from "react-highlight-words"
import { Location, navigate } from "@reach/router"
import queryString from "query-string"

import InputSearch from "../components/inputSearch"
import { MiscContext } from "../state/misc"

const InputSearchMain = props => {
  console.log("mainInputSearch!")
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
    console.log("useState")
    if (props.search && props.search.p) {
      return props.search.p
    }
    return ""
  })
  const keywords = query.split(" ")
  const results = useFlexSearch(query, index, JSON.parse(store))

  if (
    props.location.pathname == "/buscar/" &&
    props.search &&
    props.search.p &&
    results.length &&
    !state.localSearchProducts
  ) {
    console.log("@")
    dispatch({
      type: "SET_LSP",
      localSearchProducts: results,
      query: query,
    })
  }

  console.log(`query: ${query}`)
  console.log("results:")
  console.log(results)
  console.log("state.localSearchProducts:")
  console.log(state.localSearchProducts)

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
    if (query.trim() != "") {
      navigate(`/buscar/?p=${query}`, {
        state: { query: query, products: results },
      })
    }
  }

  return (
    <>
      <InputSearch
        resultRenderer={highlightResultRenderer}
        results={normalizeResults.slice(0, 10)}
        value={query}
        onSearchChange={(e, { value }) => {
          setQuery(value)
        }}
        onResultSelect={(e, { result }) => {
          navigate(`/${result.slug}/?p=${query}`)
        }}
        onButtonClick={() => {
          console.log("click")
          handleSearch()
        }}
        onKeyDown={e => {
          if (e.key === "Enter") {
            console.log("down")
            e.target.blur()
            handleSearch()
          }
        }}
      />
    </>
  )
}

// export default InputSearchMain
export default props => (
  <Location>
    {locationProps => (
      <InputSearchMain
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
