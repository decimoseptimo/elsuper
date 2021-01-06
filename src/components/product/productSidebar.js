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
      {/* <div className="block"></div> */}
      <div className="block">
        <h3>
          Envio gratis
          <MdLocalShipping className={className} />
        </h3>
        <p>En tus compras con un monto minimo de 499$</p>
      </div>
      <div className="block">
        <h3>
          Pago seguro
          <AiFillCreditCard className={className} />
        </h3>
        <p>
          Aceptamos las principales tarjetas credito y debito. Y pago en
          efectivo a contra-entrega
        </p>
      </div>
      {/* <div className="block"></div> */}

      {styles}
      <style jsx>{`
        .product-sidebar {
        }

        .block {
          margin-bottom: 1rem;
          padding: 1rem;
          background-color: #eee;
          //box-shadow: 0 1px 2px #dfdfdf;
          position: relative;
          color: #666;
          border-radius: 3px;
        }

        h3 {
          margin-bottom: 1rem;
          text-transform: uppercase;
          font-weight: 600 !important;
          font-size: 14px;
          font-family: "Source Sans Pro", HelveticaNeue-Light,
            "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial,
            "Lucida Grande", sans-serif;
          color: #555;
        }

        h3 .svg {
          position: absolute;
          right: 15px;
          color: #aaa;
        }

        p {
          margin: 0;
        }

         {
          /* .shop-item .button {
          margin-bottom: 0.3rem;
        } */
        }

        @media screen and (min-width: 550px) {
          .product-sidebar {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            grid-column-gap: 1rem;
            grid-row-gap: 5rem;
          }
        }

         {
          /* @media screen and (min-width: 800px) {
          .product-sidebar {
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
        } */
        }

        @media screen and (min-width: 1100px) {
          .product-sidebar {
            display: block;
          }

          .block {
          }
        }
      `}</style>
    </div>
  )
}

export default ProductSidebar
