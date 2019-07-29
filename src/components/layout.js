import React, { useContext, useMemo, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import BgMenu from "react-burger-menu/lib/menus/slide"

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
    const el = document.querySelector(".bm-menu")

    if (!md.mobile()) SimpleScrollbar.initEl(el)
  }, [])

  return (
    <>
      <div className="body">
        <div className="header-wrapper">
          <Header />
        </div>
        <BgMenu
          isOpen={state.isCartOpen}
          right
          customBurgerIcon={false}
          customCrossIcon={false}
          onStateChange={s => {
            // console.log(s)
            if (s.isOpen != state.isCartOpen)
              // dispatch({ type: "SET_CART_OPEN", isOpen: s.isOpen })
              dispatch({ type: "TOGGLE_CART_OPEN" })
          }}
        >
          <Cart />
        </BgMenu>
        <main>{children}</main>
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

        .footer-wrapper {
          overflow: auto;
          background: #f0f0f0;
        }

        main {
          margin: 0 auto 4rem;
          max-width: 1500px;
          padding: 0 1rem;
          padding-top: 8rem;
        }

        footer {
          margin: 2rem auto;
          max-width: 1500px;
          padding: 0 1rem;
        }

        @media screen and (min-width: 600px) {
          main {
            padding: 8.5rem 3rem 0;
          }

          footer {
            padding: 0 3rem;
          }
        }

        @media screen and (min-width: 1000px) {
          main {
            padding: 9rem 3rem 0;
          }

          footer {
            padding: 0 3rem;
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

        .ss-scroll {
          opacity: 1;
          width: 7px;
        }

        .bm-menu-wrap {
          height: calc(100% - 5rem) !important;
          bottom: 0;
          width: 100% !important;
        }

        .bm-menu {
          background-color: #fff;
          box-shadow: 2px 0 6px 2px #e0e0e0;
          padding: 2rem 1rem 0;
        }
        .bm-menu.ss-container {
          padding: 0;
        }
        .ss-content {
          padding: 2rem 1rem 0;
        }

        @media screen and (min-width: 550px) {
          .bm-menu-wrap {
            width: 500px !important;
          }

          .bm-menu {
            margin-left: 5px;
            padding: 2rem 2rem 0;
          }
          .bm-menu.ss-container {
            padding: 0;
          }
          .ss-content {
            padding: 2rem 2rem 0;
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
