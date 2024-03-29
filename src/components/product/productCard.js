import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Image from "../image"

const ProductCard = ({
  data,
  // count,
  // setCount,
  dispatch,
  countInCart,
  InputNumber,
  AddButton,
  hasMountedAndHasValue,
}) => {
  const image = data.images ? (
    <GatsbyImage
      image={data.images[0].childImageSharp.gatsbyImageData}
      alt={data.title}
    />
  ) : (
    <Image />
  )

  const button = countInCart ? (
    <InputNumber
      className="style2"
      data={data}
      value={countInCart}
      dispatch={dispatch}
      onChange={(value) => {
        // console.log(`onChange: ${value}`)
        if (countInCart)
          dispatch({
            type: "UPDATE_CART_ITEM",
            _id: data._id,
            count: value,
          })
      }}
      onDelete={() => {
        dispatch({ type: "REMOVE_CART_ITEM", _id: data._id })
      }}
    />
  ) : (
    <AddButton
      className={`primary2 round`}
      dispatch={dispatch}
      data={data}
      count={countInCart || 1}
    />
  )

  return (
    <div
      key={hasMountedAndHasValue}
      className={`productCard ${countInCart ? "active" : ""}`}
    >
      <Link to={`/${data.slug}`}>{image}</Link>
      <div className="subtitle row">
        <span className="price">
          <span className="symbol">$</span>
          {data.price}
        </span>{" "}
        <span className="unit">{data.unit}</span>
      </div>
      <h2 className="title row">{data.title}</h2>
      {button}
      <style jsx global>{`
        .productCard {
          padding: 1rem 1rem 1rem;
          background-color: #fff;
          /* box-shadow: 0 1px 2px rgba(0,0,0,.1); */
          box-shadow: 0 1px 2px #e0e0e0;
          text-align: center;
          color: #484c51;
        }

        .productCard .row {
          margin: 0 auto 0.9rem;
        }

        .productCard a {
          text-decoration: none;
        }

        .productCard .wrapper-a {
          display: block;
        }

        .productCard .title {
          font-size: 1.1rem;
          color: #333;
          font-size: 1.1rem;
          font-weight: 500;
          margin-bottom: 2rem;
        }

        .productCard .subtitle {
          font-size: 1.1rem;
        }

        .productCard .price {
          font-weight: 600;
          font-size: 1.2rem;
        }

        .productCard .symbol {
          font-size: 1.2rem;
          margin-left: 0.3rem;
        }

        .productCard .unit {
          // font-weight: 600;
        }

        .productCard img {
          max-width: 100%;
        }

        .productCard.active .toggleButton {
          display: none;
        }

        .productCard .inputNumber {
          display: none;
        }
        .productCard.active .inputNumber {
          display: block;
        }
      `}</style>
    </div>
  )
}

export default ProductCard
