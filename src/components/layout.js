import React /* useContext */ from "react"
import PropTypes from "prop-types"
import SimpleBar from "simplebar-react"
import "simplebar/dist/simplebar.min.css"
import { navigate } from "@reach/router" //enables navigate(-1) see: https://github.com/gatsbyjs/gatsby/issues/5987

import Router from "./router"
import Header from "./header"
import Overlay from "./overlay"
import Sidepanel from "./sidepanel"
import CategoriesMenu from "./panels/categoriesMenu"
// import Auth from "./panels/myAccount/auth"
import { useGetRoute, useGetRelativeUrl } from "./router"
import * as Routes from "./routes"
import Cart from "./panels/cart/"
import Shipping from "./panels/cart/shipping"
import Payment from "./panels/cart/payment"
import Pay from "./panels/cart/pay"
import MyAccount from "./panels/myAccount"
import Profile from "./panels/myAccount/profile"
import Cards from "./panels/myAccount/cards"
import Addresses from "./panels/myAccount/addresses"
import Orders from "./panels/myAccount/orders"
import "./layout.css"

const Layout = ({ location, children }) => {
  const [sidebarRoute, sidebarPageRoute] = useGetRoute()
  const sidebars = [Routes.CATEGORIES, Routes.MY_ACCOUNT, Routes.CART]
  const deroutedUrl = useGetRelativeUrl(false)

  // console.log(":")
  // console.log(deroutedUrl)
  // console.log(useGetRelativeUrl("a", "a"))
  // console.log(useGetRelativeUrl("a"))
  // console.log(useGetRelativeUrl(null))
  // console.log(useGetRelativeUrl(undefined))
  // console.log(useGetRelativeUrl(""))
  // console.log(useGetRelativeUrl())

  return (
    <>
      <div className="body">
        <div className="header-wrapper">
          <header>
            <Header location={location} activeSidebar={sidebarRoute} />
          </header>
        </div>
        <Overlay
          isActive={sidebars.includes(sidebarRoute)}
          onClick={(e) => navigate(deroutedUrl)}
        />
        <Sidepanel isActive={sidebarRoute === Routes.CATEGORIES}>
          <SimpleBar style={{ maxHeight: "100%", width: "100%" }}>
            <CategoriesMenu />
          </SimpleBar>
        </Sidepanel>
        <Sidepanel right isActive={sidebarRoute === Routes.MY_ACCOUNT}>
          <SimpleBar style={{ maxHeight: "100%", width: "100%" }}>
            <Router activeRoute={sidebarPageRoute}>
              <MyAccount default />
              {/* <Auth route={Routes.AUTH} /> */}
              <Profile private route={Routes.PROFILE} />
              <Orders private route={Routes.ORDERS} />
              <Cards private route={Routes.CARDS} />
              <Addresses private route={Routes.ADDRESSES} />
            </Router>
          </SimpleBar>
        </Sidepanel>
        <Sidepanel right isActive={sidebarRoute === Routes.CART}>
          <SimpleBar style={{ maxHeight: "100%", width: "100%" }}>
            <Router activeRoute={sidebarPageRoute}>
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
