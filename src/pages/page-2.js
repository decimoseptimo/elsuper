import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>

    <div className="parent">
      <div className="child one">
        <Image />
      </div>
      <div className="child two">Lorem ipsum dolor sit amet</div>
    </div>

    <Link to="/">Go back to the homepage</Link>
    <style jsx>{`
      .parent {
        outline: 1px solid black;
        display: flex;
      }

      .child {
        outline: 1px solid red;
        // flex: 1;
      }

      .child.one {
        // flex: 1;
        // width: 100%;
        max-width: 400px;
        width: 100%;
      }

      .child.two {
        // flex: 1;
      }
    `}</style>
  </Layout>
)

export default SecondPage
