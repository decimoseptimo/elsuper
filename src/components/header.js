import React, { useContext } from "react"
import { Link } from "gatsby"
import css from "styled-jsx/css"
import { CartContext } from "../state/cart"
import { MiscContext } from "../state/misc"

import ButtonCart from "../components/buttonCart"
import ButtonUser from "../components/buttonUser"
import InputMainSearch from "../components/inputMainSearch"

const { className, styles } = css.resolve`
  a {
    display: inline-block;
    margin-left: -15px;
    margin-top: 3px;
  }
`

const Header = () => {
  const [state, dispatch] = useContext(CartContext)
  const [miscState, miscDispatch] = useContext(MiscContext)

  return (
    <header>
      <div className="row">
        <div className="col-a">
          <h1 style={{ padding: "1.2rem 0" }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              ELSUPER
            </Link>
          </h1>
        </div>
        <div className="col-b">
          <InputMainSearch className="inputSearch" />
        </div>
        <div className="col-c">
          <ButtonUser className="buttonSearch" />
          <ButtonCart
            count={state.length}
            onClick={() => {
              miscDispatch({ type: "TOGGLE_CART_OPEN" })
            }}
          />
        </div>
      </div>
      {styles}
      <style jsx global>{`
        .inputSearch {
          display: none !important;
        }

        @media screen and (min-width: 500px) {
          .buttonSearch {
            display: none;
          }

          .inputSearch {
            display: flex !important;
          }
        }
      `}</style>
      <style jsx>{`
        header {
          margin: 0 auto;
          max-width: 1500px;
          padding: 0 1rem;
        }

        .row {
          display: flex;
          margin: 0 auto;
          align-items: center;
        }

        .col-a {
          // flex: 1;
        }

        .col-b {
          flex: 1;
          margin: 0 2.8rem 0 2rem;
        }

        .col-c {
          font-size: 1.3rem;
        }

        @media screen and (min-width: 1000px) {
          header {
            padding: 0 3rem;
          }
        }
      `}</style>
    </header>
  )
}

export default Header
