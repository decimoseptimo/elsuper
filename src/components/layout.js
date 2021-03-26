import React, { useEffect } from "react"
import PropTypes from "prop-types"
import SimpleBar from "simplebar-react"
import "simplebar/dist/simplebar.min.css"
import _JSXStyle from "styled-jsx/style"

import Header from "./header"
import Overlay from "./overlay"
import useHasMounted from "./useHasMounted"
import Router, {
  useGetRoutes,
  setRoutes,
  useRoutesHistory,
  PrivateRoute,
} from "./router"
import Sidepanel from "./sidepanel"
import { useOpenSidepanels } from "./sidepanel/useOpenSidepanels"
import * as Routes from "./sidepanel/routes"
import {
  Categories,
  Cart,
  Shipping,
  Payment,
  Pay,
  MyAccount,
  Profile,
  Cards,
  Addresses,
  Orders,
  Login,
  Signup,
  PasswordReset,
} from "./sidepanel/panels"
import "./layout.css"

// Temp fix for "_JSXStyle is not defined" error
// https://github.com/vercel/styled-jsx/issues/695#issuecomment-805346577
if (typeof global !== "undefined") {
  Object.assign(global, { _JSXStyle })
}

const Layout = ({ location, children }) => {
  const { getFromRoutesHistory, setToRoutesHistory } = useRoutesHistory()
  const routes = useGetRoutes()
  const myAccountRoute = getFromRoutesHistory(Routes.MY_ACCOUNT)?.[1]
  const cartRoute = getFromRoutesHistory(Routes.CART)?.[1]
  const hasMounted = useHasMounted()
  const [openSidepanels, setOpenSidepanels] = useOpenSidepanels()

  const onTransitionEnd = (route) => {
    if (routes[0] === route) setOpenSidepanels(route)
    else setOpenSidepanels(route, "remove")
  }

  useEffect(() => {
    setToRoutesHistory(routes)
    if (!!routes[0]) setOpenSidepanels(routes[0])
  }, [routes.toString()])

  return (
    <>
      <div className="body">
        <div className="header-wrapper">
          <header>
            <Header
              location={location}
              setRoutes={setRoutes}
              getFromRoutesHistory={getFromRoutesHistory}
            />
          </header>
        </div>
        <Overlay
          _key={hasMounted}
          isActive={Routes.MAIN_SIDEPANELS.includes(routes[0])}
          onClick={(e) => setRoutes(location, routes)}
        />
        <Sidepanel
          _key={hasMounted}
          isActive={routes[0] === Routes.CATEGORIES}
          onTransitionEnd={() => onTransitionEnd(Routes.CATEGORIES)}
        >
          <SimpleBar style={{ maxHeight: "100%", width: "100%" }}>
            <Categories />
          </SimpleBar>
        </Sidepanel>
        <Sidepanel
          _key={hasMounted}
          right
          isActive={routes[0] === Routes.MY_ACCOUNT}
          onTransitionEnd={() => onTransitionEnd(Routes.MY_ACCOUNT)}
        >
          <SimpleBar style={{ maxHeight: "100%", width: "100%" }}>
            <Router
              isActive={openSidepanels[Routes.MY_ACCOUNT]}
              activeRoute={myAccountRoute}
            >
              <PrivateRoute
                setOpenSidepanels={setOpenSidepanels}
                default
                component={MyAccount}
              />
              <Login route={Routes.LOGIN} />
              <Signup route={Routes.SIGNUP} />
              <PasswordReset route={Routes.PASSWORD_RESET} />
              <PrivateRoute
                setOpenSidepanels={setOpenSidepanels}
                route={Routes.PROFILE}
                component={Profile}
              />
              <PrivateRoute
                setOpenSidepanels={setOpenSidepanels}
                route={Routes.ORDERS}
                component={Orders}
              />
              <PrivateRoute
                setOpenSidepanels={setOpenSidepanels}
                route={Routes.CARDS}
                component={Cards}
              />
              <PrivateRoute
                setOpenSidepanels={setOpenSidepanels}
                route={Routes.ADDRESSES}
                component={Addresses}
              />
            </Router>
          </SimpleBar>
        </Sidepanel>
        <Sidepanel
          _key={hasMounted}
          right
          className="cart"
          isActive={routes[0] === Routes.CART}
          onTransitionEnd={() => onTransitionEnd(Routes.CART)}
        >
          <SimpleBar style={{ maxHeight: "100%", width: "100%" }}>
            <Router
              isActive={openSidepanels[Routes.CART]}
              activeRoute={cartRoute}
            >
              <Cart default />
              <PrivateRoute
                setOpenSidepanels={setOpenSidepanels}
                route={Routes.SHIPPING}
                component={Shipping}
              />
              <PrivateRoute
                setOpenSidepanels={setOpenSidepanels}
                route={Routes.PAYMENT}
                component={Payment}
              />
              <PrivateRoute
                setOpenSidepanels={setOpenSidepanels}
                route={Routes.PAY}
                component={Pay}
              />
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
