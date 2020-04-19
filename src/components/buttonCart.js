import React from "react"
import { FaShoppingCart } from "react-icons/fa"

import BaseButton from "./baseButton"

const ButtonCart = props => (
  <>
    <BaseButton {...props} className="buttonCart">
      <>
        <FaShoppingCart color="white" />
        <span className="cart-count">{props.count}</span>
      </>
    </BaseButton>
    <style jsx global>{`
      .buttonCart {
        padding-right: 0;
      }
    `}</style>
    <style jsx>{`
      svg {
        font-size: 1.5rem;
      }

      .cart-count {
        margin-left: 1px;
        border-radius: 10px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        font-size: 1rem;
        font-size: 1.2rem;
        color: coral;
      }
    `}</style>
  </>
)

ButtonCart.defaultProps = {
  count: 0,
}

export default ButtonCart
