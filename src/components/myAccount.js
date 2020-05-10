import React, { useContext } from "react"

//import { CartContext } from "../state/cart"

const MyAccount = props => {
  //const [state, dispatch] = useContext(CartContext)

  return (
    <>
      <div className="my-account">
        <h2>Inicio de sesión / Registro</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <style jsx>{`
        .cart {
          min-width: 300px;
        }

        .btn-wrapper {
          position: sticky;
          bottom: 0;
          border-bottom: 2rem solid #fff;
        }

        h2 {
          font-size: 1.7rem;
          font-family: Lato,Helvetica Neue,Arial,Helvetica,sans-serif;
        }
        
        h2 .price {
          font-weight: normal;
          font-size: 1.2rem;
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
          padding: 0;
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

export default MyAccount
