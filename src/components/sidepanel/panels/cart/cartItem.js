import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import InputNumber from "../../../inputNumber"
import Image from "../../../image"
import { round } from "../../../../utils"

const CartItem = (props) => {
  const {
    _id,
    title,
    unit,
    slug,
    images,
    count,
    min_quantity,
    max_quantity,
    dispatch,
  } = props

  const price = round(props.price)
  const image = images ? (
    <GatsbyImage
      image={images[0].childImageSharp.gatsbyImageData}
      className="thumb"
      alt={title}
    />
  ) : (
    <Image />
  )

  const itemTotal = () => {
    return round(Number(price) * count, 2)
  }

  return (
    <>
      <tr>
        <td>{image}</td>
        <td>
          <Link to={`/${slug}`} className="jsx-3546936417" replace>
            {title}
          </Link>
        </td>
        <td>
          ${price} {unit}
        </td>
        <td>
          <InputNumber
            className="style4"
            aria-label="quantity"
            value={count}
            min={min_quantity}
            max={max_quantity}
            precision={unit === "Kg" ? 2 : 0}
            onChange={(value) => {
              // console.log(`onChange: ${value}`)
              if (count)
                dispatch({
                  type: "UPDATE_CART_ITEM",
                  _id: _id,
                  count: value,
                })
            }}
          />
        </td>
        <td className="item-total">${itemTotal()}</td>
        <td>
          <button
            className="delete-button"
            onClick={() => {
              dispatch({ type: "REMOVE_CART_ITEM", _id })
            }}
          >
            ×
          </button>
        </td>
      </tr>
      <style jsx global>{`
        .gatsby-image-wrapper.thumb {
          width: 3rem;
        }

        td a.jsx-3546936417 {
          color: #222;
        }
      `}</style>
      <style jsx>{`
        .delete-button:hover {
          opacity: 0.6;
        }

        .delete-button:active {
          opacity: 1;
        }

        .delete-button {
          color: tomato;
          font-weight: bold;
          font-size: 1.7rem;
          opacity: 0.5;
          background: none;
          border: 0;
          outline: 0;
          cursor: pointer;
        }

        td {
          padding-right: 1rem;
        }

        td.item-total {
          text-align: right;
        }

        td:nth-child(3) {
          display: none;
        }

        td:first-child,
        td.item-total,
        td:last-child {
          padding-right: 0;
        }

        td:first-child {
          display: none;
        }

        @media screen and (min-width: 400px) {
          td:first-child {
            display: block;
          }
        }
      `}</style>
    </>
  )
}

export default CartItem
