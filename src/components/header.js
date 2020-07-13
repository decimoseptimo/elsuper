import React, { useContext } from "react"
// import { Link /* , navigate */ } from "gatsby"
import { Link, navigate } from "@reach/router" //enables navigate(-1) see: https://github.com/gatsbyjs/gatsby/issues/5987
// import { FaSearch, FaUser, FaRegUser, FaRegUserCircle } from "react-icons/fa"
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi"
// import { IoMdSearch, IoIosSearch } from "react-icons/io"
import { MdSearch } from "react-icons/md"

import { CartContext } from "../state/cart"
import { MiscContext } from "../state/misc"
import BaseButton from "./baseButton"
import ButtonCart from "./buttonCart"
import ButtonCatalog from "./buttonCatalog"

import Search from "./search"
// import SearchBoxBase from "./searchBoxBase"
// import SearchBox from "./searchBox"
// import SearchBoxMobile from "./searchBoxMobile"

const Header = ({ location }) => {
  const [state, dispatch] = useContext(CartContext)
  const [miscState, miscDispatch] = useContext(MiscContext)

  // console.log(location)

  const getActiveSidebar = () => location.state?.activeSidebar

  const setActiveSidebar = (value) => {
    const activeSidebar = getActiveSidebar()

    // first value (uninitialized): go, push state
    if (activeSidebar === undefined) {
      navigate(location.pathname, {
        state: { activeSidebar: value },
      })
    }
    // same value: go back
    else if (activeSidebar === value) {
      navigate(-1)
    }
    // new value: go, replace state
    else {
      navigate(location.pathname, {
        state: { activeSidebar: value },
        replace: true,
      })
    }
  }

  const Logo = () =>
    getActiveSidebar() ? (
      <Link to="/" replace state={{ activeSidebar: null }} className="logo">
        ELSUPER
      </Link>
    ) : (
      <Link to="/" className="logo">
        ELSUPER
      </Link>
    )

  return (
    <div className="row">
      <div className="col-a">
        <BaseButton
          className="buttonCatalog"
          aria-label="categories button"
          onClick={() => setActiveSidebar("categoriesMenu")}
        >
          <ButtonCatalog />
        </BaseButton>
        <h1>
          <Logo />
        </h1>
      </div>
      <div className="col-b">
        <div className="searchBoxWrapper">
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
        <BaseButton
          className="buttonUser"
          aria-label="my-account button"
          onClick={() => setActiveSidebar("userAccount")}
        >
          <FiUser color="white" />
        </BaseButton>
        <ButtonCart
          count={state.length}
          onClick={() => setActiveSidebar("cart")}
        />
      </div>
      <style jsx global>{`
        .logo {
          color: white;
          text-decoration: none;
        }

        .buttonCatalog {
          padding: 0 5px 0 0;
        }

        .searchBoxWrapper {
          margin: 0 2rem;
          // padding-left: 6px;
          width: 100%;
        }

        .searchBox {
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

          .searchBoxMobile {
            display: none;
          }

          .searchBox {
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
          flex: 1;
        }

        .col-b {
          // display: none;
          width: 0;
        }

        .col-c {
          font-size: 1.3rem;
        }

        h1 {
          display: inline-flex;
        }

        h1 {
          margin: 1rem 0;
          font-weight: 600;
          font-size: 2.3rem;
          letter-spacing: -1px;
        }

        @media screen and (min-width: 570px) {
          .col-a {
            display: block;
            flex: none;
          }

          .col-b {
            display: flex;
            flex: 1;
          }
        }
      `}</style>
    </div>
  )
}

export default Header
