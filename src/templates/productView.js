import React, { useContext, useState } from "react"
import { image, graphql } from "gatsby"
import css from "styled-jsx/css"

import ProductGallery from "../components/productGallery"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import InputNumber from "../components/inputNumber"
import Sidebar from "../components/sidebar"
import { CartContext, itemExists, findIndex } from "../state"

const ProductView = props => {
  const { id, title, price, unit, images } = props.data.productsJson
  const [state, dispatch] = useContext(CartContext)
  const [inputValue, setInputValue] = useState(1)
  const productInCart = itemExists(state, id)

  // const productIndex = findIndex(state, id)
  // const initState = () => {
  //   return (productIndex >= 0) ? setInputValue(state[productIndex].count) : 1;
  // }

  const AddButton = () => {
    const { className, styles } = css.resolve`
    button {
      margin-bottom: 1rem;
    }`
    return (
      <Button
        className={className}
        onClick={() => {
          dispatch({
            type: "ADD_CART_ITEM",
            ...props.data.productsJson,
            count: inputValue,
          })
        }}
      >
        Agregar
        {styles}
      </Button>
    )
  }

  const RemoveButton = () => {
    const { className, styles } = css.resolve`
    button {
      margin-bottom: 1rem;
      background-color: #613458;
    }`
    return (
      <Button
        className={className}
        onClick={() => {
          dispatch({
            type: "REMOVE_CART_ITEM",
            id,
          })
        }}
      >
        Remover
        {styles}
      </Button>
    )
  }

  const UpdateInput = () => {
    const { className, styles } = css.resolve`
      margin-bottom: 1rem;
    `
    return (
      <>
        <InputNumber
          className={className}
          required={true}
          value={inputValue}
          min={1}
          max={100}
          precision={unit == "Kg" ? 2 : 0}
          onChange={value => {
            setInputValue(value)
            if (productInCart)
              dispatch({ type: "UPDATE_CART_ITEM", id, count: value })
          }}
        />
        {styles}
      </>
    )
  }

  return (
    <Layout>
      <SEO title={title} keywords={[`gatsby`, `application`, `react`]} />

      <div className="row">
        <div className="col col-a">
          <ProductGallery images={images} />
        </div>
        <div className="col col-b">
          <h1>{title}</h1>
          <p>
            ${price} {unit}
          </p>
          <UpdateInput />
          {!productInCart ? <AddButton /> : <RemoveButton />}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            asperiores, dolorum eos excepturi id ipsa minima nam nemo odit
            pariatur perferendis provident qui quis recusandae totam vel
            voluptas voluptatem voluptatibus?
          </p>
        </div>
        <div className="col col-c">
          <Sidebar />
        </div>
      </div>
      <style jsx>
        {`
          .row {
            display: flex;
            flex-flow: row wrap;
            // border: 2px solid red;
          }

          .col {
            // float: left;
            // display: inline-block;
            // width: 33.33%;
            flex: 1;
            // border: 2px solid orange;
          }

          .col-a {
            width: 100%;
            //             max-width: 600px;
          }

          .col-b {
            // flex: 1;
            padding: 0 2rem;
          }

          .col-b > * {
            // border: 1px solid red;
            margin-bottom: 1rem;
          }
        `}
      </style>
    </Layout>
  )
}

ProductView.defaultProps = {
  asd: "fgh"
}

export default ProductView

export const query = graphql`
  query($id: String!) {
    productsJson(id: { eq: $id }) {
      id
      title
      price
      unit
      slug
      images {
        childImageSharp {
          fluid(maxWidth: 1080) {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  }
`
