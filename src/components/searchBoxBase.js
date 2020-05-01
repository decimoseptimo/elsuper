import React, { useState } from "react"
import Highlighter from "react-highlight-words"
import { navigate } from "@reach/router"

const getSuggestionValue = suggestion => suggestion.title

const renderSuggestion = ({title}, asd) => <div className="title">
  <Highlighter
    highlightTag={({ children, highlightIndex }) => (
      <b className="highlighted-text">{children}</b>
    )}
    searchWords={asd.query.split(" ")}
    autoEscape={true}
    textToHighlight={title}
  />
</div>

const handleSearch = (query, results) => {
  console.log('hanldeSearch')
  // console.log(query)
  // navigate(`/buscar/?p=${query}`,{
  //   state: { query, products: results },
  // })
}

const SearchBoxBase = props => {
  const {view:View, results, query, setQuery, handleSearch2, dispatch} = props
  const [value, setValue] = useState(query)
  let suggestions = results

  const onChange = (event, { newValue }) => {
    setValue(newValue)
  }

  const clearInput = () => {
    setValue("")
  }

  const onKeyDown = (event) => {
    console.log('onKeyDown')
    if (event.key === 'Enter' && value !== "") {
    //   onSuggestionsClearRequested()
      handleSearch2(value)
    }
  }

  const inputProps = {
    placeholder: "Buscar productos",
    value,
    onChange,
    onKeyDown
  }

  const onSuggestionsFetchRequested = ({ value }) => {
    console.log('onSuggestionsFetchRequested')
    setQuery(value)
  }

  const onSuggestionsClearRequested = () => {
    console.log('onSuggestionsClearRequested')
    suggestions = []
  }

  const onSuggestionSelected = (e, asd) => {
    console.log('onSuggestionSelected')
    console.log(asd)
    // setValue("")
    // onSuggestionsClearRequested()
    navigate(`/${asd.suggestion.slug}`)
  }

  return (
    <View inputProps={inputProps} suggestions={suggestions} onSuggestionsFetchRequested={onSuggestionsFetchRequested} onSuggestionsClearRequested={onSuggestionsClearRequested} onSuggestionSelected={onSuggestionSelected} getSuggestionValue={getSuggestionValue} renderSuggestion={renderSuggestion} dispatch={dispatch} clearInput={clearInput} />
  )
}

export default SearchBoxBase
