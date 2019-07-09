import React from "react"
import css from "styled-jsx/css"

const ProductSummary = props => {
  const {
    id,
    title,
    price,
    unit,
    slug,
    images,
    UpdateInput,
    ToggleButton,
  } = props
  const { className, styles } = css.resolve`
        {
          margin-bottom: 1rem;
        }
  `

  return (
    <>
      <h1>{title}</h1>
      <p>
        ${price} {unit}
      </p>
      {UpdateInput(className)}
      {ToggleButton()}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
        asperiores, dolorum eos excepturi id ipsa minima nam nemo odit pariatur
        perferendis provident qui quis recusandae totam vel voluptas voluptatem
        voluptatibus?
      </p>
      {styles}
    </>
  )
}

export default ProductSummary
