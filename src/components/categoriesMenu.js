import React, { useContext } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import slugify from "slugify"
import { Collapse, Icon } from "antd"

import { getChildren, getCategoryTree } from "../utils"
import { MiscContext } from "../state/misc"

const Categorias = () => {
  const data = useStaticQuery(graphql`
    query {
      allCategoriesJson {
        edges {
          node {
            id
            name
            parent_id
          }
        }
      }
    }
  `)

  const [miscState, miscDispatch] = useContext(MiscContext)
  const propsCategories = data.allCategoriesJson.edges
  const categories = propsCategories.map(i => i.node)
  const rootCategories = getChildren(categories, null)
  const categoryTree = []

  rootCategories.forEach(i => {
    const allSubcategories = getCategoryTree(categories, i)
    categoryTree.push(...allSubcategories)
  })

  const { Panel } = Collapse

  const expandIcon = ({ isActive }) => (
    <Icon type="right" rotate={isActive ? 0 : 90} />
  )

  const ItemLink = ({ id, name, className }) => (
    <Link
      key={id}
      to={`/${slugify(name.toLowerCase())}`}
      className={className}
      activeClassName="active"
      onClick={event => {
        //prevent trigger collapse
        event.stopPropagation()
        miscDispatch({ type: "TOGGLE_CATEGORIES_OPEN" })
      }}
    >
      {name}
    </Link>
  )

  const getPanel = (id, name, children) => (
    <Panel key={id} header={<ItemLink id={id} name={name} />}>
      {generateCollapse(children)}
    </Panel>
  )

  const generateCollapse = obj => (
    <Collapse accordion expandIcon={expandIcon}>
      {obj.map(({ id, name, children }) => {
        return children ? (
          getPanel(id, name, children)
        ) : (
          <ItemLink id={id} name={name} className="ant-collapse-item" />
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
        }

        /* First level */

        .ant-collapse {
          background: none;
          border: none;
        }

        .ant-collapse .ant-collapse-content-box {
          padding: 0;
        }

        .ant-collapse a {
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
        .ant-collapse a:last-child {
          border-bottom: none;
        }
        .ant-collapse a.active {
          color: #ab4594;
          font-weight: 600;
        }
        
        .ant-collapse > .ant-collapse-item {
          border-color: #f6f6f6;
        }
        .ant-collapse > .ant-collapse-item:last-child {
          border-bottom: none;
        }

        .ant-collapse > .ant-collapse-item > .ant-collapse-header {
          padding: 0;
        }

        .ant-collapse .ant-collapse-header a {
          padding-left: 0;
          margin-left: 45px;
        }

        .ant-collapse .ant-collapse-header[aria-expanded="true"] i path {
          stroke-width: 30px;
          stroke: black;
        }

        /* Second level */

        .ant-collapse .ant-collapse-item-active > .ant-collapse-header {
          background: #f6f6f6;
          font-weight: 600;
        }

        .ant-collapse .ant-collapse-content {
          border-top: 1px solid #eee;
          background: #f6f6f6;
        }

        .ant-collapse .ant-collapse > .ant-collapse-item {
          border-color: #f6f6f6;
        }

        /* Third level */

        .ant-collapse
          .ant-collapse
          .ant-collapse-item-active
          > .ant-collapse-header {
          background: #eaeaea;
        }

        .ant-collapse .ant-collapse .ant-collapse-content {
          border-color: #dfdfdf;
          background: #eaeaea;
        }

        .ant-collapse .ant-collapse .ant-collapse > .ant-collapse-item {
          border-color: #eaeaea;
        }
      `}</style>
    </>
  )
}

export default Categorias
