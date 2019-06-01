/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout2.css"
import "semantic-ui-css/semantic.min.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="body">
          <div className="header-wrapper">
            <Header />
          </div>
          <main>{children}</main>
          <div className="footer-wrapper">
            <footer>
              ELSUPER ©{new Date().getFullYear()} - Todos los derechos
              reservados.
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
          }

          .footer-wrapper {
            overflow: auto;
            background: #f0f0f0;
          }

          main {
            margin: 0 auto 4rem;
            max-width: 1500px;
            padding: 0 1rem;
          }

          footer {
            margin: 2rem auto;
            max-width: 1500px;
            padding: 0 1rem;
          }

          @media screen and (min-width: 1000px) {
            main,
            footer {
              padding: 0 3rem;
            }
          }
        `}</style>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
