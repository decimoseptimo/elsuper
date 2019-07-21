import React from "react"
import { Link } from "gatsby"

const Button = props => {
  const propsClone = Object.assign({}, props)
  delete propsClone.backgroundColor

  return (
    <>
      <button {...propsClone}>{props.children}</button>
      <style jsx>{`
        button {
          // padding: 0.9rem 1.5rem;
          display: inline-block;
          background-color: ${props.backgroundColor};
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          // font-size: 0.875rem;
          font-size: 1rem;
          border: 1px solid #96588a;
          cursor: pointer;

          font-family: "Source Sans Pro", HelveticaNeue-Light,
            "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
            "Lucida Grande", sans-serif;
          padding: 0.9rem 1.8rem;
          font-style: italic;
        }
      `}</style>
    </>
  )
}

Button.defaultProps = {
  backgroundColor: "#96588a",
}

export default Button
