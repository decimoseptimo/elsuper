import React, { useEffect, useState } from "react"
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
  const [inputRef, setInputRef] = useState()
  const [value, setValue] = useState(query)

  //console.log("SearchBoxBase")

  useEffect(() => {
    //console.log("useEffect")
    setValue(query)
  }, [query])

  const setInputRef2 = (autosuggest) => {
    //console.log("setInputRef2:")
    if (autosuggest !== null) {
      setInputRef(autosuggest.input)
      //console.log(inputRef)
    }
  }

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
    if (event.key === "Enter" && value !== "") {
      inputRef.blur()
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
    inputRef.blur()
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
    inputRef,
    focusInputOnSuggestionClick: false,
    ref: setInputRef2,
  }

  return <View {...autosuggestProps} />
}

export default SearchBoxBase
