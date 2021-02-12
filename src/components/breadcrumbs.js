import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import slugify from "slugify"

const Breadcrumbs = ({ data }) => (
  <>
    <div className="breadcrumbs">
      <div className="breadcrumbs-wrapper">
        <span className="item" key="0">
          <Link to="/">Inicio</Link>
        </span>
        {data.map((i) => (
          <span className="item" key={i._id}>
            <Link to={`/${slugify(i.name.toLowerCase())}/`}>{i.name}</Link>
          </span>
        ))}
      </div>
    </div>
    <style jsx global>{`
      .breadcrumbs {
        margin-top: -2.5rem;
        margin-bottom: 1rem;
      }

      .breadcrumbs-wrapper {
        padding-left: 5px;
      }
      .breadcrumbs .item {
        color: #aaa;
      }

      .breadcrumbs .item a {
        display: inline-block;
        text-transform: uppercase;
        font-size: 11px;
        color: #bbb;
        font-weight: bold;
      }
      .breadcrumbs .item a:after {
        content: "/";
        position: relative;
        padding: 0 5px;
      }
    `}</style>
  </>
)

Breadcrumbs.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Breadcrumbs
