import React from "react"
import { FaSearch } from "react-icons/fa"

const ButtonCart = props => (
  <>
    <button {...props}>
      <FaSearch color="white" />
    </button>
    <style jsx>{`
      .cart-count {
        padding: 1px 5px;
        border-radius: 10px;
        color: #fff;
        //background: tomato;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        font-size: 1rem;
        margin-left: 5px;

        position: relative;
        top: -1px;
        font-size: 1.2rem;
        left: -9px;
        color: coral;
      }

      button {
        background: none;
        border: 0;
        outline: 0;
        cursor: pointer;
      }
    `}</style>
  </>
)

ButtonCart.defaultProps = {
  userName: 'Jose!',
}

export default ButtonCart
