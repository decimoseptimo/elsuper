import React/* , {useContext} */ from "react"
import PropTypes from "prop-types"
import SimpleBar from "simplebar-react"
import "simplebar/dist/simplebar.min.css"
import { navigate } from "@reach/router" //enables navigate(-1) see: https://github.com/gatsbyjs/gatsby/issues/5987

import Header from "./header"
import Overlay from "./overlay"
// import Auth from "./panels/myAccount/auth"
import Router, { useGetRoute, useGetRelativeUrl } from "./router"
import * as Routes from "./routes"
import Sidepanel from "./sidepanel"
import CategoriesMenu from "./sidepanel/panels/categories"
import Cart from "./sidepanel/panels/cart"
import Shipping from "./sidepanel/panels/cart/shipping"
import Payment from "./sidepanel/panels/cart/payment"
import Pay from "./sidepanel/panels/cart/pay"
import MyAccount from "./sidepanel/panels/myAccount"
import Profile from "./sidepanel/panels/myAccount/profile"
import Cards from "./sidepanel/panels/myAccount/cards"
import Addresses from "./sidepanel/panels/myAccount/addresses"
import Orders from "./sidepanel/panels/myAccount/orders"
import "./layout.css"

const Layout = ({ location, children }) => {
  const activeRoute = useGetRoute()
  const deroutedUrl = useGetRelativeUrl(false)
  const sidepanels = [Routes.CATEGORIES, Routes.MY_ACCOUNT, Routes.CART]

  return (
    <>
      <div className="body">
        <div className="header-wrapper">
          <header>
            <Header location={location} activeSidepanel={activeRoute[0]} />
          </header>
        </div>
        <Overlay
          isActive={sidepanels.includes(activeRoute[0])}
          onClick={(e) => navigate(deroutedUrl)}
        />
        <Sidepanel isActive={activeRoute[0] === Routes.CATEGORIES}>
          <SimpleBar style={{ maxHeight: "100%", width: "100%" }}>
            <CategoriesMenu />
          </SimpleBar>
        </Sidepanel>
        <Sidepanel right isActive={activeRoute[0] === Routes.MY_ACCOUNT}>
          <SimpleBar style={{ maxHeight: "100%", width: "100%" }}>
            <Router activeRoute={activeRoute[1]}>
              <MyAccount default />
              {/* <Auth route={Routes.AUTH} /> */}
              <Profile private route={Routes.PROFILE} />
              <Orders private route={Routes.ORDERS} />
              <Cards private route={Routes.CARDS} />
              <Addresses private route={Routes.ADDRESSES} />
            </Router>
          </SimpleBar>
        </Sidepanel>
        <Sidepanel right isActive={activeRoute[0] === Routes.CART}>
          <SimpleBar style={{ maxHeight: "100%", width: "100%" }}>
            <Router activeRoute={activeRoute[1]}>
              <Cart default />
              {/* <Auth route={Routes.AUTH} /> */}
              <Shipping private route={Routes.SHIPPING} />
              <Payment private route={Routes.PAYMENT} />
              <Pay private route={Routes.PAY} />
            </Router>
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
