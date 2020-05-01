import React, { useState } from "react"
import Autosuggest from "react-autosuggest"
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

const SearchBox = props => {
  const {results, query, setQuery, handleSearch2} = props
  const [value, setValue] = useState(query)
  let suggestions = results

  const onChange = (event, { newValue }) => {
    setValue(newValue)
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
    <>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        onSuggestionSelected={onSuggestionSelected}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
      <style jsx global>{`
        .react-autosuggest__container {
          position: relative;
        }

        .react-autosuggest__input {
          width: 100%;
          padding: 0.5rem 1rem 0.65rem;
          border: 1px solid #3a3a3a;
          background: #363636;
          font-size: 1.1rem;
          color: darkseagreen;
          border-radius: 0.28571429rem;
        }

        .react-autosuggest__input:focus {
          color: darkseagreen;
          background: #3e3e3e;
          border-color: #393939;
          outline: 0;
        }

        .react-autosuggest__input::-webkit-input-placeholder {
          /* Chrome/Opera/Safari */
          color: darkseagreen;
        }
        .react-autosuggest__input:focus::-webkit-input-placeholder {
          /* Chrome/Opera/Safari */
          color: darkseagreen;
        }
        .react-autosuggest__input::-moz-placeholder {
          /* Firefox 19+ */
          color: darkseagreen;
        }
        .react-autosuggest__input:-ms-input-placeholder {
          /* IE 10+ */
          color: darkseagreen;
        }
        .react-autosuggest__input:-moz-placeholder {
          /* Firefox 18- */
          color: darkseagreen;
        }

        .react-autosuggest__suggestions-list {
          width: 100%;
          position: absolute;
          background: #fff;
          border-radius: 0.28571429rem;
          box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12),
            0 2px 10px 0 rgba(34, 36, 38, 0.15);
          border: 1px solid #d4d4d5;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          font-size: 1rem;
        }

        .react-autosuggest__suggestion {
          cursor: pointer;
          overflow: hidden;
          padding: 0.5rem 1rem 0.65rem;
          color: rgba(0, 0, 0, 0.87);
          line-height: 1.33;
        }
        
        .react-autosuggest__suggestion--highlighted {
          background-color: #f3f4f5;
        }
      `}</style>
    </>
  )
}

export default SearchBox
