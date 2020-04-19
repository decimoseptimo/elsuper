import React from "react"

const Button = props => {
  const propsClone = Object.assign({}, props)
  delete propsClone.backgroundColor

  return (
    <>
      <button {...propsClone}>{props.children}</button>
      <style jsx>{`
        button {
          display: inline-block;
          background-color: ${props.backgroundColor};
          padding: 0.9rem 1.8rem;
          border: 1px solid #96588a;
          cursor: pointer;
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          font-family: "Source Sans Pro", HelveticaNeue-Light,
            "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
            "Lucida Grande", sans-serif;
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
