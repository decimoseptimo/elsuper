import React, { useContext } from "react"
import { Link } from "gatsby"
import { FaSearch, FaUser, FaRegUser, FaRegUserCircle } from "react-icons/fa"
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi"
import { IoMdSearch, IoIosSearch } from "react-icons/io"
import { MdSearch } from "react-icons/md"

import { CartContext } from "../state/cart"
import { MiscContext } from "../state/misc"
import BaseButton from "./baseButton"
import ButtonCart from "./buttonCart"
import Search from "./search"

const Header = props => {
  const [state, dispatch] = useContext(CartContext)
  const [miscState, miscDispatch] = useContext(MiscContext)

  return (
    <div className="row">
      <div className="col-a">
        <h1>
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
        <div className="inputSearchWrapper">
          <Search />
        </div>
      </div>
      <div className="col-c">
        <BaseButton
          onClick={() => {
            miscDispatch({
              type: "SET_MOBILE_SEARCH_OPEN",
              isMobileSearchOpen: true,
            })
          }}
          className="buttonSearch"
          aria-label="search button"
        >
          <MdSearch color="white" />
        </BaseButton>
        <BaseButton className="buttonUser" aria-label="search button">
          <FiUser color="white" />
        </BaseButton>
        <ButtonCart
          count={state.length}
          onClick={() => {
            miscDispatch({ type: "TOGGLE_CART_OPEN" })
          }}
        />
      </div>
      <style jsx global>{`
        .inputSearchWrapper {
          margin: 0 2rem;
          padding-left: 6px;
        }

        .inputSearch {
          margin: 0 auto;
          display: none;
        }

        .buttonSearch {
          font-size: 110%;
          position: relative;
          top: 1px;
        }

        @media screen and (min-width: 570px) {
          .buttonSearch {
            display: none;
          }

          .inputSearchMobile {
            display: none;
          }

          .inputSearch {
            display: block;
          }
        }
      `}</style>
      <style jsx>{`
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
        }

        .col-c {
          font-size: 1.3rem;
        }

        h1 {
          margin: 1.1rem 0;
        }
      `}</style>
    </div>
  )
}

export default Header
