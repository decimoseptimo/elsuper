import React from "react"
import BaseButton from "./baseButton"
import css from "styled-jsx/css"

const ButtonAsLink = (props) => {
  const { className, styles } = css.resolve`
    .buttonAsLink {
      color: #3c79b6;
      padding: 0;
    }
  `

  return (
    <>
      <BaseButton className={`buttonAsLink ${className}`}>
        {props.children}
      </BaseButton>
      {styles}
    </>
  )
}

export default ButtonAsLink
