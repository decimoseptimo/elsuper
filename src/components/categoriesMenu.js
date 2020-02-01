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
    <Icon type="right" rotate={isActive ? -90 : 90} />
  )

  const getLink = (id, name) => (
    <Link
      key={id}
      to={`/${slugify(name.toLowerCase())}`}
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
    <Panel key={id} header={getLink(id, name)}>
      {generateCollapse(children)}
    </Panel>
  )

  const generateCollapse = obj => (
    <Collapse accordion expandIcon={expandIcon}>
      {obj.map(({ id, name, children }) => {
        return children ? getPanel(id, name, children) : getLink(id, name)
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

        .ant-collapse {
          background: none;
          border: none;
        }

        .ant-collapse-content {
          background: #eee;
        }

        .ant-collapse-content .ant-collapse-content {
          background: #e3e3e3;
        }

        .ant-collapse-content > .ant-collapse-content-box {
          padding: 0;
        }

        .ant-collapse a {
          color: #4183c4;
          text-decoration: none;
          position: relative;
          padding: 12px 16px;
          padding-left: 45px;
          color: rgba(0, 0, 0, 0.85);
          line-height: 22px;
          cursor: pointer;
          -webkit-transition: all 0.3s;
          transition: all 0.3s;
          display: block;
          border-bottom: 1px solid #d9d9d9;
        }

        .ant-collapse-header a {
          padding-left: 0;
          margin-left: 45px;
        }

        .ant-collapse > .ant-collapse-item > .ant-collapse-header {
          padding: 0;
        }
        .ant-collapse a:last-child {
          border-bottom: none;
        }

        .ant-collapse > .ant-collapse-item:last-child {
          border-bottom: none;
        }
      `}</style>
    </>
  )
}

export default Categorias
