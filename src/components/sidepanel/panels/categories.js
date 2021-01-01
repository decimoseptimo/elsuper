import React, { useContext } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import slugify from "slugify"
import Collapse from "rc-collapse"
import "rc-collapse/assets/index.css"
import { IconContext } from "react-icons"
import { AiOutlineRight } from "react-icons/ai"

import { getChildren, getCategoryTree } from "../../../utils"
import { MiscContext } from "../../../state/misc"

const Categories = () => {
  const data = useStaticQuery(graphql`
    query {
      allCategoriesJson {
        edges {
          node {
            _id
            name
            parent_id
          }
        }
      }
    }
  `)

  const [/* miscState */, miscDispatch] = useContext(MiscContext)
  const propsCategories = data.allCategoriesJson.edges
  const categories = propsCategories.map((i) => i.node)
  const rootCategories = getChildren(categories, null)
  const categoryTree = []

  rootCategories.forEach((i) => {
    const allSubcategories = getCategoryTree(categories, i)
    categoryTree.push(...allSubcategories)
  })

  const { Panel } = Collapse

  const expandIcon = (props) =>
    <IconContext.Provider
      value={!props.isActive ? { style: { transform: "rotate(90deg)" } } : {}}
    >
      <AiOutlineRight />
    </IconContext.Provider>

  const ItemLink = ({ name, className='' }) => (
    <Link
      to={`/${slugify(name.toLowerCase())}`}
      replace
      className={className}
      activeClassName="active"
      onClick={(event) => {
        //prevent trigger collapse
        event.stopPropagation()
        miscDispatch({ type: "TOGGLE_CATEGORIES_OPEN" })
      }}
    >
      {name}
    </Link>
  )

  const getPanel = (_id, name, children) => (
    <Panel key={_id} header={<ItemLink name={name} />}>
      {generateCollapse(children)}
    </Panel>
  )

  const generateCollapse = (obj) => (
    <Collapse accordion expandIcon={expandIcon}>
      {obj.map(({ _id, name, children }) => {
        return children ? (
          getPanel(_id, name, children)
        ) : (
          <ItemLink
            key={_id}
            name={name}
            className="rc-collapse-item"
          />
        )
      })}
    </Collapse>
  )

  return (
    <>
      <h2 className="categoryTitle">Categorias</h2>
      {generateCollapse(categoryTree)}
      <style jsx global>{`
        .categoryTitle {
          text-transform: uppercase;
          font-size: 1rem;
          font-family: Lato, Helvetica Neue, Arial, Helvetica, sans-serif;
        }

        /* First level */

        .rc-collapse {
          background: none;
          border: none;
        }

        .rc-collapse .rc-collapse-content-box {
          margin: 0;
        }

        .rc-collapse a {
          display: block;
          position: relative;
          padding: 12px 16px;
          padding-left: 45px;
          line-height: 22px;
          cursor: pointer;
          color: #4183c4;
          color: rgba(0, 0, 0, 0.85);
          text-decoration: none;
        }
        .rc-collapse a:last-child {
          border-bottom: none;
        }
        .rc-collapse a.active {
          color: #ab4594;
          font-weight: 600;
        }

        .rc-collapse > .rc-collapse-item {
          border-color: #f6f6f6;
        }
        .rc-collapse > .rc-collapse-item:last-child {
          border-bottom: none;
        }

        .rc-collapse > .rc-collapse-item > .rc-collapse-header {
          padding: 0;
        }

        .rc-collapse .rc-collapse-header:focus {
          outline: none;
        }

        .rc-collapse .rc-collapse-header a {
          padding-left: 0;
          margin-left: 1rem;
        }

        .rc-collapse svg {
          margin-left: 1rem;
          color: #222;
          transition: transform 0.24s;
        }

        .rc-collapse .rc-collapse-header[aria-expanded="true"] svg path {
          stroke-width: 30px;
          stroke: black;
        }

        /* Second level */

        .rc-collapse .rc-collapse-item-active > .rc-collapse-header {
          background: #f6f6f6;
          font-weight: 600;
        }

        .rc-collapse .rc-collapse-content {
          border-top: 1px solid #eee;
          background: #f6f6f6;
          padding: 0;
        }

        .rc-collapse .rc-collapse > .rc-collapse-item {
          border-color: #f6f6f6;
        }

        /* Third level */

        .rc-collapse
          .rc-collapse
          .rc-collapse-item-active
          > .rc-collapse-header {
          background: #eaeaea;
        }

        .rc-collapse .rc-collapse .rc-collapse-content {
          border-color: #dfdfdf;
          background: #eaeaea;
        }

        .rc-collapse .rc-collapse .rc-collapse > .rc-collapse-item {
          border-color: #eaeaea;
        }
      `}</style>
    </>
  )
}

export default Categories
