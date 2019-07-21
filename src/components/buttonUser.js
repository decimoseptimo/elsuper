import React from "react"
import { FaSearch } from "react-icons/fa"

const ButtonSearch = props => (
  <>
    <button {...props}>
      <FaSearch color="white" />
    </button>
    <style jsx>{`
      button {
        background: none;
        border: 0;
        outline: 0;
        cursor: pointer;
      }
    `}</style>
  </>
)

ButtonSearch.defaultProps = {
  // userName: 'Jose!',
}

export default ButtonSearch
