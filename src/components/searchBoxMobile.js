import React, { useEffect } from "react"
import Autosuggest from "react-autosuggest"
// import { TiArrowLeft } from "react-icons/ti"
import { IoIosArrowBack } from "react-icons/io"
import { MdClose/*, MdClear , MdChevronLeft, MdArrowBack */ } from "react-icons/md"

import BaseButton from "../components/baseButton"

// const SearchBoxMobile = props => {
// https://github.com/reactjs/reactjs.org/issues/2120#issuecomment-589207766
const SearchBoxMobile = React.forwardRef((props, ref) => {

  // console.log('SearchBoxMobile!')
  // console.log('inputRef:')
  // console.log(props.inputRef)

  // const icons = [
  //   TiArrowLeft,
  //   IoIosArrowBack,
  //   MdClear,
  //   MdClose,
  //   MdChevronLeft,
  //   MdArrowBack,
  // ]

  useEffect(
    () => {
      // console.log('--useEffect!')
      if (props.inputRef !== undefined) {
        props.inputRef.focus()
      }
    },
  )

  return (
    <div className="searchBoxMobile">
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
      {/*<Autosuggest {...props} />*/}
      <Autosuggest {...props} ref={ref} id="mobile" />
      {props.inputProps.value && (
        <BaseButton
          onClick={props.clearInput}
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
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          opacity: 1;
          transition: opacity 0.3s ease 0s;
        }

        .searchBoxMobile .react-autosuggest__suggestions-list {
          z-index: 1;
        }

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

        .searchBoxMobile .react-autosuggest__container > input {
          color: #888;
          padding: 0.55rem 1rem 0.65rem;
          background: #2a2a2a;
          padding: 1.6rem 0 1.8rem;
          border: none;
          margin: 0 3rem;
          padding-left: 0.2rem;
        }

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
      `}</style>
    </div>
  )
// }
})

export default SearchBoxMobile