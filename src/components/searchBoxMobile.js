import React, { useEffect } from "react"
import Autosuggest from "react-autosuggest"
import { TiArrowLeft } from "react-icons/ti"
import {
  IoIosArrowBack,
} from "react-icons/io"
import { MdClear, MdClose, MdChevronLeft, MdArrowBack } from "react-icons/md"
import BaseButton from "../components/baseButton"

const SearchBoxMobile = props => {
  const {inputProps, suggestions, onSuggestionsFetchRequested, onSuggestionsClearRequested, onSuggestionSelected, getSuggestionValue, renderSuggestion, dispatch, clearInput} = props
  // const propsClone = Object.assign({}, props)
  // delete propsClone.onButtonClick
  // delete propsClone.setQuery
  // delete propsClone.dispatch

  const icons = [
    TiArrowLeft,
    IoIosArrowBack,
    MdClear,
    MdClose,
    MdChevronLeft,
    MdArrowBack,
  ]

  let inputRef

  const setInputRef = autosuggest => {
    if (autosuggest !== null) {
      inputRef = autosuggest.input;
    }
  }

  useEffect(
    () => {
      console.log('FCS!')
      inputRef.focus();
    },
  )

  return (
    <div className="searchBoxMobile">
      <BaseButton
        onClick={() => {
          dispatch({
            type: "SET_MOBILE_SEARCH_OPEN",
            isMobileSearchOpen: false,
          })
        }}
        className="backButton"
        aria-label="back button"
      >
        <IoIosArrowBack />
      </BaseButton>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        onSuggestionSelected={onSuggestionSelected}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        ref={setInputRef}
      />
      {inputProps.value && (
        <BaseButton
          onClick={clearInput}
          className="emptyButton"
          aria-label="empty button"
        >
          <MdClose />
        </BaseButton>
      )}
      <div
        className="searchOverlay"
        onClick={() => {
          dispatch({
            type: "SET_MOBILE_SEARCH_OPEN",
            isMobileSearchOpen: false,
          })
        }}
      />
      <style jsx global>{`
        .searchBoxMobile {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          background: #2a2a2a;
          z-index: 1;
        }

        .backButton {
          font-size: 150%;
          padding-left: 1rem;
          padding-right: 0;
          position: absolute;
          // top: 1.5rem;
          height: 100%;
          z-index: 1;
        }

        .backButton svg {
          color: #fff;
        }

        .emptyButton {
          font-size: 150%;
          padding-left: 0;
          padding-right: 1rem;
          position: absolute;
          height: 100%;
          top: 0;
          right: 0;
        }

        .emptyButton svg {
          color: #888;
        }

        button svg {
          margin-top: 4px;
        }

        .searchOverlay {
          position: fixed;
          // z-index: 1000;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          opacity: 1;
          transition: opacity 0.3s ease 0s;
        }

        .searchBoxMobile .react-autosuggest__suggestions-list {
          // width: 100%;
          // margin-top: 0;
          // border-top-left-radius: 0;
          // border-top-right-radius: 0;
          // max-width: none;
          // position: absolute;
          // left: 0;
          z-index: 1;
        }

        // .searchBoxMobile .react-autosuggest__container .prompt {
        //   border-radius: 0.28571429rem;
        // }

        .searchBoxMobile .react-autosuggest__suggestion {
          border-bottom: none;
          padding: .75rem 1.14285714rem;
        }
        .searchBoxMobile .react-autosuggest__suggestion:first-child {
          padding-top: 1.3rem;
        }
        .searchBoxMobile .react-autosuggest__suggestion:last-child {
          padding-bottom: 1.4rem;
        }

        // .searchBoxMobile .react-autosuggest__suggestion .title {
        //   font-weight: normal;
        // }
        //
        // .searchBoxMobile .react-autosuggest__container .action {
        //   background: none;
        // }
        //
        // .searchBoxMobile .react-autosuggest__container .action:hover {
        //   background: none;
        // }
        //
        // .searchBoxMobile .react-autosuggest__container {
        //   width: 100%;
        // }

        .searchBoxMobile .react-autosuggest__container > input {
          color: #888;
          padding: 0.55rem 1rem 0.65rem;
          background: #2a2a2a;
          padding: 1.6rem 0 1.8rem;
          border: none;
          margin: 0 3rem;
          padding-left: 0.2rem;
        }

        // .searchBoxMobile .react-autosuggest__container > input:focus {
        // }

        .searchBoxMobile .react-autosuggest__container > input::-webkit-input-placeholder {
          /* Chrome/Opera/Safari */
          color: #888;
        }
        .searchBoxMobile .react-autosuggest__container > input:focus::-webkit-input-placeholder {
          /* Chrome/Opera/Safari */
          color: #888;
        }
        .searchBoxMobile .react-autosuggest__container > input::-moz-placeholder {
          /* Firefox 19+ */
          color: #888;
        }
        .searchBoxMobile .react-autosuggest__container > input:-ms-input-placeholder {
          /* IE 10+ */
          color: #888;
        }
        .searchBoxMobile .react-autosuggest__container > input:-moz-placeholder {
          /* Firefox 18- */
          color: #888;
        }

        // .searchBoxMobile .ui.icon.input > i.icon {
        //   opacity: 0.6;
        // }
        //
        // .searchBoxMobile .ui.icon.input > input:focus ~ i.icon {
        //   opacity: 0.7;
        // }

        // .searchBoxMobile .ui.action.input > .button {
        //   background: #363636;
        //   border: 1px solid #3e3e3e;
        //   font-size: 130%;
        //   padding: 0.55rem 0.65rem 0.65rem 0.75rem;
        //   color: #737373;
        // }
        //
        // .searchBoxMobile .ui.button .icon svg {
        //   position: relative;
        //   top: 1px;
        //   background: #393939;
        //   color: #888;
        // }
        //
        // .searchBoxMobile .ui.active.button:active,
        // .searchBoxMobile .ui.button:active {
        //   background: #393939;
        // }
        //
        // .searchBoxMobile .ui.button:focus {
        //   background: #393939;
        // }
        //
        // .searchBoxMobile
        //   .ui.action.input:not([class*="left action"])
        //   > input:focus {
        // }
        //
        // .searchBoxMobile .ui.button:hover {
        //   background-color: #3e3e3e;
        // }
      `}</style>
    </div>
  )
}

export default SearchBoxMobile