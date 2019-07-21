import React from "react"
import { Link } from "gatsby"
import css from "styled-jsx/css"

const ButtonLink = props => {
  const { className, styles } = css.resolve`
    a {
      padding: 0.9rem 1.5rem;
      display: inline-block;
      background-color: ${props.backgroundColor};
      color: #ffffff;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.875rem;
      border: 1px solid #96588a;
      color: #96588a;
    }
  `

  return (
    <>
      <Link to={props.to} className={className}>
        {props.children}
      </Link>
      {styles}
    </>
  )
}

ButtonLink.defaultProps = {
  backgroundColor: "#96588a",
}

export default ButtonLink
