import React from "react"
import PropTypes from "prop-types"

const BaseButton = props => (
  <>
    <button {...props}>
      {props.children}
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

BaseButton.propTypes = {
  children: PropTypes.element.isRequired
}

export default BaseButton
