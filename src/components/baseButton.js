import React from "react"

const BaseButton = ({ children, ...props }) => (
  <>
    <button {...props} className={`baseButton ${props.className}`}>
      {children}
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

export default BaseButton
