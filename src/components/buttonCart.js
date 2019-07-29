import React from "react"
import { FaShoppingCart } from "react-icons/fa"

const ButtonCart = props => (
  <>
    <button {...props}>
      <FaShoppingCart color="white" />
      <span className="cart-count">{props.count}</span>
    </button>
    <style jsx>{`
      button {
        background: none;
        border: 0;
        outline: 0;
        cursor: pointer;

        padding-right: 0;
      }

      svg {
        font-size: 1.5rem;
      }

      .cart-count {
        border-radius: 10px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        font-size: 1rem;
        margin-left: 1px;
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
