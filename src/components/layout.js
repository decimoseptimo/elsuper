import React, { useContext, useEffect } from "react"
import PropTypes from "prop-types"
import BgMenu from "react-burger-menu/lib/menus/slide"

import Menu from "./categoriesMenu"
import Cart from "./cart"
import Header from "./header"
import "semantic-ui-css/semantic.min.css"
import "./layout2.css"
import { MiscContext } from "../state/misc"

// import SimpleBar from 'simplebar';
// import 'simplebar/dist/simplebar.css';
// import SimpleScrollbar from "simple-scrollbar"
// import SimpleScrollbar from "../lib/simple-scrollbar"
import "simple-scrollbar/simple-scrollbar.css"
import MobileDetect from "mobile-detect"

let SimpleScrollbar
if (typeof window !== `undefined`) {
  SimpleScrollbar = require("../lib/simple-scrollbar")
}

const Layout = ({ children }) => {
  const [state, dispatch] = useContext(MiscContext)

  useEffect(() => {
    const md = new MobileDetect(window.navigator.userAgent)
    const el = document.querySelector(".ss-hook-class")

    if (!md.mobile()) SimpleScrollbar.initEl(el)
  }, [])

  return (
    <>
      <div className="body">
        <div className="header-wrapper">
          <header>
            <Header />
          </header>
        </div>
        <BgMenu
          className="catalog"
          menuClassName="catalog"
          isOpen={state.isCatalogOpen}
          // left
          customBurgerIcon={false}
          customCrossIcon={false}
          onStateChange={s => {
            if (s.isOpen != state.isCatalogOpen)
              dispatch({ type: "TOGGLE_CATALOG_OPEN" })
          }}
        >
          <div className="ss-content">
            <Menu onMenuClick={() => dispatch({ type: "CLOSE_CATALOG" })} />
          </div>
        </BgMenu>
        <BgMenu
          className="cart"
          menuClassName="cart ss-hook-class"
          isOpen={state.isCartOpen}
          right
          customBurgerIcon={false}
          customCrossIcon={false}
          onStateChange={s => {
            if (s.isOpen != state.isCartOpen)
              // dispatch({ type: "SET_CART_OPEN", isOpen: s.isOpen })
              dispatch({ type: "TOGGLE_CART_OPEN" })
          }}
        >
          <Cart />
        </BgMenu>
        <div className="main-wrapper">
          <main>{children}</main>
        </div>
        <div className="footer-wrapper">
          <footer>
            ELSUPER ©{new Date().getFullYear()} - Todos los derechos reservados.
          </footer>
        </div>
      </div>
      <style jsx>{`
        .body {
          padding-top: 0;
          background: #fafafa;
        }

        .header-wrapper {
          background: #2a2a2a;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 9999;
        }

        header {
          margin: 0 auto;
          max-width: 1500px;
          padding: 0 2rem;
        }

        main {
          margin: 0 auto 4rem;
          max-width: 1500px;
          padding: 8rem 1rem 0;
        }

        .footer-wrapper {
          overflow: auto;
          background: #f0f0f0;
        }

        footer {
          margin: 2rem auto;
          padding: 0 1rem;
          max-width: 1500px;
          text-align: center;
          opacity: 0.8;
        }

        @media screen and (min-width: 600px) {
          header,
          footer {
            padding: 0 3rem;
          }
        }

        @media screen and (min-width: 850px) {
          main {
            padding: 8.5rem 2rem 0;
          }
        }

        @media screen and (min-width: 1000px) {
          header,
          footer {
            padding: 0 3rem;
          }

          main {
            padding: 9rem 3rem 0;
          }
        }
      `}</style>
      <style jsx global>{`
        .ss-container.is-hidden .ss-content {
          width: 100%;
        }

        .ss-container.is-hidden .ss-content.rtl {
          width: 100%;
        }

        .catalog .ss-content {
          width: auto;
        }

        .ss-scroll {
          opacity: 1;
          width: 7px;
        }

        .bm-menu-wrap {
          height: calc(100% - 4.8rem) !important;
          bottom: 0;
          width: 100% !important;
        }

        .bm-item-list,
        .bm-item {
          outline: none !important;
        }

        .bm-menu {
          background-color: #fff;
          // box-shadow: 2px 0 6px 2px #e0e0e0;
          box-shadow: 0px 0 6px 0px #e0e0e0;
        }

        // .bm-menu.catalog {
        //   padding: 2rem 4rem 3rem 3rem;
        // }

        .bm-menu.cart {
          padding: 2rem 1rem 0;
        }

        .bm-menu.ss-container {
          padding: 0;
        }

        .ss-content {
          padding: 2rem 1rem 0;
        }

        .catalog .ss-content {
          padding: 2rem 2rem 2rem;
        }

        @media screen and (min-width: 300px) {
          .bm-menu-wrap.catalog {
            width: 270px !important;
          }
        }

        @media screen and (min-width: 550px) {
          .bm-menu-wrap.cart {
            width: 500px !important;
          }

          .bm-menu.cart {
            margin-left: 5px;
            padding: 2rem 2rem 0;
          }

          .bm-menu.catalog {
            margin-right: 5px;
          }

          .bm-menu.ss-container {
            padding: 0;
          }

          .ss-content {
            padding: 2rem 2rem 0;
          }

          .catalog .ss-content {
            padding: 2rem 2rem 2rem;
          }
        }
      `}</style>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
