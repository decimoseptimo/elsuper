import React, { useContext /*, useEffect*/ } from "react"
import PropTypes from "prop-types"
import BgMenu from "react-burger-menu/lib/menus/slide"
import "antd/dist/antd.css"
import "semantic-ui-css/semantic.min.css"

// import BgMenu2 from "./BgMenu2"
import Menu from "./categoriesMenu"
import Cart from "./cart"
import Header from "./header"
import { MiscContext } from "../state/misc"
import "./layout2.css"

import SimpleBar from "simplebar-react"
import "simplebar/dist/simplebar.min.css"
// import MobileDetect from "mobile-detect"

const Layout = ({ children }) => {
  const [state, dispatch] = useContext(MiscContext)

  // useEffect(() => {
  //   const md = new MobileDetect(window.navigator.userAgent)
  // }, [])

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
          isOpen={state.isCatalogOpen}
          // left
          customBurgerIcon={false}
          customCrossIcon={false}
          onStateChange={s => {
            if (s.isOpen !== state.isCatalogOpen)
              dispatch({ type: "TOGGLE_CATALOG_OPEN" })
          }}
        >
          {/*<SimpleBar style={{ maxHeight: "100%", width: "100%" }}>*/}
          <div className="bm-item">
            <Menu onMenuClick={() => dispatch({ type: "CLOSE_CATALOG" })} />
          </div>
          {/*</SimpleBar>*/}
        </BgMenu>
        <BgMenu
          className="cart"
          isOpen={state.isCartOpen}
          right
          customBurgerIcon={false}
          customCrossIcon={false}
          onStateChange={s => {
            if (s.isOpen !== state.isCartOpen)
              // dispatch({ type: "SET_CART_OPEN", isOpen: s.isOpen })
              dispatch({ type: "TOGGLE_CART_OPEN" })
          }}
        >
          {/*<SimpleBar style={{ maxHeight: "100%", width: "100%" }}>*/}
          <div className="bm-item">
            <Cart />
          </div>
          {/*</SimpleBar>*/}
        </BgMenu>

        {/*<BgMenu2*/}
        {/*  className="catalog2"*/}
        {/*  isOpen={state.isCatalogOpen}*/}
        {/*  onStateChange={s => {*/}
        {/*    if (s.isOpen !== state.isCatalogOpen)*/}
        {/*      dispatch({ type: "TOGGLE_CATALOG_OPEN" })*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <SimpleBar style={{ maxHeight: "100%", width: "100%" }}>*/}
        {/*    <Menu onMenuClick={() => dispatch({ type: "CLOSE_CATALOG" })} />*/}
        {/*  </SimpleBar>*/}
        {/*</BgMenu2>*/}
        {/*<SimpleBar style={{ maxHeight: "100%", width: "100%" }}>*/}
        {/*  <Cart />*/}
        {/*</SimpleBar>*/}
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
        .simplebar-content {
          padding: 2rem 2rem 2rem !important;
          // padding: 0 1rem !important;
        }

        .bm-menu-wrap {
          position: fixed;
          top: 0;
          bottom: 0;
          // border: 1px solid red;
          width: 100% !important;
          // margin-top: 4.8em;
          padding-top: 4.8em;
        }

        .bm-menu {
          background-color: #fff;
          box-shadow: 0px 0 6px 0px #e0e0e0;
        }

        .bm-item-list,
        .bm-item {
          outline: none !important;
        }

        //Catalog
        .catalog .bm-item {
          padding: 2rem 2rem 2rem;
        }

        .cart .bm-item {
          padding: 2rem 1rem 0;
        }

        @media screen and (min-width: 300px) {
          .catalog {
            width: 270px !important;
          }
        }

        @media screen and (min-width: 550px) {
          .bm-menu-wrap.cart {
            width: 500px !important;
          }

          .catalog .bm-item {
            padding: 2rem 2rem 2rem;
          }

          .cart .bm-item {
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
