import React from "react"
import PropTypes from "prop-types"

const BaseButton = (props) => (
  <>
    <button {...props} className={`baseButton ${props.className}`}>
      {props.children}
    </button>
    <style jsx>{`
      .baseButton {
        background: none;
        border: 0;
        outline: 0;
        cursor: pointer;
      }
    `}</style>
  </>
)

BaseButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default BaseButton
