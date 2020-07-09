import React /* useContext */ from "react"
import PropTypes from "prop-types"
import SimpleBar from "simplebar-react"
import "simplebar/dist/simplebar.min.css"
// import { navigate } from "gatsby"
import { navigate } from "@reach/router" //enables navigate(-1) see: https://github.com/gatsbyjs/gatsby/issues/5987

import Header from "./header"
import Overlay from "./overlay"
import Sidepanel from "./sidepanel"
import Menu from "./panels/categoriesMenu"
import UserAccount from "./panels/userAccount/userAccount"
import Cart from "./panels/cart/cart"
import "./layout.css"

const Layout = ({ location, children }) => {
  const activeSidebar = location.state?.activeSidebar

  return (
    <>
      <div className="body">
        <div className="header-wrapper">
          <header>
            <Header location={location} />
          </header>
        </div>
        <Overlay isActive={activeSidebar} onClick={(e) => navigate(-1)} />
        <Sidepanel isActive={activeSidebar === "categoriesMenu"}>
          <SimpleBar style={{ maxHeight: "100%", width: "100%" }}>
            <Menu />
          </SimpleBar>
        </Sidepanel>
        <Sidepanel right isActive={activeSidebar === "userAccount"}>
          <SimpleBar style={{ maxHeight: "100%", width: "100%" }}>
            <UserAccount />
          </SimpleBar>
        </Sidepanel>
        <Sidepanel right isActive={activeSidebar === "cart"}>
          <SimpleBar style={{ maxHeight: "100%", width: "100%" }}>
            <Cart />
          </SimpleBar>
        </Sidepanel>
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
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
