import React from "react"
import Autosuggest from "react-autosuggest"

const SearchBox = (props) => {
  return (
    <div className="searchBox">
      <Autosuggest {...props} ref={props.inputEl} />
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
    </div>
  )
}

export default SearchBox
