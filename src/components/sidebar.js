import React, { useState, useEffect, useContext, useMemo } from "react"
import Button from "../components/button"

import CartItem from "../components/cartItem"
import { CartContext } from "../state/state"
import { round } from "../utils"
import css from "styled-jsx/css"

const Sidebar = props => {
  const [state, dispatch] = useContext(CartContext)
  const { className, styles } = css.resolve`
    background-color: blueviolet;
    background-color: turquoise;
    width: 100%;
    margin-top: 3em;
  `

  const cartTotal = () => {
    let cartTotal = 0
    state.forEach(item => {
      return (cartTotal += item.price * item.count)
    })
    return round(cartTotal)
  }

  return (
    <>
      {console.log("render!")}
      <div className="cart">
        <h2>Carrito</h2>

        {state.length ? (
          <>
            <table>
              <thead>
                <tr>
                  <th />
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th className="item-total">A pagar</th>
                  <th />
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
            <Button className={className}>Proceder al pago</Button>
          </>
        ) : (
          <p>
            Tu carrito esta vacio. Los productos que agregues apareceran aquí.
          </p>
        )}
      </div>
      {styles}
      <style jsx>{`
        .cart {
          background-color: #eee;
          padding: 2rem;
          min-width: 300px;

          background-color: #fff;
          box-shadow: 0 1px 2px #e0e0e0;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        table th.item-total {
          // wrap: "no-wrap";
          text-align: right;
        }

        table th {
          text-align: left;
          white-space: nowrap;
        }

        table th:nth-child(3) {
          min-width: 5.6rem;
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
        }

        .empty-cart:hover {
          opacity: 0.7;
        }

        .cart-total {
          text-align: right;
          font-weight: bold;
          margin-top: 2rem;
          margin-right: 0.6rem;
        }
      `}</style>
    </>
  )
}

export default Sidebar
