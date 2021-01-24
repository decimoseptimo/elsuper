import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import SimpleBar from "simplebar-react"
import "simplebar/dist/simplebar.min.css"
import { navigate } from "@reach/router" //enables navigate(-1) see: https://github.com/gatsbyjs/gatsby/issues/5987

import Header from "./header"
import Overlay from "./overlay"
// import Auth from "./panels/myAccount/auth"
import Router, {
  useGetRoutes,
  useGetRelativeUrl,
  // getFromRoutesHistory,
  // setToRoutesHistory,
} from "./router"
import * as Routes from "./routes"
import Sidepanel from "./sidepanel"
import Categories from "./sidepanel/panels/categories"
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
  const [routesHistory, setRoutesHistory] = useState([])

  /**
   * Get routes from routesHistory
   * @param {string} route
   * @returns {Array<string> | undefined}
   */
  const getFromRoutesHistory = (route) => {
    const index = routesHistory.findIndex((el) => el[0] === route)
    return routesHistory?.[index]
  }

  /**
   * Add routes to routesHistory
   * @param {Array<string>} route
   */
  const setToRoutesHistory = (route) => {
    //no route, bail
    if (!route.length) return
    //if found, replace
    const index = routesHistory.findIndex((el) => el[0] === route[0])
    if (index >= 0) {
      const newArray = [...routesHistory]
      newArray[index] = route
      setRoutesHistory(newArray)
    }
    //else push
    else setRoutesHistory([...routesHistory, route])
  }

  const routes = useGetRoutes()
  const sidepanelRoute = routes[0]
  const myAccountRoute = getFromRoutesHistory(Routes.MY_ACCOUNT)?.[1]
  const cartRoute = getFromRoutesHistory(Routes.CART)?.[1]
  const deroutedUrl = useGetRelativeUrl()

  useEffect(() => {
    setToRoutesHistory(routes)
  }, [JSON.stringify(routes)])

  return (
    <>
      <div className="body">
        <div className="header-wrapper">
          <header>
            <Header
              location={location}
              activeRoute={sidepanelRoute}
              routesHistory={routesHistory}
              getFromRoutesHistory={getFromRoutesHistory}
            />
          </header>
        </div>
        <Overlay
          isActive={Routes.MAIN_SIDEPANELS.includes(sidepanelRoute)}
          onClick={(e) => navigate(deroutedUrl)}
        />
        <Sidepanel isActive={sidepanelRoute === Routes.CATEGORIES}>
          <SimpleBar style={{ maxHeight: "100%", width: "100%" }}>
            <Categories />
          </SimpleBar>
        </Sidepanel>
        <Sidepanel right isActive={sidepanelRoute === Routes.MY_ACCOUNT}>
          <SimpleBar style={{ maxHeight: "100%", width: "100%" }}>
            <Router activeRoute={myAccountRoute}>
              <MyAccount default />
              {/* <Auth route={Routes.AUTH} /> */}
              <Profile private route={Routes.PROFILE} />
              <Orders private route={Routes.ORDERS} />
              <Cards private route={Routes.CARDS} />
              <Addresses private route={Routes.ADDRESSES} />
            </Router>
          </SimpleBar>
        </Sidepanel>
        <Sidepanel right isActive={sidepanelRoute === Routes.CART}>
          <SimpleBar style={{ maxHeight: "100%", width: "100%" }}>
            <Router activeRoute={cartRoute}>
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
