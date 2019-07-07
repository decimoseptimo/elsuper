import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import InputNumber2 from "../components/inputNumber2"
import Image from "../components/image"
import { round } from "../utils"

const CartItem = props => {
  const { id, title, price, unit, slug, images, count, dispatch } = props
  // const [count, setCount] = useState(1)
  const image = images ? (
    <Img
      className="thumb"
      fluid={images[0].childImageSharp.fluid}
      alt={title}
    />
  ) : (
    <Image />
  )

  const itemTotal = () => {
    const itemTotal = price * count
    return round(itemTotal, 2)
  }

  return (
    <>
      <tr>
        <td>{image}</td>
        <td>
          <Link to={`/${slug}`}>{title}</Link>
        </td>
        <td>
          ${price} {unit}
        </td>
        <td>
          <InputNumber2
            required={true}
            value={count}
            min={1}
            max={100}
            precision={unit == "Kg" ? 2 : 0}
            onChange={value => {
              dispatch({ type: "UPDATE_CART_ITEM", id, count: value })
            }}
          />
        </td>
        <td className="item-total">${itemTotal()}</td>
        <td>
          <button
            className="delete-button"
            onClick={() => {
              dispatch({ type: "REMOVE_CART_ITEM", id })
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
          font-size: 1.5rem;
          opacity: 0.5;
          background: none;
          border: 0;
          outline: 0;
        }

        td {
          padding-right: 1rem;
        }

        td.item-total {
          text-align: right;
        }

        td:first-child,
        td.item-total,
        td:last-child {
          padding-right: 0;
        }
      `}</style>
    </>
  )
}

export default CartItem
