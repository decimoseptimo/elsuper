import React, { useState } from "react"
import Autosuggest from "react-autosuggest"

const data = [
  {
    text: "Apple",
  },
  {
    text: "Banana",
  },
  {
    text: "Cherry",
  },
  {
    text: "Grapefruit",
  },
  {
    text: "Lemon",
  },
]

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length

  return inputLength === 0
    ? []
    : data.filter(
        i => i.text.toLowerCase().slice(0, inputLength) === inputValue
      )
}

const getSuggestionValue = suggestion => suggestion.text

const renderSuggestion = suggestion => <div>{suggestion.text}</div>

const SearchBox = props => {
  const [value, setValue] = useState("")
  const [suggestions, setSuggestions] = useState([])

  const onChange = (event, { newValue }) => {
    setValue(newValue)
  }

  const inputProps = {
    placeholder: "Buscar",
    value,
    onChange,
  }

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value))
  }

  const onSuggestionsClearRequested = () => {
    setSuggestions([])
  }

  return (
    <>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
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
          font-size: 0.9rem;
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
          font-size: 0.9rem;
        }

        .react-autosuggest__suggestion {
          cursor: pointer;
          overflow: hidden;
          padding: 0.5rem 1rem 0.65rem;
          color: rgba(0, 0, 0, 0.87);
          line-height: 1.33;
        }
      `}</style>
    </>
  )
}

export default SearchBox
