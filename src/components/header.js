import React, { useContext } from "react"
import { Link } from "gatsby"
import css from "styled-jsx/css"
import { CartContext } from "../state/state"

import ButtonCart from "../components/buttonCart"
import ButtonUser from "../components/buttonUser"
import InputMainSearch from "../components/inputMainSearch"

const { className, styles } = css.resolve`
a {
  display: inline-block;
  margin-left: -15px;
  margin-top: 3px;
}`

const Header = () => {
  const [state, dispatch] = useContext(CartContext)

  return (
    <header
      style={{
        marginBottom: `4.45rem`,
      }}
    >
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
          <InputMainSearch />
        </div>
        <div className="col-c">
          <ButtonUser />
          <ButtonCart count={state.length} onClick={()=>{console.log('CCC')}}/>
        </div>
      </div>
      {styles}
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
