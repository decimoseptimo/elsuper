import React from "react"
import { Search, Input } from "semantic-ui-react"
import { MdSearch } from "react-icons/md"
import { TiArrowLeft } from "react-icons/ti"
import {
  IoAndroidClose,
  IoAndroidArrowBack,
  IoClose,
  IoCloseRound,
  IoChevronLeft,
  IoIosArrowBack,
  IoIosArrowLeft,
  IoIosCloseEmpty,
} from "react-icons/io"
import { MdClear, MdClose, MdChevronLeft, MdArrowBack } from "react-icons/md"
import BaseButton from "../components/baseButton"

const inputSearchMobile = props => {
  const propsClone = Object.assign({}, props)
  delete propsClone.onButtonClick
  delete propsClone.setQuery
  delete propsClone.dispatch

  const icons = [
    TiArrowLeft,
    // IoAndroidClose,
    // IoAndroidArrowBack,
    // IoClose,
    // IoCloseRound,
    // IoChevronLeft,
    IoIosArrowBack,
    // IoIosArrowLeft,
    // IoIosCloseEmpty,
    MdClear,
    MdClose,
    MdChevronLeft,
    MdArrowBack,
  ]

  //console.log("inputSearchMobile")

  return (
    <div className="inputSearchMobile">
      <BaseButton
        onClick={() => {
          props.dispatch({
            type: "SET_MOBILE_SEARCH_OPEN",
            isMobileSearchOpen: false,
          })
        }}
        className="backButton"
        aria-label="back button"
      >
        <IoIosArrowBack />
      </BaseButton>
      {/*<BaseButton className="backButton" aria-label="back button">*/}
      {/*<MdArrowBack />*/}
      {/*</BaseButton>*/}
      <Search
        loading={false}
        minCharacters={1}
        showNoResults={false}
        noResultsMessage="Sin resultados"
        icon={null}
        placeholder="Buscar..."
        input={{
          // onBlur: () => {
          //   props.dispatch({
          //     type: "SET_MOBILE_SEARCH_OPEN",
          //     isMobileSearchOpen: false,
          //   })
          // },
          ref: r => {
            if (r && r.inputRef) {
              r.inputRef.current.focus()
            }
          },
        }}
        // onBlur={
        // props.dispatch({
        //   type: "SET_MOBILE_SEARCH_OPEN",
        //   isMobileSearchOpen: false,
        // })
        //}
        {...propsClone}
      />
      {props.value && (
        <BaseButton
          onClick={() => {
            //console.log("empty")
            props.setQuery("")
          }}
          className="emptyButton"
          aria-label="empty button"
        >
          <MdClose />
        </BaseButton>
      )}
      <div
        className="searchOverlay"
        onClick={() => {
          props.dispatch({
            type: "SET_MOBILE_SEARCH_OPEN",
            isMobileSearchOpen: false,
          })
        }}
      />
      <style jsx global>{`
        .inputSearchMobile {
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

        .inputSearchMobile .react-autosuggest__container {
          width: 100%;
          margin-top: 0;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          max-width: none;
          position: absolute;
          left: 0;
        }

        .inputSearchMobile .react-autosuggest__container .prompt {
          border-radius: 0.28571429rem;
        }

        .inputSearchMobile .react-autosuggest__suggestions-list {
          border-bottom: none;
        }
        .inputSearchMobile .react-autosuggest__suggestions-list:first-child {
          padding-top: 1.3rem;
        }
        .inputSearchMobile .react-autosuggest__suggestions-list:last-child {
          padding-bottom: 1.3rem;
        }

        .inputSearchMobile .react-autosuggest__suggestions-list .title {
          font-weight: normal;
        }

        .inputSearchMobile .react-autosuggest__container .action {
          background: none;
        }

        .inputSearchMobile .react-autosuggest__container .action:hover {
          background: none;
        }

        .inputSearchMobile .react-autosuggest__container {
          width: 100%;
        }

        .inputSearchMobile .react-autosuggest__container > input {
          color: #888;
          padding: 0.55rem 1rem 0.65rem;
          background: #2a2a2a;
          padding: 1.7rem 0 1.9rem;
          border: none;
          margin: 0 3rem;
          padding-left: 0.2rem;
        }

        .inputSearchMobile .react-autosuggest__container > input:focus {
        }

        .inputSearchMobile .react-autosuggest__container > input::-webkit-input-placeholder {
          /* Chrome/Opera/Safari */
          color: #888;
        }
        .inputSearchMobile .react-autosuggest__container > input:focus::-webkit-input-placeholder {
          /* Chrome/Opera/Safari */
          color: #888;
        }
        .inputSearchMobile .react-autosuggest__container > input::-moz-placeholder {
          /* Firefox 19+ */
          color: #888;
        }
        .inputSearchMobile .react-autosuggest__container > input:-ms-input-placeholder {
          /* IE 10+ */
          color: #888;
        }
        .inputSearchMobile .react-autosuggest__container > input:-moz-placeholder {
          /* Firefox 18- */
          color: #888;
        }

        .inputSearchMobile .ui.icon.input > i.icon {
          opacity: 0.6;
        }

        .inputSearchMobile .ui.icon.input > input:focus ~ i.icon {
          opacity: 0.7;
        }

        .inputSearchMobile .ui.action.input > .button {
          background: #363636;
          border: 1px solid #3e3e3e;
          font-size: 130%;
          padding: 0.55rem 0.65rem 0.65rem 0.75rem;
          color: #737373;
        }

        .inputSearchMobile .ui.button .icon svg {
          position: relative;
          top: 1px;
          background: #393939;
          color: #888;
        }

        .inputSearchMobile .ui.active.button:active,
        .inputSearchMobile .ui.button:active {
          background: #393939;
        }

        .inputSearchMobile .ui.button:focus {
          background: #393939;
        }

        .inputSearchMobile
          .ui.action.input:not([class*="left action"])
          > input:focus {
        }

        .inputSearchMobile .ui.button:hover {
          background-color: #3e3e3e;
        }
      `}</style>
    </div>
  )
}

export default inputSearchMobile
