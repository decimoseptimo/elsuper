import React, { useState, useContext } from "react"
import { Link, navigate } from "@reach/router" //enables navigate(-1) see: https://github.com/gatsbyjs/gatsby/issues/5987
import { FiUser } from "react-icons/fi"
import { MdSearch } from "react-icons/md"

import { CartContext } from "../state/cart"
import { MiscContext } from "../state/misc"
import BaseButton from "./baseButton"
import ButtonCart from "./buttonCart"
import IconBars from "./iconBars"
import Search from "./search"
import { /* getFromRoutesHistory, */ getRelativeUrl } from "./router"
import * as Routes from "./routes"

const Header = ({ location, routes, getFromRoutesHistory }) => {
  const [state /* , dispatch */] = useContext(CartContext)
  const [/* miscState */, miscDispatch] = useContext(MiscContext)
  const deroutedUrl = getRelativeUrl(location)

  /**
   * Manipulates the history object (HTML Browser API) in order to **sort of** mimic the back-button functionality
   * available in native mobile apps. By adding URLs that represent UI states. It also ignores certain URLs in order
   * to avoid adding UI states that provide no significant UX value. The following manupulations are available:
   * push - adds new state
   * replace, goback - effectively ignores state
   * @param {string} nextRoutes
   */
  const setRoutes = (nextRoutes) => {
    const replace = location.state?.replace
    const push = location.state?.push
/*     console.log(`
---
  curr: ${routes}
  next: ${nextRoutes}
  push: ${push}
  replace: ${replace}
`) */
    // unset:
    if (!routes.length) {
      //console.log("1. unset")
      if (replace) {
        //console.log(" 1 replace")
        navigate(getRelativeUrl(location, ...nextRoutes), {
          replace: true,
          state: { replace: true },
        })
        // same
      } else if (push) {
        //console.log(" 2 goback")
        navigate(-1)
      }
      else {
        //console.log(" 3 push")
        navigate(getRelativeUrl(location, ...nextRoutes), {
          state: { push: true },
        })
      }
    }
    // same:
    else if (routes.toString() === nextRoutes.toString()) {
      //console.log("2. same")
      if (replace) {
        //console.log(" 1 replace")
        navigate(deroutedUrl, {
          replace: true,
          state: { replace: true },
        })
      } else if (push) {
        //console.log(" 2 goback")
        navigate(-1)
      }
      else {
        //console.log(" 3 push")
        navigate(deroutedUrl, {
          state: { push: true },
        })
      }
    }
    // different:
    else {
      //console.log("3.")
      if (replace) {
        //console.log(" 1 replace")
        navigate(getRelativeUrl(location, ...nextRoutes), {
          replace: true,
          state: { replace: true },
        })
      } else {
        //console.log(" 2")
        //console.log(routes.length === 1 ? "replace" : "push")
        navigate(getRelativeUrl(location, ...nextRoutes), {
          replace: routes.length === 1 ? true : false,
          state: { replace: true },
        })
      }
    }
  }

  return (
    <div className="row">
      <div className="col-a">
        <BaseButton
          className="buttonCategories"
          aria-label="categories button"
          onClick={() =>
            setRoutes(
              getFromRoutesHistory(Routes.CATEGORIES) || [Routes.CATEGORIES]
            )
          }
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
          onClick={() =>
            setRoutes(
              getFromRoutesHistory(Routes.MY_ACCOUNT) || [Routes.MY_ACCOUNT]
            )
          }
        >
          <FiUser color="white" />
        </BaseButton>
        <ButtonCart
          count={state.length}
          onClick={() =>
            setRoutes(getFromRoutesHistory(Routes.CART) || [Routes.CART])
          }
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
