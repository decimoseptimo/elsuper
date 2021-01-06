import React from "react"
import { MdLocalShipping } from "react-icons/md"
import { AiFillCreditCard } from "react-icons/ai"
import css from "styled-jsx/css"

const { className, styles } = css.resolve`
   {
    position: absolute;
    right: 15px;
    color: #aaa;
  }
`

const ProductSidebar = (props) => {
  return (
    <div className="product-sidebar">
      <div className="block">
        <h3>
          Envio gratis
          <MdLocalShipping className={className} />
        </h3>
        <p>En tus compras con un monto minimo de $499</p>
      </div>
      <div className="block">
        <h3>
          Pago seguro
          <AiFillCreditCard className={className} />
        </h3>
        <p>
          Aceptamos las principales tarjetas de credito y debito. Y pago en
          efectivo a contra-entrega
        </p>
      </div>

      {styles}
      <style jsx>{`
        .product-sidebar {
        }

        .block {
          padding: 1rem;
          position: relative;
          color: #888;
          border: 1px dotted #ddd;
          border-radius: 3px;
        }
        .block:first-child {
          border-radius: 3px 3px 0 0;
          border-bottom: 0;
        }
        .block:last-child {
          border-radius: 0 0 3px 3px;
        }

        h3 {
          margin-bottom: 1rem;
          text-transform: uppercase;
          font-weight: 600 !important;
          font-size: 14px;
          font-family: "Source Sans Pro", HelveticaNeue-Light,
            "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
            "Lucida Grande", sans-serif;
        }

        h3 .svg {
          position: absolute;
          right: 15px;
          color: #aaa;
        }

        p {
          margin: 0;
        }

        @media screen and (min-width: 550px) {
          .product-sidebar {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            grid-column-gap: 1rem;
            grid-row-gap: 5rem;
          }

          .block:first-child {
            border-radius: 3px;
            border-bottom: 1px dotted #ddd;
          }
          .block:last-child {
            border-radius: 3px;
          }
        }

        @media screen and (min-width: 1100px) {
          .product-sidebar {
            display: block;
          }

          .block:first-child {
            border-radius: 3px 3px 0 0;
            border-bottom: 0;
          }
          .block:last-child {
            border-radius: 0 0 3px 3px;
          }
        }
      `}</style>
    </div>
  )
}

export default ProductSidebar
