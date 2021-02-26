import React, { useContext } from "react"

import Button from "../../../button"
import CartItem from "./cartItem"
import { CartContext } from "../../../../state/cart"
import { round } from "../../../../utils"
import { navigate, useGetRelativeUrl } from "../../../router"
import { CART, SHIPPING } from "../../routes"
import "../panel.css"

const Cart = (props) => {
  const [state, dispatch] = useContext(CartContext)
  const url = useGetRelativeUrl(CART, SHIPPING)

  const cartTotal = () => {
    let cartTotal = 0
    state.forEach((item) => {
      return (cartTotal += item.price * item.count)
    })
    return round(cartTotal)
  }

  return (
    <>
      <div className="panel cart">
        <header>
          <h2 className="title">Carrito</h2>
          <span className="subtitle">
            <span className="number">${cartTotal()}</span>
          </span>
        </header>
        {state.length ? (
          <>
            <table>
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th className="item-total">A pagar</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {state.map((value, index) => {
                  return <CartItem {...value} dispatch={dispatch} key={index} />
                })}
              </tbody>
            </table>
            <div>
              <button
                className="empty-cart"
                onClick={() => {
                  dispatch({ type: "EMPTY_CART" })
                }}
              >
                Vaciar carrito
              </button>
              <div className="cart-total">Total ${cartTotal()}</div>
            </div>
            <div className="btn-wrapper">
              <Button className="fluid primary" onClick={() => navigate(url)}>
                Proceder al pago
              </Button>
            </div>
          </>
        ) : (
          <p>Los productos que agregues apareceran aquí.</p>
        )}
      </div>

      <style jsx>{`
        .btn-wrapper {
          position: sticky;
          bottom: 0;
          border-bottom: 2rem solid #fff;
          margin-top: 3rem;
          -webkit-box-shadow: 0px -10px 16px 10px rgb(255, 255, 255);
          -moz-box-shadow: 0px -10px 16px 10px rgb(255, 255, 255);
          box-shadow: 0px -10px 16px 10px rgb(255, 255, 255);
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        table th.item-total {
          text-align: right;
        }

        table th {
          text-align: left;
          white-space: nowrap;
          font-weight: 600;
        }

        table th:nth-child(3) {
          min-width: 5.6rem;
          display: none;
        }

        table th:nth-child(4) {
          min-width: 6.6rem;
        }

        .empty-cart {
          background: none;
          border: 0;
          color: tomato;
          text-decoration: underline;
          cursor: pointer;
          opacity: 0.6;
          float: left;
          margin-left: 0.6rem;
          padding: 0;
        }

        .empty-cart:hover {
          opacity: 0.7;
        }

        .cart-total {
          text-align: right;
          font-weight: 600;
          margin-top: 2rem;
          margin-right: 0.6rem;
        }

        th:first-child {
          display: none;
        }

        @media screen and (min-width: 400px) {
          th:first-child {
            display: block;
          }
        }
      `}</style>
    </>
  )
}

export default Cart
