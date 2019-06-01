import React from "react"
import { Link } from "gatsby"

const Button = props => (
  <>
    <button {...props}>{props.children}</button>
    <style jsx>{`
      button {
        padding: 0.9rem 1.5rem;
        display: inline-block;
        background-color: ${props.backgroundColor};
        color: #fff;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.875rem;
        border: 1px solid #96588a;
        cursor: pointer;
      }
    `}</style>
  </>
)

Button.defaultProps = {
  backgroundColor: "#96588a",
}

export default Button
