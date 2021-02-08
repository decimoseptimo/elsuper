import React, { useEffect, useState, useRef } from "react"
import Highlighter from "react-highlight-words"

const getSuggestionValue = (suggestion) => suggestion.title

const renderSuggestion = ({ title }, asd) => (
  <div className="title">
    <Highlighter
      highlightTag={({ children, highlightIndex }) => (
        <b className="highlighted-text">{children}</b>
      )}
      searchWords={asd.query.split(" ")}
      autoEscape={true}
      textToHighlight={title}
    />
  </div>
)

const SearchBoxBase = (props) => {
  const { view: View, query, setQuery, handleSearch, dispatch } = props
  let { results: suggestions } = props
  const inputEl = useRef(null)
  const [value, setValue] = useState(query)

  //console.log("SearchBoxBase")

  useEffect(() => {
    //console.log("useEffect")
    setValue(query)
  }, [query])

  const clearInput = () => {
    //console.log('clearInput')
    setValue("")
  }

  const onChange = (event, { newValue }) => {
    //console.log('onChange')
    setValue(newValue)
  }

  const onKeyDown = (event) => {
    //console.log('onKeyDown')
    // console.log(inputEl.current)
    if (event.key === "Enter" && value !== "") {
      inputEl.current.input.blur()
      handleSearch(value)
    }
  }

  const onSuggestionsFetchRequested = ({ value }) => {
    //console.log('onSuggestionsFetchRequested')
    setQuery(value)
  }

  const onSuggestionsClearRequested = () => {
    //console.log('onSuggestionsClearRequested')
    suggestions = []
  }

  const onSuggestionSelected = (e, asd) => {
    //console.log('onSuggestionSelected')
    inputEl.current.input.blur()
    setQuery(asd.suggestionValue)
    handleSearch(asd.suggestionValue)
  }

  const inputProps = {
    placeholder: "Buscar productos",
    value,
    onChange,
    onKeyDown,
  }

  const autosuggestProps = {
    suggestions,
    onSuggestionsFetchRequested,
    onSuggestionsClearRequested,
    onSuggestionSelected,
    getSuggestionValue,
    renderSuggestion,
    inputProps,
    dispatch,
    clearInput,
    focusInputOnSuggestionClick: false,
    inputEl,
  }

  return <View {...autosuggestProps} />
}

export default SearchBoxBase
