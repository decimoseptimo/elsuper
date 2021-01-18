import React, { useContext } from "react"
import { Link, navigate } from "@reach/router" //enables navigate(-1) see: https://github.com/gatsbyjs/gatsby/issues/5987
import { FiUser } from "react-icons/fi"
import { MdSearch } from "react-icons/md"

import { CartContext } from "../state/cart"
import { MiscContext } from "../state/misc"
import BaseButton from "./baseButton"
import ButtonCart from "./buttonCart"
import IconBars from "./iconBars"
import Search from "./search"
import { getRelativeUrl } from "./router"
import * as Routes from "./routes"

const Header = ({ location, activeSidebar }) => {
  const [state, dispatch] = useContext(CartContext)
  const [miscState, miscDispatch] = useContext(MiscContext)
  const deroutedUrl = getRelativeUrl(location, false)

  const setActiveSidebar = (value) => {
    // uninitialized value: go, push state
    if (activeSidebar === undefined) {
      navigate(getRelativeUrl(location, value))
    }
    // same value: go back
    else if (activeSidebar === value) {
      navigate(deroutedUrl)
    }
    // new value: go, replace state
    else {
      navigate(getRelativeUrl(location, value), {
        replace: true,
      })
    }
  }

  return (
    <div className="row">
      <div className="col-a">
        <BaseButton
          className="buttonCategories"
          aria-label="categories button"
          onClick={() => setActiveSidebar(Routes.CATEGORIES)}
        >
          <IconBars />
        </BaseButton>
        <h1>
          <Link to="/" className="logo">
            ELSUPER
          </Link>
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
          onClick={() => setActiveSidebar(Routes.MY_ACCOUNT)}
        >
          <FiUser color="white" />
        </BaseButton>
        <ButtonCart
          count={state.length}
          onClick={() => setActiveSidebar(miscState.cartRoute || Routes.CART)}
        />
      </div>

      <style jsx global>{`
        .logo {
          color: white;
          text-decoration: none;
        }

        .buttonCategories {
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
